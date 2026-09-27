// Public profile copy, verified against the user's Profile.pdf and direct updates.
// Keep the user's chosen display name; do not publish private contact details.
export const profile = {
  name: 'Arjun C N',
  linkedin: 'https://in.linkedin.com/in/arjuncn',
  // Instagram handle supplied directly by the user in their profile QR image.
  instagram: 'https://www.instagram.com/arjun_narayanan_/',
  instagramHandle: '@arjun_narayanan_',
  role: 'Application Software Engineer 2',
  homeBase: 'Sreekrishnapuram, Kerala',
  garageVehicles: ['Vhagar — Škoda Kylaq', 'Royal Enfield Hunter 350'],
  aboutLead: 'I build product interfaces at Oracle Health.',
  aboutBody: 'I’m a frontend software engineer focused on React, web performance, and product UI. At Oracle, I contribute to performant healthcare interfaces and connect frontend features with backend and AI/ML services—from requirements and design through development and delivery.',
}

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export type Project = {
  id: 'focusboard' | 'portfolio' | 'cloud-lab'
  number: string
  title: string
  category: 'Built' | 'Exploring'
  kind: string
  status: string
  description: string
  tags: string[]
  overview: string
  highlights: string[]
  note: string
}

export const projects: Project[] = [
  {
    id: 'focusboard', number: '01', title: 'Focusboard', category: 'Built', kind: 'PERSONAL PRODUCTIVITY', status: 'Interactive demo',
    description: 'A quieter place for your daily tasks. Simple priorities, small wins, and a little more room to focus.',
    tags: ['React', 'TypeScript', 'Local storage'],
    overview: 'A frontend-only task manager, built around the simple idea that getting organized should feel effortless. Try the working demo below.',
    highlights: ['Create, complete, and delete tasks in a clean, responsive interface.', 'Filter active and completed tasks, with progress based on your actual list.', 'Keep tasks in this browser with local storage—no sign-up or backend.'],
    note: 'The demo uses this browser’s saved Focusboard tasks. Nothing is sent to a server.',
  },
  {
    id: 'portfolio', number: '02', title: 'The personal cut', category: 'Built', kind: 'PERSONAL WEBSITE', status: 'You’re here',
    description: 'A movie-poster-inspired portfolio where code, dragons, race weekends, and personal obsessions share the screen.',
    tags: ['React', 'CSS', 'Responsive design'],
    overview: 'The site you’re exploring right now: a cinematic React portfolio, built with original artwork, custom CSS, scroll reveals, and a working project demo.',
    highlights: ['A responsive layout that adapts from a small phone to a large display.', 'Keyboard-friendly chapter dialogs, scroll effects, and a motion toggle that respects system preferences.', 'Personal interests and project content in an editable data file, without a CMS or backend.'],
    note: 'Built with React, TypeScript, and Vite. No extra UI framework, analytics, or backend service.',
  },
  {
    id: 'cloud-lab', number: '03', title: 'From local to cloud', category: 'Exploring', kind: 'ON THE WORKBENCH', status: 'Planned exploration',
    description: 'Following a frontend beyond localhost: an upcoming exploration of OCI, repeatable delivery, and what comes next.',
    tags: ['OCI', 'DevOps', 'Future project'],
    overview: 'This is a planned exploration, not an implemented deployment. The starting point is this frontend; the next step is understanding how to deliver it reliably.',
    highlights: ['Explore an appropriate OCI environment and understand its costs first.', 'Introduce a repeatable build and deployment workflow when the frontend is ready.', 'Consider a backend and useful AI features as separate future milestones.'],
    note: 'No cloud resources, pipelines, containers, Kubernetes configuration, or backend have been created for this portfolio.',
  },
]

export const toolbox: { title: string; label: string; description: string; items: string[]; icon: 'code' | 'layers' | 'cloud'; tone: string }[] = [
  { title: 'The interface', label: 'IN THIS PROJECT', description: 'A small stack for building useful, interactive experiences.', items: ['React', 'TypeScript', 'HTML & CSS'], icon: 'code', tone: 'sage' },
  { title: 'The details', label: 'HOW IT’S BUILT', description: 'The little things that make a website easier to use.', items: ['Responsive layouts', 'Accessibility', 'Vite'], icon: 'layers', tone: 'sand' },
  { title: 'The next chapter', label: 'CURRENT INTERESTS', description: 'Following my curiosity beyond the browser.', items: ['OCI & DevOps', 'Backend systems', 'AI features'], icon: 'cloud', tone: 'lavender' },
]

export type Passion = {
  id: string
  number: string
  genre: string
  title: string[]
  name: string
  line: string
  story: string
  detail: string
  image?: string
}

export const passions: Passion[] = [
  {
    id: 'dragons', number: '01', genre: 'THE FANTASY CHAPTER',
    title: ['ICE.', 'FIRE.', 'OBSESSION.'], name: 'Game of Thrones / House of the Dragon',
    line: 'Dragons. Dark kingdoms. Jon Snow.',
    story: 'Give me dragons, impossible kingdoms, and Jon Snow. My kind of escape.',
    detail: 'I’m a big Jon Snow fan. Game of Thrones and House of the Dragon are my kind of escape. This corner of the internet borrows that feeling: a little mystery, a little fire, and a world waiting to unfold.',
  },
  {
    id: 'racing', number: '02', genre: 'THE FULL-THROTTLE CHAPTER',
    title: ['LIGHTS OUT.', 'WORLD OFF.'], name: 'Max Verstappen / Formula 1',
    line: 'The volume goes up on race weekends.',
    story: 'The focus. The instinct. The absolute commitment. That is the pull of Formula 1 for me.',
    detail: 'Max Verstappen is my driver. There is something about racing that cuts through everything else—the build-up, the lights, the smallest margins. For a while, the rest of the world can wait.',
    image: publicAsset('images/racing-night.png'),
  },
  {
    id: 'messi', number: '03', genre: 'THE BEAUTIFUL GAME',
    title: ['A LITTLE', 'LEFT-FOOT', 'MAGIC.'], name: 'Lionel Messi',
    line: 'My football hero. Enough said.',
    story: 'Some players make you watch football. Messi makes you feel it.',
    detail: 'This is a fan’s corner for Lionel Messi: the creativity, the calm, and those moments that make the impossible look effortless. No statistics needed. Just love for the game.',
    image: publicAsset('images/sports-still-life.png'),
  },
  {
    id: 'sanju', number: '04', genre: 'THE CRICKET CHAPTER',
    title: ['QUIET', 'FIRE.'], name: 'Sanju Samson',
    line: 'Always in his corner.',
    story: 'The timing. The composure. The effortless-looking shot that makes you stop everything.',
    detail: 'A big Sanju Samson fan, through the anticipation and the innings worth waiting for. Cricket has its own kind of cinema—and he is a big part of mine.',
    image: publicAsset('images/sports-still-life.png'),
  },
  {
    id: 'garage', number: '05', genre: 'THE OPEN-ROAD CHAPTER',
    title: ['MY KIND', 'OF ESCAPE.'], name: profile.garageVehicles.join(' / '),
    line: 'Vhagar, my Škoda Kylaq. Plus the Hunter 350.',
    story: 'Not every escape needs a fantasy kingdom. Sometimes, it just needs a set of keys.',
    detail: 'My Škoda Kylaq has a name: Vhagar. Alongside my Royal Enfield Hunter 350, it belongs in the story too. Four wheels or two—a little real-world freedom, a different view, and another reason to take the long way. A personal photo from my collection accompanies this chapter.',
  },
  {
    id: 'quantum', number: '06', genre: 'THE QUANTUM CHAPTER',
    title: ['BEYOND', 'BINARY.'], name: 'Quantum Computing',
    line: 'Qubits, superposition, and impossible possibilities.',
    story: 'The deeper it gets, the more fascinating it becomes. Quantum computing is a frontier I genuinely want to understand.',
    detail: 'I’m deeply interested in quantum computers—the shift beyond classical bits, the strange logic of qubits and superposition, and the possibility of solving problems in completely new ways. It is one of the technologies I’m most curious to explore.',
  },
]
