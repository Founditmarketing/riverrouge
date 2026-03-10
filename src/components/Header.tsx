import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`font-serif text-2xl font-semibold tracking-wide ${isScrolled ? 'text-[var(--color-walnut)]' : 'text-white'}`}>
            River Rouge
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Portfolio', 'Services', 'Process', 'Heritage'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-[var(--color-cypress)] ${isScrolled ? 'text-[var(--color-ink)]' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <button className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all ${isScrolled ? 'bg-[var(--color-walnut)] text-white hover:bg-[var(--color-forest)]' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--color-walnut)]'}`}>
            Consultation
          </button>
        </nav>

        <button className="md:hidden text-current" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? 'text-[var(--color-ink)]' : 'text-white'} /> : <Menu className={isScrolled ? 'text-[var(--color-ink)]' : 'text-white'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100">
          <div className="flex flex-col p-6 gap-4">
            {['Portfolio', 'Services', 'Process', 'Heritage'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-xl font-serif text-[var(--color-walnut)]" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="mt-4 px-6 py-4 bg-[var(--color-walnut)] text-white rounded-full text-xs tracking-[0.2em] uppercase font-medium">
              Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
