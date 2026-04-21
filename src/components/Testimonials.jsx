import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Testimonials = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.2)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="locations" ref={containerRef} className="py-24 bg-[var(--color-brand-cream)] px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-heading text-5xl md:text-7xl uppercase text-[var(--color-brand-black)] mb-16">
          Words from the <br/><span className="text-[var(--color-brand-red)]">Fam</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="testimonial-card bg-white p-10 rounded-3xl border-2 border-[var(--color-brand-black)] shadow-[8px_8px_0_0_#111] text-left relative">
            <div className="absolute -top-6 -left-6 bg-[var(--color-brand-yellow)] w-12 h-12 rounded-full flex items-center justify-center font-heading text-3xl font-bold border-2 border-[var(--color-brand-black)]">"</div>
            <p className="font-sans text-xl mb-6">"Hands down the best burger I've had in the city. The smash patties are perfectly crispy on the edges but juicy inside. Addicted."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-[var(--color-brand-black)]">
                 <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" alt="Avatar" />
              </div>
              <div>
                <p className="font-heading uppercase text-lg">Mike R.</p>
                <p className="font-sans text-sm text-[var(--color-brand-red)]">Local Foodie</p>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card bg-[var(--color-brand-black)] text-white p-10 rounded-3xl shadow-[8px_8px_0_0_#BD3211] border-2 border-[var(--color-brand-red)] text-left relative mt-8 md:mt-0">
             <div className="absolute -top-6 -right-6 bg-[var(--color-brand-red)] w-12 h-12 rounded-full flex items-center justify-center font-heading text-3xl font-bold text-white border-2 border-[var(--color-brand-black)]">"</div>
            <p className="font-sans text-xl mb-6">"We ordered for a party of 10 and everything came piping hot. The truffle fries are out of this world."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white">
                 <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Avatar" />
              </div>
              <div>
                <p className="font-heading uppercase text-lg text-[var(--color-brand-yellow)]">Sarah W.</p>
                <p className="font-sans text-sm text-gray-300">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
