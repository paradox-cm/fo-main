import Image from "next/image"
import { SectionHeading } from "@/components/brand/section-heading"
import { SplitImageText } from "@/components/brand/split-image-text"
import { ValueCard } from "@/components/brand/value-card"
import { VoiceSnippet } from "@/components/brand/voice-snippet"

export default function ForestOutfittersPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[50vh] min-h-[400px] w-full">
            <Image
              src="/brand/misty-mountains-hero.png"
              alt="Misty mountain landscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-6 h-24 w-24 md:h-32 md:w-32">
                <Image
                  src="/images/Forest-Badge.svg"
                  alt="Forest Outfitters Logo"
                  width={128}
                  height={128}
                  className="h-full w-full"
                />
              </div>
              <h1 className="mb-4 font-tektur text-3xl uppercase tracking-wider text-white md:text-5xl">
                Forest Outfitters
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-100 md:text-xl">
                Premium outdoor gear and apparel built for those who respect the wild, embrace adversity, and demand
                excellence in everything they wear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Brand Overview" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-gray-200">
              Forest Outfitters was founded in 2010 by a team of outdoor enthusiasts who were dissatisfied with the
              quality and functionality of existing gear. Our mission is to create outdoor equipment that stands up to
              the harshest conditions while maintaining a distinctive aesthetic that honors the natural world.
            </p>
            <p className="mb-4 text-lg text-gray-200">
              The name "Forest" reflects our deep connection to woodland environments—the testing ground for our
              original products and the ecosystem that continues to inspire our design philosophy.
            </p>
          </div>
          <div>
            <p className="mb-4 text-lg text-gray-200">
              We've grown from a small workshop in Montana to a global brand with four distinct sub-brands, each serving
              different segments of the outdoor market. Our commitment to quality, sustainability, and authentic outdoor
              experiences remains at the core of everything we do.
            </p>
            <p className="text-lg text-gray-200">
              While each sub-brand maintains its own identity, they all share the Forest Outfitters heritage of
              craftsmanship, durability, and respect for nature. Together, they form a comprehensive ecosystem of
              products for every type of outdoor enthusiast.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Visual Identity" className="text-white" />

        {/* Color Palette */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#B99C20]">Color Palette</h3>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-black p-4 border border-[#252523]">
              <div className="mb-3 h-24 rounded-md bg-[#CFB023]"></div>
              <p className="font-mono text-sm text-gray-200">Forest Gold</p>
              <p className="font-mono text-sm text-gray-200">#CFB023</p>
              <p className="font-mono text-sm text-gray-200">Signature accent</p>
            </div>
            <div className="rounded-lg bg-black p-4 border border-[#252523]">
              <div className="mb-3 h-24 rounded-md bg-[#2E2E2E]"></div>
              <p className="font-mono text-sm text-gray-200">Slate Gray</p>
              <p className="font-mono text-sm text-gray-200">#2E2E2E</p>
              <p className="font-mono text-sm text-gray-200">Base tone</p>
            </div>
            <div className="rounded-lg bg-black p-4 border border-[#252523]">
              <div className="mb-3 h-24 rounded-md bg-[#8B8F90]"></div>
              <p className="font-mono text-sm text-gray-200">Ash Gray</p>
              <p className="font-mono text-sm text-gray-200">#8B8F90</p>
              <p className="font-mono text-sm text-gray-200">Secondary tone</p>
            </div>
            <div className="rounded-lg bg-black p-4 border border-[#252523]">
              <div className="mb-3 h-24 rounded-md bg-[#000000] border border-[#B99C20]"></div>
              <p className="font-mono text-sm text-gray-200">Black</p>
              <p className="font-mono text-sm text-gray-200">#000000</p>
              <p className="font-mono text-sm text-gray-200">Text, contrast</p>
            </div>
            <div className="rounded-lg bg-black p-4 border border-[#252523]">
              <div className="mb-3 h-24 rounded-md bg-[#FFFFFF]"></div>
              <p className="font-mono text-sm text-gray-200">White</p>
              <p className="font-mono text-sm text-gray-200">#FFFFFF</p>
              <p className="font-mono text-sm text-gray-200">Background</p>
            </div>
          </div>

          {/* Neutrals */}
          <div className="mt-6">
            <h4 className="mb-4 font-tektur text-xl uppercase tracking-wider text-[#9CAE8D]">Complementary</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center rounded-lg bg-black p-3 border border-[#252523]">
                <div className="h-10 w-10 rounded-md bg-[#183028]"></div>
                <div className="ml-3">
                  <p className="font-mono text-sm text-gray-200">Deep Forest Green</p>
                  <p className="font-mono text-xs text-gray-400">#183028</p>
                </div>
              </div>
              <div className="flex items-center rounded-lg bg-black p-3 border border-[#252523]">
                <div className="h-10 w-10 rounded-md bg-[#A2A569]"></div>
                <div className="ml-3">
                  <p className="font-mono text-sm text-gray-200">Olive Sage</p>
                  <p className="font-mono text-xs text-gray-400">#A2A569</p>
                </div>
              </div>
              <div className="flex items-center rounded-lg bg-black p-3 border border-[#252523]">
                <div className="h-10 w-10 rounded-md bg-[#A39382]"></div>
                <div className="ml-3">
                  <p className="font-mono text-sm text-gray-200">Stone Taupe</p>
                  <p className="font-mono text-xs text-gray-400">#A39382</p>
                </div>
              </div>
              <div className="flex items-center rounded-lg bg-black p-3 border border-[#252523]">
                <div className="h-10 w-10 rounded-md bg-[#D6D2C4]"></div>
                <div className="ml-3">
                  <p className="font-mono text-sm text-gray-200">Moss Beige</p>
                  <p className="font-mono text-xs text-gray-400">#D6D2C4</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#B99C20]">Typography</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-black p-6">
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Primary: Tektur</h4>
              <p className="font-tektur text-4xl text-gray-200">ABCDEFGHIJKLM</p>
              <p className="font-tektur text-4xl text-gray-200">NOPQRSTUVWXYZ</p>
              <p className="font-tektur text-4xl text-gray-200">1234567890</p>
            </div>
            <div className="rounded-lg bg-black p-6">
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Secondary: Inter</h4>
              <p className="text-2xl text-gray-200">ABCDEFGHIJKLM</p>
              <p className="text-2xl text-gray-200">NOPQRSTUVWXYZ</p>
              <p className="text-2xl text-gray-200">1234567890</p>
            </div>
          </div>
        </div>

        {/* Visual Elements */}
        <div>
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#B99C20]">Visual Elements</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-[#252523] bg-black p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Topographic Patterns</h4>
              <div className="h-40 rounded-md bg-black bg-[url('/topographic-lines-pattern.jpg')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#252523] bg-black p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Natural Textures</h4>
              <div className="h-40 rounded-md bg-[#F2F2F2] bg-opacity-50 bg-[url('/natural-texture-fabric.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#252523] bg-black p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Geometric Elements</h4>
              <div className="h-40 rounded-md bg-black">
                <Image
                  src="/mountains-geometric.png"
                  alt="Mountain ranges with geometric shapes"
                  width={500}
                  height={300}
                  className="h-full w-full object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Brand Values" className="text-white" />
        <div className="grid gap-6 md:grid-cols-3">
          <ValueCard
            icon="mountain"
            title="Authenticity"
            description="We create genuine products for genuine outdoor experiences. No gimmicks, no shortcuts—just honest gear that performs when it matters most."
            className="border-[#252523] bg-black text-gray-200"
            iconClassName="bg-[#192E08] text-[#B99C20]"
            titleClassName="text-[#B99C20]"
          />
          <ValueCard
            icon="shield"
            title="Resilience"
            description="Our gear is built to endure, just like the adventurers who use it. We embrace challenges as opportunities to prove our worth and improve our craft."
            className="border-[#252523] bg-black text-gray-200"
            iconClassName="bg-[#192E08] text-[#B99C20]"
            titleClassName="text-[#B99C20]"
          />
          <ValueCard
            icon="leaf"
            title="Sustainability"
            description="We respect the environments we explore by creating products with minimal ecological impact. Our commitment to sustainability drives innovation in materials and manufacturing."
            className="border-[#252523] bg-black text-gray-200"
            iconClassName="bg-[#192E08] text-[#B99C20]"
            titleClassName="text-[#B99C20]"
          />
        </div>
      </section>

      {/* Target Audience */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Target Audience" className="text-white" />
        <div className="rounded-lg border border-[#252523] bg-black p-6">
          <h3 className="mb-4 font-tektur text-2xl uppercase tracking-wider text-[#B99C20]">
            Primary Brand: Premium Outdoor Apparel and Gear
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-white">Target Audience:</h4>
            <p className="text-gray-200">
              Serious outdoorsmen, hunters, and adventurers who demand uncompromising quality, stealth, and performance
              in extreme environments.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">Key Characteristics:</h4>
            <ul className="list-inside space-y-2 text-gray-200">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#B99C20]"></span>
                <span>Passionate about nature and wilderness exploration</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#B99C20]"></span>
                <span>Requires gear that performs in harsh, unpredictable environments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#B99C20]"></span>
                <span>Values innovation, craftsmanship, and camouflage superiority</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#B99C20]"></span>
                <span>Seeks comfort, durability, and tactical utility in outdoor apparel</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#B99C20]"></span>
                <span>Engaged in hunting, backcountry trekking, or survivalist activities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Brand Voice" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-[#252523] bg-black p-6">
            <h3 className="mb-4 font-tektur text-2xl uppercase tracking-wider text-[#B99C20]">How We Communicate</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-200">
              <li>
                <strong className="text-white">Rooted in Nature</strong>: We speak with the humility and wonder of those
                who walk the wilderness with reverence.
              </li>
              <li>
                <strong className="text-white">Driven by Precision</strong>: Technical, tactical, and intentional—our
                language reflects our engineering mindset.
              </li>
              <li>
                <strong className="text-white">Marked by the Warrior Spirit</strong>: There's weight in our words.
                Courage, resilience, and honor are never buzzwords—they're the ethos we live by.
              </li>
              <li>
                <strong className="text-white">Unapologetically Real</strong>: No hype. No gimmicks. Just straight talk
                from those who know what it takes.
              </li>
            </ul>
          </div>
          <VoiceSnippet
            example="Our Trailblazer jacket isn't just water-resistant—it's been tested in monsoon conditions across three continents. When we say it keeps you dry, we're not making a claim. We're stating a fact backed by thousands of hours in the field."
            className="border-[#252523] bg-black text-gray-200"
            titleClassName="text-[#B99C20]"
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Product Categories" className="text-white" />
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          <div className="rounded-lg border border-[#252523] bg-black p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#B99C20]">Technical Apparel</h3>
            <p className="mb-4 text-gray-200">
              Performance clothing engineered for specific outdoor activities, from alpine climbing to backcountry
              trekking. Balances protection, comfort, and durability.
            </p>
          </div>
          <div className="rounded-lg border border-[#252523] bg-black p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#B99C20]">Equipment & Gear</h3>
            <p className="mb-4 text-gray-200">
              Essential tools and equipment for outdoor pursuits, including packs, tents, sleeping systems, and
              navigation tools. Built to perform in challenging conditions.
            </p>
          </div>
          <div className="rounded-lg border border-[#252523] bg-black p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#B99C20]">Accessories</h3>
            <p className="mb-4 text-gray-200">
              Purpose-built accessories that enhance outdoor experiences, from navigation tools to camp essentials.
              Designed with the same attention to detail as our core products.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Applications */}
      <section className="mb-16">
        <SectionHeading title="Visual Applications" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <SplitImageText
            imageSrc="/logo-application-apparel.png"
            title="Brand Application: Apparel"
            description="Forest Outfitters branding is applied consistently across our product line, with logo placement and scale carefully considered for each application. Technical apparel features subtle branding that doesn't compromise performance."
            className="border-[#252523] bg-black text-gray-200"
            titleClassName="text-[#B99C20]"
          />
          <SplitImageText
            imageSrc="/logo-application-tags.png"
            title="Brand Application: Packaging"
            description="Our packaging system uses consistent visual language across all product categories. Sustainable materials and minimal waste reflect our environmental values while maintaining premium presentation."
            className="border-[#252523] bg-black text-gray-200"
            titleClassName="text-[#B99C20]"
          />
        </div>
      </section>
    </div>
  )
}
