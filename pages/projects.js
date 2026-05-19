import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'

const sampleProjects = [
  { id: 1, title: 'Project One', desc: 'Short description', tech: ['React', 'Next.js'] },
]

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-16 flex-1">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {sampleProjects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
