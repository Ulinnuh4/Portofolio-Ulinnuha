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
      "Mempelajari berbagai bidang dalam pengembangan perangkat lunak dan teknologi informasi, meliputi algoritma dan pemrograman, pemrograman web, rekayasa perangkat lunak, sistem basis data, pemrograman berorientasi objek, serta interaksi manusia dan komputer. Fokus pembelajaran juga mencakup pengembangan aplikasi, perancangan antarmuka pengguna (UI/UX), dan penerapan teknologi dalam penyelesaian permasalahan melalui proyek akademik dan tugas akhir mata kuliah.",
  },
  {
    institution: "SMA Negeri 2 Wonogiri",
    major: "Jurusan MIPA",
    period: "2019 — 2022",
  },
];
