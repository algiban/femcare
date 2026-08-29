import type { ReactNode } from "react";
import Link from "next/link";

type LegalDocumentLink = {
  href: string;
  label: string;
};

const femcareDocuments: LegalDocumentLink[] = [
  { href: "/privacy-policy/femcare", label: "Privacy Policy" },
  { href: "/terms/femcare", label: "Terms & Conditions" },
  { href: "/account-deletion/femcare", label: "Account Deletion" },
  { href: "/medical-disclaimer/femcare", label: "Medical Disclaimer" },
];

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  children,
  asideTitle = "Dokumen Femcare",
  documents = femcareDocuments,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  children: ReactNode;
  asideTitle?: string;
  documents?: LegalDocumentLink[];
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
            <p className="legal-aside-title">{asideTitle}</p>
            {documents.map((document) => (
              <Link href={document.href} key={document.href}>{document.label}</Link>
            ))}
            <Link href="/legal">Pusat Legal</Link>
          </aside>
          <article className="legal-content">{children}</article>
        </div>
      </section>
    </main>
  );
}
