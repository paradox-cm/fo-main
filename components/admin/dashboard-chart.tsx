"use client"

import { useEffect, useRef } from "react"

// Mock data for the chart
const mockData = {
  labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
  datasets: [
    {
      label: "Visitors",
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500),
      borderColor: "#B99C20",
      backgroundColor: "rgba(185, 156, 32, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
}

export function DashboardChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartInstanceRef = useRef<any>(null)

  useEffect(() => {
    // This would normally use a chart library like Chart.js
    // For this example, we'll just render a placeholder
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Draw placeholder chart
    const { datasets, labels } = mockData
    const data = datasets[0].data
    const maxValue = Math.max(...data)
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const availableWidth = width - padding * 2
    const availableHeight = height - padding * 2

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#242423"
    ctx.lineWidth = 1
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw data points
    const pointWidth = availableWidth / (data.length - 1)

    // Draw area
    ctx.beginPath()
    ctx.fillStyle = "rgba(185, 156, 32, 0.1)"
    ctx.moveTo(padding, height - padding)

    data.forEach((value, index) => {
      const x = padding + index * pointWidth
      const y = height - padding - (value / maxValue) * availableHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.lineTo(width - padding, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.fill()

    // Draw line
    ctx.beginPath()
    ctx.strokeStyle = "#B99C20"
    ctx.lineWidth = 2

    data.forEach((value, index) => {
      const x = padding + index * pointWidth
      const y = height - padding - (value / maxValue) * availableHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    data.forEach((value, index) => {
      const x = padding + index * pointWidth
      const y = height - padding - (value / maxValue) * availableHeight

      ctx.beginPath()
      ctx.fillStyle = "#B99C20"
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw labels
    ctx.fillStyle = "#6b6b6b"
    ctx.font = "10px Inter"
    ctx.textAlign = "center"

    // Only draw some labels to avoid overcrowding
    const labelStep = Math.ceil(labels.length / 10)

    labels.forEach((label, index) => {
      if (index % labelStep === 0) {
        const x = padding + index * pointWidth
        ctx.fillText(label, x, height - padding + 15)
      }
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    const yLabelStep = maxValue / 5

    for (let i = 0; i <= 5; i++) {
      const value = Math.round(i * yLabelStep)
      const y = height - padding - (value / maxValue) * availableHeight
      ctx.fillText(value.toString(), padding - 10, y + 3)
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full aspect-[16/9]">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
