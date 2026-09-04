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
      <div className={`flex justify-between items-end mb-8 sm:mb-12 gap-3 ${className}`}>
        <div>
          <span className="text-[#FFB800] font-extrabold text-xs tracking-widest uppercase block mb-1.5">{eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{title}</h2>
        </div>
        {buttonLink ? (
          <Link
            href={buttonLink}
            className="flex shrink-0 items-center gap-1 sm:gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-colors shadow-2xs hover:border-amber-400"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          </Link>
        ) : (
          <button className="flex shrink-0 items-center gap-1 sm:gap-1.5 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-colors shadow-2xs hover:border-amber-400">
            <span>{buttonText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
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
