import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { STATS } from "@/data/mockData"

const BENEFITS = [
  "Professional & Verified Drivers",
  "Well Maintained & Clean Vehicles",
  "Transparent Pricing, No Hidden Charges",
  "24x7 Customer Support",
  "On-time Pickup & Drop",
  "Safe & Comfortable Journey",
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/50 py-12 lg:py-16 border-t border-slate-100">
      {/* Background Image Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/why-choose-us-bg.png"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-right opacity-85 transition-opacity"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Left Column: Heading & Bullet Points */}
          <div className="w-full lg:w-4/12 lg:border-r lg:border-slate-200/80 lg:pr-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight mb-4">
              Why Choose Lucifer Cabs?
            </h2>
            <ul className="space-y-2.5">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-600">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#FFB800] fill-amber-100" strokeWidth={2.2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Compact Horizontal Stats Bar */}
          <div className="w-full lg:w-8/12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200/80 items-center text-center">
              {STATS.map((stat) => (
                <div key={stat.id} className="px-2 py-3 flex flex-col items-center justify-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#FFB800] tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-normal text-slate-400 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}




