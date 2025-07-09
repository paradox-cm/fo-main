"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

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
      html: `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>You're on the Waitlist</title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              background-color: #0F0F10;
              color: #FFFFFF;
              font-family: Arial, sans-serif;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #0F0F10;
            }
            .logo {
              text-align: center;
              margin-bottom: 20px;
            }
            .content {
              padding: 20px 0;
              border-top: 1px solid #242423;
              border-bottom: 1px solid #242423;
            }
            .footer {
              margin-top: 20px;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.6);
            }
            h1 {
              color: #FFFFFF;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              margin-bottom: 20px;
              line-height: 1.5;
            }
            a {
              color: #B99C20;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">
              <img src="https://forestoutfitters.com/images/FOREST-Logo.White.svg" alt="Forest Outfitters" width="150" height="auto" />
            </div>
            <div class="content">
              <h1>You're on the Waitlist</h1>
              <p>Thank you for joining the Forest Outfitters waitlist. We're crafting elite apparel and gear for those who demand more from the wild.</p>
              <p>We'll notify you as soon as we launch.</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Forest Outfitters. All rights reserved.</p>
              <p>This email was sent to ${email}</p>
            </div>
          </div>
        </body>
      </html>`,
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
