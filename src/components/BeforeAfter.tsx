import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[var(--color-walnut)] text-white overflow-hidden">
      <motion.div 
        className="absolute inset-x-0 -top-[20%] -bottom-[20%] z-0 opacity-30 pointer-events-none mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: 'url("/black_walnut_texture.png")', y: backgroundY }}
      ></motion.div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Historic Preservation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">Restoring the Past.</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
            We breathe new life into historic millwork, matching original profiles and species to preserve architectural heritage.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onMouseMove={handleMouseMove}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img
              src="/riverrougekitchencabinetsafter2.jpg"
              alt="Restored Historic Millwork"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase">
              Restored
            </div>
          </div>

          {/* Before Image (Foreground, clipped) */}
          <div
            className="absolute inset-0 border-r-2 border-white"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img
              src="/riverrougekitchenbefore1.jpg"
              alt="Original Historic Millwork"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase">
              Original
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[var(--color-walnut)]">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
