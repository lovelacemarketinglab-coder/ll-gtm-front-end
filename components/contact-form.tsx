"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-describedby="form-note form-status">
      <div className="field-row">
        <label>First name<input name="firstName" autoComplete="given-name" required maxLength={80} /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" required maxLength={80} /></label>
      </div>
      <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} /></label>
      <label>Business name<input name="businessName" autoComplete="organization" required maxLength={120} /></label>
      <label>Business location<input name="location" placeholder="City, Oregon" autoComplete="address-level2" required maxLength={120} /></label>
      <label>What would you like help with?<textarea name="message" rows={5} required minLength={10} maxLength={2000} /></label>
      <label className="honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send inquiry"}
      </button>
      <p className="form-note" id="form-note">Your information is used only to respond to this inquiry.</p>
      <p className={`form-status ${status}`} id="form-status" role="status" aria-live="polite">
        {status === "success" && "Thanks—your inquiry was sent. I’ll be in touch soon."}
        {status === "error" && "That didn’t send. Please try again in a moment."}
      </p>
    </form>
  );
}
