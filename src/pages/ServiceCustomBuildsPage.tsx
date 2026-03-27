import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  "commercial_conference_table_1773142338938.png",
  "live_office_cabinets.png",
  "live_large_office_storage.png",
  "live_coffee_shop_counter.jpg"
];

export default function ServiceCustomBuildsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      {/* Slim Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url("/riverrougecustomhero.jpeg")` }}
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
              Service Specialization
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Custom Builds
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              If you can design it, we can craft it. Unique, bespoke hardwood pieces constructed seamlessly to your exact specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-walnut)]">
            Unrestricted Vision.<br/>Uncompromised Craft.
          </h2>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed font-light">
            Sometimes a space demands a centerpiece that defies standard categorization. From monumental coffee shop counters to suspended architectural art fixtures and expansive conference tables, our state-of-the-art facility is equipped to handle complex fabrication challenges.
          </p>
          <ul className="space-y-4">
            {[
              "Monumental conference tables and bespoke commercial furniture",
              "Custom hospitality bars and robust functional coffee shop counters",
              "Unique ceiling beam arrays and suspended architectural woodwork",
              "Complete integrations requiring expert CAD layout and precision routing"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[var(--color-ink)]/90">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-cypress)] flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-sm"
        >
          <img 
            src="/live_coffee_shop_counter.jpg" 
            alt="Custom built coffee shop counter" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Skinny Image Gallery Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden shadow-sm h-48 md:h-64 group"
              >
                <img 
                  src={`/${src}`} 
                  alt={`Custom Build Preview ${index + 1}`} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </div>
  );
}
