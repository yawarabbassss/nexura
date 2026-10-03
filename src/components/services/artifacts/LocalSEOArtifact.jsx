import React from 'react';
import { MapPin, PhoneCall, Star, TrendingUp } from 'lucide-react';

export const LocalSEOArtifact = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs hover:shadow-md transition-shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#0F2B2A] font-bold">
          <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Google Map Pack</span>
        </div>
        <span className="px-2 py-0.5 text-[9px] bg-[#F97316] text-white rounded-full font-bold">
          #1 Ranked
        </span>
      </div>

      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#0F2B2A]">
          <span>Direct Phone Calls</span>
          <span className="text-[#14B8A6] flex items-center gap-0.5"><TrendingUp className="w-3 h-3" /> +284%</span>
        </div>
        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#14B8A6] to-[#F97316] h-full w-[88%]" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1">
        <span className="flex items-center gap-1 text-slate-700 font-semibold">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> 4.9 Rating (142 Reviews)
        </span>
        <span className="text-[#14B8A6] font-bold">GBP Verified</span>
      </div>
    </div>
  );
};
