# Arkha Developer — Website & Legal Center

Website resmi Arkha Developer berbasis **Next.js 16 App Router**. Proyek ini sudah mencakup landing page, halaman proyek, Privacy Policy Femcare, Terms & Conditions, Account Deletion, Medical Disclaimer, Support Center, Contact, SEO, sitemap, robots.txt, dark mode, serta API formulir email.

## Fitur

- Landing page modern dan responsif
- Halaman profil Arkha Developer dan daftar produk
- Privacy Policy khusus Femcare
- Terms & Conditions khusus Femcare
- Account Deletion page dan formulir permintaan penghapusan akun
- Medical Disclaimer untuk aplikasi kesehatan
- Contact dan Support form
- Integrasi email menggunakan Resend REST API
- SEO metadata, Open Graph, sitemap, robots.txt, dan web manifest
- Security headers dasar
- GitHub Actions untuk validasi build
- Siap deploy ke Vercel

## 1. Persyaratan

- Node.js 20.9 atau lebih baru
- npm 10 atau lebih baru

## 2. Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

## 3. Konfigurasi yang wajib diubah

Edit `src/config/site.ts`:

- `url`: domain website produksi
- `supportEmail`: email bantuan aktif
- `privacyEmail`: email penghapusan akun dan privasi
- tautan Instagram, GitHub, dan LinkedIn
- URL aplikasi di Google Play setelah tersedia

Jangan menggunakan domain atau alamat email yang belum kamu miliki.

## 4. Mengaktifkan formulir

Form Contact dan Account Deletion dikirim melalui Resend.

1. Buat akun Resend.
2. Verifikasi domain pengirim.
3. Salin `.env.example` menjadi `.env.local`.
4. Isi:

```env
RESEND_API_KEY=re_xxx
EMAIL_FROM=Arkha Developer <noreply@domainkamu.com>
CONTACT_TO_EMAIL=support@domainkamu.com
PRIVACY_TO_EMAIL=privacy@domainkamu.com
```

Pada Vercel, masukkan variabel yang sama melalui **Project Settings → Environment Variables**.

## 5. Build produksi

```bash
npm run lint
npm run build
npm run start
```

## 6. Upload ke GitHub

```bash
git init
git add .
git commit -m "Initial Arkha Developer website"
git branch -M main
git remote add origin https://github.com/USERNAME/arkha-developer-website.git
git push -u origin main
```

Atau buat repository langsung dengan GitHub CLI:

```bash
gh repo create arkha-developer-website --public --source=. --remote=origin --push
```

## 7. Deploy ke Vercel

1. Login ke Vercel.
2. Pilih **Add New → Project**.
3. Import repository GitHub.
4. Framework akan terdeteksi sebagai Next.js.
5. Tambahkan environment variables.
6. Klik **Deploy**.

## 8. URL yang dimasukkan ke Google Play Console

Setelah domain aktif, gunakan URL berikut:

- Privacy Policy: `https://domainkamu.com/privacy-policy/femcare`
- Account Deletion: `https://domainkamu.com/account-deletion/femcare`
- Terms: `https://domainkamu.com/terms/femcare`
- Medical Disclaimer: `https://domainkamu.com/medical-disclaimer/femcare`
- Support: `https://domainkamu.com/support`

## 9. Checklist sebelum mengirim aplikasi ke Google Play

- Pastikan semua informasi pada Privacy Policy sesuai perilaku aplikasi sebenarnya.
- Implementasikan tombol penghapusan akun di dalam Femcare.
- Jalur yang disarankan: **Profil → Pengaturan → Hapus Akun**.
- Penghapusan harus mencakup akun dan data terkait, bukan hanya logout.
- Pastikan formulir website benar-benar masuk ke email privasi.
- Isi Data Safety secara konsisten dengan SDK, backend, dan kebijakan privasi.
- Isi Health Apps Declaration karena Femcare memproses informasi kesehatan.
- Cantumkan disclaimer medis pada deskripsi Google Play dan di dalam aplikasi.
- Jangan mengklaim Femcare sebagai alat diagnosis atau pengganti dokter.
- Gunakan HTTPS pada seluruh komunikasi aplikasi dan website.


## 10. Dokumentasi Google Play

- `docs/GOOGLE_PLAY_CHECKLIST.md` — checklist website, aplikasi, dan Play Console.
- `docs/DATA_SAFETY_DRAFT.md` — inventaris awal untuk Data Safety.
- `docs/STORE_LISTING_COPY.md` — draft deskripsi Google Play dan disclaimer medis.
- `SECURITY.md` — panduan pelaporan kerentanan dan pengelolaan secret.

## Catatan legal

Template ini adalah fondasi teknis dan dokumentasi operasional, bukan nasihat hukum. Isi akhir harus disesuaikan dengan alur data produksi, SDK yang dipakai, lokasi server, kebijakan retensi, dan proses penghapusan data yang benar-benar diterapkan.
