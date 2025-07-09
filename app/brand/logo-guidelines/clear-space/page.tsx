import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function ClearSpacePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Clear Space & Sizing</h1>

      {/* Forest Outfitters Clear Space */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Clear space and minimum size requirements" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Clear Space</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/FOREST-Logo.White.png"
                  alt="Forest Outfitters Logo Clear Space"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">
              Maintain a clear space equal to the height of the smallest triangle in the Forest Outfitters logo on all
              sides.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Minimum Size</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/logo-minimum-size-guidelines.png"
                  alt="Forest Outfitters Logo Minimum Size"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">
              The Forest Outfitters logo should never be smaller than 24px in height for digital applications and 0.25
              inches for print.
            </p>
          </div>
        </div>
      </section>

      {/* Tribe Equipment Clear Space */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Clear space and minimum size requirements" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Clear Space</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/tribe-logo-clear-space.png"
                  alt="Tribe Equipment Logo Clear Space"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for Tribe Equipment clear space guidelines]</p>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Minimum Size</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/abstract-geometric-logo-sizing.png"
                  alt="Tribe Equipment Logo Minimum Size"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for Tribe Equipment minimum size guidelines]</p>
          </div>
        </div>
      </section>

      {/* HYDE Clear Space */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Clear space and minimum size requirements" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Clear Space</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image src="/hyde-logo-clear-space.png" alt="HYDE Logo Clear Space" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for HYDE clear space guidelines]</p>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Minimum Size</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image src="/hyde-logo-minimum-size.png" alt="HYDE Logo Minimum Size" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for HYDE minimum size guidelines]</p>
          </div>
        </div>
      </section>

      {/* RBF Clear Space */}
      <section className="mb-16">
        <SectionHeading title="RBF (Real Big Foot)" subtitle="Clear space and minimum size requirements" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Clear Space</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image src="/rbf-logo-clear-space.png" alt="RBF Logo Clear Space" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for RBF clear space guidelines]</p>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Minimum Size</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image src="/rbf-logo-minimum-size.png" alt="RBF Logo Minimum Size" fill className="object-contain" />
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-90">[Placeholder for RBF minimum size guidelines]</p>
          </div>
        </div>
      </section>
    </div>
  )
}
