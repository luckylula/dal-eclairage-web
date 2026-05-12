/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dossier projet sur OneDrive : `.next` peut corrompre des liens (EINVAL readlink).
  // Sortie build/dev hors du nom par défaut pour éviter ce cas.
  distDir: ".next-local",
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
