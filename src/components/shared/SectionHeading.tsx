import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: "left" | "center"
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
  className?: string
}

export default function SectionHeading({
  eyebrow,
  title,
  align = "center",
  buttonText,
  buttonLink,
  className = "",
}: SectionHeadingProps) {
  if (buttonText) {
    return (
      <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 ${className}`}>
        <div>
          <span className="text-[#FFB800] font-extrabold text-xs tracking-widest uppercase block mb-2">{eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{title}</h2>
        </div>
        {buttonLink ? (
          <Link
            href={buttonLink}
            className="hidden md:flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-2xs"
          >
            {buttonText} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button className="hidden md:flex items-center gap-1.5 border border-slate-200 bg-white hover:bg-gray-50 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-2xs">
            {buttonText} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    )
  }

  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <span className="text-[#FFB800] font-extrabold text-xs tracking-widest uppercase block mb-2">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{title}</h2>
    </div>
  )
}
