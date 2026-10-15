# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page React 19 + TypeScript + Vite landing page for Odylytics. Dark mode by default with a light mode toggle in the nav (v3, Apple-style: SF Pro / Inter sans headings with a dimmed two-tone tail, slim 52px nav, dense grey footer, pill buttons, 28px rounded cards). Two source-of-truth documents live in the repo root:

- `CONTENT_OUTLINE.md` — section order, copy and data tables (English only). Decides **what** is shown.
- `DESIGN_GUIDELINES.md` — colours, typography, layout, components, motion, voice. Decides **how** it looks.

## Commands

```bash
npm install
npm run dev # Vite dev server
npm run build # tsc -b (project references) then vite build
npm run lint # oxlint
npm run preview # serve the built dist/
```

There is no test suite. CI-equivalent verification is `npm run lint && npm run build`.

## Code architecture

`src/main.tsx` mounts `<App />` into `#root` inside `<StrictMode>`. No router, no state library, no data fetching, runtime dependencies are React, `@supabase/supabase-js` (lazy-loaded, member login and editable content only), `lenis` (smooth scrolling), `three` (WebGL for the hero Hyperspeed background, lazy-loaded into its own chunk) and `ogl` (WebGL for `DitherVeil` / `BrandDither`) only.

- Routing: `useRoute` is a tiny hash router (`#/blog`, `#/privacy`, `#/terms`; other hashes are home anchors). Pages live in `src/pages/` (`Blog`, `Legal` for Privacy / Terms / Cookies from `src/data/legal.ts`, `TeamPage` (Co-founders / Advisors / Members), `TeamProfile` at `#/team/<slug>`, `Login`, `Admin`, `NotFound`). `NotFound` renders for unknown `#/…` routes, missing team slugs and any pathname other than `/`; a small Vite plugin in `vite.config.ts` copies `dist/index.html` to `dist/404.html` so static hosts answer unknown paths with a real 404 status plus the designed page; `Mission` and `News` are new home sections; legal copy is in `src/data/legal.ts`. `useSmoothScroll` ignores `#/…` links.
- Navigation and i18n: `NAV` in `content.ts` drives the dropdown nav (groups with `items`); settings (theme + language) live in `SettingsMenu`. Language is `src/lib/lang.ts` (`<html lang>` + localStorage); all copy goes through `useContent()` / `useUi()`: Vietnamese overrides are in `src/data/content.vi.ts` (same keys as `content.ts`, arrays matched by position, missing keys fall back to English) and UI strings in `src/data/ui.ts`. Legal pages and member pages stay English. The team is its own page (`#/team`); home shows `TeamTeaser`. The footer is always dark (`.scope-dark`) with bracketed Geist Mono labels. Theme switches use the View Transitions API when available (`setTheme`), else the `@property` colour fade. Prizes are one flat grid plus a photo gallery (`GALLERY`).
- Members: `#/login` and `#/admin` (`src/pages/Login.tsx`, `Admin.tsx`). `src/lib/auth.ts` is the session store, `src/lib/collection.ts` the editable-content store (posts and testimonials in `src/lib/stores.ts`; they start from the seed in `content.ts`, then use Supabase rows). Setup: run `supabase/schema.sql`, create members in Supabase Auth, set `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (see `.env.example`). Without them, `npm run dev` runs a local demo mode (fake login, edits in localStorage) and production builds show no login.
- `src/App.tsx` — composes the page: `Nav`, then `<main>` with `Hero`, `Impact`, `Partners`, `Mission`, `Showcase`, `LogoStrip`, `Recognition`, `Partners`, `Testimonials`, `TeamTeaser`, `News`, `Faq`, `Contact`, then `Footer`. Calls `useReveal()` and `useSmoothScroll()` once.
- `src/sections/*.tsx` — one component per section. Anchors: `#home`, `#impact`, `#solutions` (the `LogoStrip`), `#recognition`, `#partners`, `#testimonials`, `#team`, `#contact`. `LogoStrip` (solutions logos, directly after the Solutions grid) and `Partners` (monochrome partner logos from `public/assets/partners/`, white files turned black in light mode via `filter`) both use `LogoLoop` with `scaleOnHover`; `Testimonials` is a scroll-snap carousel (`.quotes__track`) with round arrow buttons; `Hero` renders the React Bits `<Hyperspeed />` road background (`src/components/Hyperspeed.tsx`, three.js, loaded via `React.lazy`: brand-coloured light trails, `theme` follows the chosen theme, custom road/line colours only in dark, hold-to-boost and pointer steering through the empty parts of `.hero__content`, which is `pointer-events: none` except for its children; under reduced motion `speed={0}` and non-interactive; falls back to the CSS `.aurora` without WebGL; `.hero__road` feathers the bottom edge into the next section). The hero is a pinned scroll track: `.hero` is `--hero-stage-h + --hero-track` tall and `.hero__stage` is `position: sticky`, so the road stays put while the visitor scrolls. `Hero.tsx` defines the intro as stages measured in viewport heights (`INTRO = { fade, ramp, cruise }`, currently 0.5 + 0.3 + 1.0) and sets `--hero-track` from their sum. Scroll progress maps to `--hero-fade` (copy fades out upwards) and to a `boostRef` read by Hyperspeed every frame (an added prop; the ramp starts slightly before the fade ends), then the road cruises at full boost before the page moves on to the next section. A "Scroll to find out" cue (`.hero__cue`, bobbing arrow) sits at the bottom of the stage. Under reduced motion the track collapses to 0 and nothing is scroll-driven; `Contact` uses the CSS `.aurora` layer.
- `src/components/` — `Button` (variants `primary` / `outline` / `inverse` / `signal`, renders `<a>` when `href` is set), `SectionHeading` + `Eyebrow` (serif `.h2-serif` with an italic `.em` tail), `LogoLoop` (React Bits logo loop ported to plain CSS in `LogoLoop.css`: rAF-driven track, pause and 1.2× scale on hover, mask edge fade, clones `aria-hidden` + `inert`), `Modal` (native `<dialog>` + scroll-lock + focus return), `Icons` (includes `CheckIcon`, `ArrowLeftIcon` / `ArrowRightIcon`).
- `src/hooks/` — `useTheme` (`useSyncExternalStore` over `<html data-theme>`, `setTheme` persists to `localStorage['odylytics-theme']`; an inline script in `index.html` applies the saved theme before first paint), `useBrandAssets` (picks the wordmark/symbol/solution-logo variant for the current theme), `useSmoothScroll` (Lenis inertia wheel scrolling + in-page anchor handling, off under reduced motion; exports `lockScroll` / `unlockScroll`, which the mobile menu and `Modal` must use instead of setting `body.style.overflow` directly, since Lenis ignores overflow), `useReveal` (one shared IntersectionObserver for `[data-reveal]`), `useScrollFadeIn` (scroll-linked `--reveal` fade for the section right after the hero, `Impact` — mirrors the hero's own scroll-mapped fade-out), `useZoneFade` (scroll-scrubbed dark↔light background morph around the solutions band), `useRotatingWord`, `useMediaQuery` / `usePrefersReducedMotion`. There is no parallax in v2.
- `src/data/content.ts` — all copy and data as typed module-level constants. Placeholders waiting for real content are marked `TODO(content)` and render as dashed 'Updating soon' frames (`soon: true`, `.soon-line` / `.soon-tag`); grep for it before shipping.

### Styling

- `src/index.css` — self-hosted Geist (display + body) and Geist Mono (labels) via `@fontsource-variable`, design tokens (`--purple-*`, `--orange-*`, `--neutral-*` brand ramps; dark semantic tokens `--bg` / `--surface` / `--surface-2` / `--border` / `--text*` / `--accent*` / `--signal`; radii `--radius-panel: 36px`, `--radius-card: 28px`, `--radius-media: 20px`, `--radius-popover: 20px`, `--radius-chip: 14px`, `--radius-pill: 999px`; plus the 8-bit stepped `--pixel-clip` / `--pixel-clip-sm` polygons), resets, type classes (`.display`, `.h2-serif` + `.em`, `.h3`, `.stat`, `.body-l`, `.label`), and shared primitives (`.btn`, `.eyebrow` pill badge, `.tag`, `.card`, `.logo-chip`, `.logo-placeholder`, `.aurora`, reveal).
- `src/App.css` — section- and component-level CSS, with breakpoints `≤1024/1100px`, `≤820px`, `≤520px` (plus a few per-grid ones).
- Theme: the whole page (hero included) follows one theme, switched only by the navbar `ThemeToggle`. Exception — the background morphs with the scroll (Mercury-style, no hard edges): `useZoneFade` scrubs `--zone-mix` (0→1) on `<html>` as the solutions band (`Showcase` → `TeamTeaser`) scrolls into view and back down as `News` arrives, and every semantic token in `:root` is a `color-mix()` between the `--d-*` (dark) and `--l-*` (light) palettes, so the whole page blends dark↔light; the band sections therefore always use the light solution-logo variants (raw paths, not `solutionLogo()`). `setTheme()` sets `<html data-theme>` (light overrides the tokens directly, so the morph is inert there), adds `theme-animate` (so only explicit toggles fade, not the initial paint) and updates `theme-color`. Colour tokens are registered with `@property` so the page fades (700ms) between themes instead of snapping.
- Components consume semantic tokens only; brand ramp variables stay inside `index.css` definitions. Light mode is purely a token override block (`:root[data-theme="light"]`), so never hard-code colours in component CSS — add a token with both values instead. In light mode signal text uses `--orange-500` and soft purple text uses `--purple-500` for contrast on white.
- Rules (see `DESIGN_GUIDELINES.md` v3): rounded pills/corners everywhere via the `--radius-*` tokens; the 8-bit pixel-corner frame (`--pixel-clip` stepped `clip-path`; border colour as element background with an inset same-clipped `::before` fill) is scoped to solution media frames, prize cards, news cards and purple primary buttons only; 1px `--border`, no box-shadow, no inline styles, no CSS-in-JS or Tailwind. Geist 500 for headings and UI, Geist Mono uppercase for labels (eyebrows are bracketed). Purple = action (the one CTA style), orange = signal/labels, black and white neutrals. Orange `#FF8C00` is for text on dark backgrounds only; on orange fills use dark text.
- Gotcha: `backdrop-filter` on `.nav` makes it the containing block for the fixed `.nav__menu`, so `.nav.is-open` must reset `backdrop-filter: none`.
- Every motion respects `prefers-reduced-motion` (aurora animation, Hyperspeed, rotating word and logo loops turn off; a `LogoLoop` then shows its logos as one static wrapped row).

### TypeScript / linting

- Linter is **oxlint** (not ESLint). Config in `.oxlintrc.json` enables `react`, `typescript`, `oxc` plugins; `react/rules-of-hooks` is `error`.
- `tsconfig.app.json` enables `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, and `noUnusedParameters`. Type-only imports must use `import type`; enums and parameter-property syntax are disallowed.

## Assets

Production assets live under `public/assets/` and are referenced with root-relative paths (`/assets/...`).

- `brand/odylytics-wordmark-dark.svg` — main logo in v2 (white text, for dark backgrounds), derived from `OdylyticsBrand/Horizontal Wordmark Logo Darkmode.svg` with the viewBox cropped to the artwork. Used in nav, hero and footer.
- `brand/odylytics-wordmark.svg` — light-background variant, kept for later use.
- `brand/odylytics-symbol.svg` / `brand/odylytics-symbol-dark.svg` — symbol (black / white fills), from `OdylyticsBrand/favicon.svg` (also `public/favicon.svg`). The dark variant is used for the hero note and team photo placeholders.
- `solutions/<name>.png` — solution logos (`aquaguard`, `airguard`, `includio`, `roomie`, `hearwork`, `enablecode`), centre-cropped and resized to 960px wide. `solutions/dark/<name>.png` holds the dark-mode variants with identical names and framing (source: `DarkMode/`, same crop); `useBrandAssets().solutionLogo(path)` swaps to them when the theme is dark.
- `partners/row/<slug>.png|svg` — trimmed copies used by the one-row partner strip (UTS and HCMUT featured in the centre; `hcmut.svg` is a stand-in until the official logo arrives). `partners/<slug>.png` — partner logos (`asu`, `rmit`, `sorbonne`, `uts`, `laval`, `dow`) from `partnerships/`: transparent padding trimmed, marks scaled to equal visual area and placed left-aligned on one 640×240 transparent canvas, so they look balanced in the 192×72 `.partner__logo` box. Reprocess new partner logos the same way.
- `team/<name>.png` — core team photos (transparent background) from `New/`.
- Expected later: recognition issuer logos. Until then the UI renders bordered placeholder blocks at final sizes.

`public/og-image.jpg` (1200×630) is the social share thumbnail, a screenshot of the dark hero as first loaded. It is referenced by the Open Graph / Twitter tags in `index.html` using absolute `https://odylytics.com/` URLs. Re-capture it when the hero changes, and update those URLs if the domain changes.

`OdylyticsBrand/` holds the raw brand sources and the colour palette; don't reference it from code.
