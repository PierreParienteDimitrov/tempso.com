import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Integration } from '@/components/sections/integration'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Tempso - Your Classical Music Companion',
  description: 'Discover and enjoy classical music like never before with Tempso. Connect to Spotify or Apple Music to explore a well-organized catalog of composers, performers, and compositions.',
  openGraph: {
    title: 'Tempso - Your Classical Music Companion',
    description: 'Discover and enjoy classical music like never before with Tempso. Connect to Spotify or Apple Music to explore a well-organized catalog of composers, performers, and compositions.',
  },
  twitter: {
    title: 'Tempso - Your Classical Music Companion',
    description: 'Discover and enjoy classical music like never before with Tempso. Connect to Spotify or Apple Music to explore a well-organized catalog of composers, performers, and compositions.',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Testimonials */}
        <Testimonials />

        {/* Stats Section */}
        <Stats />

        {/* Features Section */}
        <Features />

        {/* Integration Steps */}
        <Integration />

        {/* Call to Action */}
        <CTA />

        {/* Footer */}
        <footer className="section footer-padding">
          <div className="footer">
            <div className="container">
              <div className="footer-wrapper">
                <Link href="/" aria-current="page" className="footer-brand w-inline-block w--current">
                  <Image src="/images/Logo-Short.png" width={100} height={100} alt="Tempso Logo" className="footer-brand-image" />
                  <div className="footer-paragraph-holder">
                    <p>Tempso is an app created by a team of three classical music lovers with a knack for new technology. <br /><br />Contact us at info@tempso.com</p>
                  </div>
                </Link>
                <div className="footer-content">
                  <div className="footer-block">
                    <div className="title-small">Social media</div>
                    <a href="https://www.facebook.com/tempsomusic" target="_blank" rel="noreferrer" className="footer-link">Facebook</a>
                    <a href="https://www.linkedin.com/company/11050413/admin/feed/posts/" target="_blank" rel="noreferrer" className="footer-link">Linkedin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
