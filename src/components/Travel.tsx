import { useState } from 'react'
import PhotoButton from './PhotoButton'
import { personalPhotos, photographyFrames } from '../data/photos'
import { destinations, homeBase, type TravelRegion, type TravelScene } from '../data/travel'
import './Travel.css'

type TravelFilter = 'All places' | TravelRegion
const filters: TravelFilter[] = ['All places', 'Europe', 'India']

// Abstract location motifs, not personal photographs or representations of a route.
function SceneMark({ scene }: { scene: TravelScene }) {
  return <svg viewBox="0 0 180 64" fill="none" aria-hidden="true" className="travel-scene-mark">
    {scene === 'hills' && <>
      <path d="M1 58 37 25 57 44 93 8 145 58M77 25l16 9 13-10M18 58h149" />
      <circle cx="147" cy="16" r="10" />
    </>}
    {scene === 'coast' && <>
      <path d="M2 36c15-11 25 11 40 0s25 11 40 0 25 11 40 0 25 11 40 0M2 48c15-11 25 11 40 0s25 11 40 0 25 11 40 0 25 11 40 0M2 60c15-11 25 11 40 0s25 11 40 0 25 11 40 0 25 11 40 0" />
      <path d="M93 20a13 13 0 0 1 26 0M79 21h54" />
    </>}
    {scene === 'waterfall' && <>
      <path d="M1 9h49v12h74V9h53M62 23v30m12-30v32m12-32v24m12-24v30m12-30v23M41 59c12-8 19 8 31 0s19 8 31 0 19 8 31 0M15 22h21m111 0h21" />
    </>}
    {scene === 'city' && <>
      <path d="M3 59h174M13 59V34h24v25m8 0V22h28v37m9 0V8h22v51m8 0V28h29v31m9 0V42h17v17M19 43h10m22-13h14m-14 11h14m23-22h10m-10 11h10m-10 11h10m20-5h15m-15 12h15" />
      <circle cx="145" cy="12" r="6" />
    </>}
  </svg>
}

export default function Travel() {
  const [filter, setFilter] = useState<TravelFilter>('All places')
  const visibleDestinations = destinations.filter((destination) => filter === 'All places' || destination.region === filter)

  return <section id="travel" className="travel-section section-shell" aria-labelledby="travel-title">
    <div className="section-label travel-section-label" data-reveal>
      <span><i /> ON LOCATION / THE TRAVEL CHAPTER</span>
      <span>PLACES FROM MY STORY</span>
    </div>

    <div className="section-intro travel-intro" data-reveal>
      <h2 id="travel-title">A CHANGE<br /><span className="outline-text">OF SCENE.</span></h2>
      <p>Home in Sreekrishnapuram.<br />A few places I’ve been,<br /><strong>from Kerala to Europe.</strong></p>
    </div>

    <div className="travel-home" data-reveal>
      <div className="travel-home-label"><span aria-hidden="true">⌂</span><span>HOME<br /> BASE</span></div>
      <div className="travel-home-copy"><h3>{homeBase.name}</h3><p>{homeBase.region}</p></div>
      <div className="travel-home-seal" aria-hidden="true"><span>ROOTED IN</span><strong>KERALA</strong><span>OPEN TO ELSEWHERE</span></div>
    </div>

    <div className="travel-controls" data-reveal>
      <div className="travel-filters" role="group" aria-label="Filter travel destinations">
        {filters.map((option) => <button type="button" key={option} aria-pressed={filter === option} aria-controls="travel-destinations" onClick={() => setFilter(option)}>{option}</button>)}
      </div>
      <p className="travel-count" aria-live="polite" aria-atomic="true"><strong>{visibleDestinations.length}</strong> destinations{filter !== 'All places' ? ` in ${filter}` : ''}</p>
    </div>

    <ul id="travel-destinations" className="travel-grid" aria-label="Places I have visited">
      {visibleDestinations.map((destination) => <li className={'travel-ticket travel-ticket-' + destination.scene} key={destination.id}>
        <article aria-labelledby={'travel-place-' + destination.id}>
          <div className="travel-ticket-meta"><span>{destination.area}</span><span className="travel-visited">VISITED</span></div>
          <div className="travel-ticket-art"><SceneMark scene={destination.scene} /><span aria-hidden="true">{destination.region === 'India' ? 'IN' : 'EU'}</span></div>
          <div className="travel-ticket-copy">
            <p className="travel-scene-label">{destination.label}</p>
            <h3 id={'travel-place-' + destination.id}>{destination.name}</h3>
            {destination.landmarks && <ul className="travel-landmarks" aria-label={`${destination.name} landmarks visited`}>{destination.landmarks.map((landmark) => <li key={landmark}>{landmark}</li>)}</ul>}
          </div>
          <div className="travel-ticket-edge" aria-hidden="true"><span>PERSONAL ATLAS</span><i /></div>
        </article>
      </li>)}
    </ul>

    <figure className="travel-photo-feature" data-reveal>
      <div className="travel-photo-frame">
        <div className="travel-photo-frame-label" aria-hidden="true"><span>FROM MY CAMERA ROLL</span><span>PERSONAL ARCHIVE</span></div>
        <PhotoButton photo={personalPhotos.paris} className="travel-photo-open">
          <img src={personalPhotos.paris.src} alt={personalPhotos.paris.alt} width={personalPhotos.paris.width} height={personalPhotos.paris.height} loading="lazy" decoding="async" />
          <span className="travel-photo-enlarge" aria-hidden="true">VIEW FULL FRAME <span>↗</span></span>
        </PhotoButton>
      </div>
      <figcaption className="travel-photo-caption">
        <p className="travel-photo-location"><i aria-hidden="true" /> PARIS, FRANCE</p>
        <h3>A FRAME<br /> FROM<br /> <span>MY STORY.</span></h3>
        <p className="travel-photo-landmark">Eiffel Tower</p>
        <p className="travel-photo-note">Not just a place on the list.<br />A moment in the frame.</p>
        <span className="travel-photo-caption-mark" aria-hidden="true">ARJUN / OFF THE CLOCK</span>
      </figcaption>
    </figure>

    <section className="travel-photography" aria-labelledby="photography-title" data-reveal>
      <div className="travel-photography-heading">
        <div>
          <p>PERSONAL PHOTOGRAPHY</p>
          <h3 id="photography-title">THROUGH <span>MY LENS.</span></h3>
        </div>
        <p>Photography and video edits—some frames I clicked along the way.</p>
      </div>
      <div className="travel-photography-grid">
        {photographyFrames.map((photo, index) => <figure className={'travel-photography-frame frame-' + index} key={photo.src}>
          <PhotoButton photo={photo} className="travel-photography-open">
            <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
            <span className="travel-photography-view" aria-hidden="true">VIEW FULL PHOTO <span>↗</span></span>
          </PhotoButton>
          <figcaption><strong>{photo.title}</strong><span>{photo.caption}</span></figcaption>
        </figure>)}
      </div>
    </section>

    <p className="travel-footnote"><span aria-hidden="true">↗</span> Different places. Another side of the story.</p>
  </section>
}
