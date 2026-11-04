"use client";
import { useState } from "react";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/data";

// Works on any static host with no server: the enquiry opens in the visitor's email app or WhatsApp.
// To receive submissions directly, connect a form service (e.g. Formspree) — see README.md.
export default function ContactForm() {
  const [f, setF] = useState({ name: "", org: "", phone: "", email: "", service: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const body = `Name: ${f.name}\nOrganisation: ${f.org}\nPhone: ${f.phone}\nEmail: ${f.email}\nService: ${f.service}\n\n${f.message}`;
  const subject = `Website enquiry: ${f.service || "General"} — ${f.org || f.name}`;
  const valid = f.name.trim() && (f.phone.trim() || f.email.trim()) && f.message.trim();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    window.location.href = `mailto:${SITE.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  const sendWhatsApp = () => {
    if (!valid) return;
    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`, "_blank", "noopener");
  };

  return (
    <form className="form" onSubmit={sendEmail} aria-labelledby="form-h">
      <h2 id="form-h" style={{ fontSize: "1.5rem" }}>Request a quote</h2>
      <div className="row">
        <label>Full name *<input required autoComplete="name" value={f.name} onChange={set("name")} /></label>
        <label>Organisation<input autoComplete="organization" value={f.org} onChange={set("org")} /></label>
      </div>
      <div className="row">
        <label>Phone / WhatsApp<input type="tel" autoComplete="tel" placeholder="+256 ..." value={f.phone} onChange={set("phone")} /></label>
        <label>Email<input type="email" autoComplete="email" value={f.email} onChange={set("email")} /></label>
      </div>
      <label>Service of interest
        <select value={f.service} onChange={set("service")}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
          <option value="Integrated programme">Integrated programme (several services)</option>
        </select>
      </label>
      <label>How can we help? *<textarea required value={f.message} onChange={set("message")} placeholder="Tell us about your project, location and timeline." /></label>
      <p className="note">* Required. Please give a phone number or email so we can reply.</p>
      <div className="btn-row" style={{ marginTop: 0 }}>
        <button type="submit" className="btn btn-primary" disabled={!valid} aria-disabled={!valid}>Send by email</button>
        <button type="button" className="btn btn-dark" onClick={sendWhatsApp} disabled={!valid} aria-disabled={!valid}>Send on WhatsApp</button>
      </div>
    </form>
  );
}
