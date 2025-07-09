import React from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="max-w-2xl mx-auto px-4 pt-32 pb-16 text-white bg-[#0A0A0B] min-h-screen">
        <h1 className="text-3xl md:text-4xl font-normal mb-8 text-center">LEGAL & POLICIES</h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-sm text-gray-400 mb-2">Last Updated: 7/9/2025</p>
          <p className="mb-4">Forest Outfitters ("us", "we", or "our") operates the www.forestoutfitters.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Information Collection and Use</h3>
          <p className="mb-4">We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to, email address, first name and last name, phone number, address, cookies, and usage data.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Use of Data</h3>
          <p className="mb-4">Forest Outfitters uses the collected data for various purposes: to provide and maintain the Service; to notify you about changes to our Service; to allow you to participate in interactive features of our Service when you choose to do so; to provide customer care and support; to provide analysis or valuable information so that we can improve the Service; to monitor the usage of the Service; to detect, prevent and address technical issues.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Cookies</h3>
          <p className="mb-4">We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <p className="text-sm text-gray-400 mb-2">Last Updated: 7/9/2025</p>
          <p className="mb-4">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the www.forestoutfitters.com website (the "Service") operated by Forest Outfitters ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Accounts</h3>
          <p className="mb-4">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Intellectual Property</h3>
          <p className="mb-4">The Service and its original content, features, and functionality are and will remain the exclusive property of Forest Outfitters and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">Limitation Of Liability</h3>
          <p className="mb-4">In no event shall Forest Outfitters, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-sm text-gray-400 mb-2">Last Updated: 7/9/2025</p>
          <p className="mb-4">The information provided by Forest Outfitters ("we," "us," or "our") on www.forestoutfitters.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
          <p className="mb-4">Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
          <h3 className="text-lg font-semibold mt-6 mb-2">External Links Disclaimer</h3>
          <p className="mb-4">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
        </section>
      </main>
      <Footer />
    </>
  );
} 