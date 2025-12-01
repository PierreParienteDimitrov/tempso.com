import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import styles from './header.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/shop', label: 'Shop' },
  { href: '/blog', label: 'Blog' },
  { href: '/company', label: 'Company' },
]

export function Header() {
  return (
    <header className={styles.glassEffect + " sticky top-0 h-[60px] z-50"}>
      <div className="container h-full px-8 py-0">
        <nav className="flex justify-between items-center w-full h-full">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Logo.svg"
              alt="Tempso"
              width={120}
              height={30}
              className="w-auto h-auto"
              priority
            />
          </Link>
          
          <div className="flex justify-end flex-1 h-full pr-8">
            <ul className="flex items-center h-full gap-8">
              {navLinks.map((link) => (
                <li key={link.href} className="h-full">
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white border-b-[3px] border-transparent hover:border-white transition-colors duration-600 h-full flex items-center"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Button variant="navbar">
            Open App
          </Button>
        </nav>
      </div>
    </header>
  )
}