import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
      gsap.from(".hero-image", {
        scale: 0.8,
        opacity: 0,
        rotation: 10,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8
      });
      gsap.from(".badge", {
        scale: 0,
        rotation: -45,
        duration: 0.6,
        ease: "back.out(2)",
        delay: 1.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 px-8 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--color-brand-cream)] to-[#e8e0d0]">
      {/* Background shapes & decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-[var(--color-brand-yellow)] rounded-full mix-blend-multiply opacity-60 blur-3xl scale-150 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-[var(--color-brand-red)] rounded-full mix-blend-multiply opacity-50 blur-3xl scale-150 animate-pulse delay-1000"></div>
        
        {/* Floating Icons/Elements */}
        <div className="badge absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-red-400 shadow-[0_0_20px_rgba(255,0,0,0.8)]"></div>
        <div className="badge absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-yellow-400 shadow-[0_0_20px_rgba(255,255,0,0.8)]"></div>
        <div className="badge absolute top-2/3 left-1/5 w-8 h-8 rounded-full border-4 border-[var(--color-brand-black)] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Top small header text */}
        <p className="hero-text font-script text-4xl md:text-5xl text-[var(--color-brand-red)] -rotate-3 mb-4 drop-shadow-md">
          Crave the best...
        </p>

        {/* Hero Central Area */}
        <div className="relative text-center uppercase font-heading text-[12vw] leading-[0.85] tracking-tight text-[var(--color-brand-black)] mix-blend-difference z-20 w-full flex flex-col items-center">
          <div className="relative flex items-center justify-center w-full -mt-12 md:-mt-20 mb-8">
            {/* Center giant burger image */}
            <div className="hero-image relative z-30 w-72 md:w-[500px] aspect-square pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Burger" 
                className="w-full h-full object-cover filter drop-shadow-2xl rounded-full border-4 border-transparent"
                style={{ clipPath: 'circle(50%)' }}
              />
              
              {/* Floating Badge */}
              <div className="badge absolute bottom-10 -right-10 bg-[var(--color-brand-yellow)] rounded-full w-32 h-32 flex items-center justify-center border-4 border-white shadow-xl transform rotate-12 z-40">
                <span className="font-heading font-bold text-center text-xl leading-tight uppercase p-2 text-black">
                  100%<br/>Fresh
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Actions */}
        <div className="hero-text mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4 z-40">
          <button className="px-6 py-3 md:px-8 md:py-4 bg-[var(--color-brand-black)] text-white font-heading uppercase text-lg md:text-xl rounded-full hover:bg-[var(--color-brand-red)] hover:scale-105 transition-all shadow-lg border-2 border-transparent">
            Order Delivery
          </button>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-transparent text-[var(--color-brand-black)] font-heading uppercase text-lg md:text-xl rounded-full hover:bg-white hover:scale-105 transition-all outline-none border-2 border-[var(--color-brand-black)]">
            View Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
