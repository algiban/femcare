import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Pusat Bantuan",
  description: "Dukungan pengguna untuk produk Arkha Developer.",
};

const faqs = [
  {
    question: "Kenapa ArkhaHR meminta akses lokasi atau kamera?",
    answer: "Izin tersebut hanya dibutuhkan untuk fitur yang memerlukannya, misalnya validasi lokasi/geofence dan selfie absensi. Kebijakan organisasi dapat menentukan bukti apa yang wajib digunakan.",
  },
  {
    question: "Bagaimana cara menghapus akun Femcare?",
    answer: "Buka Profil → Pengaturan → Hapus Akun, atau gunakan halaman Account Deletion di website ini.",
  },
  {
    question: "Apakah Femcare memberikan diagnosis?",
    answer: "Tidak. Femcare menyediakan informasi edukatif dan rekomendasi umum, bukan diagnosis atau pengobatan medis.",
  },
  {
    question: "Saya tidak dapat login. Apa yang harus dilakukan?",
    answer: "Pastikan koneksi aktif, versi aplikasi terbaru, dan identitas login yang digunakan benar. Kirim detail error tanpa menyertakan kata sandi atau OTP.",
  },
];

export default function SupportPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Support center</p>
          <h1>Bantuan yang langsung mengarah ke masalah.</h1>
          <p className="hero-copy">
            Laporkan kendala teknis, tanyakan privasi, atau minta bantuan terkait akun. Jangan kirim kata sandi atau OTP.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="container support-grid">
          <div>
            <h2 className="display-small">Pilihan bantuan</h2>
            <div className="support-links">
              <Link href="/privacy-policy/arkhaflow"><strong>Privasi ArkhaFlow</strong><span>Akun, bisnis, membership, transaksi, pembayaran, dan keamanan.</span></Link>
              <Link href="/privacy-policy/arkhatouring"><strong>Privasi ArkhaTouring</strong><span>Perjalanan, rute, lokasi, perangkat, dan media.</span></Link>
              <Link href="/privacy-policy/arkhahr"><strong>Privasi ArkhaHR</strong><span>Lokasi, selfie, data karyawan, dan izin perangkat.</span></Link>
              <Link href="/legal/arkhahr"><strong>Legal ArkhaHR</strong><span>Ketentuan penggunaan dan tanggung jawab layanan.</span></Link>
              <Link href="/account-deletion/femcare"><strong>Hapus akun Femcare</strong><span>Jalur resmi penghapusan akun dan data.</span></Link>
              <Link href="/privacy-policy/femcare"><strong>Privasi Femcare</strong><span>Lihat data yang diproses dan hak pengguna.</span></Link>
            </div>
            <p className="support-email">Email langsung: <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p>
          </div>
          <div>
            <h2 className="display-small">Kirim laporan</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <h2 className="display-small">Pertanyaan umum</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
