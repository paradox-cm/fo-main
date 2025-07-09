import Image from "next/image"
import { SectionHeading } from "@/components/brand/section-heading"
import { SplitImageText } from "@/components/brand/split-image-text"
import { ValueCard } from "@/components/brand/value-card"
import { VoiceSnippet } from "@/components/brand/voice-snippet"
import { AiPatternComparison } from "@/components/brand/ai-pattern-comparison"
import { TechVoiceSnippet } from "@/components/brand/tech-voice-snippet"
import { CamoComparisonChart } from "@/components/brand/camo-comparison-chart"

export default function HydePage() {
  // Define comparison data for the CamoComparisonChart
  const camoFeatures = [
    {
      feature: "Detection Distance Reduction",
      hyde: "78%",
      competitor1: "45%",
      competitor2: "52%",
    },
    {
      feature: "Pattern Adaptability",
      hyde: "High",
      competitor1: "Low",
      competitor2: "Medium",
    },
    {
      feature: "Spectrum Coverage",
      hyde: "Visible + NIR",
      competitor1: "Visible Only",
      competitor2: "Visible Only",
    },
    {
      feature: "Environmental Variants",
      hyde: "12",
      competitor1: "5",
      competitor2: "7",
    },
    {
      feature: "AI-Generated Patterns",
      hyde: "Yes",
      competitor1: "No",
      competitor2: "No",
    },
  ]

  const camoCompetitors = ["MultiCam®", "KUIU®"]

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-lg">
          <div className="relative h-[50vh] min-h-[400px] w-full">
            <Image
              src="/images/HYDE-BG-cmpr.png"
              alt="HYDE™ Camouflage Pattern"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="mb-6">
                <Image src="/images/HYDE.svg" alt="HYDE™ Logo" width={320} height={320} />
              </div>
              <h1 className="mb-4 font-tektur text-3xl uppercase tracking-wider text-white md:text-5xl">
                HYDE™ Camouflage
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
                The world's first AI-generated adaptive camouflage platform, redefining concealment through advanced
                pattern recognition and environmental adaptation.
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
            <p className="mb-4 text-lg text-gray-300">
              HYDE™ began as an experimental R&D project within Forest Outfitters' advanced materials lab. The initial
              goal was modest: improve traditional camouflage by analyzing thousands of natural environments. What
              emerged was revolutionary—a proprietary AI system capable of generating terrain-specific patterns with
              unprecedented effectiveness.
            </p>
            <p className="mb-4 text-lg text-gray-300">
              Named after the biological concept of "hiding in plain sight," HYDE™ quickly evolved from a pattern
              generation tool into a comprehensive concealment platform. Today, it encompasses both the AI technology
              and the resulting product line of advanced camouflage systems.
            </p>
          </div>
          <div>
            <p className="mb-4 text-lg text-gray-300">
              Unlike traditional camouflage based on human design, HYDE™ patterns are created through machine learning
              algorithms that analyze thousands of environmental variables—light conditions, terrain features, seasonal
              changes, and even observer perception tendencies.
            </p>
            <p className="text-lg text-gray-300">
              While HYDE™ operates as a distinct brand within the Forest family, it maintains the parent company's
              commitment to performance and innovation. The difference lies in HYDE™'s singular focus on concealment
              technology and its data-driven approach to product development.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Identity */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Visual Identity" className="text-white" />

        {/* Color Palette */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Color Palette</h3>
          <div className="grid gap-4 md:grid-cols-5">
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <div className="mb-3 h-24 rounded-md bg-[#CFB023]"></div>
              <p className="font-mono text-sm text-gray-300">Forest Gold</p>
              <p className="font-mono text-sm text-gray-300">#CFB023</p>
              <p className="font-mono text-sm text-gray-300">Shared legacy</p>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <div className="mb-3 h-24 rounded-md bg-[#645340]"></div>
              <p className="font-mono text-sm text-gray-300">Tactical Brown</p>
              <p className="font-mono text-sm text-gray-300">#645340</p>
              <p className="font-mono text-sm text-gray-300">Primary accent</p>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <div className="mb-3 h-24 rounded-md bg-[#2E2E2E]"></div>
              <p className="font-mono text-sm text-gray-300">Slate Gray</p>
              <p className="font-mono text-sm text-gray-300">#2E2E2E</p>
              <p className="font-mono text-sm text-gray-300">Base tone</p>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <div className="mb-3 h-24 rounded-md bg-[#E5E5E5]"></div>
              <p className="font-mono text-sm text-gray-300">Ash Gray</p>
              <p className="font-mono text-sm text-gray-300">#E5E5E5</p>
              <p className="font-mono text-sm text-gray-300">Secondary tone</p>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <div className="mb-3 h-24 rounded-md bg-[#FFFFFF] border border-[#252523]"></div>
              <p className="font-mono text-sm text-gray-300">Tactical White</p>
              <p className="font-mono text-sm text-gray-300">#FFFFFF</p>
              <p className="font-mono text-sm text-gray-300">UI/pattern testing</p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
                <div className="mb-3 h-12 rounded-md bg-[#5A3C2B]"></div>
                <p className="font-mono text-sm text-gray-300">Rust Brown</p>
                <p className="font-mono text-xs text-gray-400">#5A3C2B</p>
              </div>
              <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
                <div className="mb-3 h-12 rounded-md bg-[#6C6A6A]"></div>
                <p className="font-mono text-sm text-gray-300">Iron Gray</p>
                <p className="font-mono text-xs text-gray-400">#6C6A6A</p>
              </div>
              <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
                <div className="mb-3 h-12 rounded-md bg-[#E9E4D9]"></div>
                <p className="font-mono text-sm text-gray-300">Bone White</p>
                <p className="font-mono text-xs text-gray-400">#E9E4D9</p>
              </div>
              <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
                <div className="mb-3 h-12 rounded-md bg-[#F8F6F2]"></div>
                <p className="font-mono text-sm text-gray-300">Heatmap Ivory</p>
                <p className="font-mono text-xs text-gray-400">#F8F6F2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-12">
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Typography</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Primary: TT Octosquares</h4>
              <p className="font-tektur text-4xl text-gray-300">ABCDEFGHIJKLM</p>
              <p className="font-tektur text-4xl text-gray-300">NOPQRSTUVWXYZ</p>
              <p className="font-tektur text-4xl text-gray-300">1234567890</p>
            </div>
            <div>
              <h4 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Secondary: Roboto Mono</h4>
              <p className="font-mono text-2xl text-gray-300">ABCDEFGHIJKLM</p>
              <p className="font-mono text-2xl text-gray-300">NOPQRSTUVWXYZ</p>
              <p className="font-mono text-2xl text-gray-300">1234567890</p>
            </div>
          </div>
        </div>

        {/* Visual Elements */}
        <div>
          <h3 className="mb-6 font-tektur text-2xl uppercase tracking-wider text-white">Visual Elements</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Neural Patterns</h4>
              <div className="h-40 rounded-md bg-black bg-opacity-50 bg-[url('/neural-texture.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Data Visualizations</h4>
              <div className="h-40 rounded-md bg-black bg-opacity-50 bg-[url('/thermal-vision-map.png')] bg-cover"></div>
            </div>
            <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-4">
              <h4 className="mb-3 font-tektur text-lg uppercase tracking-wider text-white">Algorithmic Textures</h4>
              <div className="h-40 rounded-md bg-black bg-opacity-50 bg-[url('/synthetic-randomness.png')] bg-cover"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Brand Values" className="text-white" />
        <div className="grid gap-6 md:grid-cols-3">
          <ValueCard
            icon="eye"
            title="Adaptive Invisibility"
            description="We believe effective concealment must adapt to changing environments. Our patterns evolve with terrain, light, and observer distance to maintain optimal invisibility."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            iconClassName="bg-black text-white"
            titleClassName="text-white"
          />
          <ValueCard
            icon="zap"
            title="Technological Edge"
            description="We harness cutting-edge AI, material science, and perception psychology to create concealment systems that outperform traditional approaches by measurable margins."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            iconClassName="bg-black text-white"
            titleClassName="text-white"
          />
          <ValueCard
            icon="shield"
            title="Proven Performance"
            description="We validate every pattern through rigorous field testing and quantifiable metrics. We don't just claim effectiveness—we measure, prove, and continuously improve it."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            iconClassName="bg-black text-white"
            titleClassName="text-white"
          />
        </div>
      </section>

      {/* Technology Section */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="The HYDE™ Technology" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Pattern Generation</h3>
            <p className="mb-4 text-gray-300">
              The core of HYDE™ is our proprietary neural network that analyzes thousands of environmental inputs to
              generate terrain-specific camouflage patterns. Unlike traditional designs based on artistic
              interpretation, HYDE™ patterns are created through data-driven algorithms that optimize for specific
              visibility conditions.
            </p>
            <p className="mb-4 text-gray-300">
              Each pattern undergoes virtual testing against simulated observer models before physical prototyping
              begins. This allows us to rapidly iterate and refine patterns for maximum effectiveness.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Material Integration</h3>
            <p className="mb-4 text-gray-300">
              HYDE™ patterns are engineered in conjunction with advanced textile technologies. Our materials are
              selected and treated to enhance pattern performance across multiple spectrums—visible light,
              near-infrared, and thermal.
            </p>
            <p className="mb-4 text-gray-300">
              The HYDE™ platform includes specialized printing processes that maintain pattern integrity under stress,
              UV exposure, and repeated washing. This ensures long-term effectiveness in field conditions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Technology Visualization */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="AI Pattern Technology" className="text-white" />
        <div className="mb-12">
          <AiPatternComparison
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            titleClassName="text-white"
            highlightClassName="text-white"
          />
        </div>
        <div>
          <TechVoiceSnippet
            title="Technical Specifications"
            specs={[
              "Neural Network: Custom GAN architecture with 17.3M parameters",
              "Training Data: 12,800+ terrain samples across 6 biomes",
              "Pattern Resolution: Up to 4800 DPI for production",
              "Spectrum Coverage: Visible + NIR (700-1200nm)",
              "Detection Reduction: 78% average vs. standard patterns",
            ]}
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            titleClassName="text-white"
          />
        </div>
      </section>

      {/* Pattern Comparison */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Pattern Comparison" className="text-white" />
        <CamoComparisonChart
          features={camoFeatures}
          competitors={camoCompetitors}
          className="border-[#252523] bg-[#1a1a1a] text-gray-300"
          titleClassName="text-white"
          highlightClassName="text-white"
        />
      </section>

      {/* Target Audience */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Target Audience" className="text-white" />
        <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-6">
          <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">
            Technology Brand: AI-Evolved Camouflage Systems
          </h3>

          <div className="mb-6">
            <h4 className="mb-3 text-lg font-semibold text-white">Target Audience:</h4>
            <p className="text-gray-300">
              Tech-forward hunters, tactical experts, and outdoor enthusiasts seeking advanced concealment solutions
              tailored to specific environments and body types.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-lg font-semibold text-white">Key Characteristics:</h4>
            <ul className="list-inside space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-white"></span>
                <span>Demands superior stealth across terrain types and lighting conditions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-white"></span>
                <span>Values personalization through AI-driven customization</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-white"></span>
                <span>Interested in cutting-edge material science and generative design</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-white"></span>
                <span>Operates in environments requiring next-gen concealment (e.g., SAR, recon, deep hunts)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1.5 block h-1.5 w-1.5 rounded-full bg-white"></span>
                <span>Wants a solution that blends traditional biology with future-ready tech</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Brand Voice" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">How We Communicate</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-300">
              <li>
                <strong>Technical and precise</strong> — We use data points and specific terminology
              </li>
              <li>
                <strong>Innovative but credible</strong> — We balance cutting-edge concepts with proven results
              </li>
              <li>
                <strong>Educational</strong> — We explain the science behind our technology
              </li>
              <li>
                <strong>Performance-focused</strong> — We emphasize measurable effectiveness over aesthetics
              </li>
            </ul>
          </div>
          <VoiceSnippet
            example="The HYDE™ Alpine Transition pattern achieves a 78% reduction in detection rate compared to traditional camouflage when viewed from 50-200 meters. Generated from analysis of 1,200+ high-altitude environments, this pattern adapts to both rocky terrain and sparse vegetation while maintaining effectiveness during seasonal transitions."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            titleClassName="text-white"
          />
        </div>
      </section>

      {/* Product Categories */}
      <section className="mb-16 border-b border-[#252523] pb-16">
        <SectionHeading title="Product Categories" className="text-white" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Terrain-Specific Patterns</h3>
            <p className="mb-4 text-gray-300">
              Specialized camouflage patterns optimized for specific environments: forest, desert, alpine, urban, and
              transitional zones.
            </p>
          </div>
          <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Concealment Systems</h3>
            <p className="mb-4 text-gray-300">
              Complete concealment solutions including ghillie suits, camo netting, and portable blinds enhanced with
              HYDE™ technology.
            </p>
          </div>
          <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Technical Apparel</h3>
            <p className="mb-4 text-gray-300">
              Performance clothing featuring HYDE™ patterns, designed for hunters, wildlife photographers, and tactical
              operators.
            </p>
          </div>
          <div className="rounded-lg border border-[#252523] bg-[#1a1a1a] p-6">
            <h3 className="mb-3 font-tektur text-xl uppercase tracking-wider text-white">Equipment Wraps</h3>
            <p className="mb-4 text-gray-300">
              Adaptable covers and wraps for gear, weapons, and equipment that integrate with HYDE™ personal camouflage
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Applications */}
      <section className="mb-16">
        <SectionHeading title="Visual Applications" className="text-white" />
        <div className="grid gap-8 md:grid-cols-2">
          <SplitImageText
            imageSrc="/forest-observer.png"
            title="Forest Environment"
            description="HYDE™ Forest pattern analyzed 3,200+ woodland environments to create a multi-layered design that breaks up the human silhouette at various distances and light conditions."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            titleClassName="text-white"
          />
          <SplitImageText
            imageSrc="/desert-camouflaged-figure.png"
            title="Desert Environment"
            description="The HYDE™ Arid pattern incorporates micro-texture elements that mimic the granular nature of desert environments while adapting to changing light conditions throughout the day."
            className="border-[#252523] bg-[#1a1a1a] text-gray-300"
            titleClassName="text-white"
          />
        </div>
      </section>
    </div>
  )
}
