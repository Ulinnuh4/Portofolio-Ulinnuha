# Portofolio Saya

Proyek portofolio pribadi dibuat dengan Next.js (App Router) + TypeScript + Tailwind CSS.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Struktur data yang perlu diganti

- `data/projects.ts` — daftar proyek/karya (grid + halaman detail `/projects/[id]`)
- `data/experience.ts` — riwayat pengalaman kerja
- `data/education.ts` — riwayat pendidikan
- `components/ContactSection.tsx` — link WhatsApp, LinkedIn, Instagram
- `components/Hero.tsx` — teks perkenalan dan foto profil
- `app/layout.tsx` — judul tab & deskripsi (metadata SEO)

## Deploy

Proyek ini siap di-deploy ke [Vercel](https://vercel.com) tanpa konfigurasi tambahan.
