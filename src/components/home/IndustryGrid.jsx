import React from 'react';
import { industryData } from '../../data/industryData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, MousePointer } from 'lucide-react';

export const IndustryGrid = () => {
  // Split the 16 industries into two halves of 8
  const halfLength = Math.ceil(industryData.length / 2);
  const firstHalf = industryData.slice(0, halfLength);
  const secondHalf = industryData.slice(halfLength);

  // Duplicate arrays for seamless infinite loop
  const row1Items = [...firstHalf, ...firstHalf];
  const row2Items = [...secondHalf, ...secondHalf];

  return (
    <section className="py-20 bg-white border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Tailored Industry Growth Roadmaps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Industries We <span className="text-[#14B8A6]">Serve & Scale</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            We adapt search visibility, high-speed web platforms, AI chatbots, and automated workflows around the exact commercial requirements of your industry.
          </p>

          <div className="pt-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-500 font-medium">
            <MousePointer className="w-3.5 h-3.5 text-[#14B8A6] animate-bounce" />
            <span>Hover any industry card to pause & view details</span>
          </div>
        </div>
      </div>

      {/* Two-Row Infinite Marquee Container */}
      <div className="space-y-6 pt-6 relative">
        {/* Left & Right Edge Vignette Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20" />

        {/* ROW 1: Moves Left to Right */}
        <div className="overflow-hidden w-full py-1">
          <div className="animate-marquee-right flex gap-6">
            {row1Items.map((ind, idx) => (
              <Link
                key={`${ind.slug}-r1-${idx}`}
                to={`/industries/${ind.slug}`}
                className="group w-[320px] sm:w-[350px] shrink-0 flex flex-col rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Photo Header Container */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Stat Metric Cyber Teal Pill Badge (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded-full shadow-md flex items-center justify-center font-heading tracking-wide">
                    {ind.stat}
                  </div>

                  {/* White Bold Industry Title (Bottom Left) */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-xl font-extrabold font-heading text-white tracking-tight drop-shadow-sm">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Body */}
                <div className="flex-1 bg-[#F4F6F1] p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-900 font-heading tracking-tight">
                      {ind.focus}
                    </div>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2">
                      {ind.shortTagline || ind.tagline}
                    </p>
                  </div>

                  {/* Cyber Teal Arrow Link */}
                  <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488] transition-colors font-sans">
                    <span>{ind.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right to Left */}
        <div className="overflow-hidden w-full py-1">
          <div className="animate-marquee-left flex gap-6">
            {row2Items.map((ind, idx) => (
              <Link
                key={`${ind.slug}-r2-${idx}`}
                to={`/industries/${ind.slug}`}
                className="group w-[320px] sm:w-[350px] shrink-0 flex flex-col rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Photo Header Container */}
                <div className="relative w-full h-48 overflow-hidden bg-slate-900">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Stat Metric Cyber Teal Pill Badge (Top Right) */}
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded-full shadow-md flex items-center justify-center font-heading tracking-wide">
                    {ind.stat}
                  </div>

                  {/* White Bold Industry Title (Bottom Left) */}
                  <div className="absolute bottom-3.5 left-4 right-4">
                    <h3 className="text-xl font-extrabold font-heading text-white tracking-tight drop-shadow-sm">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom Card Body */}
                <div className="flex-1 bg-[#F4F6F1] p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-900 font-heading tracking-tight">
                      {ind.focus}
                    </div>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-2">
                      {ind.shortTagline || ind.tagline}
                    </p>
                  </div>

                  {/* Cyber Teal Arrow Link */}
                  <div className="pt-1 flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488] transition-colors font-sans">
                    <span>{ind.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Subtext Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 text-center">
        <p className="text-sm font-sans font-medium text-slate-600">
          We serve <span className="text-[#0F2B2A] font-bold">16 specialized industries</span> across the world, especially in the US
        </p>
      </div>
    </section>
  );
};
