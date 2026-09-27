import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import Career from './components/Career'
import Travel from './components/Travel'
import PhotoButton from './components/PhotoButton'
import HouseBanners from './components/HouseBanners'
import FantasyLandscape from './components/FantasyLandscape'
import FantasyAtmosphere from './components/FantasyAtmosphere'
import useCinematicMotion from './hooks/useCinematicMotion'
import { passions, profile } from './data/portfolio'
import type { Passion } from './data/portfolio'
import { personalPhotos } from './data/photos'
import './App.css'

function Arrow({ direction = 'up', size = 20 }: { direction?: 'up' | 'down' | 'right'; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {direction === 'up' ? <path d="M5 19 19 5M5 5h14v14" /> : direction === 'down' ? <path d="M12 3v18m-7-7 7 7 7-7" /> : <path d="M3 12h18m-7-7 7 7-7 7" />}
  </svg>
}

function PassionVisual({ passion }: { passion: Passion }) {
  if (passion.id === 'dragons') return <FantasyLandscape />
  if (passion.id === 'quantum') return <div className="passion-image quantum-visual" aria-hidden="true">
    <svg viewBox="0 0 1200 440" role="presentation">
      <defs>
        <radialGradient id="quantum-core" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#f1d59a" /><stop offset=".28" stopColor="#b99050" /><stop offset="1" stopColor="#b99050" stopOpacity="0" /></radialGradient>
        <linearGradient id="quantum-line" x1="0" x2="1"><stop stopColor="#85bbba" stopOpacity=".1" /><stop offset=".5" stopColor="#bfe3df" stopOpacity=".8" /><stop offset="1" stopColor="#85bbba" stopOpacity=".1" /></linearGradient>
      </defs>
      <g className="quantum-grid-lines"><path d="M0 90h1200M0 220h1200M0 350h1200M170 0v440M430 0v440M770 0v440M1030 0v440" /></g>
      <g className="quantum-system">
        <circle className="quantum-halo" cx="760" cy="205" r="96" fill="url(#quantum-core)" />
        <g className="quantum-ring quantum-ring-a"><ellipse cx="760" cy="205" rx="285" ry="85" /><circle cx="489" cy="177" r="8" /></g>
        <g className="quantum-ring quantum-ring-b"><ellipse cx="760" cy="205" rx="285" ry="85" transform="rotate(60 760 205)" /><circle cx="822" cy="-54" r="7" transform="rotate(60 760 205)" /></g>
        <g className="quantum-ring quantum-ring-c"><ellipse cx="760" cy="205" rx="285" ry="85" transform="rotate(-60 760 205)" /><circle cx="1015" cy="161" r="6" transform="rotate(-60 760 205)" /></g>
        <circle className="quantum-core" cx="760" cy="205" r="27" />
      </g>
      <path className="quantum-wave" d="M45 304c58 0 58-88 116-88s58 88 116 88 58-88 116-88 58 88 116 88" />
    </svg>
  </div>
  if (passion.id === 'garage') return <img className="passion-image garage-photo" src={personalPhotos.driving.src} alt="" width={personalPhotos.driving.width} height={personalPhotos.driving.height} loading="lazy" />
  if (passion.id === 'messi' || passion.id === 'sanju') {
    return <div className={'passion-image sports-image sports-' + passion.id} style={{ backgroundImage: 'url(' + passion.image + ')' }} aria-hidden="true" />
  }
  return <img className="passion-image" src={passion.image} alt="" loading="lazy" />
}

function PassionGrid({ items, onExplore }: { items: Passion[]; onExplore: (item: Passion, trigger: HTMLButtonElement) => void }) {
  return <div className="world-grid">
    {items.map((item, index) => <button type="button" className={'film-card film-' + item.id} key={item.id} onClick={(event) => onExplore(item, event.currentTarget)} aria-label={'Explore ' + item.name} data-ambient-scene={item.id === 'dragons' ? '' : undefined} data-reveal style={{ '--reveal-delay': Math.min(index % 3, 2) * 80 + 'ms' } as CSSProperties}>
      <PassionVisual passion={item} />
      {item.id === 'dragons' && <FantasyAtmosphere variant="winter" />}
      <span className="card-shade" />
      <span className="card-top"><span>{item.genre}</span><span className="card-index">/{item.number}</span></span>
      <span className="card-copy"><span className="card-title">{item.title.map((line) => <span key={line}>{line}</span>)}</span><span className="card-name">{item.name}</span><span className="card-caption">{item.line}</span></span>
      <span className="card-open"><Arrow size={20} /></span>
    </button>)}
  </div>
}

const tapeWords = ['DRAGONS', 'RACE WEEKENDS', 'LEFT-FOOT MAGIC', 'QUIET FIRE', 'OPEN ROADS', 'QUANTUM COMPUTING']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [motionEnabled, setMotionEnabled] = useState(true)
  const { prefersReducedMotion } = useCinematicMotion(motionEnabled)
  const effectiveMotion = motionEnabled && !prefersReducedMotion
  const [passion, setPassion] = useState<Passion | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const lastTrigger = useRef<HTMLElement | null>(null)
  const [activeNav, setActiveNav] = useState('')
  const modalOpen = Boolean(passion)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveNav(entry.target.id) })
    }, { rootMargin: '-15% 0px -65% 0px' })
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        menuToggleRef.current?.focus()
        setMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!modalOpen) return
    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [modalOpen])

  function rememberTrigger(element: HTMLElement) { lastTrigger.current = element }
  function openPassion(item: Passion, trigger: HTMLButtonElement) {
    rememberTrigger(trigger)
    setPassion(item)
  }
  function closeDialog() {
    dialogRef.current?.close()
    setPassion(null)
    lastTrigger.current?.focus({ preventScroll: true })
  }

  return <div className={'cinema-site' + (effectiveMotion ? ' motion-enabled' : '')}>
    <a href="#main" className="skip-link">Skip to content</a>
    <div className="film-grain" aria-hidden="true" />
    <div className="reading-progress" aria-hidden="true" />
    <header className="site-header">
      <nav className={'site-nav' + (menuOpen ? ' is-open' : '')} id="main-navigation" aria-label="Main navigation">
        {[['career', 'Career'], ['travel', 'Travel'], ['about', 'The human'], ['after-hours', 'My universe']].map(([id, label]) => <a key={id} href={'#' + id} aria-current={activeNav === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let’s talk <Arrow size={14} /></a>
      </nav>
      <div className="header-controls">
        <button className="motion-toggle" type="button" aria-pressed={effectiveMotion} disabled={prefersReducedMotion} onClick={() => setMotionEnabled(!motionEnabled)} title={prefersReducedMotion ? 'Reduced motion follows your system preference' : 'Toggle cinematic motion'}><span className="equalizer" aria-hidden="true"><i /><i /><i /></span><span>Motion {effectiveMotion ? 'on' : 'off'}</span></button>
        <button className="menu-toggle" ref={menuToggleRef} type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      </div>
    </header>

    <main id="main">
      <section id="home" className="hero" aria-labelledby="hero-title" data-ambient-scene>
        <div className="hero-scene" data-parallax="0.13"><img src={`${import.meta.env.BASE_URL}images/dragon-poster.png`} alt="Original fantasy artwork of a dragon above a storm-dark coastal fortress" fetchPriority="high" /></div>
        <div className="hero-shade" />
        <FantasyAtmosphere variant="fire" />
        <div className="hero-edition"><span><i /> AN ORIGINAL HUMAN EXPERIENCE</span><span>VOL. 01 — ONGOING</span></div>
        <div className="hero-content">
          <h1 id="hero-title">ARJUN<span>C N</span></h1>
          <div className="hero-subline"><p>NO SINGLE GENRE.<br /><span>JUST A VERY PERSONAL STORY.</span></p><span className="hero-stamp">CODE<br />CHAOS<br />DRAGONS ↗</span></div>
          <div className="hero-bottom"><a className="button-primary" href="#career">ROLL THE STORY <Arrow direction="down" size={18} /></a><p>A little fantasy. A lot of drive.<br />And a life that doesn’t fit in one tab.</p><a className="scroll-cue" href="#career"><span>SCROLL TO EXPLORE</span><i><Arrow direction="down" size={17} /></i></a></div>
        </div>
        <span className="hero-credit">ORIGINAL AI-GENERATED FANTASY ART</span>
      </section>

      <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0, 1].map((copy) => <div className="ticker-copy" key={copy}>{tapeWords.map((word) => <span key={word}>{word}<i>✳</i></span>)}</div>)}</div></div>

      <Career />

      <Travel />

      <section className="interlude" aria-label="A little fire, a lot of drive">
        <div className="interlude-rule" data-reveal><span>THE COMMON THREAD</span><span>01:05 / STILL ROLLING</span></div>
        <p data-reveal>A LITTLE <em>FIRE.</em><br />A LOT OF <span className="outline-text">DRIVE.</span><span className="interlude-star" aria-hidden="true">✳</span></p>
        <div className="interlude-bottom" data-reveal><span>IN THE STORIES I LOVE. IN THE THINGS I BUILD.</span><Arrow direction="down" size={34} /></div>
      </section>

      <section id="about" className="about-section section-shell" aria-labelledby="about-title">
        <div className="section-label" data-reveal><span><i /> ACT 01 / BEHIND THE CUT</span><span>THE PERSON, NOT THE PERSONA.</span></div>
        <div className="about-grid"><div className="about-poster about-photo-poster" data-reveal>
          <PhotoButton photo={personalPhotos.snow} className="about-photo-open"><img src={personalPhotos.snow.src} alt={personalPhotos.snow.alt} width={personalPhotos.snow.width} height={personalPhotos.snow.height} loading="lazy" /><span className="personal-photo-expand" aria-hidden="true">VIEW FULL PHOTO <Arrow size={16} /></span></PhotoButton>
          <div className="about-photo-billing"><span className="about-poster-caption">THE HUMAN BEHIND THE SCREEN</span><h2 id="about-title">ARJUN <span>C N.</span></h2><div className="oracle-label"><span>WORKS AT</span><strong>ORACLE</strong><small>Oracle Health · Frontend engineering</small></div><div className="about-poster-bottom"><span>ONE HUMAN.<br />MANY OPEN TABS.</span><span>↗</span></div></div>
        </div>
          <div className="about-copy" data-reveal>
            <p className="about-lead">{profile.aboutLead}<br /><span>With a soft spot for worlds<br />beyond the screen.</span></p>
            <p>{profile.aboutBody}</p>
            <p>Off the clock: photography, video editing, fantasy worlds and Jon Snow, race weekends, Messi’s magic, Sanju’s timing, and the freedom of my own set of wheels. This is where the professional and the personal share the screen.</p>
            <dl className="personal-facts"><div><dt>THE DAY JOB</dt><dd>{profile.role}</dd></div><div><dt>HOME BASE</dt><dd>{profile.homeBase}</dd></div><div><dt>THE GARAGE</dt><dd className="garage-vehicles">{profile.garageVehicles.map((vehicle) => <span key={vehicle}>{vehicle}</span>)}</dd></div></dl>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">THE PROFESSIONAL CHAPTER <Arrow size={18} /><span className="sr-only"> on LinkedIn (opens in a new tab)</span></a>
          </div>
        </div>
      </section>

      <section id="after-hours" className="closing-universe section-shell" aria-labelledby="after-hours-title">
        <div className="section-label" data-reveal><span><i /> ACT 02 / AFTER HOURS</span><span>SIX OBSESSIONS. ONE UNIVERSE.</span></div>
        <div className="section-intro" data-reveal><h2 id="after-hours-title">FOR THE LOVE<br /><span className="outline-text">OF IT.</span></h2><p className="section-description">Fantasy worlds. Race weekends.<br /><span>Matchdays. Open roads. Quantum frontiers.</span></p></div>
        <div data-reveal><HouseBanners /></div>
        <PassionGrid items={passions} onExplore={openPassion} />
        <p className="art-note">Original fantasy, racing and sports illustrations; separately credited house sigils above. My own photo in the open-road chapter. No official affiliations or endorsements.</p>
      </section>

      <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
        <div className="section-label" data-reveal><span><i /> THE STORY CONTINUES</span><span>NO END CREDITS. YET.</span></div>
        <div className="contact-content" data-reveal><h2 id="contact-title">GOT A<br /><span className="outline-text">GOOD PLOT?</span></h2><a className="contact-orbit" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Arrow size={40} /><span>LET’S CONNECT</span><span className="sr-only"> with Arjun on LinkedIn (opens in a new tab)</span></a></div>
        <div className="contact-bottom">
          <p>Talk code. Debate a race. Recommend a fantasy.<br /><span>I’m all ears.</span></p>
          <div className="contact-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><span className="contact-social-copy"><strong>LINKEDIN</strong><small>The professional chapter</small></span><Arrow size={16} /><span className="sr-only"> (opens in a new tab)</span></a>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer"><span className="contact-social-copy"><strong>INSTAGRAM</strong><small>{profile.instagramHandle}</small></span><Arrow size={16} /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer section-shell"><p>© {new Date().getFullYear()} ARJUN C N<br /><span>PERSONAL PORTFOLIO · NOT AFFILIATED WITH THE FEATURED TEAMS OR FRANCHISES.</span></p><a href="#home" className="back-top">BACK TO TOP <Arrow direction="up" size={16} /></a></footer>

    {modalOpen && <dialog className={'cinema-dialog' + (passion ? ' passion-dialog' : '')} ref={dialogRef} aria-labelledby="dialog-title" onCancel={(event) => { event.preventDefault(); closeDialog() }} onClick={(event) => {
      if (event.target !== event.currentTarget) return
      const rect = event.currentTarget.getBoundingClientRect()
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeDialog()
    }}>
      <div className="dialog-header"><span>THE PERSONAL CUT / {passion?.number}</span><button type="button" onClick={closeDialog} aria-label="Close details" autoFocus>×</button></div>
      {passion && <div className={'passion-story story-' + passion.id}>
        <div className="story-chapter"><span>{passion.genre}</span><span aria-hidden="true">{passion.number}</span></div>
        <div className="story-content"><p className="eyebrow">{passion.name}</p><h2 id="dialog-title">{passion.title.join(' ')}</h2><p className="story-lead">{passion.story}</p><p>{passion.detail}</p>{passion.id === 'garage' && <PhotoButton photo={personalPhotos.driving} className="story-photo-link"><span>VIEW MY FULL PHOTO</span><Arrow size={18} /></PhotoButton>}<span className="story-note">{passion.id === 'garage' ? 'PERSONAL PHOTO · FROM MY COLLECTION' : passion.id === 'quantum' ? 'PERSONAL CURIOSITY · LEARNING FRONTIER' : 'PERSONAL FAN TRIBUTE'}</span></div>
      </div>}
    </dialog>}
  </div>
}

export default App
