export type Education = {
  institution: string;
  major: string;
  period: string;
  gpa?: string; // contoh: "3.75 / 4.00" — kosongkan jika tidak ingin ditampilkan
  description?: string;
};

// GANTI dengan riwayat pendidikan kamu.
export const education: Education[] = [
  {
    institution: "Universitas Muhammadiyah Surakarta",
    major: "S1 Teknik Informatika",
    period: "2022 — 2026",
    gpa: "3.75 / 4.00",
    description:
      "Mempelajari berbagai bidang teknologi informasi dengan latar belakang jurusan Komputer dan Jaringan, meliputi jaringan komputer, perangkat keras, algoritma dan pemrograman, pengembangan web, rekayasa perangkat lunak, sistem basis data, serta pemrograman berorientasi objek. Fokus pembelajaran juga mencakup pengembangan aplikasi, perancangan antarmuka pengguna, dan interaksi manusia dan komputer, dengan penerapan melalui proyek akademik dan tugas akhir mata kuliah untuk menyelesaikan permasalahan berbasis teknologi.",
  },
  {
    institution: "SMA Negeri 2 Wonogiri",
    major: "Jurusan MIPA",
    period: "2019 — 2022",
  },
];
