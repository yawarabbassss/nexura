import React, { useState } from 'react';
import { engineData } from '../../data/engineData';
import { Sparkles, ArrowRight, Activity, Gauge } from 'lucide-react';

export const GrowthEngine = () => {
  const [activeStageId, setActiveStageId] = useState('convert');

  const activeStage = engineData.find(item => item.id === activeStageId) || engineData[2];

  return (
    <section id="growth-engine" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B2A]/5 border border-[#14B8A6]/30 text-[#0F2B2A] text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span>Signature Interactive Growth Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            The Nexura <span className="text-[#14B8A6]">Growth Engine</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Explore how our 5 core stages connect to form an uninterrupted client acquisition and automated operations engine.
          </p>
        </div>

        {/* 5-Stage Interactive Engine Pipeline Bar */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {engineData.map((item) => {
              const isActive = activeStageId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveStageId(item.id)}
                  onMouseEnter={() => setActiveStageId(item.id)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#0F2B2A] text-white border-[#14B8A6] shadow-lg scale-[1.02]'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#F97316]">{item.number}</span>
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#14B8A6] animate-ping' : 'bg-slate-300'}`} />
                  </div>
                  <div>
                    <h3 className={`text-base font-extrabold font-heading ${isActive ? 'text-white' : 'text-[#0F2B2A]'}`}>
                      {item.stage}
                    </h3>
                    <p className={`text-[10px] font-mono mt-0.5 ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                      {item.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Engine Active Stage Dashboard Display */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Capability Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#14B8A6] bg-[#0F2B2A]/5 px-3 py-1 rounded-full border border-[#14B8A6]/30 font-bold">
                  Stage {activeStage.number} — {activeStage.stage}
                </span>
                <span className="text-xs font-mono text-slate-600 font-bold">
                  {activeStage.capability}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2B2A]">
                {activeStage.headline}
              </h3>

              <p className="text-sm text-slate-700 font-sans leading-relaxed">
                {activeStage.details}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeStage.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-lg font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Real-Time Engine Stat Artifact */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                    <Activity className="w-4 h-4 text-[#F97316] animate-pulse" />
                    <span>Engine Benchmark</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#14B8A6] font-bold">Active Node</span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs text-slate-300 font-mono">{activeStage.metric}</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#14B8A6] font-heading">
                    {activeStage.metricValue}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1">
                    <Gauge className="w-3.5 h-3.5 text-[#14B8A6]" /> Continuous Scale
                  </span>
                  <a
                    href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20implement%20The%20Nexura%20Growth%20Engine."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] hover:underline flex items-center gap-1 font-bold"
                  >
                    Deploy Engine <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
