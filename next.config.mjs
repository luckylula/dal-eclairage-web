/** @type {import('next').NextConfig} */
const nextConfig = {
  // OneDrive (Windows) : le dossier `.next` par défaut peut poser problème (EINVAL readlink).
  // Sur Vercel, il faut impérativement la sortie standard `.next` (VERCEL est défini en build).
  ...(!process.env.VERCEL ? { distDir: ".next-local" } : {}),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
