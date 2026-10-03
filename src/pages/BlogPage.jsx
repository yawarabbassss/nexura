import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, Search, Clock, Calendar, ArrowRight, BookOpen, User } from 'lucide-react';

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fallbackImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';

  const categories = ['All', 'Local SEO', 'AI & Automation', 'Etsy & Ecommerce', 'Technical Web'];

  const filteredPosts = blogData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogData[0];

  return (
    <>
      <SEOHead
        title="Blog & Growth Insights — Nexura Enterprises"
        description="Actionable, fluff-free growth strategies for Local SEO, AI Chatbots, Web Speed, Etsy Niche Growth, and Business Automation for Dentists, Med Spas, Law Firms, HVAC, and Ecommerce."
      />

      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <Breadcrumbs items={[{ label: 'Blog & Insights' }]} />

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Real Commercial Strategy • No Fluff</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Growth Engineering & <span className="text-[#14B8A6]">Industry Insights</span>.
            </h1>

            <p className="text-base text-slate-600 font-sans leading-relaxed">
              Tactical playbooks on local search domination, AI chatbots, high-speed web architecture, and operational automations engineered for modern commercial businesses.
            </p>
          </div>

          {/* Search Bar & Category Filters */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-y border-slate-200 py-6">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold font-sans transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0F2B2A] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#14B8A6] focus:ring-1 focus:ring-[#14B8A6]"
              />
            </div>
          </div>

          {/* Featured Main Post Card (Shown when 'All' selected & no search) */}
          {selectedCategory === 'All' && !searchQuery && (
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  onError={(e) => { e.target.src = fallbackImage; }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent lg:hidden" />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 bg-slate-900 text-white flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-3 py-1 bg-[#14B8A6] text-white font-bold rounded-full font-heading">
                      Featured • {featuredPost.category}
                    </span>
                    <span className="text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight group-hover:text-[#14B8A6] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-sans">
                    <User className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>{featuredPost.author}</span>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14B8A6] hover:bg-[#0D9488] text-white font-bold text-xs transition-all shadow-md"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold font-heading text-[#0F2B2A]">
              {selectedCategory === 'All' ? 'Latest Growth Articles' : `${selectedCategory} Articles`}
            </h2>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    {/* Cover Image Header */}
                    <div className="relative h-52 bg-slate-900 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        onError={(e) => { e.target.src = fallbackImage; }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#0F2B2A] text-white text-xs font-bold rounded-full shadow-md font-heading border border-[#14B8A6]/40">
                        {post.category}
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#14B8A6]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#F97316]" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between space-y-4 bg-white">
                      <div className="space-y-2">
                        <h3 className="text-lg font-extrabold font-heading text-[#0F2B2A] group-hover:text-[#14B8A6] transition-colors leading-snug line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-slate-600 font-sans leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500 font-sans font-medium flex items-center gap-1">
                          <User className="w-3 h-3 text-[#14B8A6]" />
                          {post.author}
                        </span>

                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488] transition-colors font-sans"
                        >
                          <span>Read Article</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-base font-bold text-slate-800">No articles found matching your query</p>
                <p className="text-xs text-slate-500">Try switching categories or clearing your search term.</p>
              </div>
            )}
          </div>

          {/* Bottom Free Strategy Call CTA Banner */}
          <div className="bg-[#0F2B2A] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-2xl relative overflow-hidden border border-[#14B8A6]/30">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight">
                Want a Tailored Growth Blueprint for Your Business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Book a free 1-on-1 strategy audit with our team to uncover high-intent search gaps, conversion leaks, and automation opportunities.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20a%20tailored%20growth%20strategy%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-extrabold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Book Your Free Growth Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
