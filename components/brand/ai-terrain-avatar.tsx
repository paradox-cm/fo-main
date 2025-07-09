import Image from "next/image"

interface AITerrainAvatarProps {
  imageSrc: string
  terrainType: string
  invisibilityScore: number
  patternName: string
}

export function AITerrainAvatar({ imageSrc, terrainType, invisibilityScore, patternName }: AITerrainAvatarProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#242423] bg-gray-30 transition-all hover:border-[#B6531C]">
      <div className="relative h-64">
        <Image src={imageSrc || "/placeholder.svg"} alt={`HYDE camo in ${terrainType}`} fill className="object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex items-center justify-between">
            <p className="font-tektur text-sm uppercase text-white">{terrainType}</p>
            <div className="rounded bg-[#B6531C] px-2 py-1">
              <p className="text-xs text-white">{invisibilityScore}% Invisible</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="font-tektur text-sm uppercase text-white">{patternName}</p>
        <p className="mt-2 text-xs text-gray-80">AI-optimized for maximum concealment</p>
      </div>
    </div>
  )
}
