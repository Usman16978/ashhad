import { site } from "./site";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type MailArgs = {
  subject: string;
  replyTo?: string;
  rows: Array<[label: string, value: string]>;
};

/**
 * Sends a notification email through Resend when RESEND_API_KEY is configured.
 * Without credentials it logs the submission (useful for local preview) and
 * still returns success so the form works out of the box.
 */
export async function sendNotification({ subject, replyTo, rows }: MailArgs) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.NOTIFICATION_EMAIL ?? process.env.TRIAL_TO_EMAIL ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (!apiKey || recipients.length === 0) {
    console.info(
      "[website] Form submission (email not configured):",
      JSON.stringify({ subject, replyTo, rows }, null, 2)
    );
    return { ok: true, skipped: true as const };
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#17251f">
      <div style="background:#0f322a;padding:24px 28px">
        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#dbbc72">${escapeHtml(
          site.name
        )}</p>
        <h1 style="margin:8px 0 0;font-size:22px;font-weight:600;color:#faf5ea">${escapeHtml(subject)}</h1>
      </div>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:12px 28px;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f;width:38%;vertical-align:top">${escapeHtml(
              label
            )}</td>
            <td style="padding:12px 28px;border-bottom:1px solid #eee5d3;font-size:13px;color:#17251f">${escapeHtml(
              value
            )}</td>
          </tr>`
          )
          .join("")}
      </table>
      <p style="padding:18px 28px;font-size:11px;color:#8f9a93">
        Sent automatically from the ${escapeHtml(site.name)} website.
      </p>
    </div>
  `;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM ?? "Al-Ashhad Website <onboarding@resend.dev>",
        to: recipients,
        subject,
        reply_to: replyTo,
        html,
      }),
    });

    if (!res.ok) {
      console.error("[website] Resend error:", res.status, await res.text());
      return {
        ok: false as const,
        message: "We could not deliver your message right now. Please WhatsApp us instead.",
      };
    }

    return { ok: true as const };
  } catch (error) {
    console.error("[website] Resend request failed:", error);
    return {
      ok: false as const,
      message: "We could not deliver your message right now. Please WhatsApp us instead.",
    };
  }
}

/**
 * Sends the applicant a confirmation of their 3 free trial classes.
 * In demo mode (no Resend key) it logs the message and still reports success.
 */
export async function sendTrialConfirmation({
  email,
  name,
  course,
  preferredTime,
  reference,
}: {
  email: string;
  name: string;
  course: string;
  preferredTime: string;
  reference: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[website] Trial confirmation (email not configured):", {
      email,
      name,
      course,
      preferredTime,
      reference,
    });
    return { ok: true as const, skipped: true as const };
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#17251f">
      <div style="background:#0f322a;padding:26px 28px">
        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#dbbc72">${escapeHtml(
          site.name
        )}</p>
        <h1 style="margin:10px 0 0;font-size:24px;font-weight:600;color:#faf5ea">Your 3 free trial classes are confirmed</h1>
      </div>
      <div style="padding:24px 28px">
        <p style="margin:0 0 14px;font-size:14px;line-height:1.7">Assalamu alaikum ${escapeHtml(
          name
        )},</p>
        <p style="margin:0 0 18px;font-size:14px;line-height:1.7">
          Thank you for requesting a free trial with ${escapeHtml(site.name)}. We have received your
          details and our admissions team will contact you on WhatsApp or at this email within one
          working day to confirm your teacher and class time.
        </p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:18px">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Course</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              course
            )}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Preferred time</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              preferredTime
            )}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Reference</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              reference
            )}</td>
          </tr>
        </table>
        <p style="margin:0 0 8px;font-size:13px;line-height:1.7">
          No payment details were taken. If you have any questions, reply to this email or message us on WhatsApp at
          <a href="https://wa.me/${site.whatsappNumber}" style="color:#96702f">+${escapeHtml(
            site.whatsappNumber
          )}</a>.
        </p>
        <p style="margin:18px 0 0;font-size:12px;color:#8f9a93">JazakAllahu khairan,<br />${escapeHtml(
          site.name
        )}</p>
      </div>
    </div>
  `;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM ?? "Al-Ashhad Website <onboarding@resend.dev>",
        to: [email],
        subject: `Your 3 free trial classes are confirmed — ${site.shortName}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[website] Trial confirmation error:", res.status, await res.text());
      return { ok: false as const };
    }
    return { ok: true as const };
  } catch (error) {
    console.error("[website] Trial confirmation failed:", error);
    return { ok: false as const };
  }
}

/**
 * Confirms a paid plan request and explains the next payment step.
 * Demo mode logs and still reports success.
 */
export async function sendEnrollmentConfirmation({
  email,
  name,
  planName,
  schedule,
  price,
  reference,
}: {
  email: string;
  name: string;
  planName: string;
  schedule: string;
  price: string;
  reference: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info("[website] Plan confirmation (email not configured):", {
      email,
      name,
      planName,
      schedule,
      price,
      reference,
    });
    return { ok: true as const, skipped: true as const };
  }

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;color:#17251f">
      <div style="background:#0f322a;padding:26px 28px">
        <p style="margin:0;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#dbbc72">${escapeHtml(
          site.name
        )}</p>
        <h1 style="margin:10px 0 0;font-size:24px;font-weight:600;color:#faf5ea">Your plan request is received</h1>
      </div>
      <div style="padding:24px 28px">
        <p style="margin:0 0 14px;font-size:14px;line-height:1.7">Assalamu alaikum ${escapeHtml(
          name
        )},</p>
        <p style="margin:0 0 18px;font-size:14px;line-height:1.7">
          Thank you for choosing ${escapeHtml(planName)}. Our admissions team will message you on
          WhatsApp within one working day to confirm payment details, your teacher and your first
          class — in shaa Allah.
        </p>
        <table style="width:100%;border-collapse:collapse;margin-bottom:18px">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Plan</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              planName
            )}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Schedule</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              schedule
            )}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Fee</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              price
            )}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:12px;color:#6b786f">Reference</td>
            <td style="padding:10px 0;border-bottom:1px solid #eee5d3;font-size:13px">${escapeHtml(
              reference
            )}</td>
          </tr>
        </table>
        <p style="margin:0;font-size:13px;line-height:1.7">
          Questions? Reply to this email or message us on WhatsApp at
          <a href="https://wa.me/${site.whatsappNumber}" style="color:#96702f">+${escapeHtml(
            site.whatsappNumber
          )}</a>.
        </p>
        <p style="margin:18px 0 0;font-size:12px;color:#8f9a93">JazakAllahu khairan,<br />${escapeHtml(
          site.name
        )}</p>
      </div>
    </div>
  `;

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM ?? "Al-Ashhad Website <onboarding@resend.dev>",
        to: [email],
        subject: `Your ${planName} request — ${site.shortName}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[website] Plan confirmation error:", res.status, await res.text());
      return { ok: false as const };
    }
    return { ok: true as const };
  } catch (error) {
    console.error("[website] Plan confirmation failed:", error);
    return { ok: false as const };
  }
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}
