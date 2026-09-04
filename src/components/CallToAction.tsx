import { Phone, MessageCircle, Briefcase } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
        <div className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-primary/20">
          
          {/* Decorative background element */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-center gap-8 relative z-10 w-full md:w-auto">
            <div className="hidden lg:flex w-24 h-24 bg-white/20 rounded-full items-center justify-center shrink-0">
               <Briefcase className="w-12 h-12 text-dark" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-dark mb-2 tracking-tight">Ready to Plan Your Journey?</h2>
              <p className="text-dark/80 font-medium text-[15px]">Book your taxi now and enjoy a comfortable & safe journey.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto relative z-10">
            <a href="tel:+919999999999" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-dark font-bold hover:bg-surface transition-colors shadow-sm text-sm">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-primary" />
              </div>
              Call Now
            </a>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors shadow-sm text-sm">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
