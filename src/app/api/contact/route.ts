import { NextResponse } from "next/server";
import { clean, isValidEmail, sendNotification } from "@/lib/mail";

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
    name: clean(payload.name, 120),
    email: clean(payload.email, 180),
    phone: clean(payload.phone, 40),
    subject: clean(payload.subject, 140),
    message: clean(payload.message, 3000),
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
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

  const result = await sendNotification({
    subject: `Website enquiry — ${data.subject}`,
    replyTo: data.email,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone / WhatsApp", data.phone || "—"],
      ["Subject", data.subject],
      ["Message", data.message],
    ],
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, message: result.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
