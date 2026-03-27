import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type Category = 'All' | 'Commercial' | 'Cabinets' | 'Doors' | 'Trimming & Mold';

interface PortfolioItem {
  id: string;
  src: string;
  category: Category;
}

const portfolioItems: PortfolioItem[] = [
  { id: "1", src: "commercial_conference_table_1773142338938.png", category: "Commercial" },
  { id: "3", src: "live_commercial_lighting.png", category: "Commercial" },
  { id: "4", src: "live_commercial_medical_entry.png", category: "Commercial" },
  { id: "5", src: "live_commercial_reception_desk.png", category: "Commercial" },
  { id: "6", src: "live_medical_breakroom.png", category: "Commercial" },
  { id: "7", src: "live_medical_commercial_cabinetry.png", category: "Commercial" },
  { id: "8", src: "live_medical_dental_exam.png", category: "Commercial" },
  { id: "11", src: "live_custom_cabinetry_1.jpeg", category: "Cabinets" },
  { id: "12", src: "live_custom_cabinetry_2.jpeg", category: 'Cabinets' },
  { id: "13", src: "live_office_cabinets.png", category: 'Cabinets' },
  { id: "14", src: "live_large_office_storage.png", category: 'Cabinets' },
  { id: "15", src: "riverrougekitchencabinetsafter2.jpg", category: 'Cabinets' },
  { id: "16", src: "live_handcrafted_door.jpeg", category: 'Doors' },
  { id: "17", src: "live_handcrafted_workshop_detail.jpeg", category: 'Doors' },
  { id: "18", src: "architectural_wood_slats_1773142351633.png", category: 'Trimming & Mold' },
  { id: "24", src: "live_workshop_wip.png", category: 'Trimming & Mold' },
  { id: "25", src: "live_coffee_shop_counter.jpg", category: 'Commercial' }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (filter) {
      setActiveCategory(filter as Category);
    }
  }, []);

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      <Header />
      
      {/* Slim Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url("/riverrougeportfoliohero.jpeg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--color-walnut)]/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 text-white max-w-4xl mx-auto mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-cypress)] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-medium">
              Portfolio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Our Visual Gallery
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              A comprehensive showcase of our finest architectural millwork, bespoke cabinetry, and heritage restorations. Filter by category to explore our project history.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section & Gallery */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Navigation Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(['All', 'Commercial', 'Cabinets', 'Doors', 'Trimming & Mold'] as Category[]).map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-[var(--color-walnut)] text-[var(--color-cloud)] shadow-md' 
                    : 'bg-transparent text-[var(--color-ink)] border border-[var(--color-walnut)]/20 hover:border-[var(--color-walnut)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry / Grid Gallery */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid mb-8 relative group rounded-2xl overflow-hidden shadow-sm block w-full"
                >
                  <img 
                    src={`/${item.src}`} 
                    alt={`Portfolio Piece in ${item.category}`} 
                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none"></div>
                  
                  {/* Category Label on Hover */}
                  <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase text-[var(--color-walnut)] shadow-lg">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-light text-[var(--color-ink)]/60">No projects found for this category.</p>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}
