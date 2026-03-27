import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function HeritagePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      {/* Slim Hero */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url("/riverrougeheritagehero.jpeg")` }}
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
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Our Heritage
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              Rooted in Alexandria, Louisiana, we are dedicated to transforming raw timber into timeless architectural features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {/* Who We Are */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full lg:pr-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-walnut)] mb-6 tracking-tight">
                Who We Are
              </h2>
              <div className="w-12 h-1 bg-[var(--color-cypress)] mb-8"></div>
              <p className="text-lg md:text-xl text-[var(--color-ink)]/80 font-light leading-relaxed mb-6">
                River Rouge Millwork is a professional and licensed company based in Alexandria, Louisiana, committed to delivering exceptional craftsmanship. 
              </p>
              <p className="text-lg text-[var(--color-ink)]/70 font-light leading-relaxed mb-6">
                Our team takes pride in providing top-notch customer service, ensuring that every project meets the highest standards. With a passion for woodworking and attention to detail, we create custom solutions that transform spaces into functional and beautiful environments.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/live_workshop_wip.png" 
                  alt="Craftsmen at work" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>

          {/* What We Do */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full lg:pl-12"
            >
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-walnut)] mb-6 tracking-tight">
                What We Do
              </h2>
              <div className="w-12 h-1 bg-[var(--color-cypress)] mb-8"></div>
              <p className="text-lg md:text-xl text-[var(--color-ink)]/80 font-light leading-relaxed mb-6">
                We specialize in crafting custom woodwork, including luxury cabinets, bespoke doors, and architectural furniture.
              </p>
              <p className="text-lg text-[var(--color-ink)]/70 font-light leading-relaxed mb-6">
                Our skilled artisans expertly blend traditional techniques with modern design, resulting in unique and timeless pieces. Whether it’s a detailed residential renovation or a monumental new commercial build, we bring creativity and precision to every project we touch.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex-1 w-full"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/live_commercial_reception_desk.png" 
                  alt="Custom craftsmanship" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none mix-blend-overlay"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-[var(--color-walnut)] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("/black_walnut_texture.png")', backgroundSize: 'cover' }}></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">Committed to Excellence</h3>
            <p className="text-white/80 font-light text-lg max-w-2xl mx-auto">
              Our professional license and deep roots in Alexandria enable us to approach every project with the integrity and reliability that true craftsmanship demands.
            </p>
          </motion.div>
        </div>
      </section>

      </div>
  );
}
