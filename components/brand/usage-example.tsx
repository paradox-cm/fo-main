import Image from "next/image"
import { CheckCircle, XCircle } from "lucide-react"

interface UsageExampleProps {
  type: "do" | "dont"
  imageSrc: string
  description: string
}

export function UsageExample({ type, imageSrc, description }: UsageExampleProps) {
  return (
    <div className="overflow-hidden rounded-md border border-[#242423] bg-gray-30">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-40">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={type === "do" ? "Correct usage" : "Incorrect usage"}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          {type === "do" ? (
            <>
              <CheckCircle className="h-5 w-5 text-green-500" />
              <h4 className="font-tektur text-sm uppercase tracking-wider text-white">Do</h4>
            </>
          ) : (
            <>
              <XCircle className="h-5 w-5 text-red-500" />
              <h4 className="font-tektur text-sm uppercase tracking-wider text-white">Don't</h4>
            </>
          )}
        </div>
        <p className="text-sm text-gray-80">{description}</p>
      </div>
    </div>
  )
}
