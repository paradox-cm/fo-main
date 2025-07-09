# Forest Outfitters - Welcome Page

This is a standalone "coming soon" page for Forest Outfitters. It's designed to be completely self-contained and can be deployed independently from the main application.

## Deployment Instructions

1. Copy the entire `/welcome` folder to your hosting provider
2. Set up your domain to point to this folder
3. Make sure the server is configured to serve the `index.html` file

## Structure

- `/welcome/page.tsx` - The main page component
- `/welcome/layout.tsx` - The layout component with font configurations
- `/welcome/components/` - UI components
- `/welcome/styles/` - CSS styles
- `/welcome/public/` - Static assets like images and fonts
- `/welcome/actions/` - Server actions for form handling
- `/welcome/lib/` - Utility functions

## Customization

To customize the page:
1. Edit the content in `page.tsx`
2. Update styles in `styles/welcome.css`
3. Replace images in `public/welcome/images/`
