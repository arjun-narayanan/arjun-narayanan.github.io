// Source: the user's Profile.pdf, shared on 24 September 2026.
// Keep career details tied to the supplied resume; do not infer missing role claims.
export type CareerRole = {
  company: string
  title: string
  location: string
  start: string
  startDate: string
  end: string
  endDate?: string
  highlights: string[]
}

export const careerRoles: CareerRole[] = [
  {
    company: 'Oracle',
    title: 'Application Software Engineer 2',
    location: 'Bengaluru',
    start: 'Sep 2024',
    startDate: '2024-09',
    end: 'Present',
    highlights: [
      'Contributing performant interfaces to an AI-first healthcare application, integrating the front end with backend and AI/ML services.',
      'Working across requirements, design, development, and delivery, with agile and test-driven development practices and regulatory projects.',
    ],
  },
  {
    company: 'Oracle',
    title: 'Application Software Engineer 1',
    location: 'Bengaluru',
    start: 'Oct 2021',
    startDate: '2021-10',
    end: 'Sep 2024',
    endDate: '2024-09',
    highlights: [
      'Worked on non-AI technology product development across Gen 1 and Gen 0 applications.',
    ],
  },
  {
    company: 'RapidValue',
    title: 'Software Engineer',
    location: 'Kochi',
    start: 'Mar 2021',
    startDate: '2021-03',
    end: 'Sep 2021',
    endDate: '2021-09',
    highlights: [
      'Developed JavaScript mobile and web applications, collaborating on business requirements and new product development.',
      'Worked on scalable, automated solutions.',
    ],
  },
  {
    company: 'Expeed Software',
    title: 'Associate Software Engineer',
    location: 'Kochi',
    start: 'Dec 2018',
    startDate: '2018-12',
    end: 'Mar 2021',
    endDate: '2021-03',
    highlights: [
      'Modernized mobile and web applications with cross-platform code, contributing across multiple projects.',
    ],
  },
]

export const careerSkills = ['React', 'Angular', 'Web Performance', 'Product UI', 'OJET', 'Redwood', 'Preact', 'JavaScript']

// Community participation shared directly by the user, separately from the résumé.
// “GGD” is interpreted as GDG; no chapter, dates, or organizer/speaker role inferred.
export const communityEvents = [
  {
    name: 'Google I/O',
    participation: 'Annual attendee',
    description: 'I attend Google I/O each year as part of my developer journey.',
  },
  {
    name: 'GDSC',
    participation: 'Community participant',
    description: 'I take part in Google Developer Student Clubs community events.',
  },
  {
    name: 'GDG',
    participation: 'Event participant',
    description: 'I take part in Google Developer Groups events.',
  },
]

// Event photos and years supplied directly by Arjun. They document personal attendance only.
const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const communityPhotos = [
  {
    year: '2018',
    src: publicAsset('images/google-event-2018.jpeg'),
    alt: 'Large group photo at a Google developer community event',
    width: 1450,
    height: 988,
    title: 'Google event · 2018',
    caption: 'Google developer community event · 2018',
  },
  {
    year: '2026',
    src: publicAsset('images/google-event-2026-india.jpeg'),
    alt: 'Arjun at an I/O Connect India display in 2026',
    width: 656,
    height: 1104,
    title: 'I/O Connect India · 2026',
    caption: 'I/O Connect India · 2026',
  },
  {
    year: '2025',
    src: publicAsset('images/google-event-2025-wall.jpeg'),
    alt: 'Arjun beside a Google I/O Connect wall in 2025',
    width: 1120,
    height: 1118,
    title: 'Google I/O Connect · 2025',
    caption: 'Google I/O Connect · 2025',
  },
  {
    year: '2024',
    src: publicAsset('images/google-event-2024-connect.jpeg'),
    alt: 'Arjun at a Google I/O Connect display in 2024',
    width: 1114,
    height: 1126,
    title: 'Google I/O Connect · 2024',
    caption: 'Google I/O Connect · 2024',
  },
]

export const education = [
  {
    institution: 'University of Calicut',
    qualification: 'B.Tech · Computer Science and Engineering',
    start: '2014',
    startDate: '2014',
    end: '2018',
    endDate: '2018',
    label: 'The foundation',
  },
  {
    institution: 'C-DAC',
    qualification: 'Artificial Intelligence Internship',
    start: 'Mar 2018',
    startDate: '2018-03',
    end: 'Jun 2018',
    endDate: '2018-06',
    label: 'An early exploration',
  },
]
