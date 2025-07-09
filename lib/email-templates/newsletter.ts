// Shared newsletter confirmation email template
export function getNewsletterConfirmationEmailHtml(email: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://www.forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
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
        <p style="margin: 0;">This email was sent to ${email}</p>
      </div>
    </div>
  `
} 