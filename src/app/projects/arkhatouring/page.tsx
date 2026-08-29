import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ArkhaTouring",
  description: siteConfig.apps.arkhatouring.shortDescription,
  alternates: { canonical: "/projects/arkhatouring" },
};

export default function ArkhaTouringPage() {
  return (
    <main>
      <section className="page-hero arkhatouring-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Touring companion · ArkhaTouring
            </p>

            <h1>
              Touring lebih terorganisir, terkoneksi, dan mudah dipantau.
            </h1>

            <p className="hero-copy">
              ArkhaTouring membantu komunitas dan peserta touring mengelola
              perjalanan, rute, titik kumpul, waypoint, anggota, serta lokasi
              perjalanan dalam satu pengalaman mobile yang dirancang untuk
              aktivitas touring.
            </p>

            <div className="hero-actions">
              <Link
                href="/privacy-policy/arkhatouring"
                className="button button-primary"
              >
                Privacy Policy
              </Link>

              <Link
                href="/support"
                className="button button-secondary"
              >
                Support ArkhaTouring
              </Link>
            </div>
          </div>

          <div
            className="product-visual"
            aria-label="Ilustrasi antarmuka ArkhaTouring"
          >
            <div className="phone-frame arkhatouring-phone">
              <div className="phone-status">
                <span>ArkhaTouring</span>
                <span>●</span>
              </div>

              <div className="phone-greeting">
                Perjalanan hari ini.
              </div>

              <div className="phone-card arkhatouring-phone-card">
                <span>Jakarta → Bandung</span>

                <strong>
                  148 km
                </strong>

                <small>
                  12 riders · 4 waypoint
                </small>
              </div>

              <div className="phone-grid arkhatouring-phone-grid">
                <span>Rute</span>
                <span>Riders</span>
                <span>Lokasi</span>
                <span>Trip</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Touring experience
            </p>

            <h2 className="display-small">
              Dari titik kumpul sampai tujuan dalam satu perjalanan.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              ArkhaTouring dirancang untuk membantu perjalanan komunitas
              menjadi lebih terstruktur. Informasi mengenai trip, anggota,
              titik kumpul, rute, waypoint, dan tujuan dapat dikelola melalui
              satu aplikasi.
            </p>

            <p>
              Dengan izin pengguna, fitur lokasi dapat digunakan untuk
              membantu koordinasi perjalanan dan menampilkan posisi anggota
              selama aktivitas touring berlangsung.
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
                Touring management
              </h2>

              <p>
                Buat dan kelola perjalanan lengkap dengan jadwal, titik
                kumpul, tujuan, peserta, status trip, dan informasi penting
                lainnya.
              </p>
            </article>

            <article>
              <span>02</span>

              <h2>
                Route & waypoint
              </h2>

              <p>
                Susun rute touring dan waypoint agar anggota mengetahui
                jalur, checkpoint, tempat istirahat, serta tujuan perjalanan.
              </p>
            </article>

            <article>
              <span>03</span>

              <h2>
                Location awareness
              </h2>

              <p>
                Gunakan data lokasi perangkat sesuai izin pengguna untuk
                membantu koordinasi dan pemantauan perjalanan.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Community coordination
            </p>

            <h2 className="display-small">
              Tetap terkoneksi dengan anggota perjalanan.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              Dalam perjalanan kelompok, koordinasi merupakan bagian penting.
              ArkhaTouring memberikan ruang untuk mengelola peserta touring
              dan informasi perjalanan agar seluruh anggota memiliki acuan
              yang sama.
            </p>

            <p>
              Informasi lokasi, waypoint, checkpoint, serta status perjalanan
              dapat digunakan sebagai pendukung koordinasi. Pengguna tetap
              bertanggung jawab memperhatikan kondisi jalan dan mengikuti
              peraturan lalu lintas.
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
                Member coordination
              </h2>

              <p>
                Lihat peserta perjalanan dan informasi yang dibutuhkan untuk
                koordinasi antaranggota selama touring.
              </p>
            </article>

            <article>
              <span>05</span>

              <h2>
                Trip history
              </h2>

              <p>
                Simpan histori perjalanan sehingga informasi trip sebelumnya
                dapat digunakan sebagai dokumentasi maupun referensi.
              </p>
            </article>

            <article>
              <span>06</span>

              <h2>
                Media & documentation
              </h2>

              <p>
                Dukungan kamera dan media memungkinkan dokumentasi aktivitas
                touring sesuai fitur dan izin yang diberikan pengguna.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">
              Location privacy
            </p>

            <h2>
              Kontrol lokasi tetap berada di tangan pengguna.
            </h2>

            <p>
              Pelajari penggunaan data lokasi, informasi perjalanan,
              dokumentasi, izin perangkat, serta bagaimana ArkhaTouring
              melindungi informasi pengguna.
            </p>
          </div>

          <div className="hero-actions product-legal-actions">
            <Link
              href="/privacy-policy/arkhatouring"
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