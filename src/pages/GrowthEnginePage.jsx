import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { GrowthEngine } from '../components/growth-engine/GrowthEngine';
import { DigitalEcosystem } from '../components/ecosystem/DigitalEcosystem';
import { PricingFunnelCTA } from '../components/conversion/PricingFunnelCTA';

export const GrowthEnginePage = () => {
  return (
    <>
      <SEOHead
        title="The Nexura Growth Engine"
        description="Discover the 5 core stages of The Nexura Growth Engine: Discover, Attract, Convert, Automate, and Grow."
      />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 space-y-4">
          <Breadcrumbs items={[{ label: 'Growth Engine' }]} />
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            The Nexura <span className="text-[#14B8A6]">Growth Engine</span>.
          </h1>
        </div>

        <GrowthEngine />
        <DigitalEcosystem />
        <PricingFunnelCTA />
      </div>
    </>
  );
};
