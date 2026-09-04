import { Service } from "@/data/mockData"
import { Car, RefreshCw, Plane, MapPin, ArrowRight } from "lucide-react"

const ICONS: Record<string, React.ElementType> = {
  Car,
  RefreshCw,
  Plane,
  MapPin,
}

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || MapPin

  return (
    <div className="bg-white border border-gray-100/90 rounded-2xl p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between hover:-translate-y-0.5">
      <div>
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 shrink-0 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-[#FFB800]/20 transition-colors">
            <Icon className="w-6 h-6 text-[#FFB800]" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">{service.title}</h3>
            <p className="text-slate-500 text-xs leading-relaxed">{service.description}</p>
          </div>
        </div>
      </div>

      <button className="flex items-center text-[#FFB800] font-bold text-xs hover:text-[#e6a600] transition-colors pt-4 border-t border-gray-50 w-full">
        {service.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1" />
      </button>
    </div>
  )
}

