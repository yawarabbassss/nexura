import React from 'react';
import { Zap, ShieldCheck, Sparkles, BarChart3, TrendingUp } from 'lucide-react';

export const WhyNexura = () => {
  const pillars = [
    {
      id: 'revenue-focus',
      icon: <Zap className="w-7 h-7 text-[#14B8A6]" />,
      title: 'Revenue Focus',
      description: 'Every dollar spent is tracked directly to revenue, not just vanity clicks or impressions.'
    },
    {
      id: 'no-contracts',
      icon: <ShieldCheck className="w-7 h-7 text-[#14B8A6]" />,
      title: 'No Long-Term Contracts',
      description: 'Month-to-month engagements. We earn your business through measurable monthly results.'
    },
    {
      id: 'ai-human-expertise',
      icon: <Sparkles className="w-7 h-7 text-[#F97316]" />,
      title: 'AI + Human Expertise',
      description: 'Proprietary AI tools accelerate research, bidding, and reporting while senior strategists make the final call.'
    },
    {
      id: 'transparent-reporting',
      icon: <BarChart3 className="w-7 h-7 text-[#14B8A6]" />,
      title: 'Transparent Reporting',
      description: 'Monthly reports with clear metrics, direct channel attribution, and actionable growth insights.'
    }
  ];

  return (
    <section id="why-nexura" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0F2B2A] text-white relative overflow-hidden border-y border-[#14B8A6]/20">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#14B8A6] text-xs font-mono font-bold border border-[#14B8A6]/30">
            <TrendingUp className="w-3.5 h-3.5 text-[#F97316]" />
            <span>The Nexura Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Why Nexura Enterprises? <span className="text-[#14B8A6]">AI + Results</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl mx-auto">
            AI-accelerated execution, human-led strategy, and full revenue transparency. That's how we outperform traditional agencies.
          </p>
        </div>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {pillars.map((item) => (
            <div key={item.id} className="space-y-4 group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#14B8A6]/40 hover:bg-white/10 transition-all duration-300 shadow-xl">
              {/* Translucent Circular Icon Badge */}
              <div className="w-16 h-16 rounded-full border border-[#14B8A6]/40 bg-[#0F2B2A] flex items-center justify-center mx-auto group-hover:scale-110 group-hover:border-[#F97316] transition-all shadow-md">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold font-heading text-white tracking-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
