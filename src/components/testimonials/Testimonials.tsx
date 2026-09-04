import Image from "next/image"
import { TESTIMONIALS } from "@/data/mockData"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-500 block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        {/* Main Content Layout: 2x2 Review Cards Grid on Left + Shifted Large Car Feature on Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          
          {/* Left Cards Area (2x2 Grid of 4 Review Cards) */}
          <div className="w-full lg:w-[60%]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TESTIMONIALS.map((review) => (
                <TestimonialCard key={review.id} testimonial={review} />
              ))}
            </div>
          </div>

          {/* Right Side: Prominent Large Car Graphic shifted slightly for perfect visual alignment */}
          <div className="w-full lg:w-[40%] relative flex items-center justify-center shrink-0 mt-6 lg:mt-0 lg:pl-4">
            <div className="relative w-80 h-80 sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] shrink-0 transition-transform duration-300 hover:scale-105 transform lg:-translate-x-1 lg:-translate-y-1">
              <Image
                src="/images/testimonials/testimonial-car-side.png"
                alt="Lucifer Cabs Premium Fleet"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}


