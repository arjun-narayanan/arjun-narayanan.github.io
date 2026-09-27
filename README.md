# Arjun C N — A Personal Universe

A cinematic personal portfolio built with React, TypeScript, and Vite. Game of Thrones-inspired dark fantasy, movie-poster composition, antique-gold detailing, and scroll-led animation bring together Arjun’s projects and personal interests: dragons and fantasy, Jon Snow, Game of Thrones and House of the Dragon, Formula 1 and Max Verstappen, his Škoda Kylaq and Royal Enfield Hunter 350, Lionel Messi, and Sanju Samson.

This is a frontend-only application: there is no backend, cloud deployment, CI/CD pipeline, Docker, or Kubernetes configuration. The Oracle connection describes Arjun’s employment, not an official company website.

## Run locally

```sh
npm install
npm run dev
```

Open the local address printed by Vite.

## Check and build

```sh
npm run lint
npm run build
npm run preview
```

The production build is generated in `dist/`. The preview command serves that build locally; it does not deploy the site.

## Customize

- Edit `src/data/portfolio.ts` for interest stories, projects, and public links. Add only details you want to publish; the current confirmed profile link is [Arjun C N on LinkedIn](https://in.linkedin.com/in/arjuncn).
- Edit `src/data/career.ts` for résumé-verified experience, skills, education, and user-reported community participation. The Community & Events gallery uses four user-supplied Google developer-event photographs from 2018, 2024, 2025, and 2026. They document personal attendance only; no Google employment, speaking/organizing role, or endorsement is implied. The original PDF is not included in the site, and its phone number and email address have not been published. The display name remains Arjun C N as requested.
- Edit `src/data/travel.ts` for user-confirmed destinations and landmarks. The travel chapter is a place collection, not a dated itinerary; Paris landmarks are grouped under Paris, and St. Mary’s Island under Udupi. Home is Sreekrishnapuram, while Bengaluru remains the résumé-listed work location.
- Edit `src/data/photos.ts` for personal photo captions and alternative text. The original user-supplied Paris, snow, and driving photographs are displayed unchanged in their respective sections, while seven additional personal photography frames appear once in Travel → Through My Lens. The section represents Arjun’s interest in photography and video editing. All images open in uncropped full-photo viewers; unconfirmed locations are left unnamed.
- Update `src/App.tsx` for page sections and the personalized hero/about copy, `src/App.css` for portfolio styling, and `src/index.css` for shared styles.
- “BEHIND THE BUILD.” opens the content after the hero with experience, skills, community events, and education. Travel, projects, and About follow. All interests—fantasy and Jon Snow, Max Verstappen and Formula 1, Messi, Sanju Samson, and the car/bike garage—remain together near the bottom, before contact.
- Update `index.html` for the browser title, description, and theme color. The monogram favicon lives in `public/favicon.svg`.
- Do not add private company information, unverified career details, or placeholder contact addresses to the public portfolio.

## Visual direction and motion

The overall theme draws on dark fantasy: Cinzel serif headings, readable DM Sans body text, charcoal surfaces, parchment-colored text, antique gold, and restrained ember accents. The typeface is not the official Game of Thrones font. Custom ornaments and original illustrations are joined by separately credited House Targaryen and House Stark coats of arms in the bottom fantasy/interests section (`src/components/HouseBanners.tsx`). Personal content, photographs, and the professional portfolio remain Arjun’s own.

Arjun calls his Škoda Kylaq **Vhagar**. The garage/profile copy uses that user-confirmed nickname; the Royal Enfield Hunter 350 remains a separate vehicle. The existing car portrait does not identify the car model or nickname visually.

The fantasy, racing, and sports artwork is original generated imagery, not official film stills, athlete photography, or manufacturer photography. Arjun’s photographs are the original user-supplied images, displayed without AI edits. References to franchises, teams, athletes, and brands express personal interests; they do not imply affiliation, endorsement, or ownership of those brands.

Avoid repeated artwork across sections: the dragon appears only in the hero; the fantasy card has its own SVG winter scene, and the portfolio preview is a CSS manuscript design. The sports cards show different halves of the diptych. Dialogs do not duplicate cover images; personal photo viewers are still available for intentional full-size viewing.

See [artwork sources and generation prompts](public/images/ARTWORK.md) for stable asset paths, prompts, and the distinction between the generated illustrations and personal photographs.

Scroll effects and ambient movement respect the system’s reduced-motion preference. The on-page motion control also lets visitors turn motion off. Navigation and project interactions remain available without animation.

The GoT-inspired atmosphere uses CSS-only drifting mist, rising embers and a slow warm glow in the dragon hero; falling snow and moonlight in the winter card; and warm/cool halos around the Targaryen/Stark emblems. `FantasyAtmosphere.tsx` uses deterministic decorative particles, with fewer visible on phones. The ambient effects animate only transforms/opacity and pause when their scene is offscreen or the document is hidden. The scene observer lives in `useCinematicMotion.ts`; no animation library, extra imagery, audio, or continuous JavaScript animation loop is added.

## Focusboard demo

The interactive project demo is in `src/components/FocusboardDemo.tsx` with its styles in `src/components/FocusboardDemo.css`. It retains the existing `focusboard-tasks` localStorage key so saved tasks remain available when using the same browser and origin.

Tasks stay in that browser: they are not sent to a server or synced between devices. Clearing site data removes them, and changing the local host or port uses a different storage origin.
