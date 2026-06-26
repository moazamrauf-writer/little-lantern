---
name: gracious-foundation-design
description: Use this skill to generate well-branded interfaces and assets for Gracious Foundation International (GFI), an NGO serving autistic children. Contains essential design guidelines, colors, typography, logo assets, and UI components for prototyping or production work.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/logos/` and create static HTML files that link `styles.css`. Use the GFI brand palette: Deep Teal `#1A7A6B`, Golden Amber `#C8A64A`, Warm Amber `#E8A33D`, Light Mint `#B8D8D0`, Warm Cream `#FAF7F0`, Charcoal `#2C2C2C`. Typography: Cormorant Garamond (display), Montserrat (UI/body), Dancing Script (script accents) — all available from Google Fonts.

If working on production code, reference `styles.css` for all CSS custom properties (135 tokens). Components are in `components/core/` as named React exports — load via `_ds_bundle.js` and access as `window.GraciousFoundationInternationalDesignSystem_e98c68.Button` etc.

Key brand rules:
- Background is ALWAYS warm cream `#FAF7F0`, never cold white
- Buttons are pill-shaped (border-radius: 9999px) — no square buttons
- Donate CTAs use Gold `#C8A64A`, not teal
- "FOUNDATION INTERNATIONAL" label style: ALL CAPS, Montserrat, heavy letter-spacing
- Tone: warm, hopeful, dignified — language centres the child's strength, never deficits
- No emoji in formal materials; ∞ (infinity) and puzzle pieces are autism awareness symbols

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts or production code depending on the need.
