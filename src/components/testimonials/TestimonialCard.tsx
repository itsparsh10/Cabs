import { Testimonial } from "@/data/mockData"
import Image from "next/image"
import { Quote, Star, StarHalf } from "lucide-react"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const fullStars = Math.floor(testimonial.rating)
  const hasHalfStar = testimonial.rating % 1 !== 0

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-amber-300 hover:-translate-y-0.5">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-amber-500/15 group-hover:text-amber-500/25 transition-colors" />
      
      <div>
        <div className="mb-3.5 flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star key={`full-${i}`} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            {hasHalfStar && (
              <StarHalf className="h-4 w-4 fill-amber-400 text-amber-400" />
            )}
          </div>
          <span className="text-xs font-bold text-slate-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80 shadow-2xs">
            {testimonial.rating.toFixed(1)} ★
          </span>
        </div>

        <p className="relative z-10 mb-6 text-sm font-medium leading-relaxed text-slate-600 italic">
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-3.5 border-t border-slate-100">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-amber-300 shadow-xs">
          <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="40px" className="object-cover" />
        </div>

        <div>
          <h4 className="text-sm font-extrabold text-slate-900 leading-tight">{testimonial.name}</h4>
          <span className="block text-xs font-semibold text-slate-400 mt-0.5">{testimonial.location}</span>
        </div>
      </div>
    </article>
  )
}


