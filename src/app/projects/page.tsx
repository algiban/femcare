import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Produk",
  description: "Produk digital yang sedang dikembangkan oleh Arkha Developer.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Product portfolio</p>
          <h1>Produk yang dibangun untuk kebutuhan berbeda.</h1>
          <p className="hero-copy">
            Portofolio Arkha Developer menggabungkan rekomendasi cerdas, pengalaman pengguna,
            HRIS, dan sistem operasional yang terstruktur.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container project-list">
          <article className="project-row">
            <div className="project-number">01</div>
            <div>
              <p className="app-category">{siteConfig.apps.femcare.category}</p>
              <h2>{siteConfig.apps.femcare.name}</h2>
            </div>
            <p>{siteConfig.apps.femcare.shortDescription}</p>
            <Link href="/projects/femcare" className="button button-secondary">Detail produk</Link>
          </article>
          <article className="project-row">
            <div className="project-number">02</div>
            <div>
              <p className="app-category">{siteConfig.apps.youfitly.category}</p>
              <h2>{siteConfig.apps.youfitly.name}</h2>
            </div>
            <p>{siteConfig.apps.youfitly.shortDescription}</p>
            <span className="status-pill">{siteConfig.apps.youfitly.availability}</span>
          </article>
          <article className="project-row">
            <div className="project-number">03</div>
            <div>
              <p className="app-category">{siteConfig.apps.arkhaflow.category}</p>
              <h2>{siteConfig.apps.arkhaflow.name}</h2>
            </div>
            <p>{siteConfig.apps.arkhaflow.shortDescription}</p>
            <span className="status-pill">{siteConfig.apps.arkhaflow.availability}</span>
          </article>
          <article className="project-row">
            <div className="project-number">04</div>
            <div>
              <p className="app-category">{siteConfig.apps.arkhahr.category}</p>
              <h2>{siteConfig.apps.arkhahr.name}</h2>
            </div>
            <p>{siteConfig.apps.arkhahr.shortDescription}</p>
            <Link href="/projects/arkhahr" className="button button-secondary">Detail produk</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
