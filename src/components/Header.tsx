import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { 
    name: 'Services', 
    href: '/#services', 
    submenu: [
      { name: 'Commercial', href: '/services/commercial' },
      { name: 'Cabinets', href: '/services/cabinets' },
      { name: 'Doors', href: '/services/doors' },
      { name: 'Trimming & Mold', href: '/services/trimming-mold' },
      { name: 'Custom Builds', href: '/services/custom-builds' }
    ] 
  },
  { name: 'Process', href: '/process' },
  { name: 'Heritage', href: '/heritage' },
];

let initialHeaderMount = true;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [delay] = useState(initialHeaderMount ? 3.8 : 0);
  
  const location = useLocation();
  const isConsultation = location.pathname === '/consultation';

  useEffect(() => {
    initialHeaderMount = false;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: initialHeaderMount ? 0 : 1, y: initialHeaderMount ? -20 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className={`w-full px-6 flex justify-between ${isScrolled ? 'items-center' : 'items-start'}`}>
        <a href="/" className="flex items-center gap-2 relative z-50 hover:opacity-80 transition-opacity">
          <img 
            src="/riverrougenewlogo.png" 
            alt="River Rouge" 
            className={`w-auto transition-all duration-500 ${isScrolled ? 'h-8 md:h-10' : 'h-14 md:h-24 invert'}`}
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <a href={item.href} className={`flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:text-[var(--color-cypress)] py-4 ${(isScrolled || isConsultation) ? 'text-[var(--color-ink)]' : 'text-white/90'}`}>
                {item.name}
                {item.submenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
              </a>
              {item.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col py-2 rounded-xl text-center">
                  {item.submenu.map((subItem) => (
                    <a key={subItem.name} href={subItem.href} className="px-6 py-3 text-xs tracking-[0.1em] uppercase text-[var(--color-ink)] hover:bg-[var(--color-cloud)] hover:text-[var(--color-cypress)] transition-colors">
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/consultation" className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all ${(isScrolled || isConsultation) ? 'bg-[var(--color-walnut)] text-white hover:bg-[var(--color-forest)]' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[var(--color-walnut)]'}`}>
            Consultation
          </a>
        </nav>

        <button className={`md:hidden text-current relative z-50 ${isScrolled ? '' : 'mt-0'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled || isMobileMenuOpen ? 'text-[var(--color-ink)]' : 'text-white'} /> : <Menu className={isScrolled ? 'text-[var(--color-ink)]' : 'text-white'} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-500 flex flex-col pt-24 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col px-6 gap-6 overflow-y-auto pb-12">
          {navItems.map((item) => (
            <div key={item.name} className="flex flex-col border-b border-gray-100 pb-4">
              <a href={item.href} className="text-3xl font-serif text-[var(--color-walnut)]" onClick={() => !item.submenu && setIsMobileMenuOpen(false)}>
                {item.name}
              </a>
              {item.submenu && (
                <div className="flex flex-col pl-4 mt-4 gap-4">
                  {item.submenu.map((subItem) => (
                    <a key={subItem.name} href={subItem.href} className="text-sm tracking-[0.1em] uppercase text-[var(--color-ink)]/60 hover:text-[var(--color-cypress)]" onClick={() => setIsMobileMenuOpen(false)}>
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="mt-8 px-6 py-4 bg-[var(--color-walnut)] text-white rounded-full text-xs tracking-[0.2em] uppercase font-medium w-full text-center">
            Consultation
          </button>
        </div>
      </div>
    </motion.header>
  );
}
