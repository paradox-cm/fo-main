// Shared investor confirmation email template
export function getInvestorConfirmationEmailHtml(email: string) {
  return `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0F0F10; color: #FFFFFF; padding: 40px 30px;">
      <div style="padding-bottom: 30px; border-bottom: 1px solid #333333; text-align: left;">
        <img src="https://www.forestoutfitters.com/images/FOREST-Logo.White.svg" alt="FOREST" width="188" style="display: block; margin-bottom: 15px;" />
      </div>
      <div style="padding: 40px 0; text-align: left;">
        <h2 style="color: #FFFFFF; margin: 0 0 25px 0; font-size: 28px; font-weight: 500;">Thank You for Your Interest in Investing</h2>
        <p style="margin: 0 0 20px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">We appreciate your interest in Forest Outfitters. Our team has received your inquiry and will review your information promptly.</p>
        <p style="margin: 0 0 30px 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">A member of our investor relations team will contact you within 3-5 business days to discuss potential opportunities.</p>
        <div style="margin: 30px 0; padding: 20px; border-left: 3px solid #B99C20; background-color: rgba(185, 156, 32, 0.1);">
          <p style="margin: 0; font-style: italic; color: #E0E0E0;">Your investment inquiry has been recorded and is being reviewed by our team.</p>
        </div>
        <p style="margin: 30px 0 0 0; line-height: 1.6; color: #E0E0E0; font-size: 16px;">For immediate assistance with investor relations matters, please contact <a href="mailto:investors@forestoutfitters.com" style="color: #B99C20; text-decoration: none;">investors@forestoutfitters.com</a>.</p>
      </div>
      <div style="padding-top: 30px; border-top: 1px solid #333333; font-size: 12px; color: #999999; text-align: left;">
        <p style="margin: 0 0 5px 0;">© 2025 Forest Outfitters. All rights reserved.</p>
        <p style="margin: 0 0 5px 0;">This email contains confidential information intended only for the recipient.</p>
        <p style="margin: 0;">This email was sent to ${email}</p>
      </div>
    </div>
  `
} 