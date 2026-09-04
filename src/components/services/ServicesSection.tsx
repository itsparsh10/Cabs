import { SERVICES } from "@/data/mockData"
import SectionTitle from "../shared/SectionTitle"
import { CarFront, RefreshCcw, Plane, MapPin, ArrowRight } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  CarFront, RefreshCcw, Plane, MapPin
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Our Services" title="Taxi Services For Every Need" className="mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] || CarFront
            return (
              <div key={service.id} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                  <Icon className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center text-amber-600 font-bold text-sm group-hover:text-amber-700 transition-colors">
                  Book {service.title.split(' ')[0]} <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
