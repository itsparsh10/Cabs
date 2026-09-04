import { CheckCircle2, Star } from "lucide-react";

export function TrustTestimonials() {
  return (
    <section className="bg-surface overflow-hidden">
      {/* Why Choose Us & Stats */}
      <div className="border-b border-border bg-white">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px] py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Why Choose Us */}
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl font-black text-dark mb-8 tracking-tight">Why Choose Lucifer Cabs?</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">Professional & Verified Drivers</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">Well Maintained & Clean Vehicles</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">Transparent Pricing, No Hidden Charges</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">24x7 Customer Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">On-time Pickup & Drop</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-bold text-dark text-sm">Safe & Comfortable Journey</span>
                </li>
              </ul>
            </div>
            
            {/* Right: Stats */}
            <div className="w-full lg:w-7/12 relative">
              <div className="absolute bottom-0 right-0 w-full h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLDUwIEwxMDAsMjUgTDIwMCw1MCBaIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+')] bg-repeat-x opacity-30 z-0"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 text-center">
                <div className="bg-white/80 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-black text-primary mb-1">10K+</div>
                  <div className="text-[11px] font-bold text-dark">Happy Customers</div>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-black text-primary mb-1">500+</div>
                  <div className="text-[11px] font-bold text-dark">Cars On Road</div>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-black text-primary mb-1">50+</div>
                  <div className="text-[11px] font-bold text-dark">Routes Covered</div>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4">
                  <div className="text-3xl font-black text-primary mb-1">24/7</div>
                  <div className="text-[11px] font-bold text-dark">Customer Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-12 max-w-[1400px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Testimonials</p>
            <h2 className="text-3xl font-black text-dark tracking-tight">What Our Customers Say</h2>
          </div>
          
          <div className="flex flex-col xl:flex-row items-center gap-12">
            <div className="w-full xl:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-[13px] text-body leading-relaxed mb-6 font-medium">"Excellent service from Surat to Mumbai. Driver was very polite and car was in perfect condition."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-warm border border-border"></div>
                  <div>
                    <p className="font-bold text-dark text-[13px]">Ravi Patel</p>
                    <p className="text-[11px] text-muted">Surat</p>
                  </div>
                </div>
              </div>
              
              {/* Review 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-[13px] text-body leading-relaxed mb-6 font-medium">"On-time pickup, smooth journey and very professional. Highly recommended!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-warm border border-border"></div>
                  <div>
                    <p className="font-bold text-dark text-[13px]">Neha Shah</p>
                    <p className="text-[11px] text-muted">Ahmedabad</p>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-[13px] text-body leading-relaxed mb-6 font-medium">"We booked round trip for Udaipur. Amazing experience with Lucifer Cabs."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-surface-warm border border-border"></div>
                  <div>
                    <p className="font-bold text-dark text-[13px]">Ketan Mehta</p>
                    <p className="text-[11px] text-muted">Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Car overlapping on right */}
            <div className="hidden xl:block w-1/3 relative h-64">
               <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[120%] h-full">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary rounded-full z-0 translate-x-12"></div>
                  {/* Car Placeholder */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-48 bg-white border-4 border-border rounded-xl shadow-2xl z-10 flex items-center justify-center transform -rotate-3 overflow-hidden">
                     <span className="font-black text-xl text-muted/30 uppercase">Car Image</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
