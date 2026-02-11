"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import CompareScreenPreview from './home/CompareScreenPreview'

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Placeholder background for future Three.js animation */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[800px] opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, #86d3f6 0%, #8583ef 25%, #ef83b7 50%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
        <div className="absolute inset-0 bg-[#131313]/60" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center pt-32 pb-8 flex-1">
        {/* Rating pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8"
        >
          <Image src="/images/Star.svg" alt="Star" width={14} height={14} />
          <span className="text-sm text-[#aaa6a6]">5 stars on the App Store &amp; Google Play</span>
        </motion.div>

        {/* Headline */}
        <div style={{ perspective: '1500px', perspectiveOrigin: '50% 30%' }}>
          <motion.h1
            initial={{ opacity: 0, rotateX: 90, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[94px] font-bold leading-[1.1] tracking-tight [background-image:linear-gradient(135deg,rgba(255,255,255,0.9),#aaa6a6_50%,rgba(255,255,255,0.9))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
          >
            Classical music,
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, rotateX: 90, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{ transformStyle: 'preserve-3d' }}
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[94px] font-bold leading-[1.1] tracking-tight [background-image:linear-gradient(135deg,rgba(255,255,255,0.9),#aaa6a6_50%,rgba(255,255,255,0.9))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]"
          >
            finally done right.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-[#aaa6a6] max-w-2xl mt-8"
        >
          The free app that organizes classical music for{' '}
          <span style={{ color: '#1ed760' }}>Spotify</span> and{' '}
          <span style={{ color: '#eb4c5f' }}>Apple Music</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-row gap-4 items-center justify-center mt-10"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.tempso.tempso&hl=en&gl=US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/GOOGLE-PLAY.png"
              alt="Get it on Google Play"
              width={200}
              height={80}
              className="h-[50px] w-auto hover:opacity-80 transition-opacity"
            />
          </a>
          <a
            href="https://apps.apple.com/us/app/tempso/id1493511859"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/IOS.png"
              alt="Download on the App Store"
              width={200}
              height={80}
              className="h-[50px] w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-sm text-[#7b7575] mt-4"
        >
          Free to download. Works with your existing subscription.
        </motion.p>

        {/* Phone showcase — constrained */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-16 w-full max-w-[600px]"
        >
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center, #86d3f6, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <Image
            src="/images/iPhone---Hand_1iPhone - Hand.webp"
            alt="Hand holding phone showing Tempso"
            width={1320}
            height={900}
            className="w-full h-auto relative z-[1]"
            priority
          />
          <div className="absolute inset-0 z-[2]" style={{ padding: '2.5% 41% 34% 13%' }}>
            <div className="w-full h-full rounded-[20px] overflow-hidden">
              <CompareScreenPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
