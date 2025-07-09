import Image from "next/image"

interface MoodBoardProps {
  images: {
    src: string
    alt: string
  }[]
}

export function MoodBoard({ images }: MoodBoardProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-md border border-[#242423]">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-all hover:scale-105"
          />
        </div>
      ))}
    </div>
  )
}
