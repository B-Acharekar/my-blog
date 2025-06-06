"use client"

import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          My<span className="text-lime-400">Blogs</span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center gap-6 text-base font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-lime-400 transition-colors">Blogs</Link>
          <Link href="/projects" className="hover:text-lime-400 transition-colors">Projects</Link>
          <Link href="/about" className="hover:text-lime-400 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-lime-400 transition-colors">Contact</Link>
        </nav>
        <div className="">
          <Link href="/sign-in" className="text-lime-400 font-semibold hover:text-lime-900 hover:text-lg hover:underline-offset-2 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
