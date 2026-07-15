# Checklist Publikasi Femcare di Google Play

Dokumen ini memisahkan pekerjaan yang sudah disediakan oleh website dan pekerjaan yang tetap harus diselesaikan di aplikasi serta Play Console.

## A. Sudah tersedia di website

- Privacy Policy: `/privacy-policy/femcare`
- Account Deletion web resource: `/account-deletion/femcare`
- Terms & Conditions: `/terms/femcare`
- Medical Disclaimer: `/medical-disclaimer/femcare`
- Support Center: `/support`
- Contact: `/contact`
- Sitemap, robots.txt, manifest, dan metadata SEO

## B. Wajib diselesaikan di aplikasi Femcare

### 1. Jalur penghapusan akun di dalam aplikasi

Sediakan menu yang mudah ditemukan:

```text
Profil
└── Pengaturan
    └── Hapus Akun
```

Proses minimal:

1. Tampilkan dampak penghapusan.
2. Verifikasi ulang pengguna.
3. Minta konfirmasi final.
4. Hapus akun autentikasi.
5. Hapus atau anonimisasi seluruh data terkait pada backend.
6. Cabut token sesi.
7. Tampilkan hasil atau kirim konfirmasi.

Jangan hanya melakukan logout. Jangan mengarahkan pengguna hanya ke email jika aplikasi memang mendukung pembuatan akun.

### 2. Disclaimer medis di dalam aplikasi

Tampilkan disclaimer pada:

- onboarding atau halaman awal fitur kesehatan;
- halaman hasil rekomendasi;
- halaman tentang aplikasi;
- deskripsi Google Play.

Teks minimum yang disarankan:

> Femcare bukan alat kesehatan dan tidak mendiagnosis, mengobati, menyembuhkan, atau mencegah kondisi medis apa pun. Informasi di dalam aplikasi bersifat edukatif dan tidak menggantikan konsultasi dengan dokter atau tenaga kesehatan berwenang.

### 3. Penanganan kondisi darurat

Pada halaman rekomendasi, sediakan peringatan agar pengguna segera mencari bantuan profesional apabila mengalami gejala gawat. Femcare tidak boleh diposisikan sebagai layanan darurat.

## C. Wajib diselesaikan di Google Play Console

### 1. App access

Berikan instruksi login kepada reviewer apabila aplikasi memerlukan akun. Sediakan akun demo yang aktif dan tidak memakai OTP pribadi developer.

### 2. Ads

Nyatakan apakah aplikasi mengandung iklan. Jawaban harus sesuai SDK dan tampilan produksi.

### 3. Content rating

Isi kuesioner berdasarkan fungsi sebenarnya.

### 4. Target audience

Femcare pada template ini ditetapkan untuk pengguna minimal 18 tahun. Pastikan pilihan target usia, store listing, onboarding, dan Terms konsisten.

### 5. Data Safety

Isi berdasarkan alur data produksi, bukan hanya kode buatan sendiri. Periksa pula SDK seperti Firebase, crash reporting, analytics, Google Sign-In, dan layanan AI.

Gunakan `docs/DATA_SAFETY_DRAFT.md` sebagai daftar pemeriksaan awal.

### 6. Account deletion

Masukkan URL produksi:

```text
https://DOMAIN-KAMU.com/account-deletion/femcare
```

Pastikan URL:

- dapat dibuka tanpa login;
- tidak menghasilkan 404;
- secara jelas menyebut Femcare dan Arkha Developer;
- menjelaskan data yang dihapus dan data yang mungkin dipertahankan;
- menyediakan cara memulai permintaan.

### 7. Privacy Policy

Masukkan URL produksi:

```text
https://DOMAIN-KAMU.com/privacy-policy/femcare
```

Pastikan kebijakan sesuai perilaku aplikasi sebenarnya.

### 8. Health Apps Declaration

Karena Femcare memproses informasi kesehatan reproduksi dan memberikan rekomendasi edukatif, isi deklarasi aplikasi kesehatan sesuai fungsi sebenarnya.

### 9. Store listing disclaimer

Tambahkan disclaimer medis secara jelas pada deskripsi aplikasi. Lihat `docs/STORE_LISTING_COPY.md`.

### 10. Permissions declaration

Hanya minta permission yang benar-benar digunakan. Hapus permission bawaan atau SDK yang tidak diperlukan sebelum mengunggah AAB.

## D. Pemeriksaan teknis sebelum upload AAB

- `applicationId` final dan tidak akan diganti.
- Target SDK memenuhi persyaratan Play Console saat upload.
- Release signing memakai upload key yang aman.
- `versionCode` naik.
- Endpoint API menggunakan HTTPS.
- Tidak ada secret di repository.
- Mode debug, log sensitif, dan test credential dihapus.
- Aplikasi dapat digunakan oleh reviewer.
- Fitur hapus akun diuji dari ujung ke ujung.
- Privacy Policy dan Data Safety cocok dengan build yang diunggah.
