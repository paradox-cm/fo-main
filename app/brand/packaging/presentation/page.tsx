import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function LifestylePresentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Lifestyle Presentation</h1>

      {/* Presentation Philosophy */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Presentation Philosophy" subtitle="Our approach to lifestyle product presentation" />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for presentation philosophy content]</p>
      </section>

      {/* Forest Outfitters Presentation */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Lifestyle presentation for the core brand" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Product Photography</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=forest outfitters product photography"
                  alt="Forest Outfitters Product Photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for product photography guidelines]</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Lifestyle Photography</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=forest outfitters lifestyle photography"
                  alt="Forest Outfitters Lifestyle Photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for lifestyle photography guidelines]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribe Equipment Presentation */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Lifestyle presentation for tactical gear" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Product Photography</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=tribe equipment product photography"
                  alt="Tribe Equipment Product Photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for product photography guidelines]</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Lifestyle Photography</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=400&width=400&query=tribe equipment lifestyle photography"
                  alt="Tribe Equipment Lifestyle Photography"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for lifestyle photography guidelines]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photography Guidelines */}
      <section className="mb-16">
        <SectionHeading
          title="Photography Guidelines"
          subtitle="General guidelines for product and lifestyle photography"
        />
        <div className="grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Lighting</h3>
            <p className="text-sm text-gray-90">[Placeholder for lighting guidelines]</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Composition</h3>
            <p className="text-sm text-gray-90">[Placeholder for composition guidelines]</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Color Grading</h3>
            <p className="text-sm text-gray-90">[Placeholder for color grading guidelines]</p>
          </div>
        </div>
      </section>
    </div>
  )
}
