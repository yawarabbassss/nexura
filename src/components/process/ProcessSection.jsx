import React from 'react';
import { processData } from '../../data/processData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Structured Growth Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            A structured, AI-enhanced process that delivers predictable results. From automated audits to machine-learning optimization, every step is designed for maximum impact.
          </p>
        </div>

        {/* 4-Step Process Timeline Cards */}
        <div className="relative">
          {/* Top Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-5 left-12 right-12 h-0.5 bg-[#14B8A6]/25 z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {processData.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={item.step} className="relative flex flex-col group">
                  
                  {/* Step Number Circle Badge + Connector Arrow */}
                  <div className="flex items-center justify-center mb-6 relative">
                    <div className="w-10 h-10 rounded-full bg-[#0F2B2A] text-white font-extrabold text-sm flex items-center justify-center shadow-md ring-4 ring-white z-10 transition-transform group-hover:scale-110 group-hover:bg-[#14B8A6]">
                      {item.step}
                    </div>

                    {/* Arrow to Next Step (Desktop only, except last card) */}
                    {idx < processData.length - 1 && (
                      <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center text-[#14B8A6] bg-white rounded-full p-1 shadow-sm border border-[#14B8A6]/20">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Card Container */}
                  <div className="flex-1 bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#14B8A6]/60 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                    
                    {/* Timeline Pill */}
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-semibold tracking-wide border border-[#14B8A6]/20">
                        {item.week}
                      </span>
                    </div>

                    {/* Title with Icon */}
                    <div className="flex items-center justify-center gap-2 mb-3 text-center">
                      <IconComponent className="w-5 h-5 text-[#14B8A6] shrink-0" />
                      <h3 className="text-lg font-extrabold font-heading text-[#0F2B2A]">
                        {item.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 text-center leading-relaxed mb-6 min-h-[48px]">
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-auto border-t border-slate-200/60 pt-4 space-y-3">
                      {item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                          <Check className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5 font-bold" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center pt-8 border-t border-slate-100">
          <p className="text-base sm:text-lg font-bold text-slate-800 mb-4">
            Ready to start your growth journey?
          </p>
          <a
            href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20your%20proven%20growth%20process."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-extrabold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Book Your Free Growth Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
