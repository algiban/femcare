import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy ArkhaTouring",
  description:
    "Kebijakan privasi ArkhaTouring mengenai akun, perjalanan, rute, lokasi, perangkat, media, keamanan, penyimpanan, dan hak pengguna.",
  alternates: { canonical: "/privacy-policy/arkhatouring" },
};

const documents = [
  { href: "/privacy-policy/arkhatouring", label: "Privacy Policy" },
  { href: "/legal", label: "Pusat Legal" },
  { href: "/projects", label: "Produk Arkha Developer" },
];

export default function ArkhaTouringPrivacyPolicyPage() {
  const app = siteConfig.apps.arkhatouring;

  return (
    <LegalPage
      eyebrow="ArkhaTouring · Privacy Policy"
      title="Kebijakan Privasi ArkhaTouring"
      updated={app.privacyEffectiveDate}
      intro="Kebijakan ini menjelaskan bagaimana ArkhaTouring dapat memproses data akun, perjalanan, rute, lokasi, perangkat, dan informasi yang dibagikan pengguna ketika menggunakan fitur touring."
      asideTitle="Dokumen ArkhaTouring"
      documents={documents}
    >
      <section>
        <h2>1. Ruang lingkup</h2>
        <p>
          ArkhaTouring dikembangkan oleh <strong>{siteConfig.legalName}</strong> sebagai layanan
          pendamping perjalanan dan touring. Kebijakan ini berlaku untuk aplikasi, website, API,
          layanan dukungan, serta fitur ArkhaTouring yang terhubung dengan akun pengguna.
        </p>
      </section>

      <section>
        <h2>2. Data yang dapat diproses</h2>
        <h3>Data akun dan profil</h3>
        <ul>
          <li>Nama, username, email, nomor telepon, foto profil, dan identifier akun.</li>
          <li>Informasi profil yang secara sukarela diberikan pengguna.</li>
          <li>Status keanggotaan grup atau perjalanan apabila fitur tersebut digunakan.</li>
        </ul>

        <h3>Data perjalanan dan touring</h3>
        <ul>
          <li>Nama perjalanan, jadwal, titik berkumpul, tujuan, waypoint, dan rute yang disimpan atau dibagikan.</li>
          <li>Keikutsertaan pengguna, status perjalanan, catatan, dan informasi koordinasi touring.</li>
          <li>Data kendaraan atau informasi pendukung perjalanan apabila pengguna memilih untuk menambahkannya.</li>
        </ul>

        <h3>Data lokasi</h3>
        <ul>
          <li>Lokasi perangkat ketika pengguna menjalankan fitur yang membutuhkan posisi, navigasi, pencatatan rute, atau koordinasi grup.</li>
          <li>Lokasi terakhir atau titik perjalanan yang secara aktif disimpan atau dibagikan pengguna.</li>
          <li>Informasi akurasi, waktu pengambilan lokasi, dan metadata teknis yang relevan.</li>
        </ul>
        <p>
          ArkhaTouring tidak dimaksudkan untuk melacak lokasi pengguna secara tersembunyi. Akses lokasi
          digunakan sesuai izin perangkat dan kebutuhan fitur. Jika suatu fitur memerlukan lokasi di
          latar belakang, aplikasi harus meminta izin yang sesuai dan menjelaskan kegunaannya kepada pengguna.
        </p>

        <h3>Media dan lampiran</h3>
        <ul>
          <li>Foto, gambar, atau file yang dipilih pengguna untuk profil, dokumentasi perjalanan, atau laporan.</li>
          <li>Metadata file yang diperlukan untuk mengunggah, menampilkan, dan mengamankan konten.</li>
        </ul>

        <h3>Data teknis</h3>
        <ul>
          <li>Jenis perangkat, sistem operasi, versi aplikasi, installation ID, alamat IP, dan status koneksi.</li>
          <li>Log error, aktivitas keamanan, sesi, serta informasi diagnostik yang diperlukan untuk stabilitas layanan.</li>
        </ul>
      </section>

      <section>
        <h2>3. Izin perangkat</h2>
        <p>ArkhaTouring dapat meminta izin berikut sesuai fitur yang digunakan:</p>
        <ul>
          <li><strong>Lokasi:</strong> untuk navigasi, rute, titik perjalanan, dan koordinasi anggota touring.</li>
          <li><strong>Kamera:</strong> untuk mengambil foto yang secara aktif ingin ditambahkan pengguna.</li>
          <li><strong>Foto dan file:</strong> untuk memilih media atau dokumen dari perangkat.</li>
          <li><strong>Notifikasi:</strong> untuk pembaruan perjalanan, informasi grup, perubahan jadwal, atau pemberitahuan penting.</li>
          <li><strong>Jaringan:</strong> untuk sinkronisasi rute, lokasi, akun, dan data perjalanan dengan server.</li>
        </ul>
        <p>
          Pengguna dapat mengubah izin melalui pengaturan perangkat. Beberapa fitur mungkin tidak dapat
          berjalan apabila izin yang dibutuhkan dinonaktifkan.
        </p>
      </section>

      <section>
        <h2>4. Tujuan penggunaan data</h2>
        <p>Data dapat digunakan untuk:</p>
        <ul>
          <li>Membuat dan mengamankan akun pengguna.</li>
          <li>Menyimpan serta menampilkan rute, perjalanan, waypoint, dan jadwal touring.</li>
          <li>Mendukung koordinasi anggota sesuai fitur dan pilihan berbagi yang digunakan.</li>
          <li>Menyinkronkan data antar perangkat dan server.</li>
          <li>Mengirim notifikasi yang relevan dengan perjalanan atau layanan.</li>
          <li>Mencegah penyalahgunaan, spam, akses tidak sah, dan aktivitas yang membahayakan keamanan layanan.</li>
          <li>Menganalisis error dan meningkatkan reliabilitas aplikasi.</li>
        </ul>
      </section>

      <section>
        <h2>5. Berbagi lokasi dengan pengguna lain</h2>
        <p>
          Apabila fitur berbagi lokasi grup tersedia dan diaktifkan, lokasi dapat terlihat oleh anggota
          yang memiliki akses ke perjalanan atau grup tersebut. Pengguna harus memperhatikan siapa yang
          menjadi anggota grup sebelum mengaktifkan berbagi lokasi.
        </p>
        <p>
          ArkhaTouring berupaya memberikan kontrol yang jelas untuk memulai atau menghentikan berbagi.
          Pengguna sebaiknya menghentikan berbagi lokasi ketika perjalanan selesai atau ketika informasi
          tersebut tidak lagi perlu diketahui anggota lain.
        </p>
      </section>

      <section>
        <h2>6. Keselamatan perjalanan</h2>
        <p>
          Informasi rute, posisi, navigasi, cuaca, lalu lintas, titik pertemuan, atau informasi perjalanan
          lainnya merupakan alat bantu. Pengguna tetap bertanggung jawab mematuhi aturan lalu lintas,
          memperhatikan kondisi jalan, kendaraan, cuaca, dan keselamatan berkendara.
        </p>
        <p>
          Pengguna tidak boleh mengoperasikan aplikasi dengan cara yang mengganggu konsentrasi saat
          berkendara. Gunakan perangkat hanya ketika aman atau serahkan pengoperasian kepada penumpang.
        </p>
      </section>

      <section>
        <h2>7. Berbagi data dan penyedia layanan</h2>
        <p>Data dapat dibagikan secara terbatas kepada:</p>
        <ul>
          <li>Anggota grup atau perjalanan sesuai pengaturan akses dan fitur yang digunakan.</li>
          <li>Penyedia cloud, database, peta, geocoding, notifikasi, penyimpanan media, dan infrastruktur teknis.</li>
          <li>Penyedia analitik atau diagnostik apabila diaktifkan untuk menjaga kualitas layanan.</li>
          <li>Pihak berwenang apabila diwajibkan oleh hukum atau diperlukan untuk merespons keadaan yang sah.</li>
        </ul>
        <p>Kami tidak menjual data lokasi pribadi pengguna kepada pengiklan atau data broker.</p>
      </section>

      <section>
        <h2>8. Penyimpanan dan retensi</h2>
        <p>
          Data akun dan perjalanan disimpan selama diperlukan untuk menyediakan layanan atau sampai
          pengguna menghapus data tersebut, keluar dari grup, atau mengajukan penghapusan akun. Data
          lokasi yang dikaitkan dengan perjalanan hanya dipertahankan selama diperlukan untuk fungsi
          yang dipilih, keamanan, dukungan, atau kewajiban hukum.
        </p>
        <p>
          Log keamanan dan backup dapat bertahan untuk jangka waktu terbatas setelah data aktif dihapus.
          Data tertentu dapat dianonimkan agar tidak lagi dapat dikaitkan secara wajar dengan pengguna.
        </p>
      </section>

      <section>
        <h2>9. Keamanan</h2>
        <p>ArkhaTouring dapat menggunakan langkah keamanan seperti:</p>
        <ul>
          <li>HTTPS/TLS untuk komunikasi antara aplikasi dan server.</li>
          <li>Autentikasi, token sesi, dan kontrol akses untuk data grup serta perjalanan.</li>
          <li>Pembatasan akses administratif dan logging keamanan.</li>
          <li>Validasi input, proteksi endpoint, rate limiting, dan pemantauan penyalahgunaan.</li>
          <li>Backup serta prosedur pemulihan sesuai kebutuhan operasional.</li>
        </ul>
        <p>
          Pengguna harus menjaga password, perangkat, dan akses ke akun. Segera ubah kredensial dan
          hubungi dukungan jika terdapat aktivitas yang mencurigakan.
        </p>
      </section>

      <section>
        <h2>10. Hak dan pilihan pengguna</h2>
        <p>
          Sesuai hukum yang berlaku, pengguna dapat memiliki hak untuk meminta akses, koreksi,
          penghapusan, pembatasan pemrosesan, atau penjelasan mengenai data pribadinya. Pengguna juga
          dapat memilih untuk tidak memberikan izin lokasi, kamera, media, atau notifikasi tertentu.
        </p>
        <p>
          Pertanyaan dan permintaan privasi dapat dikirim ke{" "}
          <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>. Verifikasi dapat
          diperlukan untuk mencegah akses atau penghapusan data oleh pihak yang tidak berwenang.
        </p>
      </section>

      <section>
        <h2>11. Anak dan pengguna di bawah umur</h2>
        <p>
          ArkhaTouring tidak ditujukan untuk digunakan secara mandiri oleh anak yang belum memenuhi
          persyaratan usia atau kapasitas hukum yang berlaku. Penggunaan oleh pengguna di bawah umur
          harus mengikuti aturan hukum dan pengawasan yang sesuai.
        </p>
      </section>

      <section>
        <h2>12. Transfer lintas wilayah</h2>
        <p>
          Penyedia cloud, peta, atau layanan teknis tertentu dapat memproses data di luar Indonesia.
          Dalam kondisi tersebut, kami berupaya menggunakan penyedia yang memiliki langkah keamanan dan
          perlindungan data yang sesuai dengan sifat informasi yang diproses.
        </p>
      </section>

      <section>
        <h2>13. Perubahan kebijakan</h2>
        <p>
          Kebijakan ini dapat diperbarui apabila fitur lokasi, rute, grup, penyedia peta, infrastruktur,
          atau ketentuan hukum berubah. Tanggal pembaruan terbaru akan selalu ditampilkan pada halaman ini.
        </p>
      </section>

      <section>
        <h2>14. Kontak</h2>
        <p>
          Pertanyaan privasi ArkhaTouring dapat dikirim ke{" "}
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
