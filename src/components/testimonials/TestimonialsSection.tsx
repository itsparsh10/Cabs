import { TESTIMONIALS } from "@/data/mockData"
import Image from "next/image"
import { Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-amber-600 font-bold text-xs tracking-widest uppercase block mb-2">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">What Our Customers Say</h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Testimonial Cards & Dots */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map((review) => (
                <div key={review.id} className="bg-slate-50/70 border border-gray-100 p-6 rounded-2xl relative shadow-sm">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20" />
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 text-sm leading-relaxed relative z-10">
                    &quot;{review.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-amber-500">
                      <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs">{review.name}</h4>
                      <span className="text-slate-500 text-[11px]">{review.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span className="w-8 h-2.5 rounded-full bg-amber-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
          
          {/* Right Side: Yellow Arch & Car Graphic */}
          <div className="lg:col-span-5 relative h-[320px] lg:h-[450px] w-full flex items-end justify-center">
            {/* Yellow Arch */}
            <div className="absolute right-4 bottom-0 w-[320px] lg:w-[380px] h-[320px] lg:h-[380px] bg-amber-500 rounded-t-full z-0"></div>
            
            {/* Car Image */}
            <div className="relative z-10 w-full h-[280px] lg:h-[380px]">
              <Image 
                src="/images/testimonials/testimonial-car.jpg" 
                alt="Bharat Taxi Vehicle"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
