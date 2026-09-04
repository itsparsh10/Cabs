"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react"

const TABS = ["One Way", "Round Trip", "Local", "Airport"]

export default function BookingCard() {
  const [activeTab, setActiveTab] = useState("One Way")

  return (
    <div className="relative z-20 w-full max-w-md rounded-3xl bg-white p-6 sm:p-7 shadow-2xl border border-slate-100">
      <h2 className="mb-5 text-center text-xl font-extrabold text-slate-900 tracking-tight">
        Book Your Taxi
      </h2>

      {/* Tabs */}
      <div className="mb-5 grid grid-cols-4 gap-1 p-1 bg-slate-100 rounded-2xl">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`h-9 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab
                ? "bg-[#FFB800] text-slate-950 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

        {/* Pickup Location */}
        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-700">Pickup Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter pickup city or location"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-10 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
            />
            <MapPin className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Drop Location */}
        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-700">Drop Location</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter destination location"
              className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-10 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
            />
            <MapPin className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-700">Pickup Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select date"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-9 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
              />
              <Calendar className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-slate-700">Pickup Time</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select time"
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-9 text-xs sm:text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20"
              />
              <Clock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="mb-1.5 block text-xs font-bold text-slate-700">Passengers</label>
          <div className="relative">
            <select className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/50 px-4 pr-10 text-sm font-medium text-slate-900 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-2 focus:ring-amber-400/20">
              <option>1 Passenger</option>
              <option>2 Passengers</option>
              <option>3 Passengers</option>
              <option>4+ Passengers</option>
            </select>
            <Users className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] text-sm sm:text-base font-extrabold text-slate-950 transition-all hover:bg-amber-500 shadow-lg shadow-amber-500/20 hover:scale-[1.01]"
        >
          Get a Quote <ArrowRight className="h-4 w-4 stroke-[3]" />
        </button>

        {/* Guarantee Notes */}
        <div className="flex items-center justify-center gap-1.5 pt-1 text-xs font-semibold text-slate-500">
          <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
          <span>No hidden charges • Best price guarantee</span>
        </div>

      </form>
    </div>
  )
}

