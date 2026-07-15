"use client";

import { FormEvent, useState } from "react";

export function DeletionForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      app: formData.get("app"),
      reason: formData.get("reason"),
      website: formData.get("website"),
      confirmation: formData.get("confirmation") === "on",
    };

    try {
      const response = await fetch("/api/deletion-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Permintaan gagal dikirim.");
      form.reset();
      setState("success");
      setMessage(result.message || "Permintaan berhasil dikirim.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Terjadi kesalahan.");
    }
  }

  return (
    <form className="form-card deletion-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Nama pemilik akun
          <input name="name" type="text" minLength={2} maxLength={80} required />
        </label>
        <label>
          Email yang terdaftar
          <input name="email" type="email" maxLength={254} required />
        </label>
      </div>
      <label>
        Aplikasi
        <select name="app" defaultValue="Femcare" required>
          <option value="Femcare">Femcare</option>
        </select>
      </label>
      <label>
        Alasan penghapusan (opsional)
        <textarea name="reason" maxLength={1000} rows={5} />
      </label>
      <label className="checkbox-label">
        <input name="confirmation" type="checkbox" required />
        <span>
          Saya memahami bahwa penghapusan akun bersifat permanen dan dapat menghapus profil,
          data kesehatan yang saya masukkan, serta riwayat rekomendasi terkait akun ini.
        </span>
      </label>
      <label className="honeypot" aria-hidden="true">
        Website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>
      <button className="button button-danger" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Mengirim…" : "Kirim permintaan penghapusan"}
      </button>
      {message ? <p className={`form-status ${state}`}>{message}</p> : null}
    </form>
  );
}
