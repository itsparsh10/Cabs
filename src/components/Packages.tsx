import { MapPin, Navigation, Plane, Umbrella, Briefcase, Car } from "lucide-react";

const packages = [
  {
    title: "Local 8 Hours / 80 KM",
    description: "Perfect for local travel",
    price: "₹2,499",
    icon: <Car className="w-8 h-8 text-primary" />,
  },
  {
    title: "Outstation",
    description: "One way or round trip",
    price: "₹6,499",
    icon: <Navigation className="w-8 h-8 text-primary" />,
  },
  {
    title: "Airport Transfer",
    description: "Pickup & drop service",
    price: "₹999",
    icon: <Plane className="w-8 h-8 text-primary" />,
  },
  {
    title: "Weekend Trip",
    description: "2N/3D comfortable trip",
    price: "₹9,999",
    icon: <Umbrella className="w-8 h-8 text-primary" />,
  },
  {
    title: "Corporate Travel",
    description: "Business travel solution",
    price: "₹8,999",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center md:text-left">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Travel Packages</p>
            <h2 className="text-3xl font-black text-dark tracking-tight">Best Packages For You</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-border font-bold text-sm text-dark hover:border-primary transition-colors bg-white">
            View All Packages <span className="text-muted">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border/60 hover:shadow-md hover:border-primary/50 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-surface-warm flex items-center justify-center mb-4 border border-border/50">
                {pkg.icon}
              </div>
              <h3 className="text-[15px] font-bold text-dark mb-1">{pkg.title}</h3>
              <p className="text-muted text-xs mb-5 flex-grow">{pkg.description}</p>
              
              <div className="mb-5">
                <span className="text-xl font-bold text-primary block">{pkg.price}</span>
                <span className="text-[10px] font-bold text-muted uppercase">Onwards</span>
              </div>
              
              <button className="font-bold text-primary hover:text-primary-bright text-xs inline-flex items-center gap-1.5 transition-colors">
                Book Now <span className="text-primary">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
