import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-elem", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact-us" ref={containerRef} className="py-24 bg-white px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/2 contact-elem">
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl border-4 border-[var(--color-brand-black)]" />
        </div>

        <div className="lg:w-1/2 w-full contact-elem bg-[var(--color-brand-yellow)] p-8 md:p-12 rounded-3xl border-4 border-[var(--color-brand-black)] shadow-[10px_10px_0_0_#111]">
          <h2 className="font-heading text-5xl uppercase text-[var(--color-brand-black)] mb-2">Drop a message</h2>
          <p className="font-sans text-lg text-[var(--color-brand-black)] mb-8 font-medium">Have a question or feedback? We'd love to hear from you.</p>
          
          <form className="flex flex-col gap-4 font-sans">
            <input type="text" placeholder="Your Name" className="p-4 rounded-xl border-2 border-[var(--color-brand-black)] outline-none focus:ring-4 focus:ring-orange-500/50 bg-white" />
            <input type="email" placeholder="Your Email address" className="p-4 rounded-xl border-2 border-[var(--color-brand-black)] outline-none focus:ring-4 focus:ring-orange-500/50 bg-white" />
            <textarea placeholder="Your message..." rows="4" className="p-4 rounded-xl border-2 border-[var(--color-brand-black)] outline-none focus:ring-4 focus:ring-orange-500/50 bg-white resize-none"></textarea>
            <button type="button" className="mt-4 bg-[var(--color-brand-black)] text-white w-full py-4 rounded-xl font-heading text-2xl uppercase hover:bg-[var(--color-brand-red)] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
