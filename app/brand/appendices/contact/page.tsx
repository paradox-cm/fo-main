import { SectionHeading } from "@/components/brand/section-heading"

export default function ContactInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Contact Information</h1>

      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Brand Operations Team" subtitle="Contact information for brand-related inquiries" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Brand Manager</h3>
            <div className="space-y-2 text-gray-90">
              <p>Name: [Placeholder]</p>
              <p>Email: brand@forestoutfitters.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Creative Director</h3>
            <div className="space-y-2 text-gray-90">
              <p>Name: [Placeholder]</p>
              <p>Email: creative@forestoutfitters.com</p>
              <p>Phone: (555) 123-4568</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#242423] bg-gray-30 p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Marketing Team</h3>
            <div className="space-y-2 text-gray-90">
              <p>Department: Marketing</p>
              <p>Email: marketing@forestoutfitters.com</p>
              <p>Phone: (555) 123-4569</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading title="Brand Support" subtitle="How to get help with brand implementation" />
        <div className="rounded-lg border border-[#242423] bg-gray-30 p-6">
          <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Support Process</h3>
          <p className="mb-4 text-gray-90">[Placeholder for support process information]</p>
          <div className="rounded-md bg-gray-40 p-4">
            <p className="font-mono text-sm text-gray-90">
              For urgent brand inquiries, please contact: urgent@forestoutfitters.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
