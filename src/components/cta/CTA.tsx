import { Phone } from "lucide-react"

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2003/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.488-8.413z" />
  </svg>
)

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
              href="tel:7069300605"
              className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-extrabold text-white transition-all hover:bg-slate-900 shadow-md hover:scale-[1.03]"
            >
              <Phone className="h-4 w-4 text-amber-400" strokeWidth={2.5} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/917069300605?text=${encodeURIComponent(
                "Hi, I'm looking for a cab service with Lucifer Cabs. Can you please help me with quotes and availability?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-extrabold text-slate-950 transition-all hover:bg-slate-50 shadow-md hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-emerald-600 fill-current shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

