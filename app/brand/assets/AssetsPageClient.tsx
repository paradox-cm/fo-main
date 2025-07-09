"use client"

export default function AssetsPageClient() {
  return (
    <div className="container mx-auto max-w-5xl py-12">
      <h1 className="mb-8 font-tektur text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
        Asset Access & File Formats
      </h1>

      <section className="mb-12">
        <h2 className="mb-6 font-tektur text-xl font-semibold uppercase tracking-wider text-primary">
          Brand Assets Portal
        </h2>
        <p className="mb-6 text-gray-90">
          All official logos, fonts, color libraries, camo patterns, icon sets, and documentation can be accessed at:
        </p>
        <div className="mb-8 rounded-lg bg-gray-30 p-6">
          <a
            href="#"
            className="inline-flex items-center text-lg font-medium text-primary hover:underline"
            onClick={(e) => e.preventDefault()}
          >
            <span className="mr-2">🔗</span>
            forestoutfitters.com/brand/assets
            <span className="ml-3 rounded-md bg-gray-40 px-2 py-1 text-xs text-gray-90">(placeholder link)</span>
          </a>
        </div>
      </section>

      <section>
        <h2 className="mb-6 font-tektur text-xl font-semibold uppercase tracking-wider text-primary">
          Standard File Types
        </h2>
        <div className="overflow-hidden rounded-lg border border-gray-30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-30">
                <th className="border-b border-gray-40 p-4 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Asset Type
                </th>
                <th className="border-b border-gray-40 p-4 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Formats
                </th>
                <th className="border-b border-gray-40 p-4 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-30">
                <td className="p-4 font-medium text-white">Forest Logos</td>
                <td className="p-4 text-gray-90">.SVG / .EPS / .PNG</td>
                <td className="p-4 text-gray-90">Vector for print, PNG for web</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-20">
                <td className="p-4 font-medium text-white">Tribe Logos</td>
                <td className="p-4 text-gray-90">.TTF / .OTF</td>
                <td className="p-4 text-gray-90">All licenses included</td>
              </tr>
              <tr className="border-b border-gray-30">
                <td className="p-4 font-medium text-white">HYDE Logos</td>
                <td className="p-4 text-gray-90">.ASE / .JPG</td>
                <td className="p-4 text-gray-90">Digital + print color standards</td>
              </tr>
              <tr className="border-b border-gray-30 bg-gray-20">
                <td className="p-4 font-medium text-white">The Real Bigfoot Logos</td>
                <td className="p-4 text-gray-90">.PNG / .TIFF</td>
                <td className="p-4 text-gray-90">Textile-ready formats</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Docs & Guidelines</td>
                <td className="p-4 text-gray-90">.PDF / .MD / .KEY</td>
                <td className="p-4 text-gray-90">Editable and static</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
