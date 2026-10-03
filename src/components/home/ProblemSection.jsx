import React from 'react';
import { problemData } from '../../data/problemData';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Challenges We Eliminate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Your business does not need more <span className="text-[#14B8A6]">disconnected digital tools</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Most businesses have websites, marketing channels, forms, CRMs, messaging platforms, and operational tools that work separately. That creates friction. Nexura connects those systems into a single growth architecture.
          </p>
        </div>

        {/* 6 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemData.map((item) => {
            const whatsappUrl = `https://wa.me/15168355018?text=${encodeURIComponent(item.whatsappMessage)}`;
            return (
              <div
                key={item.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#14B8A6]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Number Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-sans font-bold text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full border border-[#F97316]/30">
                      PROBLEM {item.number}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl font-bold font-heading text-[#0F2B2A] leading-snug">
                    {item.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Solution Bullet Points */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-200">
                    <div className="text-[10px] font-sans text-[#14B8A6] uppercase tracking-wider font-bold">
                      Nexura Architecture Solution
                    </div>
                    {item.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex flex-col gap-2.5">
                  <Link
                    to={item.ctaLink}
                    className="w-full py-2.5 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-sans text-slate-600 hover:text-[#F97316] text-center flex items-center justify-center gap-1 transition-colors py-1 font-semibold"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>Discuss Problem on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
