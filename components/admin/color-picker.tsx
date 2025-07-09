"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function ColorPicker({
  id,
  value,
  onChange,
  className,
}: {
  id: string
  value: string
  onChange: (value: string) => void
  className?: string
}) {
  const [color, setColor] = useState(value)
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setColor(value)
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    onChange(newColor)
  }

  return (
    <div className={className}>
      <div className="flex">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="w-10 h-10 rounded-l-md border border-r-0 border-[#242423] flex items-center justify-center"
              style={{ backgroundColor: color }}
              aria-label="Pick a color"
            />
          </PopoverTrigger>
          <PopoverContent className="w-64 p-3 bg-black border-[#242423]">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor={`${id}-picker`} className="text-sm font-mono uppercase tracking-wide">
                  Pick a color
                </label>
                <span className="text-sm text-muted-foreground font-mono">{color}</span>
              </div>
              <input
                ref={inputRef}
                id={`${id}-picker`}
                type="color"
                value={color}
                onChange={handleChange}
                className="w-full h-8 cursor-pointer"
              />
            </div>
          </PopoverContent>
        </Popover>
        <Input
          id={id}
          type="text"
          value={color}
          onChange={handleChange}
          className="rounded-l-none bg-black/20 border-[#242423] focus:border-[#B99C20] font-mono text-xs uppercase"
        />
      </div>
    </div>
  )
}
