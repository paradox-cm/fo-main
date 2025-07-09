import React from "react"
import { cn } from "@/lib/utils"

interface AnimatedHeadlineProps {
  text: string
  className?: string
}

export function AnimatedHeadline({ text, className }: AnimatedHeadlineProps) {
  // Split the text into words and handle punctuation
  const words = text.split(/\s+/)

  // Check if the last word contains punctuation
  const lastWord = words[words.length - 1]
  const hasPunctuation = /[.,!?;:]$/.test(lastWord)

  return (
    <h1 className={cn("animated-headline", className)}>
      {words.map((word, index) => {
        // For words with punctuation, we need to preserve the punctuation but animate the word
        const wordContent = word

        return (
          <React.Fragment key={index}>
            <span
              className="word"
              style={{
                animationDelay: `${0.1 + index * 0.2}s`,
                display: "inline-block",
              }}
            >
              {wordContent}
            </span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        )
      })}
    </h1>
  )
}
