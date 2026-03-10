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
          {/* Advanced Dental Operatory - Large */}
          <div className="group relative rounded-3xl overflow-hidden md:col-span-2 md:row-span-2">
            <img
              src="/dental_operatory_millwork_1773142501114.png"
              alt="Advanced Dental Operatory"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-3">Commercial • Medical</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Advanced Dental Operatory</h3>
              <p className="text-white/70 font-light max-w-md text-lg">Sterile, custom-built medical cabinetry blending high-performance functionality with sleek, modern aesthetics.</p>
            </div>
          </div>

          {/* Medical Reception */}
          <div className="group relative rounded-3xl overflow-hidden">
            <img
              src="/medical_reception_desk_1773142472519.png"
              alt="Medical Reception Desk"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Commercial</span>
              <h3 className="font-serif text-2xl text-white">Medical Reception</h3>
            </div>
          </div>

          {/* Architectural Slats */}
          <div className="group relative rounded-3xl overflow-hidden">
            <img
              src="/architectural_wood_slats_1773142351633.png"
              alt="Architectural Acoustic Details"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-2">Architectural</span>
              <h3 className="font-serif text-2xl text-white">Acoustic Details</h3>
            </div>
          </div>

          {/* Luxury Waiting Room */}
          <div className="group relative rounded-3xl overflow-hidden md:col-span-3 h-[400px]">
            <img
              src="/medical_waiting_room_1773142489302.png"
              alt="Luxury Medical Waiting Room"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-10">
              <span className="text-[var(--color-cypress)] text-xs tracking-[0.2em] uppercase mb-3">Commercial • Medical</span>
              <h3 className="font-serif text-3xl lg:text-4xl text-white mb-3">Professional Waiting Environment</h3>
              <p className="text-white/70 font-light max-w-xl text-lg">Warm, luxurious walnut paneling transforming the clinical waiting experience into a high-end, comfortable environment for patients.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
