"use client";

import { useState } from "react";
import { generateWhatsAppQuoteUrl } from "../lib/whatsapp";
import { MapPin, Calendar, Clock, User, ChevronDown, CheckCircle2 } from "lucide-react";

type TripType = "One Way" | "Round Trip" | "Local" | "Airport";

export function BookingForm() {
  const [tripType, setTripType] = useState<TripType>("One Way");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    adults: "1 Adult",
    vehicle: "Sedan"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateWhatsAppQuoteUrl({ ...formData, tripType });
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden w-full max-w-[440px] mx-auto p-6 lg:p-8 border border-border/50">
      <h3 className="text-xl font-bold text-dark mb-6 text-center">Book Your Taxi</h3>
      
      {/* Tabs */}
      <div className="flex justify-between gap-2 mb-6">
        {["One Way", "Round Trip", "Local", "Airport"].map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setTripType(tab as TripType)}
            className={`flex-1 py-2 px-1 text-[11px] sm:text-xs font-bold text-center rounded-full transition-colors border ${
              tripType === tab
                ? "bg-primary text-dark border-primary"
                : "bg-white text-dark border-border hover:border-primary/50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Pickup Location */}
        <div>
          <label className="block text-xs font-bold text-dark mb-1.5">Pickup Location</label>
          <div className="relative">
            <input required type="text" name="pickup" value={formData.pickup} onChange={handleChange} placeholder="Enter pickup location" className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark placeholder:text-muted" />
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" size={16} />
          </div>
        </div>
        
        {/* Drop Location */}
        {tripType !== "Local" && (
          <div>
            <label className="block text-xs font-bold text-dark mb-1.5">Drop Location</label>
            <div className="relative">
              <input required={tripType === "One Way" || tripType === "Round Trip"} type="text" name="drop" value={formData.drop} onChange={handleChange} placeholder="Enter drop location" className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark placeholder:text-muted" />
              <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-primary" size={16} />
            </div>
          </div>
        )}

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-dark mb-1.5">Pickup Date</label>
            <div className="relative">
              <input required type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-dark mb-1.5">Pickup Time</label>
            <div className="relative">
              <input required type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark" />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
            </div>
          </div>
        </div>

        {tripType === "Round Trip" && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-dark mb-1.5">Return Date</label>
              <div className="relative">
                <input required type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-dark mb-1.5">Return Time</label>
              <div className="relative">
                <input required type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark" />
                <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={16} />
              </div>
            </div>
          </div>
        )}

        {/* Passengers */}
        <div>
          <label className="block text-xs font-bold text-dark mb-1.5">Passengers</label>
          <div className="relative">
            <select name="adults" value={formData.adults} onChange={handleChange} className="w-full pl-4 pr-10 py-3 rounded-md border border-border focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-dark bg-white appearance-none">
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="3 Adults">3 Adults</option>
              <option value="4 Adults">4 Adults</option>
              <option value="5+ Adults">5+ Adults</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-dark pointer-events-none" size={16} />
          </div>
        </div>

        <button type="submit" className="w-full bg-primary hover:bg-primary-bright text-dark font-bold text-base py-3.5 rounded-md transition-colors mt-2 shadow-[0_4px_14px_rgba(255,153,0,0.3)] flex justify-center items-center gap-2">
          Get a Quote &rarr;
        </button>
        
        <div className="text-center pt-2">
           <span className="text-xs text-dark font-medium flex items-center justify-center gap-1.5">
             <CheckCircle2 size={14} className="text-success fill-success/10" /> 
             No hidden charges • Best price guarantee
           </span>
        </div>

      </form>
    </div>
  );
}
