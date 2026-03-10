import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2 } from 'lucide-react';

const categories = ['All', 'Residential', 'Commercial', 'Restoration', 'Process'];

const galleryImages = [
  {
    id: 1,
    src: '/live_commercial_lighting.png',
    category: 'Commercial',
    title: 'Modern Corporate Millwork',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: '/live_custom_cabinetry_1.jpeg',
    category: 'Residential',
    title: 'Custom Kitchen Cabinetry',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 3,
    src: '/live_handcrafted_door.jpeg',
    category: 'Restoration',
    title: 'Custom Entryways & Doors',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 4,
    src: '/live_custom_cabinetry_2.jpeg',
    category: 'Residential',
    title: 'Cabinetry Details',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 5,
    src: '/live_medical_breakroom.png',
    category: 'Commercial',
    title: 'Clinic Cabinets',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 6,
    src: '/live_workshop_wip.png',
    category: 'Process',
    title: 'Workshop In-Progress',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 7,
    src: '/live_office_cabinets.png',
    category: 'Commercial',
    title: 'Executive Office Cabinets',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 8,
    src: '/live_commercial_medical_entry.png',
    category: 'Commercial',
    title: 'Medical Office Entryway',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 9,
    src: '/live_medical_dental_exam.png',
    category: 'Commercial',
    title: 'Dental Exam Room Cabinetry',
    span: 'md:col-span-1 md:row-span-2',
  },
  {
    id: 10,
    src: '/live_coffee_shop_counter.jpg',
    category: 'Commercial',
    title: 'Custom Coffee Shop Counter',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 11,
    src: '/live_handcrafted_workshop_detail.jpeg',
    category: 'Process',
    title: 'Handcrafted Assembly',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 12,
    src: '/live_large_office_storage.png',
    category: 'Commercial',
    title: 'Corporate Office Storage',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 13,
    src: '/live_commercial_reception_desk.png',
    category: 'Commercial',
    title: 'Custom Reception Desk',
    span: 'md:col-span-2 md:row-span-1',
  },
  {
    id: 14,
    src: '/live_medical_commercial_cabinetry.png',
    category: 'Commercial',
    title: 'Professional Medical Cabinetry',
    span: 'md:col-span-1 md:row-span-1',
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
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 border-b-2 ${activeCategory === category
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
