import React, { useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-8 py-3 bg-[var(--color-brand-cream)] shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TT91bmTcmAVVW6nqXxfm_asRDlDZa7ab0A&s" 
          alt="4 Brothers Logo" 
          className="h-12 w-auto mix-blend-multiply"
        />
      </div>
      <div className="hidden md:flex items-center gap-8 text-[var(--color-brand-black)] font-medium text-lg uppercase font-heading tracking-wide">
        <a href="#about" className="hover:text-[var(--color-brand-red)] transition-colors">Our Story</a>
        <a href="#menu" className="hover:text-[var(--color-brand-red)] transition-colors">Menu</a>
        <a href="#locations" className="hover:text-[var(--color-brand-red)] transition-colors">Locations</a>
        <a href="#contact" className="hover:text-[var(--color-brand-red)] transition-colors">Get in Touch</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex justify-center items-center h-12 w-12 rounded-full border-2 border-[var(--color-brand-black)] hover:bg-[var(--color-brand-black)] hover:text-white transition-all text-[var(--color-brand-black)] group">
           <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        <button className="hidden md:flex h-12 px-6 items-center justify-center bg-[var(--color-brand-red)] text-white font-heading tracking-wide uppercase hover:-translate-y-1 hover:shadow-lg transition-all rounded-full">
          Order Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
