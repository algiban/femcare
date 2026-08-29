import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Youfitly",
  description: siteConfig.apps.youfitly.shortDescription,
  alternates: {
    canonical: "/projects/youfitly",
  },
};

export default function YoufitlyPage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero youfitly-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">
              Fashion recommendation · Youfitly
            </p>

            <h1>
              Temukan outfit yang lebih sesuai dengan bentuk tubuh dan
              preferensimu.
            </h1>

            <p className="hero-copy">
              Youfitly adalah platform rekomendasi outfit wanita yang membantu
              pengguna menemukan jenis pakaian berdasarkan bentuk tubuh, gaya,
              dan kebutuhan acara menggunakan pendekatan Hybrid Recommendation
              System.
            </p>

            <div className="hero-actions">
              <a
                href="https://youfitly.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                Buka Youfitly
              </a>

              <Link
                href="/projects"
                className="button button-secondary"
              >
                Lihat Produk Lain
              </Link>
            </div>
          </div>

          {/* VISUAL */}
          <div
            className="product-visual"
            aria-label="Ilustrasi antarmuka Youfitly"
          >
            <div className="phone-frame youfitly-phone">
              <div className="phone-status">
                <span>Youfitly</span>
                <span>♡</span>
              </div>

              <div className="phone-greeting">
                Outfit yang dibuat lebih personal.
              </div>

              <div className="phone-card youfitly-phone-card">
                <span>Rekomendasi untukmu</span>

                <strong>
                  Casual Feminine
                </strong>

                <small>
                  Berdasarkan bentuk tubuh & preferensi
                </small>
              </div>

              <div className="phone-grid youfitly-phone-grid">
                <span>Body Shape</span>
                <span>Style</span>
                <span>Acara</span>
                <span>Outfit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Personalized fashion
            </p>

            <h2 className="display-small">
              Rekomendasi pakaian yang dimulai dari karakteristik pengguna.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              Youfitly tidak hanya menampilkan pakaian populer. Sistem
              mempertimbangkan informasi tubuh dan preferensi pengguna untuk
              menghasilkan rekomendasi yang lebih relevan secara personal.
            </p>

            <p>
              Pengguna dapat memasukkan ukuran tubuh, memilih gaya yang
              disukai, serta menentukan kebutuhan acara. Data tersebut
              kemudian diproses untuk menentukan bentuk tubuh dan menghasilkan
              rekomendasi jenis pakaian yang paling sesuai.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article>
              <span>01</span>

              <h2>Body shape analysis</h2>

              <p>
                Mengolah data ukuran tubuh untuk membantu mengidentifikasi
                bentuk tubuh seperti Banana, Apple, Pear, dan Hourglass.
              </p>
            </article>

            <article>
              <span>02</span>

              <h2>Style preference</h2>

              <p>
                Rekomendasi dapat disesuaikan dengan preferensi gaya seperti
                Casual, Feminine, dan Streetwear.
              </p>
            </article>

            <article>
              <span>03</span>

              <h2>Occasion-aware</h2>

              <p>
                Sistem mempertimbangkan kebutuhan pengguna untuk acara Formal,
                Santai, maupun Pesta sebelum menentukan hasil rekomendasi.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RECOMMENDATION ENGINE */}
      <section className="section">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Recommendation engine
            </p>

            <h2 className="display-small">
              Hybrid Filtering untuk rekomendasi yang lebih relevan.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              Youfitly menggunakan kombinasi Content-Based Filtering dan
              Item-Based Collaborative Filtering untuk membangun kandidat
              rekomendasi berdasarkan kemiripan profil serta hubungan antar
              jenis pakaian.
            </p>

            <p>
              Skor dari kedua metode kemudian digabungkan melalui Hybrid
              Filtering dan diproses kembali menggunakan preferensi gaya serta
              acara sebelum menghasilkan daftar rekomendasi akhir.
            </p>
          </div>
        </div>
      </section>

      {/* ALGORITHM */}
      <section className="section section-muted">
        <div className="container">
          <div className="feature-grid">
            <article>
              <span>04</span>

              <h2>Content-Based Filtering</h2>

              <p>
                Membandingkan karakteristik pengguna berdasarkan profil,
                ukuran tubuh, bentuk tubuh, preferensi gaya, dan kebutuhan
                acara.
              </p>
            </article>

            <article>
              <span>05</span>

              <h2>Item-Based Collaborative Filtering</h2>

              <p>
                Mempelajari hubungan kemiripan antar jenis pakaian berdasarkan
                pola interaksi dan rating untuk memperluas kandidat
                rekomendasi.
              </p>
            </article>

            <article>
              <span>06</span>

              <h2>Hybrid Re-ranking</h2>

              <p>
                Menggabungkan skor rekomendasi dan melakukan re-ranking
                berdasarkan gaya serta acara sebelum menentukan Top-5 outfit
                untuk pengguna.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              How it works
            </p>

            <h2 className="display-small">
              Dari profil hingga rekomendasi.
            </h2>
          </div>

          <div className="feature-grid">
            <article>
              <span>01</span>
              <h2>Isi profil tubuh</h2>
              <p>
                Pengguna memasukkan informasi dan ukuran tubuh yang dibutuhkan
                oleh sistem.
              </p>
            </article>

            <article>
              <span>02</span>
              <h2>Pilih preferensi</h2>
              <p>
                Tentukan gaya pakaian dan jenis acara yang ingin digunakan
                sebagai konteks rekomendasi.
              </p>
            </article>

            <article>
              <span>03</span>
              <h2>Dapatkan rekomendasi</h2>
              <p>
                Sistem memproses profil menggunakan Hybrid Filtering dan
                menampilkan lima rekomendasi jenis pakaian terbaik.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCT MAPPING */}
      <section className="section section-muted">
        <div className="container split-section">
          <div>
            <p className="eyebrow">
              Outfit discovery
            </p>

            <h2 className="display-small">
              Rekomendasi tidak berhenti pada nama pakaian.
            </h2>
          </div>

          <div className="prose-large">
            <p>
              Setelah jenis pakaian direkomendasikan, Youfitly dapat
              menghubungkannya dengan referensi produk sehingga pengguna
              mendapatkan gambaran outfit yang lebih konkret.
            </p>

            <p>
              Sistem memiliki koleksi referensi produk yang dipetakan terhadap
              jenis pakaian sehingga proses eksplorasi fashion menjadi lebih
              praktis dan mudah dipahami.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container cta-card">
          <div>
            <p className="eyebrow">
              Find your fit
            </p>

            <h2>
              Fashion recommendation yang lebih personal.
            </h2>

            <p>
              Masukkan profil tubuh dan preferensimu, kemudian biarkan Youfitly
              membantu menemukan outfit yang lebih sesuai untukmu.
            </p>
          </div>

          <div className="hero-actions product-legal-actions">
            <a
              href="https://youfitly.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Coba Youfitly
            </a>

            <Link
              href="/projects"
              className="button button-secondary"
            >
              Produk Arkha Lainnya
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}