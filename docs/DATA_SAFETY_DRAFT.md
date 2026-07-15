# Draft Pemeriksaan Data Safety — Femcare

Dokumen ini **bukan jawaban final otomatis**. Gunakan sebagai inventaris sebelum mengisi Data Safety di Play Console. Jawaban akhir harus mengikuti build produksi, SDK, konfigurasi Firebase, backend, dan layanan AI yang benar-benar aktif.

## 1. Data yang kemungkinan dikumpulkan

| Kategori Google Play | Contoh data Femcare | Tujuan yang mungkin |
|---|---|---|
| Personal info | Nama, email, foto profil | Account management, app functionality |
| User IDs | ID akun internal, Firebase UID | Account management, security |
| Health and fitness | Gejala, kondisi reproduksi, siklus menstruasi, kehamilan, menopause | App functionality, personalization |
| App activity | Riwayat rekomendasi, interaksi fitur | App functionality, personalization |
| App info and performance | Crash log, diagnostics, versi aplikasi | Analytics, developer communications, security |
| Device or other IDs | Identifier dari layanan autentikasi atau diagnostik | Security, fraud prevention, app functionality |
| Messages | Isi tiket support yang dikirim pengguna | Developer communications, support |

## 2. Pertanyaan yang harus diverifikasi

Untuk setiap tipe data, tentukan:

1. Apakah data dikumpulkan dari perangkat?
2. Apakah data dibagikan kepada pihak ketiga menurut definisi Google Play?
3. Apakah pemrosesan hanya bersifat sementara?
4. Apakah pengguna dapat memilih pengumpulan data tersebut?
5. Apakah data dienkripsi saat transit?
6. Apakah pengguna dapat meminta penghapusan?
7. Untuk tujuan apa data digunakan?

## 3. SDK dan layanan yang harus diaudit

- Firebase Authentication
- Google Sign-In
- Firebase Analytics, apabila dipasang
- Firebase Crashlytics, apabila dipasang
- FastAPI/backend
- PostgreSQL/database cloud
- Google AI/Gemini atau layanan AI lain
- Push notification provider
- Email provider
- Logging/monitoring provider
- SDK iklan, apabila ada

## 4. Catatan khusus layanan AI

Periksa data persis yang dikirim ke layanan AI:

- Apakah nama atau email dikirim?
- Apakah gejala dan kondisi reproduksi dikirim?
- Apakah identifier akun dikirim?
- Apakah prompt atau respons disimpan oleh penyedia?
- Apakah data digunakan untuk pelatihan oleh penyedia?
- Berapa lama log disimpan?

Kebijakan Privasi dan Data Safety harus menyebut alur ini secara konsisten.

## 5. Penghapusan data

Penghapusan akun harus mencakup:

- akun autentikasi;
- record pengguna pada database;
- profil;
- data kesehatan;
- kalender;
- riwayat rekomendasi;
- token sesi;
- data turunan yang masih dapat dikaitkan ke pengguna.

Catatan keamanan atau cadangan yang dipertahankan harus memiliki alasan, pembatasan akses, dan masa retensi yang jelas.

## 6. Bukti internal yang disarankan

Simpan dokumen internal berikut:

- diagram alur data;
- daftar tabel dan kolom;
- daftar SDK beserta versi;
- daftar penyedia layanan;
- prosedur penghapusan akun;
- bukti uji penghapusan;
- daftar permission Android;
- hasil pemeriksaan traffic produksi.
