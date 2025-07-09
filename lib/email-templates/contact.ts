// Shared contact confirmation email template
export function getContactConfirmationEmailHtml(email: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://www.forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">We've Received Your Message</h2>
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Thank you for contacting Forest Outfitters. We've received your message and will get back to you as soon as possible.</p>
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Our team typically responds within 24-48 hours during business days.</p>
        <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #B99C20; background-color: rgba(185, 156, 32, 0.1);">
          <p style="margin: 0; font-style: italic; color: #E0E0E0;">Your message has been recorded and a member of our team will review it shortly.</p>
        </div>
        <p style="margin: 30px 0 0 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">If you have any urgent inquiries, please contact us directly at <a href="mailto:info@forestoutfitters.com" style="color: #B99C20; text-decoration: none;">info@forestoutfitters.com</a>.</p>
      </div>
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0;">This email was sent to ${email}</p>
      </div>
    </div>
  `
} 