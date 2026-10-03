import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { industryData } from '../data/industryData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export const IndustryDetailPage = () => {
  const { slug } = useParams();
  const industry = industryData.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const whatsappInquiryUrl = `https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20a%20digital%20growth%20system%20for%20our%20${encodeURIComponent(industry.title)}%20business.`;

  return (
    <>
      <SEOHead
        title={`${industry.title} Growth Systems | Nexura Enterprises`}
        description={industry.solution}
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Breadcrumbs & Header */}
          <div className="space-y-4">
            <Breadcrumbs
              items={[
                { label: 'Industries', link: '/industries' },
                { label: industry.title }
              ]}
            />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Target Vertical Solution</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              {industry.title} Growth Engine
            </h1>
            <p className="text-lg font-mono text-[#F97316] font-bold">
              {industry.tagline}
            </p>
          </div>

          {/* Industry Common Problem */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-3xl flex items-start gap-4 shadow-xs">
            <AlertCircle className="w-6 h-6 text-[#F97316] shrink-0 mt-1" />
            <div className="space-y-1">
              <div className="text-xs font-mono text-[#F97316] font-bold uppercase tracking-wider">Common Industry Challenge</div>
              <div className="text-sm text-slate-800 font-sans leading-relaxed font-medium">{industry.problem}</div>
            </div>
          </div>

          {/* How Nexura Solves It */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
            <h2 className="text-2xl font-bold font-heading text-[#0F2B2A] border-b border-slate-200 pb-4">
              How Nexura Builds the System
            </h2>
            <p className="text-sm text-slate-700 font-sans leading-relaxed">
              {industry.solution}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {industry.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-800 font-sans font-medium leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-3xl p-8 text-center space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold font-heading text-white">Scale your {industry.title} business with Nexura</h3>
            <p className="text-xs text-slate-200 max-w-xl mx-auto font-sans">
              Connect directly with our strategic growth lead team on WhatsApp for an immediate consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Discuss {industry.title} Strategy on WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-white text-[#0F2B2A] font-heading font-bold text-xs flex items-center justify-center gap-1 hover:bg-slate-100 shadow-md"
              >
                Get a Growth Plan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
