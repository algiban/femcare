import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pusat Legal",
  description: "Dokumen privasi, ketentuan penggunaan, penghapusan akun, dan disclaimer Arkha Developer.",
};

const documents = [
  {
    product: "ArkhaHR",
    title: "Privacy Policy ArkhaHR",
    description: "Menjelaskan data karyawan, absensi, lokasi, selfie, izin perangkat, penyimpanan lokal, retensi, dan hak pengguna.",
    href: "/privacy-policy/arkhahr",
  },
  {
    product: "ArkhaHR",
    title: "Legal ArkhaHR",
    description: "Ketentuan penggunaan ArkhaHR, tanggung jawab organisasi dan pengguna, bukti absensi, keamanan akun, serta batas layanan.",
    href: "/legal/arkhahr",
  },
  {
    product: "Femcare",
    title: "Privacy Policy Femcare",
    description: "Menjelaskan data yang dikumpulkan Femcare, tujuan pemrosesan, pihak ketiga, retensi, keamanan, dan hak pengguna.",
    href: "/privacy-policy/femcare",
  },
  {
    product: "Femcare",
    title: "Terms & Conditions Femcare",
    description: "Ketentuan penggunaan aplikasi, tanggung jawab akun, penggunaan yang diperbolehkan, dan batasan layanan.",
    href: "/terms/femcare",
  },
  {
    product: "Femcare",
    title: "Account Deletion Femcare",
    description: "Jalur resmi untuk meminta penghapusan akun Femcare dan data yang terkait dengannya.",
    href: "/account-deletion/femcare",
  },
  {
    product: "Femcare",
    title: "Medical Disclaimer Femcare",
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
            Dokumen di bawah ini menjadi rujukan resmi untuk penggunaan ArkhaHR, Femcare, dan layanan Arkha Developer.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-card-grid">
          {documents.map((document, index) => (
            <article className="legal-card" key={document.href}>
              <span>{String(index + 1).padStart(2, "0")} · {document.product}</span>
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
