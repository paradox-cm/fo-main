interface TypographySampleProps {
  fontFamily: string
  fontWeight: string
  fontSize: string
  lineHeight: string
  sampleText: string
  description: string
  className?: string
}

export function TypographySample({
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  sampleText,
  description,
  className,
}: TypographySampleProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#242423] bg-gray-30 p-6">
      <p
        className={className}
        style={{
          fontFamily,
          fontWeight,
          fontSize,
          lineHeight,
        }}
      >
        {sampleText}
      </p>
      <div className="mt-4 border-t border-[#242423] pt-4">
        <h4 className="font-tektur text-sm uppercase tracking-wider text-white">{description}</h4>
        <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-80">
          <p>Font: {fontFamily}</p>
          <p>Weight: {fontWeight}</p>
          <p>Size: {fontSize}</p>
          <p>Line Height: {lineHeight}</p>
        </div>
      </div>
    </div>
  )
}
