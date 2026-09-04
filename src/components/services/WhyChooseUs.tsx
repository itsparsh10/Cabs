import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { STATS } from "@/data/mockData"

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-gray-100">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/why-choose-us-bg.jpg" 
          alt="Background" 
          fill
          className="object-cover object-center opacity-5 mix-blend-overlay grayscale"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <span className="text-amber-500 font-bold text-sm tracking-widest uppercase block mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Experience The Best <br/>Taxi Service In India</h2>
            </div>
            
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              We provide the most reliable, safe and affordable taxi service across major cities. With over a decade of experience, your journey is our priority.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Professional & Verified Drivers', 'Well Maintained Cabs', 'No Hidden Charges', '24x7 Customer Support', 'On Time Pickup & Drop'].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {STATS.map(stat => (
              <div key={stat.id} className="bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 text-center shadow-xl">
                <div className="text-4xl font-extrabold text-amber-500 mb-2">{stat.value}</div>
                <div className="text-slate-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
