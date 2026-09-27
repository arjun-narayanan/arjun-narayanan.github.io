export type PersonalPhoto = {
  src: string
  alt: string
  width: number
  height: number
  title: string
  caption: string
}

// Original photos supplied by Arjun, displayed unchanged.
// No trip dates or unconfirmed locations added.
const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const personalPhotos = {
  paris: {
    src: publicAsset('images/arjun-paris.jpeg'),
    alt: 'Arjun beside the river in Paris, with the Eiffel Tower in the background',
    width: 1280,
    height: 853,
    title: 'Paris, in the frame',
    caption: 'Paris, France · Eiffel Tower',
  },
  snow: {
    src: publicAsset('images/arjun-snow.jpeg'),
    alt: 'Arjun wearing sunglasses and a dark jacket in a snowy landscape',
    width: 1206,
    height: 1188,
    title: 'A moment in the snow',
    caption: 'From my personal photo collection.',
  },
  driving: {
    src: publicAsset('images/arjun-driving.jpeg'),
    alt: 'Arjun in sunglasses and an olive-green shirt, seated inside a car',
    width: 720,
    height: 1280,
    title: 'Off the clock',
    caption: 'From my personal photo collection.',
  },
} satisfies Record<string, PersonalPhoto>

// Additional original photographs supplied by Arjun for the travel chapter.
// Captions intentionally avoid assigning an unconfirmed place or date.
export const photographyFrames: PersonalPhoto[] = [
  {
    src: publicAsset('images/photography-snow-cabin.jpeg'),
    alt: 'A wooden cabin beside a snow-covered mountain valley beneath a cloudy blue sky',
    width: 1194,
    height: 1200,
    title: 'Snowbound',
    caption: 'A winter valley, from my lens.',
  },
  {
    src: publicAsset('images/photography-iron-branches.jpeg'),
    alt: 'The Eiffel Tower framed by bare tree branches',
    width: 1199,
    height: 1178,
    title: 'Iron & branches',
    caption: 'Paris, France.',
  },
  {
    src: publicAsset('images/photography-riverside.jpeg'),
    alt: 'A riverboat passing beneath a bridge with Parisian buildings on the bank',
    width: 1181,
    height: 1184,
    title: 'Riverside',
    caption: 'Paris, France.',
  },
  {
    src: publicAsset('images/photography-louvre-geometry.jpeg'),
    alt: 'The glass pyramid of the Louvre beside a Ferris wheel and historic Paris architecture',
    width: 1206,
    height: 1210,
    title: 'Geometry in glass',
    caption: 'Paris, France.',
  },
  {
    src: publicAsset('images/photography-eiffel-tower.jpeg'),
    alt: 'The Eiffel Tower rising above leafless trees',
    width: 1206,
    height: 1203,
    title: 'The tower',
    caption: 'Paris, France · Eiffel Tower.',
  },
  {
    src: publicAsset('images/photography-dawn-ridge.jpeg'),
    alt: 'People looking toward a dark mountain ridge at dawn',
    width: 1206,
    height: 663,
    title: 'Before sunrise',
    caption: 'A mountain morning, from my lens.',
  },
  {
    src: publicAsset('images/photography-stone-arches.jpeg'),
    alt: 'A historic stone façade with layered arched windows beneath a blue sky',
    width: 1206,
    height: 1216,
    title: 'Stone & sky',
    caption: 'Historic architecture, from my lens.',
  },
]
