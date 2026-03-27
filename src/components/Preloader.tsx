import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only show on absolute initial load (hard refresh or first visit)
    // We simulate a minimum loading time for the elegant animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[var(--color-walnut)] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle wood texture background overlay */}
          <div 
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{ backgroundImage: 'url("/black_walnut_texture.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col items-center mb-12"
            >
              <img 
                src="/riverrougenewlogowithnowords.png" 
                alt="River Rouge Shield" 
                className="h-12 md:h-16 w-auto invert drop-shadow-2xl mb-3"
              />
              <h1 className="font-serif text-3xl md:text-4xl text-white tracking-[0.15em] uppercase text-center mb-2">
                River Rouge
              </h1>
              <h2 className="text-[var(--color-cypress)] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold text-center">
                Millwork, LLC
              </h2>
            </motion.div>

            {/* Elegant Loading Bar */}
            <div className="w-56 md:w-72 h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-[var(--color-cypress)]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center mt-8"
            >
              <p className="text-white/70 font-medium text-xs uppercase tracking-[0.15em] text-center">
                Exceptional Craftsmanship. Uncompromising Precision.
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
