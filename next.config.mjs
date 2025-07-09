/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['cdn.shopify.com'],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // If you need static exports, keep this:
  // output: 'export',
  
  // Remove the exportPathMap configuration completely
}

export default nextConfig
