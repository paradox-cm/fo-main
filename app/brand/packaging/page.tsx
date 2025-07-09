import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function PackagingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">
        Packaging & Product Presentation
      </h1>

      {/* Overview Section */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Overview" subtitle="First impressions that reinforce brand identity" />
        <p className="mb-8 text-lg text-gray-90">
          Packaging is the customer's first physical interaction with the brand. Whether it's a tactical field pouch or
          a refined lifestyle box, packaging should reflect the identity of the product inside—rugged, functional,
          elevated, and always on-brand. These standards ensure unboxing experiences reinforce the Forest brand family's
          purpose and quality.
        </p>

        <div className="relative mb-8 aspect-[21/9] w-full overflow-hidden rounded-lg">
          <Image
            src="/diverse-packaging-styles.png"
            alt="Four brand packaging examples"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <p className="font-tektur text-2xl uppercase tracking-wider text-white">
              From field kit to gallery box. We package purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Packaging Standards */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading
          title="Shared Packaging Standards"
          subtitle="Sustainable, functional, and brand-aligned packaging principles"
        />

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <ul className="space-y-4 text-lg text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>All packaging must use recyclable or biodegradable materials whenever possible</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Interior wrapping, cards, and print finishes must match each brand's tone</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>QR codes are encouraged to connect users with product info, warranties, or care guides</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>No plastic fillers or excess packaging—efficiency and style over bulk</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image src="/eco-packaging-badges.png" alt="Sustainability badge icons" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/corrugated-box-cross-section.png"
                alt="Cross-section diagram of box structure"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Forest Outfitters */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Premium outdoor gear packaging with rugged elegance" />

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Retail Packaging</h3>
            <ul className="mb-6 space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Box: Matte black kraftboard</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Print: Forest Gold logo, spot gloss or deboss</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Interior: Topographic liner print in Olive Sage</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Extras: Gear care card, branded wrap paper, paracord tie</span>
              </li>
            </ul>

            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Online Fulfillment</h3>
            <ul className="space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Mailer: Recyclable eco-mailer with gold logo seal</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Inserts: QR code for gear guide + HYDE compatibility tag</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src="/forest-outfitters-unboxing.png"
                alt="Forest Outfitters box opened"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/forest-outfitters-flatlay.png"
                alt="Forest Outfitters packaging flat lay"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tribe Equipment */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Tactical packaging with mission-ready functionality" />

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Tactical Packaging</h3>
            <ul className="mb-6 space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Box: Reinforced matte tactical board</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Print: Grid system and loadout graphics in Matte Blue</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Interior: Loadout guide inside lid</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Labeling: Barcoded tag with unit and mission info</span>
              </li>
            </ul>

            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Field Distribution</h3>
            <ul className="space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Vacuum-sealed pouch with tear-tab</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Tactical card insert with QR to online brief</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src="/tactical-box-schematic.png"
                alt="Tribe Equipment tactical box"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/tribe-equipment-packaging.png"
                alt="Tribe Equipment field packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HYDE Camouflage */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Tech-forward packaging for advanced camouflage systems" />

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Retail Packaging</h3>
            <ul className="mb-6 space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Box: Terrain Gray soft-touch rigid case</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Print: Minimalist black with Burnt Orange accent strip</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Interior: HYDE pattern swatch, data card with camo visibility score</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Extras: NFC-enabled tag for pattern registration</span>
              </li>
            </ul>

            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Digital Add-Ons</h3>
            <ul className="space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Foldout: Terrain match chart and QR to test report</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>App: Option to scan and visualize camo in 3D</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400&query=HYDE packaging with simulation data card"
                alt="HYDE packaging with data card"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400&query=NFC tag overlay diagram and foldout visual mockup"
                alt="HYDE NFC tag and foldout"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RBF */}
      <section className="mb-16">
        <SectionHeading title="RBF (Real Big Foot)" subtitle="Refined, minimal packaging for lifestyle products" />

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Retail Packaging</h3>
            <ul className="mb-6 space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Box: Warm kraft board with cream matte finish</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Print: Gold or dark brown logo, debossed</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Interior: Cotton dust bag or layered wrap in Sand Beige</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Extras: Quote card, lookbook excerpt, optional wax seal</span>
              </li>
            </ul>

            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Lifestyle Packaging</h3>
            <ul className="space-y-2 text-gray-90">
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Gifting: Linen wrap, trail sticker pack, leather snap for outerwear</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>Premium box set options for retail partners</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400&query=RBF box with folded garments and kraft paper wrap"
                alt="RBF box with folded garments"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=400&query=RBF packaging components including card, wax seal, and cotton bag"
                alt="RBF packaging components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
