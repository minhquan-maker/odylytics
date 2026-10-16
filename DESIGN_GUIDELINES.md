# Odylytics — Design Guidelines (v4)

Direction: an AI-firm site in the spirit of Anthropic, Factory and Cursor. Calm warm-white pages, large sans headlines, serif body text, bracketed full-orange mono labels like [ PARTNERSHIPS ], one dark panel per page for contrast. Black and white first; purple and orange only as accents taken from the Odylytics logo. No italics anywhere, no gradients, no glow, no box shadows.

## Type

| Role | Font | Notes |
|---|---|---|
| Headings, UI, buttons, nav | Hanken Grotesk (variable, 500) | Tight tracking (-0.02 to -0.035em) |
| Body and long text | Source Serif 4 (variable) | 18px, `--text-2` for secondary |
| Labels, status, numbers in tables | JetBrains Mono, uppercase | 11–12px, 0.06em tracking, orange square marker (`.label`) |

Never use `font-style: italic`. Emphasis in headlines is an underline (`<u>`, purple), not a style change.

## Colour (semantic tokens only)

Light is the default; dark via `<html data-theme="dark">`. `.scope-dark` forces the dark tokens (footer, impact band, closing panel).

| Token | Light | Dark |
|---|---|---|
| `--bg` | `#F3F2EE` | `#141413` |
| `--surface` (cards) | `#FFFFFF` | `#1F1E1D` |
| `--text` / `--text-2` / `--text-3` | `#141413` / `#55534D` / `#7E7B74` | `#F3F2EE` / `#B7B4AD` / `#8A8780` |
| `--accent` (purple, action) | `#AE0BFF` | same |
| `--signal` (orange, markers, highlights) | `#FF8C00` | same |

Purple is the single CTA colour (`Get in touch`). Primary buttons are black on light, white on dark. Orange text on light uses `--signal-ink`. Partner logos are white source files, turned black on light with `--logo-filter`.

## Shape and motion

Everything is square: no border radius on cards, buttons, inputs, chips, dialogs or avatars (`--r-*` tokens are 0). Buttons and chips are mono uppercase with a 1px border. 1px borders only where needed. Motion: a 16px fade-up on scroll (`data-reveal`), the pulsing circuit in the hero, hover lift of 3px on cards, and a full-screen cut between major sections (`PageTransition`: black screen, ODYLYTICS types itself with a glitch via ODYLYTICX, then wipes away). Everything respects `prefers-reduced-motion`.

## Patterns

Page head (label + large title + serif lead), section head (label + title + link), card grids, timeline, legal layout (sticky contents + body), dark closing panel. Reuse these; add a pattern here before inventing one.

## Lines

The site uses thin rules to separate sections, lists and facts. The one exception is Research (overview, publications, ongoing and article pages): there, no lines between sections, list rows or facts; space and a tint on hover do the separating.


## Ongoing research index

Keep the existing square card grid with compact 4:1 covers (maximum 160px high). Search, application-area and sort controls sit above multi-select AI field chips; controls stack on narrow screens. Reuse semantic surface, border and text tokens in both themes. Research codes use mono labels; field tags use the secondary surface without competing with orange area markers.

Entries in `src/data/research.ts` use permanent codes (`ODR-001`, `ODR-002`, then `ODR-003`) and multiple `fields` from `FIELDS`. Do not renumber codes after filtering or sorting. Add an actual ISO `date` when known; undated entries say "Date not set" and sort after dated entries in either time direction. Search matches title, code, summary, area and field labels without case or accent sensitivity. Selected AI fields match any selected field; area and search further narrow those results. Filters and sorting persist in the hash URL for sharing and reloads.

Reference lock: preserve the user's screenshot and existing Odylytics design system (Hanken headings/UI, serif summaries, JetBrains Mono labels, square surfaces, orange research markers). Refero live research was unavailable; bundled craft guidance supplies explicit input labels, visible keyboard focus, semantic controls, live result counts and responsive sizing.
