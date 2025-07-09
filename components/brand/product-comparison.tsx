import { cn } from "@/lib/utils"

interface ComparisonFeature {
  feature: string
  forest: string | boolean
  competitor1: string | boolean
  competitor2: string | boolean
  competitor3?: string | boolean
}

interface Product {
  name: string
  description: string
  imageSrc: string
}

interface ProductComparisonProps {
  features?: ComparisonFeature[]
  competitors?: string[]
  products?: Product[]
  className?: string
  titleClassName?: string
}

export function ProductComparison({
  features,
  competitors,
  products,
  className,
  titleClassName,
}: ProductComparisonProps) {
  // If products are provided, render product cards
  if (products && products.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3">{product.name}</h3>
            <p className="mb-4">{product.description}</p>
            {product.imageSrc && (
              <img
                src={product.imageSrc || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mt-4"
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  // Otherwise render the comparison table
  if (features && competitors) {
    return (
      <div className={cn("overflow-hidden rounded-lg border border-gray-800 bg-gray-900", className)}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full table-auto">
            <thead>
              <tr className="border-b border-gray-800">
                <th
                  className={cn(
                    "p-4 text-left font-tektur text-sm uppercase tracking-wider text-white",
                    titleClassName,
                  )}
                >
                  Feature
                </th>
                <th
                  className={cn(
                    "p-4 text-left font-tektur text-sm uppercase tracking-wider text-amber-500",
                    titleClassName,
                  )}
                >
                  Forest
                </th>
                {competitors.map((competitor, index) => (
                  <th
                    key={index}
                    className={cn(
                      "p-4 text-left font-tektur text-sm uppercase tracking-wider text-white",
                      titleClassName,
                    )}
                  >
                    {competitor}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className={cn("p-4 text-sm text-white", className)}>{row.feature}</td>
                  <td className={cn("p-4 text-sm text-amber-500", className)}>
                    {typeof row.forest === "boolean" ? (row.forest ? "✓" : "✗") : row.forest}
                  </td>
                  <td className={cn("p-4 text-sm text-gray-300", className)}>
                    {typeof row.competitor1 === "boolean" ? (row.competitor1 ? "✓" : "✗") : row.competitor1}
                  </td>
                  <td className={cn("p-4 text-sm text-gray-300", className)}>
                    {typeof row.competitor2 === "boolean" ? (row.competitor2 ? "✓" : "✗") : row.competitor2}
                  </td>
                  {row.competitor3 !== undefined && (
                    <td className={cn("p-4 text-sm text-gray-300", className)}>
                      {typeof row.competitor3 === "boolean" ? (row.competitor3 ? "✓" : "✗") : row.competitor3}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  // Fallback if neither products nor features+competitors are provided
  return <div>Please provide either products or features and competitors data.</div>
}
