import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import Header from '../components/Header';

export default function ConsultationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    woodSpecies: '',
    scale: '',
    name: '',
    email: '',
    details: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success state
  };

  return (
    <div className="min-h-screen bg-white selection:bg-[var(--color-cypress)] selection:text-white flex flex-col md:flex-row">
      <Header />
      
      {/* Left Side - Visuals & Contact Info */}
      <div className="w-full md:w-5/12 lg:w-1/2 relative min-h-[50vh] md:min-h-screen flex flex-col justify-end p-8 md:p-16 lg:p-24 pt-32">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/live_handcrafted_workshop_detail.jpeg")' }}
        >
          <div className="absolute inset-0 bg-[var(--color-walnut)]/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
        </div>

        <div className="relative z-10 text-white mt-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[var(--color-cypress)] text-xs md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
              Let's Build Together
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 font-light">
              Start Your Project.
            </h1>
            
            <div className="w-12 h-1 bg-[var(--color-cypress)] mb-12"></div>

            <div className="space-y-6 text-white/80 font-light">
              <div className="flex items-center gap-4">
                <MapPin className="w-5 h-5 text-[var(--color-cypress)]" />
                <p>Alexandria, Louisiana</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[var(--color-cypress)]" />
                <p>Available by Appointment</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[var(--color-cypress)]" />
                <p>design@riverrougemillwork.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Interactive Form */}
      <div className="w-full md:w-7/12 lg:w-1/2 bg-[var(--color-cloud)] min-h-[50vh] md:min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-y-auto pt-16 md:pt-24">
        <div className="w-full max-w-xl">
          
          {/* Progress Bar */}
          {step < 5 && (
            <div className="flex gap-2 mb-16">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[var(--color-cypress)]' : 'bg-gray-200'}`} />
              ))}
            </div>
          )}

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)] mb-8">What type of project are you planning?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Custom Cabinetry', 'Historic Preservation', 'Commercial Millwork', 'Doors & Entryways', 'Architectural Trim', 'Other'].map((type) => (
                      <button
                        key={type}
                        onClick={() => { setFormData({ ...formData, projectType: type }); nextStep(); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.projectType === type ? 'border-[var(--color-cypress)] bg-white shadow-md' : 'border-white bg-white hover:border-[var(--color-cypress)] hover:shadow-md'}`}
                      >
                        <span className="font-medium text-[var(--color-walnut)]">{type}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)] mb-8">Do you have a preferred wood species?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['Black Walnut', 'Pecky Cypress', 'White Oak', 'Honduran Mahogany', 'Undecided'].map((species) => (
                      <button
                        key={species}
                        onClick={() => { setFormData({ ...formData, woodSpecies: species }); nextStep(); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.woodSpecies === species ? 'border-[var(--color-cypress)] bg-white shadow-md' : 'border-white bg-white hover:border-[var(--color-cypress)] hover:shadow-md'}`}
                      >
                        <span className="font-medium text-[var(--color-walnut)]">{species}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={prevStep} className="mt-12 flex items-center gap-2 text-sm text-[var(--color-ink)]/50 hover:text-[var(--color-walnut)] transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)] mb-8">What is the scale of your project?</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {['Single Room / Specific Piece', 'Full Home Renovation', 'New Residential Construction', 'Commercial Build-out'].map((scale) => (
                      <button
                        key={scale}
                        onClick={() => { setFormData({ ...formData, scale }); nextStep(); }}
                        className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.scale === scale ? 'border-[var(--color-cypress)] bg-white shadow-md' : 'border-white bg-white hover:border-[var(--color-cypress)] hover:shadow-md'}`}
                      >
                        <span className="font-medium text-[var(--color-walnut)]">{scale}</span>
                      </button>
                    ))}
                  </div>
                  <button onClick={prevStep} className="mt-12 flex items-center gap-2 text-sm text-[var(--color-ink)]/50 hover:text-[var(--color-walnut)] transition-colors font-medium">
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                </motion.div>
              )}

              {step === 4 && (
                <motion.form
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                >
                  <h3 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)] mb-8">Final Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-[var(--color-walnut)] mb-2 tracking-wide uppercase">Name</label>
                      <input required type="text" className="w-full p-4 rounded-xl border-2 border-white bg-white focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors shadow-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[var(--color-walnut)] mb-2 tracking-wide uppercase">Email</label>
                      <input required type="email" className="w-full p-4 rounded-xl border-2 border-white bg-white focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors shadow-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[var(--color-walnut)] mb-2 tracking-wide uppercase">Project Details</label>
                      <textarea rows={4} className="w-full p-4 rounded-xl border-2 border-white bg-white focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors shadow-sm resize-none"></textarea>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-6 pt-8">
                      <button type="button" onClick={prevStep} className="w-full sm:w-auto flex items-center justify-center gap-2 text-sm text-[var(--color-ink)]/50 hover:text-[var(--color-walnut)] transition-colors font-medium py-4">
                        <ArrowLeft className="w-4 h-4" /> Back
                      </button>
                      <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-walnut)] text-white px-10 py-5 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-[var(--color-forest)] font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1">
                        Submit Request
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-24 h-24 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto mb-8 text-[var(--color-cypress)]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-[var(--color-walnut)] mb-6">Request Received</h3>
                  <p className="text-[var(--color-ink)]/70 max-w-md mx-auto text-lg font-light leading-relaxed">
                    Thank you for reaching out to River Rouge Millwork. Our master craftsmen will review your details and contact you within 48 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </div>
  );
}
