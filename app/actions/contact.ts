"use server"

import { Resend } from "resend"
import { z } from "zod"

// Initialize Resend with API key
const resend = new Resend("re_J53e1a4t_4Dea3xZQsu7ARmLJ5m6nZ9DJ")

// Configuration
const OWNER_EMAIL = "christopher.mena@icloud.com"
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

    // Create user confirmation email HTML with full dark background
    const userEmailHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Forest Outfitters Contact Confirmation</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #0F0F10;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    table {
      border-spacing: 0;
    }
    td {
      padding: 0;
    }
    img {
      border: 0;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #0F0F10;
      padding-bottom: 40px;
    }
    .main {
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      background-color: #0F0F10;
      color: #FFFFFF;
    }
    .content {
      padding: 40px 30px;
    }
    .header {
      padding-bottom: 30px;
      border-bottom: 1px solid #333333;
      text-align: left;
    }
    .body-content {
      padding: 40px 0;
      text-align: left;
    }
    .highlight {
      margin: 30px 0;
      padding: 20px;
      border-left: 3px solid #B99C20;
      background-color: rgba(185, 156, 32, 0.1);
    }
    .footer {
      padding-top: 30px;
      border-top: 1px solid #333333;
      font-size: 12px;
      color: #999999;
      text-align: left;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #0F0F10;">
  <center class="wrapper" style="width: 100%; table-layout: fixed; background-color: #0F0F10; padding-bottom: 40px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #0F0F10;">
      <tr>
        <td width="100%" style="padding: 0;">
          <table class="main" width="600" cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto; max-width: 600px; background-color: #0F0F10; color: #FFFFFF;">
            <tr>
              <td class="content" style="padding: 40px 30px;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <!-- Header -->
                  <tr>
                    <td class="header" style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
                      <img src="https://forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
                    </td>
                  </tr>
                  
                  <!-- Body -->
                  <tr>
                    <td class="body-content" style="padding: 40px 0; text-align: left;">
                      <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">We've Received Your Message</h2>
                      
                      <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Thank you for contacting Forest Outfitters. We've received your message and will get back to you as soon as possible.</p>
                      
                      <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Our team typically responds within 24-48 hours during business days.</p>
                      
                      <div class="highlight" style="margin: 30px 0; padding: 20px; border-left: 3px solid #B99C20; background-color: rgba(185, 156, 32, 0.1);">
                        <p style="margin: 0; font-style: italic; color: #E0E0E0;">Your message has been recorded and a member of our team will review it shortly.</p>
                      </div>
                      
                      <p style="margin: 30px 0 0 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">If you have any urgent inquiries, please contact us directly at <a href="mailto:info@forestoutfitters.com" style="color: #B99C20; text-decoration: none;">info@forestoutfitters.com</a>.</p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td class="footer" style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
                      <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
                      <p style="margin: 0;">This email was sent to {{email}}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </center>
</body>
</html>
`

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
        html: userEmailHtml.replace("{{email}}", email),
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
