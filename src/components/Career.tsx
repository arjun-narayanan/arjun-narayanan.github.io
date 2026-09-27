import { useEffect, useState } from 'react'
import { careerRoles, careerSkills, communityEvents, communityPhotos, education } from '../data/career'
import PhotoButton from './PhotoButton'
import './Career.css'

export default function Career() {
  const [activePhoto, setActivePhoto] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const activeCommunityPhoto = communityPhotos[activePhoto]

  useEffect(() => {
    if (isCarouselPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setActivePhoto((current) => (current + 1) % communityPhotos.length), 4500)
    return () => window.clearInterval(timer)
  }, [isCarouselPaused])

  const moveCarousel = (direction: -1 | 1) => {
    setActivePhoto((current) => (current + direction + communityPhotos.length) % communityPhotos.length)
  }

  return <section id="career" className="career section-shell" aria-labelledby="career-title">
    <div className="career-heading" data-reveal>
      <div>
        <p className="career-eyebrow">THE PROFESSIONAL CHAPTER</p>
        <h2 id="career-title">BEHIND<br /><span>THE BUILD.</span></h2>
      </div>
      <p className="career-intro">The roles, the tools, and the community.<br />Another part of the story.</p>
    </div>

    <ol className="career-timeline" aria-labelledby="career-title">
      {careerRoles.map((role, index) => <li className={'career-role' + (index === 0 ? ' career-role-current career-role-oracle' : '')} key={role.company + role.startDate} data-reveal>
        <div className="career-dates">
          <time dateTime={role.startDate}>{role.start}</time>
          <span aria-hidden="true"> — </span>
          {role.endDate ? <time dateTime={role.endDate}>{role.end}</time> : <span>{role.end}</span>}
        </div>
        <span className="career-marker" aria-hidden="true" />
        <div className="career-role-content">
          <div className="career-company-line"><span className="career-employer">{role.company}</span>{index === 0 && <span className="career-current">Current chapter</span>}</div>
          <h3>{role.title}</h3>
          <p className="career-location">{role.location}</p>
          {role.highlights.length > 0 && <ul className="career-highlights">{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
        </div>
      </li>)}
    </ol>

    <div className="career-skills" data-reveal>
      <h3>MY TOOLKIT</h3>
      <ul>{careerSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
    </div>

    <section className="career-community" aria-labelledby="community-title" data-reveal>
      <div className="career-community-heading"><h3 id="community-title">COMMUNITY & EVENTS</h3><p>Part of my developer journey.</p></div>
      <div className="career-community-grid">
        {communityEvents.map((event) => <article className="career-community-card" key={event.name}>
          <span className="career-community-label">{event.participation}</span>
          <h4>{event.name}</h4>
          <p>{event.description}</p>
        </article>)}
      </div>
      <div className="career-event-frames">
        <div className="career-event-frames-heading"><h4>EVENT FRAMES</h4><p>Personal photos from Google developer events.</p></div>
        <div className="career-event-carousel" role="region" aria-roledescription="carousel" aria-label="Google developer event photographs">
          <div className="career-event-carousel-stage">
            <figure className="career-event-frame" key={activeCommunityPhoto.src}>
              <PhotoButton photo={activeCommunityPhoto} className="career-event-photo">
                <img src={activeCommunityPhoto.src} alt={activeCommunityPhoto.alt} width={activeCommunityPhoto.width} height={activeCommunityPhoto.height} loading="eager" decoding="async" />
              <span className="career-event-photo-open" aria-hidden="true">VIEW FULL PHOTO ↗</span>
              </PhotoButton>
              <figcaption><time dateTime={activeCommunityPhoto.year}>{activeCommunityPhoto.year}</time><span>{activeCommunityPhoto.caption}</span></figcaption>
            </figure>
          </div>
          <div className="career-event-carousel-controls">
            <button type="button" className="career-event-carousel-arrow" onClick={() => moveCarousel(-1)} aria-label="Show previous event photo">←</button>
            <p aria-live="polite"><span>{String(activePhoto + 1).padStart(2, '0')}</span> / {String(communityPhotos.length).padStart(2, '0')}</p>
            <button type="button" className="career-event-carousel-arrow" onClick={() => moveCarousel(1)} aria-label="Show next event photo">→</button>
            <button type="button" className="career-event-carousel-pause" onClick={() => setIsCarouselPaused((paused) => !paused)} aria-pressed={isCarouselPaused}>{isCarouselPaused ? 'PLAY' : 'PAUSE'}</button>
          </div>
        </div>
      </div>
      <p className="career-community-note">Personal participation, not a role at Google or an official endorsement.</p>
    </section>

    <div className="career-education" data-reveal>
      <h3 className="career-education-title">WHERE IT STARTED</h3>
      <div className="career-education-grid">
        {education.map((item) => <article className="career-education-card" key={item.institution}>
          <div className="career-education-top"><span>{item.label}</span><span aria-hidden="true">↗</span></div>
          <h4>{item.institution}</h4>
          <p>{item.qualification}</p>
          <div className="career-education-dates"><time dateTime={item.startDate}>{item.start}</time><span> — </span><time dateTime={item.endDate}>{item.end}</time></div>
        </article>)}
      </div>
    </div>
  </section>
}
