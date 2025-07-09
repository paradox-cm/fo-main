import { SectionHeading } from "@/components/brand/section-heading"

export default function IconographyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Iconography</h1>

      {/* Icon System Overview */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Icon System" subtitle="Overview of the icon design system" />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for icon system overview]</p>
      </section>

      {/* Icon Grid */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Icon Library" subtitle="Standard icons used across all brands" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Placeholder for icon grid items */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center rounded-md border border-[#242423] bg-gray-30 p-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md bg-gray-40">
                <div className="h-8 w-8 rounded-full bg-gray-60"></div>
              </div>
              <p className="text-center font-tektur text-sm uppercase tracking-wider text-white">Icon Name</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="mb-16">
        <SectionHeading title="Usage Guidelines" subtitle="Rules for implementing icons" />
        <p className="mb-6 text-lg text-gray-90">[Placeholder for icon usage guidelines]</p>
      </section>
    </div>
  )
}
