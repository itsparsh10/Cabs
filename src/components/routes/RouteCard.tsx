import { Route } from "@/data/mockData"
import { ArrowRight, MapPin } from "lucide-react"

interface RouteCardProps {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3.5 shadow-2xs hover:shadow-md transition-all group cursor-pointer">
      <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FFB800]/20 transition-colors">
        <MapPin className="w-5 h-5 text-[#FFB800]" />
      </div>
      <div>
        <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
          {route.from} <ArrowRight className="w-3 h-3 text-gray-400 shrink-0" /> {route.to}
        </h3>
        <button className="text-[#FFB800] font-bold text-xs mt-0.5 flex items-center gap-1 hover:text-[#e6a600] transition-colors">
          {route.linkText} <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  )
}
