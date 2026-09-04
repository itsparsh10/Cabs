import Image from "next/image"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image 
        src="/images/hero-city-bg.jpg" 
        alt="Surat City Bridge Background" 
        fill
        priority
        sizes="100vw"
        className="object-cover object-center font-sans"
      />
      {/* Soft light gradient for text contrast while keeping background image vivid and clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
    </div>
  )
}



