import { BookingForm } from "./BookingForm";
import { ShieldCheck, CheckCircle2, Headphones } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center pt-8 pb-16 lg:py-16 overflow-hidden bg-white">
      {/* Background with Cityscape - approximated using gradient for now since image is missing */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface to-white pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 justify-between">
          
          {/* Left Content */}
          <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col items-center text-center lg:items-start lg:text-left space-y-5">
            <span className="inline-block font-bold text-primary tracking-wide text-sm lg:text-base">
              Reliable. Safe. Affordable.
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-black text-dark leading-[1.05] tracking-tight">
              Your Journey,<br />
              <span className="text-primary">Our Responsibility.</span>
            </h1>
            
            <p className="text-body text-base md:text-lg max-w-lg leading-relaxed font-medium mt-4">
              One-way, Round-trip, Local and Airport taxi services across Surat and beyond. Travel comfortably with verified drivers and well-maintained cabs.
            </p>
            
            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-primary/30">
                <Headphones size={18} className="text-primary" />
                <span className="text-[13px] font-bold text-dark">24x7 Support</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-primary/30">
                <ShieldCheck size={18} className="text-primary" />
                <span className="text-[13px] font-bold text-dark">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-sm border border-primary/30">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-[13px] font-bold text-dark">Clean & Safe Cabs</span>
              </div>
            </div>

            {/* Car illustration placeholder - matches the white car position in reference */}
            <div className="hidden lg:block w-full max-w-lg mt-12 relative h-48">
              {/* Simulate the car with a styling block since we don't have the exact image */}
              <div className="absolute bottom-0 left-0 w-full h-[120%] bg-surface-warm rounded-t-3xl border-4 border-white shadow-xl flex items-center justify-center opacity-50 overflow-hidden">
                <span className="font-black text-2xl text-muted/30 tracking-widest uppercase">Car Image Placeholder</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
              </div>
            </div>
          </div>

          {/* Right Content - Booking Card */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end z-20">
            <BookingForm />
          </div>

        </div>
      </div>
    </section>
  );
}
