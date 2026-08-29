import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Produk digital yang sedang dikembangkan oleh Arkha Developer.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Product portfolio</p>

          <h1>Produk yang dibangun untuk kebutuhan berbeda.</h1>

          <p className="hero-copy">
            Portofolio Arkha Developer menggabungkan rekomendasi cerdas,
            pengalaman pengguna, HRIS, touring, dan sistem operasional bisnis
            yang terstruktur.
          </p>

          <div className="hero-actions">
            <a
              href={siteConfig.demoFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Ajukan Demo
            </a>

            <Link href="#products" className="button button-secondary">
              Lihat Produk
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="section" id="products">
        <div className="container project-list">
          {/* FEMCARE */}
          <article className="project-row">
            <div className="project-number">01</div>

            <div>
              <p className="app-category">
                {siteConfig.apps.femcare.category}
              </p>

              <h2>{siteConfig.apps.femcare.name}</h2>
            </div>

            <p>{siteConfig.apps.femcare.shortDescription}</p>

            <Link
              href="/projects/femcare"
              className="button button-secondary"
            >
              Detail produk
            </Link>
          </article>

          {/* YOUFITLY */}
          <article className="project-row">
            <div className="project-number">02</div>

            <div>
              <p className="app-category">
                {siteConfig.apps.youfitly.category}
              </p>

              <h2>{siteConfig.apps.youfitly.name}</h2>
            </div>

            <p>{siteConfig.apps.youfitly.shortDescription}</p>

            <Link
              href="/projects/youfitly"
              className="button button-secondary"
            >
              Detail produk
            </Link>
          </article>

          {/* ARKHAFLOW */}
          <article className="project-row">
            <div className="project-number">03</div>

            <div>
              <p className="app-category">
                {siteConfig.apps.arkhaflow.category}
              </p>

              <h2>{siteConfig.apps.arkhaflow.name}</h2>
            </div>

            <p>{siteConfig.apps.arkhaflow.shortDescription}</p>

            <Link
              href="/projects/arkhaflow"
              className="button button-secondary"
            >
              Detail produk
            </Link>
          </article>

          {/* ARKHAHR */}
          <article className="project-row">
            <div className="project-number">04</div>

            <div>
              <p className="app-category">
                {siteConfig.apps.arkhahr.category}
              </p>

              <h2>{siteConfig.apps.arkhahr.name}</h2>
            </div>

            <p>{siteConfig.apps.arkhahr.shortDescription}</p>

            <Link
              href="/projects/arkhahr"
              className="button button-secondary"
            >
              Detail produk
            </Link>
          </article>

          {/* ARKHATOURING */}
          <article className="project-row">
            <div className="project-number">05</div>

            <div>
              <p className="app-category">
                {siteConfig.apps.arkhatouring.category}
              </p>

              <h2>{siteConfig.apps.arkhatouring.name}</h2>
            </div>

            <p>{siteConfig.apps.arkhatouring.shortDescription}</p>

            <Link
              href="/projects/arkhatouring"
              className="button button-secondary"
            >
              Detail produk
            </Link>
          </article>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">Product demo</p>

            <h2>Ingin mencoba produk Arkha Developer?</h2>

            <p>
              Ajukan akses demo untuk melihat langsung bagaimana produk Arkha
              Developer dapat digunakan sesuai kebutuhan personal, komunitas,
              organisasi, maupun perusahaan.
            </p>
          </div>

          <div className="hero-actions product-legal-actions">
            <a
              href={siteConfig.demoFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Ajukan Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}