import { Phone, MessageCircle } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex">
      <a 
        href="tel:+919999999999" 
        className="flex-1 flex flex-col items-center justify-center py-3 text-dark font-bold text-sm border-r border-border hover:bg-surface transition-colors"
      >
        <Phone size={20} className="mb-1 text-primary" />
        Call Now
      </a>
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 flex flex-col items-center justify-center py-3 text-success font-bold text-sm bg-success/10 hover:bg-success/20 transition-colors"
      >
        <MessageCircle size={20} className="mb-1 text-success" />
        WhatsApp
      </a>
    </div>
  );
}
