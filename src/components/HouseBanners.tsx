import './HouseBanners.css'

const houses = [
  {
    id: 'targaryen',
    name: 'Targaryen',
    words: 'Fire and Blood',
    note: 'Dragons, always.',
    image: `${import.meta.env.BASE_URL}images/house-targaryen.png`,
    alt: 'House Targaryen coat of arms: a red three-headed dragon on black',
    width: 1875,
    height: 2063,
  },
  {
    id: 'stark',
    name: 'Stark',
    words: 'Winter Is Coming',
    note: 'For the North. For Jon Snow.',
    image: `${import.meta.env.BASE_URL}images/house-stark.svg`,
    alt: 'House Stark coat of arms: a grey direwolf on a white shield',
    width: 700,
    height: 769,
  },
]

export default function HouseBanners() {
  return <div className="house-allegiances">
    <div className="house-banners" aria-label="House Targaryen and House Stark fan emblems">
      {houses.map((house) => <figure className={'house-banner house-banner-' + house.id} key={house.id} data-ambient-scene>
        <div className="house-banner-art">
          <span className="house-atmosphere" aria-hidden="true" />
          <img src={house.image} alt={house.alt} width={house.width} height={house.height} loading="lazy" />
        </div>
        <figcaption>
          <span className="house-banner-label">HOUSE</span>
          <h3>{house.name}</h3>
          <p className="house-words">{house.words}</p>
          <p className="house-personal-note">{house.note}</p>
        </figcaption>
      </figure>)}
    </div>
    <details className="house-credits">
      <summary>Sigil artwork credits</summary>
      <p>Personal fan tribute; no official affiliation. <a href="https://commons.wikimedia.org/wiki/File:House_Targaryen.png" target="_blank" rel="noopener noreferrer">Targaryen by Abjiklam</a> (<a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noopener noreferrer">CC BY 3.0, as listed on Commons</a>). <a href="https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_House_Stark_of_Winterfell.svg" target="_blank" rel="noopener noreferrer">Stark by FDRMRZUSA</a> (<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>). Assets shown unmodified, scaled to fit. Credit links open in a new tab.</p>
    </details>
  </div>
}
