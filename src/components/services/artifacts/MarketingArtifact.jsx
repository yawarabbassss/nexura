import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

export const MarketingArtifact = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 font-sans shadow-md">
      {/* Campaign Header */}
      <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span className="text-xs font-bold text-[#0F2B2A] font-heading">Multi-Channel Acquisition</span>
        </div>
        <span className="text-[10px] font-mono text-[#0F2B2A] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full border border-[#14B8A6]/30 font-bold">High ROI Strategy</span>
      </div>

      {/* Signal Flow Visual */}
      <div className="grid grid-cols-3 gap-2 mb-3 text-center">
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <Users className="w-4 h-4 text-[#14B8A6] mx-auto mb-1" />
          <div className="text-[10px] text-slate-500 font-mono">Target Audience</div>
          <div className="text-xs font-bold text-[#0F2B2A] mt-0.5">Commercial Intent</div>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-[#14B8A6]/40">
          <Target className="w-4 h-4 text-[#F97316] mx-auto mb-1" />
          <div className="text-[10px] text-slate-500 font-mono">Precision Ads</div>
          <div className="text-xs font-bold text-[#F97316] mt-0.5">Synced Offers</div>
        </div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <Zap className="w-4 h-4 text-[#14B8A6] mx-auto mb-1" />
          <div className="text-[10px] text-slate-500 font-mono">Qualified Leads</div>
          <div className="text-xs font-bold text-[#0F2B2A] mt-0.5">Direct Intake</div>
        </div>
      </div>

      {/* Campaign Conversion Pipeline Indicator */}
      <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200">
        <div className="flex justify-between text-[10px] font-mono text-slate-600 mb-1">
          <span>Ad Click → Landing Page → Lead Action</span>
          <span className="text-[#F97316] font-bold">3.8x ROAS</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
          <div className="bg-[#0F2B2A] w-1/3 h-full" />
          <div className="bg-[#14B8A6] w-1/2 h-full" />
          <div className="bg-[#F97316] w-1/6 h-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};
