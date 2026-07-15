import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Medical Disclaimer Femcare",
  description: "Batas penggunaan Femcare sebagai aplikasi edukasi kesehatan.",
  alternates: { canonical: "/medical-disclaimer/femcare" },
};

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Femcare · Health Disclaimer"
      title="Disclaimer Medis Femcare"
      updated={siteConfig.apps.femcare.privacyEffectiveDate}
      intro="Informasi pada Femcare bersifat edukatif dan tidak menggantikan pemeriksaan atau saran tenaga kesehatan profesional."
    >
      <section className="medical-alert">
        <p className="eyebrow">Important health notice</p>
        <h2>Femcare bukan alat kesehatan.</h2>
        <p>
          Femcare <strong>not a medical device and does not diagnose, treat, cure, or prevent any medical condition.</strong>
        </p>
        <p>
          Dalam Bahasa Indonesia: Femcare bukan alat kesehatan dan tidak mendiagnosis, mengobati,
          menyembuhkan, atau mencegah kondisi medis apa pun.
        </p>
      </section>

      <section>
        <h2>1. Tujuan informasi</h2>
        <p>
          Konten, rekomendasi, kalender, dan penjelasan pada Femcare dibuat untuk tujuan informasi dan
          edukasi umum. Hasil dapat didasarkan pada data yang diberikan pengguna dan tidak mencakup
          pemeriksaan fisik, laboratorium, pencitraan, riwayat klinis lengkap, atau penilaian dokter.
        </p>
      </section>
      <section>
        <h2>2. Bukan pengganti tenaga kesehatan</h2>
        <p>
          Selalu konsultasikan gejala, diagnosis, penggunaan obat, kehamilan, kesuburan, menstruasi,
          menopause, atau kondisi kesehatan lain dengan dokter, bidan, atau tenaga kesehatan berwenang.
          Jangan menunda pertolongan profesional karena informasi dari aplikasi.
        </p>
      </section>
      <section>
        <h2>3. Kondisi darurat</h2>
        <p>
          Femcare tidak menyediakan layanan darurat. Segera hubungi layanan darurat setempat atau pergi
          ke fasilitas kesehatan terdekat apabila mengalami perdarahan berat, nyeri hebat, kehilangan
          kesadaran, kesulitan bernapas, kejang, dugaan komplikasi kehamilan, atau kondisi lain yang terasa gawat.
        </p>
      </section>
      <section>
        <h2>4. Akurasi data pengguna</h2>
        <p>
          Rekomendasi bergantung pada informasi yang dimasukkan pengguna. Data yang tidak lengkap atau
          tidak akurat dapat menghasilkan informasi yang kurang relevan. Pengguna tidak boleh mengandalkan
          hasil aplikasi sebagai satu-satunya dasar keputusan kesehatan.
        </p>
      </section>
      <section>
        <h2>5. Obat dan tindakan medis</h2>
        <p>
          Jangan memulai, menghentikan, atau mengubah obat maupun tindakan medis hanya berdasarkan Femcare.
          Keputusan tersebut harus dibicarakan dengan tenaga kesehatan yang memahami kondisi pengguna.
        </p>
      </section>
      <section>
        <h2>6. Pertanyaan</h2>
        <p>
          Pertanyaan tentang batas fungsi Femcare dapat dikirim ke
          <a href={`mailto:${siteConfig.supportEmail}`}> {siteConfig.supportEmail}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
