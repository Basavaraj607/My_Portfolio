import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio - Frontend Developer & Designer" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto px-6 py-16 flex-1">
          <h1 className="text-4xl font-bold mb-4">Hello — I'm a Frontend Developer & Designer</h1>
          <p className="text-lg text-gray-600">I build beautiful and performant web experiences using Next.js and Tailwind CSS.</p>
        </main>
        <Footer />
      </div>
    </>
  )
}
