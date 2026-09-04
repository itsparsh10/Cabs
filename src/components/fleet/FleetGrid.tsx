import { FLEET } from "@/data/mockData"
import FleetCard from "./FleetCard"

export default function FleetGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {FLEET.map((vehicle) => (
        <FleetCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  )
}

