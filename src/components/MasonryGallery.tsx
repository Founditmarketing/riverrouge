import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Restoration', 'Process'];

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    category: 'Residential',
    title: 'Walnut Kitchen Estate',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    category: 'Commercial',
    title: 'Corporate Boardroom Paneling',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop',
    category: 'Restoration',
    title: '19th Century Staircase',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2000&auto=format&fit=crop',
    category: 'Process',
    title: 'Hand-cut Dovetails',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    category: 'Residential',
    title: 'Custom Mahogany Entryway',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1610505466025-533bb320576e?q=80&w=2940&auto=format&fit=crop',
    category: 'Process',
    title: 'Raw Cypress Selection',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop',
    category: 'Residential',
    title: 'Modern Oak Cabinetry',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1582879304171-82fd81eb1622?q=80&w=2000&auto=format&fit=crop',
    category: 'Commercial',
    title: 'Boutique Hotel Lobby',
    span: 'md:col-span-2 md:row-span-1',
  },
];

export default function MasonryGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => activeCategory === 'All' || img.category === activeCategory
  );

  return (
    <section className="py-32 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Complete Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)] mb-12">
            A Legacy in Wood.
          </h2>
          
          {/* Filter Navigation */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b-2 ${
                  activeCategory === category
                    ? 'border-[var(--color-cypress)] text-[var(--color-walnut)] font-medium'
                    : 'border-transparent text-gray-400 hover:text-[var(--color-walnut)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${img.span}`}
                onClick={() => setSelectedImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex flex-col justify-end p-6">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[var(--color-cypress)] text-[10px] tracking-[0.2em] uppercase mb-2 block">
                      {img.category}
                    </span>
                    <h3 className="font-serif text-xl text-white flex items-center justify-between">
                      {img.title}
                      <Maximize2 className="w-4 h-4 text-white/70" />
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
