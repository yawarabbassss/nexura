import React from 'react';
import { Gauge, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';

export const AuditArtifact = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs hover:shadow-md transition-shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#0F2B2A] font-bold">
          <Gauge className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span>Core Web Vitals Audit</span>
        </div>
        <span className="px-2 py-0.5 text-[9px] bg-[#14B8A6]/10 text-[#14B8A6] rounded-full border border-[#14B8A6]/30 font-bold">
          Score 98/100
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-center">
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">LCP Speed</div>
          <div className="text-xs font-bold text-[#14B8A6]">0.74s (Fast)</div>
        </div>
        <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
          <div className="text-[10px] text-slate-500 font-medium">Technical Errors</div>
          <div className="text-xs font-bold text-[#F97316]">0 Critical</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1 border-t border-slate-100">
        <span className="flex items-center gap-1 font-semibold text-[#0F2B2A]">
          <CheckCircle2 className="w-3 h-3 text-[#14B8A6]" /> 100% Crawl Ready
        </span>
        <span className="text-[#F97316] font-bold flex items-center gap-0.5">
          Report Live <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
};
