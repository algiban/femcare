export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export type DeletionPayload = {
  name: string;
  email: string;
  app: string;
  reason?: string;
  confirmation: boolean;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().replace(/[<>]/g, "").slice(0, maxLength);
}

export function validateEmail(value: string): boolean {
  return emailPattern.test(value) && value.length <= 254;
}

export function validateContact(input: unknown):
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Data formulir tidak valid." };
  }

  const body = input as Record<string, unknown>;
  const data: ContactPayload = {
    name: sanitizeText(body.name, 80),
    email: sanitizeText(body.email, 254).toLowerCase(),
    subject: sanitizeText(body.subject, 120),
    message: sanitizeText(body.message, 3000),
    website: sanitizeText(body.website, 200),
  };

  if (data.website) return { ok: false, error: "Permintaan ditolak." };
  if (data.name.length < 2) return { ok: false, error: "Nama minimal 2 karakter." };
  if (!validateEmail(data.email)) return { ok: false, error: "Alamat email tidak valid." };
  if (data.subject.length < 3) return { ok: false, error: "Subjek minimal 3 karakter." };
  if (data.message.length < 10) return { ok: false, error: "Pesan minimal 10 karakter." };

  return { ok: true, data };
}

export function validateDeletion(input: unknown):
  | { ok: true; data: DeletionPayload }
  | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Data formulir tidak valid." };
  }

  const body = input as Record<string, unknown>;
  const data: DeletionPayload = {
    name: sanitizeText(body.name, 80),
    email: sanitizeText(body.email, 254).toLowerCase(),
    app: sanitizeText(body.app, 50),
    reason: sanitizeText(body.reason, 1000),
    confirmation: body.confirmation === true,
    website: sanitizeText(body.website, 200),
  };

  if (data.website) return { ok: false, error: "Permintaan ditolak." };
  if (data.name.length < 2) return { ok: false, error: "Nama minimal 2 karakter." };
  if (!validateEmail(data.email)) return { ok: false, error: "Alamat email tidak valid." };
  if (!data.app) return { ok: false, error: "Pilih aplikasi yang terkait." };
  if (!data.confirmation) {
    return { ok: false, error: "Konfirmasi penghapusan akun harus disetujui." };
  }

  return { ok: true, data };
}
