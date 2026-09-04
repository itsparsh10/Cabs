"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Routes", href: "#routes" },
    { name: "Fleet", href: "#fleet" },
    { name: "Packages", href: "#packages" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="h-20 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-amber-400/20 p-1 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/assets/logo/lucifer-cabs.png"
                alt="Lucifer Cabs Logo"
                width={40}
                height={40}
                priority
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                Lucifer <span className="text-[#FFB800]">Cabs</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500">Travel with Comfort</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative flex items-center gap-1 text-sm font-semibold transition-colors py-2 ${
                  link.active
                    ? "text-amber-500 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:rounded-full after:bg-amber-500"
                    : "text-slate-700 hover:text-amber-500"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919876543210"
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-xs sm:text-sm font-bold text-slate-800 transition-all hover:border-amber-400 hover:bg-amber-50/50 shadow-2xs"
            >
              <Phone className="h-4 w-4 text-amber-500" strokeWidth={2.5} />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 items-center justify-center gap-2 rounded-full bg-[#FFB800] px-5 text-xs sm:text-sm font-extrabold text-slate-950 transition-all hover:bg-amber-500 shadow-md shadow-amber-500/20 hover:scale-[1.02]"
            >
              <MessageCircle className="h-4 w-4 fill-slate-950 text-[#FFB800]" strokeWidth={2} />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-slate-200 bg-white px-6 pb-6 pt-4 shadow-xl lg:hidden transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2.5 text-base font-bold text-slate-800 hover:text-amber-500 transition-colors border-b border-slate-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-center text-sm font-bold text-slate-800"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] py-3 text-center text-sm font-bold text-slate-950 shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

