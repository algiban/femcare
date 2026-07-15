import Link from "next/link";
import { Brand } from "@/components/Brand";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { href: "/about", label: "Tentang" },
  { href: "/projects", label: "Produk" },
  { href: "/legal", label: "Legal" },
  { href: "/support", label: "Bantuan" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <Link href="/contact" className="button button-small button-primary">
            Hubungi kami
          </Link>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Navigasi seluler">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
