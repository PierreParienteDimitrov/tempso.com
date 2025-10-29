import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempso - Classical music for all</title>
        <meta name="description" content="Tempso - Classical music for all" />
        <meta property="og:title" content="Tempso - Classical music for all" />
        <meta property="og:description" content="Tempso - Classical music for all" />
        <meta name="twitter:title" content="Tempso - Classical music for all" />
        <meta name="twitter:description" content="Tempso - Classical music for all" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.png" />
      </Head>

      <div>
        <header data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
          <div className="container navbar-container">
            <div className="navbar-holder">
              <div className="navbar-container">
                <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                  <img src="/images/Logo.svg" loading="lazy" alt="Tempso" className="brand-image" />
                </a>
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <div className="nav-menu-link-holder">
                    <div className="nav-menu-link-container">
                      <div className="nav-links">
                        <a href="https://play.google.com/store/apps/details?id=com.tempso.tempso&amp;hl=en&amp;gl=US" target="_blank" rel="noreferrer" className="nav-link w-nav-link">Download for Android</a>
                        <a href="https://apps.apple.com/us/app/tempso/id1493511859" target="_blank" rel="noreferrer" className="nav-link w-nav-link">Download for iOS</a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="section overflow-hidden">
            <div className="container">
              <div className="hero-wrapper">
                <div className="hero-text-wrapper">
                  <div className="perspective">
                    <div className="animate-text-01" style={{ transform: 'translate3d(0, 30px, 0) rotateX(90deg)', transformStyle: 'preserve-3d', opacity: 0 }}>
                      <h1 className="hero-text">Rediscover</h1>
                    </div>
                  </div>
                  <div className="perspective">
                    <div className="animate-text-03" style={{ transform: 'translate3d(0, 30px, 0) rotateX(90deg)', transformStyle: 'preserve-3d', opacity: 0 }}>
                      <h1 className="hero-text">classical music</h1>
                    </div>
                  </div>
                  <div className="perspective">
                    <div className="animate-text-05" style={{ transform: 'translate3d(0, 30px, 0) rotateX(90deg)', transformStyle: 'preserve-3d', opacity: 0 }}>
                      <h1 className="hero-text">with</h1>
                    </div>
                  </div>
                  <div className="perspective">
                    <div className="animate-text-06" style={{ transform: 'translate3d(0, 30px, 0)', opacity: 0, transformStyle: 'preserve-3d' }}>
                      <h1 className="hero-text hero-bottom-margin">Tempso</h1>
                    </div>
                  </div>
                </div>

                <div className="hero-section-app-container">
                  <div className="shadow" />
                  <div className="hero-section-phone-holder" style={{ opacity: 0, transform: 'translate3d(0, 500px, 0)' }}>
                    <img src="/images/iPhone---Hand_1iPhone---Hand.webp" loading="eager" alt="A hand holding a phone showing a screen from the Tempso app" className="hero-section-phone-image" />
                    <div className="hero-section-phone-screenshot-holder">
                      <img src="/images/Hero-screen.png" loading="eager" alt="" className="hero-section-phone-screenshot-image" />
                    </div>
                    <div className="gradient" />
                  </div>
                </div>
              </div>

              <div className="hero-description-holder">
                <div className="hero-description">
                  <div className="fade-in-on-scroll">
                    <p className="paragraph-2">Tempso is a classical music wrapper app for <br /><span className="text-span-2">Spotify</span> and <span className="text-span-3">Apple Music</span>. </p>
                    <p className="paragraph center">Whether you&apos;re an expert in classical music or a first-time listener, browse a well-organized catalog of composers, performers, compositions, albums, and playlists. Connect Tempso to your Spotify or Apple Music account to explore the music at no additional cost!</p>
                  </div>
                  <div className="fade-in-on-scroll">
                    <div className="w-layout-hflex flex-block">
                      <a href="https://play.google.com/store/apps/details?id=com.tempso.tempso&amp;hl=en&amp;gl=US" target="_blank" rel="noreferrer" className="w-inline-block"><img src="/images/GOOGLE-PLAY.png" loading="lazy" width="200" height="80" alt="" className="image" /></a>
                      <a href="https://apps.apple.com/us/app/tempso/id1493511859" target="_blank" rel="noreferrer" className="w-inline-block"><img src="/images/IOS.png" loading="lazy" width="200" height="80" alt="" className="image-2" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Remaining sections: quotes, features, stats, CTA, footer */}
          <section className="section overflow-hidden">
            <div className="container center">
              <p className="paragraph-2 center">First-time listeners and experts alike love Tempso</p>
              <div className="quote-cards-holder">
                <div className="career-cards" style={{ opacity: 0 }}>
                  <div className="w-layout-hflex stars">
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                  </div>
                  <div className="career-content">
                    <div className="career-description">A very useful app with an excellent UI. A must have if you have Spotify and you like classical music. Thanks for making this.</div>
                    <div className="quote-date">December 25, 2023 | Google Play</div>
                  </div>
                </div>

                <div className="career-cards no-stars" style={{ opacity: 0 }}>
                  <div className="career-content">
                    <div className="career-description">Holy s*** this is such a game changer!!! Thank you so much!</div>
                    <a href="https://www.reddit.com/r/classicalmusic/comments/10z7c4z/tempso_a_free_classical_app_for_spotify_and_apple/" target="_blank" rel="noreferrer" className="w-inline-block">
                      <div className="quote-date quote-link">Reddit</div>
                    </a>
                  </div>
                </div>

                <div className="career-cards" style={{ opacity: 0 }}>
                  <div className="w-layout-hflex stars">
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                    <img src="/images/Star.svg" loading="lazy" alt="" className="start-icon" />
                  </div>
                  <div className="career-content">
                    <div className="career-description">Really nice and useful for either new or veteran listeners/lovers of classical music. This app makes recordings easier to find and enjoy.</div>
                    <div className="quote-date">November 21, 2023 | App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="title-wrapper">
                <div className="title-left">
                  <div className="title-secondary">Music library</div>
                  <h3 className="no-marings">More than 2 million tracks organized into a clean classical music library</h3>
                </div>
              </div>
              <div className="card-section-wrapper">
                <div className="grey-cards">
                  <div className="first-card-container bottom-margin">
                    <div className="title-card-holder">
                      <div className="title-cards">Browse<br/>composers &amp; performers </div>
                      <p className="paragraph">Browse thousands of performers, organized by instruments, and 300+ composers sorted by eras.</p>
                    </div>
                    <img className="card-image" src="/images/Artists.png" alt="Two Tempso app screens showing a composer and a performer" loading="lazy" />
                  </div>
                  <div className="first-card-container bottom-margin">
                    <div className="title-card-holder">
                      <div className="title-cards">Compare recordings</div>
                      <p className="paragraph">Switch seamlessly between various recordings of the same composition to find your favorite interpretation.</p>
                    </div>
                    <img className="card-image" src="/images/Compositions.png" alt="Two Tempso app screens showing a list of compositions and a list of recording for a composition" loading="lazy" />
                  </div>
                  <div className="first-card-container bottom-margin">
                    <div className="title-card-holder">
                      <div className="title-cards">Explore playlists &amp; radios</div>
                      <p className="paragraph">Dive deep into the classical repertoire with our curated playlists, and enjoy automated radio stations organized by genre, composer, and performer.</p>
                    </div>
                    <img className="card-image" src="/images/Playlists.png" alt="Two Tempso app screens showing playlists and radios" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container">
              <div className="title-wrapper">
                <div className="title-left">
                  <div className="title-secondary">Free integration</div>
                  <h3 className="no-marings">Tempso works like a remote control for your current streaming app</h3>
                </div>
              </div>
              <div className="sticky-phone-wrapper">
                <div className="sticky-phone-holder">
                  <div className="sticky-content-holder">
                    <div className="sticky-content-container">
                      <div className="div-block-2">
                        <div className="sticky-title border">1</div>
                      </div>
                      <div className="sticky-title">Select your preferred streaming service.</div>
                    </div>
                    <div className="sticky-content-container">
                      <div className="sticky-title border">2</div>
                      <div className="sticky-title">Link Tempso to your account.</div>
                    </div>
                    <div className="sticky-content-container">
                      <div className="sticky-title border">3</div>
                      <div className="sticky-title">Stream your music directly through Tempso!</div>
                    </div>
                  </div>
                  <div className="sticky-phone-container">
                    <div className="sticky-phone">
                      <div className="hero-section-phone-holder-2">
                        <img src="/images/Provider.png" loading="lazy" alt="A screen showing the available providers for Tempso" className="hero-section-phone-image" />
                        <div className="hero-section-phone-screenshot-holder-2">
                          <img src="/images/Home_1Home.webp" loading="lazy" alt="" className="hero-section-phone-screenshot-image-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="slider-overflow-hidden">
              <div className="container">
                <div className="title-wrapper">
                  <div className="title-left">
                    <div className="title-secondary">Powered by machine learning</div>
                    <h3 className="no-marings">Discover a unique set of classical music data and metadata</h3>
                  </div>
                </div>
                <div className="feautre-slider-holder">
                  <div className="feature-slider-wrapper w-slider" data-delay={4000} data-animation="slide" data-autoplay="false">
                    <div className="feature-slider-mask w-slider-mask">
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Movements</div>
                            <div className="text-block">View the detailed movement structure for each composition.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Classical eras</div>
                            <div className="text-block">9 eras spanning more than 500 years of music.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Instruments</div>
                            <div className="text-block">Organized by categories like keyboard, voice, etc.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Genres</div>
                            <div className="text-block">Linked to compositions, with genre-specific radios to explore the classical collection.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Genre definitions</div>
                            <div className="text-block">To enhance your classical music understanding and discovery.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title">Recording labels</div>
                            <div className="text-block">Filter albums by your favorite label to navigate the classical repertoire.</div>
                          </div>
                        </div>
                      </div>
                      <div className="feature-slide w-slide">
                        <div className="feature-slide-content">
                          <div className="feature-slider-content">
                            <div className="feature-slider-title"># of recordings</div>
                            <div className="text-block">For each composition to compare from.</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="left-arrow w-slider-arrow-left">
                      <div className="slider-arrow-circle"><img src="/images/White-Arrow.svg" loading="lazy" alt="Chevron icon" className="slider-arrow-icon left" /></div>
                    </div>
                    <div className="right-arrow w-slider-arrow-right">
                      <div className="slider-arrow-circle"><img src="/images/White-Arrow.svg" loading="lazy" alt="Chevron icon" className="slider-arrow-icon" /></div>
                    </div>
                    <div className="gradient-slider" />
                    <div className="gradient-slider left" />
                    <div className="hide w-slider-nav w-round w-num" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section overflow-hidden">
            <div className="container center">
              <div className="stats-holder">
                <div className="w-layout-grid grid">
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">700k+</div>
                    <div className="stats-paragraph">Recordings</div>
                  </div>
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">70k+</div>
                    <div className="stats-paragraph">Performers</div>
                  </div>
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">2M+</div>
                    <div className="stats-paragraph">Tracks</div>
                  </div>
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">300+</div>
                    <div className="stats-paragraph">Composers</div>
                  </div>
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">37k+</div>
                    <div className="stats-paragraph">Compositions</div>
                  </div>
                  <div className="stats-container" style={{ opacity: 0 }}>
                    <div className="stats-title">160k+</div>
                    <div className="stats-paragraph">Albums</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="Get-Started" className="section grey-section">
            <div className="container">
              <div className="white-line" />
              <div className="center-title">
                <div className="center-text">
                  <div className="title-left">
                    <div className="fade-in-on-scroll">
                      <div className="title-secondary">Download Tempso</div>
                    </div>
                    <div className="fade-in-on-scroll">
                      <h3 className="no-marings">Embark today on your classical music journey!</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-holder">
                <div className="cta-container">
                  <div className="cta-form-holder">
                    <div className="cta-heading-holder">
                      <div className="fade-in-on-scroll">
                        <div className="cta-heading">Download tempso</div>
                      </div>
                    </div>
                    <div className="w-layout-hflex flex-block-left">
                      <a href="https://play.google.com/store/apps/details?id=com.tempso.tempso&amp;hl=en&amp;gl=US" target="_blank" rel="noreferrer" className="w-inline-block"><img src="/images/GOOGLE-PLAY.png" loading="lazy" width="200" height="80" alt="" className="image" /></a>
                      <a href="https://apps.apple.com/us/app/tempso/id1493511859" target="_blank" rel="noreferrer" className="w-inline-block"><img src="/images/IOS.png" loading="lazy" width="200" height="80" alt="" className="image-2" /></a>
                    </div>
                  </div>
                  <div className="cta-phone-holder">
                    <div className="cta-section-phone"><img src="/images/iPhone---Hand_1iPhone---Hand.webp" loading="eager" alt="A hand holding a phone showing a screen from the Tempso app" className="hero-section-phone-image" />
                      <div className="hero-section-phone-screenshot-holder"><img src="/images/Intro.png" loading="eager" alt="" className="hero-section-phone-screenshot-image" /></div>
                    </div>
                  </div>
                  <img src="/images/CTA-BG.jpg" loading="lazy" alt="" className="cta-bg" />
                </div>
              </div>
            </div>
          </section>

          <section className="section overflow-hidden">
            <div className="container center">
              <p className="paragraph-2 center">They talk about us</p>
              <div className="articles">
                <a href="https://www.musicbusinessworldwide.com/apple-solve-classical-musics-streaming-problem/" target="_blank" rel="noreferrer" className="career-cards musicbusiness w-inline-block" />
                <a href="https://serenademagazine.com/tempso-brings-state-of-the-art-classical-streaming-interface-to-spotify-and-apple-music-users/" target="_blank" rel="noreferrer" className="career-cards serenade w-inline-block" />
              </div>
            </div>
          </section>

          <footer className="section footer-padding">
            <div className="footer">
              <div className="container">
                <div className="footer-wrapper">
                  <a href="/" aria-current="page" className="footer-brand w-inline-block w--current"><img src="/images/Logo-Short.png" loading="lazy" alt="" className="footer-brand-image" />
                    <div className="footer-paragraph-holder">
                      <p>Tempso is an app created by a team of three classical music lovers with a knack for new technology. <br /><br />Contact us at info@tempso.com</p>
                    </div>
                  </a>
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
    </>
  )
}
