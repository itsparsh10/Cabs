import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-8 border-t-[6px] border-primary relative font-sans">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          
          {/* Logo & About */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
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
                <span className="text-2xl font-black tracking-tight text-white uppercase leading-none">
                  LUCIFER TAXI
                </span>
                <span className="text-[10px] font-medium text-primary tracking-wide mt-1">
                  Travel with Comfort
                </span>
              </div>
            </Link>
            <p className="text-muted text-[13px] leading-relaxed mb-6 font-medium">
              We provide the best, safest, and most affordable taxi services across Surat, Gujarat, and all major cities in India. Book your ride today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark transition-colors">
                <FacebookIcon size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark transition-colors">
                <InstagramIcon size={16} />
              </a>
              <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-dark transition-colors">
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-[17px] mb-6 relative pb-2 inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "One Way Taxi", link: "#" },
                { name: "Round Trip Taxi", link: "#" },
                { name: "Local Taxi Service", link: "#" },
                { name: "Airport Transfer", link: "#" },
                { name: "Corporate Travel", link: "#" }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.link} className="text-muted text-[13px] hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-primary/50 group-hover:text-primary transition-colors" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h4 className="text-white font-bold text-[17px] mb-6 relative pb-2 inline-block">
              Popular Routes
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {[
                "Surat to Ahmedabad Taxi",
                "Surat to Mumbai Taxi",
                "Surat to Vadodara Taxi",
                "Surat to Pune Taxi",
                "Ahmedabad to Surat Taxi"
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-muted text-[13px] hover:text-primary transition-colors flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-primary/50 group-hover:text-primary transition-colors" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-[17px] mb-6 relative pb-2 inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-primary w-5 h-5 shrink-0" />
                <span className="text-muted text-[13px]">123, Business Hub, Adajan, Surat, Gujarat 395009</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-primary w-5 h-5 shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919999999999" className="text-muted text-[13px] hover:text-white transition-colors">+91 99999 99999</a>
                  <a href="tel:+918888888888" className="text-muted text-[13px] hover:text-white transition-colors">+91 88888 88888</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="text-primary w-5 h-5 shrink-0" />
                <a href="mailto:info@lucifercabs.com" className="text-muted text-[13px] hover:text-white transition-colors">info@lucifercabs.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-xs font-medium">
            &copy; {new Date().getFullYear()} Lucifer Cabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted text-xs hover:text-white font-medium">Privacy Policy</Link>
            <Link href="#" className="text-muted text-xs hover:text-white font-medium">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </footer>
  );
}

