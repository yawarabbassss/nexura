import React from 'react';
import { Search, TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const SEOArtifact = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 font-sans shadow-md">
      {/* Search Input Bar */}
      <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs mb-4">
        <Search className="w-4 h-4 text-[#14B8A6] shrink-0" />
        <span className="text-[#0F2B2A] font-mono truncate font-semibold">digital growth partner</span>
        <span className="ml-auto px-2 py-0.5 text-[10px] bg-[#F97316] text-white rounded-full font-mono shrink-0 font-bold">Rank #1</span>
      </div>

      {/* Visibility Score */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div className="text-[10px] text-slate-500 font-mono">Organic Visibility</div>
          <div className="text-lg font-extrabold text-[#0F2B2A] flex items-center gap-1 font-heading">
            98.4% <TrendingUp className="w-4 h-4 text-[#14B8A6]" />
          </div>
          <div className="text-[10px] text-[#14B8A6] font-mono font-bold">+142% vs baseline</div>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div className="text-[10px] text-slate-500 font-mono">Top 3 Rankings</div>
          <div className="text-lg font-extrabold text-[#0F2B2A] font-heading">42 Keywords</div>
          <div className="text-[10px] text-[#F97316] font-mono font-bold">High Commercial Intent</div>
        </div>
      </div>

      {/* Growth Graph SVG */}
      <div className="relative h-20 w-full bg-slate-50 rounded-xl border border-slate-200 p-2 overflow-hidden flex items-end">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="seoGradTealLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q40,45 70,30 T140,18 T200,5 L200,60 L0,60 Z"
            fill="url(#seoGradTealLight)"
          />
          <path
            d="M0,50 Q40,45 70,30 T140,18 T200,5"
            fill="none"
            stroke="#14B8A6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="200" cy="5" r="4" fill="#F97316" className="animate-ping" />
          <circle cx="200" cy="5" r="3" fill="#F97316" />
        </svg>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-600 mt-2 font-mono">
        <span className="flex items-center gap-1 font-bold text-[#0F2B2A]"><ShieldCheck className="w-3.5 h-3.5 text-[#14B8A6]" /> Technical SEO Clean</span>
        <span className="text-[#F97316] font-bold flex items-center">Live Tracking <ArrowUpRight className="w-3 h-3 ml-0.5" /></span>
      </div>
    </div>
  );
};
