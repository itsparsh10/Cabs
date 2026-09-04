import { FLEET } from "@/data/mockData"
import FleetCard from "./FleetCard"

export default function FleetGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-3.5">
      {FLEET.map((vehicle) => (
        <FleetCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}

