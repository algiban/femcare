import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Femcare",
  description: siteConfig.apps.femcare.shortDescription,
};

export default function FemcarePage() {
  return (
    <main>
      <section className="page-hero femcare-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Health technology · Femcare</p>
            <h1>Pendamping edukasi kesehatan reproduksi yang lebih personal.</h1>
            <p className="hero-copy">
              Femcare membantu pengguna memahami informasi kesehatan reproduksi, mencatat konteks
              pribadi, dan memperoleh rekomendasi edukatif berdasarkan data yang mereka berikan.
            </p>
            <div className="hero-actions">
              <Link href="/privacy-policy/femcare" className="button button-primary">Privacy Policy</Link>
              <Link href="/account-deletion/femcare" className="button button-secondary">Hapus akun</Link>
            </div>
          </div>
          <div className="product-visual" aria-label="Ilustrasi fitur Femcare">
            <div className="phone-frame">
              <div className="phone-status"><span>Femcare</span><span>●</span></div>
              <div className="phone-greeting">Halo, mari pahami kondisi kamu hari ini.</div>
              <div className="phone-card"><span>Rekomendasi</span><strong>Langkah yang relevan untukmu</strong></div>
              <div className="phone-grid"><span>Kalender</span><span>Edukasi</span><span>Riwayat</span><span>Profil</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Batas penggunaan</p>
            <h2 className="display-small">Informasi, bukan diagnosis.</h2>
          </div>
          <div className="prose-large">
            <p>
              Femcare bukan alat kesehatan dan tidak mendiagnosis, mengobati, menyembuhkan, atau
              mencegah kondisi medis. Hasil di dalam aplikasi bersifat edukatif dan tidak menggantikan
              konsultasi dengan dokter atau tenaga kesehatan berwenang.
            </p>
            <Link href="/medical-disclaimer/femcare" className="text-link">Baca disclaimer lengkap →</Link>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article><span>01</span><h2>Rekomendasi personal</h2><p>Mempertimbangkan profil, kondisi reproduksi, dan gejala yang dipilih pengguna.</p></article>
            <article><span>02</span><h2>Kalender kesehatan</h2><p>Membantu pengguna mencatat siklus dan informasi terkait secara terstruktur.</p></article>
            <article><span>03</span><h2>Edukasi terarah</h2><p>Menyajikan penjelasan yang mudah dipahami tanpa membuat klaim diagnosis.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
