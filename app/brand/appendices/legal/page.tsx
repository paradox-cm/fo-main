import { SectionHeading } from "@/components/brand/section-heading"

export default function LegalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Trademark & Legal Information</h1>

      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Trademark Usage" subtitle="Guidelines for proper trademark usage" />
        <div className="prose prose-gold max-w-none text-gray-90">
          <p>[Placeholder for trademark usage guidelines]</p>
          <h3>Registered Trademarks</h3>
          <ul>
            <li>Forest Outfitters®</li>
            <li>Tribe Equipment®</li>
            <li>HYDE™</li>
            <li>RBF (Real Big Foot)®</li>
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <SectionHeading title="Legal Notices" subtitle="Important legal information" />
        <div className="prose prose-gold max-w-none text-gray-90">
          <p>[Placeholder for legal notices]</p>
          <h3>Copyright</h3>
          <p>© {new Date().getFullYear()} Forest Outfitters, Inc. All rights reserved.</p>
          <h3>Confidentiality</h3>
          <p>[Placeholder for confidentiality information]</p>
        </div>
      </section>
    </div>
  )
}
