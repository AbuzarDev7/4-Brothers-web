import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const menuItems = [
  { id: 1, name: 'Classic Smash', price: '$8.99', desc: 'Double patty, American cheese, house sauce.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 2, name: 'Spicy Inferno', price: '$10.99', desc: 'Pepper jack, jalapeños, spicy mayo.', img: 'https://images.unsplash.com/photo-1594212848116-b8db21f2b4e5?w=400' },
  { id: 3, name: 'BBQ Bacon', price: '$11.99', desc: 'Onion rings, bacon, BBQ sauce.', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400' },
  { id: 4, name: 'The Veggie', price: '$9.99', desc: 'Plant-based patty, fresh greens.', img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400' },
];

const Menu = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".menu-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="menu" className="py-24 bg-[var(--color-brand-black)] text-white relative torn-top torn-bottom -mt-10 z-20">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-6xl md:text-8xl text-[var(--color-brand-yellow)] uppercase tracking-tight">Our Menu</h2>
          <p className="font-script text-3xl mt-4 text-[var(--color-brand-cream)]">Handcrafted daily</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item bg-[var(--color-brand-brown)] rounded-3xl p-6 group cursor-pointer hover:-translate-y-2 transition-transform duration-300 border border-white/10">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-white flex items-center justify-center p-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl" />
              </div>
              <h3 className="font-heading text-2xl uppercase tracking-wide mb-2">{item.name}</h3>
              <p className="text-gray-400 font-sans text-sm mb-4 min-h-[40px]">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-xl text-[var(--color-brand-yellow)]">{item.price}</span>
                <button className="bg-[var(--color-brand-red)] w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <button className="px-10 py-4 border-2 border-[var(--color-brand-yellow)] text-[var(--color-brand-yellow)] font-heading uppercase text-xl rounded-full hover:bg-[var(--color-brand-yellow)] hover:text-black transition-all">
             Full Menu
           </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
