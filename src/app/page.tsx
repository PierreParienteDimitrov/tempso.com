import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/layout/header'
import { Hero } from '@/components/sections/hero'
import { MusicLibrary } from '@/components/sections/music-library'
import { Integration } from '@/components/sections/integration'
import { MachineLearning } from '@/components/sections/machine-learning'
import { Stats } from '@/components/sections/stats'
import { Testimonials } from '@/components/sections/testimonials'
import { Press } from '@/components/sections/press'
import { CTA } from '@/components/sections/cta'

export const metadata: Metadata = {
  title: 'Tempso - Classical music for all',
  description: 'Tempso - Classical music for all',
  openGraph: {
    title: 'Tempso - Classical music for all',
    description: 'Tempso - Classical music for all',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempso - Classical music for all',
    description: 'Tempso - Classical music for all',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="relative">
        {/* Hero Section */}
        <Hero />

        {/* Testimonials */}
        <Testimonials />

        {/* Music Library (formerly Features) */}
        <MusicLibrary />

        {/* Integration Steps */}
        <Integration />

        {/* Machine Learning */}
        <MachineLearning />

        {/* Stats Section */}
        <Stats />

        {/* Call to Action */}
        <CTA />

        {/* Press Section */}
        <Press />

        {/* Footer */}
        <footer className="section footer-padding bg-black text-white py-12">
          <div className="footer">
            <div className="container mx-auto px-4">
              <div className="footer-wrapper flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <Link href="/" aria-current="page" className="footer-brand w-inline-block w--current flex items-center gap-4">
                  <Image src="/images/Logo-Short.png" width={60} height={60} alt="Tempso Logo" className="footer-brand-image" />
                  <div className="footer-paragraph-holder max-w-md">
                    <p className="text-sm text-gray-400 leading-relaxed">Tempso is an app created by a team of three classical music lovers with a knack for new technology. <br /><br />Contact us at info@tempso.com</p>
                  </div>
                </Link>
                <div className="footer-content">
                  <div className="footer-block">
                    <div className="title-small text-lg font-semibold mb-4">Social media</div>
                    <div className="flex gap-6">
                      <a href="https://www.facebook.com/tempsomusic" target="_blank" rel="noreferrer" className="footer-link text-gray-400 hover:text-white transition-colors">Facebook</a>
                      <a href="https://www.linkedin.com/company/11050413/admin/feed/posts/" target="_blank" rel="noreferrer" className="footer-link text-gray-400 hover:text-white transition-colors">Linkedin</a>
                    </div>
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
