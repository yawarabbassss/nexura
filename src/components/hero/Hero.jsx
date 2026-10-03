import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { Link } from 'react-router-dom';

export const Hero = ({ onOpenProjectModal }) => {
  return (
    <section className="relative min-h-[90vh] pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-hidden bg-white text-slate-900">
      {/* Soft Light Lighting Gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#14B8A6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F97316]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Eyebrow Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B2A]/5 border border-[#14B8A6]/30 text-[#0F2B2A] text-xs font-sans font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316] animate-pulse" />
            <span>Building Brands, Accelerating Business.</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0F2B2A] tracking-tight leading-[1.1]">
            We build the <span className="text-[#14B8A6]">digital systems</span> that move businesses forward.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-sans leading-relaxed">
            Nexura Enterprises unifies <strong className="text-[#0F2B2A]">SEO Authority</strong>, <strong className="text-[#14B8A6]">High-Speed Web Architecture</strong>, <strong className="text-[#0F2B2A]">AI Solutions</strong>, <strong className="text-[#F97316]">Automated Chatbots</strong>, and <strong className="text-[#14B8A6]">Multi-Channel Growth</strong> into a connected commercial engine engineered for qualified lead generation and market leadership.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            {/* Primary CTA: Start a Project (Direct Email Form Trigger!) */}
            <button
              onClick={onOpenProjectModal}
              className="w-full sm:w-auto text-center font-heading font-bold text-sm text-white bg-[#0F2B2A] hover:bg-[#14B8A6] px-8 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Free Audit CTA */}
            <Link
              to="/free-ai-audit"
              className="w-full sm:w-auto text-center font-sans text-xs font-bold text-white bg-[#F97316] hover:bg-[#F97316]/90 px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
            >
              <span>Claim $500 Free AI Audit</span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/case-studies"
              className="w-full sm:w-auto text-center font-heading font-semibold text-xs text-slate-700 hover:text-[#0F2B2A] px-5 py-3 rounded-full transition-colors flex items-center justify-center gap-1"
            >
              <span>View Case Studies</span>
            </Link>
          </div>

          {/* Trust/Capabilities Bar */}
          <div className="pt-6 border-t border-slate-200 w-full flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-slate-600">
            <div className="flex items-center gap-2 font-bold text-[#0F2B2A]">
              <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
              <span>Enterprise Grade Quality</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <span className="hover:text-[#14B8A6] transition-colors">SEO</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#14B8A6] transition-colors">Web</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#F97316] transition-colors">AI</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#14B8A6] transition-colors">Automation</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-[#F97316] transition-colors">Chatbots</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Graphic */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-12 flex justify-center">
        <a
          href="#positioning"
          aria-label="Scroll down"
          className="p-2 rounded-full border border-slate-200 text-slate-500 hover:text-[#14B8A6] hover:border-[#14B8A6]/40 transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
