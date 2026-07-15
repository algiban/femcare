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
    question: "Bagaimana cara menghapus akun Femcare?",
    answer: "Buka Profil → Pengaturan → Hapus Akun, atau gunakan halaman Account Deletion di website ini.",
  },
  {
    question: "Apakah Femcare memberikan diagnosis?",
    answer: "Tidak. Femcare menyediakan informasi edukatif dan rekomendasi umum, bukan diagnosis atau pengobatan medis.",
  },
  {
    question: "Data apa yang disimpan?",
    answer: "Jenis data bergantung pada fitur yang digunakan, termasuk data akun, profil, informasi kesehatan yang diberikan, riwayat, dan data teknis. Rinciannya ada pada Privacy Policy.",
  },
  {
    question: "Saya tidak dapat login. Apa yang harus dilakukan?",
    answer: "Pastikan koneksi aktif, versi aplikasi terbaru, dan email yang digunakan benar. Kirim detail error tanpa menyertakan kata sandi atau OTP.",
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
              <Link href="/account-deletion/femcare"><strong>Hapus akun Femcare</strong><span>Jalur resmi penghapusan akun dan data.</span></Link>
              <Link href="/privacy-policy/femcare"><strong>Privasi dan data</strong><span>Lihat data yang diproses dan hak pengguna.</span></Link>
              <Link href="/medical-disclaimer/femcare"><strong>Informasi kesehatan</strong><span>Pahami batas fungsi rekomendasi Femcare.</span></Link>
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
