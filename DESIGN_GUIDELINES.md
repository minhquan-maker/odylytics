# Odylytics — Design Guidelines (v3)

One system for the whole site: **Geist + Geist Mono, orange and purple on black and white**. If a style is not listed here, do not invent one; add it here first.

Tagline: **One AI firm. Six solutions.**

---

## 1. Direction

Calm, confident tech-company page. Big sans headlines with a dimmed second line, generous whitespace, real photos of the team, one rounded shape language. References: Apple (type, restraint), Cosmos (photo-led sections), NUSX (bracketed mono labels, black footer). No gradients as backgrounds, no glow decoration, no box shadows.

## 2. Colour roles

Brand ramps live in `index.css` (`--purple-*`, `--orange-*`, `--neutral-*`). Components use semantic tokens only; light mode is a token override.

| Role | Colour | Where |
|---|---|---|
| **Neutral** | black `#0B0A0E` / white `#FAFAFB` and the surface steps | Backgrounds, text, borders (`--bg`, `--surface`, `--surface-2`, `--text*`, `--border*`) |
| **Purple = action** | `--accent` `#AE0BFF`, soft text `--accent-soft` | Primary buttons, links, focus, category tags, active states |
| **Orange = signal** | `--signal` `#FF8C00` (dark) / `--orange-500` (light) | Mono eyebrows and labels, role titles, status highlights |

- One primary CTA style everywhere: purple pixel-corner button, white text.
- Orange text only on dark backgrounds, or the darker `--orange-500` in light mode. On an orange fill use dark text.
- Footer is always black (`.scope-dark`), whichever theme is chosen.
- Never hard-code a colour in component CSS; add a token with both theme values.

## 3. Typography

| Role | Font | Weight |
|---|---|---|
| Display, headings, body, buttons | **Geist** (variable, self-hosted via `@fontsource-variable/geist`) | 600 display headings and big numerals, 500 UI and small headings, 400 body |
| Labels, eyebrows, tags, stat captions, footer | **Geist Mono** (`@fontsource-variable/geist-mono`) | 400, uppercase, tracking `0.06em` |

Scale (tokens in `index.css`): display `--fs-display` 44–84px · h2 `--fs-h2` 34–60px · h3 `--fs-h3` 26–38px · h4 `--fs-h4` 22px · lead `--fs-lead` 19px · body 16px · small 14px · label `--fs-label` 12.5px. Display tracking `-0.04em`, headings `-0.03em`.

- Two-tone headline: first phrase `--text`, second phrase in `<em class="em">` (dimmed, not italic).
- Eyebrows are mono, uppercase, orange and wrapped in brackets: `[ OUR MISSION ]`. Footer group labels use the same bracket device.
- Do not add a third typeface or another weight.

## 4. Shape

Rounded everywhere by default: pills for controls, four corner tokens (`--radius-panel` / `-card` / `-media` / `-popover` / `-chip`) for the rest. The 8-bit pixel treatment is scoped to exactly four groups: solution media frames (`.showcase-card__media`), prize cards (`.card.prize`), news cards (`.card.post-card`) and the purple primary buttons (`.btn--primary`). Those clip to the stepped `clip-path` polygon in `--pixel-clip` (8px deep, 4px steps; small shapes may use `--pixel-clip-sm`). Bordered pixel shapes paint the border colour as the element background and inset a same-clipped fill layer by 1px (`::before`, `z-index: -1`) — a real CSS border would be clipped away at the steps. Clipped shapes cut the focus outline off, so `:focus-visible` uses a `drop-shadow` glow ring instead. No shadows; separation comes from 1px `--border` hairlines and surface steps.

## 5. Components

- **Buttons**: pill, Geist 500 15px — except `primary`, which keeps the pixel-corner frame. `primary` (purple), `outline`, `inverse` (only for segmented/active states), `signal` (rare). Sizes `md` / `sm`.
- **Nav**: floating glass capsule, centred links, dropdowns with title and one-line description, Settings (theme, language), member login, purple CTA.
- **Tags**: mono pill; purple for categories, neutral for meta, orange for status.
- **Cards**: `--surface`, 1px border, `--radius-card`; photo cards show the picture whole, never cropped faces. Exceptions with the pixel-corner frame: prize cards (`.prize`) and news cards (`.post-card`).
- **Placeholders**: any missing content is a grey skeleton frame plus a dashed mono tag "Updating soon" (`.soon-line`, `.soon-tag`). Never invent copy to fill a gap.
- **Impact**: three figures right under the hero, no boxes: hairline above with a short brand-gradient tick that grows on hover, mono index, semibold numerals (600, tabular, up to 84px) whose `+` uses the brand gradient as text fill, mono uppercase caption, a mono note crediting the source. The gradient is allowed as text fill and hairline only, never as a background.
- **Showcase**: the six solutions as a static three-column grid. Each card is a 3:2 pixel-cornered media frame (whole photo with a logo pill, or the logo on a plain surface), then name, category label and one line. The logo marquee follows directly below.
- **Footer**: black. A dim giant wordmark sits fully visible above a rounded `--surface` panel; the panel holds tagline, primary CTA, mono contact block and four bracketed link columns, then a hairline, the disclaimer, copyright and socials.
- **FAQ**: centred heading, narrow (760px) list of native `<details>` rows between hairlines, circular plus icon that turns purple and becomes a minus when open.

## 6. Layout patterns

Impact figures after the hero · partner row · sticky split (heading left, cards pop up right) · slim solutions logo strip (`#solutions`) · prize grid · partner row (one line of equal logos, UTS and HCMUT centred) · quote carousel · team teaser with large portraits · news grid · contact (two columns) · black footer. Section rhythm: `--section-y` padding, headings left-aligned for content sections and centred for visual ones (story, team, partners, testimonials, closing).

## 7. Motion

Reveal on scroll (`data-reveal`, `data-reveal="pop"` for cards), count-up numbers (grouped by language), Lenis smooth scroll, theme change as a single page cross-fade (View Transitions). Everything respects `prefers-reduced-motion`.

## 8. Voice

Plain, specific, short. Say what the product does and who it is for; credit prizes and press to their organisers. English first, Vietnamese in full (`content.vi.ts`).
