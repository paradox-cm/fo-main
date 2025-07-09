import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-white/60 hover:text-primary font-mono text-sm">
              <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>
          </div>

          <SectionHeading title="Privacy Policy" subtitle="Last Updated: March 20, 2025" />

          <div className="prose prose-invert prose-gold max-w-none">
            <h2>Introduction</h2>
            <p>
              Forest Outfitters ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website, use our
              services, or join our waitlist.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our website or services, you acknowledge
              that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we collect may include:</p>

            <h3>Personal Data</h3>
            <p>
              When you sign up for our waitlist, create an account, or make a purchase, we may collect personally
              identifiable information, such as:
            </p>
            <ul>
              <li>Your name</li>
              <li>Email address</li>
              <li>Mailing address</li>
              <li>Phone number</li>
              <li>Payment information</li>
            </ul>

            <h3>Waitlist Information</h3>
            <p>
              When you join our waitlist, we collect your email address and any additional information you choose to
              provide. This information is used to:
            </p>
            <ul>
              <li>Notify you when our products become available</li>
              <li>Send you updates about Forest Outfitters</li>
              <li>Provide you with relevant marketing communications</li>
              <li>Understand our audience demographics</li>
            </ul>

            <h3>Derivative Data</h3>
            <p>
              Our servers automatically collect information when you access our website, such as your IP address,
              browser type, operating system, access times, and the pages you have viewed.
            </p>

            <h2>Use of Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send promotional communications, such as special offers or other news about products and events</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              We may disclose your information where required by law or when we believe disclosure is necessary to
              protect our rights, property, or safety, or that of our users or others.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third-party service providers who perform services on our behalf, such
              as payment processing, data analysis, email delivery, hosting services, and customer service.
            </p>

            <h3>Marketing Communications</h3>
            <p>With your consent, we may share your information with third parties for marketing purposes.</p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information.
              While we have taken reasonable steps to secure the information you provide to us, please be aware that no
              security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
            </p>

            <h2>Your Choices About Your Information</h2>
            <p>You may at any time:</p>
            <ul>
              <li>
                Opt-out of receiving future emails from us by following the unsubscribe instructions in any email you
                receive from us
              </li>
              <li>Request access to the personal information we hold about you</li>
              <li>Request that we correct or delete your personal information</li>
            </ul>

            <h2>Waitlist Specific Provisions</h2>
            <p>
              When you join our waitlist by providing your email address, you are consenting to receive communications
              from us about:
            </p>
            <ul>
              <li>Product availability and launch dates</li>
              <li>Exclusive pre-order opportunities</li>
              <li>Special promotions for waitlist members</li>
              <li>Company updates and news</li>
            </ul>
            <p>
              You may remove yourself from the waitlist at any time by clicking the unsubscribe link in any of our
              emails or by contacting us directly.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect or solicit
              personal information from children. If we learn that we have collected personal information from a child,
              we will delete that information as quickly as possible.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
              "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about how
              we are protecting your information.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <address>
              Forest Outfitters
              <br />
              123 Tactical Drive
              <br />
              Bozeman, MT 59718
              <br />
              Email: privacy@forestoutfitters.com
            </address>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="primary">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
