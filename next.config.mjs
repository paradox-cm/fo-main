/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      // Add other remotePatterns here if needed
    ],
    // domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'], // Deprecated, remove or comment out
    unoptimized: process.env.NODE_ENV === 'production',
  },
  // If you need static exports, keep this:
  // output: 'export',
  
  // Remove the exportPathMap configuration completely
}

export default nextConfig
