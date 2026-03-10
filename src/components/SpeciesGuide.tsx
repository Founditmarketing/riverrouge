import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const species = [
  {
    id: 'walnut',
    name: 'Black Walnut',
    description: 'Deep, rich chocolate tones with complex grain patterns. Ideal for statement cabinetry and executive environments.',
    image: 'https://images.unsplash.com/photo-1610505466025-533bb320576e?q=80&w=2940&auto=format&fit=crop',
    color: 'bg-[#3A2E28]'
  },
  {
    id: 'cypress',
    name: 'Pecky Cypress',
    description: 'A Louisiana heritage wood. Known for its unique textural pockets and golden-honey hues. Perfect for rustic elegance.',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop',
    color: 'bg-[#C4A46B]'
  },
  {
    id: 'oak',
    name: 'White Oak',
    description: 'Incredibly durable with a clean, straight grain. A versatile choice for both modern minimalist and traditional spaces.',
    image: 'https://images.unsplash.com/photo-1582879304171-82fd81eb1622?q=80&w=2000&auto=format&fit=crop',
    color: 'bg-[#D2B48C]'
  },
  {
    id: 'mahogany',
    name: 'Honduran Mahogany',
    description: 'The gold standard for fine furniture and exterior doors. Exceptional stability and a warm, reddish-brown luster.',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop',
    color: 'bg-[#4A2511]'
  }
];

export default function SpeciesGuide() {
  const [activeSpecies, setActiveSpecies] = useState(species[0]);

  return (
    <section className="py-32 bg-[var(--color-cloud)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Material Selection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)] mb-12">
              The Language <br /> of Grain.
            </h2>
            
            <div className="space-y-6">
              {species.map((s) => (
                <div 
                  key={s.id}
                  className={`group cursor-pointer border-l-2 pl-6 py-2 transition-all duration-300 ${activeSpecies.id === s.id ? 'border-[var(--color-cypress)]' : 'border-gray-200 hover:border-gray-300'}`}
                  onMouseEnter={() => setActiveSpecies(s)}
                >
                  <h3 className={`font-serif text-2xl mb-2 transition-colors ${activeSpecies.id === s.id ? 'text-[var(--color-walnut)]' : 'text-gray-400 group-hover:text-gray-600'}`}>
                    {s.name}
                  </h3>
                  <AnimatePresence>
                    {activeSpecies.id === s.id && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[var(--color-ink)]/70 font-light text-lg pt-2">
                          {s.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="aspect-square rounded-full overflow-hidden relative shadow-2xl p-4 bg-white">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSpecies.id}
                    src={activeSpecies.image}
                    alt={activeSpecies.name}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute inset-0 border-[1px] border-[var(--color-cypress)]/30 rounded-full m-8 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
