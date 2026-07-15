# Security Policy

## Melaporkan kerentanan

Jangan membuat GitHub Issue publik untuk kerentanan yang dapat mengekspos data pengguna.

Kirim laporan ke alamat email keamanan atau support yang tercantum di `src/config/site.ts` dengan informasi:

- ringkasan masalah;
- langkah reproduksi;
- halaman atau endpoint terdampak;
- dampak yang mungkin terjadi;
- bukti secukupnya tanpa mengekspos data pengguna lain.

Jangan melakukan pengujian yang merusak, mengakses data pengguna lain, melakukan denial of service, atau mengambil data lebih banyak dari yang diperlukan untuk membuktikan masalah.

## Secret

Repository ini tidak boleh berisi:

- API key;
- password;
- private key;
- file `.env.local`;
- credential database;
- token Firebase admin;
- service-account JSON.

Gunakan environment variables pada Vercel atau platform hosting.
