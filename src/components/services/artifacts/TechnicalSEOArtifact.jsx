import React from 'react';
import { Layers, Code2, CheckCircle, RefreshCw } from 'lucide-react';

export const TechnicalSEOArtifact = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs hover:shadow-md transition-shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#0F2B2A] font-bold">
          <Code2 className="w-3.5 h-3.5 text-[#14B8A6]" />
          <span>JSON-LD Schema Validated</span>
        </div>
        <span className="px-2 py-0.5 text-[9px] bg-[#0F2B2A]/5 text-[#0F2B2A] rounded-full border border-slate-200 font-bold">
          Rich Snippet Ready
        </span>
      </div>

      <div className="bg-[#0F2B2A] text-slate-200 p-2.5 rounded-lg text-[10px] font-sans space-y-1">
        <div className="text-[#14B8A6] font-bold">@type: "LocalBusiness & Service"</div>
        <div className="text-slate-400">indexation: "100% Validated"</div>
        <div className="text-[#F97316] font-semibold">canonical: "https://yourdomain.com/"</div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1">
        <span className="flex items-center gap-1 text-[#14B8A6] font-bold">
          <CheckCircle className="w-3 h-3" /> 0 Index Errors
        </span>
        <span className="text-slate-500 font-semibold flex items-center gap-1">
          <RefreshCw className="w-2.5 h-2.5 text-[#F97316] animate-spin" /> Live Sync
        </span>
      </div>
    </div>
  );
};
