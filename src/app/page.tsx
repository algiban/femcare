import Link from "next/link";
import { AppCard } from "@/components/AppCard";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const { apps } = siteConfig;

  return (
    <main>
      <section className="hero">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Independent software studio · Bekasi</p>
            <h1>Produk digital yang terasa jelas, aman, dan berguna.</h1>
            <p className="hero-copy">
              Arkha Developer membangun aplikasi berbasis kebutuhan nyata—mulai dari kesehatan,
              fashion technology, HRIS, sampai sistem operasional bisnis.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="button button-primary">Lihat produk</Link>
              <Link href="/legal" className="button button-secondary">Pusat legal</Link>
            </div>
            <div className="trust-row" aria-label="Prinsip pengembangan">
              <span>Privacy-conscious</span>
              <span>Human-centered</span>
              <span>Production-ready</span>
            </div>
          </div>
          <div className="hero-panel" aria-label="Ringkasan fokus Arkha Developer">
            <div className="hero-panel-label">Current focus</div>
            <div className="hero-panel-main">
              <span className="panel-number">04</span>
              <div>
                <p className="panel-kicker">ArkhaHR</p>
                <h2>Human resource information system</h2>
              </div>
            </div>
            <div className="panel-divider" />
            <div className="hero-panel-stats">
              <div><strong>4</strong><span>produk utama</span></div>
              <div><strong>1</strong><span>pusat legal</span></div>
              <div><strong>∞</strong><span>ruang tumbuh</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Produk"
            title="Satu studio, empat arah produk."
            description="Setiap produk dirancang dengan konteks pengguna, arsitektur yang dapat berkembang, dan pengalaman yang tidak terasa kaku."
          />
          <div className="app-grid">
            <AppCard
              index="01"
              name={apps.femcare.name}
              description={apps.femcare.shortDescription}
              category={apps.femcare.category}
              status={apps.femcare.availability}
              href="/projects/femcare"
            />
            <AppCard
              index="02"
              name={apps.youfitly.name}
              description={apps.youfitly.shortDescription}
              category={apps.youfitly.category}
              status={apps.youfitly.availability}
              href="/projects"
            />
            <AppCard
              index="03"
              name={apps.arkhaflow.name}
              description={apps.arkhaflow.shortDescription}
              category={apps.arkhaflow.category}
              status={apps.arkhaflow.availability}
              href="/projects"
            />
            <AppCard
              index="04"
              name={apps.arkhahr.name}
              description={apps.arkhahr.shortDescription}
              category={apps.arkhahr.category}
              status={apps.arkhahr.availability}
              href="/projects/arkhahr"
            />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">Trust by design</p>
            <h2 className="display-small">Legal bukan halaman pelengkap.</h2>
          </div>
          <div>
            <p className="large-copy">
              Pengguna berhak memahami data apa yang dikumpulkan, mengapa data itu digunakan,
              dan bagaimana layanan digunakan secara bertanggung jawab. Pusat legal ini menjadi
              sumber informasi resmi untuk produk Arkha Developer.
            </p>
            <div className="link-list">
              <Link href="/privacy-policy/arkhahr">Privacy Policy ArkhaHR <span>→</span></Link>
              <Link href="/legal/arkhahr">Legal ArkhaHR <span>→</span></Link>
              <Link href="/privacy-policy/femcare">Privacy Policy Femcare <span>→</span></Link>
              <Link href="/account-deletion/femcare">Hapus akun Femcare <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Support</p>
            <h2>Punya pertanyaan atau menemukan masalah?</h2>
            <p>Gunakan pusat bantuan untuk dukungan teknis, privasi, atau laporan bug.</p>
          </div>
          <Link href="/support" className="button button-primary">Buka pusat bantuan</Link>
        </div>
      </section>
    </main>
  );
}
