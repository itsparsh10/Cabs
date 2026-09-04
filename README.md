# 🚖 Lucifer Cabs - Premium Taxi & Outstation Booking Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

**Lucifer Cabs** is a state-of-the-art, high-performance web platform for premium outstation cab bookings, local hourly rentals, and airport transfers. Built with Next.js 16 (Turbopack), React 19, TypeScript, and Tailwind CSS, it offers a seamless, mobile-optimized experience with instant WhatsApp and phone dispatch integrations.

---

## ✨ Features

- 🚕 **Instant Online Booking & Estimates**: Interactive booking widget supporting One-Way, Round-Trip, Local Rentals, and Airport Transfers with instant fare calculations.
- 📱 **Mobile-First UX**: Responsive UI tuned specifically for touch devices, with sticky bottom action bars and smooth navigation.
- ⚡ **Sharp Navigation & Dynamic Highlighting**: Active section tracking without flickering during scrolling and fast single-click jumps.
- 🚘 **Diverse Premium Fleet**: Detailed vehicle cards with passenger counts, luggage capacity, AC status, and transparent pricing per kilometer.
- 📍 **Comprehensive Route Coverage**: Pre-built popular intercity routes across Gujarat, Maharashtra, Rajasthan, and beyond.
- 💬 **Direct WhatsApp Integration**: Pre-filled customizable messages for quick quote requests and booking confirmations.

---

## 🏎️ Premium Fleet Showcase

| Vehicle Type | Capacity | Ideal For | AC Status | Base Rate |
| :--- | :--- | :--- | :--- | :--- |
| **Sedan (Dzire / Etios)** | 4 Passengers, 2 Bags | Executive & Small Family Trips | Dual AC | ₹11/km |
| **SUV (Ertiga / Triber)** | 6 Passengers, 3 Bags | Family Outstation Travel | Rear AC | ₹14/km |
| **Innova Crysta** | 7 Passengers, 4 Bags | Premium Long Distance Travel | Multi-zone AC | ₹18/km |
| **Kia Carens** | 6 Passengers, 3 Bags | Luxury Family Comfort | Smart AC | ₹16/km |
| **Tempo Traveller** | 12 - 17 Passengers, 8 Bags | Group Tours & Corporate Trips | Heavy-Duty AC | ₹24/km |
| **Force Urbania** | 13 - 17 Passengers, 10 Bags | Ultra-Luxury Group Travel | Executive Climate Control | ₹30/km |

---

## 🛣️ Popular Outstation Routes

- 🏙️ **Ahmedabad ↔ Mumbai** (~520 km)
- 🏢 **Ahmedabad ↔ Surat** (~265 km)
- 🏰 **Ahmedabad ↔ Udaipur** (~260 km)
- 🏭 **Ahmedabad ↔ Vadodara** (~110 km)
- 🛕 **Ahmedabad ↔ Somnath / Dwarka** (~410 km)
- 🌊 **Ahmedabad ↔ Diu / Daman** (~370 km)

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.4 (App Router & Turbopack)
- **UI & Components**: React 19, Tailwind CSS, Lucide React Icons
- **Language**: TypeScript 5.0
- **Optimization**: Next.js `next/image` automatic WebP/AVIF asset optimization, server components for static pages
- **Styling**: Vanilla Tailwind CSS with custom micro-animations and HSL amber color palette (`#FFB800`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sparshworks10/Lucifer-Cabs-Work.git
   cd Lucifer-Cabs-Work
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

4. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

---

## 📂 Project Structure

```
cab/
├── public/
│   └── images/
│       ├── fleet/            # Fleet vehicle cutouts & photos
│       ├── packages/         # Package tour graphics
│       ├── testimonials/     # Customer showcase images
│       └── about-hero-new.jpg # Realistic About Us hero photo
├── src/
│   ├── app/
│   │   ├── about/            # About Us page route
│   │   ├── routes/           # Routes directory route
│   │   ├── layout.tsx        # Root layout with Metadata & SEO
│   │   └── page.tsx          # Homepage with Hero, Fleet, Routes & Packages
│   ├── components/
│   │   ├── cta/              # Call to Action sections
│   │   ├── fleet/            # Fleet cards & vehicle displays
│   │   ├── hero/             # Hero section & interactive booking widget
│   │   ├── layout/           # Sticky Navbar & Footer
│   │   ├── packages/         # Tour package cards
│   │   ├── routes/           # Intercity routes components
│   │   ├── services/         # Services section
│   │   ├── testimonials/     # Reviews & customer ratings
│   │   └── why-choose-us/    # Feature highlights & statistics
│   ├── data/
│   │   └── mockData.ts       # Fleet, routes, packages & testimonial data
│   └── lib/
│       └── whatsapp.ts       # WhatsApp link & message helpers
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS theme & custom colors
└── tsconfig.json             # TypeScript configuration
```

---

## 📞 Support & Contact

- 📞 **Phone**: [+91 70693 00605](tel:7069300605)
- 💬 **WhatsApp**: [Chat on WhatsApp](https://wa.me/917069300605)
- 🌐 **Website**: Lucifer Cabs

---

© 2026 **Lucifer Cabs**. All Rights Reserved.
