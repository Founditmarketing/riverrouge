import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const processSteps = [
  {
    num: '01',
    title: 'Consultation & Sourcing',
    subtitle: 'Defining the Vision',
    desc: 'Every River Rouge piece begins with an uncompromising vision. We collaborate directly with homeowners, architects, and interior designers to understand the spatial requirements and aesthetic goals. Then, we source the absolute finest raw materials available—whether that requires importing Honduran Mahogany, securing select White Oak, or painstakingly reclaiming heritage lumber from local historic structures.',
    image: 'riverrougekitchenbefore1.jpg'
  },
  {
    num: '02',
    title: 'Precision Milling',
    subtitle: 'From Rough Sawn to Exacting Standards',
    desc: 'Raw timber is transported to our state-of-the-art Alexandria facility. Here, we don\'t rely on pre-dimensioned lumber. We mill the wood ourselves, controlling the moisture content, grain alignment, and cut. This rigorous initial dimensioning guarantees that the final architectural feature will remain stable, warp-free, and structurally sound for generations to come.',
    image: 'architectural_wood_slats_1773142351633.png'
  },
  {
    num: '03',
    title: 'Artisanal Assembly',
    subtitle: 'Traditional Craftsmanship Meets Modern Tolerances',
    desc: 'Our master craftsmen take over the milled components, employing time-tested traditional joinery techniques such as mortise and tenon, and dovetailing. While our CNC equipment handles exact dimensional routing, the assembly and fitting are entirely done by human hands. This hybrid approach ensures microscopic precision without losing the soul of handcrafted furniture.',
    image: 'live_handcrafted_workshop_detail.jpeg'
  },
  {
    num: '04',
    title: 'Finishing & Installation',
    subtitle: 'The Final Mark of Heritage',
    desc: 'Before any piece leaves our shop, it undergoes a meticulous sanding and finishing sequence. We apply custom-matched stains, protective heritage glazes, and industrial-grade topcoats to protect and enhance the natural beauty of the wood grain. Finally, our team handles the sensitive installation process on-site, ensuring the millwork perfectly integrates into your architecture.',
    image: 'riverrougekitchencabinetsafter2.jpg'
  }
];

const TimelineStep: React.FC<{ step: typeof processSteps[0], index: number }> = ({ step, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "center 0.4"] });
  
  // When scrolling into view, highlight the line dot and content
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const filter = useTransform(scrollYProgress, [0, 1], ["grayscale(100%)", "grayscale(0%)"]);

  // Dynamic timeline point transformation
  const innerDotScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const outerBorderColor = useTransform(scrollYProgress, [0, 1], ["#ffffff", "var(--color-walnut)"]);

  const isTextLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex items-center justify-center my-32 md:my-48 first:mt-24 last:mb-24">
      {/* Central Timeline Dot */}
      <div className="absolute left-[15px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
        <motion.div 
          style={{ opacity, borderColor: outerBorderColor }}
          className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--color-cloud)] border-4 shadow-xl flex items-center justify-center relative transition-shadow duration-300"
        >
          <motion.div 
            style={{ scale: innerDotScale }}
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-[var(--color-cypress)] rounded-full" 
          />
        </motion.div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex w-full items-center">
        {/* Left Side */}
        <div className="w-1/2 pr-20 lg:pr-28 flex flex-col justify-center items-end text-right">
          {isTextLeft ? (
            <StepText step={step} opacity={opacity} y={contentY} isLeft={true} />
          ) : (
            <StepImage step={step} opacity={opacity} filter={filter} />
          )}
        </div>
        
        {/* Right Side */}
        <div className="w-1/2 pl-20 lg:pl-28 flex flex-col justify-center items-start text-left">
          {!isTextLeft ? (
            <StepText step={step} opacity={opacity} y={contentY} isLeft={false} />
          ) : (
            <StepImage step={step} opacity={opacity} filter={filter} />
          )}
        </div>
      </div>
      
      {/* Mobile view */}
      <div className="flex md:hidden w-full pl-12 relative flex-col gap-8">
        <div className="w-full">
          <StepImage step={step} opacity={opacity} filter={filter} />
        </div>
        <div className="w-full">
          <StepText step={step} opacity={opacity} y={contentY} isLeft={false} />
        </div>
      </div>
    </div>
  );
}

function StepText({ step, opacity, y, isLeft }: { step: any, opacity: any, y: any, isLeft: boolean }) {
  return (
    <motion.div style={{ opacity, y }} className="w-full max-w-xl cursor-default">
      <span className="text-[var(--color-cypress)] text-sm tracking-[0.25em] font-bold block mb-3 uppercase">
        {step.num} — {step.subtitle}
      </span>
      <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)] mb-5">
        {step.title}
      </h3>
      <p className="text-[var(--color-ink)]/75 text-lg font-light leading-relaxed">
        {step.desc}
      </p>
    </motion.div>
  );
}

function StepImage({ step, opacity, filter }: { step: any, opacity: any, filter: any }) {
  return (
    <motion.div style={{ opacity, filter }} className="relative w-full max-w-xl group">
      <motion.div 
        className="aspect-[4/3] md:aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl relative"
      >
        <img src={`/${step.image}`} alt={step.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent pointer-events-none"></div>
      </motion.div>
    </motion.div>
  );
}

export default function ProcessPage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      <Header />
      
      {/* Slim Hero matching Service Pages exact template */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[var(--color-walnut)] pt-16">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url("/riverrougeprocesshero.jpeg")` }}
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
              Our Methodology
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Forest to Floor
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
              We control every variable of the custom millwork process, from the source of the rough-sawn lumber to the final coat of protective glaze.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expanded Vertical Timeline Process Steps */}
      <section className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto">
        {/* The Central Line */}
        <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-1 md:w-1 bg-[var(--color-cypress)]/10 -translate-x-1/2 rounded-full overflow-hidden">
          <motion.div 
            className="w-full bg-[var(--color-cypress)] origin-top"
            style={{ scaleY, height: '100%' }}
          />
        </div>

        {processSteps.map((step, index) => (
          <TimelineStep key={step.num} step={step} index={index} />
        ))}
      </section>

      {/* Call To Action */}
      <section className="py-32 px-6 bg-[var(--color-walnut)] relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("/white_oak_texture.png")', backgroundSize: 'cover' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl text-white">
              Ready to Begin Your Build?
            </h2>
            <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto pb-4">
              Whether you have fully engineered architectural plans or just a rough sketch, our craftsmen are ready to bring your vision to life.
            </p>
            <a 
              href="/consultation"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-cypress)] text-white hover:bg-white hover:text-[var(--color-walnut)] rounded-full text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 transform hover:scale-105"
            >
              Request a Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
