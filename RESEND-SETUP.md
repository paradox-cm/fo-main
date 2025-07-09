# Resend Email Setup

## Current Status

The site is currently using Resend in **testing mode**, which only allows sending emails to the owner's email address (christopher.mena@icloud.com).

## To Enable Full Email Functionality

1. **Verify a domain at [resend.com/domains](https://resend.com/domains)**
   - Follow the DNS verification steps provided by Resend
   - This typically involves adding TXT, MX, and DKIM records to your domain

2. **Update the server actions**
   - Once your domain is verified, update the `from` address in all server actions to use your verified domain
   - For example: `from: "Forest Outfitters <hello@yourdomain.com>"`
   - Set `IS_TESTING_MODE = false` in all server action files

3. **Update the API key (optional)**
   - If you want to move from testing to production, you may need to generate a new API key
   - Replace the current API key with your production API key in all server action files

## Files to Update

Once domain verification is complete, update the following files:

- `app/actions/waitlist.ts`
- `app/actions/newsletter.ts`
- `app/actions/investor-contact.ts`
- `app/actions/contact.ts`
- `app/welcome/actions/newsletter.ts`
- `app/welcome/actions/waitlist.ts`

## Testing

In the current testing mode, all form submissions will send a notification to christopher.mena@icloud.com with the submitted information, but will not send confirmation emails to users.

The success message will still appear to users, but they will not receive an actual email until domain verification is complete and the code is updated.
