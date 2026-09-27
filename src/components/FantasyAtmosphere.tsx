import type { CSSProperties } from 'react'
import './FantasyAtmosphere.css'

type FantasyAtmosphereProps = { variant: 'fire' | 'winter' }

/** Decorative, deterministic particles: CSS moves them without a render loop. */
export default function FantasyAtmosphere({ variant }: FantasyAtmosphereProps) {
  return <span className={'fantasy-atmosphere atmosphere-' + variant} aria-hidden="true">
    <span className="atmosphere-mist atmosphere-mist-far" />
    <span className="atmosphere-mist atmosphere-mist-near" />
    <span className="atmosphere-glow" />
    <span className="atmosphere-particles">
      {Array.from({ length: 24 }, (_, index) => <i key={index} style={{
        '--particle-x': `${(index * 37 + 11) % 100}%`,
        '--particle-size': `${1.5 + (index % 3) * .7}px`,
        '--particle-duration': `${11 + (index * 7) % 13}s`,
        '--particle-delay': `${-((index * 3.7) % 24)}s`,
        '--particle-drift': `${16 + (index * 11) % 55}px`,
      } as CSSProperties} />)}
    </span>
  </span>
}
