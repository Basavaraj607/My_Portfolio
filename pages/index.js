import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const name = 'Basavaraj R Palled'
  const title = 'Full Stack Developer'
  const summary = `Enthusiastic MCA student with strong skills in Python, Django, and full-stack development. Experienced in building web applications, games, and academic projects with a focus on clean code and problem-solving.`

  return (
    <>
      <Head>
        <title>{name} — {title}</title>
        <meta name="description" content="Portfolio - Full Stack Developer & Designer" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 py-16 flex-1">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{name}</h1>
              <p className="text-xl text-gray-700 mb-3">{title}</p>
              <p className="text-gray-600">{summary}</p>
              <div className="mt-6">
                <a href="/resume" className="inline-block bg-blue-600 text-white px-4 py-2 rounded mr-3">View Resume</a>
                <a href="/projects" className="inline-block border px-4 py-2 rounded">See Projects</a>
              </div>
            </div>
            <div>
              <div className="w-full h-56 bg-gray-100 rounded flex items-center justify-center text-gray-400">Profile image placeholder</div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
