"use server"

import { Resend } from "resend"
import { getWaitlistConfirmationEmailHtml } from "../../lib/email-templates/waitlist"

const resend = new Resend("re_9Hr2qw6X_CLCVjMLffa4wWhPqrSyAMEjS")
const ADMIN_EMAIL = "admin@forestoutfitters.com"

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get("email") as string

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    }
  }

  try {
    // In a real app, you would add the email to your waitlist database
    // For now, we'll just send a confirmation email
    const { data, error } = await resend.emails.send({
      from: "Forest Outfitters <noreply@forestoutfitters.com>",
      to: email,
      subject: "You're on the Forest Outfitters Waitlist",
      html: getWaitlistConfirmationEmailHtml(email),
    })

    if (error) {
      console.error("Error sending email:", error)
      return {
        success: false,
        message: "Failed to join waitlist. Please try again.",
      }
    }

    return {
      success: true,
      message: "You've been added to our waitlist!",
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}
