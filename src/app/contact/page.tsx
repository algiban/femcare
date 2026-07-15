import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi Arkha Developer untuk dukungan atau kerja sama.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Contact</p>
          <h1>Mari bicarakan kebutuhanmu dengan jelas.</h1>
          <p className="hero-copy">
            Gunakan formulir untuk dukungan produk, pertanyaan privasi, kerja sama, atau diskusi pengembangan aplikasi.
          </p>
        </div>
      </section>
      <section className="section section-compact">
        <div className="container contact-grid">
          <div className="contact-details">
            <div><span>Email support</span><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></div>
            <div><span>Email privasi</span><a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a></div>
            <div><span>Lokasi</span><p>{siteConfig.location}</p></div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
