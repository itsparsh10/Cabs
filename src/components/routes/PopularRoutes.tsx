import SectionHeading from "../shared/SectionHeading"
import RouteGrid from "./RouteGrid"

export default function PopularRoutes() {
  return (
    <section id="routes" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow="POPULAR ROUTES" 
          title="Most Booked Routes" 
          buttonText="View All Routes"
        />
        <RouteGrid />
      </div>
    </section>
  )
}
