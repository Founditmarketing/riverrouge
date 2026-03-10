import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-walnut)]">
      {/* Background Image with Parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1610505466025-533bb320576e?q=80&w=2940&auto=format&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-walnut)]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[var(--color-cypress)] text-xs md:text-sm tracking-[0.3em] uppercase mb-8 block font-medium">
            Alexandria, Louisiana
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 max-w-5xl mx-auto">
            Nature Distilled into <br className="hidden md:block" />
            <span className="italic text-[var(--color-cypress)]">Precision Craftsmanship.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            From raw, heritage lumber to bespoke architectural millwork. We engineer legacy pieces for spaces that demand perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group flex items-center justify-center gap-3 bg-[var(--color-cypress)] text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[var(--color-walnut)] w-full sm:w-auto">
              Explore Our Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-white/10 w-full sm:w-auto">
              The Process
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
