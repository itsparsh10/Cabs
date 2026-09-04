import SectionHeading from "../shared/SectionHeading"
import ServiceGrid from "./ServiceGrid"

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          eyebrow="OUR SERVICES" 
          title="Taxi Services For Every Need" 
        />
        <ServiceGrid />
      </div>
    </section>
  )
}
