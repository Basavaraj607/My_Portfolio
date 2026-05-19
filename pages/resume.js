import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Resume() {
  const pdfPath = '/Resume/basavaraj_asc.pdf'
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <p className="text-gray-600 mb-4">Download or preview my resume below.</p>
        <a className="inline-block bg-blue-600 text-white px-4 py-2 rounded mb-6" href={pdfPath} download>
          Download Resume
        </a>

        <div className="border rounded overflow-hidden" style={{height: '800px'}}>
          <iframe src={pdfPath} className="w-full h-full" title="Resume preview"></iframe>
        </div>
      </main>
      <Footer />
    </div>
  )
}
