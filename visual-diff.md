# Visual QA Diff

Comparison between `desktop-reference.png` and `local-screenshot.png`.

## P0: Major Structural Mismatches
1. **Header Layout**: The main navigation links are completely squished together without spacing ("HomeServicesRoutesFleet...").
2. **Top Bar**: The top utility bar layout is scattered; contact info and social icons are misaligned.
3. **Why Choose Us Text**: The entire "Why Choose Us" text block (heading, paragraph, bullets) is rendering in dark text against a dark background, making it completely illegible.
4. **CTA Suitcase Background**: The yellow CTA suitcase image has a solid white background block that `mix-blend-multiply` failed to hide properly, breaking the yellow section design.
5. **Booking Form Inputs**: Form inputs lack height, padding, and border definitions, making them look like raw text strings. Icons are overlapping the placeholder text.

## P1: Obvious Visual Mismatches
1. **Hero Car Positioning**: The hero taxi car is much smaller than the reference and sits inside a bounding box rather than overlapping dynamically on the left.
2. **Fleet Card Backgrounds**: The fleet vehicle images have an unappealing gray background box (`bg-slate-50`) that breaks the clean white aesthetic of the reference cards.
3. **Hero Background**: The city bridge background is too light/washed out and lacks the proper gradient fade to match the reference's atmospheric look.
4. **Testimonials Layout**: The right-side car in the testimonials section feels disjointed and overlaps awkwardly.

## P2: Medium Mismatches
1. **Fleet Buttons**: The "Book Now" buttons in the fleet cards have inadequate padding.
2. **Packages Price Tags**: The "Starts at ₹..." labels on the packages are misaligned and lack proper padding.

## P3: Minor Polish
1. **Typography Scale**: The hero headline is slightly smaller than the reference.
2. **Shadows**: Card shadows are slightly too harsh compared to the soft, diffused shadows in the reference.
