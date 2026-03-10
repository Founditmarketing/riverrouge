import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, Building2 } from 'lucide-react';

export default function TwoPath() {
  return (
    <section className="py-32 bg-[var(--color-cloud)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)] mb-6">Tailored to Your Vision</h2>
          <p className="text-[var(--color-ink)]/70 max-w-2xl mx-auto text-lg font-light">
            Whether you are crafting a legacy home or outfitting a commercial space, our approach adapts to the scale and precision your project demands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Residential */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/5"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Residential Millwork" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 lg:p-12">
              <div className="w-14 h-14 rounded-full bg-[var(--color-cloud)] flex items-center justify-center mb-8 text-[var(--color-cypress)]">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl text-[var(--color-walnut)] mb-4">For Homeowners</h3>
              <p className="text-[var(--color-ink)]/70 mb-10 leading-relaxed font-light text-lg">
                Bespoke cabinetry, historic preservation, and custom trim that turns a house into a legacy. We work directly with you to realize your vision.
              </p>
              <button className="flex items-center gap-3 text-[var(--color-cypress)] font-medium tracking-[0.2em] uppercase text-xs hover:text-[var(--color-walnut)] transition-colors">
                Residential Portfolio <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Commercial */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl bg-[var(--color-walnut)] text-white shadow-2xl shadow-black/10"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Commercial Millwork" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 lg:p-12">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8 text-[var(--color-cypress)]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-4">For Architects & Builders</h3>
              <p className="text-white/70 mb-10 leading-relaxed font-light text-lg">
                Scalable precision for commercial spaces. From boutique hotels to corporate offices, we deliver on spec, on time, and beyond expectations.
              </p>
              <button className="flex items-center gap-3 text-[var(--color-cypress)] font-medium tracking-[0.2em] uppercase text-xs hover:text-white transition-colors">
                Commercial Capabilities <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
