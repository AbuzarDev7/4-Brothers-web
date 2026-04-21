import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BentoPromo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 bg-[var(--color-brand-cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Large Item */}
        <div className="bento-item md:col-span-2 bg-[var(--color-brand-yellow)] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center min-h-[300px] border-4 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111]">
          <div className="relative z-10 lg:w-2/3">
            <h3 className="font-heading text-4xl md:text-5xl uppercase mb-4 text-[var(--color-brand-black)]">Combo Madness</h3>
            <p className="font-sans text-xl mb-6 text-[var(--color-brand-black)]">Buy any 2 burgers, get loaded fries for free.</p>
            <button className="bg-[var(--color-brand-black)] text-white px-6 py-3 rounded-full font-heading uppercase tracking-wide hover:scale-105 transition-transform">
              Claim Offer
            </button>
          </div>
          <img src="https://images.unsplash.com/photo-1576843776838-032ac46fcece?w=400" alt="Fries" className="absolute -right-20 -bottom-20 w-80 h-80 object-cover rounded-full rotate-12 opacity-90 mix-blend-multiply" />
        </div>

        {/* Small Item 1 */}
        <div className="bento-item bg-[var(--color-brand-red)] text-white rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border-4 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111]">
           <h3 className="font-heading text-3xl uppercase relative z-10">Secret<br/>Menu</h3>
           <p className="font-script text-2xl mt-4 relative z-10 text-[var(--color-brand-yellow)]">Shhh... Don't tell.</p>
           <button className="mt-8 bg-white text-[var(--color-brand-red)] px-6 py-2 rounded-full font-heading self-start hover:bg-[var(--color-brand-black)] hover:text-white transition-colors relative z-10">
             Unlock
           </button>
           <div className="absolute -right-10 top-10 text-9xl opacity-20 font-heading">?</div>
        </div>

      </div>
    </section>
  );
};

export default BentoPromo;
