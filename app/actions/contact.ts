"use server"

import { Resend } from "resend"
import { z } from "zod"
import { getContactConfirmationEmailHtml } from "../../lib/email-templates/contact"

// Initialize Resend with API key
const resend = new Resend("re_9Hr2qw6X_CLCVjMLffa4wWhPqrSyAMEjS")

// Configuration
const OWNER_EMAIL = "admin@forestoutfitters.com"
const IS_TESTING_MODE = false // Domain is now verified

// Define validation schema
const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Extract data from form
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate the data
    const validatedFields = ContactSchema.safeParse({ name, email, subject, message })

    if (!validatedFields.success) {
      const errors = validatedFields.error.flatten().fieldErrors
      const errorMessage = Object.values(errors)[0]?.[0] || "Invalid form data"
      return {
        success: false,
        message: errorMessage,
      }
    }

    // Use shared contact confirmation email template
    const userEmailHtml = getContactConfirmationEmailHtml(email)

    // In testing mode, send all emails to the owner
    if (IS_TESTING_MODE) {
      const { data, error } = await resend.emails.send({
        from: "Forest Outfitters <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: `[CONTACT FORM] New submission from ${name} (${email})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
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
          message: "Failed to send message. Please try again later.",
        }
      }
    } else {
      // Production mode - send emails to both user and admin
      const { data, error } = await resend.emails.send({
        from: "Contact <contact@forestoutfitters.com>",
        to: [email],
        subject: "We've Received Your Message - Forest Outfitters",
        html: userEmailHtml,
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to send message. Please try again later.",
        }
      }

      // Send notification email to admin
      await resend.emails.send({
        from: "Contact <contact@forestoutfitters.com>",
        to: [OWNER_EMAIL],
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      })
    }

    return {
      success: true,
      message: "Thank you for your message. We'll be in touch shortly.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
