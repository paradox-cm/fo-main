// Shared waitlist confirmation email template
export function getWaitlistConfirmationEmailHtml(email: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://www.forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">You're on the Waitlist</h2>
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">Thank you for joining the Forest Outfitters waitlist. We're crafting elite apparel and gear for those who demand more from the wild.</p>
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">We'll notify you as soon as we launch.</p>
      </div>
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0;">This email was sent to ${email}</p>
      </div>
    </div>
  `
} 