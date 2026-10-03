import React from 'react';
import { resourcesData } from '../data/resourcesData';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, ArrowRight, Clock, Image, Video, Search, Shield, Layers } from 'lucide-react';

export const ResourcesPage = () => {
  const tools = [
    {
      title: 'Free AI Audit ($500 Value)',
      desc: 'Instant AI audit of SEO visibility, speed metrics, lead leaks, and a 90-day growth roadmap.',
      link: '/free-ai-audit',
      badge: 'POPULAR TOOL',
      icon: Sparkles
    },
    {
      title: 'AI Creative Generator',
      desc: 'Generate high-converting visual ad creatives in 1:1, 9:16, and 16:9 formats with PNG export.',
      link: '/tools/creative-generator',
      badge: 'AD CREATOR',
      icon: Image
    },
    {
      title: 'Blog Image Generator',
      desc: 'Create on-brand 1200x630 featured header images formatted for articles and OpenGraph metadata.',
      link: '/tools/blog-image-generator',
      badge: 'OPENGRAPH',
      icon: Layers
    },
    {
      title: 'YouTube Thumbnail Generator',
      desc: 'Build high-contrast 1280x720 YouTube thumbnails with bold text overlays and instant download.',
      link: '/tools/youtube-thumbnail-generator',
      badge: '1280x720',
      icon: Video
    },
    {
      title: 'Sitemap Analyzer & URL Extractor',
      desc: 'Parse XML sitemaps, extract clean URL lists, analyze route depth, and audit crawl health.',
      link: '/tools/sitemap-analyzer',
      badge: 'TECHNICAL SEO',
      icon: Search
    },
    {
      title: 'White Label Partner Program',
      desc: 'Partner with Nexura as your 100% confidential, NDA-backed agency fulfillment team.',
      link: '/whitelabel',
      badge: 'AGENCY PARTNER',
      icon: Shield
    }
  ];

  return (
    <>
      <SEOHead
        title="Resources & Free Interactive AI Tools"
        description="Free interactive marketing & SEO tools: AI Audit, Creative Generator, Blog Banner Tool, YouTube Thumbnail Builder, Sitemap Analyzer, and Agency White-Label Partnership."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <Breadcrumbs items={[{ label: 'Resources' }]} />
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Interactive Tools & Playbooks</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Free AI Tools & <span className="text-[#14B8A6]">Growth Insights</span>.
            </h1>

            <p className="text-base text-slate-600 max-w-3xl font-sans leading-relaxed">
              Use our free interactive tools to audit your digital presence, generate high-converting ad graphics, create OpenGraph banners, and extract sitemap architectures.
            </p>
          </div>

          {/* Free Tools Grid */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-[#0F2B2A] border-b border-slate-200 pb-3">
              Free Web & AI Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool, idx) => {
                const IconComp = tool.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#14B8A6]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full border border-[#F97316]/30">
                          {tool.badge}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6]">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold font-heading text-[#0F2B2A]">
                        {tool.title}
                      </h3>

                      <p className="text-xs text-slate-600 font-sans leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200">
                      <Link
                        to={tool.link}
                        className="w-full py-3 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <span>Launch Tool</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Articles Section */}
          <div className="space-y-4 pt-6">
            <h2 className="text-2xl font-bold font-heading text-[#0F2B2A] border-b border-slate-200 pb-3">
              Blog & Strategic Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourcesData.map((art) => (
                <div
                  key={art.id}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#14B8A6]/60 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#14B8A6]">
                        {art.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1 font-semibold">
                        <Clock className="w-3 h-3 text-[#14B8A6]" /> {art.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-[#0F2B2A] leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-[#14B8A6]">
                    <span className="text-slate-500 font-medium">{art.date}</span>
                    <span className="flex items-center gap-1 font-bold hover:underline cursor-pointer text-[#F97316]">
                      Read Playbook <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
