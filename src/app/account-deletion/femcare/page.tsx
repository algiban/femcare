import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { DeletionForm } from "@/components/DeletionForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Hapus Akun Femcare",
  description: "Jalur resmi untuk meminta penghapusan akun Femcare dan data yang terkait.",
  alternates: { canonical: "/account-deletion/femcare" },
};

export default function AccountDeletionPage() {
  return (
    <LegalPage
      eyebrow="Femcare · Account Deletion"
      title="Hapus akun dan data Femcare"
      updated={siteConfig.apps.femcare.privacyEffectiveDate}
      intro="Pengguna dapat menghapus akun dari dalam aplikasi atau mengirim permintaan melalui halaman ini. Menghapus aplikasi dari perangkat tidak otomatis menghapus akun."
    >
      <section className="notice-card">
        <h2>Cara tercepat: dari aplikasi</h2>
        <ol className="step-list">
          <li><span>1</span><div><strong>Buka Femcare</strong><p>Masuk menggunakan akun yang akan dihapus.</p></div></li>
          <li><span>2</span><div><strong>Buka Profil</strong><p>Pilih menu Pengaturan akun.</p></div></li>
          <li><span>3</span><div><strong>Pilih Hapus Akun</strong><p>Baca dampak penghapusan dan lakukan verifikasi.</p></div></li>
          <li><span>4</span><div><strong>Konfirmasi</strong><p>Akun dan data terkait akan masuk ke proses penghapusan.</p></div></li>
        </ol>
      </section>

      <section>
        <h2>Permintaan melalui website</h2>
        <p>
          Gunakan email yang sama dengan akun Femcare. Kami dapat mengirim langkah verifikasi untuk
          memastikan permintaan berasal dari pemilik akun. Jangan memasukkan kata sandi, OTP, atau data
          kesehatan di formulir ini.
        </p>
        <DeletionForm />
        <p className="form-fallback">
          Apabila formulir tidak dapat digunakan, kirim email dari alamat akun ke
          <a href={`mailto:${siteConfig.privacyEmail}?subject=Permintaan%20Penghapusan%20Akun%20Femcare`}> {siteConfig.privacyEmail}</a>
          dengan subjek “Permintaan Penghapusan Akun Femcare”.
        </p>
      </section>

      <section>
        <h2>Data yang akan dihapus</h2>
        <ul>
          <li>Akun dan identifier pengguna.</li>
          <li>Profil pengguna yang tersimpan.</li>
          <li>Data kesehatan reproduksi yang dikaitkan dengan akun.</li>
          <li>Riwayat rekomendasi dan catatan kalender yang tersimpan.</li>
          <li>Token sesi aktif dan preferensi terkait akun.</li>
        </ul>
      </section>

      <section>
        <h2>Data yang mungkin dipertahankan sementara</h2>
        <p>
          Salinan cadangan dapat tetap tersedia sementara sampai siklus pencadangan berakhir. Catatan
          tertentu juga dapat dipertahankan apabila diwajibkan oleh hukum atau diperlukan untuk keamanan,
          pencegahan penipuan, dan penyelesaian sengketa. Data tersebut tidak akan digunakan untuk tujuan
          pemasaran dan akan dibatasi sesuai alasan retensinya.
        </p>
      </section>

      <section>
        <h2>Setelah permintaan dikirim</h2>
        <ol>
          <li>Kami menerima dan mencatat permintaan.</li>
          <li>Kami memverifikasi kepemilikan akun melalui email atau mekanisme aman lainnya.</li>
          <li>Akun dinonaktifkan dan data aktif diproses untuk dihapus atau dianonimkan.</li>
          <li>Konfirmasi penyelesaian dikirim ke email pengguna.</li>
        </ol>
        <p>
          Penghapusan bersifat permanen. Setelah selesai, riwayat yang telah dihapus mungkin tidak dapat dipulihkan.
        </p>
      </section>
    </LegalPage>
  );
}
