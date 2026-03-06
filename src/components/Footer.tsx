export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Bobby Goldsmith. Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  )
}
