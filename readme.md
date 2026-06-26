# Gracious Foundation International — Design System

> **"Support. Inclusion. Hope."**
> Empowering children with autism. Enriching lives. Building a more inclusive world.

---

## About the Organisation

**Gracious Foundation International (GFI)** is a registered international NGO dedicated to the welfare of autistic children and the global spread of autism awareness. Their work spans direct support services, family education, community inclusion programmes, and advocacy campaigns. The taglines seen across brand materials — "Serving Autistic Children", "Support. Inclusion. Hope.", "Supporting · Empowering · Belonging", and "Empowering Potential. Celebrating Differences." — reflect a mission rooted in dignity, compassion, and evidence-based care.

The brand was designed by **Diana Redhouse**.

---

## Sources

- **Local logo folder** (`Gracious logos/`) — 56+ logo variants/explorations provided via File System Access API mount. Covers illustrative, emblematic, abstract, organic, and brush-texture logo treatments.
- **Brand style sheet** (`uploads/logo27.jpg`) — definitive six-colour palette swatches with hex codes, confirmed across `logo10.jpg`, `logo20.jpg`, `logo27.jpg`, and `logo40.jpg`.
- No Figma file or codebase was provided. All token and component decisions were derived from careful study of the visual assets.

---

## Content Fundamentals

### Tone of Voice
- **Warm, hopeful, dignified.** GFI speaks *with* autistic children and families, not *about* them. Language centres the child's strength and potential, never their deficits.
- **Third person for the organisation** ("Gracious Foundation International supports…"), **second person for the audience** ("Your donation helps…").
- **We / You framing:** Generous use of "we" to signal collective purpose; "you" to invite participation without pressure.

### Casing
- **Headlines:** Title Case for formal campaign headlines; Sentence case for body-level headings.
- **Wordmark:** "GRACIOUS" in all-caps; "FOUNDATION INTERNATIONAL" in tracked small caps (rendered as all-caps sans-serif).
- **UI labels, buttons, nav items:** ALL CAPS with generous letter-spacing (`--ls-widest`), reinforcing the brand's graphic identity.
- **Body copy:** Sentence case, readable paragraph length (~60–70 chars per line).

### Emoji & Symbols
- Emoji are **not used** in formal materials.
- The **infinity symbol (∞)** appears in some logos and is widely used in autism advocacy to represent neurodiversity. GFI occasionally uses it as a heart-infinity combo mark (`♾`).
- The **puzzle piece** appears as an autism awareness symbol in several logos.
- **Dots and stars** (`·`, `✦`) appear as dividers and decorative accents in wordmark treatments.

### Copy Examples
- *"Every child deserves to be seen, heard, and celebrated."*
- *"Support. Inclusion. Hope."*
- *"Empowering Potential. Celebrating Differences."*
- *"Supporting · Empowering · Belonging"*
- *"Empowering children with autism. Enriching lives. Building a more inclusive world."*

---

## Visual Foundations

### Colour System
Six confirmed brand colours forming a warm, nature-inspired palette:

| Name           | Hex       | Role                                      |
|----------------|-----------|-------------------------------------------|
| Deep Teal      | `#1A7A6B` | Primary brand colour; CTAs, headers, icons |
| Golden Amber   | `#C8A64A` | Secondary accent; donate CTAs, highlights  |
| Warm Amber     | `#E8A33D` | Tertiary warmth; hover states, dividers    |
| Light Mint     | `#B8D8D0` | Soft supporting; card backgrounds, tints   |
| Warm Cream     | `#FAF7F0` | Page background; the "canvas" of the brand |
| Warm Charcoal  | `#2C2C2C` | Primary text; near-black with warmth       |

Background is **always warm cream `#FAF7F0`** — never cold white. This single decision defines the brand's warmth.

### Typography
- **Display (Cormorant Garamond):** Used for the "Gracious" wordmark and all large emotional headlines. Elegant, slightly calligraphic serif. *Substituted from Google Fonts — original font file not provided (see caveats).*
- **UI / Body (Montserrat):** Used for "FOUNDATION INTERNATIONAL" and all body copy, UI elements, buttons, and labels. Geometric sans-serif with excellent tracking at small caps sizes.
- **Script Accent (Dancing Script):** Used sparingly for handwritten-style accents (seen in brand designer credit). *Google Fonts substitution.*

### Visual Motifs
GFI's visual language is rich in organic, nature-inspired symbolism:
- **Birds:** Herons, doves, phoenixes, and hummingbirds appear across logo variants — symbols of freedom, elevation, and protection.
- **Leaves & botanicals:** Flowing leaf shapes, lotus forms, and floral motifs — growth, nurturing, nature.
- **Child silhouettes:** A recurring motif — a child reaching upward, a child in profile, a child held by protective hands.
- **Hands:** Cupped, open, protective hands — care and support.
- **Circular forms:** Enclosing circles, spirals, zen-circle strokes — wholeness and inclusion.
- **Flowing curves/waves:** Ribbon-like organic curves across backgrounds — movement, hope.
- **Infinity / puzzle pieces:** Autism awareness symbols embedded into mark designs.
- **Stars and dots:** Scattered decorative elements evoking curiosity and the cosmos.

### Backgrounds
- **Primary:** `#FAF7F0` warm cream — used universally.
- **Teal sections:** Deep teal `#1A7A6B` for hero sections, CTAs, and high-contrast highlights.
- **Mint wash sections:** Light mint `#B8D8D0` for gentle section breaks.
- No photographic full-bleed images defined; logo assets show nature scenes (water, tropical gardens) used as muted/ghosted backgrounds.
- No repeating patterns or gradients in the primary palette (gradients appear in some logo exploration variants but are not the primary system).

### Cards
- White or cream background, `--shadow-sm` elevation, `--radius-lg` (12px) or `--radius-xl` (16px) rounding.
- Thin top or left accent in teal or gold for "featured" state.
- Hover: lift to `--shadow-md`, subtle `translateY(-2px)` transform.
- No harsh borders — borders at most `1px rgba(26,122,107,0.15)` (warm teal-tinted).

### Hover & Press States
- **Buttons:** Darken background by ~10% (`--color-teal-dark`, `--color-gold-dark`), subtle scale `1.02`.
- **Cards:** `translateY(-2px)` lift + shadow upgrade.
- **Links:** Colour shift from teal to gold (`#C8A64A`), no underline on nav, underline on inline prose.
- **Press:** `scale(0.97)` + slight shadow flatten.

### Corner Radii
- Small tags/badges: `--radius-sm` (4px)
- Buttons: `--radius-pill` (9999px) — fully rounded pill shape
- Cards: `--radius-lg` (12px) to `--radius-xl` (16px)
- Modals: `--radius-2xl` (24px)
- Avatars/icons: `--radius-full` (50%)

### Borders
- Generally avoided in favour of shadow separation.
- When used: `1px solid rgba(26,122,107,0.15)` — teal-tinted, very subtle.
- Input fields: `1.5px solid rgba(26,122,107,0.3)` default, `2px solid #1A7A6B` on focus.

### Shadows
Teal-tinted warm shadows rather than cold grays (see `tokens/elevation.css`). Shadow philosophy: always reinforces the brand's green-teal warmth.

### Animation
- **Easing:** Gentle `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — no bouncy springs or snappy keyframes.
- **Durations:** 150ms (micro), 250ms (standard), 400ms (page-level).
- **Transitions:** Colour, shadow, and transform transitions on interactive elements.
- **No infinite loops** in UI; subtle parallax and entrance animations acceptable for hero sections.

### Imagery Vibe
Warm-toned, soft-focus photography. Natural settings (gardens, open spaces). Children in motion — expressive, joyful. Never clinical or institutional.

---

## Iconography

No custom icon font or SVG sprite was provided. Based on the logo materials, GFI uses:
- **Outline-style icons** at the UI level (family/people pictograms seen in `logo55.jpg`)
- **Infinity hearts** and puzzle pieces as symbolic accents
- CDN **Lucide Icons** is used in components as the nearest match to the clean outline style implied by the brand. This is a substitution — the organisation's final icon set is not confirmed.

All logo assets are in `assets/logos/` (56 files). Key reference logos:
- `logo27.jpg` — official palette reference (Diana Redhouse)
- `logo7.png` — heron + child, most polished illustrative mark
- `logo16.png` — child-face + leaves, highest-fidelity mark
- `logo40.jpg` — child silhouette + swoosh, clean modern mark
- `logo3.jpeg` — G monogram + star, clean geometric mark

---

## File Index

```
styles.css                          ← Global entry point (imports only)

tokens/
  colors.css                        ← All colour tokens + semantic aliases
  typography.css                    ← Font imports + type scale tokens
  spacing.css                       ← Spacing scale, radii, max-widths
  elevation.css                     ← Shadow tokens, focus rings
  motion.css                        ← Duration + easing tokens

assets/
  logos/                            ← 56 logo variants (logo1–logo56)

components/
  core/
    Button.jsx / .d.ts / .prompt.md ← Primary/secondary/ghost/donate buttons
    Badge.jsx  / .d.ts / .prompt.md ← Awareness, gold, mint, neutral badges
    Card.jsx   / .d.ts / .prompt.md ← Default, tinted, featured, impact cards
    Input.jsx  / .d.ts / .prompt.md ← Text, email, textarea inputs
    Avatar.jsx / .d.ts / .prompt.md ← Person display with image or initials
    core.card.html                  ← DS tab card for core components

guidelines/
  colors-primary.card.html          ← Primary brand swatches
  colors-supporting.card.html       ← Mint, cream, charcoal swatches
  type-display.card.html            ← Cormorant Garamond specimens
  type-body.card.html               ← Montserrat specimens
  type-scale.card.html              ← Full type scale
  spacing-scale.card.html           ← Spacing token bars
  elevation.card.html               ← Shadow / elevation specimens
  motion.card.html                  ← Motion token reference
  brand-logos.card.html             ← Logo showcase
  brand-taglines.card.html          ← Taglines & tone specimens
  brand-motifs.card.html            ← Visual motifs reference

ui_kits/
  website/
    index.html                      ← NGO marketing website (interactive)
    Nav.jsx                         ← Sticky navigation
    Hero.jsx                        ← Hero section
    Programs.jsx                    ← Programs / what we do
    Impact.jsx                      ← Impact statistics
    Donate.jsx                      ← Donation CTA section
    Footer.jsx                      ← Site footer

templates/                          ← (future: deck + doc templates)

readme.md                           ← This file
SKILL.md                            ← Agent skill definition
```

---

## File Index

```
styles.css                          ← Global entry point (imports only)

tokens/
  colors.css                        ← All colour tokens + semantic aliases
  typography.css                    ← Font imports + type scale tokens
  spacing.css                       ← Spacing scale, radii, max-widths
  elevation.css                     ← Shadow tokens, focus rings
  motion.css                        ← Duration + easing tokens

assets/
  logos/                            ← 56 logo variants (logo1–logo56)
                                      Key refs: logo7.png, logo16.png, logo27.jpg, logo40.jpg

components/core/
  Button.jsx / .d.ts / .prompt.md   ← primary / secondary / ghost / donate / on-dark
  Badge.jsx  / .d.ts / .prompt.md   ← awareness / gold / mint / neutral / outline
  Card.jsx   / .d.ts / .prompt.md   ← default / tinted / featured / impact / gold
  Input.jsx  / .d.ts / .prompt.md   ← text / email / textarea — normal / error / success
  Avatar.jsx / .d.ts / .prompt.md   ← image or initials — xs › xl
  core.card.html                    ← DS tab card showing all component states

guidelines/
  colors-primary.card.html          ← Deep Teal · Golden Amber · Warm Amber
  colors-supporting.card.html       ← Mint · Cream · Charcoal tints
  brand-palette.card.html           ← All 6 brand colours
  brand-logos.card.html             ← Logo gallery (10 key variants)
  brand-taglines.card.html          ← Taglines & tone specimens
  type-display.card.html            ← Cormorant Garamond specimens
  type-body.card.html               ← Montserrat specimens
  type-scale.card.html              ← Full size ramp xs–7xl
  type-script.card.html             ← Dancing Script specimens
  spacing-scale.card.html           ← 4px grid token bars
  radii.card.html                   ← Border-radius scale
  elevation.card.html               ← Shadow / elevation specimens

ui_kits/website/
  index.html                        ← Full NGO marketing website (React, interactive)
                                      Sections: Nav · Hero · Stats · Programs ·
                                      Awareness Banner · Donate · Testimonial · Footer

SKILL.md                            ← Agent skill definition (for Claude Code)
readme.md                           ← This file
```

---

## Caveats

1. **Font files not provided.** Cormorant Garamond and Montserrat are loaded from Google Fonts as the closest matches to what was seen in the logo assets. Original font files should replace these in production.
2. **No final logo file.** The 56 logos are all design explorations; none is designated "final". `logo27.jpg` and `logo7.png` are recommended as the most resolved. A vector `.svg` or transparent-background `.png` primary logo is needed.
3. **No codebase or Figma provided.** The design system was built entirely from the logo exploration images. Token decisions and component designs are inferred, not extracted from production code.
4. **Icon system TBD.** Lucide Icons is used as a placeholder CDN reference. GFI's actual icon set is not confirmed.
