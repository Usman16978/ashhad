import { NextResponse } from "next/server";
import {
  clean,
  isValidEmail,
  sendEnrollmentConfirmation,
  sendNotification,
} from "@/lib/mail";
import { getPlan } from "@/lib/site";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    planId: clean(payload.planId, 60),
    name: clean(payload.name, 120),
    email: clean(payload.email, 180),
    phone: clean(payload.phone, 40),
    country: clean(payload.country, 80),
    message: clean(payload.message, 2000),
  };

  if (!data.name || !data.email || !data.phone || !data.country) {
    return NextResponse.json(
      { ok: false, message: "Please complete all required fields." },
      { status: 422 }
    );
  }
  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const plan = getPlan(data.planId);
  if (!plan || plan.priceUsd === 0) {
    return NextResponse.json({ ok: false, message: "Please choose a valid plan." }, { status: 422 });
  }

  const price = `$${plan.priceUsd} / £${plan.priceGbp} per month`;
  const reference = `AA-${Date.now().toString(36).toUpperCase()}`;

  const result = await sendNotification({
    subject: `Plan request — ${plan.name} — ${data.name}`,
    replyTo: data.email,
    rows: [
      ["Plan", plan.name],
      ["Schedule", plan.schedule],
      ["Fee", price],
      ["Name", data.name],
      ["Email", data.email],
      ["WhatsApp / phone", data.phone],
      ["Country", data.country],
      ["Notes", data.message || "—"],
      ["Reference", reference],
    ],
  });

  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: result.message ?? "We could not send your request right now." },
      { status: 502 }
    );
  }

  await sendEnrollmentConfirmation({
    email: data.email,
    name: data.name.split(" ")[0],
    planName: plan.name,
    schedule: plan.schedule,
    price,
    reference,
  });

  return NextResponse.json({
    ok: true,
    reference,
    planName: plan.name,
    schedule: plan.schedule,
    price,
    firstName: data.name.split(" ")[0],
  });
}
