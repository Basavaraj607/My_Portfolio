import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">Add your bio and skills here.</p>
      </main>
      <Footer />
    </div>
  )
}
