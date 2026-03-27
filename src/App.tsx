import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TwoPath from './components/TwoPath';
import BentoGallery from './components/BentoGallery';
import BeforeAfter from './components/BeforeAfter';
import SpeciesGuide from './components/SpeciesGuide';
import Process from './components/Process';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import ServiceCabinetsPage from './pages/ServiceCabinetsPage';
import ServiceCommercialPage from './pages/ServiceCommercialPage';
import ServiceDoorsPage from './pages/ServiceDoorsPage';
import ServiceTrimmingMoldPage from './pages/ServiceTrimmingMoldPage';
import ServiceCustomBuildsPage from './pages/ServiceCustomBuildsPage';
import ProcessPage from './pages/ProcessPage';
import HeritagePage from './pages/HeritagePage';
import ConsultationPage from './pages/ConsultationPage';
import Preloader from './components/Preloader';
import FloatingQuote from './components/FloatingQuote';

function GlobalClickHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.href && !target.hasAttribute('target')) {
        const hrefData = target.getAttribute('href');
        // Only intercept absolute root-relative internal links
        if (hrefData && hrefData.startsWith('/') && !hrefData.startsWith('//')) {
          e.preventDefault();
          navigate(hrefData);
          window.scrollTo(0, 0);
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      <main>
        <Hero />
        <TwoPath />
        <BentoGallery />
        <BeforeAfter />
        <SpeciesGuide />
        <Process />
        <QuoteForm />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Preloader />
      <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      <Router>
        <GlobalClickHandler />
        <Header />
        <FloatingQuote />
        <main>
          <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/heritage" element={<HeritagePage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        <Route path="/services/cabinets" element={<ServiceCabinetsPage />} />
        <Route path="/services/commercial" element={<ServiceCommercialPage />} />
        <Route path="/services/doors" element={<ServiceDoorsPage />} />
        <Route path="/services/trimming-mold" element={<ServiceTrimmingMoldPage />} />
        <Route path="/services/custom-builds" element={<ServiceCustomBuildsPage />} />
      </Routes>
      </main>
      <Footer />
    </Router>
    </div>
    </>
  );
}
