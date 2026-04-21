import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import BestSellers from './components/BestSellers';
import BentoPromo from './components/BentoPromo';
import Locations from './components/Locations';
import DeliveryBanner from './components/DeliveryBanner';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="font-sans text-brand-black bg-[var(--color-brand-cream)] overflow-hidden">
      <Navbar />
      <Hero />
      <Menu />
      <BestSellers />
      <BentoPromo />
      <Locations />
      <DeliveryBanner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
