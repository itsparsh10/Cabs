"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Headset, ChevronDown } from "lucide-react";

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2003/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm font-sans">
      {/* Top Utility Bar - Desktop Only */}
      <div className="hidden lg:flex justify-between items-center px-6 xl:px-12 py-2 bg-surface text-[13px] font-medium text-dark border-b border-border">
        <div className="flex space-x-8">
          <span className="flex items-center gap-2">
            <Headset size={16} className="text-primary" /> 24x7 Customer Support
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-primary" /> +91 99999 99999
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <div className="flex items-center space-x-4 border-l border-border pl-6 ml-2">
            <a href="#" className="hover:text-primary transition-colors"><FacebookIcon size={16} /></a>
            <a href="#" className="hover:text-primary transition-colors"><InstagramIcon size={16} /></a>
            <a href="#" className="hover:text-primary transition-colors"><WhatsAppIcon size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 lg:px-6 xl:px-12 py-3 lg:py-4 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* Custom Cab SVG Logo based on reference */}
          <div className="w-10 h-8 flex items-center justify-center">
             <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2003/svg">
                <path d="M5 25H35V22C35 18 32 15 28 15H12C8 15 5 18 5 22V25Z" fill="#FF9900"/>
                <rect x="10" y="7" width="20" height="8" rx="2" fill="#FF9900"/>
                <circle cx="12" cy="25" r="3" fill="#1F2937"/>
                <circle cx="28" cy="25" r="3" fill="#1F2937"/>
                <rect x="16" y="4" width="8" height="3" fill="#1F2937"/>
             </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-dark uppercase leading-none">
              LUCIFER TAXI
            </span>
            <span className="text-[10px] font-medium text-muted tracking-wide mt-1">
              Travel with Comfort
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-bold text-dark">
          <Link href="/" className="text-primary border-b-2 border-primary py-1">Home</Link>
          <Link href="#services" className="hover:text-primary transition-colors flex items-center gap-1">
            Services <ChevronDown size={14} className="text-muted" />
          </Link>
          <Link href="#routes" className="hover:text-primary transition-colors py-1">Routes</Link>
          <Link href="#fleet" className="hover:text-primary transition-colors py-1">Fleet</Link>
          <Link href="#packages" className="hover:text-primary transition-colors py-1">Packages</Link>
          <Link href="/about" className="hover:text-primary transition-colors py-1">About Us</Link>
          <Link href="/contact" className="hover:text-primary transition-colors py-1">Contact</Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a href="tel:+919999999999" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm border-2 border-primary/20 text-dark bg-white hover:bg-surface transition-colors shadow-sm">
            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone size={12} className="text-primary" />
            </div>
            Call Now
          </a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm bg-primary text-dark hover:bg-primary-bright transition-colors shadow-sm">
            <WhatsAppIcon size={16} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl py-4 px-4 flex flex-col space-y-4">
          <nav className="flex flex-col space-y-4 text-base font-bold text-dark">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-primary">Home</Link>
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#routes" onClick={() => setIsMenuOpen(false)}>Routes</Link>
            <Link href="#fleet" onClick={() => setIsMenuOpen(false)}>Fleet</Link>
            <Link href="#packages" onClick={() => setIsMenuOpen(false)}>Packages</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
