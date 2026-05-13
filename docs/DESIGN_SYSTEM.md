# Portfolio Design System

## Intent

This portfolio uses a hybrid mood:

- A warm, editorial hero inspired by premium personal-brand landing pages.
- Darker interactive sections underneath for depth, motion, and clearer focus on work.

The goal is to feel immediately impressive without becoming noisy.

## Color Tokens

- `Hero background`: `#fbf1e8` family with soft peach highlights
- `Canvas background`: `#0b0b10`
- `Primary surface`: `#101319`
- `Secondary surface`: `#161922`
- `Warm accent`: `#ff934a`
- `Warm accent soft`: `#ffc48f`
- `Cool accent`: `#6abfff`
- `Primary text`: `#ffffff`
- `Muted text`: `rgba(255,255,255,0.62)`

## Typography

- Primary UI font: `Inter`
- Display font: `Inter` with tight tracking and high weight
- Script accent: system cursive fallback stack for the hero sentence

### Type Rules

- Hero name uses extra-bold display sizing with tight line-height.
- Section titles use strong, compact line-height.
- Supporting copy stays between `text-base` and `text-lg` with generous line-height.
- Small labels use wide tracking and restrained size for contrast.

## Spacing

- Major sections use `py-20` to `py-28`
- Large card radii stay in the `1.5rem` to `2rem` range
- Hero content spacing is intentionally airy to preserve the portrait composition

## Component Usage

- `FloatingNav`: secondary navigation that appears after scroll
- `MovingBorderButton`: primary CTA emphasis
- `MagneticButton`: tactile secondary CTA treatment
- `ParallaxScroll`: work gallery motion layer
- `StickyScroll`: process narrative and reveal pacing
- `TracingBeam`: visual continuity for long-form process content
- `CardSpotlight`: service cards with interactive hover energy

## Motion Rules

- Motion should clarify focus, not decorate every element.
- Hero tool badges float slowly with wide easing.
- CTA motion is short and responsive.
- Parallax and sticky sections create depth without forcing aggressive movement.
- Reduced-motion users get effectively static behavior through global overrides.

## Responsive Rules

- Hero collapses from two columns to one stack on smaller screens.
- Portrait remains visible and centered; floating badges stay within the frame.
- Large headlines wrap naturally without viewport-based font scaling.
- Chips and CTA rows must remain tappable and avoid horizontal overflow.

## Accessibility

- Interactive controls retain semantic anchors and buttons.
- Text contrast is kept high in dark sections and readable in the warm hero.
- Reduced-motion behavior is enforced with `prefers-reduced-motion`.
- Navigation and inquiry CTAs remain accessible without hidden hover-only actions.

## Handoff Notes

- Keep any new sections inside the same warm-to-dark narrative.
- Do not introduce unrelated bright hues without purpose.
- If a new component is added, prefer existing motion language before inventing a new one.
