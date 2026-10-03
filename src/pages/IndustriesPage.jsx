import React from 'react';
import { industryData } from '../data/industryData';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, ArrowRight } from 'lucide-react';

export const IndustriesPage = () => {
  return (
    <>
      <SEOHead
        title="Industries We Serve — Specialized Marketing & Tech Roadmaps"
        description="Discover how Nexura Enterprises adapts SEO, high-performance web systems, AI chatbots, and automations for Dentists, Med Spas, Law Firms, HVAC, Plumbing, Roofing, Remodeling, Real Estate, Restaurants, and Ecommerce."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <Breadcrumbs items={[{ label: 'Industries' }]} />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>16 Commercial Industry Roadmaps</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Growth Systems Built for <span className="text-[#14B8A6]">Your Commercial Market</span>.
            </h1>

            <p className="text-base text-slate-600 max-w-3xl font-sans leading-relaxed">
              We do not force clients into generic packages. We tailor search architecture, web platforms, AI intake, and operational automations around the exact commercial requirements of your specific vertical.
            </p>
          </div>

          {/* Photo Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryData.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group flex flex-col rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-300 bg-white"
              >
                {/* Photo Header */}
                <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Stat Badge */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded-full shadow-md flex items-center justify-center font-heading tracking-wide">
                    {ind.stat}
                  </div>

                  {/* Industry Title */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h2 className="text-2xl font-extrabold font-heading text-white tracking-tight drop-shadow-sm">
                      {ind.title}
                    </h2>
                  </div>
                </div>

                {/* Light Body */}
                <div className="flex-1 bg-[#F4F6F1] p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="text-sm font-bold text-slate-900 font-heading tracking-tight">
                      {ind.focus}
                    </div>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {ind.shortTagline || ind.tagline}
                    </p>
                  </div>

                  {/* Cyber Teal Arrow Link */}
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488] transition-colors font-sans">
                    <span>{ind.ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Subtext Footer */}
          <div className="text-center pt-4 border-t border-slate-200">
            <p className="text-sm sm:text-base font-sans font-medium text-slate-600">
              We serve <span className="text-[#0F2B2A] font-bold">16 specialized industries</span> across the world, especially in the US
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
