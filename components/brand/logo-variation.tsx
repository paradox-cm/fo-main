import Image from "next/image"

interface LogoVariationProps {
  src: string
  alt: string
  background: string
  description: string
}

export function LogoVariation({ src, alt, background, description }: LogoVariationProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#242423] bg-gray-30 transition-all hover:border-[#B99C20]">
      <div className="flex h-40 items-center justify-center p-6" style={{ backgroundColor: background }}>
        <div className="relative h-full w-full">
          <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-80">{description}</p>
      </div>
    </div>
  )
}
