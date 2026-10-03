import React from 'react';
import { GitCommit, Workflow, CheckCheck, RefreshCw } from 'lucide-react';

export const AutomationArtifact = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-4 font-sans shadow-md">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
        <div className="flex items-center gap-2">
          <Workflow className="w-4 h-4 text-[#14B8A6]" />
          <span className="text-xs font-bold text-[#0F2B2A] font-heading">Workflow Orchestration</span>
        </div>
        <span className="text-[10px] font-mono text-[#0F2B2A] bg-[#14B8A6]/10 px-2 py-0.5 rounded-full border border-[#14B8A6]/30 font-bold">Active Pipeline</span>
      </div>

      {/* Trigger -> Node -> Action Workflow Diagram */}
      <div className="relative flex items-center justify-between gap-1 text-[10px] font-mono">
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center flex-1">
          <div className="text-slate-500 text-[9px] font-bold">TRIGGER</div>
          <div className="text-[#0F2B2A] font-bold mt-0.5">New Web Inquiry</div>
        </div>

        <div className="text-[#14B8A6] font-bold">→</div>

        <div className="bg-[#0F2B2A] p-2.5 rounded-xl border border-[#14B8A6]/50 text-center flex-1 text-white shadow-xs">
          <div className="text-[#14B8A6] text-[9px] flex items-center justify-center gap-1 font-bold">
            <RefreshCw className="w-2.5 h-2.5 animate-spin" /> PROCESS
          </div>
          <div className="text-white font-bold mt-0.5">CRM & SMS Sync</div>
        </div>

        <div className="text-[#14B8A6] font-bold">→</div>

        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-center flex-1">
          <div className="text-slate-500 text-[9px] font-bold">ACTION</div>
          <div className="text-[#0F2B2A] font-bold mt-0.5">Sales Alerted</div>
        </div>
      </div>

      <div className="mt-3 bg-slate-50 p-2 rounded-xl border border-slate-200 flex items-center justify-between text-[10px] text-slate-600 font-mono">
        <span>Execution speed: <strong className="text-[#0F2B2A]">120ms</strong></span>
        <span className="text-[#14B8A6] flex items-center gap-1 font-bold"><CheckCheck className="w-3 h-3" /> 0 Errors</span>
      </div>
    </div>
  );
};
