import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal ArkhaHR",
  description: "Ketentuan penggunaan dan informasi legal ArkhaHR untuk organisasi, administrator HR, dan karyawan.",
  alternates: { canonical: "/legal/arkhahr" },
};

const documents = [
  { href: "/privacy-policy/arkhahr", label: "Privacy Policy" },
  { href: "/legal/arkhahr", label: "Legal & Terms" },
  { href: "/projects/arkhahr", label: "Tentang ArkhaHR" },
];

export default function ArkhaHRLegalPage() {
  const app = siteConfig.apps.arkhahr;

  return (
    <LegalPage
      eyebrow="ArkhaHR · Legal"
      title="Ketentuan Penggunaan & Informasi Legal ArkhaHR"
      updated={app.legalEffectiveDate}
      intro="Dokumen ini mengatur penggunaan ArkhaHR oleh organisasi, administrator, approver, dan karyawan serta menjelaskan batas tanggung jawab layanan."
      asideTitle="Dokumen ArkhaHR"
      documents={documents}
    >
      <section>
        <h2>1. Penerimaan ketentuan</h2>
        <p>
          Dengan mengakses atau menggunakan ArkhaHR, pengguna menyetujui ketentuan ini serta kebijakan
          internal organisasi yang memberikan akses. Apabila penggunaan ArkhaHR disediakan oleh perusahaan,
          akses pengguna juga tunduk pada hubungan kerja, kebijakan HR, dan kewenangan yang ditetapkan organisasi.
        </p>
      </section>

      <section>
        <h2>2. Tujuan layanan</h2>
        <p>
          ArkhaHR merupakan sistem informasi sumber daya manusia yang membantu proses seperti absensi,
          cuti, izin, lembur, timesheet, reimbursement, perjalanan dinas, tiket HR, perubahan profil,
          persetujuan, dan fungsi administrasi terkait. Ketersediaan fitur dapat berbeda berdasarkan paket,
          konfigurasi, peran pengguna, platform, dan integrasi backend organisasi.
        </p>
      </section>

      <section>
        <h2>3. Akun, akses, dan kewenangan</h2>
        <ul>
          <li>Pengguna wajib menggunakan akun yang diberikan atau disetujui organisasi.</li>
          <li>Kredensial, OTP, token, dan akses perangkat tidak boleh dibagikan kepada pihak lain.</li>
          <li>Hak akses ditentukan berdasarkan peran, tenant/organisasi, serta kebijakan administrator.</li>
          <li>Organisasi dapat menonaktifkan atau mengubah akses ketika hubungan kerja, jabatan, atau kewenangan berubah.</li>
        </ul>
      </section>

      <section>
        <h2>4. Absensi dan bukti kehadiran</h2>
        <p>
          ArkhaHR dapat menggunakan lokasi, geofence, foto selfie, waktu perangkat, metadata teknis,
          atau sinyal lain sebagai bukti pendukung proses kehadiran. Informasi tersebut tidak berdiri
          sendiri sebagai keputusan final. Status akhir absensi mengikuti validasi server, jadwal,
          kebijakan perusahaan, dan peninjauan pihak yang berwenang.
        </p>
        <p>
          Pengguna dilarang memanipulasi lokasi, waktu, foto, perangkat, jaringan, atau mekanisme lain
          dengan tujuan memalsukan kehadiran atau transaksi HR.
        </p>
      </section>

      <section>
        <h2>5. Pengajuan dan transaksi HR</h2>
        <p>
          Pengajuan yang dibuat di perangkat, termasuk ketika offline, belum dianggap selesai sampai
          berhasil disinkronkan dan diterima server. Status draft, queued, submitted, approved, rejected,
          atau status lain ditentukan oleh alur sistem dan kebijakan organisasi.
        </p>
        <p>
          Pengguna bertanggung jawab memastikan data, nominal, waktu, alasan, dan lampiran yang dikirim
          benar serta tidak melanggar hak pihak lain.
        </p>
      </section>

      <section>
        <h2>6. Informasi gaji, benefit, dan ketenagakerjaan</h2>
        <p>
          Apabila ArkhaHR menampilkan informasi gaji, benefit, BPJS, saldo cuti, jadwal, atau data
          ketenagakerjaan lain, data tersebut berasal dari konfigurasi dan sumber organisasi. Dokumen
          resmi perusahaan, peraturan perundang-undangan, dan keputusan HR tetap menjadi rujukan utama
          apabila terdapat perbedaan dengan tampilan aplikasi.
        </p>
      </section>

      <section>
        <h2>7. Penggunaan yang dilarang</h2>
        <ul>
          <li>Mengakses data pengguna atau organisasi lain tanpa izin.</li>
          <li>Mencoba melewati autentikasi, otorisasi, geofence, atau kontrol keamanan.</li>
          <li>Mengirim malware, file berbahaya, atau data palsu.</li>
          <li>Menggunakan akun milik orang lain atau membantu pihak lain menyalahgunakan layanan.</li>
          <li>Merekayasa balik atau mengeksploitasi layanan sejauh dilarang oleh hukum atau perjanjian.</li>
        </ul>
      </section>

      <section>
        <h2>8. Privasi dan izin perangkat</h2>
        <p>
          Pemrosesan data ArkhaHR dijelaskan dalam
          <a href="/privacy-policy/arkhahr"> Kebijakan Privasi ArkhaHR</a>. Pengguna memahami bahwa
          fitur tertentu membutuhkan izin lokasi, kamera, file, jaringan, atau biometrik. Menolak izin
          dapat membatasi fungsi yang memang bergantung pada izin tersebut.
        </p>
      </section>

      <section>
        <h2>9. Ketersediaan dan perubahan layanan</h2>
        <p>
          Kami berupaya menjaga layanan tetap tersedia, namun tidak menjamin bahwa setiap fitur akan
          selalu bebas gangguan. Pemeliharaan, konektivitas, gangguan vendor, perubahan sistem operasi,
          atau konfigurasi organisasi dapat memengaruhi layanan. Fitur dapat diperbaiki, diubah,
          ditambahkan, atau dihentikan dengan mempertimbangkan kebutuhan produk dan kewajiban yang berlaku.
        </p>
      </section>

      <section>
        <h2>10. Kekayaan intelektual</h2>
        <p>
          Nama ArkhaHR, desain, perangkat lunak, dokumentasi, komponen, dan materi yang dibuat oleh
          Arkha Developer dilindungi oleh hak kekayaan intelektual yang berlaku. Penggunaan layanan tidak
          memindahkan kepemilikan tersebut kepada pengguna atau organisasi kecuali dinyatakan lain dalam perjanjian tertulis.
        </p>
      </section>

      <section>
        <h2>11. Tanggung jawab organisasi</h2>
        <p>
          Organisasi yang menggunakan ArkhaHR bertanggung jawab atas keabsahan instruksi pemrosesan data,
          konfigurasi kebijakan HR, penetapan approver, jadwal, geofence, aturan absensi, hak akses,
          serta keputusan ketenagakerjaan yang diambil berdasarkan data organisasi.
        </p>
      </section>

      <section>
        <h2>12. Batas tanggung jawab</h2>
        <p>
          Sejauh diizinkan oleh hukum, Arkha Developer tidak bertanggung jawab atas kerugian yang timbul
          semata-mata dari data yang salah dimasukkan pengguna, konfigurasi organisasi yang keliru,
          konektivitas perangkat, manipulasi pihak ketiga, atau keputusan ketenagakerjaan yang berada di
          luar kendali layanan. Ketentuan ini tidak menghapus tanggung jawab yang secara hukum tidak dapat dikesampingkan.
        </p>
      </section>

      <section>
        <h2>13. Pengakhiran akses</h2>
        <p>
          Akses dapat berakhir ketika akun dinonaktifkan, hubungan organisasi berakhir, layanan dihentikan,
          atau terjadi pelanggaran ketentuan. Pengelolaan data setelah akses berakhir mengikuti Kebijakan
          Privasi, kontrak layanan, kebijakan organisasi, dan kewajiban hukum yang berlaku.
        </p>
      </section>

      <section>
        <h2>14. Hukum yang berlaku</h2>
        <p>
          Ketentuan ini ditafsirkan berdasarkan hukum Republik Indonesia, tanpa mengurangi hak pengguna
          yang wajib diberikan oleh peraturan yang berlaku. Perselisihan diutamakan untuk diselesaikan
          melalui komunikasi dan mekanisme yang disepakati para pihak sebelum menempuh jalur lain yang tersedia.
        </p>
      </section>

      <section>
        <h2>15. Perubahan ketentuan</h2>
        <p>
          Ketentuan dapat diperbarui untuk menyesuaikan perubahan fitur, model layanan, keamanan, atau
          kewajiban hukum. Versi terbaru dan tanggal pembaruan akan tersedia pada halaman ini.
        </p>
      </section>

      <section>
        <h2>16. Kontak</h2>
        <p>
          Pertanyaan mengenai ArkhaHR dapat dikirim ke
          <a href={`mailto:${siteConfig.supportEmail}`}> {siteConfig.supportEmail}</a>. Pertanyaan mengenai
          privasi dapat dikirim ke <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>.
        </p>
        <address>{siteConfig.legalName} · {siteConfig.location}</address>
      </section>
    </LegalPage>
  );
}
