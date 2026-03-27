import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Consultation & Sourcing',
    desc: 'We begin by understanding your vision and sourcing the finest raw materials, often reclaiming heritage lumber from local structures.'
  },
  {
    num: '02',
    title: 'Precision Milling',
    desc: 'Raw timber is brought to our Alexandria facility, where it is milled to exact specifications, ensuring stability and perfect grain alignment.'
  },
  {
    num: '03',
    title: 'Artisanal Assembly',
    desc: 'Our master craftsmen employ traditional joinery techniques combined with modern precision to assemble each piece by hand.'
  },
  {
    num: '04',
    title: 'Finishing & Installation',
    desc: 'Every piece receives a custom finish to protect and enhance the natural beauty of the wood, followed by meticulous installation.'
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[var(--color-cypress)] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Our Methodology
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-walnut)]">
            From Forest to Floor.
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12 relative z-0 mt-8">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-gray-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group cursor-default">
              <div className="w-24 h-24 bg-[var(--color-cloud)] group-hover:bg-white rounded-full flex items-center justify-center mx-auto mb-8 border-8 border-white group-hover:border-[var(--color-cypress)] shadow-sm group-hover:shadow-lg transition-all duration-300 relative z-10 group-hover:-translate-y-1">
                <span className="font-serif text-3xl text-[var(--color-cypress)]">{step.num}</span>
              </div>
              <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="font-serif text-2xl text-[var(--color-walnut)] text-center mb-4">{step.title}</h3>
                <p className="text-[var(--color-ink)]/70 text-center font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
