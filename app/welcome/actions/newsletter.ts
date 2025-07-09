"use server"

import { Resend } from "resend"

// Initialize Resend with the API key
const resend = new Resend("re_J53e1a4t_4Dea3xZQsu7ARmLJ5m6nZ9DJ")

// Configuration
const OWNER_EMAIL = "christopher.mena@icloud.com"
const IS_TESTING_MODE = false // Domain is now verified

// Updated HTML template - EXACTLY matching the one in emails/newsletter/page.tsx
const userEmailHtml = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">Thank You for Subscribing</h2>
        
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">You're now subscribed to the Forest Outfitters newsletter. You'll receive updates on our latest products, exclusive offers, and outdoor tips.</p>
        
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Stay tuned for our next update.</p>
        
        <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #B99C20; background-color: rgba(185, 156, 32, 0.1);">
          <p style="margin: 0; font-style: italic; color: #E0E0E0;">Your preferences have been saved. You can update your subscription settings at any time.</p>
        </div>
      </div>
      
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0;">This email was sent to {{email}}</p>
      </div>
    </div>
`

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // Validate email
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  try {
    // In testing mode, send all emails to the owner
    if (IS_TESTING_MODE) {
      const { data, error } = await resend.emails.send({
        from: "Forest Outfitters <onboarding@resend.dev>",
        to: [OWNER_EMAIL],
        subject: "New Forest Outfitters Newsletter Subscription",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Welcome Page Newsletter Form</p>
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
          message: "Failed to subscribe. Please try again later.",
        }
      }
    } else {
      // Production mode - send emails to both user and admin
      const { data, error } = await resend.emails.send({
        from: "Newsletter <newsletter@forestoutfitters.com>",
        to: [email],
        subject: "Welcome to the Forest Outfitters Newsletter",
        html: userEmailHtml.replace("{{email}}", email),
      })

      if (error) {
        console.error("Resend API error:", error)
        return {
          success: false,
          message: "Failed to subscribe. Please try again later.",
        }
      }

      // Also send notification to admin
      await resend.emails.send({
        from: "Newsletter <newsletter@forestoutfitters.com>",
        to: [OWNER_EMAIL],
        subject: "New Forest Outfitters Newsletter Subscription",
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Source:</strong> Welcome Page Newsletter Form</p>
          </div>
        `,
      })
    }

    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Failed to subscribe. Please try again later.",
    }
  }
}
