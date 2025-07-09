"use server"

import { Resend } from "resend"
import { getNewsletterConfirmationEmailHtml } from "../../lib/email-templates/newsletter"

const resend = new Resend("re_9Hr2qw6X_CLCVjMLffa4wWhPqrSyAMEjS")
const ADMIN_EMAIL = "admin@forestoutfitters.com"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    }
  }

  try {
    // In a real app, you would add the email to your newsletter service
    // For now, we'll just send a confirmation email
    const { data, error } = await resend.emails.send({
      from: "Forest Outfitters <noreply@forestoutfitters.com>",
      to: email,
      subject: "Welcome to Forest Outfitters Newsletter",
      html: getNewsletterConfirmationEmailHtml(email),
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to subscribe. Please try again.",
      }
    }

    return {
      success: true,
      message: "You've been subscribed to our newsletter!",
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
