"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import styles from './hero.module.css'
import CompareScreenPreview from './home/CompareScreenPreview'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className={styles.premiumIconBlur}></div>
        <div className={styles.shadowLarge}></div>
      </div>

      <div className="container">
        {/* Hero Wrapper */}
        <div className="flex flex-col items-center pt-[120px]" style={{ perspective: '1500px', perspectiveOrigin: '50% 30%' }}>
          {/* Heading */}
          <div className="text-center mb-12 max-w-[1100px] flex flex-wrap justify-center items-center gap-x-[13px] gap-y-0 [&>*]:gap-x-[5px] sm:[&>*]:gap-x-[13px]">
            <motion.div
              initial={{ opacity: 0, rotateX: 90, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
            >
              <h1 className="text-[45px] sm:text-[60px] md:text-[77px] lg:text-[94px] font-bold leading-[1.3] m-0 [background-image:linear-gradient(135deg,rgba(255,255,255,0.5),#bbb_50%,rgba(255,255,255,0.5))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                Rediscover
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateX: 90, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
            >
              <h1 className="text-[45px] sm:text-[60px] md:text-[77px] lg:text-[94px] font-bold leading-[1.3] m-0 [background-image:linear-gradient(135deg,rgba(255,255,255,0.5),#bbb_50%,rgba(255,255,255,0.5))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                classical music
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateX: 90, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
            >
              <h1 className="text-[45px] sm:text-[60px] md:text-[77px] lg:text-[94px] font-bold leading-[1.3] m-0 [background-image:linear-gradient(135deg,rgba(255,255,255,0.5),#bbb_50%,rgba(255,255,255,0.5))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                with
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotateX: 90, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ transformStyle: 'preserve-3d', perspective: '1500px' }}
            >
              <h1 className="text-[45px] sm:text-[60px] md:text-[77px] lg:text-[94px] font-bold leading-[1.3] m-0 mb-8 [background-image:linear-gradient(135deg,rgba(255,255,255,0.5),#bbb_50%,rgba(255,255,255,0.5))] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                Tempso
              </h1>
            </motion.div>
          </div>

          {/* Phone Section */}
          <div className="relative z-[1] flex justify-center items-center w-full max-w-[820px] lg:translate-x-[105px]">
            <motion.div
              initial={{ opacity: 0, y: 500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative z-[1] w-full"
            >
              {/* Hand holding phone */}
              <Image
                src="/images/iPhone---Hand_1iPhone - Hand.webp"
                alt="A hand holding a phone showing a screen from the Tempso app"
                width={1320}
                height={900}
                className="w-full h-auto relative z-[1]"
                priority
              />
              {/* App screenshot overlay */}
              <div className="absolute inset-0 z-[2]" style={{ padding: '2.5% 41% 34% 13%' }}>
                <div className="w-full h-full rounded-[20px] overflow-hidden">
                  <CompareScreenPreview />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Description Section */}
        <div className="hero-description-holder relative z-[1] flex flex-col items-center">
          <div className="hero-description">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="fade-in-on-scroll"
            >
              <p className="paragraph-2 text-[32px] font-semibold text-center mb-6">
                Tempso is a classical music wrapper app for <br />
                <span className="text-span-2" style={{ color: '#1ed760' }}>Spotify</span> and{' '}
                <span className="text-span-3" style={{ color: '#eb4c5f' }}>Apple Music</span>.
              </p>
              <p className="paragraph center w-[75%] mx-auto text-center text-base md:text-lg text-gray-300 mb-10">
                Whether you&apos;re an expert in classical music or a first-time listener, browse a well-organized catalog of composers, performers, compositions, albums, and playlists. Connect Tempso to your Spotify or Apple Music account to explore the music at no additional cost!
              </p>
            </motion.div>

            {/* Download Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="fade-in-on-scroll"
            >
              <div className="w-layout-hflex flex-block flex flex-row gap-4 items-center justify-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tempso.tempso&hl=en&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block inline-block"
                >
                  <Image
                    src="/images/GOOGLE-PLAY.png"
                    alt="Get it on Google Play"
                    width={200}
                    height={80}
                    className="image w-[200px] h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/tempso/id1493511859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-inline-block inline-block"
                >
                  <Image
                    src="/images/IOS.png"
                    alt="Download on the App Store"
                    width={200}
                    height={80}
                    className="image-2 w-[200px] h-auto hover:opacity-80 transition-opacity"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
