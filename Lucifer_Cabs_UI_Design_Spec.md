# Lucifer Cabs — Complete UI/UX Design Specification

**Project:** Lucifer Cabs  
**Product:** Taxi / Cab Booking & Inquiry Website  
**Framework:** Next.js  
**Primary audience:** Mobile users searching for taxi/cab services  
**Primary conversion:** WhatsApp booking inquiry  
**Secondary conversion:** Phone call  
**Theme:** Light, premium, minimal, trustworthy  
**Design direction:** Modern travel marketplace + local taxi service  
**Reference:** Supplied desktop and mobile Bharat Taxi screenshots.  
**Production brand:** **LUCIFER CABS ONLY**

---

# 1. Design objective

The website must immediately answer three questions:

1. What does Lucifer Cabs offer?
2. Can I trust them?
3. How quickly can I book a cab?

The interface should therefore prioritize:

**Trust → Route/service clarity → Booking → WhatsApp/Call**

The website must NOT feel like a generic WordPress/taxi template.

It should feel like a polished local transportation brand with a modern booking interface.

---

# 2. Brand identity

## Brand name

**Lucifer Cabs**

## Suggested tagline

**Travel with Comfort**

## Brand personality

- Reliable
- Professional
- Comfortable
- Fast
- Local
- Friendly
- Premium without being expensive-looking

## Visual personality

Use a strong yellow/gold accent combined with white, warm off-white surfaces and dark navy typography.

The yellow is the conversion color.

---

# 3. Color system

## Primary brand color

```text
Lucifer Gold
#F5A900
```

Use for:
- Primary buttons
- Active tabs
- Route arrows
- Section eyebrow text
- Icons
- Important highlights
- Booking CTA
- Accent graphics

## Primary brighter yellow

```text
#FFB800
```

Use sparingly for:
- Hero emphasis
- CTA gradients if required
- Highlight backgrounds

## Dark heading

```text
#111827
```

Use for:
- H1
- H2
- H3
- Navigation
- Card titles

## Body text

```text
#4B5563
```

## Muted text

```text
#6B7280
```

## Background

```text
#FFFFFF
```

## Soft section background

```text
#F8FAFC
```

## Warm section background

```text
#FFFBF2
```

## Border

```text
#E5E7EB
```

## WhatsApp green

```text
#16A34A
```

## Success

```text
#16A34A
```

## Error

```text
#DC2626
```

---

# 4. Typography

Recommended font:

**Inter** or a similar highly readable modern sans-serif.

Typography hierarchy:

### H1

Desktop:
```text
48–58px
font-weight: 700–800
line-height: 1.05–1.12
```

Mobile:
```text
32–38px
font-weight: 700–800
line-height: 1.08
```

### H2

Desktop:
```text
30–36px
font-weight: 700
```

Mobile:
```text
25–30px
font-weight: 700
```

### H3

```text
18–22px
font-weight: 700
```

### Body

```text
15–17px
line-height: 1.6
```

### Small labels

```text
11–13px
font-weight: 600
```

Do not use extremely thin typography.

---

# 5. Layout system

Maximum content width:

```text
1200–1280px
```

Desktop side padding:

```text
32–48px
```

Tablet:

```text
24px
```

Mobile:

```text
16px
```

Recommended spacing rhythm:

```text
8
12
16
20
24
32
40
48
64
80
```

Avoid random spacing values throughout the page.

---

# 6. Border radius

Primary cards:

```text
12–16px
```

Booking card:

```text
16–20px
```

Buttons:

```text
8–10px
```

Pills:

```text
9999px
```

Inputs:

```text
8–10px
```

The supplied reference uses soft rounded cards. Preserve this character.

---

# 7. Shadows

Use subtle shadows.

Recommended:

```css
box-shadow:
  0 4px 20px rgba(15, 23, 42, 0.06);
```

Booking card can use slightly stronger elevation:

```css
box-shadow:
  0 12px 35px rgba(15, 23, 42, 0.10);
```

Never use extremely dark shadows.

---

# 8. Desktop page structure

Desktop order:

```text
Top Utility Bar
↓
Main Navigation
↓
Hero + Booking
↓
Services
↓
Popular Routes
↓
Fleet
↓
Packages
↓
Why Choose Lucifer Cabs
↓
Testimonials
↓
Final CTA
↓
Footer
```

---

# 9. Mobile page structure

Mobile order is critical.

```text
Mobile Header
↓
Hero
↓
Booking Card
↓
Services
↓
Popular Routes
↓
Fleet
↓
Packages
↓
Why Choose Lucifer Cabs
↓
Testimonials
↓
Final CTA
↓
Footer
```

A mobile user must NOT have to navigate through a huge desktop-style layout before finding the booking action.

---

# 10. Desktop top utility bar

At the very top:

Left:

```text
◉ 24x7 Customer Support
☎ +91 XXXXX XXXXX
```

Right:

```text
About Us
Contact Us
FAQ
Facebook
Instagram
WhatsApp
```

Height:

```text
32–38px
```

Background:

```text
#F8FAFC
```

Typography:

```text
11–12px
```

On mobile:

**Hide the utility bar.**

This saves vertical space.

---

# 11. Main navigation

Desktop:

```text
[Lucifer Cabs Logo]

Home
Services ▾
Routes
Fleet
Packages
About Us
Contact

[Call Now]
[WhatsApp Us]
```

Height:

```text
64–76px
```

White background.

Subtle bottom border.

Active Home:

- Lucifer Gold
- small underline or bottom indicator

### Mobile

```text
[Logo]                         [☰]
```

Do NOT put the full desktop navigation on the mobile screen.

Mobile menu should open as a clean drawer.

---

# 12. Logo

Use:

**LUCIFER CABS**

Tagline:

**Travel with Comfort**

Logo should be compact enough that it remains readable around 360px viewport width.

Never display reference-company branding.

---

# 13. Hero section

The hero is the first major conversion section.

Desktop layout:

```text
┌────────────────────────────────────────────────────┐
│                                                    │
│  LEFT                              RIGHT            │
│  Eyebrow                            Booking Card     │
│  H1                                  │              │
│  Description                         │              │
│  Trust chips                         │              │
│  Vehicle / travel artwork            │              │
│                                                    │
└────────────────────────────────────────────────────┘
```

Approximate split:

```text
55% content
45% booking card
```

Hero minimum height:

```text
450–560px
```

Do not make the hero excessively tall.

---

# 14. Hero copy

Eyebrow:

```text
Reliable. Safe. Affordable.
```

Main heading:

```text
Your Journey,
Our Responsibility.
```

Make the second line brand-accented:

```text
Our Responsibility.
```

Gold.

Description:

```text
One-way, round-trip, local and airport taxi services
across Surat and beyond. Travel comfortably with
verified drivers and well-maintained cabs.
```

Only claim "verified drivers" or similar if the client confirms it.

---

# 15. Hero trust chips

Three compact chips:

```text
24x7 Support
Verified Drivers
Clean & Safe Cabs
```

Each:

- small icon
- white/warm background
- subtle border
- 8px radius
- 12–13px text

---

# 16. Hero image

The supplied reference uses a car against a Surat/travel environment.

Lucifer Cabs should use an original/licensed image.

Recommended composition:

```text
Travel environment
        +
Lucifer Cabs vehicle
        +
soft warm lighting
```

Avoid:
- busy stock-photo collage
- low-resolution image
- giant background video
- excessive animation

The vehicle should visually point toward the booking card.

---

# 17. Booking card

This is the most important component.

Desktop:

Width:

```text
380–430px
```

Background:

```text
#FFFFFF
```

Radius:

```text
16–20px
```

Padding:

```text
20–24px
```

Title:

```text
Book Your Taxi
```

---

# 18. Trip type tabs

Four tabs:

```text
One Way
Round Trip
Local
Airport
```

Active:

```text
Gold background
Dark text
```

Inactive:

```text
White
Border
```

The active tab must be visually obvious.

---

# 19. Booking fields

### Pickup

```text
Pickup Location
[ Enter pickup location        📍 ]
```

### Drop

```text
Drop Location
[ Enter drop location          📍 ]
```

### Date / time

Desktop:

```text
Pickup Date          Pickup Time
[ Select date ]       [ Select time ]
```

Mobile:

Prefer stacked fields if width becomes constrained.

### Passengers

```text
Passengers
[ 1 Adult                    ▾ ]
```

---

# 20. Booking CTA

Primary button:

```text
Get a Quote →
```

Height:

```text
48–52px
```

Width:

```text
100%
```

Background:

```text
#F5A900
```

Font:

```text
14–16px
font-weight: 700
```

The CTA must be visually stronger than every secondary action.

---

# 21. Booking reassurance

Below CTA:

```text
✓ No hidden charges • Best price guarantee
```

Only use "best price guarantee" if client actually wants to make that claim.

---

# 22. Mobile booking behavior

At mobile width:

The booking card becomes full width.

Recommended:

```text
Hero copy
↓
Hero visual
↓
Booking card
```

or, if conversion testing shows better results:

```text
Hero copy
↓
Booking card
↓
Hero visual
```

The key is that booking appears extremely early.

---

# 23. Services section

Eyebrow:

```text
OUR SERVICES
```

Heading:

```text
Taxi Services For Every Need
```

Desktop:

4 cards in one row.

Mobile:

1 column.

Services:

### One Way Taxi

"Travel one side without paying for a return journey."

CTA:

```text
Book One Way →
```

### Round Trip Taxi

"Book return trips for convenient travel."

### Airport Taxi

"Airport pickup & drop services on time."

### Local Taxi

"Hourly & local taxi services in Surat and nearby."

---

# 24. Service cards

Desktop approximate:

```text
280–300px width
```

Mobile:

```text
100% width
```

Padding:

```text
20–24px
```

Icon:

Gold line/icon.

Card structure:

```text
[Icon]

One Way Taxi

Description...

Book One Way →
```

Do not overcrowd cards.

---

# 25. Popular routes

Eyebrow:

```text
POPULAR ROUTES
```

Heading:

```text
Most Booked Routes
```

Desktop:

8 route cards in 4 × 2 grid.

Routes:

```text
Surat → Ahmedabad
Ahmedabad → Surat
Surat → Mumbai
Mumbai → Surat

Ahmedabad → Mumbai
Mumbai → Ahmedabad
Surat → Udaipur
Surat → Ujjain
```

Each card:

```text
[route icon]

Surat → Mumbai

Get Quote →
```

---

# 26. Route card interaction

On click:

1. Select route.
2. Scroll to booking form.
3. Pre-fill pickup.
4. Pre-fill drop.
5. Focus booking CTA.

Example:

Click:

```text
Surat → Mumbai
```

Booking becomes:

```text
Pickup: Surat
Drop: Mumbai
```

This reduces user effort.

---

# 27. Fleet section

Eyebrow:

```text
OUR FLEET
```

Heading:

```text
Choose Your Comfortable Ride
```

Desktop:

8 cards across a responsive grid.

Mobile:

2-column cards, matching the supplied mobile reference.

Vehicles:

```text
Sedan
SUV
Ertiga
Innova
Innova Crysta
Tempo Traveller
Urbania
Kia Carens
```

---

# 28. Fleet card

Structure:

```text
┌─────────────────────┐
│                     │
│      CAR IMAGE      │
│                     │
├─────────────────────┤
│ Sedan               │
│                     │
│ 👤 4 Seats  🧳 2 Bags
│                     │
│          AC         │
│                     │
│ Get Quote →         │
└─────────────────────┘
```

Vehicle images must have consistent aspect ratio.

Never mix random image sizes.

---

# 29. Fleet mobile design

At approximately 360–430px:

```text
┌──────────┐ ┌──────────┐
│ Sedan    │ │ SUV      │
│ image    │ │ image    │
│ details  │ │ details  │
│ quote    │ │ quote    │
└──────────┘ └──────────┘
```

Use:

```text
gap: 10–12px
```

Keep text readable.

---

# 30. Packages

Eyebrow:

```text
TRAVEL PACKAGES
```

Heading:

```text
Best Packages For You
```

Packages:

```text
Local 8 Hours / 80 KM
Outstation
Airport Transfer
Weekend Trip
Family Trip
Corporate Travel
```

The prices shown in the reference are **examples only**.

Do not publish them until the client gives actual prices.

---

# 31. Package card

Structure:

```text
[Icon]

Local 8 Hours / 80 KM

Perfect for local travel

₹X,XXX
Onwards

Book Now →
```

Desktop:
6-column grid if width permits.

Mobile:
Single-column list.

---

# 32. Why Choose section

Background:

```text
#FFFBF2
```

Heading:

```text
Why Choose Lucifer Cabs?
```

Checklist:

```text
✓ Professional & Verified Drivers
✓ Well Maintained & Clean Vehicles
✓ Transparent Pricing
✓ 24x7 Customer Support
✓ On-time Pickup & Drop
✓ Safe & Comfortable Journey
```

Only use verified claims.

---

# 33. Statistics

The reference has:

```text
10K+ Customers
500+ Cars
50+ Routes
24/7 Support
```

For Lucifer Cabs:

**Do not copy these numbers.**

Use actual client statistics.

If unavailable, omit statistics entirely in the first release.

---

# 34. Testimonials

Eyebrow:

```text
TESTIMONIALS
```

Heading:

```text
What Our Customers Say
```

Cards:

```text
★★★★★

"Real customer review..."

Customer Name
City
```

Use genuine customer reviews only.

Never fabricate:
- names
- photos
- ratings
- reviews

---

# 35. Testimonial mobile behavior

Desktop:
4 cards can be visible.

Mobile:
1 card per viewport or horizontal swipe carousel.

Keep controls simple.

---

# 36. Final CTA

Use a strong Lucifer Gold background.

Heading:

```text
Ready to Plan Your Journey?
```

Supporting copy:

```text
Book your taxi now and enjoy a comfortable & safe journey.
```

Buttons:

```text
☎ Call Now
🟢 WhatsApp Us
```

This is the final conversion point before the footer.

---

# 37. Footer

Desktop:

5-column style:

```text
Lucifer Cabs
Quick Links
Our Services
Popular Routes
Contact Us
```

Background:

```text
#111827
```

Text:

White / muted gray.

Accent:

Lucifer Gold.

---

# 38. Footer content

Brand:

```text
LUCIFER CABS
Travel with Comfort
```

Description:

```text
Reliable taxi service for one-way, round-trip,
local and airport travel.
```

Quick Links:

```text
Home
Services
Routes
Fleet
Packages
About Us
Contact Us
```

Services:

```text
One Way Taxi
Round Trip Taxi
Local Taxi
Airport Pickup
Airport Drop
Outstation Taxi
```

Routes:

```text
Surat to Mumbai
Surat to Ahmedabad
Ahmedabad to Surat
Mumbai to Surat
Surat to Udaipur
Surat to Ujjain
```

Contact:

```text
Location
Phone
Email
WhatsApp
```

Use actual client details.

---

# 39. Floating CTA buttons

This is mandatory.

Mobile:

Bottom-left:

```text
🟡 Call
```

Bottom-right:

```text
🟢 WhatsApp
```

Desktop:

Use smaller floating circular buttons or a compact bottom-right action.

---

# 40. Floating button behavior

Call:

```text
tel:+91XXXXXXXXXX
```

WhatsApp:

```text
https://wa.me/<BUSINESS_NUMBER>
```

Do not hard-code fake numbers.

The buttons must work on:

- Android
- iPhone
- Chrome
- Safari
- desktop

On desktop, `tel:` behavior depends on installed calling applications.

---

# 41. Responsive breakpoints

Recommended:

```text
xs: 320px
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Critical testing widths:

```text
320
360
375
390
414
430
768
1024
1280
1440
1920
```

---

# 42. Mobile-first CSS strategy

Write base styles for mobile first.

Example:

```css
.booking-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .booking-grid {
    grid-template-columns: 1fr 1fr;
  }
}
```

Do not build desktop first and patch mobile afterward.

---

# 43. Navigation mobile

Mobile menu should be:

```text
┌─────────────────────┐
│ Lucifer Cabs    X   │
├─────────────────────┤
│ Home                │
│ Services            │
│ Routes              │
│ Fleet               │
│ Packages            │
│ About Us            │
│ Contact             │
├─────────────────────┤
│ Call Now             │
│ WhatsApp             │
└─────────────────────┘
```

Use a simple slide/fade animation only.

---

# 44. Buttons

## Primary

```text
Get a Quote →
```

Gold.

## Secondary

```text
View All →
```

White with border.

## WhatsApp

Green.

## Call

White/gold or gold depending on placement.

Hover:
- slight brightness/elevation
- no exaggerated animation

Active:
- subtle scale/press effect

---

# 45. Forms

Input height:

```text
46–52px
```

Border:

```text
1px solid #E5E7EB
```

Focus:

```text
border-color: #F5A900
box-shadow: 0 0 0 3px rgba(245,169,0,.15)
```

Placeholder:

```text
#9CA3AF
```

Labels:

```text
12–13px
font-weight: 600
```

---

# 46. Inquiry form

Required:

```text
Name
Mobile Number
Pickup Location
Drop Location
Pickup Date
Pickup Time
Passengers
Vehicle
```

Optional:

```text
Alternate Mobile
Return Date
Return Time
Child Age
Big Bags
Small Bags
Special Instructions
```

Round Trip should reveal return fields.

---

# 47. Location input

Basic version:

```text
Pickup Location
[Enter pickup location]
```

Add a location/map icon.

When the user submits, preserve exactly what they entered.

Advanced future version can use Google Places Autocomplete.

---

# 48. Quote result

After submission, show:

```text
Your Inquiry is Ready

Pickup:
Surat

Drop:
Mumbai

Date:
XX/XX/XXXX

Time:
XX:XX

Vehicle:
Sedan

Passengers:
2 Adults

[Continue on WhatsApp]

[Call Lucifer Cabs]
```

If no pricing engine exists, call this:

**Inquiry Summary**

rather than falsely claiming an automatically calculated fare.

---

# 49. WhatsApp message

Generate:

```text
Hello Lucifer Cabs, I want to book a taxi.

Booking Inquiry

Name: ...
Mobile: ...
Alternate Mobile: ...

Pickup: ...
Drop: ...

Trip Type: ...

Pickup Date: ...
Pickup Time: ...

Return Date: ...
Return Time: ...

Adults: ...
Children: ...
Child Age: ...

Big Bags: ...
Small Bags: ...

Vehicle: ...

Special Instructions: ...

Please share the best available quotation.
```

Use URL encoding.

---

# 50. SEO UI considerations

The visual design must also support SEO.

Use semantic HTML:

```html
<header>
<nav>
<main>
<section>
<h1>
<h2>
<h3>
<footer>
```

Don't make headings using arbitrary `<div>` elements.

---

# 51. SEO heading structure

One H1:

```text
Your Journey, Our Responsibility.
```

H2:

```text
Taxi Services For Every Need
Most Booked Routes
Choose Your Comfortable Ride
Best Packages For You
Why Choose Lucifer Cabs?
What Our Customers Say
Ready to Plan Your Journey?
```

---

# 52. SEO-friendly route architecture

Future route pages:

```text
/surat-to-mumbai-taxi
/surat-to-ahmedabad-taxi
/ahmedabad-to-surat-taxi
/mumbai-to-surat-taxi
/surat-to-udaipur-taxi
/surat-to-ujjain-taxi
```

Do not create thin duplicate pages.

Each page must have genuinely useful route-specific information.

---

# 53. Image SEO

Every meaningful image:

```html
alt="Lucifer Cabs Sedan taxi"
```

Examples:

```text
Lucifer Cabs SUV taxi
Lucifer Cabs Innova Crysta
Lucifer Cabs Tempo Traveller
Lucifer Cabs taxi service in Surat
```

Never:

```text
image1
car-final-new
IMG_1234
```

---

# 54. Image performance

Use:

```text
SVG
WebP
AVIF
```

where appropriate.

Next.js:

```tsx
import Image from "next/image";
```

For important images:

- fixed dimensions
- responsive sizes
- lazy loading below the fold

Hero image should be optimized as a priority asset.

---

# 55. Animation philosophy

The website should feel alive but fast.

Use only:

- subtle hover
- button press
- menu transition
- small card reveal
- gentle section entrance

Avoid:

- huge parallax
- video backgrounds
- continuous floating animations
- excessive GSAP
- expensive 3D effects

The client specifically requested fast mobile loading.

---

# 56. Accessibility

Must support:

- keyboard navigation
- visible focus states
- proper labels
- semantic buttons
- accessible menu
- sufficient color contrast
- alt text
- error messages
- form validation

Never use only color to indicate errors.

---

# 57. Conversion optimization

The design should repeatedly offer:

```text
Get a Quote
WhatsApp
Call Now
```

But don't spam the user.

Recommended conversion locations:

1. Header
2. Hero booking form
3. Service cards
4. Route cards
5. Fleet cards
6. Final CTA
7. Floating mobile actions

---

# 58. Desktop vs mobile priority

If a design decision conflicts:

**Mobile conversion wins.**

The supplied mobile screenshot demonstrates a long single-column journey with compact cards.

Use that concept, but improve:
- spacing
- readability
- booking usability
- hierarchy
- performance
- CTA visibility

---

# 59. Next.js implementation

Recommended structure:

```text
Lucifer_Cabs/
│
├── public/
│   └── assets/
│       ├── branding/
│       ├── cars/
│       └── icons/
│
├── src/
│   └── app/
│       ├── page.tsx
│       ├── layout.tsx
│       └── globals.css
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── WEBSITE_DESIGN.md
```

The user requested simplicity, so don't over-engineer the first release.

---

# 60. Data-driven arrays

Even if the UI is kept in one `page.tsx`, keep repeated content in arrays.

Example:

```tsx
const routes = [
  {
    from: "Surat",
    to: "Ahmedabad",
  },
  {
    from: "Ahmedabad",
    to: "Surat",
  },
];
```

Fleet:

```tsx
const fleet = [
  {
    name: "Sedan",
    image: "/assets/cars/sedan.svg",
    seats: 4,
    bags: 2,
  },
];
```

This makes updates much easier.

---

# 61. Do not hard-code unknown business information

Create a central configuration object for:

```text
phone
whatsapp
email
address
domain
business hours
```

Example:

```tsx
const BUSINESS = {
  name: "Lucifer Cabs",
  phone: "+91XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "info@example.com",
  address: "Surat, Gujarat, India",
};
```

Replace placeholders with the client's real data before production.

---

# 62. SEO metadata

In `layout.tsx`, configure:

```text
title
description
keywords where useful
canonical
OpenGraph
robots
```

Example title:

```text
Lucifer Cabs | Taxi Service in Surat | One Way & Outstation Cabs
```

Example description:

```text
Book taxi services in Surat for one-way, round-trip,
local and airport travel with Lucifer Cabs.
```

Do not promise Google #1 rankings.

---

# 63. Analytics events

If analytics is included:

Track:

```text
whatsapp_click
call_click
booking_started
booking_submitted
route_selected
fleet_vehicle_selected
package_selected
```

The most important events are:

```text
whatsapp_click
call_click
booking_submitted
```

---

# 64. Google Ads readiness

The website should be capable of receiving paid traffic.

Landing pages must have:
- clear service
- clear location
- booking CTA
- WhatsApp CTA
- phone CTA
- fast load
- mobile-friendly form

Google Ads management itself is a separate service from website development.

---

# 65. Production QA

Before delivery test:

### Mobile

```text
320px
360px
390px
430px
```

### Desktop

```text
1024px
1280px
1440px
1920px
```

Check:
- no horizontal scroll
- no clipped buttons
- no overflowing cards
- no broken images
- no text collision
- booking works
- WhatsApp works
- phone works
- menu works
- forms work

---

# 66. Lighthouse targets

Aim for strong scores, especially mobile.

Prioritize:

```text
Performance
Accessibility
Best Practices
SEO
```

Do not sacrifice functionality just to obtain an artificial 100 score.

---

# 67. Final visual rule

The final result should communicate:

> **"I can trust this cab service, I can see what they offer, and I can contact/book them immediately."**

The reference design is the structural inspiration.

Lucifer Cabs must have its own:
- branding
- typography
- imagery
- content
- icons
- copy
- visual details

---

# 68. Final implementation order

Build in exactly this order:

```text
1. Global theme
2. Header
3. Hero
4. Booking form
5. WhatsApp + Call
6. Services
7. Routes
8. Fleet
9. Packages
10. Why Choose
11. Testimonials
12. Final CTA
13. Footer
14. Mobile optimization
15. Form validation
16. WhatsApp message generation
17. SEO metadata
18. Sitemap
19. Robots
20. Schema
21. Analytics
22. Performance optimization
23. QA
24. Vercel deployment
```

---

# 69. Definition of done

The website is complete when:

```text
✓ Lucifer Cabs branding is consistent
✓ Mobile layout is excellent
✓ Desktop layout is excellent
✓ Booking is easy
✓ Route selection pre-fills booking
✓ WhatsApp receives structured inquiry
✓ Call button works
✓ Google Maps/location works
✓ Fleet is responsive
✓ Packages are responsive
✓ SEO metadata exists
✓ Sitemap exists
✓ Robots exists
✓ Schema uses verified information
✓ Images are optimized
✓ No horizontal overflow
✓ Production build passes
✓ Vercel deployment works
✓ Custom domain works
```

---

# 70. Final design principle

**Don't copy the reference pixel-for-pixel.**

Copy the successful UX principles:

- clear booking
- strong CTA
- compact cards
- clean white space
- yellow brand accents
- vehicle-first presentation
- route discovery
- social proof
- repeated conversion opportunities

Then make the final product unmistakably:

# LUCIFER CABS

**Fast. Clean. Trustworthy. Mobile-first. Conversion-focused.**
