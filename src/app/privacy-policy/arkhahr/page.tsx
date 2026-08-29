import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy ArkhaHR",
  description: "Kebijakan privasi ArkhaHR mengenai data karyawan, absensi, lokasi, selfie, izin perangkat, penyimpanan, dan hak pengguna.",
  alternates: { canonical: "/privacy-policy/arkhahr" },
};

const documents = [
  { href: "/privacy-policy/arkhahr", label: "Privacy Policy" },
  { href: "/legal/arkhahr", label: "Legal & Terms" },
  { href: "/projects/arkhahr", label: "Tentang ArkhaHR" },
];

export default function ArkhaHRPrivacyPolicyPage() {
  const app = siteConfig.apps.arkhahr;

  return (
    <LegalPage
      eyebrow="ArkhaHR · Privacy Policy"
      title="Kebijakan Privasi ArkhaHR"
      updated={app.privacyEffectiveDate}
      intro="Kebijakan ini menjelaskan bagaimana data pengguna dan data ketenagakerjaan dapat diproses saat ArkhaHR digunakan oleh organisasi, administrator HR, dan karyawan."
      asideTitle="Dokumen ArkhaHR"
      documents={documents}
    >
      <section>
        <h2>1. Ruang lingkup dan peran para pihak</h2>
        <p>
          ArkhaHR dikembangkan oleh <strong>{siteConfig.legalName}</strong> sebagai Human Resource
          Information System. Dalam penggunaan oleh perusahaan atau organisasi, organisasi tersebut
          umumnya menentukan tujuan penggunaan data ketenagakerjaan dan bertindak sebagai pihak yang
          mengelola hubungan dengan karyawannya. Arkha Developer memproses data sesuai fungsi layanan,
          konfigurasi organisasi, dan perjanjian yang berlaku.
        </p>
        <p>
          Kebijakan ini berlaku untuk aplikasi ArkhaHR, halaman produk, dukungan, dan fitur yang
          berkaitan langsung dengan ArkhaHR. Kebijakan internal perusahaan pengguna dapat memberikan
          ketentuan tambahan selama tidak mengurangi hak pengguna yang diberikan oleh hukum yang berlaku.
        </p>
      </section>

      <section>
        <h2>2. Data yang dapat diproses</h2>
        <h3>Data identitas dan pekerjaan</h3>
        <ul>
          <li>Nama, identifier karyawan, email, nomor telepon, foto profil, dan informasi kontak.</li>
          <li>Jabatan, departemen, atasan, lokasi kerja, status kerja, jadwal, shift, dan informasi organisasi.</li>
          <li>Data profil atau perubahan profil yang diajukan melalui aplikasi.</li>
        </ul>

        <h3>Data autentikasi dan keamanan</h3>
        <ul>
          <li>Informasi sesi, token autentikasi, installation ID, dan metadata perangkat yang diperlukan untuk keamanan.</li>
          <li>Status keberhasilan autentikasi biometrik dari sistem operasi perangkat.</li>
          <li>ArkhaHR tidak perlu menerima atau menyimpan template sidik jari maupun wajah biometrik mentah yang dikelola sistem operasi perangkat.</li>
        </ul>

        <h3>Data absensi dan bukti kehadiran</h3>
        <ul>
          <li>Waktu clock in/clock out, jadwal, shift, status kehadiran, dan catatan absensi.</li>
          <li>Lokasi perangkat dan hasil pemeriksaan geofence ketika fitur absensi berbasis lokasi digunakan.</li>
          <li>Foto selfie atau bukti kamera apabila diwajibkan oleh kebijakan organisasi.</li>
          <li>Metadata perangkat dan status konektivitas yang relevan untuk integritas proses absensi.</li>
        </ul>

        <h3>Data transaksi HR</h3>
        <ul>
          <li>Pengajuan cuti, izin, lembur, timesheet, reimbursement, perjalanan dinas, tiket HR, dan status persetujuannya.</li>
          <li>Lampiran seperti foto, dokumen, bukti pembayaran, atau file pendukung yang dipilih pengguna.</li>
          <li>Komentar, alasan, catatan, serta riwayat perubahan yang berkaitan dengan proses HR.</li>
        </ul>
      </section>

      <section>
        <h2>3. Izin perangkat</h2>
        <p>ArkhaHR dapat meminta izin perangkat hanya ketika diperlukan oleh fitur yang digunakan, antara lain:</p>
        <ul>
          <li><strong>Lokasi:</strong> untuk memeriksa posisi dan geofence pada proses absensi atau fitur lokasi kerja.</li>
          <li><strong>Kamera:</strong> untuk mengambil selfie absensi atau bukti pendukung.</li>
          <li><strong>Foto dan file:</strong> untuk memilih lampiran yang secara aktif ingin dikirim pengguna.</li>
          <li><strong>Biometrik:</strong> untuk membantu membuka atau memverifikasi akses aplikasi melalui mekanisme aman milik sistem operasi.</li>
          <li><strong>Jaringan:</strong> untuk sinkronisasi data, validasi server, dan komunikasi dengan layanan organisasi.</li>
        </ul>
        <p>
          Lokasi tidak dimaksudkan untuk pelacakan terus-menerus di latar belakang kecuali suatu fitur
          khusus secara eksplisit diaktifkan dan dijelaskan kepada pengguna. Pada alur absensi standar,
          lokasi digunakan saat proses yang membutuhkan validasi lokasi dijalankan.
        </p>
      </section>

      <section>
        <h2>4. Tujuan penggunaan data</h2>
        <p>Data diproses untuk tujuan yang relevan dengan operasional HR, termasuk:</p>
        <ul>
          <li>Mengautentikasi pengguna dan menjaga keamanan sesi.</li>
          <li>Menjalankan absensi, validasi lokasi, bukti kehadiran, dan pencatatan waktu kerja.</li>
          <li>Memproses pengajuan dan persetujuan HR sesuai struktur organisasi.</li>
          <li>Menyimpan draft, cache, dan antrean sinkronisasi agar fitur tetap dapat digunakan secara andal.</li>
          <li>Menampilkan informasi kerja, saldo, status pengajuan, riwayat, dan data operasional yang relevan.</li>
          <li>Mencegah penyalahgunaan, mendeteksi masalah teknis, dan menjaga integritas layanan.</li>
          <li>Memberikan dukungan pengguna dan memenuhi kewajiban hukum yang berlaku.</li>
        </ul>
      </section>

      <section>
        <h2>5. Penyimpanan lokal dan penggunaan offline</h2>
        <p>
          ArkhaHR dapat menyimpan cache, draft formulir, metadata lampiran, dan antrean sinkronisasi di
          perangkat. Penyimpanan ini digunakan agar pekerjaan pengguna tidak langsung hilang ketika
          koneksi tidak tersedia. Data lokal dirancang dipisahkan berdasarkan tenant/organisasi dan
          pengguna yang aktif. Informasi autentikasi sensitif disimpan melalui secure storage yang
          disediakan platform bila tersedia.
        </p>
        <p>
          Data yang masih berada dalam antrean offline belum dianggap sebagai transaksi final sampai
          berhasil diterima dan divalidasi oleh server organisasi.
        </p>
      </section>

      <section>
        <h2>6. Berbagi data dan penyedia layanan</h2>
        <p>
          Data ArkhaHR dapat diakses oleh organisasi yang menggunakan layanan, administrator yang
          berwenang, atasan atau approver sesuai struktur akses, serta penyedia infrastruktur yang
          diperlukan untuk menjalankan layanan. Akses dibatasi sesuai fungsi dan kewenangan.
        </p>
        <p>
          Kami tidak menjual data pribadi pengguna. Apabila layanan pihak ketiga digunakan untuk hosting,
          email transaksional, penyimpanan file, pemantauan error, atau fungsi teknis lain, data yang
          dikirim dibatasi pada kebutuhan layanan tersebut dan mengikuti konfigurasi deployment yang berlaku.
        </p>
      </section>

      <section>
        <h2>7. Validasi absensi dan keputusan organisasi</h2>
        <p>
          GPS, geofence, selfie, metadata perangkat, atau status offline merupakan bukti pendukung.
          Hasil akhir mengenai valid atau tidaknya absensi, keterlambatan, jam kerja, persetujuan, dan
          konsekuensi ketenagakerjaan ditentukan oleh aturan organisasi dan validasi sistem server.
        </p>
      </section>

      <section>
        <h2>8. Retensi dan penghapusan data</h2>
        <p>
          Jangka penyimpanan data bergantung pada jenis data, kebutuhan operasional, kewajiban hukum,
          kontrak layanan, dan kebijakan organisasi pengguna. Data lokal seperti draft atau cache dapat
          dihapus ketika data berhasil disinkronkan, pengguna logout, aplikasi direset, atau sesuai
          mekanisme pembersihan aplikasi.
        </p>
        <p>
          Karena akun ArkhaHR dapat dikelola oleh perusahaan atau administrator HR, permintaan koreksi,
          akses, atau penghapusan data ketenagakerjaan pada umumnya perlu diajukan kepada organisasi
          tempat pengguna bekerja. Jika pengguna tidak mengetahui jalur yang benar, permintaan dapat
          dikirim ke <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a> untuk diarahkan.
        </p>
      </section>

      <section>
        <h2>9. Keamanan</h2>
        <p>
          ArkhaHR menggunakan pendekatan keamanan yang dapat mencakup secure storage, isolasi data
          tenant dan pengguna, kontrol akses berbasis peran, validasi server, idempotency untuk transaksi
          tertentu, serta mekanisme sinkronisasi yang terkontrol. Tidak ada sistem yang dapat menjamin
          keamanan absolut, sehingga organisasi dan pengguna juga wajib menjaga kredensial dan perangkatnya.
        </p>
      </section>

      <section>
        <h2>10. Hak dan pilihan pengguna</h2>
        <p>
          Sesuai hukum yang berlaku dan hubungan pengguna dengan organisasi, pengguna dapat memiliki hak
          untuk meminta akses, koreksi, pembatasan, atau penghapusan data tertentu. Sebagian hak dapat
          dilaksanakan melalui admin HR karena organisasi merupakan pihak yang mengelola data pekerjaan.
        </p>
        <p>
          Pengguna dapat mengubah izin kamera, lokasi, file, atau biometrik melalui pengaturan perangkat.
          Menonaktifkan izin tertentu dapat membuat fitur yang bergantung pada izin tersebut tidak dapat digunakan.
        </p>
      </section>

      <section>
        <h2>11. Data anak</h2>
        <p>
          ArkhaHR ditujukan untuk penggunaan dalam konteks hubungan kerja atau organisasi. Organisasi
          bertanggung jawab memastikan akun diberikan kepada pengguna yang memenuhi ketentuan usia dan
          dasar pemrosesan data yang sesuai dengan hukum yang berlaku.
        </p>
      </section>

      <section>
        <h2>12. Transfer dan lokasi pemrosesan</h2>
        <p>
          Lokasi server dan penyedia layanan dapat berbeda tergantung konfigurasi deployment. Apabila
          data diproses lintas wilayah, langkah perlindungan yang diwajibkan oleh hukum dan perjanjian
          layanan akan diterapkan sesuai konteks penggunaan.
        </p>
      </section>

      <section>
        <h2>13. Perubahan kebijakan</h2>
        <p>
          Kebijakan ini dapat diperbarui ketika fitur, arsitektur, vendor, atau kewajiban hukum berubah.
          Tanggal pembaruan terbaru akan ditampilkan pada halaman ini. Perubahan material dapat disertai
          pemberitahuan tambahan melalui aplikasi atau organisasi pengguna.
        </p>
      </section>

      <section>
        <h2>14. Kontak privasi</h2>
        <p>
          Pertanyaan mengenai privasi ArkhaHR dapat dikirim ke
          <a href={`mailto:${siteConfig.privacyEmail}`}> {siteConfig.privacyEmail}</a>. Untuk kendala teknis,
          hubungi <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
        </p>
        <address>{siteConfig.legalName} · {siteConfig.location}</address>
      </section>
    </LegalPage>
  );
}
