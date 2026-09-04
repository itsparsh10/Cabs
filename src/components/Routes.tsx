import { MapPin } from "lucide-react";

const routes = [
  { from: "Surat", to: "Ahmedabad" },
  { from: "Ahmedabad", to: "Surat" },
  { from: "Surat", to: "Mumbai" },
  { from: "Mumbai", to: "Surat" },
  { from: "Ahmedabad", to: "Mumbai" },
  { from: "Mumbai", to: "Ahmedabad" },
  { from: "Surat", to: "Udaipur" },
  { from: "Surat", to: "Ujjain" },
];

export function Routes() {
  return (
    <section id="routes" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Popular Routes</p>
            <h2 className="text-3xl font-black text-dark tracking-tight">Most Booked Routes</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-bold text-sm text-dark hover:border-primary transition-colors">
            View All Routes <span className="text-muted">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-border/80 hover:border-primary hover:shadow-md transition-all flex items-center gap-4 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center shrink-0">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-dark text-[15px] flex items-center gap-2 mb-1">
                  <span>{route.from}</span>
                  <span className="text-muted/60 text-xs">&rarr;</span>
                  <span>{route.to}</span>
                </div>
                <span className="text-primary font-bold text-xs inline-flex items-center gap-1">
                  Get Quote <span className="text-primary/70">&rarr;</span>
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border font-bold text-sm text-dark hover:border-primary transition-colors">
            View All Routes <span className="text-muted">&rarr;</span>
          </button>
        </div>

      </div>
    </section>
  );
}
