import { SectionHeading } from "@/components/brand/section-heading"
import { ColorSwatch } from "@/components/brand/color-swatch"

export default function ColorPalettesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Color Palettes</h1>

      {/* Forest Outfitters Colors */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Forest Outfitters" subtitle="Primary color palette for the core brand" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch color="primary" name="Primary Gold" hex="#B99C20" pantone="PMS 7753 C" />
          <ColorSwatch color="black" name="Rich Black" hex="#0A0A0B" pantone="PMS Black 6 C" />
          <ColorSwatch color="gray" name="Charcoal" hex="#242423" pantone="PMS 426 C" />
          <ColorSwatch color="white" name="Off White" hex="#F2F2F2" pantone="PMS 11-0601 TCX" />
        </div>

        {/* Detailed Color Specifications */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="mb-4 font-tektur text-xl text-primary">Detailed Color Specifications</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-30 bg-gray-20">
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Color Name
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone TCX
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Uncoated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Coated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">RGB</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">HEX</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">CMYK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Primary Gold</td>
                <td className="px-4 py-3 text-gray-90">15-0647 TCX</td>
                <td className="px-4 py-3 text-gray-90">7753 U</td>
                <td className="px-4 py-3 text-gray-90">7753 C</td>
                <td className="px-4 py-3 text-gray-90">185, 156, 32</td>
                <td className="px-4 py-3 font-mono text-gray-90">#B99C20</td>
                <td className="px-4 py-3 text-gray-90">0, 16, 83, 27</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Rich Black</td>
                <td className="px-4 py-3 text-gray-90">19-0303 TCX</td>
                <td className="px-4 py-3 text-gray-90">Black 6 U</td>
                <td className="px-4 py-3 text-gray-90">Black 6 C</td>
                <td className="px-4 py-3 text-gray-90">10, 10, 11</td>
                <td className="px-4 py-3 font-mono text-gray-90">#0A0A0B</td>
                <td className="px-4 py-3 text-gray-90">75, 68, 67, 90</td>
              </tr>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Charcoal</td>
                <td className="px-4 py-3 text-gray-90">19-0201 TCX</td>
                <td className="px-4 py-3 text-gray-90">426 U</td>
                <td className="px-4 py-3 text-gray-90">426 C</td>
                <td className="px-4 py-3 text-gray-90">36, 36, 35</td>
                <td className="px-4 py-3 font-mono text-gray-90">#242423</td>
                <td className="px-4 py-3 text-gray-90">65, 58, 57, 37</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Off White</td>
                <td className="px-4 py-3 text-gray-90">11-0601 TCX</td>
                <td className="px-4 py-3 text-gray-90">11-0601 U</td>
                <td className="px-4 py-3 text-gray-90">11-0601 C</td>
                <td className="px-4 py-3 text-gray-90">242, 242, 242</td>
                <td className="px-4 py-3 font-mono text-gray-90">#F2F2F2</td>
                <td className="px-4 py-3 text-gray-90">0, 0, 0, 5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-tektur text-xl text-primary">Color Assets Download</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Adobe Swatch (.ase)
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Sketch Palette (.sketchpalette)
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              CSS Variables (.css)
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF Color Guide
            </a>
          </div>
        </div>
      </section>

      {/* Tribe Equipment Colors */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Tribe Equipment" subtitle="Color palette for tactical and military gear" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch color="primary" name="Tactical Blue" hex="#4C516D" pantone="PMS 5405 C" />
          <ColorSwatch color="black" name="Stealth Black" hex="#101319" pantone="PMS Black 7 C" />
          <ColorSwatch color="gray" name="Field Gray" hex="#6D7A8C" pantone="PMS 5415 C" />
          <ColorSwatch color="white" name="Ghost White" hex="#E9ECEF" pantone="PMS 11-4800 TCX" />
        </div>

        {/* Detailed Color Specifications */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="mb-4 font-tektur text-xl text-primary">Detailed Color Specifications</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-30 bg-gray-20">
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Color Name
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone TCX
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Uncoated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Coated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">RGB</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">HEX</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">CMYK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Tactical Blue</td>
                <td className="px-4 py-3 text-gray-90">19-3920 TCX</td>
                <td className="px-4 py-3 text-gray-90">5405 U</td>
                <td className="px-4 py-3 text-gray-90">5405 C</td>
                <td className="px-4 py-3 text-gray-90">76, 81, 109</td>
                <td className="px-4 py-3 font-mono text-gray-90">#4C516D</td>
                <td className="px-4 py-3 text-gray-90">30, 26, 0, 57</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Stealth Black</td>
                <td className="px-4 py-3 text-gray-90">19-4203 TCX</td>
                <td className="px-4 py-3 text-gray-90">Black 7 U</td>
                <td className="px-4 py-3 text-gray-90">Black 7 C</td>
                <td className="px-4 py-3 text-gray-90">16, 19, 25</td>
                <td className="px-4 py-3 font-mono text-gray-90">#101319</td>
                <td className="px-4 py-3 text-gray-90">36, 24, 0, 90</td>
              </tr>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Field Gray</td>
                <td className="px-4 py-3 text-gray-90">17-4111 TCX</td>
                <td className="px-4 py-3 text-gray-90">5415 U</td>
                <td className="px-4 py-3 text-gray-90">5415 C</td>
                <td className="px-4 py-3 text-gray-90">109, 122, 140</td>
                <td className="px-4 py-3 font-mono text-gray-90">#6D7A8C</td>
                <td className="px-4 py-3 text-gray-90">22, 13, 0, 45</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Ghost White</td>
                <td className="px-4 py-3 text-gray-90">11-4800 TCX</td>
                <td className="px-4 py-3 text-gray-90">11-4800 U</td>
                <td className="px-4 py-3 text-gray-90">11-4800 C</td>
                <td className="px-4 py-3 text-gray-90">233, 236, 239</td>
                <td className="px-4 py-3 font-mono text-gray-90">#E9ECEF</td>
                <td className="px-4 py-3 text-gray-90">3, 1, 0, 6</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-tektur text-xl text-primary">Color Assets Download</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Adobe Swatch (.ase)
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF Color Guide
            </a>
          </div>
        </div>
      </section>

      {/* HYDE™ Colors */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="HYDE™ Camouflage" subtitle="Color palette for AI-evolved camouflage technology" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch color="primary" name="Burnt Orange" hex="#B6531C" pantone="PMS 7516 C" />
          <ColorSwatch color="black" name="Carbon Black" hex="#1A1A1A" pantone="PMS Black 3 C" />
          <ColorSwatch color="gray" name="Terrain Gray" hex="#4A4A4A" pantone="PMS 425 C" />
          <ColorSwatch color="white" name="Bone White" hex="#E8E8E8" pantone="PMS 11-0601 TCX" />
        </div>

        {/* Detailed Color Specifications */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="mb-4 font-tektur text-xl text-primary">Detailed Color Specifications</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-30 bg-gray-20">
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Color Name
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone TCX
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Uncoated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Coated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">RGB</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">HEX</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">CMYK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Burnt Orange</td>
                <td className="px-4 py-3 text-gray-90">18-1248 TCX</td>
                <td className="px-4 py-3 text-gray-90">7516 U</td>
                <td className="px-4 py-3 text-gray-90">7516 C</td>
                <td className="px-4 py-3 text-gray-90">182, 83, 28</td>
                <td className="px-4 py-3 font-mono text-gray-90">#B6531C</td>
                <td className="px-4 py-3 text-gray-90">0, 54, 85, 29</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Carbon Black</td>
                <td className="px-4 py-3 text-gray-90">19-0303 TCX</td>
                <td className="px-4 py-3 text-gray-90">Black 3 U</td>
                <td className="px-4 py-3 text-gray-90">Black 3 C</td>
                <td className="px-4 py-3 text-gray-90">26, 26, 26</td>
                <td className="px-4 py-3 font-mono text-gray-90">#1A1A1A</td>
                <td className="px-4 py-3 text-gray-90">0, 0, 0, 90</td>
              </tr>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Terrain Gray</td>
                <td className="px-4 py-3 text-gray-90">18-0201 TCX</td>
                <td className="px-4 py-3 text-gray-90">425 U</td>
                <td className="px-4 py-3 text-gray-90">425 C</td>
                <td className="px-4 py-3 text-gray-90">74, 74, 74</td>
                <td className="px-4 py-3 font-mono text-gray-90">#4A4A4A</td>
                <td className="px-4 py-3 text-gray-90">0, 0, 0, 71</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Bone White</td>
                <td className="px-4 py-3 text-gray-90">11-0601 TCX</td>
                <td className="px-4 py-3 text-gray-90">11-0601 U</td>
                <td className="px-4 py-3 text-gray-90">11-0601 C</td>
                <td className="px-4 py-3 text-gray-90">232, 232, 232</td>
                <td className="px-4 py-3 font-mono text-gray-90">#E8E8E8</td>
                <td className="px-4 py-3 text-gray-90">0, 0, 0, 9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* RBF Colors */}
      <section className="mb-16">
        <SectionHeading title="RBF (Real Big Foot)" subtitle="Color palette for lifestyle apparel" />
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ColorSwatch color="primary" name="Wheat Gold" hex="#A7995D" pantone="PMS 4515 C" />
          <ColorSwatch color="black" name="Espresso" hex="#2E1C1C" pantone="PMS 476 C" />
          <ColorSwatch color="gray" name="Parchment" hex="#DCD6BE" pantone="PMS 7527 C" />
          <ColorSwatch color="white" name="Cream" hex="#E8E0C9" pantone="PMS 7499 C" />
        </div>

        {/* Detailed Color Specifications */}
        <div className="mt-8 overflow-x-auto">
          <h3 className="mb-4 font-tektur text-xl text-primary">Detailed Color Specifications</h3>
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-30 bg-gray-20">
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Color Name
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone TCX
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Uncoated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Pantone Coated
                </th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">RGB</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">HEX</th>
                <th className="px-4 py-3 text-left font-tektur text-sm uppercase tracking-wider text-white">CMYK</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Wheat Gold</td>
                <td className="px-4 py-3 text-gray-90">16-0948 TCX</td>
                <td className="px-4 py-3 text-gray-90">4515 U</td>
                <td className="px-4 py-3 text-gray-90">4515 C</td>
                <td className="px-4 py-3 text-gray-90">167, 153, 93</td>
                <td className="px-4 py-3 font-mono text-gray-90">#A7995D</td>
                <td className="px-4 py-3 text-gray-90">0, 8, 44, 35</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Espresso</td>
                <td className="px-4 py-3 text-gray-90">19-1015 TCX</td>
                <td className="px-4 py-3 text-gray-90">476 U</td>
                <td className="px-4 py-3 text-gray-90">476 C</td>
                <td className="px-4 py-3 text-gray-90">46, 28, 28</td>
                <td className="px-4 py-3 font-mono text-gray-90">#2E1C1C</td>
                <td className="px-4 py-3 text-gray-90">0, 39, 39, 82</td>
              </tr>
              <tr className="border-b border-gray-30">
                <td className="px-4 py-3 text-gray-90">Parchment</td>
                <td className="px-4 py-3 text-gray-90">13-0607 TCX</td>
                <td className="px-4 py-3 text-gray-90">7527 U</td>
                <td className="px-4 py-3 text-gray-90">7527 C</td>
                <td className="px-4 py-3 text-gray-90">220, 214, 190</td>
                <td className="px-4 py-3 font-mono text-gray-90">#DCD6BE</td>
                <td className="px-4 py-3 text-gray-90">0, 3, 14, 14</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-10">
                <td className="px-4 py-3 text-gray-90">Cream</td>
                <td className="px-4 py-3 text-gray-90">11-0105 TCX</td>
                <td className="px-4 py-3 text-gray-90">7499 U</td>
                <td className="px-4 py-3 text-gray-90">7499 C</td>
                <td className="px-4 py-3 text-gray-90">232, 224, 201</td>
                <td className="px-4 py-3 font-mono text-gray py-3 font-mono text-gray-90">#E8E0C9</td>
                <td className="px-4 py-3 text-gray-90">0, 3, 13, 9</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <h3 className="mb-4 font-tektur text-xl text-primary">Color Assets Download</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Adobe Swatch (.ase)
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-md bg-gray-30 px-4 py-2 text-sm font-medium text-white hover:bg-gray-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PDF Color Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
