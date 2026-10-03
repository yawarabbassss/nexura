import React from 'react';
import { Cpu, Sparkles, CheckCircle } from 'lucide-react';

export const AIArtifact = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 font-sans shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-[#14B8A6]" />
          <span className="text-xs font-bold text-[#0F2B2A] font-heading">Applied Enterprise AI</span>
        </div>
        <span className="text-[10px] font-mono text-[#0F2B2A] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full border border-[#14B8A6]/30 font-bold">LLM + Agent Flow</span>
      </div>

      {/* Input -> Processing -> Output Flow */}
      <div className="space-y-2 text-[11px]">
        {/* Step 1: Context Intake */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="font-mono text-slate-500 font-bold">Context Intake</div>
          <div className="text-[#0F2B2A] font-mono text-[10px] font-bold">Unstructured Enterprise Data</div>
        </div>

        {/* Step 2: AI Neural Engine */}
        <div className="bg-[#0F2B2A] p-2.5 rounded-xl border border-[#14B8A6]/40 flex items-center justify-between text-white shadow-xs">
          <div className="flex items-center gap-1.5 text-[#14B8A6] font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
            <span>Nexura AI Model Engine</span>
          </div>
          <span className="text-[9px] bg-[#F97316] text-white font-bold px-2 py-0.5 rounded-full font-mono">30ms Latency</span>
        </div>

        {/* Step 3: Actionable Output */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#0F2B2A] font-mono font-bold">
            <CheckCircle className="w-3.5 h-3.5 text-[#14B8A6]" /> Automated Insight & Action
          </div>
          <div className="text-slate-500 font-mono text-[10px]">Zero Manual Effort</div>
        </div>
      </div>
    </div>
  );
};
