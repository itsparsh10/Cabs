import Image from "next/image"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image 
        src="/images/hero-city-bg.jpg" 
        alt="Lucifer Cabs City & Bridge Hero Background" 
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Soft gradient fade for text legibility while keeping the entire background image vivid */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/30 to-transparent pointer-events-none"></div>
    </div>
  )
}




