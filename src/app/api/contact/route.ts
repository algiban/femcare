import { NextResponse } from "next/server";
import { validateContact } from "@/lib/forms";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    const result = validateContact(payload);

    if (!result.ok) {
      return NextResponse.json({ message: result.error }, { status: 400 });
    }

    const target = process.env.CONTACT_TO_EMAIL;
    if (!target) {
      return NextResponse.json(
        { message: "Formulir belum dikonfigurasi. Silakan gunakan alamat email yang tersedia di halaman ini." },
        { status: 503 },
      );
    }

    await sendEmail({
      to: target,
      replyTo: result.data.email,
      subject: `[Website] ${result.data.subject}`,
      text: [
        "Pesan baru dari website Arkha Developer",
        "",
        `Nama: ${result.data.name}`,
        `Email: ${result.data.email}`,
        `Subjek: ${result.data.subject}`,
        "",
        result.data.message,
      ].join("\n"),
    });

    return NextResponse.json({ message: "Pesan berhasil dikirim. Kami akan membalas melalui email." });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Pesan belum dapat dikirim. Silakan coba lagi atau gunakan email langsung." },
      { status: 500 },
    );
  }
}
