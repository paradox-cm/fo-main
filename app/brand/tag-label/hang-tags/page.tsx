import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function HangTagsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Hang Tag Specifications</h1>

      {/* Forest Outfitters Hang Tags */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Hang tag specifications for the core brand" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Standard Hang Tag</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300&query=forest outfitters hang tag"
                  alt="Forest Outfitters Hang Tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>Dimensions: 2.5" x 4"</p>
              <p>Material: 100# Recycled Cardstock</p>
              <p>Printing: 2-color (Black + Gold)</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Premium Hang Tag</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300&query=forest outfitters premium hang tag"
                  alt="Forest Outfitters Premium Hang Tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>Dimensions: 3" x 5"</p>
              <p>Material: 120# Recycled Cardstock with Soft-Touch Lamination</p>
              <p>Printing: 2-color (Black + Gold) with Gold Foil Accents</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tribe Equipment Hang Tags */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Hang tag specifications for tactical gear" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Standard Hang Tag</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300&query=tribe equipment hang tag"
                  alt="Tribe Equipment Hang Tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for Tribe Equipment hang tag specifications]</p>
            </div>
          </div>
        </div>
      </section>

      {/* HYDE Hang Tags */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Hang tag specifications for camouflage technology" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Technology Hang Tag</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300&query=hyde technology hang tag"
                  alt="HYDE Technology Hang Tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for HYDE hang tag specifications]</p>
            </div>
          </div>
        </div>
      </section>

      {/* RBF Hang Tags */}
      <section className="mb-16">
        <SectionHeading title="RBF (Real Big Foot)" subtitle="Hang tag specifications for lifestyle apparel" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Standard Hang Tag</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/placeholder.svg?height=400&width=300&query=rbf hang tag"
                  alt="RBF Hang Tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-90">
              <p>[Placeholder for RBF hang tag specifications]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
