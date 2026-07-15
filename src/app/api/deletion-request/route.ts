import { NextResponse } from "next/server";
import { validateDeletion } from "@/lib/forms";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();
    const result = validateDeletion(payload);

    if (!result.ok) {
      return NextResponse.json({ message: result.error }, { status: 400 });
    }

    const target = process.env.PRIVACY_TO_EMAIL;
    if (!target) {
      return NextResponse.json(
        { message: "Formulir penghapusan belum dikonfigurasi. Silakan kirim permintaan melalui email privasi." },
        { status: 503 },
      );
    }

    const reference = `DEL-${Date.now().toString(36).toUpperCase()}`;

    await sendEmail({
      to: target,
      replyTo: result.data.email,
      subject: `[${reference}] Permintaan penghapusan akun ${result.data.app}`,
      text: [
        "Permintaan penghapusan akun",
        "",
        `Referensi: ${reference}`,
        `Aplikasi: ${result.data.app}`,
        `Nama: ${result.data.name}`,
        `Email akun: ${result.data.email}`,
        `Konfirmasi permanen: Ya`,
        `Alasan: ${result.data.reason || "Tidak diberikan"}`,
        "",
        "Verifikasi kepemilikan akun sebelum melakukan penghapusan.",
        "Jangan meminta kata sandi atau OTP melalui email.",
      ].join("\n"),
    });

    return NextResponse.json({
      message: `Permintaan berhasil dikirim. Nomor referensi: ${reference}. Periksa email untuk proses verifikasi.`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Permintaan belum dapat dikirim. Silakan gunakan email privasi yang tercantum." },
      { status: 500 },
    );
  }
}
