interface ComparisonFeature {
  feature: string
  hyde: number | string
  competitor1: number | string
  competitor2: number | string
}

interface CamoComparisonChartProps {
  features: ComparisonFeature[]
  competitors: string[]
}

export function CamoComparisonChart({ features, competitors }: CamoComparisonChartProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#242423] bg-gray-30">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full table-auto">
          <thead>
            <tr className="border-b border-[#242423] bg-gray-20">
              <th className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-white">Feature</th>
              <th className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-[#B6531C]">HYDE™</th>
              {competitors.map((competitor, index) => (
                <th key={index} className="p-4 text-left font-tektur text-sm uppercase tracking-wider text-white">
                  {competitor}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((row, index) => (
              <tr key={index} className="border-b border-[#242423]">
                <td className="p-4 text-sm text-white">{row.feature}</td>
                <td className="p-4 text-sm text-[#B6531C]">{row.hyde}</td>
                <td className="p-4 text-sm text-gray-80">{row.competitor1}</td>
                <td className="p-4 text-sm text-gray-80">{row.competitor2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
