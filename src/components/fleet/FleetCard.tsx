import { Vehicle } from "@/data/mockData"
import Image from "next/image"
import { ArrowRight, Snowflake } from "lucide-react"
import { getFleetWhatsAppUrl } from "@/lib/whatsapp"

interface FleetCardProps {
  vehicle: Vehicle
}

export default function FleetCard({ vehicle }: FleetCardProps) {
  const whatsappUrl = getFleetWhatsAppUrl(vehicle.name)

  return (
    <article
      className="group flex flex-col justify-between rounded-xl bg-white p-3 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-slate-200/80 shadow-2xs hover:border-amber-300"
    >
      <div>
        {/* Vehicle Image Container - Slightly smaller height & padding on mobile for optimal visual proportion */}
        <div className="relative mx-auto mb-2.5 h-20 sm:h-28 lg:h-32 w-full overflow-hidden flex items-center justify-center bg-white rounded-lg">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(min-width: 1024px) 12vw, (min-width: 640px) 25vw, 50vw"
            className="object-contain p-2 sm:p-1 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
          />
        </div>

        {/* Vehicle Title */}
        <h3 className="mb-2 text-center text-sm sm:text-base font-bold text-slate-800 tracking-tight leading-tight">
          {vehicle.name}
        </h3>

        {/* Specs Line matching reference screenshot */}
        <div className="mb-4 flex flex-col items-center justify-center gap-1 text-[11px] sm:text-xs font-normal text-slate-400">
          <div className="flex items-center justify-center gap-1.5 text-slate-400">
            <span>{vehicle.seats} Seats</span>
            <span className="text-slate-300">•</span>
            <span>{vehicle.bags} Bags</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-slate-400">
            <Snowflake className="h-3 w-3 text-slate-400" strokeWidth={2} />
            <span>{vehicle.ac ? "AC" : "Non AC"}</span>
          </div>
        </div>
      </div>

      {/* Action CTA Link to WhatsApp Quote */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-1 py-1 text-xs sm:text-sm font-bold text-[#FFB800] hover:text-amber-600 transition-colors cursor-pointer group-hover:translate-x-0.5"
      >
        <span>Get Quote</span>
        <ArrowRight className="h-3.5 w-3.5 text-[#FFB800]" strokeWidth={2.5} />
      </a>
    </article>
  )
}


