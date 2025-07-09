import Link from "next/link"

export default function EmailsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Email Templates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/emails/waitlist" className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
          <h2 className="text-xl font-semibold mb-2">Waitlist Email</h2>
          <p className="text-gray-300">Confirmation email for waitlist signups</p>
        </Link>

        <Link href="/emails/contact" className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
          <h2 className="text-xl font-semibold mb-2">Contact Form Email</h2>
          <p className="text-gray-300">Confirmation email for contact form submissions</p>
        </Link>

        <Link href="/emails/investor" className="block p-6 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
          <h2 className="text-xl font-semibold mb-2">Investor Email</h2>
          <p className="text-gray-300">Confirmation email for investor inquiries</p>
        </Link>
      </div>
    </div>
  )
}
