import SectionHeading from "../shared/SectionHeading"
import FleetGrid from "./FleetGrid"

export default function Fleet() {
  return (
    <section id="fleet" className="bg-slate-50/40 py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="OUR FLEET"
          title="Choose Your Comfortable Ride"
          buttonText="View All"
          buttonLink="/#fleet"
        />

        <FleetGrid />
      </div>
    </section>
  )
}

