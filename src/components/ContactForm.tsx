"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Pesan gagal dikirim.");
      form.reset();
      setState("success");
      setMessage(result.message || "Pesan berhasil dikirim.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Terjadi kesalahan.");
    }
  }

  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-row">
        <label>
          Nama
          <input name="name" type="text" minLength={2} maxLength={80} required />
        </label>
        <label>
          Email
          <input name="email" type="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Subjek
        <input name="subject" type="text" minLength={3} maxLength={120} required />
      </label>
      <label>
        Pesan
        <textarea name="message" minLength={10} maxLength={3000} rows={7} required />
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-primary" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Mengirim…" : "Kirim pesan"}
      </button>
      {message ? <p className={`form-status ${state}`}>{message}</p> : null}
    </form>
  );
}
