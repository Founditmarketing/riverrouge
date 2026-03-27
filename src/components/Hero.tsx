import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

let initialHeroMount = true;

export default function Hero() {
  const [delay] = useState(initialHeroMount ? 4.5 : 0.2);

  useEffect(() => {
    initialHeroMount = false;
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pb-24 md:pb-0">
      {/* Background Image with Parallax effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: 'url("/riverrougehero.jpeg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-walnut)]/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white flex flex-col items-center mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay }}
        >
          <span className="text-[var(--color-cypress)] text-xs md:text-sm tracking-[0.3em] uppercase mb-8 block font-medium mt-12 md:mt-0">
            Alexandria, Louisiana
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8 max-w-5xl mx-auto">
            Engineering Excellence in <br className="hidden md:block" />
            <span className="italic text-[var(--color-cypress)]">Commercial Millwork.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            From striking corporate lobbies to state-of-the-art medical and professional facilities. We engineer large-scale, precision architectural millwork for spaces that demand perfection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="/portfolio" className="group flex items-center justify-center gap-3 bg-[var(--color-cypress)] text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[var(--color-walnut)] w-full sm:w-auto">
              Explore Our Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="/process" className="flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-white/10 w-full sm:w-auto">
              The Process
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3 text-white/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase hidden sm:block">Scroll</span>
        <div className="w-[1px] h-8 md:h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
