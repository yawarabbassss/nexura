import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Shield, MessageSquare, Layers, Cpu, Globe } from 'lucide-react';

export const WhiteLabelPage = () => {
  const whatsappUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20White%20Label%20agency%20fulfillment%20partnership.";

  return (
    <>
      <SEOHead
        title="White Label Agency Partner Program | Nexura Enterprises"
        description="Partner with Nexura Enterprises as your white-label technical fulfillment team for SEO, React web platforms, AI chatbots, and workflow automation."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <Breadcrumbs items={[{ label: 'White Label Partner Program' }]} />

          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Shield className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Agency Fulfillment Partnership</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Partner with us as your <span className="text-[#14B8A6]">fulfillment team</span>.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Scale your agency revenue without hiring overhead. Nexura Enterprises provides 100% confidential, NDA-backed white-label execution for SEO, React web development, AI chatbots, and automation.
            </p>
          </div>

          {/* 4 Pillars of White Label */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-md hover:bg-white hover:border-[#14B8A6]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                <Globe className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0F2B2A]">White Label Web Development</h2>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Bespoke high-performance React / Vite web platforms delivered under your brand. Sub-second page speeds, clean code repositories, and complete client handoff.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-md hover:bg-white hover:border-[#14B8A6]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0F2B2A]">White Label Technical SEO</h2>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Deep site audits, indexing repair, keyword architecture, and content clustering delivered in white-label client-ready PDF and dashboard formats.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-md hover:bg-white hover:border-[#14B8A6]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                <Cpu className="w-5 h-5 text-[#F97316]" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0F2B2A]">White Label AI & Chatbots</h2>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                Deploy 24/7 conversational chatbots on WhatsApp and websites for your agency's clients under your agency umbrella.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 shadow-md hover:bg-white hover:border-[#14B8A6]/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                <Shield className="w-5 h-5 text-[#14B8A6]" />
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0F2B2A]">100% NDA & Confidentiality</h2>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                We operate behind the scenes. Your clients remain 100% yours. We sign strict non-disclosure agreements before commencing work.
              </p>
            </div>
          </div>

          {/* Action Callout */}
          <div className="bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-3xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Ready to partner with Nexura?</h3>
            <p className="text-xs text-slate-200 max-w-xl mx-auto font-sans">
              Connect directly with our lead team on WhatsApp to review agency pricing tiers and wholesale capacity.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss White Label Partnership on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
