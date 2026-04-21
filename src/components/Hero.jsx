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
    <section ref={containerRef} className="relative pt-32 pb-20 px-8 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background shapes & decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-[var(--color-brand-yellow)] rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[var(--color-brand-red)] rounded-full mix-blend-multiply opacity-50 blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Top small header text */}
        <p className="hero-text font-script text-3xl md:text-4xl text-[var(--color-brand-red)] -rotate-3 mb-4">
          Crave the best...
        </p>

        {/* Huge Main Header */}
        <div className="relative text-center uppercase font-heading text-[12vw] leading-[0.85] tracking-tight text-[var(--color-brand-black)] mix-blend-difference z-20 w-full flex flex-col items-center">
          <div className="hero-text flex whitespace-nowrap overflow-hidden justify-center space-x-4">
            <span>THE REAL</span>
          </div>

          <div className="relative flex items-center justify-center w-full my-4 md:my-0 md:h-[20vh] max-h-[300px]">
            {/* Center giant burger image */}
            <div className="hero-image relative z-30 w-64 md:w-[600px] aspect-square -mt-8 md:-mt-24 pointer-events-none">
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" 
                alt="Delicious Burger" 
                className="w-full h-full object-contain filter drop-shadow-2xl"
                style={{ clipPath: 'circle(45%)' }}
              />
              
              {/* Floating Badge */}
              <div className="badge absolute bottom-10 -right-10 bg-[var(--color-brand-yellow)] rounded-full w-32 h-32 flex items-center justify-center border-4 border-white shadow-xl transform rotate-12 z-40">
                <span className="font-heading font-bold text-center text-xl leading-tight uppercase p-2 text-black">
                  100%<br/>Fresh
                </span>
              </div>
            </div>
          </div>
          
          <div className="hero-text flex whitespace-nowrap overflow-hidden justify-center mt-4 md:-mt-10 relative z-10">
            <span>BURGER</span>
          </div>
        </div>

        {/* Bottom Call to Actions */}
        <div className="hero-text mt-12 flex gap-4 z-40">
          <button className="px-8 py-4 bg-[var(--color-brand-black)] text-white font-heading uppercase text-xl rounded-full hover:bg-[var(--color-brand-red)] hover:scale-105 transition-all shadow-lg border-2 border-transparent">
            Order Delivery
          </button>
          <button className="px-8 py-4 bg-transparent text-[var(--color-brand-black)] font-heading uppercase text-xl rounded-full hover:bg-white hover:scale-105 transition-all outline-none border-2 border-[var(--color-brand-black)]">
            View Menu
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
