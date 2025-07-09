import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MonoHeadline } from "@/components/ui/mono-headline"
import { MonoTagline } from "@/components/ui/mono-tagline"
import { MonoChip } from "@/components/ui/mono-chip"
import { TekturHeadline } from "@/components/ui/tektur-headline"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"

export default function TypographyReferencePage() {
  return (
    <>
      <Header />

      <main className="connected-sections">
        <section className="border-b border-[#242423]">
          <div className="bordered-section">
            <div className="container mx-auto px-4 py-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">Typography Reference</h1>
              <p className="text-xl text-white/70 mb-16 max-w-3xl">
                This page showcases all typography styles used throughout the Forest Outfitters website.
              </p>

              {/* Standard Headings */}
              <div className="mb-20">
                <h2 className="text-2xl mb-8 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-primary after:mt-2">
                  Standard Headings
                </h2>

                <div className="space-y-8">
                  <div className="border border-[#242423] p-6 rounded-md">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">Heading 1</h1>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-4xl md:text-5xl lg:text-6xl | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4">Heading 2</h2>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-3xl md:text-4xl lg:text-5xl | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4">Heading 3</h3>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-2xl md:text-3xl lg:text-4xl | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h4 className="text-xl md:text-2xl lg:text-3xl mb-4">Heading 4</h4>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-xl md:text-2xl lg:text-3xl | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h5 className="text-lg md:text-xl lg:text-2xl mb-4">Heading 5</h5>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-lg md:text-xl lg:text-2xl | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h6 className="text-base md:text-lg lg:text-xl mb-4">Heading 6</h6>
                    <p className="text-white/60 font-mono text-sm">
                      font-tektur | text-base md:text-lg lg:text-xl | uppercase
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Typography Components */}
              <div className="mb-20">
                <h2 className="text-2xl mb-8 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-primary after:mt-2">
                  Special Typography Components
                </h2>

                <div className="space-y-8">
                  <div className="border border-[#242423] p-6 rounded-md">
                    <MonoHeadline>Mono Headline Component</MonoHeadline>
                    <p className="text-white/60 font-mono text-sm mt-4">
                      font-mono | font-medium | tracking-tight | text-2xl md:text-3xl lg:text-4xl
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <MonoTagline>Mono Tagline Component</MonoTagline>
                    <p className="text-white/60 font-mono text-sm mt-4">
                      font-mono | font-normal | tracking-wide | text-sm md:text-base | uppercase
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <TekturHeadline>Teko Headline Component</TekturHeadline>
                    <p className="text-white/60 font-mono text-sm mt-4">
                      font-tektur | font-medium | tracking-tight | text-3xl md:text-4xl lg:text-5xl | uppercase |
                      text-primary | scaleX(1.1)
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <SectionHeading
                      title="Section Heading Component"
                      subtitle="This is a subtitle that provides additional context to the main heading. It uses a slightly muted color to create visual hierarchy."
                    />
                    <p className="text-white/60 font-mono text-sm mt-4">
                      Title: text-3xl md:text-4xl | Subtitle: text-white/70 | With decorative line after the title
                    </p>
                  </div>
                </div>
              </div>

              {/* Body Text */}
              <div className="mb-20">
                <h2 className="text-2xl mb-8 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-primary after:mt-2">
                  Body Text
                </h2>

                <div className="space-y-8">
                  <div className="border border-[#242423] p-6 rounded-md">
                    <p className="text-base mb-4">
                      Standard paragraph text uses the Inter font (font-sans). This is the default body text used
                      throughout the site for general content. It has good readability and works well at various sizes.
                    </p>
                    <p className="text-white/60 font-mono text-sm">font-sans (Inter) | text-base | leading-relaxed</p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <p className="text-lg mb-4">
                      Large paragraph text is used for more prominent content sections, introductions, or featured text.
                    </p>
                    <p className="text-white/60 font-mono text-sm">font-sans (Inter) | text-lg | leading-relaxed</p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <p className="text-white/70 mb-4">
                      Muted text is used for secondary information or supporting content. It uses reduced opacity to
                      create visual hierarchy.
                    </p>
                    <p className="text-white/60 font-mono text-sm">font-sans (Inter) | text-white/70</p>
                  </div>
                </div>
              </div>

              {/* UI Elements with Typography */}
              <div className="mb-20">
                <h2 className="text-2xl mb-8 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-primary after:mt-2">
                  UI Elements
                </h2>

                <div className="space-y-8">
                  <div className="border border-[#242423] p-6 rounded-md">
                    <div className="mb-4">
                      <MonoChip>Mono Chip Component</MonoChip>
                    </div>
                    <p className="text-white/60 font-mono text-sm">
                      font-mono | text-xs md:text-sm | uppercase | tracking-wider | bg-[#1A1505] | text-[#B99C20]
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <Button variant="primary">Primary Button</Button>
                      <Button variant="outline">Outline Button</Button>
                      <Button variant="text">Text Button</Button>
                    </div>
                    <p className="text-white/60 font-mono text-sm">
                      font-sans | font-medium | text-sm (default) | Various styles based on variant
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <div className="flex items-center gap-4 mb-4">
                      <a
                        href="#"
                        className="font-mono text-sm uppercase tracking-wide text-white/80 hover:text-primary"
                      >
                        Navigation Link
                      </a>
                      <span className="text-white/40">|</span>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-mono">
                        Footer Link
                      </a>
                    </div>
                    <p className="text-white/60 font-mono text-sm">
                      font-mono | text-sm | uppercase (nav) | Various hover states
                    </p>
                  </div>
                </div>
              </div>

              {/* Font Family Reference */}
              <div>
                <h2 className="text-2xl mb-8 after:content-[''] after:block after:w-16 after:h-0.5 after:bg-primary after:mt-2">
                  Font Family Reference
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border border-[#242423] p-6 rounded-md">
                    <h3 className="text-xl mb-4">Tektur</h3>
                    <p className="font-tektur text-2xl mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-tektur text-2xl mb-4">0123456789</p>
                    <p className="text-white/60 font-mono text-sm">
                      Primary heading font | Used for all main headings | Weights: 400, 500, 600, 700
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h3 className="text-xl mb-4">Inter</h3>
                    <p className="font-sans text-2xl mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-sans text-2xl mb-2">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-sans text-2xl mb-4">0123456789</p>
                    <p className="text-white/60 font-mono text-sm">
                      Primary body font | Used for paragraphs and UI elements | Weights: 300, 400, 500, 600, 700
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h3 className="text-xl mb-4">Overpass Mono</h3>
                    <p className="font-mono text-2xl mb-2">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="font-mono text-2xl mb-2">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="font-mono text-2xl mb-4">0123456789</p>
                    <p className="text-white/60 font-mono text-sm">
                      Monospace font | Used for taglines, chips, and technical text | Weights: 300, 400, 500, 600, 700
                    </p>
                  </div>

                  <div className="border border-[#242423] p-6 rounded-md">
                    <h3 className="text-xl mb-4">Stretched Tektur (110%)</h3>
                    <p
                      className="font-tektur text-2xl mb-2"
                      style={{ transform: "scaleX(1.1)", transformOrigin: "left center" }}
                    >
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </p>
                    <p
                      className="font-tektur text-2xl mb-2"
                      style={{ transform: "scaleX(1.1)", transformOrigin: "left center" }}
                    >
                      0123456789
                    </p>
                    <p className="text-white/60 font-mono text-sm">
                      Stretched version of Tektur | Used for accent headings | Applied with scaleX(1.1)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
