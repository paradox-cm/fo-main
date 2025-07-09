import Image from "next/image"
import Link from "next/link"
import { Compass, Shield, Target } from "lucide-react"

export default function BrandPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-2xl">
          <h1
            className="font-tektur font-medium tracking-tight text-3xl md:text-4xl lg:text-5xl uppercase text-primary section-heading mb-6"
            style={{ transform: "scaleX(1.2)", transformOrigin: "left", maxWidth: "100%" }}
          >
            Brand Guidelines
          </h1>
          <p className="text-xl">
            Welcome to the official brand guidelines for Forest Outfitters—a premium outdoor gear and apparel brand
            built for those who respect the wild, embrace adversity, and demand excellence in everything they wear.
          </p>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/images/forest-icon-new.svg"
            alt="Forest Outfitters Logo"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </div>

      {/* Forest Image */}
      <div className="mb-12 relative h-[300px] rounded-lg overflow-hidden">
        <Image
          src="/brand/forest-hero.jpg"
          alt="Mountain landscape with REVERE NATURE message"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Purpose Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-tektur uppercase tracking-wider mb-6">Purpose of This Site</h2>
        <p className="text-lg mb-4">
          This microsite serves as your source of truth for all brand usage, identity, and creative standards across the
          Forest Outfitters ecosystem. Whether you're a designer, marketer, retailer, or partner, these guidelines will
          help you maintain consistency and authenticity when representing our brand.
        </p>
      </section>

      {/* Brand Family Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-tektur uppercase tracking-wider mb-6">Our Brand Ecosystem</h2>
        <p className="text-lg mb-8">
          Forest Outfitters encompasses four distinct brands, each with its own identity while sharing our core values
          and commitment to excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/brand/forest-outfitters"
            className="border border-[#252523] p-6 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Image src="/images/forest-icon-new.svg" alt="Forest Outfitters" width={60} height={60} className="mb-4" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">Forest Outfitters</h3>
            <p className="text-gray-400">Our flagship brand for premium outdoor apparel and gear.</p>
          </Link>

          <Link
            href="/brand/tribe-equipment"
            className="border border-[#252523] p-6 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Image src="/images/Tribe-Logo.svg" alt="Tribe Equipment" width={120} height={120} className="mb-4" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">Tribe Equipment</h3>
            <p className="text-gray-400">Technical gear for tactical operations and extreme conditions.</p>
          </Link>

          <Link
            href="/brand/hyde"
            className="border border-[#252523] p-6 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Image src="/images/HYDE.svg" alt="HYDE" width={120} height={120} className="mb-4" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">HYDE™</h3>
            <p className="text-gray-400">AI-generated camouflage patterns for unparalleled concealment.</p>
          </Link>

          <Link
            href="/brand/rbf"
            className="border border-[#252523] p-6 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Image src="/images/RBF-Logo.svg" alt="RBF" width={120} height={120} className="mb-4" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">RBF</h3>
            <p className="text-gray-400">Minimalist, earth-toned lifestyle apparel for urban environments.</p>
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-tektur uppercase tracking-wider mb-6">Our Philosophy</h2>
        <p className="text-lg mb-8">Three core principles guide everything we do at Forest Outfitters:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-[#252523] p-6 rounded-lg">
            <Compass className="w-12 h-12 mb-4 text-[#B99C20]" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">Reverence for Nature</h3>
            <p className="text-gray-400">
              We honor the wilderness in all its forms, designing products that work with nature, not against it.
            </p>
          </div>

          <div className="border border-[#252523] p-6 rounded-lg">
            <Shield className="w-12 h-12 mb-4 text-[#B99C20]" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">Warrior Spirit</h3>
            <p className="text-gray-400">
              We embrace challenge and adversity, creating gear that empowers users to push their limits.
            </p>
          </div>

          <div className="border border-[#252523] p-6 rounded-lg">
            <Target className="w-12 h-12 mb-4 text-[#B99C20]" />
            <h3 className="text-xl font-tektur uppercase tracking-wider mb-2">Precision & Quality</h3>
            <p className="text-gray-400">
              We obsess over details, ensuring every stitch, seam, and component meets our exacting standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16 py-12 border-t border-b border-[#252523]">
        <h2 className="text-3xl font-tektur uppercase tracking-wider mb-4">Ready to Explore Our Brand?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Dive into each section to learn how to properly represent Forest Outfitters and our family of brands.
        </p>
        <Link
          href="/brand/forest-outfitters#top"
          className="inline-block bg-[#B99C20] text-black px-8 py-3 rounded-md font-tektur uppercase tracking-wider hover:bg-[#D4B32C] transition-colors"
        >
          Start Exploring
        </Link>
      </section>
    </div>
  )
}
