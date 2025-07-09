import Image from "next/image"
import { SectionHeading } from "@/components/brand/section-heading"

export default function RBFPage() {
  // Define comparison data for ProductComparison component
  const comparisonFeatures = [
    {
      feature: "Sustainable Materials",
      forest: true,
      competitor1: false,
      competitor2: true,
      competitor3: false,
    },
    {
      feature: "Minimalist Design",
      forest: true,
      competitor1: true,
      competitor2: false,
      competitor3: true,
    },
    {
      feature: "Technical Performance",
      forest: true,
      competitor1: false,
      competitor2: true,
      competitor3: false,
    },
    {
      feature: "Urban-to-Outdoor Versatility",
      forest: true,
      competitor1: false,
      competitor2: false,
      competitor3: true,
    },
    {
      feature: "Lifetime Warranty",
      forest: true,
      competitor1: false,
      competitor2: false,
      competitor3: false,
    },
  ]

  const competitors = ["Everlane", "Patagonia", "Aether"]

  return (
    <div className="container mx-auto px-4 py-12 text-[#2E1C1C] max-w-7xl">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[50vh] min-h-[400px] w-full">
            <Image
              src="/images/RealBigfoot-04-cmpr.jpg"
              alt="RBF (Real Big Foot) Silhouette"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-6">
                <Image src="/images/RBF-Logo.svg" alt="RBF Logo" width={320} height={320} />
              </div>
              <h1 className="mb-4 font-tektur text-3xl uppercase tracking-wider text-[#E8E0C9] md:text-5xl">
                RBF (Real Big Foot)
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-[#E8E0C9] md:text-xl">
                Elevated lifestyle apparel that bridges the gap between rugged function and modern minimalism, crafted
                for those who move seamlessly between wilderness and urban environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Brand Overview" className="text-[#2E1C1C]" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-[#2E1C1C]">Before there was a brand, there was a footprint.</p>
            <p className="mb-4 text-lg text-[#2E1C1C]">
              Our founder's grandfather was the man who discovered the infamous "Bigfoot print" deep in the Pacific
              Northwest. Not the hoax—the real one. What he found wasn't a myth, but the legend of a creature built to
              survive the wild with elegance, silence, and strength. That legend became part of our family.
            </p>
            <p className="mb-4 text-lg text-[#2E1C1C]">
              What began as a small capsule collection is evolving into a complete lifestyle brand that maintains Forest
              Outfitters' commitment to performance while embracing a more minimal, design-forward aesthetic.
            </p>
          </div>
          <div>
            <p className="mb-4 text-lg text-[#2E1C1C]">
              RBF—short for Real Big Foot—was born from that story. It's not about chasing monsters, but honoring the
              traits that myth represents: power, mystery, and connection to the land. Inspired by that legacy, RBF
              blends trail-tested functionality with quiet design—creating apparel that's built to disappear into the
              world, not shout above it.
            </p>
            <p className="text-lg text-[#2E1C1C]">
              While RBF maintains its own distinct identity, it shares Forest Outfitters' commitment to quality
              materials and thoughtful design. The difference lies in RBF's more restrained aesthetic, everyday
              versatility, and focus on the intersection of outdoor function and contemporary style.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Visual Identity" className="text-[#2E1C1C]" />

        {/* Color Palette */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#2E1C1C]">Color Palette</h3>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
              <div className="mb-3 h-24 rounded-md bg-[#CFB023]"></div>
              <p className="font-mono text-sm text-[#2E1C1C]">Forest Gold</p>
              <p className="font-mono text-sm text-[#2E1C1C]">#CFB023</p>
              <p className="font-mono text-sm text-[#2E1C1C]">Shared legacy</p>
            </div>
            <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
              <div className="mb-3 h-24 rounded-md bg-[#73662E]"></div>
              <p className="font-mono text-sm text-[#2E1C1C]">Gold</p>
              <p className="font-mono text-sm text-[#2E1C1C]">#73662E</p>
              <p className="font-mono text-sm text-[#2E1C1C]">Accent tone</p>
            </div>
            <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
              <div className="mb-3 h-24 rounded-md bg-[#A7995D]"></div>
              <p className="font-mono text-sm text-[#2E1C1C]">Earth</p>
              <p className="font-mono text-sm text-[#2E1C1C]">#A7995D</p>
              <p className="font-mono text-sm text-[#2E1C1C]">Base tone</p>
            </div>
            <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
              <div className="mb-3 h-24 rounded-md bg-[#96A384]"></div>
              <p className="font-mono text-sm text-[#2E1C1C]">Camo Green</p>
              <p className="font-mono text-sm text-[#2E1C1C]">#96A384</p>
              <p className="font-mono text-sm text-[#2E1C1C]">Natural contrast</p>
            </div>
            <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
              <div className="mb-3 h-24 rounded-md bg-[#2E1C1C]"></div>
              <p className="font-mono text-sm text-[#2E1C1C]">Very Dark Brown</p>
              <p className="font-mono text-sm text-[#2E1C1C]">#2E1C1C</p>
              <p className="font-mono text-sm text-[#2E1C1C]">Anchor background</p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="mb-4 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Complementary</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
                <div className="mb-3 h-12 rounded-md bg-[#3B2E17]"></div>
                <p className="font-mono text-sm text-[#2E1C1C]">Dark Olive Brown</p>
                <p className="font-mono text-xs text-[#66543F]">#3B2E17</p>
              </div>
              <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
                <div className="mb-3 h-12 rounded-md bg-[#66543F]"></div>
                <p className="font-mono text-sm text-[#2E1C1C]">Warm Taupe</p>
                <p className="font-mono text-xs text-[#66543F]">#66543F</p>
              </div>
              <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
                <div className="mb-3 h-12 rounded-md bg-[#DCD6BE]"></div>
                <p className="font-mono text-sm text-[#2E1C1C]">Sand Beige</p>
                <p className="font-mono text-xs text-[#66543F]">#DCD6BE</p>
              </div>
              <div className="rounded-lg bg-[#E8E0C9] p-4 border border-[#A7995D]">
                <div className="mb-3 h-12 rounded-md bg-[#FFFFFF] border border-[#A7995D]"></div>
                <p className="font-mono text-sm text-[#2E1C1C]">White</p>
                <p className="font-mono text-xs text-[#66543F]">#FFFFFF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#2E1C1C]">Typography</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Primary: Tektur</h4>
              <p className="font-tektur text-4xl text-[#2E1C1C]">ABCDEFGHIJKLM</p>
              <p className="font-tektur text-4xl text-[#2E1C1C]">NOPQRSTUVWXYZ</p>
              <p className="font-tektur text-4xl text-[#2E1C1C]">1234567890</p>
            </div>
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Secondary: Inter</h4>
              <p className="text-2xl text-[#2E1C1C]">ABCDEFGHIJKLM</p>
              <p className="text-2xl text-[#2E1C1C]">NOPQRSTUVWXYZ</p>
              <p className="text-2xl text-[#2E1C1C]">1234567890</p>
            </div>
          </div>
        </div>

        {/* Visual Elements */}
        <div>
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-[#2E1C1C]">Visual Elements</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-[#2E1C1C]">Natural Textures</h4>
              <div className="h-40 rounded-md bg-[#72662E] bg-opacity-50 bg-[url('/natural-fiber-closeup.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-[#2E1C1C]">Minimal Compositions</h4>
              <div className="h-40 rounded-md bg-[#72662E] bg-opacity-50 bg-[url('/minimalist-outdoor-jacket.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-[#2E1C1C]">Organic Forms</h4>
              <div className="h-40 rounded-md bg-[#72662E] bg-opacity-50 bg-[url('/terracotta-planter.png')] bg-cover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Brand Values" className="text-[#2E1C1C]" />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#72662E] text-[#E8E0C9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-minimize-2"
              >
                <polyline points="4 14 10 14 10 20"></polyline>
                <polyline points="20 10 14 10 14 4"></polyline>
                <line x1="14" y1="10" x2="21" y2="3"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </div>
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Refined Minimalism</h3>
            <p className="text-[#2E1C1C]">
              We believe in the power of restraint. Our designs eliminate excess to focus on what matters: clean lines,
              thoughtful details, and versatile function.
            </p>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#72662E] text-[#E8E0C9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-leaf"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
            </div>
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Natural Harmony</h3>
            <p className="text-[#2E1C1C]">
              We draw inspiration from natural environments and materials. Our earth-toned palette and organic textures
              create a visual language that feels grounded and timeless.
            </p>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#72662E] text-[#E8E0C9]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-sparkles"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
            </div>
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Quiet Innovation</h3>
            <p className="text-[#2E1C1C]">
              We integrate technical features without compromising aesthetics. Our innovations enhance function while
              remaining visually subtle—performance that doesn't announce itself.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Target Audience" className="text-[#2E1C1C]" />
        <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
          <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">
            Lifestyle Brand: Everyday Wear Inspired by the Outdoors
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-[#2E1C1C]">Target Audience:</h4>
            <p className="text-[#2E1C1C]">
              Urban dwellers and nature lovers who admire Forest's aesthetic and want high-quality, nature-inspired
              apparel for everyday wear.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-[#2E1C1C]">Key Characteristics:</h4>
            <ul className="list-inside space-y-2 text-[#2E1C1C]">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#72662E]"></span>
                <span>Drawn to rugged yet refined style influenced by outdoor heritage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#72662E]"></span>
                <span>Wears performance fabrics in a casual or fashion-forward setting</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#72662E]"></span>
                <span>Seeks authenticity and craftsmanship rooted in wilderness values</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#72662E]"></span>
                <span>Wants to express a connection to nature, even in urban environments</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#72662E]"></span>
                <span>Looks for versatile apparel that balances comfort, durability, and design</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Brand Voice" className="text-[#2E1C1C]" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">How We Communicate</h3>
            <ul className="list-inside list-disc space-y-2 text-[#2E1C1C]">
              <li>
                <strong>Understated and thoughtful</strong> — We favor concise, meaningful language over hyperbole
              </li>
              <li>
                <strong>Warm and approachable</strong> — We communicate with quiet confidence and genuine warmth
              </li>
              <li>
                <strong>Artful but clear</strong> — We appreciate poetic language but prioritize clarity
              </li>
              <li>
                <strong>Story-driven</strong> — We connect products to experiences and contexts
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Voice Example</h3>
            <blockquote className="border-l-4 border-[#A7995D] pl-4 text-[#2E1C1C]">
              <p className="italic">
                The Ridgeline Overshirt moves with you from misty morning trails to evening gatherings. Crafted from
                organic cotton canvas with a touch of stretch, it wears its technical features quietly—hidden
                ventilation, natural water resistance, and a silhouette that looks at home wherever you choose to
                wander.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16 border-b border-[#A7995D] pb-16">
        <SectionHeading title="Product Categories" className="text-[#2E1C1C]" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Essential Apparel</h3>
            <p className="mb-4 text-[#2E1C1C]">
              Versatile everyday pieces with subtle technical features—overshirts, pullovers, pants, and layering
              essentials in earth-toned, natural fabrics.
            </p>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Outerwear</h3>
            <p className="mb-4 text-[#2E1C1C]">
              Refined jackets and vests that balance weather protection with clean, contemporary silhouettes suitable
              for both trail and town.
            </p>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Accessories</h3>
            <p className="mb-4 text-[#2E1C1C]">
              Minimal bags, caps, beanies, and small leather goods that complement the apparel line with the same
              attention to material and function.
            </p>
          </div>
          <div className="rounded-lg border border-[#A7995D] bg-[#E8E0C9] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Home & Objects</h3>
            <p className="mb-4 text-[#2E1C1C]">
              Curated collection of everyday items—mugs, blankets, tools—that extend the RBF aesthetic into the home and
              daily rituals.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Applications */}
      <section className="mb-16">
        <SectionHeading title="Visual Applications" className="text-[#2E1C1C]" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-[#A7995D] bg-[#E8E0C9]">
            <div className="relative h-48 md:h-auto md:w-full">
              <Image src="/earth-tone-minimal.png" alt="Product Design" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Product Design</h3>
              <p className="text-[#2E1C1C]">
                RBF products feature clean lines, minimal branding, and thoughtful details that enhance function without
                compromising the refined aesthetic.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#A7995D] bg-[#E8E0C9]">
            <div className="relative h-48 md:h-auto md:w-full">
              <Image src="/urban-green-haven.png" alt="Retail Environment" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-6">
              <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-[#2E1C1C]">Retail Environment</h3>
              <p className="text-[#2E1C1C]">
                RBF retail spaces blend natural materials, warm lighting, and minimalist displays to create an
                environment that reflects the brand's balance of outdoor function and urban refinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section>
        <SectionHeading title="Market Comparison" className="text-[#2E1C1C]" />
        <div className="overflow-hidden rounded-lg border border-[#A7995D] bg-[#E8E0C9]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full table-auto">
              <thead>
                <tr className="border-b border-[#A7995D]">
                  <th className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-[#2E1C1C]">Feature</th>
                  <th className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-[#72662E]">Forest</th>
                  {competitors.map((competitor, index) => (
                    <th
                      key={index}
                      className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-[#2E1C1C]"
                    >
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="border-b border-[#A7995D]">
                    <td className="p-4 text-sm text-[#2E1C1C]">{row.feature}</td>
                    <td className="p-4 text-sm text-[#72662E]">
                      {typeof row.forest === "boolean" ? (row.forest ? "✓" : "✗") : row.forest}
                    </td>
                    <td className="p-4 text-sm text-[#2E1C1C]">
                      {typeof row.competitor1 === "boolean" ? (row.competitor1 ? "✓" : "✗") : row.competitor1}
                    </td>
                    <td className="p-4 text-sm text-[#2E1C1C]">
                      {typeof row.competitor2 === "boolean" ? (row.competitor2 ? "✓" : "✗") : row.competitor2}
                    </td>
                    {row.competitor3 !== undefined && (
                      <td className="p-4 text-sm text-[#2E1C1C]">
                        {typeof row.competitor3 === "boolean" ? (row.competitor3 ? "✓" : "✗") : row.competitor3}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
