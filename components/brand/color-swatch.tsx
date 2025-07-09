interface ColorSwatchProps {
  color: string
  name: string
  hex: string
  pantone: string
  pantone_tcx?: string
  cmyk?: string
  notes?: string
}

export function ColorSwatch({ color, name, hex, pantone, pantone_tcx, cmyk, notes }: ColorSwatchProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#242423] bg-[#0A0A0A] transition-all duration-200 hover:border-[#CFB023] cursor-default">
      <div className="h-24" style={{ backgroundColor: hex }}></div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-white">{name}</h3>
        <div className="mt-1 space-y-0.5 text-xs text-gray-90">
          <p>
            <span className="font-semibold">HEX:</span> {hex}
          </p>
          {cmyk && (
            <p>
              <span className="font-semibold">CMYK:</span> {cmyk}
            </p>
          )}
          <p>
            <span className="font-semibold">Pantone:</span> {pantone}
          </p>
          {pantone_tcx && <p>{pantone_tcx}</p>}
          {notes && <p className="mt-1 text-[10px] italic">{notes}</p>}
        </div>
      </div>
    </div>
  )
}
