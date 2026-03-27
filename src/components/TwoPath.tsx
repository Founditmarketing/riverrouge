import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Home, Building2 } from 'lucide-react';

export default function TwoPath() {
  return (
    <section className="py-32 bg-[var(--color-cloud)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Our Expertise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)] mb-6">Tailored to Your Vision</h2>
          <p className="text-[var(--color-ink)]/70 max-w-2xl mx-auto text-lg font-light">
            Whether you are crafting a legacy home or outfitting a commercial space, our approach adapts to the scale and precision your project demands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Commercial */}
          <motion.a
            href="/services/commercial"
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative overflow-hidden rounded-3xl bg-[var(--color-walnut)] text-white shadow-xl hover:shadow-2xl hover:shadow-[var(--color-walnut)]/40 border-2 border-transparent hover:border-[var(--color-cypress)] transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-[var(--color-walnut)]/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <img
                src="/commercial_conference_table_1773142338938.png"
                alt="Commercial Millwork"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 lg:p-12">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-8 text-[var(--color-cypress)]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl mb-4 group-hover:text-[var(--color-cypress)] transition-colors duration-500">For Architects & Builders</h3>
              
              {/* Elegant Animated Line */}
              <div className="h-[2px] w-0 group-hover:w-16 bg-[var(--color-cypress)] transition-all duration-500 ease-out mb-6" />

              <p className="text-white/70 mb-10 leading-relaxed font-light text-lg">
                Scalable precision for commercial spaces. From boutique hotels to corporate offices, we deliver on spec, on time, and beyond expectations.
              </p>
              <div className="flex items-center gap-3 text-[var(--color-cypress)] font-medium tracking-[0.2em] uppercase text-xs transition-colors">
                Commercial Capabilities <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          {/* Residential */}
          <motion.a
            href="/portfolio"
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group block relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:shadow-black/10 border-2 border-transparent hover:border-[var(--color-cypress)] transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              <img
                src="/riverrougeprocesshero.jpeg"
                alt="Residential Millwork"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-10 lg:p-12">
              <div className="w-14 h-14 rounded-full bg-[var(--color-cloud)] flex items-center justify-center mb-8 text-[var(--color-cypress)]">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-3xl lg:text-4xl text-[var(--color-walnut)] mb-4">For Homeowners</h3>
              
              {/* Elegant Animated Line */}
              <div className="h-[2px] w-0 group-hover:w-16 bg-[var(--color-cypress)] transition-all duration-500 ease-out mb-6" />

              <p className="text-[var(--color-ink)]/70 mb-10 leading-relaxed font-light text-lg">
                Bespoke cabinetry, historic preservation, and custom trim that turns a house into a legacy. We work directly with you to realize your vision.
              </p>
              <div className="flex items-center gap-3 text-[var(--color-cypress)] font-medium tracking-[0.2em] uppercase text-xs hover:text-[var(--color-walnut)] transition-colors">
                Residential Portfolio <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
