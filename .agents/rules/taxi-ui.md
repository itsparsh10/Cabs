# Taxi Website UI Rules

You are implementing a production-quality taxi booking website from a supplied visual reference screenshot.

## Primary Objective

Reproduce the supplied screenshot as closely as reasonably possible while creating a real responsive Next.js application.

The screenshot is the visual source of truth.

Do not invent a completely different design.

## Technology

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui where useful
- Lucide React icons
- next/image for raster images
- Responsive CSS
- Semantic HTML

## Visual Direction

The website should feel:

- premium
- trustworthy
- clean
- Indian transportation focused
- conversion oriented
- light
- modern
- professional

Primary visual language:

- white backgrounds
- warm yellow/orange brand accent
- dark navy text
- subtle gray borders
- soft shadows
- rounded cards
- compact professional typography

## Screenshot Fidelity

When implementing a section:

1. Compare structure against the reference.
2. Compare horizontal spacing.
3. Compare vertical spacing.
4. Compare typography.
5. Compare card dimensions.
6. Compare image positioning.
7. Compare button sizes.
8. Compare border radius.
9. Compare shadows.
10. Compare responsive behavior.

Do not replace important visual elements with generic placeholders unless the required asset genuinely does not exist.

## Layout

Use a consistent centered container.

Desktop:
- approximately 1200–1280px maximum content width
- generous horizontal spacing
- multi-column layouts

Tablet:
- reduce column count
- maintain hierarchy

Mobile:
- single-column layout
- navigation becomes compact/mobile
- hero form becomes stacked
- cards become horizontal/vertical as appropriate
- CTA buttons remain touch friendly

## Components

Prefer reusable components.

Do not put the entire homepage into one enormous component.

Recommended structure:

Header
TopBar
Navbar
Hero
BookingForm
ServiceCard
RouteCard
FleetCard
PackageCard
WhyChooseUs
Stats
TestimonialCard
Testimonials
CTASection
Footer

## Images

Use next/image.

Do not stretch images.

Preserve aspect ratios.

Use object-fit and object-position intentionally.

Hero imagery should use appropriate positioning rather than arbitrary scaling.

## Icons

Use Lucide React for interface icons.

Do not use emoji as UI icons.

## Animation

Keep animation subtle.

Use:
- hover transitions
- small card elevation
- button feedback
- restrained reveal animation

Do not over-animate.

## Accessibility

All meaningful images require alt text.

All form fields require labels.

Buttons must have accessible names.

Maintain keyboard navigation.

Maintain visible focus states.

## Code Quality

Do not create duplicated CSS.

Use reusable components.

Use constants/data arrays for repeated cards.

Avoid hardcoded repeated markup.

Do not modify unrelated project files.

## Critical Rule

Never declare the implementation complete merely because the application compiles.

The browser rendering must be visually inspected.

After implementation, run the application and compare the rendered result against the supplied screenshot.

Fix visual mismatches iteratively.

## Asset Strategy

Do not blindly search for or copy third-party assets. If the original asset from the reference is unavailable:
1. Determine what visual role the asset serves.
2. Use a locally available licensed asset or generated replacement.
3. Preserve its approximate composition, scale, color balance, and visual weight.
4. Do not let missing assets change the layout.
