import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, Shield } from 'lucide-react';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const whatsappInquiryUrl = `https://wa.me/15168355018?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <>
      <SEOHead
        title={`${service.title} | Nexura Enterprises`}
        description={service.fullDesc}
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Breadcrumbs & Header */}
          <div className="space-y-4">
            <Breadcrumbs
              items={[
                { label: 'Services', link: '/services' },
                { label: service.title }
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Service Category {service.number}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg font-mono text-[#F97316] font-bold">
              {service.subtitle}
            </p>

            <p className="text-base text-slate-700 font-sans leading-relaxed max-w-3xl">
              {service.fullDesc}
            </p>
          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs transition-all shadow-md flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss {service.title} Scope on WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-[#0F2B2A] text-white hover:bg-[#14B8A6] font-heading font-bold text-xs flex items-center gap-2 transition-colors shadow-md"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Core Capabilities */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold font-heading text-[#0F2B2A] border-b border-slate-200 pb-4">
              Core Capabilities & Deliverables
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-sans font-medium leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div className="p-6 bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-3xl flex items-start gap-4 shadow-md">
            <Shield className="w-6 h-6 text-[#F97316] shrink-0 mt-1" />
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#14B8A6] font-bold uppercase tracking-wider">Commercial Impact & Outcome</div>
              <div className="text-sm text-slate-100 font-sans leading-relaxed">{service.outcome}</div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-[#0F2B2A] text-white border border-[#14B8A6]/30 rounded-3xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Ready to deploy {service.title}?</h3>
            <p className="text-xs text-slate-200 max-w-xl mx-auto font-sans">
              Connect directly with our engineering & strategic growth lead team on WhatsApp for an immediate consultation.
            </p>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs transition-all shadow-md"
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
