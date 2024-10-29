/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'cdn.nsoplus.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      }
    ],
  },
};

export default nextConfig;
