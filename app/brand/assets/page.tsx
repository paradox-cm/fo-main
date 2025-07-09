import type { Metadata } from "next"
import { Download } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Asset Access & File Formats | Forest Outfitters Brand Guidelines",
  description:
    "Access and download official Forest Outfitters brand assets including logos, fonts, color libraries, and more.",
}

export default function AssetsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Brand Assets</h1>
      <p className="text-gray-300 mb-16">Official logos, fonts, and resources for all Forest Outfitters brands</p>

      {/* Forest Outfitters Assets */}
      <div className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Forest</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <Image
                src="/images/FOREST-Logo.White.png"
                alt="Forest Outfitters Logo"
                width={200}
                height={120}
                className="object-contain"
              />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">PRIMARY LOGO</h3>
            <p className="text-sm text-gray-300 mb-4">Full horizontal lockup with icon and wordmark.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img
                src="/images/forest-icon-new.svg"
                alt="Forest Outfitters Icon"
                className="h-auto max-h-full w-auto"
              />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">ICON ONLY</h3>
            <p className="text-sm text-gray-300 mb-4">Standalone icon for compact applications.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img src="/images/Forest-Badge.svg" alt="Forest Outfitters Badge" className="h-auto max-h-full w-auto" />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">BADGE LOGO</h3>
            <p className="text-sm text-gray-300 mb-4">Circular badge for patches and emblems.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Tribe Equipment Assets */}
      <div className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Tribe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img
                src="/images/Tribe-Logo.svg"
                alt="Tribe Equipment Primary Logo"
                className="h-auto max-h-full w-auto"
              />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">PRIMARY LOGO</h3>
            <p className="text-sm text-gray-300 mb-4">Grid-based modular wordmark.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img src="/images/TRIBE.svg" alt="Tribe Equipment Wordmark" className="h-auto max-h-full w-auto" />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">WORDMARK</h3>
            <p className="text-sm text-gray-300 mb-4">Text-only version for clean applications.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <div className="h-24 w-24 rounded-full bg-[#4C516D] p-4"></div>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">TACTICAL BADGE</h3>
            <p className="text-sm text-gray-300 mb-4">Compact icon for tactical applications.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#4C516D] text-[#4C516D] hover:bg-[#4C516D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HYDE™ Assets */}
      <div className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">HYDE</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img src="/images/HYDE.svg" alt="HYDE™ Primary Logo" className="h-auto max-h-full w-auto" />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">PRIMARY LOGO</h3>
            <p className="text-sm text-gray-300 mb-4">All caps with trademark symbol.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <div className="flex h-16 w-32 items-center justify-center rounded bg-[#B6531C]">
                <span className="font-tektur text-2xl text-white">HYDE™</span>
              </div>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">BURNT ORANGE</h3>
            <p className="text-sm text-gray-300 mb-4">Primary accent color version.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-[#4A4A4A] p-4">
              <span className="font-tektur text-3xl text-white">HYDE™</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">MINIMAL WHITE</h3>
            <p className="text-sm text-gray-300 mb-4">For dark pattern backgrounds.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#B6531C] text-[#B6531C] hover:bg-[#B6531C] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RBF Assets */}
      <div className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">The Real Bigfoot</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img src="/images/RBF-Logo.svg" alt="RBF Primary Logo" className="h-auto max-h-full w-auto" />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">PRIMARY LOGO</h3>
            <p className="text-sm text-gray-300 mb-4">Wordmark in serif or sans.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-black p-4">
              <img src="/images/REAL-BIGFOOT.svg" alt="RBF Full Name" className="h-auto max-h-full w-auto" />
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">FULL NAME</h3>
            <p className="text-sm text-gray-300 mb-4">Expanded "Real Big Foot" wordmark.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-40 items-center justify-center rounded bg-[#A7995D] p-4">
              <span className="font-tektur text-3xl text-white">RBF</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">MONOGRAM</h3>
            <p className="text-sm text-gray-300 mb-4">Stacked or linear monogram version.</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                SVG
              </a>
              <a
                href="#"
                className="flex-1 flex items-center justify-center py-2 px-4 border border-[#A7995D] text-[#A7995D] hover:bg-[#A7995D] hover:text-black transition-colors rounded"
              >
                <Download className="mr-2 h-4 w-4" />
                PNG
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Downloads */}
      <div className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">TYPOGRAPHY</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-32 items-center justify-center rounded bg-white p-4">
              <span className="text-center font-archivo text-4xl font-black text-black">Archivo</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">ARCHIVO</h3>
            <p className="text-sm text-gray-300 mb-4">Primary font for Forest Outfitters and RBF.</p>
            <a
              href="#"
              className="w-full flex items-center justify-center py-2 px-4 bg-[#B99C20] text-black hover:bg-[#D8B52E] transition-colors rounded"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Font Family
            </a>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-32 items-center justify-center rounded bg-white p-4">
              <span className="text-center font-tektur text-4xl text-black">TT Octosquares</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">TT OCTOSQUARES</h3>
            <p className="text-sm text-gray-300 mb-4">Primary font for Tribe Equipment.</p>
            <a
              href="#"
              className="w-full flex items-center justify-center py-2 px-4 bg-[#4C516D] text-white hover:bg-[#5C617D] transition-colors rounded"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Font Family
            </a>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-32 items-center justify-center rounded bg-white p-4">
              <span className="text-center font-mono text-4xl text-black">Libertad Mono</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">LIBERTAD MONO</h3>
            <p className="text-sm text-gray-300 mb-4">Secondary font for Tribe and HYDE™.</p>
            <a
              href="#"
              className="w-full flex items-center justify-center py-2 px-4 bg-[#B6531C] text-white hover:bg-[#C6632C] transition-colors rounded"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Font Family
            </a>
          </div>
          <div className="border border-[#252523] rounded-lg bg-black p-6">
            <div className="mb-4 flex h-32 items-center justify-center rounded bg-white p-4">
              <span className="text-center font-tektur text-4xl text-black">Tektur</span>
            </div>
            <h3 className="font-tektur text-lg uppercase text-white mb-2">TEKTUR</h3>
            <p className="text-sm text-gray-300 mb-4">Used for UI elements and headings.</p>
            <a
              href="#"
              className="w-full flex items-center justify-center py-2 px-4 bg-[#A7995D] text-black hover:bg-[#B7A96D] transition-colors rounded"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Font Family
            </a>
          </div>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">STANDARD FILE TYPES</h2>
        <div className="overflow-hidden rounded-lg border border-[#252523]">
          <table className="w-full border-collapse">
            <thead className="bg-black text-left">
              <tr>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Asset Type</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Formats</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#252523]">
              <tr className="bg-black">
                <td className="p-4 text-sm text-gray-300">Logos</td>
                <td className="p-4 font-mono text-sm text-gray-300">.SVG / .EPS / .PNG</td>
                <td className="p-4 text-sm text-gray-300">Vector for print, PNG for web</td>
              </tr>
              <tr className="bg-black">
                <td className="p-4 text-sm text-gray-300">Typography</td>
                <td className="p-4 font-mono text-sm text-gray-300">.TTF / .OTF</td>
                <td className="p-4 text-sm text-gray-300">All licenses included</td>
              </tr>
              <tr className="bg-black">
                <td className="p-4 text-sm text-gray-300">Color Swatches</td>
                <td className="p-4 font-mono text-sm text-gray-300">.ASE / .JPG</td>
                <td className="p-4 text-sm text-gray-300">Digital + print color standards</td>
              </tr>
              <tr className="bg-black">
                <td className="p-4 text-sm text-gray-300">Camo Patterns</td>
                <td className="p-4 font-mono text-sm text-gray-300">.PNG / .TIFF</td>
                <td className="p-4 text-sm text-gray-300">Textile-ready formats</td>
              </tr>
              <tr className="bg-black">
                <td className="p-4 text-sm text-gray-300">Docs & Guidelines</td>
                <td className="p-4 font-mono text-sm text-gray-300">.PDF / .MD / .KEY</td>
                <td className="p-4 text-sm text-gray-300">Editable and static</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">COLOR REFERENCE</h2>
        <div className="border border-[#252523] rounded-lg bg-black p-6">
          <p className="text-gray-300 mb-6">
            Complete color reference including all color codes and equivalents for all Forest Outfitters brands:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-tektur text-lg text-white mb-4">COLOR STANDARDS</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Pantone TCX</li>
                <li>Pantone Uncoated</li>
                <li>Pantone Coated</li>
                <li>RGB/HEX</li>
                <li>CMYK</li>
              </ul>
            </div>
            <div>
              <h3 className="font-tektur text-lg text-white mb-4">DOWNLOAD OPTIONS</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block w-full flex items-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Complete Color Reference (.PDF)
                </a>
                <a
                  href="#"
                  className="block w-full flex items-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Adobe Swatch Libraries (.ASE)
                </a>
                <a
                  href="#"
                  className="block w-full flex items-center py-2 px-4 border border-[#B99C20] text-[#B99C20] hover:bg-[#B99C20] hover:text-black transition-colors rounded"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Digital Color Values (.CSS)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
