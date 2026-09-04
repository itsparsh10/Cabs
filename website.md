# Lucifer Cabs — Website Implementation & Delivery Blueprint

> **Project:** Lucifer Cabs  
> **Stack:** Next.js (App Router), TypeScript, Tailwind CSS (or the project's existing styling system), Vercel  
> **Primary goal:** Mobile-first lead generation for taxi/cab bookings  
> **Reference direction:** Bharat Taxi / Payal Cab screenshots supplied by the client, but the final UI must be an original Lucifer Cabs design.

---

## 1. Non-negotiable project rules

- The company/brand name is **Lucifer Cabs** everywhere.
- Never use "Bharat Taxi", "BharatCard Travel", or any other reference brand in the production UI.
- Use the supplied references for information architecture and UX inspiration only; do not copy their branding or exact visual assets.
- Light theme only.
- Mobile-first and conversion-first.
- The website must feel premium, clean, modern and trustworthy rather than like a generic template.
- Call and WhatsApp actions must be obvious on mobile and desktop.
- The booking/inquiry flow must be the shortest practical path from intent to WhatsApp.
- Keep the implementation simple: one main page source file plus public assets where possible.
- Avoid unnecessary libraries, animations, large JavaScript bundles and oversized images.

---

# 2. Target user and conversion strategy

### Primary user
A person on a phone searching for:
- taxi service in Surat
- Surat to Mumbai taxi
- Surat to Ahmedabad taxi
- airport taxi Surat
- one-way taxi Surat
- outstation cab Surat

### Primary conversion
**WhatsApp inquiry**

### Secondary conversion
**Phone call**

### Desired mobile journey

Search/Ad → Landing page → See trust + service → Enter pickup/drop → Select date/time → Choose vehicle → Get Quote → WhatsApp opens with structured inquiry.

The booking form should be visible above the fold or immediately below the hero on mobile.

---

# 3. Recommended information architecture

## Main navigation

- Home
- Services
- Routes
- Fleet
- Packages
- About Us
- Contact

Primary header actions:
- Call Now
- WhatsApp Us

On small screens:
- logo
- hamburger
- sticky/floating Call + WhatsApp controls

---

# 4. Home page section order

The desktop design can be multi-column, but the **mobile order is the source of truth**.

## Section 01 — Header

Logo:
**LUCIFER CABS**
Tagline:
**Travel with Comfort**

Mobile:
- compact logo
- hamburger

Desktop:
- nav links
- Call Now
- WhatsApp Us

Keep header sticky only if it does not hurt performance or screen space.

---

## Section 02 — Hero + booking

Eyebrow:
**Reliable. Safe. Affordable.**

Headline:
**Your Journey, Our Responsibility.**

Supporting copy:
"One-way, round-trip, local and airport taxi services with verified drivers and well-maintained cabs."

Trust chips:
- 24/7 Support
- Verified Drivers
- Clean & Safe Cabs

Hero image:
Use `public/assets/branding/hero-surat-road.svg` as the original starter artwork, or replace it with an approved/licensed photograph supplied by the client.

### Booking card

Tabs:
- One Way
- Round Trip
- Local
- Airport

Fields:
- Pickup Location
- Drop Location
- Pickup Date
- Pickup Time
- Passengers

Then:
**Get a Quote →**

Small reassurance:
**No hidden charges • Best price subject to final confirmation**

### Mobile priority
The booking card should come immediately after the hero copy/image. Do not force the user to scroll through many marketing sections before booking.

---

# 5. Services section

Heading:
**Taxi Services For Every Need**

Cards:
1. One Way Taxi
2. Round Trip Taxi
3. Airport Taxi
4. Local Taxi

Each card:
- icon
- title
- one-line benefit
- CTA

Examples:
- Book One Way →
- Book Round Trip →
- Book Airport Taxi →
- Book Local Taxi →

---

# 6. Popular routes

Heading:
**Most Booked Routes**

Initial routes requested by client:
- Surat → Ahmedabad
- Ahmedabad → Surat
- Surat → Mumbai
- Ahmedabad → Mumbai
- Mumbai → Surat
- Mumbai → Ahmedabad
- Surat → Udaipur
- Surat → Ujjain

Each route card should have:
- route
- small travel/location icon
- Get Quote CTA

### SEO note
For the first release, route cards can link to anchors or a reusable inquiry state. Later, create dedicated landing pages for high-value routes such as `/surat-to-mumbai-taxi`.

---

# 7. Fleet section

Heading:
**Choose Your Comfortable Ride**

Vehicles:
- Sedan
- SUV
- Ertiga
- Innova
- Innova Crysta
- Tempo Traveller
- Urbania
- Kia Carens

Each card:
- vehicle image
- name
- seat count
- luggage capacity
- AC
- Get Quote

Starter original assets are included in `assets/cars/`.

### Image performance
- Prefer SVG/WebP/AVIF where practical.
- Use `next/image` for raster photos.
- Do not load 8 huge photographs on first paint.
- Lazy-load below-the-fold fleet cards.
- Give every image width/height or stable aspect ratio.

---

# 8. Packages section

Heading:
**Best Packages For You**

Suggested package categories:
- Local 8 Hours / 80 KM
- Outstation
- Airport Transfer
- Weekend Trip
- Family Trip
- Corporate Travel

Do not invent final prices. The supplied reference contains example prices, but the client must provide the actual Lucifer Cabs prices.

CTA:
**Book Now →**

---

# 9. Why Choose Lucifer Cabs

Use real claims supplied/approved by the client.

Suggested structure:
- Professional & Verified Drivers
- Well Maintained & Clean Vehicles
- Transparent Pricing
- 24/7 Customer Support
- On-time Pickup & Drop
- Safe & Comfortable Journey

Stats should only be displayed if the client provides genuine numbers. Do not invent "10K+ customers" or "500+ cars".

---

# 10. Testimonials

Only use genuine customer reviews supplied by the client.

Do not fabricate names, photos or reviews.

Card:
- star rating
- review
- customer name
- city (if approved)

---

# 11. Final conversion CTA

Heading:
**Ready to Plan Your Journey?**

Copy:
"Book your taxi now and enjoy a comfortable & safe journey."

Buttons:
- Call Now
- WhatsApp Us

This section should be highly visible and simple.

---

# 12. Footer

Brand:
**Lucifer Cabs**

Include:
- short company description
- Quick Links
- Services
- Popular Routes
- Contact
- Privacy Policy
- Terms & Conditions

Do not publish fake social links or fake ratings.

---

# 13. Mobile UX requirements

This is the most important design target.

### Mobile rules
- Minimum comfortable tap target: ~44px.
- Sticky/floating Call and WhatsApp actions.
- Form inputs should be full-width.
- Avoid tiny two-column inputs unless the screen is wide enough.
- Use native date/time inputs where appropriate.
- Keep labels above inputs.
- Don't hide critical booking actions inside a hamburger.
- Avoid modal-heavy booking flows.
- Avoid large hero video backgrounds.
- Compress all photos.
- Keep first contentful experience fast.
- Test on a real mid-range Android device, not only a MacBook.

### Mobile bottom action bar

Recommended:
`Call Now` | `WhatsApp`

It can remain visible while scrolling, but must not cover form controls or browser UI.

---

# 14. Booking / Inquiry logic

## Required fields

### Customer
- Name
- Mobile
- Alternate mobile (optional)

### Journey
- Pickup Location
- Drop Location
- Pickup Date
- Pickup Time
- Return Date (only for round trip)
- Return Time (only for round trip)

### Passengers
- Adults
- Children
- Child age

### Luggage
- Big Bags
- Small Bags

### Vehicle
- Sedan
- SUV
- Ertiga
- Innova
- Kia Carens
- Innova Crysta
- Tempo Traveller
- Urbania

### Additional
- Special Instructions (optional)

---

# 15. "Get a Quote" behavior

The form should validate required data first.

On valid submission:

1. Build a structured quote/inquiry summary.
2. Show a small on-page confirmation/quote preview.
3. Provide:
   - WhatsApp
   - Call
4. Open WhatsApp with a pre-filled structured message.

### WhatsApp message template

Hello Lucifer Cabs, I want to book a taxi.

*Booking Inquiry*
Name: {{name}}
Mobile: {{mobile}}
Alternate Mobile: {{alternateMobile}}

Pickup: {{pickup}}
Drop: {{drop}}

Trip Type: {{tripType}}

Pickup Date: {{pickupDate}}
Pickup Time: {{pickupTime}}

Return Date: {{returnDate}}
Return Time: {{returnTime}}

Adults: {{adults}}
Children: {{children}}
Child Age: {{childAge}}

Big Bags: {{bigBags}}
Small Bags: {{smallBags}}

Vehicle: {{vehicle}}

Special Instructions: {{instructions}}

Please share the best available quotation.

### Important
Use URL encoding when constructing the WhatsApp URL. Do not expose a private API token in frontend code.

For a basic implementation, a click-to-chat link is enough. WhatsApp Business API automation is a separate, more advanced integration.

---

# 16. Quote calculation

Do not invent or hard-code prices until the client provides the real pricing rules.

For the first release, "Get a Quote" can mean:
- collect the trip details
- generate the inquiry summary
- send it to WhatsApp
- client confirms the final fare

If the client later wants automatic fare calculation, that is a separate feature.

---

# 17. Call button behavior

Use a `tel:` link.

Example:

`tel:+91XXXXXXXXXX`

Use the real business number supplied by the client.

On desktop:
- browser/OS may open an available calling application.
- Do not promise that every desktop computer will initiate a cellular call.

On mobile:
- it should open the phone dialer.

---

# 18. WhatsApp button behavior

Use a WhatsApp click-to-chat URL with the client's real WhatsApp number.

For an inquiry:
- create encoded text
- append it to the click-to-chat URL
- open in a new tab/window where appropriate

Test:
- Android
- iPhone
- Chrome desktop
- Safari desktop

---

# 19. Google Maps / location behavior

Basic implementation:
- use a Google Maps link or embed for the business location
- pickup/drop fields can accept normal text locations

Advanced implementation:
- Google Places autocomplete
- map pin
- route calculation
- distance/time
- automatic fare calculation

Advanced Maps functionality should be quoted separately because API configuration and usage can introduce additional complexity/cost.

---

# 20. Basic SEO promised to client

The project should be **SEO-ready**, not sold as a guaranteed ranking service.

## Technical SEO checklist

### Title
Example:
**Lucifer Cabs | Taxi Service in Surat | One Way & Outstation Cabs**

### Meta description
Example:
**Book reliable taxi services in Surat for one-way, round-trip, local and airport travel. Explore Surat to Mumbai, Ahmedabad and outstation cab services with Lucifer Cabs.**

Use only claims the client can substantiate.

### Heading hierarchy
One primary H1:
**Your Journey, Our Responsibility.**

Then H2 sections:
- Taxi Services For Every Need
- Most Booked Routes
- Choose Your Comfortable Ride
- Best Packages For You
- Why Choose Lucifer Cabs
- What Our Customers Say

### URLs
Prefer:
- `/`
- `/about`
- `/contact`
- `/inquiry`
- later: `/surat-to-mumbai-taxi`
- later: `/surat-to-ahmedabad-taxi`

Avoid:
`/page?id=123`

### Images
Every meaningful image needs useful alt text.

Bad:
`car1`

Better:
`Lucifer Cabs Innova Crysta taxi`

Decorative images can use empty alt text.

---

# 21. Local SEO

For a Surat taxi company, local SEO matters heavily.

After launch:
1. Create/claim Google Business Profile.
2. Verify business information.
3. Keep NAP consistent:
   - Name
   - Address
   - Phone
4. Add service categories.
5. Add real photos.
6. Add service areas.
7. Ask real customers for genuine reviews.
8. Link the website from the profile.
9. Add the business location to the Contact page.

Never create fake reviews or fake business locations.

---

# 22. Structured data

Add appropriate Schema.org JSON-LD.

For the first release, consider:
- LocalBusiness / TaxiService-style business data where appropriate
- Organization
- WebSite

Only include facts actually supplied by the business.

Do not fabricate:
- ratings
- review counts
- opening hours
- addresses
- prices

---

# 23. Search Console

After deployment:

1. Open Google Search Console.
2. Add the domain property.
3. Verify ownership.
4. Submit sitemap.
5. Inspect the homepage.
6. Request indexing where appropriate.
7. Watch:
   - indexing
   - queries
   - impressions
   - clicks
   - CTR
   - Core Web Vitals

SEO results are not immediate and rankings cannot be guaranteed.

---

# 24. Keyword strategy

Start with high-intent commercial phrases.

### Primary candidates
- taxi service Surat
- cab service Surat
- taxi booking Surat
- one way taxi Surat
- outstation taxi Surat
- airport taxi Surat
- Surat airport cab
- Surat to Mumbai taxi
- Surat to Ahmedabad taxi

### Route landing pages later
Create dedicated pages only where there is genuine useful content.

For example:
`/surat-to-mumbai-taxi`

Page content can include:
- route overview
- service type
- vehicle choices
- approximate journey information
- pickup/drop options
- FAQs
- booking CTA
- WhatsApp CTA

Do not create dozens of thin pages with the same copied text.

---

# 25. Google Ads — separate from the ₹9K website

Website package:
**₹9,000**

Google Ads setup:
**separate service**

Suggested first-client setup:
**₹3,000 one-time** if you are confident implementing it.

Ad spend:
**paid separately by client to Google.**

Do not promise:
- guaranteed #1 position
- guaranteed traffic
- guaranteed bookings

Google Ads is an auction. Ad position depends on multiple factors and changes by search/context.

---

# 26. Analytics — optional add-on

If offered separately:
- GA4
- Google Tag Manager
- WhatsApp click event
- Call click event
- inquiry submission event
- Google Ads conversion event

Suggested setup fee:
**₹2,000–₹3,000**

Only sell what you can implement and test.

---

# 27. Recommended simple project structure

If the client specifically wants a minimal structure:

```text
Lucifer Cabs/
├── public/
│   ├── assets/
│   │   ├── branding/
│   │   │   ├── lucifer-cabs-logo.svg
│   │   │   └── hero-surat-road.svg
│   │   ├── cars/
│   │   │   ├── sedan.svg
│   │   │   ├── suv.svg
│   │   │   ├── ertiga.svg
│   │   │   ├── innova.svg
│   │   │   ├── innova-crysta.svg
│   │   │   ├── tempo-traveller.svg
│   │   │   ├── urbania.svg
│   │   │   └── kia-carens.svg
│   │   └── icons/
│   │       ├── phone.svg
│   │       ├── whatsapp.svg
│   │       ├── location.svg
│   │       ├── calendar.svg
│   │       ├── clock.svg
│   │       ├── car.svg
│   │       ├── plane.svg
│   │       ├── route.svg
│   │       ├── star.svg
│   │       └── check.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   └── app/
│       └── page.tsx
└── WEBSITE_SPEC.md
```

If your current Next.js project already has `layout.tsx`, keep it. Do not delete framework files just to force a one-file architecture.

---

# 28. Performance checklist

Target:
- Lighthouse mobile performance as high as practical
- no giant hero video
- compressed images
- SVG icons where appropriate
- lazy-load below-the-fold images
- avoid unnecessary third-party scripts
- avoid loading Google Maps immediately if an external embed is not needed
- use `next/image` for raster images
- reserve image dimensions
- keep fonts minimal
- avoid huge animation libraries

### Critical mobile test

Test on:
- Chrome Android
- Safari iPhone
- Chrome desktop
- Safari desktop

---

# 29. Client delivery checklist

Before handover:

- [ ] Home works
- [ ] About works
- [ ] Contact works
- [ ] Inquiry works
- [ ] Required-field validation works
- [ ] WhatsApp message is correctly formatted
- [ ] Call link uses correct number
- [ ] Google Maps link/location is correct
- [ ] All routes are correct
- [ ] Vehicle names are correct
- [ ] Client supplied prices are correct
- [ ] No fake testimonials
- [ ] No fake statistics
- [ ] Mobile tested
- [ ] Desktop tested
- [ ] SEO title checked
- [ ] Meta description checked
- [ ] H1 checked
- [ ] sitemap checked
- [ ] robots checked
- [ ] production build passes
- [ ] Vercel deployment passes
- [ ] custom domain works
- [ ] HTTPS works
- [ ] favicon/logo works
- [ ] WhatsApp tested from phone
- [ ] Call tested from phone

---

# 30. Anti-gravity / coding-agent prompt loop

Use the following prompts sequentially. Do not ask the agent to build everything in one blind step.

## Prompt 1 — Analyze the existing project

```text
You are working on the Lucifer Cabs taxi booking website.

First inspect the existing Next.js project without changing anything.

Requirements:
- Brand name must be "Lucifer Cabs" everywhere.
- Never use Bharat Taxi or BharatCard Travel in production UI.
- Mobile-first.
- Light theme.
- Premium, minimal, conversion-focused.
- Primary conversion is WhatsApp inquiry.
- Secondary conversion is phone call.
- User should be able to book/inquire with pickup, drop, date, time, passengers, luggage and vehicle.
- Deployment target is Vercel.

Inspect the current folder structure, package.json, Next.js version, styling setup and existing page.

Do not implement yet.

Return:
1. Current structure.
2. What should be preserved.
3. What should be changed.
4. Any risks.
5. Exact implementation plan.
```

## Prompt 2 — Build the UI

```text
Implement the Lucifer Cabs homepage according to WEBSITE_SPEC.md.

Priorities:
1. Mobile conversion.
2. Booking form visibility.
3. Call and WhatsApp accessibility.
4. Fast loading.
5. Clean light visual system.
6. Original design inspired by the supplied references, not a copy.

Use:
- White/off-white surfaces.
- Dark navy/charcoal text.
- Lucifer gold/yellow accent.
- Green only for WhatsApp.
- Rounded cards.
- Subtle borders and shadows.
- Strong readable typography.

Use the provided public/assets files.

Do not invent real business claims, reviews, customer counts or prices.
Use clearly marked placeholders for client data that has not yet been supplied.

Keep the code simple and maintainable.
```

## Prompt 3 — Implement booking logic

```text
Implement the Lucifer Cabs booking/inquiry flow.

Fields:
Name, mobile, alternate mobile, pickup, drop, pickup date, pickup time, return date, return time, adults, children, child age, big bags, small bags, vehicle, special instructions.

Requirements:
- Validate required fields.
- Return date/time should only be required/visible for Round Trip.
- Build a human-readable quote/inquiry summary.
- Show the summary before WhatsApp handoff.
- Create a URL-encoded WhatsApp message.
- Open WhatsApp using the configured business number.
- Add a Call Now action using tel:.
- Do not expose API secrets.
- Do not implement fake automatic pricing unless pricing rules are supplied.

Test all form states.
```

## Prompt 4 — Mobile UX pass

```text
Audit the entire Lucifer Cabs UI as a mobile conversion specialist.

Test at 320px, 360px, 390px and 430px widths.

Fix:
- horizontal overflow
- tiny text
- small tap targets
- form usability
- sticky/floating CTA collisions
- excessive spacing
- oversized images
- buttons going off screen
- navigation problems
- keyboard/form issues

The first screen must clearly communicate:
what Lucifer Cabs does + why trust it + how to book.

Do not redesign randomly. Preserve the approved visual direction.
```

## Prompt 5 — SEO implementation

```text
Implement the basic SEO promised for Lucifer Cabs.

Add:
- accurate title
- meta description
- canonical URL placeholder
- Open Graph metadata
- Twitter metadata if appropriate
- semantic headings
- descriptive image alt text
- sitemap.xml
- robots.txt
- appropriate JSON-LD using only verified business facts

Do not claim guaranteed Google ranking.
Do not invent address, phone, reviews, ratings, prices or customer statistics.

Use the final production domain as a configurable value.
```

## Prompt 6 — Performance

```text
Optimize Lucifer Cabs for mobile performance.

Audit:
- images
- fonts
- JS bundle
- client components
- third-party scripts
- layout shift
- render blocking resources
- unnecessary dependencies

Use next/image for raster images.
Prefer SVG/WebP/AVIF where appropriate.
Lazy-load non-critical imagery.
Keep the hero visually strong without a large video.

Do not sacrifice booking usability for an artificial performance score.

Return a list of optimizations performed.
```

## Prompt 7 — QA

```text
Perform a production QA audit for Lucifer Cabs.

Check:
- TypeScript errors
- lint errors
- build errors
- broken links
- broken images
- form validation
- WhatsApp URL generation
- phone link
- mobile layout
- desktop layout
- SEO metadata
- sitemap
- robots
- accessibility
- keyboard navigation
- focus states
- tap target sizes

Fix all issues you find.

At the end provide:
1. files changed
2. issues fixed
3. remaining client inputs required
4. exact commands to build and deploy
```

## Prompt 8 — Final Vercel deployment

```text
Prepare the Lucifer Cabs project for Vercel production.

Do not expose secrets.

Check:
- npm/pnpm build
- environment variables required
- production domain configuration
- metadata URL
- sitemap domain
- robots sitemap URL
- image configuration
- production links

Give me:
1. exact build command
2. exact deployment steps
3. environment variables required
4. final smoke-test checklist

Do not deploy until the production build passes.
```

---

# 31. Client data you still need

Before final production, ask the client for:

- Exact Lucifer Cabs logo
- Official phone number
- Official WhatsApp number
- Email
- Full business address
- Google Maps location
- Real vehicle photos
- Vehicle seat/luggage details
- Actual prices
- Actual package information
- Actual service areas
- About-us content
- Genuine testimonials
- Social links
- Domain name
- Business hours
- Google Business Profile details

**Do not fill missing information with invented facts.**

---

# 32. Final project scope

### Included in ₹9,000

- Custom responsive UI
- Mobile-first implementation
- Home
- About
- Contact
- Inquiry/booking
- Services
- Routes
- Fleet
- Packages
- WhatsApp integration
- Call integration
- Basic Maps/location integration
- Basic SEO setup
- Performance optimization
- Vercel deployment
- Domain connection
- Production QA

### Not included unless separately agreed

- Google Ads campaign management
- Google Ads spend
- Meta Ads
- Monthly SEO
- Backlink campaigns
- Advanced Google Maps API
- Payment gateway
- Admin dashboard
- Driver dashboard
- Live tracking
- Automatic fare engine
- WhatsApp Business API automation
- Mobile app
- CRM
- Major new features after scope approval

---

# 33. Success definition

The website is successful if a mobile user can:

**Search → understand the service → choose trip type → enter pickup/drop → select journey details → get a quote/inquiry summary → tap WhatsApp or Call → reach Lucifer Cabs.**

That is the core business outcome.

The visual design should support that outcome rather than distract from it.
