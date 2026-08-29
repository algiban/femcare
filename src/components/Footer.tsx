import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Brand } from "@/components/Brand";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand />
          <p className="footer-copy">{siteConfig.tagline}</p>
          <p className="footer-copy">{siteConfig.location}</p>
        </div>
        <div>
          <h2 className="footer-title">Produk</h2>
          <Link href="/projects/arkhahr">ArkhaHR</Link>
          <Link href="/projects/femcare">Femcare</Link>
          <Link href="/projects">YouFitly</Link>
          <Link href="/projects">Arkhaflow</Link>
        </div>
        <div>
          <h2 className="footer-title">Legal</h2>
          <Link href="/privacy-policy/arkhahr">ArkhaHR Privacy</Link>
          <Link href="/legal/arkhahr">ArkhaHR Legal</Link>
          <Link href="/privacy-policy/femcare">Femcare Privacy</Link>
          <Link href="/terms/femcare">Femcare Terms</Link>
          <Link href="/account-deletion/femcare">Account Deletion</Link>
        </div>
        <div>
          <h2 className="footer-title">Bantuan</h2>
          <Link href="/support">Support Center</Link>
          <Link href="/contact">Kontak</Link>
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. Hak cipta dilindungi.</p>
        <p>Produk digital dari Bekasi, Indonesia.</p>
      </div>
    </footer>
  );
}
