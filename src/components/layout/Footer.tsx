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
              <li><Link href="/" className="hover:text-[#FFB800] transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-[#FFB800] transition-colors">Services</Link></li>
              <li><Link href="/routes" className="hover:text-[#FFB800] transition-colors">Routes</Link></li>
              <li><Link href="/#fleet" className="hover:text-[#FFB800] transition-colors">Fleet</Link></li>
              <li><Link href="/#packages" className="hover:text-[#FFB800] transition-colors">Packages</Link></li>
              <li><Link href="/about" className="hover:text-[#FFB800] transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-[#FFB800] transition-colors">Contact Us</Link></li>
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
                <span className="leading-snug">406, Creation Plaza 1, Sitanagar to Bombay Market Road, Surat - 395010</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-amber-400" />
                <a href="tel:7069300605" className="hover:text-amber-400 transition-colors">+91 7069300605</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-amber-400" />
                <a href="mailto:lucifercab7@gmail.com" className="hover:text-amber-400 transition-colors">lucifercab7@gmail.com</a>
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

      {/* Floating Action Buttons matching mobile-reference.png */}
      {/* Floating Call Button on Bottom-Left for Mobile */}
      <a
        href="tel:7069300605"
        className="fixed bottom-5 left-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-[#FFB800] text-slate-950 shadow-2xl transition-all hover:scale-110 hover:bg-amber-400 shadow-amber-500/40 cursor-pointer"
        aria-label="Call Lucifer Cabs"
        title="Call Now: 7069300605"
      >
        <Phone className="h-6 w-6 fill-slate-950 text-slate-950" />
      </a>

      {/* Floating WhatsApp Button on Bottom-Right for Mobile */}
      <a
        href={`https://wa.me/917069300605?text=${encodeURIComponent(
          "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-emerald-600 shadow-emerald-500/40 cursor-pointer"
        aria-label="Contact on WhatsApp"
        title="WhatsApp Us"
      >
        <svg className="h-7 w-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2003/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
        </svg>
      </a>
    </footer>
  )
}

