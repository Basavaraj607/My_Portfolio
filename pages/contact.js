import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const email = 'pebasavarajpalled607@gmail.com'
  const phone = '+91 8310674476'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">You can reach me via email at <a className="text-blue-600" href={`mailto:${email}`}>{email}</a> or phone at <span className="font-medium">{phone}</span>.</p>
        <form className="max-w-md">
          <label className="block mb-2">
            <span className="text-sm text-gray-700">Name</span>
            <input className="mt-1 block w-full border rounded px-3 py-2" placeholder="Your name" />
          </label>
          <label className="block mb-2">
            <span className="text-sm text-gray-700">Email</span>
            <input className="mt-1 block w-full border rounded px-3 py-2" placeholder="you@example.com" defaultValue={email} />
          </label>
          <label className="block mb-4">
            <span className="text-sm text-gray-700">Message</span>
            <textarea className="mt-1 block w-full border rounded px-3 py-2" rows="5" placeholder="Hi..."></textarea>
          </label>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
