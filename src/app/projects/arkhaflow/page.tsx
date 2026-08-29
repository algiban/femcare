import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ArkhaFlow",
  description: siteConfig.apps.arkhaflow.shortDescription,
  alternates: { canonical: "/projects/arkhaflow" },
};

export default function ArkhaFlowPage() {
  return (
    <main>
      <section className="page-hero arkhaflow-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Business operations · ArkhaFlow
            </p>

            <h1>
              Operasional bisnis, membership, dan transaksi dalam satu alur.
            </h1>

            <p className="hero-copy">
              ArkhaFlow adalah platform operasional dan membership multi-role
              untuk membantu bisnis mengelola aktivitas harian, pelanggan,
              membership, pembayaran, hingga transaksi QRIS secara lebih
              terstruktur dalam satu ekosistem.
            </p>

            <div className="hero-actions">
              <Link
                href="/privacy-policy/arkhaflow"
                className="button button-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/support"
                className="button button-secondary"
              >
                Support ArkhaFlow
              </Link>
            </div>
          </div>

          <div
            className="product-visual"
            aria-label="Ilustrasi antarmuka ArkhaFlow"
          >
            <div className="phone-frame arkhaflow-phone">
              <div className="phone-status">
                <span>ArkhaFlow</span>
                <span>●</span>
              </div>

              <div className="phone-greeting">
                Kelola bisnis dari satu dashboard.
              </div>

              <div className="phone-card arkhaflow-phone-card">
                <span>Business overview</span>

                <strong>
                  Rp 12.450.000
                </strong>

                <small>
                  Transaksi bulan ini · +18,4%
                </small>
              </div>

              <div className="phone-grid arkhaflow-phone-grid">
                <span>Transaksi</span>
                <span>Member</span>
                <span>QRIS</span>
                <span>Bisnis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Business management
            </p>

            <h2 className="display-small">
              Satu platform untuk menjalankan bisnis dengan lebih terstruktur.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              ArkhaFlow dirancang untuk bisnis yang membutuhkan pengelolaan
              operasional, membership, pengguna, transaksi, dan pembayaran
              tanpa harus menggunakan banyak aplikasi terpisah.
            </p>

            <p>
              Sistem multi-role memungkinkan setiap pengguna mendapatkan akses
              sesuai tanggung jawabnya, sementara pemilik bisnis tetap memiliki
              kontrol terhadap aktivitas, transaksi, member, dan konfigurasi
              bisnis melalui sistem yang terpusat.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article>
              <span>01</span>

              <h2>
                Multi-role operations
              </h2>

              <p>
                Sistem akses berbasis peran untuk owner, administrator,
                staff, kasir, operator, maupun pengguna lainnya sesuai
                kebutuhan setiap bisnis.
              </p>
            </article>

            <article>
              <span>02</span>

              <h2>
                Membership ecosystem
              </h2>

              <p>
                Kelola member, status membership, paket layanan, masa aktif,
                benefit, histori aktivitas, dan hubungan pelanggan dalam satu
                sistem.
              </p>
            </article>

            <article>
              <span>03</span>

              <h2>
                Payment & QRIS
              </h2>

              <p>
                Mendukung integrasi payment gateway seperti Midtrans serta
                alur pembayaran QRIS dinamis untuk transaksi bisnis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Built for growth
            </p>

            <h2 className="display-small">
              Tidak hanya mencatat transaksi.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              ArkhaFlow dibangun sebagai fondasi operasional yang dapat
              berkembang bersama bisnis. Data transaksi, aktivitas pengguna,
              membership, dan operasional dapat disusun menjadi informasi yang
              lebih mudah dipantau oleh pemilik bisnis.
            </p>

            <p>
              Pendekatan ini membuat ArkhaFlow dapat digunakan untuk berbagai
              jenis bisnis tanpa menghilangkan kontrol akses, konsistensi data,
              maupun keamanan transaksi.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article>
              <span>04</span>

              <h2>
                Business dashboard
              </h2>

              <p>
                Pantau aktivitas bisnis, transaksi, performa membership,
                dan informasi operasional melalui dashboard terpusat.
              </p>
            </article>

            <article>
              <span>05</span>

              <h2>
                Transaction history
              </h2>

              <p>
                Setiap transaksi dapat memiliki histori, status pembayaran,
                referensi transaksi, dan jejak aktivitas yang dapat ditelusuri.
              </p>
            </article>

            <article>
              <span>06</span>

              <h2>
                Security first
              </h2>

              <p>
                Dirancang dengan kontrol akses, validasi transaksi,
                perlindungan sesi, audit trail, dan prinsip keamanan berlapis.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">
              Privacy
            </p>

            <h2>
              Data bisnis dan transaksi membutuhkan perlindungan yang serius.
            </h2>

            <p>
              Pelajari bagaimana ArkhaFlow dapat memproses informasi akun,
              bisnis, membership, transaksi, pembayaran, perangkat, serta data
              operasional lainnya.
            </p>
          </div>

          <div className="hero-actions product-legal-actions">
            <Link
              href="/privacy-policy/arkhaflow"
              className="button button-primary"
            >
              Baca Privacy Policy
            </Link>

            <Link
              href="/support"
              className="button button-secondary"
            >
              Pusat Bantuan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}