import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { WhyNexura } from '../components/why/WhyNexura';
import { PricingFunnelCTA } from '../components/conversion/PricingFunnelCTA';
import { PositioningStatement } from '../components/positioning/PositioningStatement';
import { Sparkles } from 'lucide-react';

export const WhyNexuraPage = () => {
  return (
    <>
      <SEOHead
        title="Why Forward-Thinking Businesses Choose Nexura"
        description="Learn why Nexura Enterprises is the preferred digital growth & technology partner: strategy before execution, outcome-focused architecture, and practical technology."
      />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Why Nexura' }]} />
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Operating Principles & Differentiators</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Why forward-thinking businesses choose <span className="text-[#14B8A6]">Nexura</span>.
          </h1>
        </div>

        <PositioningStatement />
        <WhyNexura />
        <PricingFunnelCTA />
      </div>
    </>
  );
};
