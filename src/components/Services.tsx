import { Car, MapPin, Plane, RefreshCw } from "lucide-react";

const services = [
  {
    title: "One Way Taxi",
    description: "Travel one side without paying for return journey.",
    icon: <Car className="w-8 h-8 text-primary" />,
    cta: "Book One Way"
  },
  {
    title: "Round Trip Taxi",
    description: "Book round trip cabs for convenient return travel.",
    icon: <RefreshCw className="w-8 h-8 text-primary" />,
    cta: "Book Round Trip"
  },
  {
    title: "Airport Taxi",
    description: "Airport pickup & drop services on time.",
    icon: <Plane className="w-8 h-8 text-primary" />,
    cta: "Book Airport Taxi"
  },
  {
    title: "Local Taxi",
    description: "Hourly & local taxi services in Surat and nearby.",
    icon: <MapPin className="w-8 h-8 text-primary" />,
    cta: "Book Local Taxi"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-surface">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-black text-dark tracking-tight">Taxi Services For Every Need</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all group flex flex-col h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark leading-tight">{service.title}</h3>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <button className="font-bold text-dark hover:text-primary text-sm inline-flex items-center gap-1.5 transition-colors">
                {service.cta} <span className="text-primary">&rarr;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
