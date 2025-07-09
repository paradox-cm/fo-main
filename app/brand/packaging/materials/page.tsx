import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function SustainableMaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">
        Sustainable Packaging Materials
      </h1>

      {/* Sustainability Commitment */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading
          title="Sustainability Commitment"
          subtitle="Our approach to environmentally responsible packaging"
        />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for sustainability commitment content]</p>
      </section>

      {/* Approved Materials */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading
          title="Approved Materials"
          subtitle="Sustainable materials approved for use across all brands"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="relative aspect-square w-full">
              <Image
                src="/placeholder.svg?height=300&width=300&query=recycled cardboard"
                alt="Recycled Cardboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-tektur text-xl uppercase tracking-wider text-white">Recycled Cardboard</h3>
              <p className="text-sm text-gray-90">[Placeholder for recycled cardboard details]</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="relative aspect-square w-full">
              <Image
                src="/placeholder.svg?height=300&width=300&query=biodegradable plastic"
                alt="Biodegradable Plastic"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-tektur text-xl uppercase tracking-wider text-white">Biodegradable Plastic</h3>
              <p className="text-sm text-gray-90">[Placeholder for biodegradable plastic details]</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="relative aspect-square w-full">
              <Image
                src="/placeholder.svg?height=300&width=300&query=organic cotton"
                alt="Organic Cotton"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="mb-2 font-tektur text-xl uppercase tracking-wider text-white">Organic Cotton</h3>
              <p className="text-sm text-gray-90">[Placeholder for organic cotton details]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Specifications */}
      <section className="mb-16">
        <SectionHeading
          title="Material Specifications"
          subtitle="Detailed specifications for approved packaging materials"
        />
        <div className="overflow-hidden rounded-lg border border-[#242423]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-40 text-left">
              <tr>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Material</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Composition</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Certification</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Usage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242423]">
              <tr className="bg-gray-30">
                <td className="p-4 text-sm text-gray-90">Recycled Cardboard</td>
                <td className="p-4 text-sm text-gray-90">100% Post-Consumer Waste</td>
                <td className="p-4 text-sm text-gray-90">FSC Certified</td>
                <td className="p-4 text-sm text-gray-90">Outer Boxes, Hang Tags</td>
              </tr>
              <tr className="bg-gray-30">
                <td className="p-4 text-sm text-gray-90">Biodegradable Plastic</td>
                <td className="p-4 text-sm text-gray-90">PLA (Polylactic Acid)</td>
                <td className="p-4 text-sm text-gray-90">ASTM D6400</td>
                <td className="p-4 text-sm text-gray-90">Protective Wrapping</td>
              </tr>
              <tr className="bg-gray-30">
                <td className="p-4 text-sm text-gray-90">Organic Cotton</td>
                <td className="p-4 text-sm text-gray-90">100% Organic Cotton</td>
                <td className="p-4 text-sm text-gray-90">GOTS Certified</td>
                <td className="p-4 text-sm text-gray-90">Dust Bags, Wrapping</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
