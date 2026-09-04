# Visual Specification: Taxi Booking Website

Based on the provided reference screenshot, this document outlines the structure, design language, and component layout for the Next.js implementation.

## 1. Overall Page Structure
- **Container Layout**: Centered content container (max-width: ~1200px - 1280px) for inner content, with full-bleed backgrounds for some sections.
- **Section Spacing**: Generous padding (approx. `py-16` or `py-20` in Tailwind) between sections to maintain a clean, airy feel.
- **Background Colors**: Alternating between solid white (`#FFFFFF`) and very light gray (`#F8FAFC` or `#F3F4F6`) to delineate sections.
- **Responsive Behavior**: Multi-column grids on desktop, gracefully stacking into single-column layouts on mobile.

## 2. Header Structure (Top Bar)
- **Background**: Light gray (`bg-gray-50`).
- **Typography**: Small, subtle (`text-sm`), dark gray text.
- **Left Side**: "24x7 Customer Support", Phone Icon + Contact Number.
- **Right Side**: Links ("About Us", "Contact Us", "FAQ") and social icons (Facebook, Instagram, WhatsApp).
- **Spacing**: Minimal vertical padding (`py-2`).

## 3. Navigation Layout
- **Background**: Solid white (`bg-white`), potentially sticky on scroll.
- **Logo**: Left-aligned, "BHARAT TAXI" with a yellow taxi icon.
- **Main Links**: Centered/Right-aligned. "Home" (active state in yellow), "Services" (with dropdown chevron), "Routes", "Fleet", "Packages", "About Us", "Contact".
- **CTA Buttons** (Far Right):
  - **Call Now**: White background, yellow border, yellow text, phone icon.
  - **WhatsApp Us**: Yellow background, dark text, WhatsApp icon.
- **Shadow**: Subtle bottom border or shadow separating it from the hero.

## 4. Hero Layout
- **Grid**: 2-column layout on desktop. Left column for typography/value prop, right column for the booking form.
- **Headline**: "Your Journey, Our Responsibility." 
  - "Your Journey," in dark navy.
  - "Our Responsibility." in primary yellow/orange.
- **Sub-headline**: Concise text about services (One-way, Round-trip, etc.).
- **Features List**: Three horizontal badges/tags ("24x7 Support", "Verified Drivers", "Clean & Safe Cabs") with checkmark icons.
- **Image Overlap**: A cutout image of a white car is placed on the left side, slightly breaking out of its container and adding depth.

## 5. Hero Background Composition
- **Visuals**: A soft, faded background image of a city skyline/bridge.
- **Overlay**: A light overlay or gradient to ensure text readability on the left and form visibility on the right.
- **Overall Feel**: Bright, welcoming, and modern.

## 6. Booking Form Structure
- **Container**: White background, soft drop shadow (`shadow-xl`), rounded corners (`rounded-2xl`).
- **Title**: "Book Your Taxi" (centered, bold).
- **Tabs/Segmented Control**: Four options ("One Way", "Round Trip", "Local", "Airport"). The active state is a yellow pill shape.
- **Inputs**: 
  - Pickup Location (with pin icon)
  - Drop Location (with pin icon)
  - 2-column grid for Pickup Date (calendar icon) and Pickup Time (clock icon)
  - Passengers Dropdown (1 Adult)
- **Submit Button**: Full width, yellow background, dark text, right arrow icon ("Get a Quote ->").
- **Footer**: "No hidden charges • Best price guarantee" with small green checkmarks.

## 7. Services Section
- **Headers**: 
  - Eyebrow: "OUR SERVICES" (yellow, uppercase, small tracking).
  - Main Title: "Taxi Services For Every Need" (navy).
- **Grid**: 4 columns (`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`).
- **Cards**:
  - White background, thin gray border, subtle hover shadow, rounded corners (`rounded-xl`).
  - Icons: Two-tone or line icons with a soft yellow circular background.
  - Text: Title (bold), short description (gray text).
  - Link: "Book [Service] ->" (yellow text, bold).

## 8. Popular Routes Section
- **Header Structure**: Title on the left ("Most Booked Routes"), "View All Routes ->" outline button on the right.
- **Grid**: 2 columns, 3 rows (or `flex-wrap` of 6 horizontal cards).
- **Cards**: 
  - Horizontal layout (`flex-row`).
  - Icon: Small orange/yellow city landmark graphic.
  - Text: "[City] -> [City]" (e.g., Surat -> Ahmedabad).
  - Link: "Get Quote ->" (yellow).

## 9. Fleet Section
- **Header**: "OUR FLEET", "Choose Your Comfortable Ride" + View All button.
- **Grid**: 4 to 8 columns depending on screen size (likely a slider or an 8-item grid wrapping to 4 per row).
- **Cards**:
  - Image: Cutout image of the car.
  - Title: Car model (e.g., Sedan, Innova Crysta).
  - Specs: Small icons for Seats, Bags, and AC.
  - Link: "Get Quote ->".

## 10. Packages Section
- **Header**: "TRAVEL PACKAGES", "Best Packages For You" + View All button.
- **Grid**: 5 or 6 columns.
- **Cards**:
  - Icon/Graphic at the top.
  - Title (e.g., "Airport Transfer").
  - Description (e.g., "Pickup & drop service").
  - Pricing: "₹999" (orange/yellow) with "Onwards" (small text).
  - Button: "Book Now ->" text link.

## 11. Why Choose Us Section
- **Layout**: 2-column layout. Left side has a bulleted list, right side has stats.
- **Left Column**: Title + List with orange checkmark icons (Professional Drivers, Transparent Pricing, etc.).
- **Right Column (Stats)**: 
  - Grid of 4 stats (e.g., 10K+ Happy Customers).
  - Large orange/yellow numbers, dark gray subtext.
- **Background**: Features a subtle, watermark-style city skyline illustration across the bottom.

## 12. Testimonials Section
- **Header**: "TESTIMONIALS", "What Our Customers Say".
- **Layout**: 3 testimonial cards on the left/center, with a promotional car image on the right.
- **Cards**:
  - 5 yellow stars.
  - Review text in quotes.
  - User profile picture, name, and location.
  - White background, light border.
- **Right Image**: A white SUV with a large yellow circular background element behind it.

## 13. CTA Section (Bottom Promo)
- **Background**: Solid primary yellow/orange (`bg-yellow-400` or similar).
- **Layout**: Flex container. Left side has a 3D yellow suitcase graphic, center has text ("Ready to Plan Your Journey?"), right side has action buttons.
- **Buttons**: "Call Now" and "WhatsApp Us" (white backgrounds with dark text and respective icons).

## 14. Footer Structure
- **Background**: Dark Navy / Black (`bg-gray-900`).
- **Typography**: White text for headings, light gray (`text-gray-400`) for links.
- **Columns (4)**:
  1. Brand Logo + description + Social Icons.
  2. Quick Links.
  3. Our Services.
  4. Popular Routes + Contact Info (address, phone, email).
- **Bottom Bar**: Divider line, "Privacy Policy | Terms & Conditions".
- **Floating Element**: Green WhatsApp floating action button (FAB) in the bottom right corner.

## Global Design System Identifiers
- **Primary Color**: Warm Yellow/Orange (approx. `#F59E0B` to `#F97316`).
- **Text Color**: Dark Navy / Slate (approx. `#0F172A`).
- **Backgrounds**: White (`#FFFFFF`) and Off-White (`#F8FAFC`).
- **Typography**: Clean Sans-Serif (likely Inter, Poppins, or Roboto).
- **Border Radius**: Cards use `rounded-xl` or `rounded-2xl` (approx. 12px - 16px), buttons use `rounded-md` or `rounded-full`.
- **Shadows**: Soft, diffused shadows on interactive cards and the main booking form.
- **Icons**: Line-style icons with consistent stroke weights.
