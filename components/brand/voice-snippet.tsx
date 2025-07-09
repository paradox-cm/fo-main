import { cn } from "@/lib/utils"

interface VoiceSnippetProps {
  example: string
  className?: string
  titleClassName?: string
}

export function VoiceSnippet({ example, className, titleClassName }: VoiceSnippetProps) {
  return (
    <div className={cn("rounded-lg border border-gray-800 bg-gray-900 p-6", className)}>
      <h3 className={cn("mb-4 font-tektur text-xl uppercase tracking-wider text-white", titleClassName)}>
        Voice Example
      </h3>
      <blockquote className={cn("border-l-4 border-gray-700 pl-4 text-gray-300", className)}>
        <p className="italic">
          Built to move silent and stay sharp. The Blackout Softshell is windproof, water-resistant, and dead quiet.
          Reinforced at stress points, vented where it counts, and cut for clean draw and full range. No shine. No drag.
          No excuses. This is your outer shell when failure isn't an option.
        </p>
      </blockquote>
    </div>
  )
}
