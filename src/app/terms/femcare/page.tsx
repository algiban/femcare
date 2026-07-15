import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions Femcare",
  description: "Ketentuan penggunaan aplikasi Femcare.",
  alternates: { canonical: "/terms/femcare" },
};

export default function TermsPage() {
  const app = siteConfig.apps.femcare;

  return (
    <LegalPage
      eyebrow="Femcare · Terms"
      title="Syarat dan Ketentuan Femcare"
      updated={app.privacyEffectiveDate}
      intro="Ketentuan ini mengatur penggunaan aplikasi Femcare, akun pengguna, konten edukasi, dan layanan terkait."
    >
      <section>
        <h2>1. Persetujuan</h2>
        <p>
          Dengan mengakses atau menggunakan Femcare, pengguna menyetujui Syarat dan Ketentuan ini
          serta Kebijakan Privasi Femcare. Apabila tidak setuju, pengguna harus berhenti menggunakan layanan.
        </p>
      </section>
      <section>
        <h2>2. Kelayakan pengguna</h2>
        <p>
          Femcare ditujukan untuk pengguna berusia minimal {app.minimumAge} tahun dan bukan produk yang
          ditujukan untuk anak. Pengguna bertanggung jawab memastikan informasi usia dan akun yang diberikan benar.
        </p>
      </section>
      <section>
        <h2>3. Sifat layanan</h2>
        <p>
          Femcare menyediakan fitur edukasi, pencatatan, kalender, dan rekomendasi informasi berdasarkan
          data pengguna. Femcare bukan alat kesehatan, bukan layanan telemedisin, dan bukan pengganti dokter.
        </p>
        <p>
          Femcare tidak mendiagnosis, mengobati, menyembuhkan, atau mencegah kondisi medis. Untuk keluhan,
          diagnosis, atau pengobatan, pengguna harus berkonsultasi dengan tenaga kesehatan berwenang.
        </p>
      </section>
      <section>
        <h2>4. Akun dan keamanan</h2>
        <ul>
          <li>Pengguna harus memberikan informasi yang akurat dan memperbaruinya jika berubah.</li>
          <li>Pengguna bertanggung jawab menjaga perangkat, email, OTP, dan akses akun.</li>
          <li>Pengguna dilarang menggunakan identitas orang lain tanpa izin.</li>
          <li>Aktivitas mencurigakan harus segera dilaporkan kepada dukungan.</li>
        </ul>
      </section>
      <section>
        <h2>5. Penggunaan yang diperbolehkan</h2>
        <p>Pengguna dilarang:</p>
        <ul>
          <li>Mengakses sistem, API, atau data tanpa izin.</li>
          <li>Mengganggu keamanan, performa, atau ketersediaan layanan.</li>
          <li>Mengunggah malware, melakukan scraping berlebihan, atau mencoba reverse engineering yang melanggar hukum.</li>
          <li>Menggunakan Femcare untuk memberikan diagnosis atau layanan medis kepada pihak lain.</li>
          <li>Menyalahgunakan konten untuk aktivitas ilegal, menyesatkan, atau merugikan.</li>
        </ul>
      </section>
      <section>
        <h2>6. Data dan privasi</h2>
        <p>
          Pemrosesan data dijelaskan dalam Kebijakan Privasi. Pengguna tetap memiliki hak atas data
          pribadinya dan dapat meminta penghapusan akun melalui aplikasi atau website.
        </p>
      </section>
      <section>
        <h2>7. Konten dan rekomendasi</h2>
        <p>
          Kami berupaya menjaga konten tetap relevan dan mudah dipahami, tetapi tidak menjamin seluruh
          informasi akan selalu lengkap, bebas kesalahan, atau cocok untuk setiap kondisi individu.
          Rekomendasi dipengaruhi oleh akurasi data yang diberikan pengguna.
        </p>
      </section>
      <section>
        <h2>8. Tautan dan layanan pihak ketiga</h2>
        <p>
          Femcare dapat terhubung ke layanan pihak ketiga. Arkha Developer tidak mengendalikan seluruh
          isi, keamanan, atau kebijakan pihak ketiga. Penggunaan layanan tersebut tunduk pada ketentuan
          penyedia masing-masing.
        </p>
      </section>
      <section>
        <h2>9. Hak kekayaan intelektual</h2>
        <p>
          Merek, desain, kode, tulisan, ilustrasi, dan elemen Femcare dimiliki atau digunakan secara sah
          oleh Arkha Developer. Pengguna memperoleh lisensi terbatas, pribadi, dan tidak dapat dialihkan
          untuk menggunakan aplikasi sesuai ketentuan ini.
        </p>
      </section>
      <section>
        <h2>10. Ketersediaan dan perubahan layanan</h2>
        <p>
          Kami dapat memperbarui, menambah, membatasi, atau menghentikan fitur untuk keamanan, pemeliharaan,
          kepatuhan, atau pengembangan produk. Gangguan sementara dapat terjadi dan akan ditangani secara wajar.
        </p>
      </section>
      <section>
        <h2>11. Penangguhan dan penghentian akun</h2>
        <p>
          Akun dapat dibatasi atau dihentikan jika pengguna melanggar ketentuan, membahayakan sistem,
          melakukan penyalahgunaan, atau apabila diwajibkan oleh hukum. Pengguna dapat mengakhiri penggunaan
          kapan saja dan meminta penghapusan akun.
        </p>
      </section>
      <section>
        <h2>12. Batas tanggung jawab</h2>
        <p>
          Sejauh diizinkan hukum, Femcare disediakan sebagaimana adanya. Arkha Developer tidak bertanggung
          jawab atas keputusan medis yang dibuat hanya berdasarkan informasi aplikasi, kehilangan yang
          disebabkan data pengguna yang tidak akurat, atau gangguan dari layanan pihak ketiga.
        </p>
        <p>Ketentuan ini tidak menghilangkan hak konsumen yang tidak dapat dikesampingkan oleh hukum.</p>
      </section>
      <section>
        <h2>13. Ganti rugi</h2>
        <p>
          Pengguna bertanggung jawab atas kerugian yang timbul dari penyalahgunaan layanan, pelanggaran hak
          pihak lain, atau pelanggaran ketentuan ini, sejauh diperbolehkan hukum.
        </p>
      </section>
      <section>
        <h2>14. Hukum yang berlaku</h2>
        <p>
          Ketentuan ini ditafsirkan berdasarkan hukum Republik Indonesia. Sengketa diupayakan selesai melalui
          komunikasi dan musyawarah terlebih dahulu sebelum menggunakan jalur hukum yang tersedia.
        </p>
      </section>
      <section>
        <h2>15. Perubahan ketentuan</h2>
        <p>
          Ketentuan dapat diperbarui. Penggunaan layanan setelah perubahan berlaku berarti pengguna menerima
          ketentuan yang telah diperbarui, sepanjang pemberitahuan yang diperlukan telah diberikan.
        </p>
      </section>
      <section>
        <h2>16. Kontak</h2>
        <p>
          Pertanyaan mengenai ketentuan ini dapat dikirim ke
          <a href={`mailto:${siteConfig.supportEmail}`}> {siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
