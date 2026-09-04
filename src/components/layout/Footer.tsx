import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-amber-400/20 p-1 flex items-center justify-center">
                <Image 
                  src="/assets/logo/lucifer-cabs.png" 
                  alt="Lucifer Cabs" 
                  width={36} 
                  height={36} 
                  className="h-7 w-7 object-contain" 
                />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                Lucifer <span className="text-[#FFB800]">Cabs</span>
              </span>
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-slate-400 font-medium">
              Reliable taxi service in Surat for one-way, round-trip, local and airport travel. Your journey, our responsibility.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-amber-400 hover:text-slate-950">
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-amber-400 hover:text-slate-950">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919876543210" aria-label="WhatsApp" className="rounded-lg bg-slate-900 p-2 text-slate-400 transition-colors hover:bg-emerald-500 hover:text-white">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#FFB800] transition-colors">Services</a></li>
              <li><a href="#routes" className="hover:text-[#FFB800] transition-colors">Routes</a></li>
              <li><a href="#fleet" className="hover:text-[#FFB800] transition-colors">Fleet</a></li>
              <li><a href="#packages" className="hover:text-[#FFB800] transition-colors">Packages</a></li>
              <li><a href="#about" className="hover:text-[#FFB800] transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#FFB800] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">One Way Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Round Trip Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Local Taxi</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Airport Pickup</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Airport Drop</a></li>
              <li><a href="#" className="hover:text-[#FFB800] transition-colors">Outstation Taxi</a></li>
            </ul>
          </div>

          {/* Col 4: Popular Routes */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Popular Routes</h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>Surat to Mumbai</li>
              <li>Surat to Ahmedabad</li>
              <li>Ahmedabad to Surat</li>
              <li>Mumbai to Surat</li>
              <li>Surat to Udaipur</li>
              <li>Surat to Ujjain</li>
            </ul>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                <span>info@lucifercabs.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-amber-400" />
                <span>24x7 Customer Support</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs font-medium text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lucifer Cabs. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp FAB */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-transform hover:scale-110 hover:bg-emerald-600 shadow-emerald-500/30"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </footer>
  )
}

