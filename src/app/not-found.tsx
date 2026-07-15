import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1>Halaman tidak ditemukan.</h1>
        <p>Alamat mungkin berubah atau halaman sudah tidak tersedia.</p>
        <Link href="/" className="button button-primary">Kembali ke beranda</Link>
      </div>
    </main>
  );
}
