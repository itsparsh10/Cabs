import FleetGrid from "./FleetGrid"
import { ArrowRight } from "lucide-react"

export default function Fleet() {
  return (
    <section id="fleet" className="bg-slate-50/50 py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-500 block mb-2">
              OUR FLEET
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Choose Your Comfortable Ride
            </h2>
          </div>

          <button className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 transition-all hover:border-amber-400 hover:bg-amber-50/50 shadow-2xs">
            <span>View All Vehicles</span>
            <ArrowRight className="h-4 w-4 text-amber-500" strokeWidth={2.5} />
          </button>
        </div>

        <FleetGrid />
      </div>
    </section>
  )
}

