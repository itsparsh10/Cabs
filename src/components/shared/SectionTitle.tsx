export default function SectionTitle({ eyebrow, title, align = "center", className = "" }: { eyebrow: string, title: string, align?: "left" | "center", className?: string }) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      <span className="text-amber-500 font-bold text-sm tracking-widest uppercase block mb-3">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
    </div>
  )
}
