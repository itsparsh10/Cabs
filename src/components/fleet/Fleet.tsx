import FleetGrid from "./FleetGrid"
import { ArrowRight } from "lucide-react"

export default function Fleet() {
  return (
    <section id="fleet" className="bg-slate-50/40 py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference UI design */}
        <div className="relative mb-10 flex flex-col items-center justify-center text-center">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FFB800] block mb-1">
            OUR FLEET
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 tracking-tight">
            Choose Your Comfortable Ride
          </h2>
        </div>

        <FleetGrid />
      </div>
    </section>
  )
}

