"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Testimonials', href: '#testimonials' },
]

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#131313]/60 backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="text-white font-headings font-semibold text-lg tracking-tight">
          Tempso
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#aaa6a6] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://apps.apple.com/us/app/tempso/id1493511859"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#131313] rounded-full px-5 py-2 text-sm font-medium hover:bg-white/90 transition-colors duration-200"
        >
          Download
        </a>
      </div>
    </motion.nav>
  )
}
