import React, { useState } from 'react';
import { servicesData } from '../../data/servicesData';
import { ServiceDrawer } from './ServiceDrawer';
import { SEOArtifact } from './artifacts/SEOArtifact';
import { MarketingArtifact } from './artifacts/MarketingArtifact';
import { WebDevArtifact } from './artifacts/WebDevArtifact';
import { ChatbotArtifact } from './artifacts/ChatbotArtifact';
import { AIArtifact } from './artifacts/AIArtifact';
import { AutomationArtifact } from './artifacts/AutomationArtifact';
import { CustomSolArtifact } from './artifacts/CustomSolArtifact';
import { AuditArtifact } from './artifacts/AuditArtifact';
import { LocalSEOArtifact } from './artifacts/LocalSEOArtifact';
import { TechnicalSEOArtifact } from './artifacts/TechnicalSEOArtifact';
import { BacklinksArtifact } from './artifacts/BacklinksArtifact';
import { EtsyArtifact } from './artifacts/EtsyArtifact';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const getArtifact = (id) => {
    switch (id) {
      case 'seo': return <SEOArtifact />;
      case 'website-audit': return <AuditArtifact />;
      case 'technical-seo': return <TechnicalSEOArtifact />;
      case 'local-seo': return <LocalSEOArtifact />;
      case 'gbp-optimization': return <LocalSEOArtifact />;
      case 'backlinks-authority': return <BacklinksArtifact />;
      case 'guest-posts': return <BacklinksArtifact />;
      case 'etsy-growth-partner': return <EtsyArtifact />;
      case 'etsy-listing-optimization': return <EtsyArtifact />;
      case 'etsy-niche-research': return <EtsyArtifact />;
      case 'etsy-title-description': return <EtsyArtifact />;
      case 'web-development': return <WebDevArtifact />;
      case 'ai-chatbots': return <ChatbotArtifact />;
      case 'ai-solutions': return <AIArtifact />;
      case 'business-automation': return <AutomationArtifact />;
      case 'digital-marketing': return <MarketingArtifact />;
      case 'custom-technology': return <CustomSolArtifact />;
      default: return <SEOArtifact />;
    }
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Full-Spectrum Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Services built for <span className="text-[#14B8A6]">predictable growth</span>.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md font-sans leading-relaxed">
            We don't offer disconnected agency packages. Each capability is engineered to fit into a seamless commercial growth engine.
          </p>
        </div>

        {/* Services Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#14B8A6]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans text-[#14B8A6] font-bold">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-sans text-[#0F2B2A] bg-white px-2.5 py-1 rounded-full border border-slate-200 font-bold">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#0F2B2A] group-hover:text-[#14B8A6] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-slate-500 mt-1 font-semibold">
                    {service.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Service Visual Artifact */}
                <div className="pt-2">
                  {getArtifact(service.id)}
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-sans">
                <span className="text-slate-600 group-hover:text-[#0F2B2A] font-bold transition-colors">
                  Explore Capabilities
                </span>
                <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-[#F97316] group-hover:text-white group-hover:border-[#F97316] transition-all shadow-xs">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Deep Dive Drawer Modal */}
      {selectedService && (
        <ServiceDrawer
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};
