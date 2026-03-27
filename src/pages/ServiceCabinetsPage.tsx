import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const cabinetImages = [
  "live_custom_cabinetry_1.jpeg",
  "live_custom_cabinetry_2.jpeg",
  "live_office_cabinets.png",
  "live_large_office_storage.png"
];

export default function ServiceCabinetsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      {/* Slim Hero matching PortfolioPage exactly */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url("/riverrougecabinethero.jpeg")` }}
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
              Custom Cabinetry
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Heirloom-quality millwork engineered for precision, built to define the heart of your home and the prestige of your office.
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
            Masterfully Crafted.<br/>Meticulously Scaled.
          </h2>
          <p className="text-lg text-[var(--color-ink)]/80 leading-relaxed font-light">
            At River Rouge, we don't believe in standard sizes or boxed solutions. Every cabinet we build is an original architectural feature—drafted to exact tolerances and constructed from the finest hardwoods. Whether it's an expansive corporate storage wall or a bespoke kitchen island in pecky cypress, your cabinetry is treated as high-end furniture.
          </p>
          <ul className="space-y-4">
            {[
              "Dovetail joinery and premium hardware standard",
              "Custom matched finishes and heritage glazes",
              "Integrated lighting and hidden storage solutions",
              "Built completely in-house at our local workshop"
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
            src="/live_custom_cabinetry_1.jpeg" 
            alt="Hand-finishing custom cabinetry details" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Skinny Image Gallery Banner */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cabinetImages.map((src, index) => (
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
                  alt={`Custom Cabinetry Preview ${index + 1}`} 
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
