import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy Femcare",
  description: "Kebijakan privasi Femcare tentang pengumpulan, penggunaan, penyimpanan, dan penghapusan data pengguna.",
  alternates: { canonical: "/privacy-policy/femcare" },
};

export default function PrivacyPolicyPage() {
  const app = siteConfig.apps.femcare;

  return (
    <LegalPage
      eyebrow="Femcare · Privacy Policy"
      title="Kebijakan Privasi Femcare"
      updated={app.privacyEffectiveDate}
      intro="Kebijakan ini menjelaskan bagaimana Femcare dan Arkha Developer menangani informasi pribadi dan data kesehatan yang diberikan pengguna."
    >
      <section>
        <h2>1. Pengendali dan ruang lingkup</h2>
        <p>
          Femcare dikembangkan dan dioperasikan oleh <strong>{siteConfig.legalName}</strong>. Kebijakan
          ini berlaku untuk aplikasi Femcare, halaman dukungan, formulir penghapusan akun, dan
          komunikasi yang berhubungan langsung dengan layanan tersebut.
        </p>
        <p>
          Dengan menggunakan Femcare, pengguna memahami bahwa informasi yang diberikan akan diproses
          sesuai fungsi yang dipilih. Pengguna tetap dapat memilih untuk tidak mengisi data opsional,
          tetapi beberapa rekomendasi mungkin menjadi kurang personal.
        </p>
      </section>

      <section>
        <h2>2. Informasi yang dapat kami kumpulkan</h2>
        <h3>2.1 Data akun dan identitas</h3>
        <ul>
          <li>Nama atau nama tampilan.</li>
          <li>Alamat email.</li>
          <li>Foto profil jika pengguna memilih masuk melalui Google.</li>
          <li>Identifier akun dan informasi autentikasi yang diperlukan untuk login.</li>
        </ul>

        <h3>2.2 Data profil dan kesehatan reproduksi</h3>
        <ul>
          <li>Usia atau rentang usia.</li>
          <li>Status pernikahan apabila diberikan.</li>
          <li>Kondisi reproduksi, seperti hamil, menyusui, menopause, atau tidak sedang hamil.</li>
          <li>Gejala atau keluhan yang dipilih pengguna.</li>
          <li>Informasi siklus menstruasi, HPHT, perkiraan tanggal, atau catatan kalender kesehatan.</li>
          <li>Riwayat rekomendasi dan interaksi yang disimpan oleh pengguna.</li>
        </ul>
        <p>
          Data kesehatan merupakan data sensitif. Femcare hanya memprosesnya untuk menyediakan fitur
          yang diminta pengguna, menjaga riwayat, dan meningkatkan kualitas layanan secara sah dan terbatas.
        </p>

        <h3>2.3 Data teknis</h3>
        <ul>
          <li>Jenis perangkat, versi sistem operasi, dan versi aplikasi.</li>
          <li>Alamat IP, waktu akses, log kesalahan, serta data keamanan dan diagnostik.</li>
          <li>Token autentikasi dan identifier perangkat yang diperlukan oleh layanan autentikasi.</li>
        </ul>

        <h3>2.4 Data dukungan</h3>
        <p>
          Saat pengguna menghubungi dukungan, kami dapat menerima nama, email, isi pesan, lampiran,
          dan informasi teknis yang diberikan secara sukarela untuk menyelesaikan masalah.
        </p>
      </section>

      <section>
        <h2>3. Sumber informasi</h2>
        <p>Informasi dapat diperoleh dari:</p>
        <ul>
          <li>Data yang dimasukkan langsung oleh pengguna.</li>
          <li>Layanan login pihak ketiga yang dipilih pengguna, seperti Google Sign-In.</li>
          <li>Sistem aplikasi, server, keamanan, dan pencatatan kesalahan.</li>
          <li>Komunikasi pengguna dengan tim dukungan.</li>
        </ul>
      </section>

      <section>
        <h2>4. Tujuan penggunaan data</h2>
        <p>Kami memproses informasi untuk:</p>
        <ul>
          <li>Membuat, mengautentikasi, dan mengelola akun pengguna.</li>
          <li>Menyediakan rekomendasi edukatif berdasarkan profil dan gejala yang dipilih.</li>
          <li>Menyimpan kalender, preferensi, serta riwayat rekomendasi sesuai pilihan pengguna.</li>
          <li>Menjaga keamanan akun, mencegah penyalahgunaan, dan menangani insiden.</li>
          <li>Mendiagnosis bug, memperbaiki performa, dan meningkatkan pengalaman pengguna.</li>
          <li>Menjawab permintaan bantuan, akses data, koreksi, atau penghapusan akun.</li>
          <li>Memenuhi kewajiban hukum yang berlaku.</li>
        </ul>
        <p><strong>Kami tidak menjual data pribadi atau data kesehatan pengguna.</strong></p>
      </section>

      <section>
        <h2>5. Sistem rekomendasi dan kecerdasan buatan</h2>
        <p>
          Femcare dapat menggunakan sistem berbasis aturan, machine learning, dan layanan kecerdasan
          buatan untuk menyusun rekomendasi atau penjelasan yang mudah dipahami. Pemrosesan ini tidak
          dimaksudkan untuk menghasilkan keputusan medis otomatis.
        </p>
        <p>
          Ketika layanan AI eksternal digunakan, Femcare berupaya membatasi data yang dikirim pada
          konteks minimum yang diperlukan dan tidak mengirimkan kata sandi. Konfigurasi produksi dan
          Data Safety Google Play harus menyatakan penggunaan layanan tersebut secara akurat.
        </p>
      </section>

      <section>
        <h2>6. Layanan pihak ketiga dan pemroses data</h2>
        <p>Femcare dapat menggunakan penyedia berikut sesuai konfigurasi produksi:</p>
        <ul>
          <li><strong>Google Sign-In dan Firebase Authentication</strong> untuk autentikasi akun.</li>
          <li><strong>Penyedia cloud dan database</strong> untuk hosting API, penyimpanan akun, dan data aplikasi.</li>
          <li><strong>Google AI/Gemini atau penyedia AI lain</strong> untuk menghasilkan penjelasan, apabila fitur tersebut diaktifkan.</li>
          <li><strong>Penyedia email</strong> untuk dukungan dan konfirmasi permintaan pengguna.</li>
          <li><strong>Layanan diagnostik</strong> untuk log crash atau performa, apabila diaktifkan.</li>
        </ul>
        <p>
          Masing-masing penyedia memiliki kebijakan privasi sendiri. Kami hanya memberikan akses yang
          diperlukan untuk menjalankan fungsi layanan dan meninjau penggunaan SDK secara berkala.
        </p>
      </section>

      <section>
        <h2>7. Pembagian dan pengungkapan data</h2>
        <p>Data dapat dibagikan secara terbatas:</p>
        <ul>
          <li>Kepada penyedia layanan yang memproses data atas instruksi kami.</li>
          <li>Untuk mematuhi hukum, putusan pengadilan, atau permintaan pemerintah yang sah.</li>
          <li>Untuk melindungi keamanan pengguna, layanan, dan hak hukum Arkha Developer.</li>
          <li>Dalam transaksi bisnis yang sah, dengan perlindungan dan pemberitahuan yang sesuai.</li>
        </ul>
        <p>Kami tidak membagikan data kesehatan untuk periklanan berbasis minat.</p>
      </section>

      <section>
        <h2>8. Penyimpanan dan retensi</h2>
        <p>
          Data akun, profil, dan riwayat disimpan selama akun aktif atau selama diperlukan untuk
          menyediakan fitur. Data dukungan disimpan selama diperlukan untuk menyelesaikan permintaan,
          menjaga keamanan, dan memenuhi kewajiban yang berlaku.
        </p>
        <p>
          Setelah permintaan penghapusan diverifikasi, data aktif akan dihapus atau dianonimkan dalam
          jangka waktu operasional yang wajar. Salinan cadangan dapat bertahan sementara sampai siklus
          pencadangan berakhir. Data tertentu dapat dipertahankan apabila diwajibkan oleh hukum,
          diperlukan untuk keamanan, pencegahan penipuan, atau penyelesaian sengketa. Jenis dan alasan
          retensi tersebut akan dijelaskan kepada pengguna jika relevan.
        </p>
      </section>

      <section>
        <h2>9. Keamanan data</h2>
        <p>Kami menerapkan langkah yang wajar, antara lain:</p>
        <ul>
          <li>Komunikasi terenkripsi melalui HTTPS/TLS.</li>
          <li>Autentikasi, token akses, dan kontrol otorisasi.</li>
          <li>Pembatasan akses administratif berdasarkan kebutuhan.</li>
          <li>Validasi input, pencatatan kejadian keamanan, dan pembaruan dependensi.</li>
          <li>Pencadangan serta prosedur pemulihan sesuai kebutuhan layanan.</li>
        </ul>
        <p>
          Tidak ada sistem yang sepenuhnya bebas risiko. Pengguna harus menjaga kredensial, tidak
          membagikan kode OTP, dan segera melaporkan aktivitas mencurigakan.
        </p>
      </section>

      <section>
        <h2>10. Hak dan pilihan pengguna</h2>
        <p>Pengguna dapat meminta:</p>
        <ul>
          <li>Akses atau salinan informasi yang tersimpan.</li>
          <li>Koreksi data yang tidak akurat.</li>
          <li>Penghapusan akun dan data terkait.</li>
          <li>Pembatasan atau penghentian pemrosesan tertentu, bila berlaku.</li>
          <li>Penjelasan mengenai penggunaan data dan penyedia layanan terkait.</li>
        </ul>
        <p>
          Permintaan dapat dikirim melalui halaman Account Deletion atau ke {siteConfig.privacyEmail}.
          Verifikasi identitas dapat dilakukan untuk mencegah penghapusan oleh pihak yang tidak berwenang.
          Kami tidak akan meminta kata sandi melalui email atau formulir website.
        </p>
      </section>

      <section>
        <h2>11. Penghapusan akun</h2>
        <p>Pengguna dapat memulai penghapusan melalui:</p>
        <ol>
          <li>Femcare: <strong>Profil → Pengaturan → Hapus Akun</strong>.</li>
          <li>Website: <strong>{siteConfig.url}/account-deletion/femcare</strong>.</li>
          <li>Email: <strong>{siteConfig.privacyEmail}</strong>.</li>
        </ol>
        <p>
          Penghapusan akun mencakup akun dan data yang terkait, bukan sekadar menghapus aplikasi dari
          perangkat atau keluar dari akun.
        </p>
      </section>

      <section>
        <h2>12. Anak dan pengguna di bawah umur</h2>
        <p>
          Femcare ditujukan untuk pengguna berusia minimal {app.minimumAge} tahun. Kami tidak dengan
          sengaja mengumpulkan data dari anak di bawah usia tersebut. Apabila ditemukan akun yang tidak
          memenuhi batas usia, kami dapat membatasi atau menghapus akun tersebut.
        </p>
      </section>

      <section>
        <h2>13. Transfer lintas wilayah</h2>
        <p>
          Sebagian penyedia cloud dapat memproses data di luar Indonesia. Dalam kondisi tersebut,
          kami berupaya menggunakan penyedia tepercaya dan perlindungan kontraktual maupun teknis yang
          sesuai dengan sifat data.
        </p>
      </section>

      <section>
        <h2>14. Perubahan kebijakan</h2>
        <p>
          Kebijakan ini dapat diperbarui untuk mencerminkan perubahan fitur, penyedia, atau ketentuan.
          Tanggal pembaruan akan ditampilkan pada halaman ini. Perubahan material dapat diberitahukan
          melalui aplikasi, email, atau website.
        </p>
      </section>

      <section>
        <h2>15. Kontak</h2>
        <p>
          Pertanyaan privasi dapat dikirim ke <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.
          Dukungan umum tersedia melalui <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <address>
          {siteConfig.legalName}<br />
          {siteConfig.location}
        </address>
      </section>
    </LegalPage>
  );
}
