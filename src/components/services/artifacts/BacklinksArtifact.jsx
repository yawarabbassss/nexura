import React from 'react';
import { Globe, Award, TrendingUp, ShieldCheck } from 'lucide-react';

export const BacklinksArtifact = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs hover:shadow-md transition-shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#0F2B2A] font-bold">
          <Globe className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span>Domain Authority Power</span>
        </div>
        <span className="px-2 py-0.5 text-[9px] bg-[#14B8A6]/10 text-[#14B8A6] rounded-full border border-[#14B8A6]/30 font-bold">
          DR 78 Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Do-Follow Links</div>
          <div className="text-xs font-bold text-[#0F2B2A]">1,240 Quality Links</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Referring Domains</div>
          <div className="text-xs font-bold text-[#F97316]">380 DR60+ Sites</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1 border-t border-slate-100">
        <span className="flex items-center gap-1 text-[#14B8A6] font-bold">
          <ShieldCheck className="w-3 h-3" /> 100% White-Hat Outreach
        </span>
        <span className="text-[#F97316] font-bold flex items-center gap-0.5">
          <TrendingUp className="w-3 h-3" /> +18 DR Growth
        </span>
      </div>
    </div>
  );
};
