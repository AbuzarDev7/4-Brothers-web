import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MapPin, Clock, Phone } from 'lucide-react';

const Locations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".location-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="locations" ref={containerRef} className="py-24 bg-[var(--color-brand-cream)] relaitve">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-6xl md:text-7xl uppercase text-[var(--color-brand-black)] drop-shadow-md">
            Our <span className="text-[var(--color-brand-red)]">Locations</span>
          </h2>
          <p className="font-script text-3xl mt-2 text-gray-600">Find a 4 Brothers near you</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="location-card bg-white p-8 rounded-3xl border-4 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111] hover:-translate-y-2 transition-transform">
            <h3 className="font-heading text-3xl uppercase mb-6 text-[var(--color-brand-black)]">Downtown</h3>
            <div className="flex items-start gap-4 mb-4 text-gray-700 font-sans">
              <MapPin className="text-[var(--color-brand-red)] shrink-0 mt-1" />
              <p>123 Burger Lane<br/>Flavortown, TX 75001</p>
            </div>
            <div className="flex items-center gap-4 mb-4 text-gray-700 font-sans">
              <Clock className="text-[var(--color-brand-red)] shrink-0" />
              <p>11:00 AM - 11:00 PM</p>
            </div>
            <div className="flex items-center gap-4 text-gray-700 font-sans">
              <Phone className="text-[var(--color-brand-red)] shrink-0" />
              <p>(555) 0198-BROS</p>
            </div>
          </div>

          <div className="location-card bg-[var(--color-brand-yellow)] p-8 rounded-3xl border-4 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111] hover:-translate-y-2 transition-transform">
            <h3 className="font-heading text-3xl uppercase mb-6 text-[var(--color-brand-black)]">Westside</h3>
            <div className="flex items-start gap-4 mb-4 text-[var(--color-brand-black)] font-sans">
              <MapPin className="text-[var(--color-brand-black)] shrink-0 mt-1" />
              <p>456 Sizzle Street<br/>Westend, TX 75005</p>
            </div>
            <div className="flex items-center gap-4 mb-4 text-[var(--color-brand-black)] font-sans">
              <Clock className="text-[var(--color-brand-black)] shrink-0" />
              <p>24/7 Open</p>
            </div>
            <div className="flex items-center gap-4 text-[var(--color-brand-black)] font-sans">
              <Phone className="text-[var(--color-brand-black)] shrink-0" />
              <p>(555) 0199-BROS</p>
            </div>
          </div>

          <div className="location-card bg-[var(--color-brand-red)] text-white p-8 rounded-3xl border-4 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111] hover:-translate-y-2 transition-transform">
            <h3 className="font-heading text-3xl uppercase mb-6">North End</h3>
            <div className="flex items-start gap-4 mb-4 font-sans">
              <MapPin className="text-[var(--color-brand-yellow)] shrink-0 mt-1" />
              <p>789 Grill Ave<br/>Northpoint, TX 75010</p>
            </div>
            <div className="flex items-center gap-4 mb-4 font-sans">
              <Clock className="text-[var(--color-brand-yellow)] shrink-0" />
              <p>12:00 PM - 2:00 AM</p>
            </div>
            <div className="flex items-center gap-4 font-sans">
              <Phone className="text-[var(--color-brand-yellow)] shrink-0" />
              <p>(555) 0200-BROS</p>
            </div>
          </div>

        </div>

        {/* The Map Component */}
        <div className="mt-16 md:mt-24 w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden border-4 border-[var(--color-brand-black)] shadow-[10px_10px_0_0_#111] relative z-10 location-card">
          <iframe 
            title="Restaurant Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.076898748366!2d-96.80491868481476!3d32.78453498096338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e991901dd56cb%3A0xc6eb942f3ceeaaf6!2sDowntown%20Dallas%2C%20Dallas%2C%20TX!5e0!3m2!1sen!2sus!4v1689000000000!5m2!1sen!2sus" 
            className="w-full h-full border-0 filter contrast-[1.1] grayscale-[0.2]" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Locations;
