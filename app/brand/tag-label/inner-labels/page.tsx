import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function InnerLabelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Inner Label Guidelines</h1>

      {/* Inner Label Overview */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Inner Label Overview" subtitle="General guidelines for inner labels across all brands" />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for inner label overview]</p>
      </section>

      {/* Forest Outfitters Inner Labels */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Inner label specifications for the core brand" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Neck Label</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/1] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=600&query=forest outfitters neck label"
                  alt="Forest Outfitters Neck Label"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>Dimensions: 2.5" x 0.75"</p>
              <p>Material: Woven Polyester</p>
              <p>Colors: Black background with Gold logo</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Care Label</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/1] w-full">
                <Image
                  src="/placeholder.svg?height=200&width=600&query=forest outfitters care label"
                  alt="Forest Outfitters Care Label"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>Dimensions: 2" x 1.5"</p>
              <p>Material: Printed Satin</p>
              <p>Colors: Black text on White background</p>
            </div>
          </div>
        </div>
      </section>

      {/* Label Placement */}
      <section className="mb-16">
        <SectionHeading title="Label Placement" subtitle="Guidelines for proper label placement" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Apparel Placement</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=label placement diagram"
                  alt="Label Placement Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Equipment Placement</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=equipment label placement diagram"
                  alt="Equipment Label Placement Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
