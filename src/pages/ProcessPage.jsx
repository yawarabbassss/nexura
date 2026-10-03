import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ProcessSection } from '../components/process/ProcessSection';
import { PricingFunnelCTA } from '../components/conversion/PricingFunnelCTA';
import { Sparkles } from 'lucide-react';

export const ProcessPage = () => {
  return (
    <>
      <SEOHead
        title="Our Proven Process - Structured AI Growth Roadmap"
        description="A structured, AI-enhanced process that delivers predictable results: 01 Discovery & Audit, 02 Strategy & Planning, 03 Launch & Execute, and 04 Optimize & Scale."
      />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Process' }]} />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Structured Deployment Path</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            A structured path from <span className="text-[#14B8A6]">opportunity to growth</span>.
          </h1>
        </div>

        <ProcessSection />
        <PricingFunnelCTA />
      </div>
    </>
  );
};
