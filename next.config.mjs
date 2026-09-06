/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Mengizinkan gambar dari Unsplash untuk contoh/placeholder.
    // Jika kamu memakai foto sendiri di folder /public, ini tidak wajib.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
