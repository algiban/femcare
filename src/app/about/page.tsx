import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Filosofi, prinsip kerja, dan arah pengembangan Arkha Developer.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container narrow">
          <p className="eyebrow">Tentang Arkha</p>
          <h1>Teknologi seharusnya membantu manusia bergerak lebih jelas.</h1>
          <p className="hero-copy">
            Arkha Developer adalah studio pengembangan perangkat lunak independen yang berfokus
            pada produk digital bernilai praktis, pengalaman yang mudah dipahami, dan fondasi
            teknis yang dapat bertumbuh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <SectionHeading eyebrow="Filosofi" title="Arah, fondasi, dan pertumbuhan." />
          <div className="prose-large">
            <p>
              Nama Arkha membawa gagasan tentang awal, arah, dan kekuatan yang dibangun dari
              fondasi. Filosofi itu diterjemahkan ke cara kerja yang sederhana: memahami masalah
              sebelum menulis kode, memilih teknologi secara rasional, dan menjaga produk tetap
              dapat dipelihara setelah diluncurkan.
            </p>
            <p>
              Kami tidak mengejar antarmuka yang ramai. Kami memilih struktur yang tenang,
              interaksi yang dapat diprediksi, dan detail yang membantu pengguna menyelesaikan
              tugas tanpa kebingungan.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionHeading eyebrow="Prinsip" title="Standar yang dibawa ke setiap produk." />
          <div className="principle-grid">
            <article><span>01</span><h2>Clarity first</h2><p>Fitur dan bahasa antarmuka dibuat mudah dipahami sebelum dibuat terlihat canggih.</p></article>
            <article><span>02</span><h2>Privacy aware</h2><p>Pengumpulan data dibatasi pada kebutuhan produk dan dijelaskan secara terbuka.</p></article>
            <article><span>03</span><h2>Maintainable</h2><p>Arsitektur, dokumentasi, dan komponen disusun agar produk dapat dilanjutkan dengan aman.</p></article>
            <article><span>04</span><h2>Evidence driven</h2><p>Keputusan fitur didasarkan pada kebutuhan pengguna, evaluasi, dan umpan balik nyata.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
