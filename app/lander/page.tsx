import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { NewsletterForm } from "@/components/newsletter-form";

export default function LanderPage() {
  const [typedText, setTypedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Text to be typed
  const fullText =
    "Performance gear built for the elements. Engineered for those who move through the wild with purpose."

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Word-by-word typing effect
  useEffect(() => {
    const words = fullText.split(" ")
    let currentWordIndex = 0
    let currentText = ""

    const typingInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        currentText += (currentWordIndex > 0 ? " " : "") + words[currentWordIndex]
        setTypedText(currentText)
        currentWordIndex++
      } else {
        setIsTypingComplete(true)
        clearInterval(typingInterval)
      }
    }, 150)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <Image
            src="/welcome/images/misty-mountains-hero.png"
            alt="Misty mountains landscape"
            fill
            priority
            className="object-cover object-center"
            quality={100}
          />
        </div>

        <div className="container mx-auto px-4 z-10 text-center flex-grow flex flex-col justify-center py-16 md:py-0">
          <div className="flex justify-center mb-6 md:mb-8">
            <Image
              src="/welcome/images/FOREST-Logo.White.svg"
              alt="Forest Outfitters"
              width={200}
              height={45}
              className="w-[200px] h-auto md:w-[400px]"
              priority
            />
          </div>

          <h1 className="font-tektur text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide mb-4 md:mb-6 text-white">
            Disappear Into the Wild.
          </h1>

          <p className="font-mono text-base md:text-xl uppercase tracking-wider text-[#B99C20] max-w-2xl mx-auto">
            {typedText}
            {!isTypingComplete && showCursor && <span className="animate-pulse">|</span>}
          </p>
        </div>

        <div className="z-10 pb-6 md:pb-10 w-full flex justify-center">
          <button
            className="cursor-pointer"
            onClick={() => scrollToSection("intro-section")}
            aria-label="Scroll to intro section"
          >
            <div className="animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="#B99C20"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro-section" className="py-20 bg-[#0F0F10]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              {/* Using direct SVG instead of Image component for better compatibility */}
              <div className="w-[110px] h-auto">
                <svg
                  viewBox="0 0 409 409"
                  xmlns="http://www.w3.org/2000/svg"
                  width="110"
                  height="110"
                  aria-label="Forest Badge"
                >
                  <path d="M0,0v408.4h351.5l56.6-56.7V0H0Z" fill="#b99c20" fillRule="evenodd" />
                  <g>
                    <g>
                      <path
                        d="M204.1,220.3l-127.5,31.9c-1,.2-1.5,1.4-.9,2.3l18.3,30c.3.5.8.7,1.3.7h218.4c.5,0,1-.3,1.3-.7l18.3-30c.5-.9,0-2-.9-2.3l-127.5-31.9h-.8Z"
                        fill="black"
                      />
                      <path
                        d="M277.6,125.6l-72.2-51c-.5-.4-1.2-.4-1.8,0l-72.3,51c-.7.5-.9,1.5-.3,2.2l4,5.3c.3.4.7.6,1.2.6h136.5c.5,0,.9-.2,1.2-.6l4-5.3c.5-.7.4-1.7-.3-2.2Z"
                        fill="black"
                      />
                      <path
                        d="M204.3,142.5l-109.2,51.2c-.8.4-1.1,1.4-.6,2.2l9.4,14.8c.3.4.8.7,1.3.7h198.6c.5,0,1-.3,1.3-.7l9.4-14.9c.5-.8.2-1.8-.6-2.2l-108.3-51.3c-.4-.2-.9-.2-1.3,0h-.1v.2Z"
                        fill="black"
                      />
                    </g>
                    <path
                      d="M267.7,332.4l8.4-13.1c.7-1,.7-2.4,0-3.4l-8.4-13.1c-.6-.9-1.6-1.4-2.6-1.4h-121c-1.1,0-2,.5-2.6,1.4l-8.4,13.1c-.7,1-.7,2.4,0,3.4l8.4,13.1c.6.9,1.6,1.4,2.6,1.4h121c1.1,0,2-.5,2.6-1.4h0Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>
            </div>

            <p className="text-xl md:text-2xl mb-8 text-center font-medium">
              Forest is more than a brand—it's a calling.
            </p>

            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Inspired by the unpredictable beauty of nature and the primal instinct to survive, we design outdoor gear
              that blends innovation with invisibility. Our patented HYDE™ camouflage—shaped by AI, tested against
              machine vision, and born from the texture of mule deer hide—is built to outsmart everything you face in
              the field.
            </p>

            <div className="text-xl font-tektur uppercase tracking-wide text-center text-[#B99C20]">
              A new standard for concealment, durability, and outdoor performance.
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#151515] p-8 rounded-sm border border-[#242423] hover:border-[#B99C20] transition-colors duration-300 cursor-default">
              <h3 className="font-tektur text-xl uppercase mb-4 text-[#B99C20]">Revere Nature</h3>
              <p className="text-gray-300">Everything we create starts with a respect for the wild.</p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#151515] p-8 rounded-sm border border-[#242423] hover:border-[#B99C20] transition-colors duration-300 cursor-default">
              <h3 className="font-tektur text-xl uppercase mb-4 text-[#B99C20]">Live the Warrior Spirit</h3>
              <p className="text-gray-300">Built for those who thrive in challenge, not comfort.</p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#151515] p-8 rounded-sm border border-[#242423] hover:border-[#B99C20] transition-colors duration-300 cursor-default">
              <h3 className="font-tektur text-xl uppercase mb-4 text-[#B99C20]">Demand Precision</h3>
              <p className="text-gray-300">Every stitch, every pattern, engineered for absolute purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F0F10]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-tektur text-3xl md:text-4xl uppercase mb-4">The Forest is calling.</h2>
            <p className="text-xl mb-8">Be the first to know when we launch.</p>

            <div className="mb-4">
              <NewsletterForm />
            </div>

            <p className="text-sm text-gray-500">No spam. Just gear worthy of your next pursuit.</p>
          </div>
        </div>
      </section>
    </main>
  )
} 