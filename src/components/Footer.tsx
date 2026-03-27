import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white/70 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <img src="/riverrougenewlogo.png" alt="River Rouge" className="h-16 w-auto invert mb-6" />
            <p className="max-w-sm font-light leading-relaxed text-lg">
              Architectural millwork and bespoke cabinetry engineered for legacy spaces. Based in Alexandria, Louisiana.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium tracking-[0.2em] uppercase text-xs mb-8">Navigation</h4>
            <ul className="space-y-4 font-light">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/services/commercial" className="hover:text-white transition-colors">Commercial Millwork</a></li>
              <li><a href="/services/cabinets" className="hover:text-white transition-colors">Custom Cabinetry</a></li>
              <li><a href="/process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="/consultation" className="hover:text-white transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium tracking-[0.2em] uppercase text-xs mb-8">Contact</h4>
            <ul className="space-y-4 font-light">
              <li>Alexandria, LA</li>
              <li><a href="mailto:info@riverrougemillwork.com" className="hover:text-white transition-colors">info@riverrougemillwork.com</a></li>
              <li><a href="tel:+15551234567" className="hover:text-white transition-colors">(555) 123-4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} River Rouge Millwork. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
