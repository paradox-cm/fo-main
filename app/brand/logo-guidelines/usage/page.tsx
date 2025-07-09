import { SectionHeading } from "@/components/brand/section-heading"
import { UsageExample } from "@/components/brand/usage-example"

export default function LogoUsagePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Logo Usage Rules</h1>

      {/* Forest Outfitters Logo Usage */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Proper and improper usage of the Forest Outfitters logo" />
        <div className="grid gap-8 md:grid-cols-2">
          <UsageExample
            type="do"
            imageSrc="/brand-guidelines-mockup.png"
            description="Use the logo with proper clear space and at appropriate sizes."
          />
          <UsageExample
            type="dont"
            imageSrc="/misused-brand-elements.png"
            description="Don't distort, rotate, or change the colors of the logo."
          />
          <UsageExample
            type="do"
            imageSrc="/abstract-logo-dark.png"
            description="Use the white version of the logo on dark backgrounds."
          />
          <UsageExample
            type="dont"
            imageSrc="/abstract-logo-glow.png"
            description="Don't add effects, shadows, or outlines to the logo."
          />
        </div>
      </section>

      {/* Tribe Equipment Logo Usage */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Proper and improper usage of the Tribe Equipment logo" />
        <div className="grid gap-8 md:grid-cols-2">
          <UsageExample
            type="do"
            imageSrc="/community-gathering-logo.png"
            description="Use the logo with proper clear space and at appropriate sizes."
          />
          <UsageExample
            type="dont"
            imageSrc="/stylized-geometric-symbol.png"
            description="Don't distort, rotate, or change the colors of the logo."
          />
        </div>
      </section>

      {/* HYDE Logo Usage */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Proper and improper usage of the HYDE logo" />
        <div className="grid gap-8 md:grid-cols-2">
          <UsageExample
            type="do"
            imageSrc="/hyde-water-bottle.png"
            description="Use the logo with proper clear space and at appropriate sizes."
          />
          <UsageExample
            type="dont"
            imageSrc="/placeholder.svg?height=300&width=400&query=improper hyde logo usage"
            description="Don't distort, rotate, or change the colors of the logo."
          />
        </div>
      </section>

      {/* RBF Logo Usage */}
      <section className="mb-16">
        <SectionHeading title="RBF (Real Big Foot)" subtitle="Proper and improper usage of the RBF logo" />
        <div className="grid gap-8 md:grid-cols-2">
          <UsageExample
            type="do"
            imageSrc="/placeholder.svg?height=300&width=400&query=rbf logo usage example"
            description="Use the logo with proper clear space and at appropriate sizes."
          />
          <UsageExample
            type="dont"
            imageSrc="/placeholder.svg?height=300&width=400&query=improper rbf logo usage"
            description="Don't distort, rotate, or change the colors of the logo."
          />
        </div>
      </section>
    </div>
  )
}
