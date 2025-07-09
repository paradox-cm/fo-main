import Image from "next/image"
import { SectionHeading } from "@/components/brand/section-heading"
import { SplitImageText } from "@/components/brand/split-image-text"
import { ValueCard } from "@/components/brand/value-card"
import { VoiceSnippet } from "@/components/brand/voice-snippet"
import { ProductComparison } from "@/components/brand/product-comparison"

export default function TribeEquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[50vh] min-h-[400px] w-full">
            <Image
              src="/tribe-helicopter-mission.png"
              alt="Tribe Equipment - Military Helicopter Operation"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-[#4C516D] bg-opacity-70" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-6">
                <Image src="/images/Tribe-Logo.svg" alt="Tribe Equipment Logo" width={320} height={320} />
              </div>
              <h1 className="mb-4 font-tektur text-3xl uppercase tracking-wider text-white md:text-5xl">
                Tribe Equipment
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-100 md:text-xl">
                Mission-ready tactical gear engineered for elite operators who demand precision, modularity, and
                uncompromising performance in high-stakes environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Brand Overview" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-gray-100">
              Tribe Equipment emerged from Forest Outfitters' special projects division, originally developed to meet
              the exacting needs of military and law enforcement professionals. What began as custom gear for elite
              units evolved into a standalone tactical brand built on a foundation of field-tested performance.
            </p>
            <p className="mb-4 text-lg text-gray-100">
              The name "Tribe" reflects our core philosophy: elite operators function as a cohesive unit bound by mutual
              trust, shared mission, and collective capability. Our equipment is designed to enhance this tribal
              connection through integrated systems that work seamlessly together.
            </p>
          </div>
          <div>
            <p className="mb-4 text-lg text-gray-100">
              Every Tribe product undergoes rigorous testing by active operators in the most demanding environments on
              earth. Our design process incorporates direct feedback from the field, ensuring that each piece of
              equipment meets the real-world needs of those who stake their lives on their gear.
            </p>
            <p className="text-lg text-gray-100">
              While Tribe maintains its own distinct identity, it shares Forest Outfitters' commitment to quality,
              durability, and purpose-driven design. The difference lies in our specialized focus on tactical
              applications, modular integration, and mission-specific functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Visual Identity" className="text-white" />

        {/* Color Palette */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Color Palette</h3>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-lg p-4 border border-[#1F2936]">
              <div className="mb-3 h-24 rounded-md bg-[#CFB023]"></div>
              <p className="font-mono text-sm text-gray-100">Forest Gold</p>
              <p className="font-mono text-sm text-gray-100">#CFB023</p>
              <p className="font-mono text-sm text-gray-100">Shared legacy</p>
            </div>
            <div className="rounded-lg p-4 border border-[#1F2936]">
              <div className="mb-3 h-24 rounded-md bg-[#BEAB70]"></div>
              <p className="font-mono text-sm text-gray-100">Desert Gold</p>
              <p className="font-mono text-sm text-gray-100">#BEAB70</p>
              <p className="font-mono text-sm text-gray-100">Tactical accent</p>
            </div>
            <div className="rounded-lg p-4 border border-[#1F2936]">
              <div className="mb-3 h-24 rounded-md bg-[#CEC094]"></div>
              <p className="font-mono text-sm text-gray-100">Khaki Sand</p>
              <p className="font-mono text-sm text-gray-100">#CEC094</p>
              <p className="font-mono text-sm text-gray-100">Uniform background</p>
            </div>
            <div className="rounded-lg p-4 border border-[#1F2936]">
              <div className="mb-3 h-24 rounded-md bg-[#4C516D]"></div>
              <p className="font-mono text-sm text-gray-100">Independence</p>
              <p className="font-mono text-sm text-gray-100">#4C516D</p>
              <p className="font-mono text-sm text-gray-100">Brand base</p>
            </div>
            <div className="rounded-lg p-4 border border-[#1F2936]">
              <div className="mb-3 h-24 rounded-md bg-[#686F85]"></div>
              <p className="font-mono text-sm text-gray-100">Matte Blue</p>
              <p className="font-mono text-sm text-gray-100">#686F85</p>
              <p className="font-mono text-sm text-gray-100">UI, labels</p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg p-4 border border-[#1F2936]">
                <div className="mb-3 h-12 rounded-md bg-[#333333]"></div>
                <p className="font-mono text-sm text-gray-100">Charcoal Gray</p>
                <p className="font-mono text-xs text-gray-300">#333333</p>
              </div>
              <div className="rounded-lg p-4 border border-[#1F2936]">
                <div className="mb-3 h-12 rounded-md bg-[#7C7269]"></div>
                <p className="font-mono text-sm text-gray-100">Steel Taupe</p>
                <p className="font-mono text-xs text-gray-300">#7C7269</p>
              </div>
              <div className="rounded-lg p-4 border border-[#1F2936]">
                <div className="mb-3 h-12 rounded-md bg-[#D6D2C4]"></div>
                <p className="font-mono text-sm text-gray-100">Drift Sand</p>
                <p className="font-mono text-xs text-gray-300">#D6D2C4</p>
              </div>
              <div className="rounded-lg p-4 border border-[#1F2936]">
                <div className="mb-3 h-12 rounded-md bg-[#F1F1F1]"></div>
                <p className="font-mono text-sm text-gray-100">Ash White</p>
                <p className="font-mono text-xs text-gray-300">#F1F1F1</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Typography</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Primary: Tektur</h4>
              <p className="font-tektur text-4xl text-gray-100">ABCDEFGHIJKLM</p>
              <p className="font-tektur text-4xl text-gray-100">NOPQRSTUVWXYZ</p>
              <p className="font-tektur text-4xl text-gray-100">1234567890</p>
            </div>
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Secondary: Inter</h4>
              <p className="text-2xl text-gray-100">ABCDEFGHIJKLM</p>
              <p className="text-2xl text-gray-100">NOPQRSTUVWXYZ</p>
              <p className="text-2xl text-gray-100">1234567890</p>
            </div>
          </div>
        </div>

        {/* Visual Elements */}
        <div>
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Visual Elements</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Grid Patterns</h4>
              <div className="h-40 rounded-md bg-[#4C516D] bg-opacity-50 bg-[url('/tactical-grid.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Technical Illustrations</h4>
              <div className="h-40 rounded-md bg-[#4C516D] bg-opacity-50 bg-[url('/molle-webbing.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Topographic Overlays</h4>
              <div className="h-40 rounded-md bg-[#4C516D] bg-opacity-50 bg-[url('/tactical-night-ops.png')] bg-cover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Brand Values" className="text-white" />
        <div className="grid gap-6 md:grid-cols-3">
          <ValueCard
            icon="shield"
            title="Reliability Under Pressure"
            description="When failure is not an option, Tribe delivers. Our gear is engineered to perform flawlessly in the most extreme conditions and high-stress scenarios."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            iconClassName="bg-[#4C516D] text-[#BEAB70]"
            titleClassName="text-white"
          />
          <ValueCard
            icon="target"
            title="Tactical Precision"
            description="Every feature, pocket, and stitch serves a purpose. We eliminate excess and focus on what matters: equipment that enhances mission capability."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            iconClassName="bg-[#4C516D] text-[#BEAB70]"
            titleClassName="text-white"
          />
          <ValueCard
            icon="zap"
            title="Adaptive Evolution"
            description="Threats evolve. Missions change. Tribe equipment continuously adapts through operator feedback and technological advancement to stay ahead of emerging challenges."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            iconClassName="bg-[#4C516D] text-[#BEAB70]"
            titleClassName="text-white"
          />
        </div>
      </section>

      {/* Target Audience */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Target Audience" className="text-white" />
        <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-6">
          <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">
            Sub-Brand: Tactical Gear for Military and Elite Units
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-white">Target Audience:</h4>
            <p className="text-gray-100">
              Elite military professionals, tactical units, and special operations forces requiring mission-critical
              equipment designed for adaptability, durability, and precision.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">Key Characteristics:</h4>
            <ul className="list-inside space-y-2 text-gray-100">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#BEAB70]"></span>
                <span>Operates in high-risk, high-stakes combat or rescue missions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#BEAB70]"></span>
                <span>Needs gear that is modular, customizable, and built to military specifications</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#BEAB70]"></span>
                <span>Values field-tested performance and quick-deployment features</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#BEAB70]"></span>
                <span>Requires tech-integrated or unit-specific loadouts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-[#BEAB70]"></span>
                <span>Expects elite-level reliability and stealth in hostile conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Brand Voice" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">How We Communicate</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-100">
              <li>
                <strong>Direct and precise</strong> — We avoid marketing fluff and focus on capabilities and
                specifications
              </li>
              <li>
                <strong>Technical but accessible</strong> — We use industry terminology but explain complex concepts
              </li>
              <li>
                <strong>Confident but not arrogant</strong> — We let performance speak for itself
              </li>
              <li>
                <strong>Mission-focused</strong> — We frame features in terms of operational benefits
              </li>
            </ul>
          </div>
          <VoiceSnippet
            example="The GRID-7 Chest Rig integrates seamlessly with all Tribe load-bearing systems. Seven modular attachment points accommodate mission-specific pouches, while the reinforced hypalon harness distributes up to 35 lbs of gear without compromising mobility. Field-tested in three combat theaters and refined based on operator feedback."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            titleClassName="text-[#BEAB70]"
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16">
        <SectionHeading title="Product Categories" className="text-white" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Load-Bearing Systems</h3>
            <p className="mb-4 text-gray-100">
              Modular plate carriers, chest rigs, battle belts, and harnesses designed for optimal weight distribution
              and mission-specific customization.
            </p>
          </div>
          <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Tactical Apparel</h3>
            <p className="mb-4 text-gray-100">
              Combat uniforms, base layers, and outerwear engineered for durability, mobility, and integration with
              equipment systems.
            </p>
          </div>
          <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Transport & Storage</h3>
            <p className="mb-4 text-gray-100">
              Mission-specific packs, cases, and deployment bags built to protect and organize critical gear in transit
              and under adverse conditions.
            </p>
          </div>
          <div className="rounded-lg border border-[#1F2936] bg-[#363b4f] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Accessories & Tools</h3>
            <p className="mb-4 text-gray-100">
              Purpose-built tactical accessories, field tools, and specialized equipment components that enhance
              operational capability.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Inserts */}
      <section className="mb-16 border-b border-[#1F2936] pb-16">
        <SectionHeading title="Visual Applications" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <SplitImageText
            imageSrc="/tactical-equipment.png"
            title="Equipment Integration"
            description="Tribe's modular systems are designed to work together seamlessly, creating a cohesive ecosystem of tactical gear that can be customized for specific mission requirements."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            titleClassName="text-white"
          />
          <SplitImageText
            imageSrc="/tactical-extraction.png"
            title="Field Performance"
            description="Every Tribe product is tested in real-world operational environments by active duty professionals who depend on their equipment to perform under the most demanding conditions."
            className="border-[#1F2936] bg-[#363b4f] text-gray-100"
            titleClassName="text-white"
          />
        </div>
      </section>

      {/* Product Showcase */}
      <section>
        <SectionHeading title="Featured Products" className="text-white" />
        <ProductComparison
          features={[
            {
              feature: "Load Distribution",
              forest: "Advanced ergonomic system",
              competitor1: "Basic shoulder straps",
              competitor2: "Standard webbing",
              competitor3: "Minimal support",
            },
            {
              feature: "Material Durability",
              forest: "1000D Cordura with reinforced stitching",
              competitor1: "600D Polyester",
              competitor2: "500D Nylon",
              competitor3: "Mixed materials",
            },
            {
              feature: "Modular Attachment",
              forest: true,
              competitor1: true,
              competitor2: false,
              competitor3: true,
            },
            {
              feature: "Weather Resistance",
              forest: "Full weatherproofing",
              competitor1: "Water resistant",
              competitor2: "Basic DWR coating",
              competitor3: "Minimal protection",
            },
            {
              feature: "Lifetime Warranty",
              forest: true,
              competitor1: false,
              competitor2: false,
              competitor3: false,
            },
          ]}
          competitors={["Competitor A", "Competitor B", "Competitor C"]}
        />
      </section>
    </div>
  )
}
