export type Project = {
  id: string; // dipakai di URL: /projects/[id]
  title: string;
  category: string;
  year: string;
  images: string[]; // path gambar di /public atau URL — gambar pertama dipakai sebagai cover di grid
  description: string; // ringkasan singkat untuk kartu grid
  fullDescription: string; // deskripsi panjang untuk halaman detail
  role: string;
  tools: string[];
  links: { label: string; url: string }[];
  credentials?: {
    role: string;
    username: string;
    password: string;
  }[];
};

// GANTI seluruh data di bawah ini dengan proyek asli kamu.
// "id" akan menjadi bagian dari URL, jadi gunakan format huruf kecil dan tanda hubung, contoh: "aplikasi-kasir".
export const projects: Project[] = [
  {
    id: "identitas-kopi-senja",
    title: "Sistem Manajemen Bahan Baku - Katsukai",
    category: "Sistem Menejemen",
    year: "2026",
    images: [
      "/images/Katsukai.png",
      "/images/Dashboard.png",
      "/images/Prediksi.png",
      "/images/StokMasuk.png"
    ],
    description:
      "Perancangan ulang logo, kemasan, dan panduan brand untuk kedai kopi lokal.",
    fullDescription:
      "Sistem Manajemen Bahan Baku ini dikembangkan sebagai proyek final perkuliahan berdasarkan kebutuhan dan studi kasus langsung di Resto Katsukai, Solo. Menjabat sebagai pengembang Frontend dan Backend, saya merancang sistem yang mampu mengatasi tantangan pencatatan inventaris manual. Fitur utamanya mencakup dashboard analitik untuk grafik penggunaan bahan, tabel manajemen stok, serta pemantauan sisa stok kritis guna mencegah terjadinya kehabisan bahan baku secara mendadak.",
    role: "Frontend & Backend Sistem",
    tools: ["Visual Code Studio", "Laravel", "xampp"],
    links: [
      { label: "Lihat studi kasus lengkap", url: "https://dapur-katsukai.smartsense.my.id" },
    ],
    credentials: [
      {
        role: "Manajer",
        username: "manajer@resto.test", 
        password: "password"         
      }
    ]
  },
  {
    id: "aplikasi-catatan-harian",
    title: "Prototype Website Manajemen Restoran",
    category: "Prototyping",
    year: "2026",
    images: [
      "/images/Prototyping.png",
      "/images/Login.png",
      "/images/Managerp.png",
      "/images/Laporan.png",
    ],
    description:
      "Desain antarmuka aplikasi mobile untuk mencatat mood dan jurnal harian.",
    fullDescription:
      "Proyek ini merupakan purwarupa (prototype) antarmuka web yang dibangun sebagai langkah awal sebelum mengembangkan Sistem Manajemen Bahan Baku Katsukai secara utuh. Alasan utama pembuatan prototipe ini adalah untuk memvisualisasikan rancangan tata letak, alur navigasi pengguna (mulai dari halaman login hingga tabel analitik), dan desain visual dashboard. Berfungsi sebagai cetak biru interaktif yang dibangun dengan HTML, CSS, dan JavaScript murni, prototipe ini memudahkan proses validasi desain dan penyesuaian alur kerja operasional bersama pihak restoran sebelum sistem diintegrasikan dengan backend.",
    role: "Developer",
    tools: ["Html", "JS", "css"],
    links: [{ label: "Coba prototipe interaktif", url: "https://ulinnuhaprojekprototype.netlify.app/" }],
  },
  
  {
    id: "poster-event-musik",
    title: "Desain Interface — Website Sparring",
    category: "Web Design",
    year: "2025",
    images: [
      "/images/Sparing.png",
      "/images/Venues.png",
      "/images/Sports.png",
      "/images/Comunities.png",
    ],
    description: "Rangkaian poster promosi untuk festival musik tahunan.",
    fullDescription:
      "Proyek UI/UX 'SPARRING' ini dirancang sebagai platform interaktif yang menghubungkan para pegiat olahraga, menjembatani komunitas lokal, hingga memfasilitasi pencarian venue dan lawan tanding. Menggunakan Figma, antarmuka ini dibangun dengan pendekatan visual yang energik, dengan memadukan kontras warna neon dan hitam untuk memunculkan semangat kompetitif. Fokus perancangan ada pada kejelasan informasi acara, kemudahan navigasi direktori lapangan, dan alur pendaftaran kegiatan yang intuitif.",
    role: "User Interface Desainer",
    tools: ["Figma"],
    links: [{ label: "Coba prototipe interaktif", url: "https://www.figma.com/proto/ZqerpOXN0OkTvHfkrsvDQP/Test-Suitmedia?node-id=1-5&p=f&viewport=339%2C38%2C0.22&t=YubLROJCqoI3g0CD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A5&page-id=0%3A1" },
      { label: "Projek desain interface", url: "https://www.figma.com/design/ZqerpOXN0OkTvHfkrsvDQP/Test-Suitmedia?node-id=2010-43&t=QeQjRotHFBWm4Cgg-1" },
    ],
  },

  {
    id: "nama-proyek-barumu", 
    title: "App Mobile Desain Interface",
    category: "Mobile App",
    year: "2025",
    images: [
      "/images/App.png", 
  
    ],
    description: "Deskripsi singkat 1-2 kalimat untuk kartu di halaman utama.",
    fullDescription: "Proyek ini merupakan eksplorasi personal dan latihan desain UI/UX yang berfokus pada antarmuka aplikasi seluler (mobile app) untuk layanan laundry on-demand. Tujuan utama dari latihan ini adalah merancang alur pemesanan yang mulus dan intuitif. Menggunakan Figma, saya merancang antarmuka mulai dari halaman pemilihan kategori layanan (seperti cuci basah atau setrika), halaman keranjang penambahan item pakaian, hingga halaman pelacakan riwayat dan status pesanan dengan gaya visual yang bersih (clean design) dan minimalis.",
    role: "User interface Desainer",
    tools: ["Figma"],
    links: [
      { label: "Kunjungi Website", url: "https://www.figma.com/design/wlM3YHNqzMEiZwfoyBL1Gw/Aplikasi-Mobile?node-id=1-922&t=I2b6tYvo5mUHDhfQ-1" }
    ],
  },

  {
    id: "nama-proyek-keenam", 
    title: "App Mobile Design - Total Football",
    category: "Mobile App",
    year: "2024",
    images: [
      "/images/tootal.png", 
  
    ],
    description: "Deskripsi singkat 1-2 kalimat untuk kartu di halaman utama.",
    fullDescription: "Proyek perancangan UI/UX aplikasi 'Total Football' ini disusun sebagai pemenuhan tugas akhir mata kuliah Interaksi Manusia dan Komputer. Berfokus pada kebutuhan pengamat dan pendukung sepak bola, saya merancang antarmuka aplikasi seluler yang menyajikan jadwal pertandingan, hasil skor, dan berita terbaru secara komprehensif. Nilai utama dari proyek ini tidak hanya terletak pada estetika antarmuka bertema gelap (dark mode) yang sporty, tetapi juga pada penerapan prinsip IMK secara utuh. Proses perancangannya mencakup pendefinisian ruang lingkup pengguna, pembuatan sistem dukungan pengguna (tutorial online), serta tahapan pengujian antarmuka melalui evaluasi formatif dan sumatif menggunakan metode Usability Testing.",
    role: "User interface Desainer",
    tools: ["Figma"],
    links: [
      { label: "Kunjungi Website", url: "https://www.figma.com/design/SWlgVNJ3ucENMbfJhshA5X/Untitled?node-id=0-1&t=SFkT1fWiIW78r4Vo-1" }
    ],
  },

  {
    id: "landing-page-startup-edukasi",
    title: "Landing Page — Restoran Solo",
    category: "Web Design",
    year: "2024",
    images: [
      "/images/Resto.png",
      "/images/menu.png",
      "/images/about.png",
      "/images/Contact.png",
    ],
    description:
      "Desain dan pengembangan landing page untuk platform kursus daring.",
    fullDescription:
      "Proyek ini merupakan hasil pemenuhan tugas akhir untuk mata kuliah Pemrograman Web Berbasis Framework. Saya membangun landing page restoran ini dari nol, dimulai dari pembuatan wireframe, perancangan visual, hingga implementasi kode frontend menggunakan Next.js dan Tailwind CSS. Halaman ini dirancang untuk menonjolkan profil restoran dan menu hidangan secara menarik, sekaligus berhasil menjaga skor performa Lighthouse di atas angka 90 untuk pengaksesan via desktop maupun mobile.",
    role: "Designer & Frontend Developer",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    links: [
      { label: "Kunjungi situs dokumentasi", url: "https://github.com/tif1336/final-project-membuat-website-restoran-dengan-react-js-tikus/blob/main/README.md" },
      { label: "Lihat kode sumber", url: "https://github.com/tif1336/final-project-membuat-website-restoran-dengan-react-js-tikus.git" },
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
