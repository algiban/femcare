type SendEmailInput = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendEmail(input: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("Konfigurasi layanan email belum tersedia.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [input.to],
      subject: input.subject,
      text: input.text,
      reply_to: input.replyTo,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Email provider error:", detail);
    throw new Error("Email gagal dikirim.");
  }

  return response.json() as Promise<{ id: string }>;
}
