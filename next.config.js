/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "live.staticflickr.com",
      "img.freepik.com",
      "www.startech.com.bd",
      "www.mediastorehouse.co.uk",
    ],
  },
};

module.exports = nextConfig;
