import React from 'react';
import { MessageSquare, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export const PricingFunnelCTA = ({ onOpenProjectModal }) => {
  const whatsappPricingUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20know%20your%20pricing%20and%20packages.";

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-[#0F2B2A] text-white border border-[#14B8A6]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#14B8A6] text-xs font-mono font-bold border border-[#14B8A6]/30">
          <ShieldCheck className="w-4 h-4 text-[#F97316]" />
          <span>Transparent Custom Proposals</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Want to know our <span className="text-[#14B8A6]">pricing & packages</span>?
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto font-sans leading-relaxed">
          Every project is scoped specifically around your commercial requirements, technology stack, and timeline. Connect directly with our lead team on WhatsApp for an immediate consultation.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappPricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center font-heading font-bold text-sm text-white bg-[#F97316] hover:bg-[#F97316]/90 px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
          >
            <MessageSquare className="w-5 h-5 text-white" />
            <span>Want to know our pricing? →</span>
          </a>

          <button
            onClick={onOpenProjectModal}
            className="w-full sm:w-auto text-center font-mono text-xs font-bold text-[#0F2B2A] bg-white hover:bg-slate-100 px-7 py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#0F2B2A]" />
          </button>
        </div>

        {/* Direct Contact Links */}
        <div className="pt-6 border-t border-slate-700 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300">
          <a href="mailto:help.nexura@gmail.com" className="flex items-center gap-2 hover:text-[#14B8A6] transition-colors">
            <Mail className="w-4 h-4 text-[#14B8A6]" /> help.nexura@gmail.com
          </a>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <a href={whatsappPricingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#F97316] transition-colors">
            <MessageSquare className="w-4 h-4 text-[#F97316]" /> WhatsApp Call: +1 (516) 835-5018
          </a>
        </div>
      </div>
    </section>
  );
};
