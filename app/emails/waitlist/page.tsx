"use client"

import { useState } from "react"
import { ClipboardCopy } from "lucide-react"
import { getWaitlistConfirmationEmailHtml } from "../../../lib/email-templates/waitlist"

export default function WaitlistEmailPage() {
  const [copied, setCopied] = useState(false)

  const emailHtml = getWaitlistConfirmationEmailHtml("customer@example.com")

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailHtml)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Waitlist Reply Email Template</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Preview</h2>
        <div className="border rounded-lg p-6 bg-[#0F0F10]">
          <div dangerouslySetInnerHTML={{ __html: emailHtml.replace("{{email}}", "customer@example.com") }} />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">HTML Code</h2>
        <div className="relative">
          <button
            onClick={copyToClipboard}
            className="absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
            aria-label="Copy code"
            title="Copy code"
          >
            <ClipboardCopy size={16} className={copied ? "text-green-400" : "text-gray-300"} />
          </button>
          <pre className="bg-gray-900 text-gray-300 p-4 pt-12 rounded-lg overflow-x-auto text-sm border border-gray-700">
            {emailHtml}
          </pre>
        </div>
      </div>
    </div>
  )
}
