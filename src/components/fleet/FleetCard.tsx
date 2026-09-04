import { Vehicle } from "@/data/mockData"
import Image from "next/image"
import { Users, Briefcase, ArrowRight, Snowflake } from "lucide-react"

interface FleetCardProps {
  vehicle: Vehicle
}

export default function FleetCard({ vehicle }: FleetCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200">
      <div>
        <div className="relative mx-auto mb-4 h-36 w-full overflow-hidden rounded-xl bg-slate-50 p-3 flex items-center justify-center">
          <Image
            src={vehicle.image}
            alt={vehicle.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h3 className="mb-3 text-center text-base sm:text-lg font-extrabold text-slate-900">{vehicle.name}</h3>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-slate-50/80 p-2.5 text-xs font-semibold text-slate-600 border border-slate-100">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-amber-500" strokeWidth={2} />
            <span>{vehicle.seats} Seats</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5 text-amber-500" strokeWidth={2} />
            <span>{vehicle.bags} Bags</span>
          </div>
          <span className="text-slate-300">•</span>
          <div className="flex items-center gap-1.5">
            <Snowflake className="h-3.5 w-3.5 text-sky-500" strokeWidth={2} />
            <span>{vehicle.ac ? 'AC' : 'Non AC'}</span>
          </div>
        </div>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-amber-300/80 bg-amber-50/60 py-2.5 text-xs sm:text-sm font-extrabold text-amber-700 transition-all group-hover:bg-[#FFB800] group-hover:text-slate-950 group-hover:shadow-md group-hover:shadow-amber-500/20">
        <span>Get Quote</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
      </button>
    </article>
  )
}

