# Odylytics — Design Guidelines (v4)

Direction: an AI-firm site in the spirit of Anthropic, Factory and Cursor. Calm warm-white pages, large sans headlines, serif body text, mono labels with an orange square, one dark panel per page for contrast. Black and white first; purple and orange only as accents taken from the Odylytics logo. No italics anywhere, no gradients, no glow, no box shadows.

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
| `--bg` | `#F3F2EE` | `#0E0D10` |
| `--surface` (cards) | `#FFFFFF` | `#18171B` |
| `--text` / `--text-2` / `--text-3` | `#141413` / `#55534D` / `#7E7B74` | `#F3F2EE` / `#B7B4AD` / `#8A8780` |
| `--accent` (purple, action) | `#AE0BFF` | same |
| `--signal` (orange, markers, highlights) | `#FF8C00` | same |

Purple is the single CTA colour (`Get in touch`). Primary buttons are black on light, white on dark. Orange text on light uses `--signal-ink`. Partner logos are white source files, turned black on light with `--logo-filter`.

## Shape and motion

Cards 20px radius, buttons 10px, pills 999px. 1px borders only where needed. Motion: a 16px fade-up on scroll (`data-reveal`), the pulsing circuit in the hero, hover lift of 3px on cards. Everything respects `prefers-reduced-motion`.

## Patterns

Page head (label + large title + serif lead), section head (label + title + link), card grids, timeline, legal layout (sticky contents + body), dark closing panel. Reuse these; add a pattern here before inventing one.
