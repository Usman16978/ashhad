import { NextResponse } from "next/server";
import { clean, isValidEmail, sendNotification, sendTrialConfirmation } from "@/lib/mail";

const REQUIRED = [
  "studentName",
  "email",
  "phone",
  "country",
  "studentAge",
  "course",
  "preferredTime",
] as const;

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions.
  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const data = {
    studentName: clean(payload.studentName, 120),
    parentName: clean(payload.parentName, 120),
    email: clean(payload.email, 180),
    phone: clean(payload.phone, 40),
    country: clean(payload.country, 80),
    studentAge: clean(payload.studentAge, 40),
    course: clean(payload.course, 120),
    preferredTime: clean(payload.preferredTime, 80),
    message: clean(payload.message, 2000),
  };

  for (const key of REQUIRED) {
    if (!data[key]) {
      return NextResponse.json(
        { ok: false, message: "Please complete all required fields." },
        { status: 422 }
      );
    }
  }

  if (!isValidEmail(data.email)) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const result = await sendNotification({
    subject: `Free trial request — ${data.studentName}`,
    replyTo: data.email,
    rows: [
      ["Student name", data.studentName],
      ["Parent / guardian", data.parentName || "—"],
      ["Email", data.email],
      ["WhatsApp / phone", data.phone],
      ["Country", data.country],
      ["Student age", data.studentAge],
      ["Course", data.course],
      ["Preferred time", data.preferredTime],
      ["Notes", data.message || "—"],
    ],
  });

  if (!result.ok) {
    return NextResponse.json({ ok: false, message: result.message }, { status: 502 });
  }

  // Confirmation to the applicant (3 free days). Non-blocking for the user.
  const reference = `AA-${Date.now().toString(36).toUpperCase()}`;
  await sendTrialConfirmation({
    email: data.email,
    name: data.studentName.split(" ")[0],
    course: data.course,
    preferredTime: data.preferredTime,
    reference,
  });

  return NextResponse.json({
    ok: true,
    reference,
    firstName: data.studentName.split(" ")[0],
    course: data.course,
    preferredTime: data.preferredTime,
  });
}
