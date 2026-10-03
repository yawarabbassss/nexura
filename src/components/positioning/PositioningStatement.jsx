import React from 'react';
import { Sparkles, Layers, Zap, CheckCircle2 } from 'lucide-react';

export const PositioningStatement = () => {
  return (
    <section id="positioning" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
          <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Core Positioning Philosophy</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight leading-tight max-w-4xl mx-auto">
          "Your digital presence should do more than exist.{' '}
          <span className="text-[#14B8A6] underline decoration-[#F97316] underline-offset-8">It should work.</span>"
        </h2>

        {/* Body Paragraph */}
        <p className="text-base sm:text-xl text-slate-700 max-w-3xl mx-auto font-sans leading-relaxed">
          Most agencies build websites that sit static, run search campaigns isolated from web conversion, or add chatbots that feel like automated dead ends. <strong className="text-[#0F2B2A]">Nexura Enterprises bridges these silos.</strong> We connect your search visibility, website speed, AI lead intake, and backend workflows into a synchronized digital growth engine.
        </p>

        {/* 3 Pillar Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#14B8A6] transition-all shadow-xs hover:shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center mb-4 text-[#14B8A6]">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F2B2A] font-heading mb-2">Connected Architecture</h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Every marketing click flows into a high-speed website, gets captured by intelligent chatbots, and syncs instantly to your CRM.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#F97316] transition-all shadow-xs hover:shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center mb-4 text-[#F97316]">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F2B2A] font-heading mb-2">Instant Lead Response</h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Automated AI intake and smart routing reduce response times to seconds, drastically improving inquiry-to-client conversion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#14B8A6] transition-all shadow-xs hover:shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center mb-4 text-[#14B8A6]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0F2B2A] font-heading mb-2">Compounding Authority</h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Technical SEO and strategic content foundations ensure your organic visibility grows in authority and value month after month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
