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
              className="flex flex-col items-center mb-0"
            >
              <img
                src="/riverrougenewlogowithnowords.png"
                alt="River Rouge Shield"
                className="h-12 md:h-16 w-auto invert drop-shadow-2xl mb-3"
              />
              {/* Static Text & Animated Line Loader */}
              <div className="relative inline-block mb-4">
                <motion.h1
                  className="font-serif text-3xl md:text-4xl tracking-[0.15em] uppercase text-center relative z-10"
                  style={{
                    backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 60%, rgba(255,255,255,0.4) 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                  animate={{ backgroundPosition: ["200% center", "-200% center"] }}
                  transition={{ duration: 2.2, delay: 0.3, ease: "easeInOut" }}
                >
                  River Rouge
                </motion.h1>

                {/* Elegant Center-Origin Underline */}
                <motion.div
                  className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-[1px] bg-white/40 origin-center"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
                />
              </div>

              <h2 className="text-[var(--color-cypress)] tracking-[0.3em] uppercase text-[10px] md:text-xs font-bold text-center">
                Millwork, LLC
              </h2>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
