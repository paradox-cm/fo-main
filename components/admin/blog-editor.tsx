"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, Image, Link, Code, Heading1, Heading2, Heading3 } from "lucide-react"

export function BlogEditor({ content, onChange }: { content: string; onChange: (content: string) => void }) {
  const [editorContent, setEditorContent] = useState(content)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setEditorContent(content)
  }, [content])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setEditorContent(newContent)
    onChange(newContent)
  }

  const insertMarkdown = (prefix: string, suffix = "") => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = editorContent.substring(start, end)

    const beforeText = editorContent.substring(0, start)
    const afterText = editorContent.substring(end)

    const newContent = `${beforeText}${prefix}${selectedText}${suffix}${afterText}`
    setEditorContent(newContent)
    onChange(newContent)

    // Set focus back to textarea and restore selection
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + prefix.length, end + prefix.length)
    }, 0)
  }

  const insertHeading = (level: number) => {
    const prefix = "#".repeat(level) + " "
    insertMarkdown(prefix)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 p-2 border border-[#242423] rounded-md bg-black/20">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(1)}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(2)}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertHeading(3)}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Heading3 className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#242423] mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("**", "**")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Bold className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("*", "*")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Italic className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#242423] mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("[", "](url)")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Link className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("![alt text](", ")")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Image className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#242423] mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("- ")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <List className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("1. ")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-[#242423] mx-1" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => insertMarkdown("`", "`")}
          className="text-white hover:text-[#B99C20] hover:bg-[#1A1505]"
        >
          <Code className="h-4 w-4" />
        </Button>
      </div>

      <div className="border border-[#242423] rounded-md overflow-hidden">
        <textarea
          ref={textareaRef}
          value={editorContent}
          onChange={handleChange}
          className="w-full h-[500px] p-4 bg-black/20 text-white font-mono text-sm resize-none focus:outline-none focus:border-[#B99C20]"
          placeholder="Write your article content here using Markdown..."
        />
      </div>

      <div className="text-xs text-muted-foreground font-mono">
        <p>
          This editor uses Markdown syntax. Learn more about Markdown{" "}
          <a
            href="https://www.markdownguide.org/basic-syntax/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#B99C20] hover:underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </div>
  )
}
