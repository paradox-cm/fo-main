import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function CoBrandingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Co-branding Guidelines</h1>

      {/* Co-branding Overview */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading
          title="Co-branding Overview"
          subtitle="General rules for co-branding with Forest Outfitters brands"
        />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for co-branding overview]</p>
      </section>

      {/* Forest Outfitters Co-branding */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Co-branding guidelines for the core brand" />
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Horizontal Lockup</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=forest outfitters co-branding horizontal"
                  alt="Forest Outfitters Horizontal Co-branding"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Vertical Lockup</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src="/placeholder.svg?height=300&width=600&query=forest outfitters co-branding vertical"
                  alt="Forest Outfitters Vertical Co-branding"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Badge Rules */}
      <section className="mb-16">
        <SectionHeading title="Badge Rules" subtitle="Guidelines for using brand badges" />
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Forest Outfitters Badge</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=forest outfitters badge"
                  alt="Forest Outfitters Badge"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">HYDE™ Technology Badge</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=hyde technology badge"
                  alt="HYDE Technology Badge"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Tribe Equipment Badge</h3>
            <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30 p-6">
              <div className="relative aspect-square w-full">
                <Image
                  src="/placeholder.svg?height=300&width=300&query=tribe equipment badge"
                  alt="Tribe Equipment Badge"
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
