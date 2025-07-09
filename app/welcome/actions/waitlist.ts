"use server"

import { Resend } from "resend"

// Initialize Resend with the API key
const resend = new Resend("re_J53e1a4t_4Dea3xZQsu7ARmLJ5m6nZ9DJ")

// In testing mode, we can only send to the owner's email
const OWNER_EMAIL = "christopher.mena@icloud.com"
const IS_TESTING_MODE = false // Domain is now verified

// Update the HTML template to EXACTLY match the one in the emails section
const userEmailHtml = `
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

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string

  // Validate email
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  try {
    // In testing mode, we only send notification to the owner
    // with the submitted email in the content
    if (IS_TESTING_MODE) {
      const { data, error } = await resend.emails.send({
        from: "Forest Outfitters <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: "New Forest Outfitters Waitlist Signup",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Welcome Page Waitlist Form</p>
            <hr />
            <p>Note: This is a testing mode email. Once domain verification is complete, 
            the user will receive a confirmation email.</p>
            <div style="background-color: #f9f9f9; padding: 15px; margin-top: 20px; border: 1px solid #eee;">
              <h3>User Confirmation Email Preview:</h3>
              ${userEmailHtml.replace("{{email}}", email)}
            </div>
          </div>
        `,
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to join waitlist. Please try again later.",
        }
      }
    } else {
      // Production mode - send emails to both user and admin
      const { data, error } = await resend.emails.send({
        from: "Waitlist <waitlist@forestoutfitters.com>",
        to: [email],
        subject: "You're on the Forest Outfitters Waitlist",
        html: userEmailHtml.replace("{{email}}", email),
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to join waitlist. Please try again later.",
        }
      }

      // Send notification email to admin
      await resend.emails.send({
        from: "Waitlist <waitlist@forestoutfitters.com>",
        to: [OWNER_EMAIL],
        subject: "New Forest Outfitters Waitlist Signup",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2>New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Welcome Page Waitlist Form</p>
          </div>
        `,
      })
    }

    return {
      success: true,
      message: "Thank you for joining our waitlist!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again later.",
    }
  }
}
