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
          <a href="/portfolio" className="flex items-center gap-3 text-[var(--color-ink)] font-medium tracking-[0.2em] uppercase text-xs hover:text-[var(--color-cypress)] transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {/* Commercial Lighting / Office - Large */}
          <a href="/services/commercial" className="group relative block rounded-3xl overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/live_commercial_lighting.png"
              alt="Modern Commercial Millwork"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
              <span className="text-[var(--color-cypress)] text-[10px] md:text-xs tracking-[0.2em] uppercase mb-2 md:mb-3">Commercial</span>
              <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white md:mb-3">Modern Corporate Millwork</h3>
              <p className="hidden md:block text-white/70 font-light max-w-md text-lg mt-3 md:mt-0">Integrated architectural lighting and custom wood paneling designed for professional environments.</p>
            </div>
          </a>

          {/* Medical Breakroom */}
          <a href="/services/cabinets" className="group block relative rounded-3xl overflow-hidden">
            <img
              src="/live_medical_breakroom.png"
              alt="Medical Office Breakroom Cabinets"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Commercial • Medical</span>
              <h3 className="font-serif text-2xl text-white">Clinic Custom Cabinetry</h3>
            </div>
          </a>

          {/* Custom Door */}
          <a href="/services/doors" className="group block relative rounded-3xl overflow-hidden">
            <img
              src="/live_handcrafted_door.jpeg"
              alt="Handcrafted Interior Door"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Architectural</span>
              <h3 className="font-serif text-2xl text-white">Custom Entryways</h3>
            </div>
          </a>

          {/* Office Cabinets */}
          <a href="/services/commercial" className="group block relative rounded-3xl overflow-hidden md:col-span-3 h-[400px]">
            <img
              src="/live_office_cabinets.png"
              alt="Commercial Office Cabinets"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-3">Commercial</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Executive Office Buildout</h3>
              <p className="text-white/70 font-light max-w-xl text-lg">Scalable precision cabinetry delivered and installed for corporate office environments, ensuring both durability and design excellence.</p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
