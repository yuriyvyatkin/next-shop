/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental',
  },
  images: {
    domains: ['via.assets.so'],
  },
};

export default nextConfig;
