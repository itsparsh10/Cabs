import { Service } from "@/data/mockData"
import { Car, RefreshCw, Plane, MapPin, ArrowRight } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  Car, RefreshCw, Plane, MapPin
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || MapPin

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-2xs hover:shadow-md transition-shadow group flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#FFB800]/20 transition-colors">
          <Icon className="w-6 h-6 text-[#FFB800]" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-6">{service.description}</p>
      </div>

      <button className="flex items-center text-[#FFB800] font-bold text-xs hover:text-[#e6a600] transition-colors pt-4 border-t border-gray-50">
        {service.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </button>
    </div>
  )
}
