import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function UnboxingExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Unboxing Experience</h1>

      {/* Unboxing Philosophy */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading
          title="Unboxing Philosophy"
          subtitle="Our approach to creating memorable unboxing experiences"
        />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for unboxing philosophy content]</p>
      </section>

      {/* Forest Outfitters Unboxing */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Unboxing experience for the core brand" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Standard Packaging</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=forest outfitters packaging"
                  alt="Forest Outfitters Packaging"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for standard packaging details]</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Premium Packaging</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=forest outfitters premium packaging"
                  alt="Forest Outfitters Premium Packaging"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for premium packaging details]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribe Equipment Unboxing */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Unboxing experience for tactical gear" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Tactical Packaging</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=tribe equipment packaging"
                  alt="Tribe Equipment Packaging"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for tactical packaging details]</p>
            </div>
          </div>
        </div>
      </section>

      {/* HYDE Unboxing */}
      <section className="mb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Unboxing experience for camouflage technology" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Technology Packaging</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=hyde technology packaging"
                  alt="HYDE Technology Packaging"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for technology packaging details]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
