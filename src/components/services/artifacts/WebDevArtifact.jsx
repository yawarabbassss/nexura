import React from 'react';
import { Code, Gauge, Smartphone, CheckCircle2, Zap } from 'lucide-react';

export const WebDevArtifact = () => {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-slate-200 p-4 font-sans shadow-md">
      {/* Browser Window Header */}
      <div className="flex items-center justify-between bg-[#F8FAFC] px-3 py-1.5 rounded-t-lg border-b border-slate-200 text-[11px] font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="bg-[#FFFFFF] px-3 py-0.5 rounded border border-slate-200 text-slate-700 text-[10px] font-medium">
          https://nexuraenterprises.com
        </div>
        <div className="flex items-center gap-1 text-[#0D9488] font-bold text-[10px]">
          <Gauge className="w-3 h-3 text-[#14B8A6]" /> 100/100
        </div>
      </div>

      {/* Code & Performance Visual */}
      <div className="bg-[#F8FAFC] p-3 rounded-b-lg border-x border-b border-slate-200 space-y-2.5">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-b border-slate-200 pb-1">
          <span className="text-[#0D9488] font-semibold flex items-center gap-1"><Code className="w-3 h-3 text-[#14B8A6]" /> High-Speed React Engine</span>
          <span className="text-[#F97316] font-semibold flex items-center gap-1"><Smartphone className="w-3 h-3" /> Mobile Optimized</span>
        </div>

        {/* Live Code Container */}
        <div className="font-mono text-[10px] text-slate-800 bg-[#0F2B2A] text-slate-100 p-2.5 rounded-lg border border-slate-800 space-y-1">
          <div><span className="text-[#2DD4BF]">const</span> <span className="text-[#F97316]">NexuraWeb</span> = () =&gt; &#123;</div>
          <div className="pl-3 text-slate-300"><span className="text-[#2DD4BF]">return</span> &lt;<span className="text-[#2DD4BF]">HighSpeedPlatform</span> <span className="text-[#F97316]">conversion</span>=<span className="text-yellow-300">"100%"</span> /&gt;;</div>
          <div>&#125;;</div>
        </div>

        {/* Core Web Vitals Metrics */}
        <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
          <div className="bg-[#FFFFFF] py-1.5 rounded border border-slate-200">
            <div className="text-[9px] text-slate-400">FCP</div>
            <div className="text-[11px] font-bold text-[#0D9488]">0.4s</div>
          </div>
          <div className="bg-[#FFFFFF] py-1.5 rounded border border-slate-200">
            <div className="text-[9px] text-slate-400">LCP</div>
            <div className="text-[11px] font-bold text-[#0D9488]">0.8s</div>
          </div>
          <div className="bg-[#FFFFFF] py-1.5 rounded border border-slate-200">
            <div className="text-[9px] text-slate-400">CLS</div>
            <div className="text-[11px] font-bold text-[#F97316]">0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};
