import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy ArkhaFlow",
  description:
    "Kebijakan privasi ArkhaFlow mengenai akun, data bisnis, membership, transaksi, pembayaran, hak akses, penyimpanan, keamanan, dan hak pengguna.",
  alternates: { canonical: "/privacy-policy/arkhaflow" },
};

const documents = [
  { href: "/privacy-policy/arkhaflow", label: "Privacy Policy" },
  { href: "/legal", label: "Pusat Legal" },
  { href: "/projects", label: "Produk Arkha Developer" },
];

export default function ArkhaFlowPrivacyPolicyPage() {
  const app = siteConfig.apps.arkhaflow;

  return (
    <LegalPage
      eyebrow="ArkhaFlow · Privacy Policy"
      title="Kebijakan Privasi ArkhaFlow"
      updated={app.privacyEffectiveDate}
      intro="Kebijakan ini menjelaskan bagaimana ArkhaFlow memproses data akun, bisnis, anggota, operasional, transaksi, pembayaran, perangkat, dan aktivitas pengguna saat layanan digunakan."
      asideTitle="Dokumen ArkhaFlow"
      documents={documents}
    >
      <section>
        <h2>1. Ruang lingkup</h2>
        <p>
          ArkhaFlow dikembangkan oleh <strong>{siteConfig.legalName}</strong> sebagai platform operasional
          dan membership multi-role untuk bisnis. Kebijakan ini berlaku pada aplikasi, website,
          dashboard, API, dukungan, dan fitur lain yang secara langsung menjadi bagian dari ArkhaFlow.
        </p>
        <p>
          Pemilik bisnis atau organisasi yang menggunakan ArkhaFlow dapat menentukan data apa yang
          diperlukan untuk operasionalnya. Untuk data yang dikelola atas instruksi bisnis tersebut,
          bisnis dapat bertindak sebagai pihak yang menentukan tujuan pemrosesan, sedangkan Arkha
          Developer menyediakan sistem dan memproses data sesuai layanan serta konfigurasi yang digunakan.
        </p>
      </section>

      <section>
        <h2>2. Data yang dapat diproses</h2>
        <h3>Data akun dan identitas</h3>
        <ul>
          <li>Nama, email, nomor telepon, foto profil, identifier akun, dan informasi autentikasi.</li>
          <li>Peran pengguna, status akun, hubungan dengan bisnis, cabang, tim, atau membership.</li>
          <li>Preferensi, pengaturan akun, dan informasi yang secara aktif diberikan pengguna.</li>
        </ul>

        <h3>Data bisnis dan operasional</h3>
        <ul>
          <li>Nama usaha, profil usaha, cabang, layanan, produk, jadwal, anggota, staf, dan struktur akses.</li>
          <li>Data operasional yang dimasukkan melalui fitur pencatatan, order, membership, aktivitas, atau laporan.</li>
          <li>Riwayat perubahan, status proses, catatan, dan audit trail yang diperlukan untuk keamanan serta akuntabilitas.</li>
        </ul>

        <h3>Data transaksi dan pembayaran</h3>
        <ul>
          <li>Nomor referensi transaksi, nominal, status pembayaran, waktu transaksi, invoice, dan metadata pembayaran.</li>
          <li>Informasi membership, paket, masa aktif, tagihan, dan riwayat pembayaran yang relevan.</li>
          <li>Identifier merchant atau informasi QRIS yang diperlukan untuk mengarahkan pembayaran kepada pemilik bisnis.</li>
        </ul>
        <p>
          Informasi instrumen pembayaran sensitif seperti nomor kartu lengkap, PIN, atau kredensial
          pembayaran tidak dimaksudkan untuk disimpan oleh ArkhaFlow apabila transaksi diproses langsung
          oleh penyedia pembayaran yang berwenang.
        </p>

        <h3>Data teknis</h3>
        <ul>
          <li>Alamat IP, jenis perangkat, sistem operasi, versi aplikasi, installation ID, dan informasi sesi.</li>
          <li>Log akses, error, aktivitas keamanan, dan informasi koneksi yang dibutuhkan untuk menjaga layanan.</li>
        </ul>
      </section>

      <section>
        <h2>3. Tujuan penggunaan data</h2>
        <p>Data dapat digunakan untuk:</p>
        <ul>
          <li>Membuat, mengautentikasi, dan mengamankan akun pengguna.</li>
          <li>Menjalankan sistem multi-role, membership, operasional bisnis, dan kontrol akses.</li>
          <li>Memproses transaksi, memperbarui status pembayaran, dan melakukan rekonsiliasi.</li>
          <li>Menghasilkan invoice, laporan, riwayat, notifikasi, dan informasi operasional.</li>
          <li>Mencegah penyalahgunaan, fraud, akses tanpa izin, serta aktivitas yang membahayakan layanan.</li>
          <li>Menangani dukungan, investigasi masalah, audit teknis, dan pemenuhan kewajiban hukum.</li>
          <li>Meningkatkan stabilitas, keamanan, dan pengalaman pengguna berdasarkan data teknis yang relevan.</li>
        </ul>
      </section>

      <section>
        <h2>4. Pembayaran dan penyedia pihak ketiga</h2>
        <p>
          ArkhaFlow dapat terhubung dengan payment gateway seperti Midtrans atau penyedia lain yang
          digunakan pada lingkungan produksi. Ketika pembayaran dilakukan, sebagian data transaksi
          dapat diteruskan kepada penyedia pembayaran untuk otorisasi, pemrosesan, settlement,
          pencegahan fraud, dan kebutuhan kepatuhan.
        </p>
        <p>
          Penyedia pembayaran memiliki kebijakan privasi dan standar kepatuhan masing-masing. ArkhaFlow
          berupaya membatasi data yang dikirim pada data yang diperlukan untuk memproses transaksi dan
          tidak meminta pengguna mengirim PIN, OTP, CVV, atau kredensial rahasia melalui formulir dukungan.
        </p>
      </section>

      <section>
        <h2>5. QRIS dan pembayaran kepada pemilik bisnis</h2>
        <p>
          Jika fitur QRIS dinamis digunakan, ArkhaFlow dapat memproses informasi transaksi dan identifier
          merchant untuk menghasilkan atau menampilkan instruksi pembayaran yang sesuai. Penyelesaian
          dana tetap mengikuti mekanisme penyedia pembayaran, bank, atau lembaga terkait.
        </p>
        <p>
          Status pembayaran yang tampil di aplikasi dapat bergantung pada notifikasi server, webhook,
          atau hasil verifikasi penyedia pembayaran. Data tersebut dapat dicatat untuk kebutuhan audit,
          rekonsiliasi, penyelesaian sengketa, dan pencegahan transaksi ganda.
        </p>
      </section>

      <section>
        <h2>6. Kontrol akses dan data multi-role</h2>
        <p>
          ArkhaFlow mendukung beberapa peran pengguna. Informasi yang dapat dilihat atau diubah pengguna
          bergantung pada role, bisnis, cabang, membership, dan izin yang diberikan. Pemilik bisnis atau
          administrator bertanggung jawab memberikan akses hanya kepada pihak yang memerlukannya.
        </p>
      </section>

      <section>
        <h2>7. Berbagi data</h2>
        <p>Data dapat dibagikan secara terbatas kepada:</p>
        <ul>
          <li>Pemilik bisnis, administrator, staf, atau anggota lain sesuai hak akses yang diberikan.</li>
          <li>Penyedia cloud, database, email, notifikasi, penyimpanan file, dan layanan infrastruktur.</li>
          <li>Penyedia pembayaran untuk memproses transaksi serta mencegah fraud.</li>
          <li>Pihak berwenang apabila diwajibkan oleh hukum atau permintaan resmi yang sah.</li>
        </ul>
        <p>Kami tidak menjual data pribadi pengguna kepada pengiklan atau data broker.</p>
      </section>

      <section>
        <h2>8. Penyimpanan dan retensi</h2>
        <p>
          Data disimpan selama diperlukan untuk menjalankan akun, membership, operasional, transaksi,
          dukungan, keamanan, dan kewajiban hukum. Data transaksi tertentu dapat dipertahankan lebih lama
          jika diperlukan untuk pembukuan, audit, fraud prevention, rekonsiliasi, atau penyelesaian sengketa.
        </p>
        <p>
          Setelah data tidak lagi diperlukan, data dapat dihapus, dianonimkan, atau dipisahkan dari akun
          aktif sesuai kebijakan retensi dan batas teknis sistem cadangan.
        </p>
      </section>

      <section>
        <h2>9. Keamanan</h2>
        <p>Langkah keamanan ArkhaFlow dapat mencakup:</p>
        <ul>
          <li>HTTPS/TLS untuk komunikasi jaringan.</li>
          <li>Hashing kata sandi dan penyimpanan token secara aman.</li>
          <li>Role-based access control dan pemisahan data antar bisnis atau tenant.</li>
          <li>Validasi server, idempotency, webhook verification, dan audit trail pada transaksi penting.</li>
          <li>Pembatasan akses administratif, logging keamanan, dan pemantauan aktivitas mencurigakan.</li>
          <li>Pembaruan dependensi, backup, serta prosedur pemulihan sesuai kebutuhan layanan.</li>
        </ul>
        <p>
          Tidak ada sistem yang dapat menjamin keamanan absolut. Pengguna tetap bertanggung jawab menjaga
          perangkat, password, OTP, dan kredensial aksesnya.
        </p>
      </section>

      <section>
        <h2>10. Hak pengguna</h2>
        <p>
          Sesuai hukum yang berlaku, pengguna dapat memiliki hak untuk meminta akses, koreksi,
          penghapusan, pembatasan, atau penjelasan mengenai pemrosesan data pribadinya. Untuk data yang
          dikelola oleh suatu bisnis, permintaan tertentu dapat perlu diproses melalui administrator bisnis tersebut.
        </p>
        <p>
          Permintaan privasi dapat dikirim ke <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.
          Kami dapat melakukan verifikasi identitas sebelum memproses permintaan untuk melindungi akun pengguna.
        </p>
      </section>

      <section>
        <h2>11. Anak dan pengguna di bawah umur</h2>
        <p>
          ArkhaFlow ditujukan untuk kebutuhan operasional bisnis dan tidak dirancang sebagai layanan anak.
          Pengguna wajib memenuhi persyaratan usia dan kapasitas hukum yang berlaku untuk menggunakan
          akun, membership, serta melakukan transaksi.
        </p>
      </section>

      <section>
        <h2>12. Transfer dan lokasi pemrosesan data</h2>
        <p>
          Sebagian infrastruktur atau penyedia layanan dapat memproses data di wilayah berbeda dari lokasi
          pengguna. Dalam kondisi tersebut, kami berupaya menggunakan penyedia yang memiliki perlindungan
          teknis dan kontraktual yang sesuai dengan jenis data yang diproses.
        </p>
      </section>

      <section>
        <h2>13. Perubahan kebijakan</h2>
        <p>
          Kebijakan ini dapat diperbarui ketika fitur, arsitektur, penyedia pembayaran, aturan hukum, atau
          cara pemrosesan data berubah. Tanggal pembaruan terbaru akan ditampilkan pada halaman ini.
        </p>
      </section>

      <section>
        <h2>14. Kontak</h2>
        <p>
          Pertanyaan mengenai privasi ArkhaFlow dapat dikirim ke{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>. Dukungan umum
          tersedia melalui <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <address>
          {siteConfig.legalName}<br />
          {siteConfig.location}
        </address>
      </section>
    </LegalPage>
  );
}
