import { SectionHeading } from "@/components/brand/section-heading"

export default function VersionControlPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Version Control</h1>

      <section className="mb-16">
        <SectionHeading title="Version History" subtitle="Record of brand guidelines updates and changes" />
        <div className="overflow-hidden rounded-lg border border-[#242423]">
          <table className="w-full border-collapse">
            <thead className="bg-gray-40 text-left">
              <tr>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Version</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Date</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Changes</th>
                <th className="p-4 font-tektur text-sm uppercase tracking-wider text-white">Author</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#242423]">
              <tr className="bg-gray-30">
                <td className="p-4 font-mono text-sm text-gray-90">1.0.0</td>
                <td className="p-4 text-sm text-gray-90">April 10, 2023</td>
                <td className="p-4 text-sm text-gray-90">Initial release of brand guidelines</td>
                <td className="p-4 text-sm text-gray-90">Brand Team</td>
              </tr>
              <tr className="bg-gray-30">
                <td className="p-4 font-mono text-sm text-gray-90">1.1.0</td>
                <td className="p-4 text-sm text-gray-90">June 15, 2023</td>
                <td className="p-4 text-sm text-gray-90">Updated color palette for HYDE™</td>
                <td className="p-4 text-sm text-gray-90">Creative Director</td>
              </tr>
              <tr className="bg-gray-30">
                <td className="p-4 font-mono text-sm text-gray-90">1.2.0</td>
                <td className="p-4 text-sm text-gray-90">September 5, 2023</td>
                <td className="p-4 text-sm text-gray-90">Added RBF brand guidelines</td>
                <td className="p-4 text-sm text-gray-90">Brand Manager</td>
              </tr>
              <tr className="bg-gray-30">
                <td className="p-4 font-mono text-sm text-gray-90">2.0.0</td>
                <td className="p-4 text-sm text-gray-90">January 20, 2024</td>
                <td className="p-4 text-sm text-gray-90">Major revision of all brand guidelines</td>
                <td className="p-4 text-sm text-gray-90">Brand Team</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
