# Portfolio artwork

The dragon, racing, and sports raster assets were created with Codex’s built-in image generation tool for this portfolio. They are original generated illustrations, not stock photographs, official promotional images, or photographs of Arjun’s belongings. Those illustrations do not depict athlete likenesses. The three original personal photographs documented below were supplied by Arjun. The website displays these originals unchanged.

References to fantasy franchises, Formula 1, athletes, and brands describe Arjun’s personal interests. The artwork does not imply affiliation, approval, or endorsement by any featured person, team, franchise, or manufacturer.

## Dragon poster

- Repository path: `public/images/dragon-poster.png`
- Browser path: `/images/dragon-poster.png`
- Use: the hero only. Do not reuse this artwork in cards or dialogs.
- Prompt: Original cinematic dark-fantasy 16:9 scene of a dragon rising over a storm-dark coastal medieval fortress. Charcoal scales, giant wings, ember rim light, negative space in the lower left for an HTML title, and 35mm film grain. No people, text, logos, or UI.

## Racing at dusk

- Repository path: `public/images/racing-night.png`
- Browser path: `/images/racing-night.png`
- Use: the Formula 1 / Max Verstappen chapter.
- Prompt: Cinematic realistic unbranded dark open-wheel car, rear three-quarter view, on a wet racetrack at dusk. Charcoal fog, an ember-red rain light, and sunset reflections. No people, text, or logos.

This is an imagined racing scene, not an image of Max Verstappen, his team, or a specific official Formula 1 car.

## Football and cricket still life

- Repository path: `public/images/sports-still-life.png`
- Browser path: `/images/sports-still-life.png`
- Use: separate cropped halves for the Lionel Messi and Sanju Samson chapters.
- Prompt: An equal vertical diptych in landscape 3:2 format. Left: a worn football on dark turf under blue floodlights. Right: a cricket bat and ball on dark turf under pink floodlights. Black lower third. No people, likenesses, text, or brands.

## Personal photographs

- `public/images/arjun-paris.jpeg`: original 1280 × 853 photograph supplied by Arjun, used in the Paris travel feature. The Eiffel Tower is visible; no date is inferred.
- `public/images/arjun-snow.jpeg`: original 1206 × 1188 portrait supplied by Arjun, used in the about section. The location is unspecified.
- `public/images/arjun-driving.jpeg`: original 720 × 1280 portrait supplied by Arjun, used in the open-road chapter. The image is not used to identify the vehicle model or location.

These three original local copies retain the supplied image content unchanged. The former symbolic car illustration has been replaced by Arjun’s personal photo.

## Google developer-event photographs

The following are personal event photographs supplied by Arjun and displayed once in the Career → Community & Events gallery. Their years were supplied directly by Arjun; they document personal attendance and do not imply employment by, speaking for, or endorsement from Google.

- `public/images/google-event-2018.jpeg`: Google developer community event group photo · 2018.
- `public/images/google-event-2024-connect.jpeg`: Google I/O Connect photo · 2024.
- `public/images/google-event-2025-wall.jpeg`: Google I/O Connect photo · 2025.
- `public/images/google-event-2026-india.jpeg`: I/O Connect India photo · 2026.

These are JPEG web copies of the user-supplied PNG files, converted at quality 88 without cropping or content alteration. The gallery crops its thumbnails for layout only; each image opens in the existing uncropped full-photo viewer.

## Through My Lens photography

The following seven original photographs were supplied by Arjun for the Travel → Through My Lens gallery. They are displayed once in the gallery and open in the existing uncropped full-photo viewer. No dates or unconfirmed locations are assigned.

- `public/images/photography-snow-cabin.jpeg`: snow-covered mountain valley and cabin.
- `public/images/photography-iron-branches.jpeg`: Eiffel Tower framed by branches, Paris.
- `public/images/photography-riverside.jpeg`: riverside scene, Paris.
- `public/images/photography-louvre-geometry.jpeg`: glass-pyramid architecture, Paris.
- `public/images/photography-eiffel-tower.jpeg`: Eiffel Tower view, Paris.
- `public/images/photography-dawn-ridge.jpeg`: mountain ridge at dawn.
- `public/images/photography-stone-arches.jpeg`: historic stone arches.

The local web copies retain the supplied image content unchanged. The gallery crops only its on-page thumbnails for layout; the full-photo viewer shows the complete image.

### Unused cinematic variants (reverted)

These files are retained as unused alternatives only; the website and photo viewers no longer reference them. Created with the built-in image-generation editing tool using each original photograph as its edit target. The shared brief requested identity/composition preservation, cinematic tones, and fine film grain. As generative edits, they may change small details and lighting; use the originals for an unedited record. No location or vehicle model is inferred from either version.

- `public/images/arjun-paris-cinematic.jpeg`: 1536 × 1024, antique-gold and charcoal treatment, Paris travel feature only.
- `public/images/arjun-snow-cinematic.jpeg`: 1268 × 1240, desaturated northern-winter treatment, about section only.
- `public/images/arjun-driving-cinematic.jpeg`: 941 × 1672, warm bronze and olive treatment, open-road card only.

The generated outputs were encoded as quality-85 JPEG web assets. Their integration was reverted at Arjun’s request: original photos are now used everywhere, and cinematic/original controls and AI-edit labels have been removed. Existing house sigils and fantasy/sports artwork remain unchanged.

See [the complete final prompt set](PHOTO-PROMPTS.md). Stable browser URLs are the same filenames under `/images/`.

## Editing notes

Titles, chapter labels, and navigation are HTML/CSS overlays rather than baked into the raster images. Keep that separation when replacing artwork. Alternative text should distinguish illustrations from the supplied personal photographs, without claiming official affiliation or guessing unconfirmed details.

Each displayed image has one placement in the main page. The football and cricket card visuals use separate, non-overlapping halves of the sports diptych; they do not show the same scene. Interest dialogs are text-led and do not repeat card images. Photo viewers remain an intentional on-demand enlargement, not an additional page placement. The garage dialog offers a text button to open the full photo instead of repeating its thumbnail.

## Code-native artwork

- `src/components/FantasyLandscape.tsx`: a distinct original winter landscape for the fantasy card, built as an inline SVG rather than repeating the hero's dragon.
- `src/components/PortfolioPreview.tsx` and `.css`: a typographic manuscript/browser folio for the portfolio project card. It uses no photos or existing sigils, and is not repeated in the project dialog.

## House emblems — third-party artwork

The Targaryen and Stark coats of arms are separate sourced fan artworks, not original generated illustrations and not claimed as official HBO assets. They appear in the bottom interests section, with visible, expandable credits. The downloaded image content is unchanged; CSS only scales it to fit.

- `public/images/house-targaryen.png`: **House Targaryen**, by **Abjiklam**. [Wikimedia Commons file and attribution](https://commons.wikimedia.org/wiki/File:House_Targaryen.png), [original artist's source page](https://awoiaf.westeros.org/index.php/File:House_Targaryen.svg). Commons lists [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The original SVG page lists CC BY-SA 3.0, while the PNG's embedded metadata names CC BY-NC-SA 4.0; retain these source notices and resolve the inconsistent licensing information before any commercial reuse. This portfolio use is a personal fan tribute, not a claim of endorsement.
- `public/images/house-stark.svg`: **Coat of arms of House Stark of Winterfell**, by **FDRMRZUSA**. [Wikimedia Commons file and attribution](https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_House_Stark_of_Winterfell.svg), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Franchise names and fictional house identities belong to their respective rights holders. Asset licenses do not imply any affiliation or endorsement.
