import { Testimonial } from "@/data/mockData"
import Image from "next/image"
import { Quote, Star } from "lucide-react"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:border-amber-200">
      <Quote className="absolute right-5 top-5 h-8 w-8 text-amber-400/15" />
      
      <div>
        <div className="mb-4 flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <p className="relative z-10 mb-6 text-sm font-medium leading-relaxed text-slate-600 italic">
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-slate-50">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-amber-200">
          <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-sm font-extrabold text-slate-900">{testimonial.name}</h4>
          <span className="block text-xs font-medium text-slate-500">{testimonial.location}</span>
        </div>
      </div>
    </article>
  )
}

