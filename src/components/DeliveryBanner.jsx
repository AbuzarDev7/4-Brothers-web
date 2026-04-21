import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Truck } from 'lucide-react';

const DeliveryBanner = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scrolling marquee text effect
      gsap.to(textRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-6 bg-gradient-to-r from-[var(--color-brand-red)] to-orange-600 overflow-hidden border-y-8 border-[var(--color-brand-black)] mt-12 shadow-2xl relative z-20 hover:scale-105 transition-transform duration-500">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div ref={textRef} className="flex gap-12 font-heading text-4xl uppercase text-white tracking-widest items-center w-max">
          {Array(8).fill("Fastest Delivery").map((text, i) => (
            <React.Fragment key={i}>
              <span className="flex items-center gap-6 drop-shadow-md">
                {text} 
                <Truck className="w-10 h-10 text-[var(--color-brand-yellow)] drop-shadow-lg" strokeWidth={2.5} />
              </span>
              <span className="text-[var(--color-brand-black)] opacity-50 px-6">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
