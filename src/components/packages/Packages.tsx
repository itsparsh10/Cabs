import SectionHeading from "../shared/SectionHeading"
import PackageGrid from "./PackageGrid"

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-12 sm:py-16 lg:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRAVEL PACKAGES"
          title="Best Packages For You"
        />

        <PackageGrid />
      </div>
    </section>
  )
}

