import { CheckCircle2 } from "lucide-react"

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center transform translate-y-0 lg:-translate-y-27">
      {/* Tagline */}
      <div className="mb-3">
        <span className="text-xs sm:text-sm font-extrabold tracking-widest text-amber-500 uppercase">
          Reliable • Safe • Affordable
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
        Your Journey,<br />
        <span className="text-[#FFB800]">Our Responsibility.</span>
      </h1>

      {/* Description */}
      <p className="mb-7 max-w-lg text-base sm:text-lg font-medium leading-relaxed text-slate-600">
        One-way, Round-trip, Local and Airport taxi services across Surat and beyond. Travel comfortably with verified drivers and well-maintained cabs.
      </p>

      {/* Feature Pills */}
      <div className="flex flex-wrap gap-2.5">
        {["24x7 Support", "Verified Drivers", "Clean & Safe Cabs"].map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 rounded-full border border-amber-300/80 bg-white/90 px-4 py-2 shadow-2xs backdrop-blur-xs transition-transform hover:scale-105"
          >
            <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" strokeWidth={2.5} />
            <span className="text-xs sm:text-sm font-bold text-slate-800">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

