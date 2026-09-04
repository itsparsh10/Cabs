import HeroBackground from "./HeroBackground"
import HeroContent from "./HeroContent"
import BookingCard from "./BookingCard"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-20 flex items-center min-h-[640px]">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Copy & Feature Badges (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column: Booking Card (5 cols) */}
          <div className="lg:col-span-5 flex w-full justify-center lg:justify-end">
            <BookingCard />
          </div>

        </div>
      </div>
    </section>
  )
}

