import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><a className="text-xl font-bold">My Portfolio</a></Link>
        <nav>
          <ul className="flex gap-4">
            <li><Link href="/"><a className="text-gray-700 hover:text-gray-900">Home</a></Link></li>
            <li><Link href="/about"><a className="text-gray-700 hover:text-gray-900">About</a></Link></li>
            <li><Link href="/projects"><a className="text-gray-700 hover:text-gray-900">Projects</a></Link></li>
            <li><Link href="/resume"><a className="text-gray-700 hover:text-gray-900">Resume</a></Link></li>
            <li><Link href="/contact"><a className="text-gray-700 hover:text-gray-900">Contact</a></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
