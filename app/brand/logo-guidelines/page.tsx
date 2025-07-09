import { SectionHeading } from "@/components/brand/section-heading"
import Image from "next/image"

export default function LogoGuidelinesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <SectionHeading title="Logo Guidelines" subtitle="Maintaining brand integrity through consistent logo usage" />

      {/* Introduction Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Introduction</h2>
        <p className="mb-6 text-lg text-gray-90">
          The logo is the most immediate expression of a brand's identity. Each Forest Outfitters logo is crafted for
          clarity, utility, and impact across both print and digital mediums. These guidelines ensure all logos are used
          correctly and consistently—preserving brand integrity across all applications.
        </p>

        <div className="relative mb-8 mt-10 aspect-video w-full overflow-hidden rounded-lg bg-gray-20">
          <div className="grid grid-cols-4 gap-4 p-8">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/images/FOREST-Logo.White.svg"
                alt="Forest Outfitters Logo"
                width={200}
                height={50}
                className="mb-2"
              />
              <span className="text-sm text-gray-90">Primary Brand</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/TRIBE.svg" alt="Tribe Equipment Logo" width={200} height={80} className="mb-2" />
              <span className="text-sm text-gray-90">Tactical Division</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/HYDE.svg" alt="HYDE™ Logo" width={200} height={80} className="mb-2" />
              <span className="text-sm text-gray-90">Technology Brand</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/REAL-BIGFOOT.svg" alt="RBF Logo" width={200} height={80} className="mb-2" />
              <span className="text-sm text-gray-90">Lifestyle Collection</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-20 to-transparent p-4 text-center text-sm text-gray-90">
            Master logo sheet showing all four brands in horizontal lockup
          </div>
        </div>
      </section>

      {/* Clear Space & Minimum Sizing Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Clear Space & Minimum Sizing</h2>
        <p className="mb-6 text-lg text-gray-90">
          To ensure visibility and impact, always maintain a defined minimum space around each logo and adhere to
          minimum sizing rules.
        </p>

        <div className="mb-8 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-[#252523] bg-gray-20">
                <th className="px-6 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">Logo</th>
                <th className="px-6 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Minimum Size (Print)
                </th>
                <th className="px-6 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Minimum Size (Digital)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#252523]">
                <td className="px-6 py-4 text-gray-90">Forest Outfitters</td>
                <td className="px-6 py-4 text-gray-90">0.75 in wide</td>
                <td className="px-6 py-4 text-gray-90">80 px wide</td>
              </tr>
              <tr className="border-b border-[#252523] bg-gray-10">
                <td className="px-6 py-4 text-gray-90">Tribe Equipment</td>
                <td className="px-6 py-4 text-gray-90">0.65 in wide</td>
                <td className="px-6 py-4 text-gray-90">72 px wide</td>
              </tr>
              <tr className="border-b border-[#252523]">
                <td className="px-6 py-4 text-gray-90">HYDE™</td>
                <td className="px-6 py-4 text-gray-90">0.75 in wide</td>
                <td className="px-6 py-4 text-gray-90">80 px wide</td>
              </tr>
              <tr className="border-b border-[#252523] bg-gray-10">
                <td className="px-6 py-4 text-gray-90">RBF</td>
                <td className="px-6 py-4 text-gray-90">0.6 in wide</td>
                <td className="px-6 py-4 text-gray-90">70 px wide</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <h3 className="mb-2 font-tektur text-xl text-primary">Clear Space Rule:</h3>
          <p className="text-gray-90">
            Leave space equal to the height of the tallest letter (e.g., "F" or "T") on all sides of the logo.
          </p>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-20">
          <div className="flex h-full items-center justify-center p-8">
            <div className="relative">
              <div className="border-2 border-dashed border-primary p-12">
                <Image
                  src="/images/FOREST-Logo.White.svg"
                  alt="Forest Outfitters Logo with Clear Space"
                  width={300}
                  height={80}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -right-4 -top-4 border border-white/20"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-20 to-transparent p-4 text-center text-sm text-gray-90">
            Diagram showing bounding box and minimum spacing rules
          </div>
        </div>
      </section>

      {/* Approved Variants Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Approved Variants</h2>
        <p className="mb-6 text-lg text-gray-90">Each brand has several approved logo formats:</p>

        <div className="mb-8 space-y-8">
          <div className="rounded-lg bg-gray-10 p-6 border border-[#252523]">
            <h3 className="mb-4 flex items-center font-tektur text-xl text-primary">
              <span className="mr-2">🌲</span> Forest Outfitters
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-90">
              <li>Horizontal (primary)</li>
              <li>Stacked (for vertical formats)</li>
              <li>Monochrome (for tonal applications)</li>
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <Image
                  src="/images/FOREST-Logo.White.svg"
                  alt="Forest Outfitters Horizontal Logo"
                  width={150}
                  height={40}
                  className="brightness-0"
                />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <div className="flex flex-col items-center">
                  <Image src="/images/forest-icon-new.svg" alt="Forest Icon" width={60} height={60} className="mb-2" />
                  <Image
                    src="/images/FOREST-Logo.White.svg"
                    alt="Forest Outfitters Text"
                    width={100}
                    height={25}
                    className="brightness-0"
                  />
                </div>
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-gray-90 p-4">
                <Image
                  src="/images/FOREST-Logo.White.svg"
                  alt="Forest Outfitters Monochrome Logo"
                  width={150}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-10 p-6 border border-[#252523]">
            <h3 className="mb-4 flex items-center font-tektur text-xl text-primary">
              <span className="mr-2">🛡</span> Tribe Equipment
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-90">
              <li>Grid-based modular wordmark (primary)</li>
              <li>Tactical badge icon (optional)</li>
              <li>Black, white, or Desert Gold</li>
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <Image src="/images/TRIBE.svg" alt="Tribe Equipment Logo" width={150} height={60} />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <Image src="/images/Tribe-Logo.svg" alt="Tribe Badge" width={80} height={80} />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-gray-90 p-4">
                <Image
                  src="/images/TRIBE.svg"
                  alt="Tribe Equipment Monochrome Logo"
                  width={150}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-10 p-6 border border-[#252523]">
            <h3 className="mb-4 flex items-center font-tektur text-xl text-primary">
              <span className="mr-2">🦌</span> HYDE™
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-90">
              <li>All caps with trademark (primary)</li>
              <li>Minimal white or orange on dark pattern</li>
              <li>Flat only—never with effects or outlines</li>
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <Image src="/images/HYDE.svg" alt="HYDE™ Logo" width={150} height={60} />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-gray-90 p-4">
                <Image
                  src="/images/HYDE.svg"
                  alt="HYDE™ White Logo"
                  width={150}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-[#192E08] p-4">
                <div className="text-center font-tektur text-3xl tracking-wider text-[#B6531C]">HYDE™</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-10 p-6 border border-[#252523]">
            <h3 className="mb-4 flex items-center font-tektur text-xl text-primary">
              <span className="mr-2">🪵</span> RBF
            </h3>
            <ul className="mb-4 list-inside list-disc space-y-2 text-gray-90">
              <li>Wordmark (serif or sans)</li>
              <li>Stacked or linear monogram</li>
              <li>Embossed or woven variations preferred</li>
            </ul>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex aspect-video items-center justify-center rounded bg-white p-4">
                <Image src="/images/REAL-BIGFOOT.svg" alt="RBF Logo" width={150} height={60} />
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-[#A7995D] p-4">
                <div className="text-center font-tektur text-3xl tracking-wider text-white">RBF</div>
              </div>
              <div className="flex aspect-video items-center justify-center rounded bg-[#2E1C1C] p-4">
                <Image
                  src="/images/REAL-BIGFOOT.svg"
                  alt="RBF Monochrome Logo"
                  width={150}
                  height={60}
                  className="brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-20">
          <div className="grid h-full grid-cols-2 gap-4 p-8">
            <div className="flex items-center justify-center rounded-md bg-white p-4">
              <Image
                src="/logo-application-apparel.png"
                alt="Logo Application on Apparel"
                width={400}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex items-center justify-center rounded-md bg-white p-4">
              <Image
                src="/logo-application-tags.png"
                alt="Logo Application on Tags"
                width={400}
                height={300}
                className="rounded-md object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-20 to-transparent p-4 text-center text-sm text-gray-90">
            Application mockups on apparel, tags, UI, and gear
          </div>
        </div>
      </section>

      {/* Improper Usage Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Improper Usage</h2>
        <p className="mb-6 text-lg text-gray-90">Never:</p>

        <ul className="mb-8 list-inside list-disc space-y-2 text-gray-90">
          <li>Alter the logo color outside the approved palette</li>
          <li>Remove or resize the ™ symbol on HYDE™</li>
          <li>Apply drop shadows, bevels, or 3D effects</li>
          <li>Place the logo over complex or low-contrast backgrounds</li>
          <li>Stretch, squash, or rotate the logo</li>
          <li>Use outdated or unapproved logo files</li>
        </ul>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-20">
          <div className="grid h-full grid-cols-3 gap-4 p-8">
            <div className="flex flex-col items-center justify-center rounded-md bg-white p-4">
              <div className="relative mb-2">
                <Image
                  src="/images/forest-text-main.svg"
                  alt="Stretched Logo"
                  width={150}
                  height={40}
                  className="scale-x-150"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-red-500">X</div>
                </div>
              </div>
              <span className="text-center text-sm text-gray-90">Do not stretch or distort</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white p-4">
              <div className="relative mb-2">
                <div className="text-center font-tektur text-2xl tracking-wider text-purple-500">HYDE</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-red-500">X</div>
                </div>
              </div>
              <span className="text-center text-sm text-gray-90">Do not use unapproved colors</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-md bg-white p-4">
              <div className="relative mb-2">
                <div
                  className="flex h-20 w-40 items-center justify-center rounded bg-cover bg-center"
                  style={{ backgroundImage: "url('/geometric-kaleidoscope.png')" }}
                >
                  <Image
                    src="/images/TRIBE.svg"
                    alt="Logo on Busy Background"
                    width={120}
                    height={40}
                    className="opacity-70"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-red-500">X</div>
                </div>
              </div>
              <span className="text-center text-sm text-gray-90">Do not use on busy backgrounds</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-20 to-transparent p-4 text-center text-sm text-gray-90">
            "Do & Don't" grid with red X overlays on improper usage
          </div>
        </div>
      </section>

      {/* Co-Branding Guidelines Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Co-Branding Guidelines</h2>
        <p className="mb-6 text-lg text-gray-90">
          When partnering with other brands, Forest Outfitters branding should maintain clarity and equity in the visual
          relationship.
        </p>

        <div className="mb-6">
          <h3 className="mb-2 font-tektur text-xl text-primary">Co-Branding Rules:</h3>
          <ul className="list-inside list-disc space-y-2 text-gray-90">
            <li>Forest logo must be of equal or greater visual weight</li>
            <li>Maintain clear space between brands</li>
            <li>Separate logos using vertical divider or adequate margin</li>
            <li>Use neutral background or color field to avoid blending</li>
          </ul>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-20">
          <div className="flex h-full items-center justify-center p-8">
            <div className="flex items-center rounded-lg bg-white p-8">
              <Image
                src="/images/FOREST-Logo.White.svg"
                alt="Forest Outfitters Logo"
                width={200}
                height={50}
                className="mr-8 brightness-0"
              />
              <div className="mx-8 h-16 w-px bg-gray-30"></div>
              <div className="ml-8 text-center font-tektur text-3xl tracking-wider text-gray-90">PARTNER BRAND</div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-20 to-transparent p-4 text-center text-sm text-gray-90">
            Co-branded example with divider line and equal visual weight
          </div>
        </div>
      </section>
    </div>
  )
}
