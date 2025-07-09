"use client"

import Image from "next/image"
import { SectionHeading } from "@/components/brand/section-heading"
import { ColorSwatch } from "@/components/brand/color-swatch"
import { useState } from "react"

export default function VisualIdentityPage() {
  // Add error handling for images
  const [imageErrors, setImageErrors] = useState({
    forest: false,
    tribe: false,
    hyde: false,
    rbf: false,
  })

  const handleImageError = (brand) => {
    console.error(`Failed to load image for ${brand}`)
    setImageErrors((prev) => ({
      ...prev,
      [brand]: true,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-16 font-tektur text-4xl uppercase tracking-wider text-white">Visual Identity</h1>

      {/* Overview Section */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Overview" />
        <p className="mb-8 text-lg text-gray-90">
          Visual consistency is key to reinforcing brand recognition and integrity. Each Forest Outfitters brand has its
          own visual language rooted in its core values, audience, and purpose. These guidelines define the colors,
          typography, and iconography systems that ensure every interaction with the brand looks and feels right.
        </p>

        {/* Four-quadrant grid */}
        <div className="relative mt-12 overflow-hidden rounded-lg border border-[#242423] bg-black">
          <div className="grid grid-cols-2">
            <div className="border-b border-r border-[#242423] p-6">
              <div className="mb-4 h-10 flex items-center">
                <div className="w-40">
                  <Image src="/images/FOREST-Logo.White.svg" alt="Forest Outfitters" width={160} height={40} />
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-md bg-[#111]">
                {imageErrors.forest ? (
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    Forest Outfitters Image
                  </div>
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Forest-Style-cmpr.jpg-5dWuPb8f5jQRWxApUB2ktEgSLF37ct.jpeg"
                    alt="Forest Outfitters aesthetic"
                    fill
                    priority
                    className="object-cover"
                    onError={() => handleImageError("forest")}
                  />
                )}
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-[#CFB023]"></div>
                <div className="h-4 w-4 rounded-full bg-[#2E2E2E]"></div>
                <div className="h-4 w-4 rounded-full bg-[#8B8F90]"></div>
              </div>
            </div>
            <div className="border-b border-[#242423] p-6">
              <div className="mb-4 h-10 flex items-center">
                <div className="w-40">
                  <Image src="/images/Tribe-Logo.svg" alt="Tribe Equipment" width={160} height={40} />
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-md bg-[#111]">
                {imageErrors.tribe ? (
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    Tribe Equipment Image
                  </div>
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tribe-Style-cmpr.jpg-y3UdYRttn0OMHI2IFat4Yqmm1XJwIj.jpeg"
                    alt="Tribe Equipment aesthetic"
                    fill
                    priority
                    className="object-cover"
                    onError={() => handleImageError("tribe")}
                  />
                )}
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-[#CFB023]"></div>
                <div className="h-4 w-4 rounded-full bg-[#BEAB70]"></div>
                <div className="h-4 w-4 rounded-full bg-[#4C516D]"></div>
              </div>
            </div>
            <div className="border-r border-[#242423] p-6">
              <div className="mb-4 h-10 flex items-center">
                <div className="w-40">
                  <Image src="/images/HYDE.svg" alt="HYDE™ Camouflage" width={160} height={40} />
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-md bg-[#111]">
                {imageErrors.hyde ? (
                  <div className="flex h-full w-full items-center justify-center text-gray-500">
                    HYDE™ Camouflage Image
                  </div>
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hyde-Style-cmpr.jpg-ZCU6D2yffZTxHAaQpTg13N9PxFRba3.jpeg"
                    alt="HYDE™ aesthetic"
                    fill
                    priority
                    className="object-cover"
                    onError={() => handleImageError("hyde")}
                  />
                )}
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-[#CFB023]"></div>
                <div className="h-4 w-4 rounded-full bg-[#645340]"></div>
                <div className="h-4 w-4 rounded-full bg-[#2E2E2E]"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 h-10 flex items-center">
                <div className="w-40">
                  <Image src="/images/RBF-Logo.svg" alt="RBF" width={160} height={40} />
                </div>
              </div>
              <div className="relative h-48 overflow-hidden rounded-md bg-[#111]">
                {imageErrors.rbf ? (
                  <div className="flex h-full w-full items-center justify-center text-gray-500">RBF Image</div>
                ) : (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RBF-Style-cmpr-v7emuWFiTnge0q8yNi7jaGVXvmJYcM.png"
                    alt="RBF aesthetic"
                    fill
                    priority
                    className="object-cover"
                    onError={() => handleImageError("rbf")}
                  />
                )}
              </div>
              <div className="mt-3 flex space-x-2">
                <div className="h-4 w-4 rounded-full bg-[#CFB023]"></div>
                <div className="h-4 w-4 rounded-full bg-[#73662E]"></div>
                <div className="h-4 w-4 rounded-full bg-[#A7995D]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Systems Section */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Color Systems by Brand" />
        <p className="mb-4 text-lg text-gray-90">
          Each brand uses a primary palette, supported by complementary colors. Below are the official HEX, CMYK,
          Pantone, and Pantone TCX values for digital and print consistency.{" "}
          <span className="font-semibold">
            All color values must be used exactly as specified to maintain brand integrity across all media.
          </span>
        </p>

        {/* Note about print applications - shown only once */}
        <div className="mb-8 rounded-md border border-[#CFB023] bg-[#0A0A0A] p-3">
          <p className="text-sm text-[#CFB023]">
            <span className="font-semibold">Note:</span> For print applications, always use the specified CMYK values.
            For textile and product development, reference the Pantone TCX codes for accurate color matching.
          </p>
        </div>

        {/* Forest Outfitters Colors */}
        <div className="mb-12">
          <div className="mb-6 flex justify-start">
            <Image
              src="/images/FOREST-Logo.White.svg"
              alt="Forest Outfitters"
              width={138}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ColorSwatch
              color="Forest Gold"
              name="Forest Gold"
              hex="#CFB023"
              pantone="7752 C"
              pantone_tcx="15-0647 TCX"
              cmyk="0,15,83,19"
              notes="Signature accent"
            />
            <ColorSwatch
              color="Slate Gray"
              name="Slate Gray"
              hex="#2E2E2E"
              pantone="447 C"
              pantone_tcx="19-4005 TCX"
              cmyk="0,0,0,82"
              notes="Base tone"
            />
            <ColorSwatch
              color="Ash Gray"
              name="Ash Gray"
              hex="#8B8F90"
              pantone="Cool Gray 10 C"
              pantone_tcx="18-4005 TCX"
              cmyk="3,0,0,44"
              notes="Secondary tone"
            />
            <ColorSwatch
              color="Black"
              name="Black"
              hex="#000000"
              pantone="Black C"
              pantone_tcx="19-0303 TCX"
              cmyk="0,0,0,100"
              notes="Text, contrast"
            />
            <ColorSwatch
              color="White"
              name="White"
              hex="#FFFFFF"
              pantone="White"
              pantone_tcx="11-0601 TCX"
              cmyk="0,0,0,0"
              notes="Background"
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#183028] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Deep Forest Green</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #183028
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 44,0,13,78
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 5535 C
                  </p>
                  <p className="text-xs text-gray-90">19-5320 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#A2A569] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Olive Sage</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #A2A569
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 2,0,36,35
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 5777 C
                  </p>
                  <p className="text-xs text-gray-90">16-0421 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#A39382] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Stone Taupe</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #A39382
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,8,22,36
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7530 C
                  </p>
                  <p className="text-xs text-gray-90">16-1107 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#D6D2C4] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Moss Beige</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #D6D2C4
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,2,9,16
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7527 C
                  </p>
                  <p className="text-xs text-gray-90">13-0905 TCX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tribe Equipment Colors */}
        <div className="mb-12">
          <div className="mb-6 flex justify-start">
            <Image
              src="/images/Tribe-Logo.svg"
              alt="Tribe Equipment"
              width={138}
              height={50}
              className="object-contain"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ColorSwatch
              color="Forest Gold"
              name="Forest Gold"
              hex="#CFB023"
              pantone="7752 C"
              pantone_tcx="15-0647 TCX"
              cmyk="0,15,83,19"
              notes="Shared legacy"
            />
            <ColorSwatch
              color="Desert Gold"
              name="Desert Gold"
              hex="#BEAB70"
              pantone="4515 C"
              pantone_tcx="14-1036 TCX"
              cmyk="0,10,40,25"
              notes="Tactical accent"
            />
            <ColorSwatch
              color="Khaki Sand"
              name="Khaki Sand"
              hex="#CEC094"
              pantone="4535 C"
              pantone_tcx="13-1012 TCX"
              cmyk="0,5,30,20"
              notes="Uniform background"
            />
            <ColorSwatch
              color="Independence"
              name="Independence"
              hex="#4C516D"
              pantone="2378 C"
              pantone_tcx="19-3921 TCX"
              cmyk="29,24,0,58"
              notes="Brand base"
            />
            <ColorSwatch
              color="Matte Blue"
              name="Matte Blue"
              hex="#686F85"
              pantone="4125 C"
              pantone_tcx="18-3910 TCX"
              cmyk="20,15,0,47"
              notes="UI, labels"
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#333333] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Charcoal Gray</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #333333
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,0,0,80
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 447 C
                  </p>
                  <p className="text-xs text-gray-90">19-4005 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#7C7269] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Steel Taupe</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #7C7269
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,10,20,36
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7531 C
                  </p>
                  <p className="text-xs text-gray-90">17-1506 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#D6D2C4] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Drift Sand</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #D6D2C4
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,2,9,16
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7527 C
                  </p>
                  <p className="text-xs text-gray-90">13-0905 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#F1F1F1] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Ash White</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #F1F1F1
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,0,0,5
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> Cool Gray 1 C
                  </p>
                  <p className="text-xs text-gray-90">11-0601 TCX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HYDE™ Camouflage Colors */}
        <div className="mb-12">
          <div className="mb-6 flex justify-start">
            <Image src="/images/HYDE.svg" alt="HYDE™ Camouflage" width={138} height={50} className="object-contain" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ColorSwatch
              color="Forest Gold"
              name="Forest Gold"
              hex="#CFB023"
              pantone="7752 C"
              pantone_tcx="15-0647 TCX"
              cmyk="0,15,83,19"
              notes="Shared legacy"
            />
            <ColorSwatch
              color="Tactical Brown"
              name="Tactical Brown"
              hex="#645340"
              pantone="7531 C"
              pantone_tcx="17-0808 TCX"
              cmyk="0,15,35,61"
              notes="Primary accent"
            />
            <ColorSwatch
              color="Slate Gray"
              name="Slate Gray"
              hex="#2E2E2E"
              pantone="447 C"
              pantone_tcx="19-4005 TCX"
              cmyk="0,0,0,82"
              notes="Base tone"
            />
            <ColorSwatch
              color="Ash Gray"
              name="Ash Gray"
              hex="#E5E5E5"
              pantone="427 C"
              pantone_tcx="11-0601 TCX"
              cmyk="0,0,0,10"
              notes="Secondary tone"
            />
            <ColorSwatch
              color="Tactical White"
              name="Tactical White"
              hex="#FFFFFF"
              pantone="White"
              pantone_tcx="11-0601 TCX"
              cmyk="0,0,0,0"
              notes="UI/pattern testing"
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#5A3C2B] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Rust Brown</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #5A3C2B
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,45,64,69
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7603 C
                  </p>
                  <p className="text-xs text-gray-90">19-1337 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#6C6A6A] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Iron Gray</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #6C6A6A
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,0,0,60
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> Cool Gray 10 C
                  </p>
                  <p className="text-xs text-gray-90">18-0403 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#E9E4D9] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Bone White</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #E9E4D9
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,5,10,5
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7527 C
                  </p>
                  <p className="text-xs text-gray-90">13-0905 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#F8F6F2] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Heatmap Ivory</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #F8F6F2
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,0,5,2
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 11-0602 C
                  </p>
                  <p className="text-xs text-gray-90">11-0602 TCX</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RBF Colors */}
        <div>
          <div className="mb-6 flex justify-start">
            <Image src="/images/RBF-Logo.svg" alt="RBF" width={138} height={50} className="object-contain" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ColorSwatch
              color="Forest Gold"
              name="Forest Gold"
              hex="#CFB023"
              pantone="7752 C"
              pantone_tcx="15-0647 TCX"
              cmyk="0,15,83,19"
              notes="Shared legacy"
            />
            <ColorSwatch
              color="Gold"
              name="Gold"
              hex="#73662E"
              pantone="7771 C"
              pantone_tcx="17-0836 TCX"
              cmyk="0,10,80,55"
              notes="Accent tone"
            />
            <ColorSwatch
              color="Earth"
              name="Earth"
              hex="#A7995D"
              pantone="4515 C"
              pantone_tcx="15-0719 TCX"
              cmyk="0,10,40,35"
              notes="Base tone"
            />
            <ColorSwatch
              color="Camo Green"
              name="Camo Green"
              hex="#96A384"
              pantone="5777 C"
              pantone_tcx="16-0421 TCX"
              cmyk="15,0,20,36"
              notes="Natural contrast"
            />
            <ColorSwatch
              color="Very Dark Brown"
              name="Very Dark Brown"
              hex="#2E1C1C"
              pantone="4975 C"
              pantone_tcx="19-0812 TCX"
              cmyk="0,45,45,82"
              notes="Anchor background"
            />
          </div>
          <div className="mt-4">
            <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Complementary</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#3B2E17] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Dark Olive Brown</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #3B2E17
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,20,80,77
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 1545 C
                  </p>
                  <p className="text-xs text-gray-90">19-0614 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#66543F] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Warm Taupe</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #66543F
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,15,40,60
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7531 C
                  </p>
                  <p className="text-xs text-gray-90">16-1108 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#DCD6BE] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">Sand Beige</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">HEX:</span> #DCD6BE
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,2,20,14
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> 7527 C
                  </p>
                  <p className="text-xs text-gray-90">13-0905 TCX</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-sm bg-[#FFFFFF] mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-white">White</p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">CMYK:</span> 0,0,0,0
                  </p>
                  <p className="text-xs text-gray-90">
                    <span className="font-semibold">Pantone:</span> White
                  </p>
                  <p className="text-xs text-gray-90">11-0601 TCX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Accuracy Section */}
      <div className="mb-16 border-b border-[#242423] pb-16">
        <SectionHeading title="Color Accuracy & Reproduction" />
        <p className="mb-8 text-lg text-gray-90">
          Maintaining color accuracy across all media is essential for brand consistency. Use the following guidelines
          for different applications:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[#242423] bg-[#0A0A0A] p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Digital Applications</h3>
            <ul className="space-y-3 text-gray-90">
              <li>• Use HEX values for web and digital applications</li>
              <li>• For UI design, use RGB values converted from the HEX codes</li>
              <li>• Ensure color profiles are set to sRGB for screen display</li>
              <li>• Test colors across multiple devices to ensure consistency</li>
            </ul>
          </div>

          <div className="rounded-lg border border-[#242423] bg-[#0A0A0A] p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Print Applications</h3>
            <ul className="space-y-3 text-gray-90">
              <li>• Always use the specified CMYK values for 4-color process printing</li>
              <li>• For spot color printing, use the Pantone C (Coated) values</li>
              <li>• Request printer proofs before final production runs</li>
              <li>• Maintain color calibration on all design workstations</li>
            </ul>
          </div>

          <div className="rounded-lg border border-[#242423] bg-[#0A0A0A] p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Product Development</h3>
            <ul className="space-y-3 text-gray-90">
              <li>• Reference Pantone TCX codes for textile and material color matching</li>
              <li>• Request physical color standards from suppliers</li>
              <li>• Evaluate colors under standard D65 lighting conditions</li>
              <li>• Maintain physical color standards for quality control</li>
            </ul>
          </div>

          <div className="rounded-lg border border-[#242423] bg-[#0A0A0A] p-6">
            <h3 className="mb-4 font-tektur text-xl uppercase tracking-wider text-white">Color Tolerances</h3>
            <ul className="space-y-3 text-gray-90">
              <li>• Digital: ΔE ≤ 2.0 for critical brand colors</li>
              <li>• Print: ΔE ≤ 3.0 for CMYK process</li>
              <li>• Textiles: ΔE ≤ 4.0 for dyed materials</li>
              <li>• Request color evaluation reports from manufacturers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Typography Systems Section */}
      <section className="mb-16 border-b border-[#242423] pb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Typography Systems</h2>
        <p className="mb-8 text-lg text-gray-90">
          Typography is central to brand voice. Each brand uses a specific type system that reflects its tone, from
          rugged and bold to minimal and sleek.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Forest Outfitters Typography */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#2E2E2E] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/FOREST-Logo.White.svg"
                  alt="Forest Outfitters"
                  width={138}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Primary Font</h4>
              <p className="mb-4 text-gray-90">Archivo Medium / Black</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Style</h4>
              <p className="mb-4 text-gray-90">Rugged, structured, bold</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Use</h4>
              <p className="mb-4 text-gray-90">Headlines, print materials, product labels</p>

              <div className="mt-6 rounded-md bg-[#0A0A0A] p-4">
                <p className="font-archivo text-2xl font-bold uppercase tracking-wider text-[#CFB023]">
                  ENGINEERED FOR THE WILD
                </p>
                <p className="mt-2 font-archivo text-base text-gray-90">This isn't just gear. It's your second skin.</p>
              </div>
            </div>
          </div>

          {/* Tribe Equipment Typography */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#4C516D] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/Tribe-Logo.svg"
                  alt="Tribe Equipment"
                  width={138}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Primary Font</h4>
              <p className="mb-4 text-gray-90">TT Octosquares</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Secondary Font</h4>
              <p className="mb-4 text-gray-90">Libertad Mono</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Style</h4>
              <p className="mb-4 text-gray-90">Tactical, modular, military-grade</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Use</h4>
              <p className="mb-4 text-gray-90">Tech schematics, hang tags, UI overlays</p>

              <div className="mt-6 rounded-md bg-[#0A0A0A] p-4">
                <p className="font-tektur text-2xl uppercase tracking-wider text-[#BEAB70]">MISSION FIRST</p>
                <p className="mt-2 font-mono text-sm text-gray-90">// GEAR SECOND TO NONE</p>
              </div>
            </div>
          </div>

          {/* HYDE™ Typography */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#645340] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/HYDE.svg"
                  alt="HYDE™ Camouflage"
                  width={138}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Primary Font</h4>
              <p className="mb-4 text-gray-90">Archivo</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Secondary Font</h4>
              <p className="mb-4 text-gray-90">Libertad Mono</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Style</h4>
              <p className="mb-4 text-gray-90">Technical, precise, data-driven</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Use</h4>
              <p className="mb-4 text-gray-90">Pattern system UIs, camo testing docs</p>

              <div className="mt-6 rounded-md bg-[#0A0A0A] p-4">
                <p className="font-archivo text-2xl font-medium uppercase tracking-wider text-[#645340]">
                  DESIGNED BY NATURE
                </p>
                <p className="mt-2 font-mono text-sm text-gray-90">{">"} EVOLVED BY AI</p>
              </div>
            </div>
          </div>

          {/* RBF Typography */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#2E1C1C] p-4">
              <div className="flex justify-start">
                <Image src="/images/RBF-Logo.svg" alt="RBF" width={138} height={50} className="object-contain" />
              </div>
            </div>
            <div className="p-6">
              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Primary Font</h4>
              <p className="mb-4 text-gray-90">Archivo</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Style</h4>
              <p className="mb-4 text-gray-90">Elegant, editorial, minimal</p>

              <h4 className="mb-2 font-tektur text-sm uppercase tracking-wider text-white">Use</h4>
              <p className="mb-4 text-gray-90">Lookbooks, packaging, retail labels</p>

              <div className="mt-6 rounded-md bg-[#0A0A0A] p-4">
                <p className="font-archivo text-2xl font-light uppercase tracking-wider text-[#CFB023]">
                  Rugged. Beautiful. Functional.
                </p>
                <p className="mt-2 font-archivo text-sm font-light text-gray-90">From trailhead to table.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iconography Section */}
      <section className="mb-16">
        <h2 className="font-tektur text-3xl uppercase tracking-wider text-white mb-6">Iconography & Symbol Use</h2>
        <p className="mb-8 text-lg text-gray-90">Icon sets are purpose-built for each brand:</p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Forest Outfitters Icons */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#2E2E2E] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/FOREST-Logo.White.svg"
                  alt="Forest Outfitters"
                  width={138}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-90">Wildlife, terrain, weather elements</p>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-full items-center justify-center rounded-md border border-[#242423] bg-[#0A0A0A]"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#CFB023] opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-[#242423] bg-[#0A0A0A] p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full bg-[#CFB023] opacity-80"></div>
                  <div>
                    <p className="font-archivo text-sm font-medium text-white">Product Tag Example</p>
                    <p className="text-xs text-gray-90">Used on hang tags and product cards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tribe Equipment Icons */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#4C516D] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/Tribe-Logo.svg"
                  alt="Tribe Equipment"
                  width={138}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-90">Tactical symbols, UI glyphs, unit codes</p>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-full items-center justify-center rounded-md border border-[#242423] bg-[#0A0A0A]"
                  >
                    <div className="h-8 w-8 rounded-md bg-[#BEAB70] opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-[#242423] bg-[#0A0A0A] p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-md bg-[#BEAB70] opacity-80"></div>
                  <div>
                    <p className="font-tektur text-sm uppercase tracking-wider text-white">UI Element</p>
                    <p className="text-xs text-gray-90">Used in technical documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HYDE™ Icons */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#645340] p-4">
              <div className="flex justify-start">
                <Image
                  src="/images/HYDE.svg"
                  alt="HYDE™ Camouflage"
                  width={138}
                  height={50}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-90">Neural overlays, visibility scores, data nodes</p>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-full items-center justify-center rounded-md border border-[#242423] bg-[#0A0A0A]"
                  >
                    <div className="h-8 w-8 rounded-full border-2 border-[#645340] opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-[#242423] bg-[#0A0A0A] p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full border-2 border-[#645340] opacity-80"></div>
                  <div>
                    <p className="font-mono text-sm text-white">// Data Visualization</p>
                    <p className="text-xs text-gray-90">Used in pattern testing interfaces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RBF Icons */}
          <div className="overflow-hidden rounded-lg border border-[#242423] bg-gray-30">
            <div className="border-b border-[#242423] bg-[#2E1C1C] p-4">
              <div className="flex justify-start">
                <Image src="/images/RBF-Logo.svg" alt="RBF" width={138} height={50} className="object-contain" />
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-90">Weather icons, minimal lifestyle tags, fashion motifs</p>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="flex h-16 w-full items-center justify-center rounded-md border border-[#242423] bg-[#0A0A0A]"
                  >
                    <div className="h-8 w-8 border-b-2 border-[#CFB023] opacity-80"></div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-[#242423] bg-[#0A0A0A] p-4">
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 border-b-2 border-[#CFB023] opacity-80"></div>
                  <div>
                    <p className="font-archivo text-sm font-light text-white">Care Label</p>
                    <p className="text-xs text-gray-90">Used on product packaging</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
