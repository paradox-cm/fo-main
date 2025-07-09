"use client"

import { useState } from "react"
import { ClipboardCopy } from "lucide-react"

export default function WaitlistEmailPage() {
  const [copied, setCopied] = useState(false)

  const emailHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">You're on the Waitlist</h2>
        
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Thank you for joining the Forest Outfitters waitlist. We're crafting elite apparel and gear for those who demand more from the wild.</p>
        
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">We'll notify you as soon as we launch.</p>
      </div>
      
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0;">This email was sent to {{email}}</p>
      </div>
    </div>
  `

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
