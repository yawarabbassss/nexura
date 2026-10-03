import React from 'react';
import { Layers, Shield, ExternalLink } from 'lucide-react';

export const CustomSolArtifact = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 font-sans shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#14B8A6]" />
          <span className="text-xs font-bold text-[#0F2B2A] font-heading">Custom Ecosystem Engineering</span>
        </div>
        <span className="text-[10px] font-mono text-[#0F2B2A] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full border border-[#14B8A6]/30 font-bold">Bespoke Architecture</span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-slate-500 font-bold">Headless API Layer</div>
          <div className="text-[#14B8A6] font-bold">Custom Microservices</div>
        </div>
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-slate-500 font-bold">Database Engine</div>
          <div className="text-[#0F2B2A] font-bold">High-Scale PostgreSQL</div>
        </div>
      </div>

      <div className="mt-2.5 p-2 bg-[#0F2B2A] rounded-xl text-white flex items-center justify-between text-[11px] shadow-xs">
        <span className="text-slate-200 font-mono text-[10px] flex items-center gap-1.5 font-bold">
          <Shield className="w-3.5 h-3.5 text-[#14B8A6]" /> Enterprise Hardened & Scalable
        </span>
        <ExternalLink className="w-3.5 h-3.5 text-[#F97316]" />
      </div>
    </div>
  );
};
