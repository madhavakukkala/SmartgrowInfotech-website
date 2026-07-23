/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger shared hosting: `next build` emits ./out
  // with plain HTML/CSS/JS that any web server can serve.
  output: "export",
  trailingSlash: true,
  images: {
    // No image-optimization server on static hosting.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
};

export default nextConfig;
