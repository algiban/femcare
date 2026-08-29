import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "ArkhaHR",
  description: siteConfig.apps.arkhahr.shortDescription,
  alternates: { canonical: "/projects/arkhahr" },
};

export default function ArkhaHRPage() {
  return (
    <main>
      <section className="page-hero arkhahr-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Human resources · ArkhaHR</p>
            <h1>HRIS untuk operasional karyawan yang lebih terstruktur.</h1>
            <p className="hero-copy">
              ArkhaHR menyatukan absensi, cuti, lembur, timesheet, reimbursement, perjalanan dinas,
              tiket HR, dan perubahan profil ke dalam pengalaman mobile yang konsisten dan siap
              dihubungkan dengan administrasi HR organisasi.
            </p>
            <div className="hero-actions">
              <Link href="/privacy-policy/arkhahr" className="button button-primary">Privacy Policy</Link>
              <Link href="/legal/arkhahr" className="button button-secondary">Legal ArkhaHR</Link>
            </div>
          </div>
          <div className="product-visual" aria-label="Ilustrasi antarmuka ArkhaHR">
            <div className="phone-frame arkhahr-phone">
              <div className="phone-status"><span>ArkhaHR</span><span>●</span></div>
              <div className="phone-greeting">Kerja hari ini, dalam satu tampilan.</div>
              <div className="phone-card arkhahr-phone-card">
                <span>Attendance</span>
                <strong>Clock in dengan validasi lokasi</strong>
                <small>08:00 · Jadwal kerja aktif</small>
              </div>
              <div className="phone-grid arkhahr-phone-grid">
                <span>Absensi</span><span>Cuti</span><span>Lembur</span><span>Tiket HR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Employee experience</p>
            <h2 className="display-small">Satu alur untuk kebutuhan kerja sehari-hari.</h2>
          </div>
          <div className="prose-large">
            <p>
              ArkhaHR dirancang agar karyawan tidak perlu berpindah-pindah kanal untuk tugas rutin.
              Pengajuan dapat disimpan sebagai draft, bukti dapat dilampirkan, dan data dapat
              disiapkan untuk sinkronisasi ketika koneksi kembali tersedia.
            </p>
            <p>
              Untuk absensi, aplikasi dapat menggunakan GPS/geofence, kamera selfie, metadata
              perangkat, dan verifikasi biometrik sesuai kebijakan organisasi. Validasi final tetap
              mengikuti aturan server dan konfigurasi perusahaan.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article>
              <span>01</span>
              <h2>Attendance evidence</h2>
              <p>Validasi lokasi, geofence, selfie, waktu, dan konteks perangkat untuk mendukung proses absensi.</p>
            </article>
            <article>
              <span>02</span>
              <h2>HR self-service</h2>
              <p>Cuti, lembur, timesheet, reimbursement, perjalanan dinas, tiket HR, dan perubahan data profil.</p>
            </article>
            <article>
              <span>03</span>
              <h2>Offline-aware & secure</h2>
              <p>Draft lokal, antrean sinkronisasi, secure storage, serta isolasi data tenant dan pengguna.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Privacy & legal</p>
            <h2>Data karyawan perlu diperlakukan sebagai data penting.</h2>
            <p>
              Pelajari jenis data yang dapat diproses ArkhaHR, penggunaan izin perangkat, serta
              ketentuan penggunaan layanan.
            </p>
          </div>
          <div className="hero-actions product-legal-actions">
            <Link href="/privacy-policy/arkhahr" className="button button-primary">Baca Privacy Policy</Link>
            <Link href="/legal/arkhahr" className="button button-secondary">Baca Legal</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
