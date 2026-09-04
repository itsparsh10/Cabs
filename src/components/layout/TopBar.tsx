import { Headphones, PhoneCall, Share2, Camera, MessageCircle } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-100 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-xs text-slate-600">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5">
            <Headphones className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>24x7 Customer Support</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-[#FFB800]" />
            <span className="font-bold text-slate-900">+91 98765 43210</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#FFB800] transition-colors">About Us</a>
            <a href="#" className="hover:text-[#FFB800] transition-colors">Contact Us</a>
            <a href="#" className="hover:text-[#FFB800] transition-colors">FAQ</a>
          </div>
          <div className="flex gap-3 border-l border-gray-200 pl-4">
            <a href="#" className="text-slate-400 hover:text-[#FFB800]"><Share2 className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-slate-400 hover:text-[#FFB800]"><Camera className="w-3.5 h-3.5" /></a>
            <a href="#" className="text-emerald-500 hover:text-emerald-600"><MessageCircle className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
