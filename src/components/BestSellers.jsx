import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BestSellers = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bs-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
      
      gsap.from(".bs-image", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        scale: 0.8,
        rotation: -5,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.5)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-[var(--color-brand-cream)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 bs-text relative z-10">
            <h2 className="font-heading text-5xl md:text-7xl uppercase text-[var(--color-brand-black)] leading-none mb-6">
              Taste the <br/>
              <span className="text-[var(--color-brand-red)]">Legend</span>
            </h2>
            <p className="font-sans text-xl text-gray-700 mb-8 max-w-lg">
              Our signature 4 Brothers burger is a masterpiece of flavors. Two smashed beef patties, melty American cheese, caramelized onions, and our secret family sauce.
            </p>
            <div className="flex items-center gap-6">
              <span className="font-heading text-4xl text-[var(--color-brand-black)]">$12.99</span>
              <button className="px-8 py-3 bg-[var(--color-brand-black)] text-white font-heading uppercase text-lg rounded-full hover:bg-[var(--color-brand-red)] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 bs-image relative">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-full h-full bg-[var(--color-brand-yellow)] rounded-full mix-blend-multiply opacity-20 translate-x-10 -translate-y-10 blur-2xl"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop" 
              alt="Legend Burger" 
              className="w-full relative z-10 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/3]"
            />
            
            {/* Absolute badge */}
            <div className="absolute -left-8 top-1/2 -translate-y-10 bg-[var(--color-brand-red)] text-white w-24 h-24 rounded-full flex items-center justify-center font-script text-3xl rotate-12 shadow-xl z-20">
              #1
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
