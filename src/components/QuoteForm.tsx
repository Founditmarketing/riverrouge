import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    woodSpecies: '',
    scale: '',
    name: '',
    email: '',
    details: ''
  });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // Success state
  };

  return (
    <section ref={sectionRef} className="relative py-32 bg-[var(--color-walnut)] text-white overflow-hidden" id="consultation">
      <motion.div 
        className="absolute inset-x-0 -top-[20%] -bottom-[20%] z-0 opacity-30 pointer-events-none mix-blend-overlay bg-cover bg-center"
        style={{ backgroundImage: 'url("/black_walnut_texture.png")', y: backgroundY }}
      ></motion.div>
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Begin Your Project
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">The Craftsman's Quote.</h2>
          <p className="text-white/70 font-light text-lg">
            Tell us about your vision. We approach every inquiry as the start of a collaborative design process.
          </p>
        </div>

        <div className="bg-white text-[var(--color-ink)] rounded-3xl p-8 md:p-12 shadow-2xl">
          {/* Progress Bar */}
          {step < 5 && (
            <div className="flex gap-2 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= step ? 'bg-[var(--color-cypress)]' : 'bg-gray-200'}`} />
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="font-serif text-3xl text-[var(--color-walnut)] mb-8">What type of project are you planning?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Custom Cabinetry', 'Historic Preservation', 'Commercial Millwork', 'Doors & Entryways', 'Architectural Trim', 'Other'].map((type) => (
                    <button
                      key={type}
                      onClick={() => { setFormData({ ...formData, projectType: type }); nextStep(); }}
                      className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.projectType === type ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-100 hover:border-[var(--color-cypress)]'}`}
                    >
                      <span className="font-medium">{type}</span>
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
                <h3 className="font-serif text-3xl text-[var(--color-walnut)] mb-8">Do you have a preferred wood species?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Black Walnut', 'Pecky Cypress', 'White Oak', 'Honduran Mahogany', 'Undecided / Need Advice'].map((species) => (
                    <button
                      key={species}
                      onClick={() => { setFormData({ ...formData, woodSpecies: species }); nextStep(); }}
                      className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.woodSpecies === species ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-100 hover:border-[var(--color-cypress)]'}`}
                    >
                      <span className="font-medium">{species}</span>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)]">
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
                <h3 className="font-serif text-3xl text-[var(--color-walnut)] mb-8">What is the scale of your project?</h3>
                <div className="grid grid-cols-1 gap-4">
                  {['Single Room / Specific Piece', 'Full Home Renovation', 'New Residential Construction', 'Commercial Build-out'].map((scale) => (
                    <button
                      key={scale}
                      onClick={() => { setFormData({ ...formData, scale }); nextStep(); }}
                      className={`p-6 text-left rounded-2xl border-2 transition-all ${formData.scale === scale ? 'border-[var(--color-cypress)] bg-[var(--color-cloud)]' : 'border-gray-100 hover:border-[var(--color-cypress)]'}`}
                    >
                      <span className="font-medium">{scale}</span>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="mt-8 flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)]">
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
                <h3 className="font-serif text-3xl text-[var(--color-walnut)] mb-8">Final Details</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input required type="text" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input required type="email" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details (Optional)</label>
                    <textarea rows={4} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-[var(--color-cypress)] focus:ring-0 outline-none transition-colors resize-none"></textarea>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <button type="button" onClick={prevStep} className="flex items-center gap-2 text-sm text-gray-500 hover:text-[var(--color-walnut)]">
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button type="submit" className="flex items-center gap-3 bg-[var(--color-walnut)] text-white px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase transition-all hover:bg-[var(--color-forest)]">
                      Request Consultation <ArrowRight className="w-4 h-4" />
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
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[var(--color-cloud)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-cypress)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-4xl text-[var(--color-walnut)] mb-4">Request Received</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Thank you for considering River Rouge Millwork. Our master craftsman will review your project details and contact you within 48 hours to schedule your consultation.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
