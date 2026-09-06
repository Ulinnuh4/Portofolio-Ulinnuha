export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

// GANTI dengan riwayat pengalaman kerja/magang kamu, urutkan dari yang terbaru.
export const experience: Experience[] = [
  {
    role: "Staff IT",
    company: "Studio Digital Desa Cemani",
    period: "Maret 2025 — Mei 2025",
    description:
      "Berpartisipasi dalam tim pengembang sistem informasi desa dengan berkontribusi dalam pengembangan dan peningkatan layanan digital untuk mendukung operasional serta pelayanan administrasi desa. Terlibat dalam pembuatan dan pengembangan aplikasi surat pengantar RT, menerima dan memantau pelaporan online melalui sistem yang telah dikembangkan, serta membantu memastikan sistem dapat digunakan secara efisien dan mudah dipahami oleh pengguna. Selain itu, bertanggung jawab merancang dan mengimplementasikan desain antarmuka (UI/UX) website dan sistem informasi desa menggunakan Figma dengan memperhatikan kemudahan penggunaan dan pengalaman pengguna.",
  },
  {
    role: "Desain User Interface Internship",
    company: "Cansaas Studio Agency",
    period: "Desember 2024 — Februari 2025",
    description:
      "Mempelajari dasar-dasar UI/UX Design dengan memahami struktur dan prinsip desain antarmuka, mereplikasi desain dari berbagai referensi sebagai latihan untuk meningkatkan pemahaman terhadap layout dan visual hierarchy, serta mengembangkan desain produk secara mandiri dengan menerapkan prinsip typography, color theory, dan layouting, sehingga menghasilkan desain antarmuka yang lebih terstruktur, konsisten, dan mudah dipahami.",
  },
];
