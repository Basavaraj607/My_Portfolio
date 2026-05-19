export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-6">
      <div className="container mx-auto px-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Basavaraj R Palled. Built with Next.js.
      </div>
    </footer>
  )
}
