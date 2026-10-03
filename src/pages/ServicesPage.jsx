import React from 'react';
import { servicesData } from '../data/servicesData';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { QuickServicesSection } from '../components/services/QuickServicesSection';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

export const ServicesPage = () => {
  const whatsappPricingUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20know%20your%20pricing%20and%20packages.";

  return (
    <>
      <SEOHead
        title="Services & Capabilities — SEO, Audits, Etsy, Local SEO & AI"
        description="Explore Nexura Enterprises full capabilities: SEO, Website Audits, Backlinks, Technical SEO, Local SEO, GBP Optimization, Etsy Growth Partner, AI Chatbots, and One-Time Quick Services."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Breadcrumbs & Header */}
          <div className="space-y-4">
            <Breadcrumbs items={[{ label: 'Services' }]} />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Full-Spectrum Capabilities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Integrated Digital Growth & <span className="text-[#14B8A6]">Technology Services</span>.
            </h1>

            <p className="text-base text-slate-600 max-w-3xl font-sans leading-relaxed">
              We do not treat services as isolated tasks. Every capability—SEO, Website Audits, Backlinks, Technical & Local SEO, GBP Optimization, Etsy Store Scaling, AI chatbots, automations, and custom technology—is engineered to connect into a single commercial growth engine.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc) => (
              <div
                key={svc.id}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-[#14B8A6]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#F97316]">
                      CATEGORY {svc.number}
                    </span>
                    <span className="text-[10px] font-sans text-[#14B8A6] bg-[#0F2B2A]/5 px-2.5 py-1 rounded-full border border-[#14B8A6]/30 font-bold">
                      {svc.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-[#0F2B2A]">
                    {svc.title}
                  </h2>
                  <div className="text-xs font-sans text-[#14B8A6] -mt-2 font-bold">
                    {svc.subtitle}
                  </div>

                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-200">
                    <div className="text-[10px] font-sans text-[#0F2B2A] uppercase tracking-wider font-bold">Capabilities</div>
                    {svc.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col gap-2.5">
                  <Link
                    to={`/services/${svc.slug}`}
                    className="w-full py-3 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/15168355018?text=${encodeURIComponent(svc.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-sans text-slate-600 hover:text-[#F97316] text-center flex items-center justify-center gap-1 transition-colors py-1 font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated One-Time Quick Services Section */}
          <QuickServicesSection />

          {/* Pricing CTA Banner */}
          <div className="bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-3xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Need a custom service combination or project proposal?</h3>
            <p className="text-xs text-slate-200 max-w-xl mx-auto font-sans">
              Contact our strategic lead team directly to discuss your commercial requirements and timeline.
            </p>
            <a
              href={whatsappPricingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97316] text-white font-heading font-bold text-xs hover:bg-[#F97316]/90 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Want to Know Our Pricing? →</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
