import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TwoPath from './components/TwoPath';
import BentoGallery from './components/BentoGallery';
import BeforeAfter from './components/BeforeAfter';
import SpeciesGuide from './components/SpeciesGuide';
import Process from './components/Process';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-cloud)] selection:bg-[var(--color-cypress)] selection:text-white">
      <Header />
      <main>
        <Hero />
        <TwoPath />
        <BentoGallery />
        <BeforeAfter />
        <SpeciesGuide />
        <Process />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
