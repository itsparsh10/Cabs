import { TESTIMONIALS } from "@/data/mockData"
import TestimonialCard from "./TestimonialCard"

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-500 block mb-2">
            TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <TestimonialCard key={review.id} testimonial={review} />
          ))}
        </div>

      </div>
    </section>
  )
}

