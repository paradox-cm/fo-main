"use client"

import { Progress } from "@/components/ui/progress"
import { formatCurrency } from "@/lib/utils"

// Mock data for top products
const topProducts = [
  {
    id: 1,
    name: "Tactical Backpack",
    sales: 245,
    revenue: 31849.55,
    growth: 12.5,
  },
  {
    id: 2,
    name: "Down Jacket",
    sales: 187,
    revenue: 46748.13,
    growth: 24.3,
  },
  {
    id: 3,
    name: "Performance Polo",
    sales: 164,
    revenue: 13118.36,
    growth: 8.7,
  },
  {
    id: 4,
    name: "Technical Shell",
    sales: 152,
    revenue: 30398.48,
    growth: 16.2,
  },
  {
    id: 5,
    name: "Tactical Polo",
    sales: 138,
    revenue: 12418.62,
    growth: -3.5,
  },
]

export function TopProducts() {
  const maxSales = Math.max(...topProducts.map((product) => product.sales))

  return (
    <div className="space-y-4">
      {topProducts.map((product) => (
        <div key={product.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-mono text-sm">{product.name}</div>
              <div className="text-xs text-muted-foreground font-mono">
                {product.sales} units · {formatCurrency(product.revenue)}
              </div>
            </div>
            <div className={`text-sm font-mono ${product.growth >= 0 ? "text-green-500" : "text-red-500"}`}>
              {product.growth >= 0 ? "+" : "-"}
              {Math.abs(product.growth)}%
            </div>
          </div>
          <Progress value={(product.sales / maxSales) * 100} className="h-2" indicatorClassName="bg-[#B99C20]" />
        </div>
      ))}
    </div>
  )
}
