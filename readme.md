# NavisPay design system

NavisPay is a B2B cross-border payments platform -- a ledger, routing engine and settlement network for sending business payments across corridors (EUR -> SGD, EUR -> USD, EUR -> PHP, GBP -> SGD, etc.) with same-day or under-8-second settlement. The product surface documented here is the operator console: treasury and ops teams sending payments, reviewing compliance holds, managing beneficiaries and reconciling the ledger.

**Source.** This system was built entirely from one file the user supplied: `uploads/NavisPay-DesignSystem2.html`, a self-contained style guide (tokens + live component specimens + a full Ledger dashboard mockup, light and dark). No Figma file, codebase or slide deck was attached -- everything here is a direct translation of that document into reusable tokens and components. If a real Figma/codebase source becomes available later, treat it as the new ground truth and reconcile against it.

## Index

- `styles.css` -- the single global stylesheet. Import this one file; it pulls in every token and component CSS file below.
- `tokens/` -- `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `fonts.css` (local @font-face).
- `assets/fonts/` -- Archivo (variable, weights 100-900) and IBM Plex Mono (400, 500) as woff2, extracted from the source file.
- `assets/logo/` -- `navispay-mark.svg` and `navispay-logotype.svg`, supplied directly by the user.
- `components/` -- 16 component groups, each `{Name}.jsx` + `{Name}.d.ts` + `{Name}.prompt.md` + one `*.card.html`:
  icons, buttons, links, forms (fields + selection controls), dropdown, pills (pill/chip/badge), avatars, navigation (tabs/breadcrumbs/pagination), overlay (menu/popover/tooltip), feedback (modal/dialog/toast/alert), progress (stepper/progress bar), table, calendar (date picker), shell (sidebar/header/stat card/app shell, light + dark).
- `ui_kits/dashboard/` -- an interactive click-through of the operator console: Ledger, Beneficiaries, and a 3-step send-payment modal, with a light/dark band toggle.
- `guidelines/` -- 15 foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

## Content fundamentals

The source document's own prose is the clearest evidence of house style, since no marketing or app copy beyond it was supplied:

- **Direct and structural, not persuasive.** Sentences state a rule and its consequence: "Surfaces are square -- Radius 0 on cards, inputs, menus, tables and modals." No hedging, no exclamation points, no marketing adjectives.
- **Second person is rare; the system speaks about itself.** Copy describes what the system *does*, not what "you" should feel: "The page below is the system rendering itself."
- **Sentence case everywhere.** Button labels, tab labels and headings are sentence case with a verb ("Send payment", "Confirm and send") -- never uppercase, never a bare noun.
- **No emoji.** The only iconography in copy is the do/don't checkmark and cross in the Principles section.
- **Numbers and units are exact, never rounded for effect.** "6.4s", "Under 8 seconds", "1.7:1 contrast" -- precision is part of the voice for a payments product.
- **One instructive sentence, then one actionable sentence.** Alert and note copy follows this shape consistently: "Three payments were rejected. Correct the details and resubmit."

## Visual foundations

- **Type.** Two faces only: Archivo (headings, body, UI labels) and IBM Plex Mono (anything a machine produced -- a label, a figure, a status, a table header). Headings run heavy and tight (800/900 weight, -0.03em tracking); mono runs small, loose and uppercase (9-13px, 0.12em tracking). Don't close that gap by tracking body text or setting mono at body size.
- **Color.** Four brand hues (navy, navy hover/active, teal, teal-dark), eight light-band semantic slots, four dark-band slots, six payment-status colors, four alert colors -- and nothing else. Bright teal (`--nv-teal`) is a dark-band ink and button fill only; it fails contrast on light backgrounds and must never appear as light-band text. `--nv-teal-dark` is the light-band equivalent.
- **The one structural rule: bands.** Every page is a stack of alternating light (`#F3F3F3` canvas) and dark (`.band-dark`, navy canvas) sections, never two of the same in a row. A component's markup never changes between bands -- `.band-dark` re-points the same CSS custom properties underneath it.
- **Surfaces are square.** Radius 0 is the rule for cards, inputs, menus, modals and tables. 4px exists only for buttons and button-shaped controls; 100px only for pills, badges, the switch track and avatars (via 50%).
- **Borders before shadows.** A 1px hairline separates almost everything. Exactly four shadows exist in the whole system: navy-button hover, teal-CTA hover, floating-surface (menu/popover/modal/toast), and a single accent glow reserved for one card per screen. A fifth shadow is a sign the layout needs a border or a gap instead.
- **Decoration budget: two motifs, both restrained.** A 32px grid-line texture and small HUD-style corner marks (`.frame-corners`) appear on a handful of demonstrative cards. No gradients, no glass/blur panels (aside from the modal scrim's 3px blur), no decorative illustration.
- **Motion.** One easing curve everywhere (`cubic-bezier(.16,1,.3,1)`), three durations (fast 0.2s for hover, base 0.3s for state changes, reveal 0.6s for scroll-in). Reveals fade + translate 24px up, staggered 0.08s apart. Respects `prefers-reduced-motion`.
- **Hover / press states.** Buttons darken (navy) or shift to teal (CTA) on hover and add their one permitted shadow; pressed states translate 1px down with the shadow removed. Ghost buttons gain a faint navy wash. Icon-only row actions are always at full opacity -- never hidden until hover, since that fails on touch.
- **Focus.** A single 3px teal ring (`--nv-ring`) on every focusable control, on both bands.
- **Numbers.** Anything that can change while the user watches -- a running total, a countdown, a rate -- is set in tabular-lining mono figures so layout never jitters.
- **Imagery.** None was supplied. The system uses no photography or illustration; if product screenshots or photography are added later, treat them as a new addition, not an existing convention.

## Logo

`assets/logo/navispay-mark.svg` (the compass-like mark, navy + teal gradient) and `assets/logo/navispay-logotype.svg` (mark + wordmark lockup) were supplied directly by the user and copied in as-is -- not reconstructed. The shell's sidebar brand block (`components/shell/Shell.jsx`) and `guidelines/brand-mark.html` both use the real mark now. Treat both files as fixed brand assets: don't recolor, redraw, or approximate them from memory elsewhere in the system.

## Iconography

One outline icon family, 24x24 grid, `stroke-width: 1.75`, round caps/joins, no fill, inherits `currentColor`. All 27 icons used in the source document were copied verbatim (as inline SVG path/shape data, not redrawn) into `components/icons/Icon.jsx`. Sizes in use: 16, 18, 20 (default, pairs with body text) and 24. No emoji, no icon font, no unicode glyphs-as-icons. Icon-only controls always carry an `aria-label` on the wrapping button.

## Intentional additions

None of the enumerated components required additions beyond what the source style guide defines -- the 21-section table of contents in the source document is the full component inventory, and every section has a corresponding component group here.

## Caveats & open questions

- **Single product surface.** The source only documents the operator console (ledger, beneficiaries, corridors). If NavisPay also has a marketing site, mobile app, or admin/back-office tool, those need their own source material to build UI kits for.
- **Fonts.** Archivo shipped as a single variable woff2 (covers all weights used, 400-900); IBM Plex Mono shipped as two static weights (400, 500) since that's all the source used. If heavier mono weights are needed later, they'll need to be sourced from Google Fonts.
