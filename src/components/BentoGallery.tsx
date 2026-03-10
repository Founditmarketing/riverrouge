import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BentoGallery() {
  return (
    <section className="py-32 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Selected Works
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)]">
              Crafted for <br /> Generations.
            </h2>
          </div>
          <button className="flex items-center gap-3 text-[var(--color-ink)] font-medium tracking-[0.2em] uppercase text-xs hover:text-[var(--color-cypress)] transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Custom Cabinets - Large */}
          <div className="group relative rounded-3xl overflow-hidden md:col-span-2 md:row-span-2">
            <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop" 
              alt="Custom Kitchen Cabinetry" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-3">Residential</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Bespoke Kitchen Cabinetry</h3>
              <p className="text-white/70 font-light max-w-md text-lg">Solid walnut construction with precision dovetail joinery, designed for a historic estate.</p>
            </div>
          </div>

          {/* Historic Preservation */}
          <div className="group relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2070&auto=format&fit=crop" 
              alt="Historic Preservation" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Restoration</span>
              <h3 className="font-serif text-2xl text-white">Historic Preservation</h3>
            </div>
          </div>

          {/* Doors & Entryways */}
          <div className="group relative rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
              alt="Custom Doors" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Architectural</span>
              <h3 className="font-serif text-2xl text-white">Custom Entryways</h3>
            </div>
          </div>
          
          {/* Commercial Millwork */}
          <div className="group relative rounded-3xl overflow-hidden md:col-span-3 h-[400px]">
             <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
              alt="Commercial Millwork" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-3">Commercial</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Corporate Headquarters</h3>
              <p className="text-white/70 font-light max-w-xl text-lg">Acoustic wood paneling and custom reception desks for modern office environments.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
