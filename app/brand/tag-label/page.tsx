export default function TagLabelPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl text-gray-200">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="flex-1">
          <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Tag & Label System</h1>
          <p className="text-xl mb-6 leading-relaxed">
            Consistent tag and label application ensures brand recognition and communicates product information
            effectively across all Forest Outfitters brands.
          </p>
        </div>
      </div>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 leading-relaxed text-gray-300">
              Tags and labels are critical touchpoints for our brand. They not only provide essential product
              information but also reinforce brand identity and quality perception. Each Forest Outfitters sub-brand has
              its own distinct tag and label system while maintaining cohesive elements that tie back to the parent
              brand.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              This section provides comprehensive guidelines for the application of hang tags, inner labels, care
              instructions, and other product identification elements across all product categories.
            </p>
          </div>
          <div>
            <img
              src="/images/forest-tag-hero.png"
              alt="Forest Outfitters premium hang tag with mountain design"
              className="w-full h-64 object-cover rounded-lg shadow-lg border border-gray-800"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">
          Core Tag Types (All Brands)
        </h2>
        <p className="mb-6 text-gray-300">
          Each brand should have pre-designed, editable templates for the following tag types:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="bg-black">
                <th className="border border-[#252523] px-4 py-3 text-left text-white">Tag Type</th>
                <th className="border border-[#252523] px-4 py-3 text-left text-white">Purpose</th>
                <th className="border border-[#252523] px-4 py-3 text-left text-white">Recommended Size</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Hang Tag</td>
                <td className="border border-[#252523] px-4 py-3">External tag for retail/display</td>
                <td className="border border-[#252523] px-4 py-3">2.5" x 4" or 2.75" x 5" vertical</td>
              </tr>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Inner Woven Label</td>
                <td className="border border-[#252523] px-4 py-3">Main brand ID label inside garment</td>
                <td className="border border-[#252523] px-4 py-3">2" x 1" or 2" x 0.75"</td>
              </tr>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Size Tag</td>
                <td className="border border-[#252523] px-4 py-3">Numeric/S/M/L attached to main or separate</td>
                <td className="border border-[#252523] px-4 py-3">1" x 0.5"</td>
              </tr>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Care Label</td>
                <td className="border border-[#252523] px-4 py-3">Wash and material info</td>
                <td className="border border-[#252523] px-4 py-3">2" x 2.5" foldable or 3-panel</td>
              </tr>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Tech ID Tag</td>
                <td className="border border-[#252523] px-4 py-3">Optional tag for gear/innovation info</td>
                <td className="border border-[#252523] px-4 py-3">2" x 2" or badge shape</td>
              </tr>
              <tr className="bg-black">
                <td className="border border-[#252523] px-4 py-3">Field/Batch Tag</td>
                <td className="border border-[#252523] px-4 py-3">Optional for tactical/skus/patents/logos</td>
                <td className="border border-[#252523] px-4 py-3">2.25" x 1.5"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">
          Downloadable Assets
        </h2>
        <p className="mb-6 text-gray-300">
          All brand woven labels and printed tags are available for download in editable formats. These files should be
          used without modification to ensure brand consistency.
        </p>

        <div className="w-full mb-8">
          <div className="bg-black border border-[#252523] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-normal mb-3 text-white">ADOBE ILLUSTRATOR FILES (.AI)</h3>
            <p className="mb-4 text-gray-300">Editable files for design professionals.</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-[#B99C20] hover:text-[#ECD055] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Forest Outfitters Tags & Labels (.ai)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[#B99C20] hover:text-[#ECD055] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Tribe Equipment Tags & Labels (.ai)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[#B99C20] hover:text-[#ECD055] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  HYDE™ Tags & Labels (.ai)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[#B99C20] hover:text-[#ECD055] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  RBF Tags & Labels (.ai)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-black border-l-4 border-[#B99C20] border-r border-t border-b border-r-[#252523] border-t-[#252523] border-b-[#252523] p-4 mb-8">
          <p className="text-sm text-gray-300">
            <strong className="text-white">Note:</strong> All tag and label files must be used according to the
            guidelines provided in this section. For custom applications or special requirements, please contact the
            brand team.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">
          Brand-Specific Tag Systems
        </h2>

        {/* Forest Outfitters */}
        <div className="mb-12 bg-black rounded-lg p-6 border border-[#252523]">
          <div className="flex items-center mb-4">
            <span className="text-[#B99C20] text-2xl mr-2">🌲</span>
            <h3 className="text-2xl font-normal text-white">Forest Outfitters – Tag System</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-white font-semibold">Style:</span> Rugged, topographic, nature-inspired
                </li>
                <li>
                  <span className="text-white font-semibold">Primary Tag:</span> Hang tag with Forest Gold logo, topo
                  map background
                </li>
                <li>
                  <span className="text-white font-semibold">Material:</span> Recycled kraft board, debossed or matte
                  finish
                </li>
                <li>
                  <span className="text-white font-semibold">Attachment:</span> Braided natural fiber or paracord
                </li>
              </ul>

              <h4 className="text-xl font-normal mt-6 mb-3 text-white">Suggested Tags:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Hang Tag – Topographic pattern overlay, gear name, icons, QR to gear guide</li>
                <li>Inner Woven Label – Black woven label with gold or white text</li>
                <li>Size Tag – Minimal, Archivo font</li>
                <li>Care Label – Forest Gold print on recycled white foldout tag</li>
              </ol>

              <div className="mt-6 bg-black p-4 rounded-lg border border-[#252523]">
                <h4 className="text-lg font-normal mb-2 text-white">Design Detail:</h4>
                <p className="text-gray-300">
                  Back of hang tag includes brand philosophy and 3-icon feature list (durability, stealth,
                  breathability)
                </p>
              </div>
            </div>
            <div>
              <img
                src="/forest-hang-tag.png"
                alt="Forest Outfitters hang tag"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-3"
              />
            </div>
          </div>
        </div>

        {/* Tribe Equipment */}
        <div className="mb-12 bg-black rounded-lg p-6 border border-[#252523]">
          <div className="flex items-center mb-4">
            <span className="text-[#B99C20] text-2xl mr-2">🛡</span>
            <h3 className="text-2xl font-normal text-white">Tribe Equipment – Tag System</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-white font-semibold">Style:</span> Tactical, grid-based, modular
                </li>
                <li>
                  <span className="text-white font-semibold">Primary Tag:</span> Waterproof matte tech card with loadout
                  diagram
                </li>
                <li>
                  <span className="text-white font-semibold">Material:</span> Laminated polyboard or waterproof kraft
                </li>
                <li>
                  <span className="text-white font-semibold">Attachment:</span> Hook tab, Velcro loop, or welded seam
                </li>
              </ul>

              <h4 className="text-xl font-normal mt-6 mb-3 text-white">Suggested Tags:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Hang Tag – Schematic graphic, unit data, product tier, QR to field doc</li>
                <li>Tech/Batch Tag – UID, mission symbol, color-coded badge or patch shape</li>
                <li>Inner Tag – Low-profile bonded or laser-cut synthetic patch</li>
                <li>Size Label – Vertical mono font, heat-pressed or inner seam</li>
              </ol>

              <div className="mt-6 bg-black p-4 rounded-lg border border-[#252523]">
                <h4 className="text-lg font-normal mb-2 text-white">Design Detail:</h4>
                <p className="text-gray-300">
                  QR code leads to digital operator's manual with field conditions, storage specs, and durability
                  metrics
                </p>
              </div>
            </div>
            <div>
              <img
                src="/tribe-technical-tag.png"
                alt="Tribe Equipment technical tag"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-3"
              />
            </div>
          </div>
        </div>

        {/* HYDE */}
        <div className="mb-12 bg-black rounded-lg p-6 border border-[#252523]">
          <div className="flex items-center mb-4">
            <span className="text-[#B99C20] text-2xl mr-2">🦌</span>
            <h3 className="text-2xl font-normal text-white">HYDE™ – Tag System</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-white font-semibold">Style:</span> Scientific, modern, pattern-focused
                </li>
                <li>
                  <span className="text-white font-semibold">Primary Tag:</span> Transparent or translucent card with
                  Burnt Orange data overlays
                </li>
                <li>
                  <span className="text-white font-semibold">Material:</span> Semi-rigid tech plastic, eco film, or
                  recycled acetate
                </li>
                <li>
                  <span className="text-white font-semibold">Attachment:</span> Stitched seam or integrated edge tag
                </li>
              </ul>

              <h4 className="text-xl font-normal mt-6 mb-3 text-white">Suggested Tags:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Hang Tag – Pattern ID, camo score chart, QR to terrain sim</li>
                <li>Tech Tag – GAN code, terrain type, temperature range</li>
                <li>Inner Tag – Flush-mount printed or bonded textile strip with barcode and pattern number</li>
                <li>Certification Card – Optional embedded NFC for registration/scanning</li>
              </ol>

              <div className="mt-6 bg-black p-4 rounded-lg border border-[#252523]">
                <h4 className="text-lg font-normal mb-2 text-white">Design Detail:</h4>
                <p className="text-gray-300">
                  Emphasize visibility scoring (1%-10%) and terrain match icons for instant reference
                </p>
              </div>
            </div>
            <div>
              <img
                src="/hyde-translucent-tag.png"
                alt="HYDE translucent tag"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-3"
              />
            </div>
          </div>
        </div>

        {/* RBF */}
        <div className="mb-12 bg-black rounded-lg p-6 border border-[#252523]">
          <div className="flex items-center mb-4">
            <span className="text-[#B99C20] text-2xl mr-2">🪵</span>
            <h3 className="text-2xl font-normal text-white">RBF (Real Big Foot) – Tag System</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <span className="text-white font-semibold">Style:</span> Minimalist, natural, fashion-forward
                </li>
                <li>
                  <span className="text-white font-semibold">Primary Tag:</span> Earth-tone card or soft-touch leather
                  patch with embossed wordmark
                </li>
                <li>
                  <span className="text-white font-semibold">Material:</span> Textured cardstock, recycled leather,
                  stitched cotton
                </li>
                <li>
                  <span className="text-white font-semibold">Attachment:</span> Waxed cotton string or metal rivet
                </li>
              </ul>

              <h4 className="text-xl font-normal mt-6 mb-3 text-white">Suggested Tags:</h4>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Hang Tag – Quote, logo, fabric story, lookbook card insert</li>
                <li>Inner Woven Label – Cream or sand-colored label with soft stitched border</li>
                <li>Size Tag – Serif type in small white-on-dark label</li>
                <li>Care Label – Sustainable message + wash info foldout with matte finish</li>
              </ol>

              <div className="mt-6 bg-black p-4 rounded-lg border border-[#252523]">
                <h4 className="text-lg font-normal mb-2 text-white">Design Detail:</h4>
                <p className="text-gray-300">
                  Lifestyle quote or trail reference on back of hang tag; callout to seasonal capsule collection if
                  applicable
                </p>
              </div>
            </div>
            <div>
              <img
                src="/rbf-textured-tag.png"
                alt="RBF textured tag"
                className="w-full h-auto object-cover rounded-lg shadow-md mb-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">Hang Tags</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <img
              src="/forest-hang-tag.png"
              alt="Forest Outfitters hang tag"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-xl font-normal mb-3 text-white">Forest Outfitters</h3>
            <p className="text-sm">Premium paper with embossed logo and natural fiber string attachment</p>
          </div>
          <div>
            <img
              src="/tribe-technical-tag.png"
              alt="Tribe Equipment technical tag"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-xl font-normal mb-3 text-white">Tribe Equipment</h3>
            <p className="text-sm">Waterproof synthetic material with technical specifications and QR code</p>
          </div>
          <div>
            <img
              src="/hyde-translucent-tag.png"
              alt="HYDE translucent tag"
              className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
            />
            <h3 className="text-xl font-normal mb-3 text-white">HYDE™</h3>
            <p className="text-sm">Translucent polymer with black print and metal grommet attachment</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-normal mb-3 text-white">REQUIRED ELEMENTS</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Brand logo (appropriate version for the sub-brand)</li>
              <li>Product name and category</li>
              <li>Key features (limited to 3-5 points)</li>
              <li>Materials composition</li>
              <li>Country of origin</li>
              <li>Barcode and SKU information</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-normal mb-3 text-white">ATTACHMENT METHODS</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Forest Outfitters Core: Natural jute string with wooden toggle</li>
              <li>Tribe Equipment: Reinforced synthetic cord with metal clasp</li>
              <li>HYDE™: Black coated wire with metal grommet</li>
              <li>RBF: Recycled cotton string with branded paper toggle</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">Inner Labels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 leading-relaxed">
              Inner labels provide essential information and reinforce brand identity throughout the product lifecycle.
              All Forest Outfitters products must include the appropriate inner labels as specified in this guide.
            </p>
            <h3 className="text-xl font-normal mb-3 text-white">LABEL TYPES</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>
                <strong>Main Brand Label:</strong> Features the appropriate logo and is placed at the center back neck
                or equivalent position
              </li>
              <li>
                <strong>Size Label:</strong> Clear size information following regional standards
              </li>
              <li>
                <strong>Care Instructions:</strong> Washing and maintenance information following international care
                symbols
              </li>
              <li>
                <strong>Materials Label:</strong> Detailed composition information
              </li>
              <li>
                <strong>Country of Origin:</strong> Manufacturing location information
              </li>
            </ul>
          </div>
          <div>
            <img
              src="/woven-label-closeup.png"
              alt="Closeup of woven label"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/rbf-woven-label.png"
                alt="RBF woven label"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img
                src="/tag-materials-swatches.png"
                alt="Tag material swatches"
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">
          Best Practices Across All Tags
        </h2>
        <div className="bg-black rounded-lg p-6 border border-[#252523]">
          <div className="flex items-center mb-4">
            <span className="text-[#B99C20] text-2xl mr-2">📐</span>
            <h3 className="text-2xl font-normal text-white">Guidelines for Consistency</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="text-white font-semibold block mb-1">Language:</span>
                  Use brand tone (e.g., confident for Forest, tactical for Tribe, scientific for HYDE™, refined for RBF)
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Typography:</span>
                  Use approved brand typefaces—Archivo, TT Octosquares, Libertad Mono, etc.
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Iconography:</span>
                  Include brand-specific icons (durability, tech, materials)
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Functionality:</span>
                  Tags should not impede comfort or performance
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-gray-300">
                <li>
                  <span className="text-white font-semibold block mb-1">Digital Integration:</span>
                  QR codes or NFC chips link to care guides, field use cases, registration, etc.
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Sustainability:</span>
                  Minimize waste, use recyclable materials wherever possible
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Placement:</span>
                  Consistent positioning across product categories for brand recognition
                </li>
                <li>
                  <span className="text-white font-semibold block mb-1">Quality Control:</span>
                  All tags must pass durability testing appropriate to the product use case
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-tektur font-normal text-3xl uppercase tracking-wider text-white mb-6">
          Quality Control & Compliance
        </h2>
        <div className="bg-black border-l-4 border-[#B99C20] border-r border-t border-b border-r-[#252523] border-t-[#252523] border-b-[#252523] p-6 rounded-r-lg mb-8">
          <p className="text-gray-300 mb-4">
            All tags and labels must comply with regional regulations for textile labeling. This includes proper
            disclosure of:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-4">
            <li>Fiber content percentages</li>
            <li>Country of origin</li>
            <li>Care instructions in appropriate formats</li>
            <li>Company identification</li>
            <li>RN or WPL numbers where required</li>
          </ul>
          <p className="text-gray-300">
            The brand team must approve all tag and label applications before production. Contact{" "}
            <span className="text-[#B99C20]">brand@forestoutfitters.com</span> for approval.
          </p>
        </div>
      </section>
    </div>
  )
}
