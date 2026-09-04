import Image from "next/image"
import BookingForm from "../booking/BookingForm"
import { CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center pt-8 pb-16 lg:py-12 overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-city-bg.jpg" 
          alt="Surat City & Bridge" 
          fill
          priority
          className="object-cover object-right opacity-45 mix-blend-multiply"
        />
        {/* Crisp white gradient fade on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Copy, Pills & Car (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Tagline */}
            <div className="mb-3">
              <span className="text-[#FFB800] font-extrabold tracking-wider text-xs md:text-sm uppercase">
                Reliable. Safe. Affordable.
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-black text-slate-900 leading-[1.08] mb-5 tracking-tight">
              Your Journey,<br />
              <span className="text-[#FFB800]">Our Responsibility.</span>
            </h1>
            
            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base mb-7 max-w-[500px] leading-relaxed font-medium">
              One-way, Round-trip, Local and Airport taxi services across Surat and beyond. Travel comfortably with verified drivers and well-maintained cabs.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              {["24x7 Support", "Verified Drivers", "Clean & Safe Cabs"].map((feature) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-2 bg-white border border-[#FFB800] rounded-full px-4 py-2 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span className="text-xs font-bold text-slate-800">{feature}</span>
                </div>
              ))}
            </div>

            {/* Overlapping White Taxi Car */}
            <div className="relative h-[220px] md:h-[300px] lg:h-[380px] w-full max-w-[720px] mt-1 lg:-ml-6 z-20">
              <Image 
                src="/images/taxi-hero-car.jpg" 
                alt="Bharat Taxi White Sedan" 
                fill
                className="object-contain object-left-bottom drop-shadow-2xl mix-blend-multiply brightness-[1.07] contrast-[1.07]"
              />
            </div>

          </div>

          {/* Right Column: Booking Form (5 cols) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end mt-6 lg:mt-0 relative z-30">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  )
}
