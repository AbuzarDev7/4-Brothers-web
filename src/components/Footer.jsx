import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[var(--color-brand-brown)] text-[var(--color-brand-cream)] pt-24 pb-12 px-8 torn-top relative z-10 -mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
        
        <div className="col-span-1 md:col-span-2">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2TT91bmTcmAVVW6nqXxfm_asRDlDZa7ab0A&s" 
            alt="4 Brothers Logo" 
            className="h-24 w-auto mb-6 invert mix-blend-screen opacity-90"
          />
          <p className="font-sans text-gray-400 mb-8 max-w-sm">
            Four brothers, one dream: To make the best damn burgers you've ever had. No compromises, just pure flavor.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-black)] flex items-center justify-center hover:bg-[var(--color-brand-red)] text-white transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-black)] flex items-center justify-center hover:bg-[var(--color-brand-red)] text-white transition-colors">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[var(--color-brand-black)] flex items-center justify-center hover:bg-[var(--color-brand-red)] text-white transition-colors">
               <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.6 318.1 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-2xl mb-6 uppercase tracking-wide text-[var(--color-brand-yellow)]">Quick Links</h4>
          <ul className="space-y-3 font-sans max-w-sm">
            <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Order Online</a></li>
            <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Our Menu</a></li>
            <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Catering</a></li>
            <li><a href="#" className="hover:text-[var(--color-brand-yellow)] transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-2xl mb-6 uppercase tracking-wide text-[var(--color-brand-yellow)]">Visit Us</h4>
          <ul className="space-y-3 font-sans">
            <li className="text-gray-400">123 Burger Lane<br/>Flavortown, TX 75001</li>
            <li className="text-gray-400">Mon-Sun: 11am - 10pm</li>
            <li><a href="tel:5550198" className="text-[var(--color-brand-red)] font-bold hover:underline">(555) 0198-BROS</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between font-sans text-sm text-gray-500">
        <p>© {new Date().getFullYear()} 4 Brothers Web. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
