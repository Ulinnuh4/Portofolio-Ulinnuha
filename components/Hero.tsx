import Image from "next/image";

export default function Hero() {
  return (
    <section id="tentang" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end">
          <div>
            <p className="font-sans text-sm tracking-wide text-accent mb-4">
              Halo, perkenalkan nama saya...
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.1] text-ink">
              Ulinnuha — <br className="hidden sm:block" />
              Fresh Graduate <br/>Universitas Muhammadiyah Surakarta.
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base md:text-lg text-muted leading-relaxed">
              Lulusan Teknik Informatika Universitas Muhammadiyah Surakarta 
              dengan pengalaman sebagai Staf IT dalam administrasi digital, pengelolaan data, dan dukungan operasional teknologi. 
              Saya terlibat dalam pengembangan sistem informasi, digitalisasi proses administrasi, serta pengelolaan dan pelaporan data produksi. 
              Dengan kemampuan analitis, ketelitian, dan pemecahan masalah, 
              saya juga memiliki ketertarikan pada perancangan antarmuka dan pengembangan aplikasi menggunakan Figma, PHP, Laravel, dan React.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#karya"
                className="inline-flex items-center rounded-full bg-ink px-6 py-3 font-sans text-sm text-paper transition-colors hover:bg-accent"
              >
                Lihat karya saya
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center rounded-full border border-line px-6 py-3 font-sans text-sm text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Hubungi saya
              </a>
            </div>
          </div>

          {/* Foto profil. File aslinya ada di /public/images/profil.png —
              ganti kapan saja dengan mengganti file itu, nama file boleh sama. */}
          <div className="shrink-0">
            <div className="relative h-40 w-40 md:h-52 md:w-52 overflow-hidden rounded-2xl bg-surface ring-1 ring-line">
              <Image
                src="/images/profil.png"
                alt="Foto profil"
                fill
                sizes="(min-width: 768px) 208px, 160px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
