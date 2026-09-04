import PackageGrid from "./PackageGrid"
import { ArrowRight } from "lucide-react"

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-amber-500 block mb-2">
              TRAVEL PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Best Packages For You
            </h2>
          </div>
        </div>

        <PackageGrid />
      </div>
    </section>
  )
}

