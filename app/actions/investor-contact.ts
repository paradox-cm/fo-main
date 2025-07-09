"use server"

import { Resend } from "resend"
import { z } from "zod"
import { getInvestorConfirmationEmailHtml } from "../../lib/email-templates/investor"

// Initialize Resend with API key
const resend = new Resend("re_9Hr2qw6X_CLCVjMLffa4wWhPqrSyAMEjS")

// Configuration
const OWNER_EMAIL = "admin@forestoutfitters.com"
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

    // Use shared investor confirmation email template
    const userEmailHtml = getInvestorConfirmationEmailHtml(email)

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
        html: userEmailHtml,
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
