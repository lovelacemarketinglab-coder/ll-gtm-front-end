import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  businessName?: unknown;
  location?: unknown;
  message?: unknown;
  website?: unknown;
};

const limits = {
  firstName: 80,
  lastName: 80,
  email: 254,
  businessName: 120,
  location: 120,
  message: 2000,
} as const;

function readField(payload: ContactPayload, key: keyof typeof limits) {
  const value = payload[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > limits[key]) return null;
  return trimmed;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const firstName = readField(payload, "firstName");
  const lastName = readField(payload, "lastName");
  const email = readField(payload, "email");
  const businessName = readField(payload, "businessName");
  const location = readField(payload, "location");
  const message = readField(payload, "message");

  if (!firstName || !lastName || !email || !businessName || !location || !message || message.length < 10) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "LL GTM Studio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return NextResponse.json({ error: "Contact delivery is not configured." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New LL GTM inquiry from ${businessName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Business: ${businessName}`,
      `Location: ${location}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Contact email failed", error.name);
    return NextResponse.json({ error: "Email delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
