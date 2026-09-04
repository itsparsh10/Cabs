import { Route } from "@/data/mockData"
import { ArrowRight } from "lucide-react"
import { getRouteWhatsAppUrl } from "@/lib/whatsapp"

const SuratLandmark = () => (
  <svg width="44" height="38" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="2" y="32" width="44" height="4" fill="#CBD5E1" rx="1" />
    <path d="M10 12L20 32H0L10 12Z" fill="#FFB800" />
    <path d="M12 16L18 32H6L12 16Z" fill="#FFF" />
    <path d="M26 8L34 32H18L26 8Z" fill="#F59E0B" />
    <path d="M26 12L31 32H21L26 12Z" fill="#FFF" />
    <rect x="36" y="14" width="8" height="18" fill="#FFB800" rx="1" />
    <rect x="38" y="17" width="4" height="4" fill="#FFF" rx="0.5" />
    <rect x="38" y="23" width="4" height="4" fill="#FFF" rx="0.5" />
    <line x1="26" y1="8" x2="6" y2="32" stroke="#D97706" strokeWidth="1" />
    <line x1="26" y1="8" x2="14" y2="32" stroke="#D97706" strokeWidth="1" />
    <line x1="26" y1="8" x2="38" y2="32" stroke="#D97706" strokeWidth="1" />
  </svg>
)

const AhmedabadLandmark = () => (
  <svg width="44" height="38" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="2" y="32" width="44" height="4" fill="#CBD5E1" rx="1" />
    <rect x="6" y="8" width="8" height="24" fill="#FFB800" rx="1" />
    <path d="M10 2L14 8H6L10 2Z" fill="#D97706" />
    <rect x="34" y="8" width="8" height="24" fill="#FFB800" rx="1" />
    <path d="M38 2L42 8H34L38 2Z" fill="#D97706" />
    <rect x="14" y="14" width="20" height="18" fill="#F59E0B" />
    <path d="M17 32V22C17 19.5 20 18 24 18C28 18 31 19.5 31 22V32H17Z" fill="#FFF" />
    <circle cx="24" cy="12" r="3" fill="#FFB800" />
  </svg>
)

const MumbaiLandmark = () => (
  <svg width="44" height="38" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="2" y="32" width="44" height="4" fill="#CBD5E1" rx="1" />
    <rect x="8" y="10" width="32" height="22" fill="#FFB800" rx="1" />
    <path d="M24 4C18 4 14 7 14 10H34C34 7 30 4 24 4Z" fill="#D97706" />
    <rect x="6" y="6" width="6" height="26" fill="#F59E0B" rx="1" />
    <rect x="36" y="6" width="6" height="26" fill="#F59E0B" rx="1" />
    <path d="M9 2L12 6H6L9 2Z" fill="#D97706" />
    <path d="M39 2L42 6H36L39 2Z" fill="#D97706" />
    <path d="M18 32V20C18 16.5 20.5 14 24 14C27.5 14 30 16.5 30 20V32H18Z" fill="#FFF" />
  </svg>
)

const UdaipurLandmark = () => (
  <svg width="44" height="38" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="2" y="32" width="44" height="4" fill="#CBD5E1" rx="1" />
    <rect x="8" y="16" width="32" height="16" fill="#FFF" stroke="#FFB800" strokeWidth="2" rx="1" />
    <path d="M24 4C19 4 17 9 17 16H31C31 9 29 4 24 4Z" fill="#FFB800" />
    <path d="M24 1L25.5 4H22.5L24 1Z" fill="#D97706" />
    <path d="M11 10C8 10 7 13 7 16H15C15 13 14 10 11 10Z" fill="#F59E0B" />
    <path d="M37 10C34 10 33 13 33 16H41C41 13 40 10 37 10Z" fill="#F59E0B" />
    <rect x="21" y="22" width="6" height="10" rx="3" fill="#FFB800" />
  </svg>
)

const UjjainLandmark = () => (
  <svg width="44" height="38" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2003/svg" className="shrink-0">
    <rect x="2" y="32" width="44" height="4" fill="#CBD5E1" rx="1" />
    <path d="M24 2C21 8 16 16 14 32H34C32 16 27 8 24 2Z" fill="#FFB800" />
    <path d="M24 6C22 10 19 18 17 32H31C29 18 26 10 24 6Z" fill="#FFF" />
    <circle cx="24" cy="2" r="1.5" fill="#D97706" />
    <path d="M24 2V0L29 1.5L24 3V2Z" fill="#FFB800" />
    <path d="M8 20L14 32H2L8 20Z" fill="#F59E0B" />
    <path d="M40 20L46 32H34L40 20Z" fill="#F59E0B" />
    <rect x="21" y="24" width="6" height="8" rx="2" fill="#D97706" />
  </svg>
)

interface RouteCardProps {
  route: Route
}

export default function RouteCard({ route }: RouteCardProps) {
  const whatsappUrl = getRouteWhatsAppUrl(route.from, route.to)

  const getLandmarkIcon = () => {
    if (route.to === "Udaipur" || route.from === "Udaipur") return <UdaipurLandmark />
    if (route.to === "Ujjain" || route.from === "Ujjain") return <UjjainLandmark />
    if (route.to === "Mumbai" || route.from === "Mumbai") return <MumbaiLandmark />
    if (route.to === "Ahmedabad" || route.from === "Ahmedabad") return <AhmedabadLandmark />
    return <SuratLandmark />
  }

  return (
    <div className="bg-white border border-gray-100/90 rounded-xl p-4 flex items-center justify-between gap-3.5 shadow-2xs hover:shadow-md transition-all duration-200 group hover:-translate-y-0.5">
      <div className="flex items-center gap-3.5">
        <div className="w-12 h-12 bg-amber-50/60 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#FFB800]/20 transition-colors p-1">
          {getLandmarkIcon()}
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
            {route.from} <ArrowRight className="w-3 h-3 text-gray-400 shrink-0" /> {route.to}
          </h3>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFB800] font-bold text-xs mt-0.5 flex items-center gap-1 hover:text-amber-600 transition-colors"
          >
            <span>{route.linkText}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  )
}

