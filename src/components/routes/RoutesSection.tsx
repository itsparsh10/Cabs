import { ROUTES } from "@/data/mockData"
import SectionTitle from "../shared/SectionTitle"
import { ArrowRight, MapPin } from "lucide-react"

export default function RoutesSection() {
  return (
    <section id="routes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <SectionTitle eyebrow="Popular Routes" title="Most Booked Routes" align="left" />
          <button className="hidden md:flex items-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
            View All Routes <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ROUTES.map((route) => (
            <div key={route.id} className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
                  {route.from} <ArrowRight className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {route.to}
                </h3>
                <button className="text-amber-500 font-semibold text-sm mt-1 flex items-center gap-1 group-hover:text-amber-600 transition-colors">
                  Get Quote <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full flex justify-center items-center gap-2 border border-slate-200 bg-white text-slate-700 px-5 py-3 rounded-full text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
          View All Routes <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
