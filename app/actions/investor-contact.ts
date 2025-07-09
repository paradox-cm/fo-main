"use server"

import { Resend } from "resend"
import { z } from "zod"

// Initialize Resend with API key
const resend = new Resend("re_J53e1a4t_4Dea3xZQsu7ARmLJ5m6nZ9DJ")

// Configuration
const OWNER_EMAIL = "christopher.mena@icloud.com"
const IS_TESTING_MODE = false // Domain is now verified

// Define validation schema
const InvestorContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(1, { message: "Company is required" }),
  message: z.string().optional(),
})

export async function submitInvestorContact(formData: FormData) {
  try {
    // Extract data from form
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validate the data
    const validatedFields = InvestorContactSchema.safeParse({ name, email, company, message })

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors
      const errorMessage = Object.values(errors)[0]?.[0] || "Invalid form data"
      return {
        success: false,
        message: errorMessage,
      }
    }

    // Create user confirmation email HTML - EXACTLY matching the one in emails/investor/page.tsx
    const userEmailHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">Thank You for Your Interest in Investing</h2>
        
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">We appreciate your interest in Forest Outfitters. Our team has received your inquiry and will review your information promptly.</p>
        
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">A member of our investor relations team will contact you within 3-5 business days to discuss potential opportunities.</p>
        
        <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #B99C20; background-color: rgba(185, 156, 32, 0.1);">
          <p style="margin: 0; font-style: italic; color: #E0E0E0;">Your investment inquiry has been recorded and is being reviewed by our team.</p>
        </div>
        
        <p style="margin: 30px 0 0 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">For immediate assistance with investor relations matters, please contact <a href="mailto:investors@forestoutfitters.com" style="color: #B99C20; text-decoration: none;">investors@forestoutfitters.com</a>.</p>
      </div>
      
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0 0 5px 0;">This email contains confidential information intended only for the recipient.</p>
        <p style="margin: 0;">This email was sent to {{email}}</p>
      </div>
    </div>
    `

    // In testing mode, send all emails to the owner
    if (IS_TESTING_MODE) {
      const { data, error } = await resend.emails.send({
        from: "Forest Outfitters <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: `[INVESTOR INQUIRY] New submission from ${name} (${email}) at ${company}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Investor Inquiry</h2>
            <p>A new potential investor has submitted a contact form:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            
            <hr style="margin: 30px 0;" />
            
            <h3>Preview of confirmation email that would be sent to user:</h3>
            ${userEmailHtml.replace("{{email}}", email)}
          </div>
        `,
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to submit. Please try again later.",
        }
      }
    } else {
      // Production mode - send emails to both user and admin
      const { data, error } = await resend.emails.send({
        from: "Investors <investors@forestoutfitters.com>",
        to: [email],
        subject: "Thank You for Your Interest in Forest Outfitters",
        html: userEmailHtml.replace("{{email}}", email),
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to submit. Please try again later.",
        }
      }

      // Send notification email to admin
      await resend.emails.send({
        from: "Investors <investors@forestoutfitters.com>",
        to: [OWNER_EMAIL],
        subject: "New Forest Outfitters Investor Inquiry",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Investor Inquiry</h2>
            <p>A new potential investor has submitted a contact form:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Message:</strong> ${message || "No message provided"}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    }

    return {
      success: true,
      message: "Thank you for your interest. We'll be in touch shortly.",
    }
  } catch (error) {
    console.error("Investor contact error:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
