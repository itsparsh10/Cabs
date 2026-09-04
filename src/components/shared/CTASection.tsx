import Image from "next/image"
import { Phone, MessageCircle } from "lucide-react"

export default function CTASection() {
  return (
    <section className="bg-amber-500 relative overflow-hidden py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Suitcase Graphic on Left */}
          <div className="relative w-[180px] h-[180px] lg:w-[220px] lg:h-[220px] shrink-0 mix-blend-darken">
            <Image 
              src="/images/cta-suitcase.jpg" 
              alt="Travel Luggage"
              fill
              className="object-contain mix-blend-darken drop-shadow-xl"
            />
          </div>

          {/* Copy in Center */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
              Ready to Plan Your Journey?
            </h2>
            <p className="text-slate-900 font-medium text-sm md:text-base">
              Book your taxi now and enjoy a comfortable & safe journey.
            </p>
          </div>

          {/* Buttons on Right */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a 
              href="tel:+919876543210"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-green-600 fill-green-600" />
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
