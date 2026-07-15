import type { ReactNode } from "react";
import Link from "next/link";

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="page-hero legal-hero">
        <div className="container narrow">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="hero-copy">{intro}</p>
          <p className="updated-label">Terakhir diperbarui: {updated}</p>
        </div>
      </section>
      <section className="section section-compact">
        <div className="container legal-layout">
          <aside className="legal-aside">
            <p className="legal-aside-title">Dokumen Femcare</p>
            <Link href="/privacy-policy/femcare">Privacy Policy</Link>
            <Link href="/terms/femcare">Terms &amp; Conditions</Link>
            <Link href="/account-deletion/femcare">Account Deletion</Link>
            <Link href="/medical-disclaimer/femcare">Medical Disclaimer</Link>
          </aside>
          <article className="legal-content">{children}</article>
        </div>
      </section>
    </main>
  );
}
