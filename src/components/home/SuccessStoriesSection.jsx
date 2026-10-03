import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';

export const SuccessStoriesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const fallbackImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';

  const featuredStories = [
    {
      id: 'fashion-ecom',
      badge: 'Fashion & Luxury',
      title: 'Fashion Ecommerce Brand',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
      summary: 'Capture with Meta catalog ads for discovery and retargeting. Aligned campaign budgets with seasonal peaks and built SEO content around style guides and trend pages for compounding organic growth.',
      results: [
        { value: '+65%', label: 'Revenue Growth' },
        { value: '4.1x', label: 'Google Shopping ROAS' },
        { value: '+90%', label: 'Organic Sessions' }
      ]
    },
    {
      id: 'hvac-lead-surge',
      badge: 'HVAC & Plumbing',
      title: 'Tri-State Plumbing & HVAC Contractor',
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800',
      summary: 'Rebuilt web architecture for sub-second mobile performance, optimized Google Map Pack rankings across 14 zip codes, and deployed a 24/7 AI WhatsApp booking assistant for emergency calls.',
      results: [
        { value: '+340%', label: 'Emergency Lead Surge' },
        { value: '5X', label: 'Service Call Bookings' },
        { value: '#1', label: 'Google Map Pack Rank' }
      ]
    },
    {
      id: 'saas-enterprise',
      badge: 'B2B SaaS & Tech',
      title: 'Enterprise Analytics Platform',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
      summary: 'Architected high-converting landing pages, implemented B2B SaaS technical SEO schema, and created automated lead triage pipelines routing enterprise demo inquiries directly to account executives.',
      results: [
        { value: '+$1.8M', label: 'ARR Growth' },
        { value: '+210%', label: 'Demo Booking Rate' },
        { value: '-65%', label: 'Form Abandonment' }
      ]
    }
  ];

  const moreStories = [
    {
      id: 'local-plumber',
      title: "South Florida's Top-Rated Local Plumber",
      category: 'Plumbing & Field Services',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600',
      stat: '5X Service Calls',
      linkText: 'See Plumbing Case Study'
    },
    {
      id: 'sports-gear',
      title: '2026 Ball Promos & Team Gear Store',
      category: 'Sports & Retail Ecom',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600',
      stat: '4.2x Ad ROAS',
      linkText: 'See Sports Ecom Case Study'
    },
    {
      id: 'baseball-apparel',
      title: 'Baseball & Tee Ball Equipment Brand',
      category: 'Athletic Apparel & Gear',
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600',
      stat: '+180% Organic Sales',
      linkText: 'See Apparel Case Study'
    }
  ];

  const currentFeatured = featuredStories[activeTab];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Proven Client Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Success Stories & <span className="text-[#14B8A6]">Real Client Results</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            See how forward-thinking brands, field contractors, law firms, and e-commerce stores scale revenue with Nexura’s connected growth architecture.
          </p>
        </div>

        {/* Featured Case Study Card */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Photo Column */}
          <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px] bg-slate-900 overflow-hidden">
            <img
              src={currentFeatured.image}
              alt={currentFeatured.title}
              onError={(e) => { e.target.src = fallbackImage; }}
              className="w-full h-full object-cover opacity-90 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="inline-block px-3 py-1 bg-[#14B8A6] text-white text-xs font-bold rounded-lg shadow-sm font-heading">
                {currentFeatured.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight drop-shadow-sm">
                {currentFeatured.title}
              </h3>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 p-6 sm:p-10 bg-[#F8FAFC] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                {currentFeatured.summary}
              </p>

              {/* KEY RESULTS Section */}
              <div className="space-y-3">
                <div className="text-xs font-bold text-[#14B8A6] uppercase tracking-wider font-heading">
                  KEY RESULTS
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {currentFeatured.results.map((res, rIdx) => (
                    <div key={rIdx} className="bg-white border border-slate-200/80 p-3.5 sm:p-4 rounded-2xl text-center shadow-xs">
                      <div className="text-xl sm:text-2xl font-extrabold text-[#F97316] font-heading tracking-tight">
                        {res.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-500 font-sans font-medium mt-0.5 leading-tight">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20get%20similar%20growth%20results%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Get Similar Results</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/case-studies"
                className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-heading font-bold text-xs transition-colors shadow-xs"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Story Selector Tabs */}
        <div className="flex justify-center items-center gap-2 pt-2">
          {featuredStories.map((story, idx) => (
            <button
              key={story.id}
              onClick={() => setActiveTab(idx)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                activeTab === idx ? 'bg-[#14B8A6] w-8' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`View story ${idx + 1}`}
            />
          ))}
        </div>

        {/* More Success Stories */}
        <div className="space-y-8 pt-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2B2A] text-center tracking-tight">
            More Success Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreStories.map((story) => (
              <Link
                key={story.id}
                to="/case-studies"
                className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative h-48 bg-slate-900 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    onError={(e) => { e.target.src = fallbackImage; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  <div className="absolute top-3 right-3 px-3 py-1 bg-[#14B8A6] text-white text-[11px] font-bold rounded-full shadow-md font-heading">
                    {story.stat}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[10px] text-[#14B8A6] uppercase font-bold font-sans tracking-wide">
                      {story.category}
                    </span>
                    <h3 className="text-base font-bold font-heading text-white line-clamp-1">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-[#F8FAFC] flex items-center justify-between text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488] transition-colors">
                  <span>{story.linkText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
