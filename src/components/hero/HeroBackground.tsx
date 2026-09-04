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
    </div>
  )
}
