import { PACKAGES } from "@/data/mockData"
import PackageCard from "./PackageCard"

export default function PackageGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
      {PACKAGES.map((pkg) => (
        <PackageCard key={pkg.id} pkg={pkg} />
      ))}
    </div>
  )
}

