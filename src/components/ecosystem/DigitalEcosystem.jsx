import React, { useState } from 'react';
import { Search, Globe, Bot, Workflow, Database, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';

export const DigitalEcosystem = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'High-Intent Traffic', subtitle: 'Target Audience', icon: Search, detail: 'Organic search & paid acquisition bring decision-makers to your portal.', node: 'Traffic' },
    { title: 'SEO & Growth Ads', subtitle: 'Attraction Layer', icon: TrendingUp, detail: 'High commercial relevance matches prospect search intent.', node: 'Acquisition' },
    { title: 'High-Speed Web', subtitle: 'Conversion Flagship', icon: Globe, detail: 'Sub-second page speeds build instant trust and retain visitors.', node: 'Web UX' },
    { title: '24/7 AI Chatbot', subtitle: 'Instant Lead Capture', icon: Bot, detail: 'Automated conversational qualification screens project scope.', node: 'Qualification' },
    { title: 'Workflow Automation', subtitle: 'Operational Sync', icon: Workflow, detail: 'Zapier, Make & APIs sync lead data to your CRM in under 60 seconds.', node: 'Automation' },
    { title: 'Sales & Growth', subtitle: 'Revenue Scale', icon: Database, detail: 'Sales team closes qualified deals faster with complete lead context.', node: 'Growth' }
  ];

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Integrated Growth Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            How your digital services <span className="text-[#14B8A6]">connect & compound</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Nexura does not treat digital services as isolated tasks. We engineer a single unbroken lead & growth pipeline.
          </p>
        </div>

        {/* Interactive Funnel Line */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-2xl text-left border transition-all duration-300 ${
                    isActive
                      ? 'bg-[#0F2B2A] text-white border-[#14B8A6] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-[#F97316] font-bold">0{idx + 1}</span>
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-[#14B8A6]' : 'text-slate-500'}`} />
                  </div>
                  <div className={`text-xs font-bold font-heading line-clamp-1 ${isActive ? 'text-white' : 'text-[#0F2B2A]'}`}>
                    {step.node}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="text-xs font-mono text-[#14B8A6] flex items-center gap-2 font-bold">
                <span>Stage 0{activeStep + 1} Pipeline</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-600">{steps[activeStep].subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0F2B2A]">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm text-slate-700 font-sans leading-relaxed">
                {steps[activeStep].detail}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="p-6 rounded-2xl bg-[#0F2B2A] text-white border border-[#14B8A6]/40 text-center w-full max-w-xs space-y-2 shadow-md">
                <div className="text-xs font-mono text-slate-300">Pipeline Flow Status</div>
                <div className="text-sm font-bold text-[#F97316] font-mono flex items-center justify-center gap-1">
                  <span>Step 0{activeStep + 1} Active</span>
                  <ArrowRight className="w-4 h-4 text-[#14B8A6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
