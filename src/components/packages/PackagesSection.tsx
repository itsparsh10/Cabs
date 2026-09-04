import { PACKAGES } from "@/data/mockData"
import SectionTitle from "../shared/SectionTitle"
import { MapPin, Car, Plane, Calendar, Users, Briefcase, ArrowRight } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  MapPin, Car, Plane, Calendar, Users, Briefcase
}

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-amber-600 font-bold text-xs tracking-widest uppercase block mb-2">TRAVEL PACKAGES</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Best Packages For You</h2>
          </div>
          <button className="hidden sm:flex items-center gap-1.5 border border-gray-200 bg-white hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm">
            View All Packages <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => {
            const Icon = ICONS[pkg.icon] || MapPin
            return (
              <div key={pkg.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{pkg.title}</h3>
                  <p className="text-slate-500 text-xs mb-6">{pkg.description}</p>
                </div>

                <div className="flex justify-between items-end pt-4 border-t border-gray-50">
                  <div>
                    <span className="text-2xl font-extrabold text-amber-500">₹{pkg.price}</span>
                    <span className="block text-[11px] text-slate-400 font-medium">Onwards</span>
                  </div>

                  <button className="flex items-center text-amber-600 font-bold text-sm hover:text-amber-700 transition-colors">
                    Book Now <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
