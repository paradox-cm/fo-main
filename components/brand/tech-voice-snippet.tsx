import { cn } from "@/lib/utils"

interface TechVoiceSnippetProps {
  specs: string[]
  className?: string
  titleClassName?: string
}

export function TechVoiceSnippet({ specs, className, titleClassName }: TechVoiceSnippetProps) {
  return (
    <div className={cn("rounded-lg border border-gray-800 bg-gray-900 p-6", className)}>
      <h3 className={cn("mb-4 font-tektur text-xl uppercase tracking-wider text-white", titleClassName)}>
        Technical Specifications
      </h3>
      <ul className="list-none pl-0">
        {specs.map((spec, index) => (
          <li key={index} className="mb-2 text-sm text-gray-300">
            {spec}
          </li>
        ))}
      </ul>
    </div>
  )
}
