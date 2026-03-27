import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DraftingCompass, X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function FloatingQuote() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    woodSpecies: '',
    scale: '',
    name: '',
    email: '',
    details: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success state
  };

  const closeForm = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => setStep(1), 500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-3 bg-[var(--color-walnut)] text-white w-14 h-14 md:w-auto md:h-auto md:px-6 md:py-4 rounded-full shadow-2xl hover:bg-[var(--color-cypress)] transition-colors group"
          >
            <span className="hidden md:inline-block text-xs tracking-[0.2em] uppercase font-medium">Start Project</span>
            <DraftingCompass className="w-5 h-5 md:w-4 md:h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-y-auto w-full h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button 
                onClick={closeForm}
                className="absolute top-6 right-6 text-gray-400 hover:text-[var(--color-walnut)] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12">
                <div className="text-center mb-10">
                  <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-2 block font-medium">
                    Consultation
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-walnut)]">The Craftsman's Quote</h2>
                </div>

                {/* Progress Bar */}
                {step < 5 && (
                  <div className="flex gap-2 mb-10">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[var(--color-cypress)]' : 'bg-gray-200'}`} />
                    ))}
                  </div>
                )}

                <div className="min-h-[300px] flex flex-col justify-center">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <h3 className="font-serif text-2xl text-[var(--color-walnut)] mb-6 text-center">What type of project are you planning?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {['Custom Cabinetry', 'Historic Preservation', 'Commercial Millwork', 'Doors & Entryways', 'Architectural Trim', 'Other'].map((type) => (
                            <button
                              key={type}
                              onClick={() => { setFormData({ ...formData, projectType: type }); nextStep(); }}
                              className={`p-4 text-sm text-left rounded-xl border transition-all ${formData.projectType === type ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-200 hover:border-[var(--color-cypress)]'}`}
                            >
                              <span className="font-medium text-[var(--color-ink)]">{type}</span>
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
                        <h3 className="font-serif text-2xl text-[var(--color-walnut)] mb-6 text-center">Do you have a preferred wood species?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {['Black Walnut', 'Pecky Cypress', 'White Oak', 'Honduran Mahogany', 'Undecided'].map((species) => (
                            <button
                              key={species}
                              onClick={() => { setFormData({ ...formData, woodSpecies: species }); nextStep(); }}
                              className={`p-4 text-sm text-left rounded-xl border transition-all ${formData.woodSpecies === species ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-200 hover:border-[var(--color-cypress)]'}`}
                            >
                              <span className="font-medium text-[var(--color-ink)]">{species}</span>
                            </button>
                          ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center justify-center mx-auto gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)]">
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
                        <h3 className="font-serif text-2xl text-[var(--color-walnut)] mb-6 text-center">What is the scale of your project?</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {['Single Room / Specific Piece', 'Full Home Renovation', 'New Residential Construction', 'Commercial Build-out'].map((scale) => (
                            <button
                              key={scale}
                              onClick={() => { setFormData({ ...formData, scale }); nextStep(); }}
                              className={`p-4 text-sm text-center rounded-xl border transition-all ${formData.scale === scale ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-200 hover:border-[var(--color-cypress)]'}`}
                            >
                              <span className="font-medium text-[var(--color-ink)]">{scale}</span>
                            </button>
                          ))}
                        </div>
                        <button onClick={prevStep} className="mt-8 flex items-center justify-center mx-auto gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)]">
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
                        <h3 className="font-serif text-2xl text-[var(--color-walnut)] mb-6 text-center">Final Details</h3>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Name</label>
                              <input required type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors text-sm" />
                            </div>
                            <div>
                              <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Email</label>
                              <input required type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors text-sm" />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-[0.1em] text-gray-500 mb-2">Project Details</label>
                            <textarea rows={3} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors resize-none text-sm"></textarea>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4 border-t border-gray-100 mt-6">
                            <button type="button" onClick={prevStep} className="flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)] order-2 sm:order-1">
                              <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                            <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-walnut)] text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-[var(--color-cypress)] order-1 sm:order-2">
                              Submit Inquiry <ArrowRight className="w-4 h-4" />
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
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 bg-[var(--color-cloud)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-cypress)]">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="font-serif text-3xl text-[var(--color-walnut)] mb-4">Request Received</h3>
                        <p className="text-sm text-gray-600 max-w-sm mx-auto mb-8">
                          Our master craftsman will review your project details and contact you within 48 hours.
                        </p>
                        <button 
                          onClick={closeForm}
                          className="bg-gray-100 text-[var(--color-ink)] px-8 py-3 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-gray-200 font-medium"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
