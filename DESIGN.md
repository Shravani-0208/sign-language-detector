# Design Brief

## Direction

Sign Language Detector — Real-time gesture recognition interface designed for live webcam interaction with a structured learning library and practice validation.

## Tone

Minimalist, tech-forward, content-focused. Dark mode primary with purposeful cyan/teal accent for gesture detection state, amber for practice validation. No decoration; every visual choice serves clarity.

## Differentiation

Gesture detection card as hero element with real-time highlighted output text and confidence percentage. Learning cards use subtle depth and cyan accent badges. Motion is reserved for gesture match feedback (micro-animations, glow, scale).

## Color Palette

| Token      | OKLCH           | Role                        |
| ---------- | --------------- | --------------------------- |
| background | 0.12 0.01 260   | Dark card/content surfaces  |
| foreground | 0.95 0.01 260   | Primary text on dark        |
| card       | 0.16 0.015 260  | Elevated card backgrounds   |
| primary    | 0.72 0.2 180    | Gesture detection highlight |
| accent     | 0.78 0.2 50     | Practice validation amber   |
| muted      | 0.2 0.02 260    | Secondary surfaces          |
| border     | 0.25 0.015 260  | Subtle dividers             |

## Typography

- Display: Space Grotesk — headings, gesture output, hero text. Clean tech-forward serif-free aesthetic.
- Body: DM Sans — labels, descriptions, UI copy. Neutral, readable at all sizes.
- Mono: Geist Mono — timestamps, confidence scores, code.

## Elevation & Depth

Minimal shadow hierarchy: card layers use subtle 1px borders and 4px rounded corners. Detection card elevated with `shadow-lg`. Hover states scale `1.05` + enhanced shadow for tactile feedback.

## Structural Zones

| Zone      | Background            | Border                 | Notes                                  |
| --------- | --------------------- | ---------------------- | -------------------------------------- |
| Header    | card (0.16 0.015 260) | border (0.25 0.015)    | Dark header with logo, dark mode toggle |
| Detection | card + ring-2 primary | primary ring on active | Live video feed + output text below    |
| Library   | background            | card border            | Grid of gesture cards, alternating z   |
| Practice  | card + accent ring    | accent on match        | Practice session with validation       |
| Footer    | muted (0.2 0.02)      | border top             | Navigation, secondary actions          |

## Spacing & Rhythm

Section gaps: `2rem (md:3rem)`. Content grouping: `1.5rem` between sections. Micro-spacing: `0.5rem` card padding, `1rem` label margins. Rhythm through density contrast: spacious header/footer, compact learning grid.

## Component Patterns

- Buttons: Primary (teal), secondary (muted), destructive (red). Hover: scale `1.05`, shadow enhanced.
- Cards: `rounded-lg`, `border-border`, `bg-card`. Learning cards: cyan accent badge top-right.
- Badges: Gesture label + confidence, accent color, `text-xs font-semibold`.

## Motion

- Entrance: Cards fade-in + slide-up (0.3s ease-out). Page transitions: opacity 0.2s.
- Hover: Card scale `1.05`, shadow enhance. Button ripple (subtle, 0.15s).
- Decorative: Gesture match triggers pulse-success ring (0.6s, amber accent). Loading spinner on detection.

## Constraints

- Maximum 5 colors in palette (background, foreground, primary, accent, muted).
- No gradients; solid OKLCH colors only.
- Card radius: `rounded-lg` (0.625rem) consistent. Button radius: `rounded-md` (0.375rem).
- Accessibility: AA+ contrast verified. Dark mode default; optional light mode via toggle.

## Signature Detail

Real-time gesture output text highlighted in cyan with confidence percentage below. Gesture match in practice mode triggers amber pulse ring expanding outward — creates memorable, tactile feedback without distraction.
