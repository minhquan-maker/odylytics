# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Multi-page React 19 + TypeScript + Vite website for Odylytics, an AI firm (v4). Light by default with a dark toggle in the footer. Fonts: Hanken Grotesk (headings/UI), Source Serif 4 (body), JetBrains Mono (labels, rendered as orange [ BRACKETED ] tags by `.label`); no italics. Source-of-truth documents in the repo root:

- `REDESIGN_BRIEF.md` — sitemap, nav, page content, footer and legal plan, open questions.
- `DESIGN_GUIDELINES.md` — type, colour tokens, shape, patterns (v4).
- `CONTENT_OUTLINE.md` — superseded v1 outline, history only.

## Commands

```bash
npm install
npm run dev
npm run build # tsc -b then vite build
npm run lint # oxlint
npm run preview
```

No test suite. CI-equivalent verification is `npm run lint && npm run build`.

## Code architecture

`src/main.tsx` mounts `<App />`. Runtime deps: React, `@supabase/supabase-js` (lazy, member login and editable content), `lenis` (smooth scroll), `three` (hero Hyperspeed road, lazy-loaded), `@vercel/analytics` (loaded only after cookie consent).

- Routing: `useRoute` is a hash router that returns a path (`#/product/climate-tech` → `/product/climate-tech`). `App.tsx` maps paths to pages: `/`, `/product/{climate-tech,accessibility,incoming}`, `/research`, `/research/{ongoing,accomplished}`, `/team/{co-founders,partners,resources}`, `/team/<slug>` (profile), `/blog`, `/contact`, `/login`, `/admin`, `/legal`, `/legal/<slug>`. Unknown routes and any pathname other than `/` render `NotFound`; a Vite plugin copies `dist/index.html` to `dist/404.html`.
- `src/layout/` — `Nav` (Product / Research / Team dropdowns, Blog, Login, Get in touch; mobile drawer), `Footer` (always dark; seven link columns covering every legal page), `PageTransition` (full-screen glitch cut when the first path segment changes; intercepts `#/…` link clicks, skipped under reduced motion), `OfflineScreen` (full-screen notice when the connection drops, dismissable), `ErrorBoundary` (per-route crash screen), `Consent` (first-visit banner + settings dialog; `lib/consent.ts` stores the choice; analytics inject only after yes; `openConsentSettings()` opens the dialog from the footer).
- `src/pages/` — one file per page group. System screens (404, offline, error) share `components/StateScreen.tsx` and its line illustrations. `Home` opens with `Hero` (pinned scroll intro: `components/Hero.tsx` + `Hyperspeed.tsx`; `INTRO` stages set `--hero-track`; copy fades out, then the road boosts; reduced motion collapses the track; `.aurora` is the no-WebGL fallback), the headline types itself on load, then partner `LogoLoop`, pillars, a 'how it works' section (`HeroArt` circuit SVG), product cards, impact band (three stats with gradient rules and hover, `Contours` topographic background), solutions logo loop, prizes, testimonials, team row, blog, work block, closing CTA with team photo.
- Research (Anthropic-style index; it shows research only, never products or prizes, and has no Accomplished page): `src/data/research.ts` holds the framework. Add a paper, report, dataset or project by appending one object to `ENTRIES` (see the comment at the top of the file); `status: 'Published'` lists it on Research > Publications and Overview, `'Ongoing'` on Research > Ongoing, `featured: true` shows it as a large card. Each entry gets its own page at `#/research/<slug>` (question, overview, method, findings, BibTeX; empty sections read 'Updating soon'). Entries without a photo get a generated pattern tile per area. Until the first published entry exists the pages show a greyed 'Example format'. Components in `components/ResearchBits.tsx`, pages in `pages/Research.tsx`.
- `src/data/site.ts` — nav, product groups (which solutions sit in Climate-tech / Accessibility / Incoming), research copy (`ONGOING`, `ACCOMPLISHED`), partner notes, resources, footer columns, legal registry (`LEGAL_ENTRIES`). `src/data/content.ts` — solutions, prizes, partners, testimonials, team, advisors, posts, FAQ, contact. `src/data/legal.ts` (Privacy, Terms, Cookies) and `src/data/legal.extra.ts` (the other eleven policies) hold the legal text: working drafts, have counsel review before publishing. Placeholders marked `TODO(content)` need real input; grep before shipping.
- Members: `#/login` and `#/admin`. `src/lib/auth.ts` is the session store, `src/lib/collection.ts` the editable-content store (posts and testimonials in `src/lib/stores.ts`; seed from `content.ts`, then Supabase rows). Setup: run `supabase/schema.sql`, create members in Supabase Auth, set `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` (see `.env.example`). Without them, `npm run dev` runs a local demo mode.
- Hooks: `useTheme` (light default; `localStorage['odylytics-theme']` is light | dark | system, applied before first paint by the inline script in `index.html`), `useBrandAssets` (wordmark/symbol/solution logo per theme), `useSmoothScroll` (Lenis; `lockScroll`/`unlockScroll` for menus and modals), `useReveal` (IntersectionObserver for `[data-reveal]`), `useMediaQuery`.
- i18n and settings: the gear in the nav (`components/SettingsMenu.tsx`, also inside the mobile menu) sets language (English, Tiếng Việt, Français, 中文, 日本語; `lib/lang.ts`), theme (light / dark / system; `hooks/useTheme.ts`) and reduce motion (yes / no; `lib/motion.ts`, which sets `<html data-motion>`; all CSS and JS read that, never the media query directly). UI strings are translated with `useT()` from the English text as key; `src/data/i18n.ts` holds `[vi, fr, zh, ja]` per string and anything missing falls back to English. Page heads, section heads and labels translate automatically. Legal policies, research copy and blog posts stay English.

### Styling

- `src/index.css` — fonts, tokens (light + dark + `.scope-dark`), reset, shared primitives (`.btn`, `.label`, `.tag`, `.status`, reveal). `src/App.css` — every layout and component, grouped by section.
- Components use semantic tokens only (`--bg`, `--surface`, `--text*`, `--border*`, `--accent`, `--signal`); never hard-code colours except the always-dark hero core and brand assets. No inline styles, CSS-in-JS or Tailwind. No italics, no border radius (everything is square).
- Gotcha: `backdrop-filter` on a parent makes it the containing block of fixed children; the nav uses a solid background instead.
- Every motion respects `prefers-reduced-motion`.

### TypeScript / linting

- Linter is **oxlint**. `react/rules-of-hooks` is `error`; avoid setState inside effects (derive during render instead).
- `tsconfig.app.json` enables `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noUnusedLocals`, `noUnusedParameters`. Type-only imports use `import type`; no enums or parameter properties.

## Assets

Production assets live under `public/assets/` and are referenced with root-relative paths (`/assets/...`).

- `brand/odylytics-wordmark-dark.svg` — main logo in v2 (white text, for dark backgrounds), derived from `OdylyticsBrand/Horizontal Wordmark Logo Darkmode.svg` with the viewBox cropped to the artwork. Used in nav, hero and footer.
- `brand/odylytics-wordmark.svg` — light-background variant, kept for later use.
- `brand/odylytics-symbol.svg` / `brand/odylytics-symbol-dark.svg` — symbol (black / white fills), from `OdylyticsBrand/favicon.svg` (also `public/favicon.svg`). The dark variant is used for the hero note and team photo placeholders.
- `solutions/<name>.png` — solution logos (`aquaguard`, `airguard`, `includio`, `roomie`, `hearwork`, `enablecode`), centre-cropped and resized to 960px wide. `solutions/dark/<name>.png` holds the dark-mode variants with identical names and framing (source: `DarkMode/`, same crop); `useBrandAssets().solutionLogo(path)` swaps to them when the theme is dark.
- `partners/row/<slug>.png|svg` — trimmed copies used by the one-row partner strip (UTS and HCMUT featured in the centre; `hcmut.svg` is a stand-in until the official logo arrives). `partners/<slug>.png` — partner logos (`asu`, `rmit`, `sorbonne`, `uts`, `laval`, `dow`) from `partnerships/`: transparent padding trimmed, marks scaled to equal visual area and placed left-aligned on one 640×240 transparent canvas, so they look balanced in the 192×72 `.partner__logo` box. Reprocess new partner logos the same way.
- `team/<name>.png` — core team photos (transparent background) from `New/`.
- Expected later: recognition issuer logos. Until then the UI renders bordered placeholder blocks at final sizes.

`public/og-image.jpg` (1200×630) is the social share thumbnail. It still shows the v3 dark hero; re-capture it from the new light hero. It is referenced by the Open Graph / Twitter tags in `index.html` using absolute `https://odylytics.com/` URLs. Re-capture it when the hero changes, and update those URLs if the domain changes.

`OdylyticsBrand/` holds the raw brand sources and the colour palette; don't reference it from code.
