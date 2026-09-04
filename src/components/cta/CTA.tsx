import { Phone, MessageCircle, ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FFB800] via-amber-400 to-yellow-400 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Background Decorative Pattern */}
          <div className="absolute right-0 top-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>

          {/* Copy in Center */}
          <div className="text-center md:text-left relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight mb-2">
              Ready to Plan Your Journey?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-900/80">
              Book your taxi now and enjoy a comfortable, safe & affordable trip.
            </p>
          </div>

          {/* Buttons on Right */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
            <a
              href="tel:+919876543210"
              className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-extrabold text-white transition-all hover:bg-slate-900 shadow-md hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4 text-amber-400" strokeWidth={2.5} />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition-all hover:bg-slate-50 shadow-md hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4 text-emerald-600 fill-emerald-600/20" strokeWidth={2.5} />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

