import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pusat Legal",
  description: "Dokumen privasi, ketentuan penggunaan, penghapusan akun, dan disclaimer Arkha Developer.",
};

const documents = [
  {
    title: "Privacy Policy",
    description: "Menjelaskan data yang dikumpulkan Femcare, tujuan pemrosesan, pihak ketiga, retensi, keamanan, dan hak pengguna.",
    href: "/privacy-policy/femcare",
  },
  {
    title: "Terms & Conditions",
    description: "Ketentuan penggunaan aplikasi, tanggung jawab akun, penggunaan yang diperbolehkan, dan batasan layanan.",
    href: "/terms/femcare",
  },
  {
    title: "Account Deletion",
    description: "Jalur resmi untuk meminta penghapusan akun Femcare dan data yang terkait dengannya.",
    href: "/account-deletion/femcare",
  },
  {
    title: "Medical Disclaimer",
    description: "Batas fungsi Femcare sebagai aplikasi edukasi kesehatan dan petunjuk untuk kondisi darurat.",
    href: "/medical-disclaimer/femcare",
  },
];

export default function LegalPageIndex() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Legal center</p>
          <h1>Informasi yang jelas tentang layanan dan data pengguna.</h1>
          <p className="hero-copy">
            Dokumen di bawah ini menjadi rujukan resmi untuk penggunaan Femcare dan layanan Arkha Developer.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-card-grid">
          {documents.map((document, index) => (
            <article className="legal-card" key={document.href}>
              <span>0{index + 1}</span>
              <h2>{document.title}</h2>
              <p>{document.description}</p>
              <Link href={document.href} className="text-link">Buka dokumen →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
