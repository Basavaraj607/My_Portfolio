import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  const name = 'Basavaraj R Palled'
  const location = 'Bengaluru, Karnataka, India'
  const email = 'pebasavarajpalled607@gmail.com'
  const phone = '+91 8310674476'
  const summary = `Enthusiastic MCA student with strong skills in Python, Django, and full-stack development. Experienced in building web applications, games, and academic projects with a focus on clean code and problem-solving.`
  const education = [
    { school: 'Dr. Ambedkar Institute of Technology', degree: 'MCA (CGPA: 8.7)', years: '2024 – 2026' },
    { school: 'Karnataka University', degree: 'BCA (CGPA: 8.5)', years: '2021 – 2024' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-4">About</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <p className="text-gray-700 mb-4">{summary}</p>
            <h3 className="text-xl font-semibold mt-6 mb-2">Education</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {education.map((e) => (
                <li key={e.school} className="mb-2">{e.school} — <span className="font-medium">{e.degree}</span> <span className="text-sm text-gray-500">{e.years}</span></li>
              ))}
            </ul>
          </div>
          <aside>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-700">{location}</p>
              <p className="text-gray-700">{phone}</p>
              <p className="text-blue-600"><a href={`mailto:${email}`}>{email}</a></p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
