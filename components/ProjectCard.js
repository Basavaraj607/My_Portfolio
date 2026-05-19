export default function ProjectCard({ project }) {
  return (
    <article className="p-6 border rounded-lg hover:shadow transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((t) => (
          <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}
