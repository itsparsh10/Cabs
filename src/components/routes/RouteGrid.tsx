import { ROUTES } from "@/data/mockData"
import RouteCard from "./RouteCard"

export default function RouteGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {ROUTES.map((route) => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  )
}
