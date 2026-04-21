import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const categories = ["Burgers", "Pizzas", "Shawarma", "Drinks"];

const allMenuItems = [
  // Burgers
  { id: 1, category: "Burgers", name: 'Double Smash Beef', price: '$8.99', desc: 'Juicy double beef patty, American cheese, house sauce.', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
  { id: 2, category: "Burgers", name: 'Zinger Crispy', price: '$7.99', desc: 'Crispy fried chicken breast, lettuce, mayo.', img: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=500&q=80' },
  { id: 3, category: "Burgers", name: 'Classic Egg Burger', price: '$6.99', desc: 'Sunny side egg, beef patty, fresh tomatoes.', img: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=500&q=80' },
  { id: 4, category: "Burgers", name: 'BBQ Bacon Burger', price: '$10.99', desc: 'Bacon slices, onion rings, smoky BBQ sauce.', img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=400&q=80' },

  // Pizzas
  { id: 5, category: "Pizzas", name: 'Pepperoni Blast', price: '$12.99', desc: 'Extra cheese, loaded with beef pepperoni.', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80' },
  { id: 6, category: "Pizzas", name: 'Fajita Supreme', price: '$14.99', desc: 'Chicken fajita, onions, bell peppers, olives.', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80' },
  { id: 7, category: "Pizzas", name: 'Rustic BBQ Chicken', price: '$15.99', desc: 'Grilled chicken, BBQ drizzle, red onions.', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80' },
  { id: 8, category: "Pizzas", name: 'Veggie Delight', price: '$11.99', desc: 'Mushrooms, fresh tomatoes, basil, mozzarella.', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=400&q=80' },

  // Shawarma
  { id: 9, category: "Shawarma", name: 'Arabic Chicken', price: '$5.99', desc: 'Authentic garlic sauce, pickles, fries inside.', img: 'https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg' },
  { id: 10, category: "Shawarma", name: 'Spicy Beef Platter', price: '$8.99', desc: 'Sliced beef shawarma with hummus & pita.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFG2qVSfpbyJkWLn5KkmL0TmCmDb4tx_x8bg&s' },
  { id: 11, category: "Shawarma", name: 'Cheesy Wrap', price: '$6.99', desc: 'Loaded with melted cheese, chicken, signature sauce.', img: 'https://img.freepik.com/free-photo/view-delicious-shawarma-dish_23-2151805425.jpg?semt=ais_incoming&w=740&q=80' },
  { id: 12, category: "Shawarma", name: 'Falafel Gyro', price: '$4.99', desc: 'Crispy falafels, tahini sauce, fresh greens.', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=400&q=80' },

  // Drinks
  { id: 13, category: "Drinks", name: 'Mint Margarita', price: '$3.99', desc: 'Refreshing crushed ice mint lemon drink.', img: 'https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 14, category: "Drinks", name: 'Chilled Cola', price: '$1.99', desc: 'Ice cold carbonated cola drink with ice.', img: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 15, category: "Drinks", name: 'Strawberry Shake', price: '$4.99', desc: 'Thick strawberry milkshake topped with cream.', img: 'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 16, category: "Drinks", name: 'Iced Caramel Latte', price: '$5.50', desc: 'Cold brew coffee with caramel drizzle.', img: 'https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const Menu = () => {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Burgers");
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".menu-item", {
        y: 50,
        opacity: 0,
        scale: 0.95
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeTab]);

  const filteredItems = allMenuItems.filter(item => item.category === activeTab);

  return (
    <section ref={containerRef} id="menu" className="py-24 bg-[var(--color-brand-black)] text-white relative -mt-10 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t-8 border-yellow-500">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-[var(--color-brand-yellow)] to-orange-600 uppercase tracking-tight drop-shadow-lg">
            Our Menu
          </h2>
          <p className="font-script text-3xl mt-4 text-[var(--color-brand-cream)]">Sizzle in every bite!</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 md:px-8 md:py-3 rounded-full font-heading text-lg md:text-xl uppercase transition-all duration-300 border-2 ${
                activeTab === cat 
                ? 'bg-[var(--color-brand-red)] border-[var(--color-brand-red)] text-white scale-110 shadow-lg' 
                : 'bg-transparent border-gray-600 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        
        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-3xl p-6 group cursor-pointer hover:-translate-y-3 transition-all duration-500 border border-white/10 hover:border-[var(--color-brand-yellow)] hover:shadow-[0_10px_30px_rgba(255,194,34,0.2)]">
              <div className="aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-800 flex items-center justify-center relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl block" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <h3 className="font-heading text-2xl uppercase tracking-wide mb-2 text-white">{item.name}</h3>
              <p className="text-gray-400 font-sans text-sm mb-6 min-h-[40px] leading-relaxed">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-[var(--color-brand-yellow)]">{item.price}</span>
                <button className="bg-[var(--color-brand-red)] w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold hover:bg-white hover:text-[var(--color-brand-red)] transition-colors shadow-lg">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Menu;
