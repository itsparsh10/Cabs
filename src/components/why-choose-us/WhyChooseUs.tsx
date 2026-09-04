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
    <section id="about" className="relative overflow-hidden bg-slate-50/60 py-16 lg:py-24 border-t border-slate-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/why-choose-us-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right opacity-10"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Title & Bullet Points (6 cols) */}
          <div className="lg:col-span-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-500 block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-6">
              Why Choose Lucifer Cabs?
            </h2>
            <ul className="space-y-3.5">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-bold text-slate-800">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500 fill-amber-100" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Key Stats (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div 
                key={stat.id} 
                className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 text-center transition-all hover:shadow-md hover:border-amber-200"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FFB800] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

