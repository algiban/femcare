export const siteConfig = {
  name: "Arkha Developer",
  legalName: "Arkha Developer",
  tagline: "Membangun produk digital yang aman, relevan, dan manusiawi.",
  description:
    "Website resmi Arkha Developer untuk informasi produk, dukungan pengguna, kebijakan privasi, dan penghapusan akun.",
  url: "https://arkha-dev.com",
  locale: "id_ID",
  supportEmail: "algibbankhanif@gmail.com",
  privacyEmail: "algibbankhanif@gmail.com",
  demoFormUrl: "https://forms.gle/JqrfHk1Lf9yFfypa7",
  location: "Bekasi, Jawa Barat, Indonesia",
  social: {
    github: "https://github.com/arkhadeveloper",
    instagram: "https://instagram.com/arkhadeveloper",
    linkedin: "https://linkedin.com/company/arkhadeveloper",
  },
  apps: {
    femcare: {
      name: "Femcare",
      slug: "femcare",
      shortDescription:
        "Pendamping edukasi kesehatan reproduksi perempuan dengan rekomendasi yang dipersonalisasi.",
      category: "Kesehatan & Kebugaran",
      availability: "Dalam pengembangan",
      playStoreUrl: "",
      privacyEffectiveDate: "15 Juli 2026",
      minimumAge: 18,
    },
    youfitly: {
      name: "YouFitly",
      slug: "youfitly",
      shortDescription:
        "Rekomendasi fashion perempuan berdasarkan bentuk tubuh, gaya, dan konteks acara.",
      category: "Fashion Technology",
      availability: "Dalam pengembangan",
      playStoreUrl: "",
    },
    arkhaflow: {
      name: "ArkhaFlow",
      slug: "arkhaflow",
      shortDescription:
        "Platform operasional dan membership multi-role untuk bisnis yang ingin tumbuh lebih terstruktur.",
      category: "Productivity",
      availability: "Dalam pengembangan",
      playStoreUrl: "",
      privacyEffectiveDate: "29 Agustus 2026",
    },
    arkhatouring: {
      name: "ArkhaTouring",
      slug: "arkhatouring",
      shortDescription:
        "Platform pendamping perjalanan dan touring untuk membantu koordinasi rute, anggota, lokasi, dan aktivitas perjalanan.",
      category: "Travel & Navigation",
      availability: "Dalam pengembangan",
      playStoreUrl: "",
      privacyEffectiveDate: "29 Agustus 2026",
    },
    arkhahr: {
      name: "ArkhaHR",
      slug: "arkhahr",
      shortDescription:
        "Human Resource Information System untuk absensi, pengajuan karyawan, administrasi HR, dan operasional tenaga kerja dalam satu alur.",
      category: "Human Resources",
      availability: "Pengembangan aktif",
      playStoreUrl: "",
      privacyEffectiveDate: "29 Agustus 2026",
      legalEffectiveDate: "29 Agustus 2026",
    },
  },
} as const;

export type AppKey = keyof typeof siteConfig.apps;
