"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock, ArrowRight, CheckCircle2 } from "lucide-react"

const TABS = ["One Way", "Round Trip", "Local", "Airport"]

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("One Way")

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-7 md:p-8 w-full max-w-[460px] mx-auto relative z-10 border border-gray-100/80">
      <h2 className="text-2xl font-extrabold text-slate-900 mb-6 text-center tracking-tight">Book Your Taxi</h2>
      
      {/* Tabs */}
      <div className="grid grid-cols-4 gap-1.5 p-1 bg-gray-50 rounded-2xl mb-6 border border-gray-100">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2.5 px-2 rounded-xl text-xs md:text-sm font-bold transition-all text-center ${
              activeTab === tab 
                ? "bg-[#FFB800] text-slate-900 shadow-sm" 
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
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Pickup Location</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter pickup location" 
              className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent text-sm text-slate-800 bg-white shadow-2xs"
            />
            <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFB800] pointer-events-none" />
          </div>
        </div>

        {/* Drop Location */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Drop Location</label>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter drop location" 
              className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent text-sm text-slate-800 bg-white shadow-2xs"
            />
            <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#FFB800] pointer-events-none" />
          </div>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Pickup Date</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Select date" 
                className="w-full pl-3.5 pr-9 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent text-xs md:text-sm text-slate-800 bg-white shadow-2xs"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FFB800] pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Pickup Time</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Select time" 
                className="w-full pl-3.5 pr-9 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent text-xs md:text-sm text-slate-800 bg-white shadow-2xs"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FFB800] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Passengers */}
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Passengers</label>
          <div className="relative">
            <select className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent text-sm text-slate-800 bg-white shadow-2xs appearance-none">
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
            <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full mt-2 flex items-center justify-center gap-2 bg-[#FFB800] text-slate-900 py-3.5 px-4 rounded-xl font-extrabold text-base hover:bg-[#e6a600] transition-colors shadow-md group">
          Get a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Guarantee Notes */}
        <div className="flex justify-center items-center gap-4 pt-3 text-xs font-semibold text-slate-600">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No hidden charges</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Best price guarantee</span>
          </div>
        </div>

      </form>
    </div>
  )
}
