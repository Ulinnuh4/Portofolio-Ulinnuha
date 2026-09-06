export type Achievement = {
  title: string;
  issuer: string;
  year: string;
  description?: string;
  images?: string[];
};

// GANTI dengan pencapaian, penghargaan, atau sertifikat kamu.
export const achievements: Achievement[] = [
  {
    title: "Lolos Pengajuan Program Kreativitas Mahasiswa-GFT (Gagasan Futuristik Tertulis) Tingkat Universitas",
    issuer: "Universitas Muhammadiyah Surakarta",
    year: "2025",
    description:
      "Berpartisipasi sebagai anggota dalam penyusunan proposal PKM-GFT tahun 2025 dengan gagasan Smart Irrigation Detector (SID) berbasis IoT dan WebGIS untuk mendukung ketahanan pangan berkelanjutan, berkolaborasi dalam pengembangan dan penyusunan konsep solusi teknologi, serta berkontribusi dalam penyusunan proposal dan pengembangan gagasan inovatif terkait pemanfaatan IoT dan WebGIS, sehingga menghasilkan proposal PKM yang terstruktur dan mengangkat solusi teknologi untuk mendukung sistem irigasi yang lebih efektif dan berkelanjutan.",
     images: [
      "/images/bukti.png",
      "/images/sertif.png",
    ],  
  },
];