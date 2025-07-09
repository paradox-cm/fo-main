export interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className={`font-tektur text-3xl uppercase tracking-wider ${className || "text-white"}`}>{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-80">{subtitle}</p>}
    </div>
  )
}
