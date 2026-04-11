/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.ko-fi.com",
      },
      {
        protocol: "https",
        hostname: "openweatherapp.org",
      },
    ],
  },
};

export default nextConfig;
