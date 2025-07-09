"use client"

import { useEffect, useState } from "react"

interface TypingAnimationProps {
  text: string
  className?: string
  typingSpeed?: number
}

export function TypingAnimation({ text, className = "", typingSpeed = 150 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const words = text.split(" ")
    let currentWordIndex = 0
    const totalWords = words.length

    const typingInterval = setInterval(() => {
      if (currentWordIndex < totalWords) {
        setDisplayedText(words.slice(0, currentWordIndex + 1).join(" "))
        currentWordIndex++
      } else {
        clearInterval(typingInterval)
        setIsComplete(true)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [text, typingSpeed])

  return (
    <p className={`${className} ${!isComplete ? "after:content-['|'] after:animate-pulse after:ml-0.5" : ""}`}>
      {displayedText}
    </p>
  )
}
