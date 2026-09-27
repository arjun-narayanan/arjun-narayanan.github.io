import { useId } from 'react'

/** An original, code-drawn winter kingdom; the dragon artwork stays in the hero. */
export default function FantasyLandscape() {
  const sceneId = useId()
  const paint = (name: string) => `url(#${sceneId}-${name})`

  return <svg
    className="passion-image fantasy-landscape"
    viewBox="0 0 700 505"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient id={`${sceneId}-sky`} x2="0.25" y2="1">
        <stop stopColor="#07101c" />
        <stop offset=".52" stopColor="#273d50" />
        <stop offset="1" stopColor="#536776" />
      </linearGradient>
      <radialGradient id={`${sceneId}-halo`}>
        <stop stopColor="#c8e7ed" stopOpacity=".24" />
        <stop offset=".48" stopColor="#a3cad7" stopOpacity=".08" />
        <stop offset="1" stopColor="#9cbdd3" stopOpacity="0" />
      </radialGradient>
      <linearGradient id={`${sceneId}-moon`} x2=".75" y2="1">
        <stop stopColor="#e3e9e4" />
        <stop offset="1" stopColor="#93b2bf" />
      </linearGradient>
      <linearGradient id={`${sceneId}-ice`} x2=".2" y2="1">
        <stop stopColor="#9abac8" />
        <stop offset=".18" stopColor="#668a9d" />
        <stop offset=".68" stopColor="#2a475e" />
        <stop offset="1" stopColor="#102436" />
      </linearGradient>
      <linearGradient id={`${sceneId}-mist`} x2="0" y2="1">
        <stop stopColor="#b4cbd1" stopOpacity="0" />
        <stop offset=".55" stopColor="#a0bbc6" stopOpacity=".19" />
        <stop offset="1" stopColor="#648599" stopOpacity="0" />
      </linearGradient>
      <linearGradient id={`${sceneId}-foreground`} x2="0" y2="1">
        <stop stopColor="#192a35" />
        <stop offset="1" stopColor="#060c12" />
      </linearGradient>
    </defs>

    <path fill={paint('sky')} d="M0 0h700v505H0z" />
    <ellipse cx="393" cy="105" rx="220" ry="177" fill={paint('halo')} />
    <g fill="#d3e3e5">
      <circle cx="84" cy="80" r="1" opacity=".6" />
      <circle cx="159" cy="132" r=".7" opacity=".5" />
      <circle cx="221" cy="68" r="1" opacity=".7" />
      <circle cx="294" cy="103" r=".6" opacity=".5" />
      <circle cx="345" cy="44" r=".8" opacity=".55" />
      <circle cx="463" cy="66" r=".7" opacity=".5" />
      <circle cx="492" cy="122" r="1" opacity=".6" />
      <circle cx="559" cy="83" r=".8" opacity=".6" />
      <circle cx="639" cy="136" r=".7" opacity=".5" />
      <path d="M267 37v5m-2.5-2.5h5M531 39v4m-2-2h4" stroke="#d3e3e5" strokeWidth=".7" opacity=".65" />
    </g>
    <circle cx="393" cy="105" r="33" fill={paint('moon')} />
    <g fill="#678797" opacity=".2">
      <ellipse cx="381" cy="98" rx="11" ry="15" />
      <ellipse cx="401" cy="119" rx="10" ry="6" />
      <circle cx="403" cy="88" r="5" />
    </g>

    <path d="M0 245 56 204 89 222 145 169 180 201 233 154 295 227 327 199 371 236 435 164 474 200 515 159 573 223 610 182 700 227v278H0Z" fill="#526978" />
    <path d="m99 214 46-45 35 32-26-11-10 9-6-13-15 21Zm95-8 39-52 44 53-31-19-12-18-12 21-9-5Zm199 10 42-52 39 36-25-12-14-11-17 26-5-6Zm85-7 37-50 35 38-21-10-12-13-14 17-5-4Z" fill="#bac9cb" opacity=".64" />
    <path d="M0 241 72 224 112 240 183 211 243 247 295 217 340 239 397 217 461 246 511 215 558 233 627 207 700 230v275H0Z" fill="#2f485b" />

    {/* A sheer blue wall curves into the mountains, with light catching its crown. */}
    <path d="M-20 249Q166 205 348 213T720 184v221H-20Z" fill={paint('ice')} />
    <path d="M-20 249Q166 205 348 213T720 184" fill="none" stroke="#bad2d6" strokeWidth="3" opacity=".72" />
    <g fill="none" stroke="#b2cbd1" strokeWidth="1" opacity=".21">
      <path d="m22 240 6 93-8 31m43-132 8 116-5 25m41-149-1 78 9 52m30-136 11 98-4 49m43-151-2 143m35-146 8 81-7 78m42-160 6 110-7 36m46-145-5 95 7 53m37-147 1 161m42-161-6 123 4 22m42-146 4 91-9 55m45-149 10 100-7 36m41-140 1 129m41-136-5 106 8 44m42-158 1 105m47-114-3 93 7 61m34-162 9 132" />
    </g>
    <g fill="#162b3b" opacity=".34">
      <path d="m71 231 11 133 14 35H75Zm101-14 17 84-7 77h-8Zm160-3 10 87-4 82-10-78Zm135-4 10 88-13 61 1-93Zm98-7 17 98-8 61-11-100Zm99-12 9 94-2 53-8-102Z" />
    </g>

    {/* The little keep provides scale without repeating either house's sigil. */}
    <g fill="#142431">
      <path d="M300 215v-26h9v-22l8-11 8 11v22h12v-38l9-15 9 15v29h11v-18h8v-7h7v7h8v48ZM288 216v-22h4v-5h5v5h5v22Z" />
      <path d="M337 152h18l-9-23Zm-29 16h18l-9-17Z" />
      <path d="M374 155v-19h1v19Z" />
    </g>
    <path d="M375 136q9-6 16 0l-10 4h-6Z" fill="#798b93" />
    <g fill="#d6b77d" opacity=".8">
      <path d="M315 180h3v7h-3Zm28-14h3v7h-3Zm1 27h3v7h-3Zm27-16h2v5h-2Z" />
    </g>
    <path d="M0 285q156-24 304 9t396-26v102q-145-21-290 5T0 342Z" fill={paint('mist')} />

    <path d="m0 356 73-31 65 20 70-16 52 36 57-20 65 26 45-59 27-12 31 15 27 29 44-9 66 19 78-18v169H0Z" fill={paint('foreground')} />
    <path d="m384 369 43-57 27-12 31 15-27-7-17 11-11-2-34 40Zm-303-38 57 14 70-16 29 20-30-12-66 17Z" fill="#7d929b" opacity=".42" />

    {/* A lone watchkeeper and a vertical sword are intentionally small in this world. */}
    <g fill="#080f17">
      <circle cx="454" cy="271" r="4.5" />
      <path d="M450 276q5-3 9 2l4 20-5 5h-13l2-18Zm0 24h3v8h-4Zm6 0h3l1 7h-3Z" />
      <path d="m460 283 10-3 1 2-10 5Z" />
    </g>
    <path d="M471 264v45m-5-24h10" stroke="#9aafb8" strokeWidth="1.2" />
    <path d="m469.5 263 1.5-4 1.5 4-1.5 17Z" fill="#c5d4d7" />
    <path d="m450 279-10 20 10-4" fill="#182532" />

    <g fill="#080f16">
      <path d="m52 299-15 39h9l-16 30h12l-14 31h45l-15-31h12l-16-30h9Zm43 39-13 31h7l-15 29h12l-15 34h47l-14-34h10l-14-29h8Zm520-40-18 48h11l-19 38h13l-16 39h60l-18-39h14l-20-38h10Zm51-45-20 58h12l-25 48h15l-22 52h72l-22-52h15l-26-48h13Z" />
    </g>
    <path d="M0 437q161-63 332-16t368-18v102H0Z" fill="#080e14" opacity=".9" />
  </svg>
}
