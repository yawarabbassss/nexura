import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, Calendar, Clock, User, ArrowLeft, ArrowRight, CheckCircle2, MessageSquare, Share2 } from 'lucide-react';

export const BlogPostPage = () => {
  const { slug } = useParams();

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const fallbackImage = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800';

  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${post.title} — Nexura Growth Insights`}
        description={post.summary}
      />

      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Top Breadcrumb Nav */}
          <div className="space-y-4">
            <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: post.category }]} />

            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#14B8A6] hover:text-[#0F2B2A] transition-colors font-sans"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all growth articles</span>
            </Link>
          </div>

          {/* Header Block */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3.5 py-1 bg-[#14B8A6] text-white font-bold rounded-full font-heading">
                {post.category}
              </span>
              <span className="text-slate-500 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#14B8A6]" />
                {post.date}
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-slate-200 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F2B2A] text-[#14B8A6] flex items-center justify-center font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F2B2A]">{post.author}</div>
                  <div className="text-[10px] text-slate-500 font-mono">Senior Growth Strategist • Nexura Enterprises</div>
                </div>
              </div>

              <a
                href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%20just%20read%20your%20blog%20post%20and%20want%20to%20discuss%20our%20strategy."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F2B2A]/5 hover:bg-[#0F2B2A] text-[#0F2B2A] hover:text-white border border-[#14B8A6]/30 text-xs font-bold transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Discuss Article Strategy</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200">
            <img
              src={post.image}
              alt={post.title}
              onError={(e) => { e.target.src = fallbackImage; }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#0F2B2A] text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-xl border border-[#14B8A6]/30">
            <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#F97316] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Key Tactical Takeaways</span>
            </div>

            <div className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Article Body Content */}
          <div className="prose prose-slate max-w-none space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
            {post.content.split('\n\n').map((paragraph, pIdx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('### ')) {
                return (
                  <h2 key={pIdx} className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2B2A] pt-4 tracking-tight">
                    {trimmed.replace('### ', '')}
                  </h2>
                );
              }

              if (trimmed.startsWith('#### ')) {
                return (
                  <h3 key={pIdx} className="text-xl font-bold font-heading text-[#0F2B2A] pt-3 tracking-tight">
                    {trimmed.replace('#### ', '')}
                  </h3>
                );
              }

              return (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Article Bottom WhatsApp CTA Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-lg font-bold font-heading text-[#0F2B2A]">Ready to implement these insights in your business?</div>
              <p className="text-xs text-slate-600 font-sans">Get a tailored SEO & AI growth audit built specifically for your vertical.</p>
            </div>

            <a
              href="https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20implement%20growth%20strategies%20from%20your%20blog."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#14B8A6] hover:bg-[#0D9488] text-white text-xs font-bold font-sans transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>Get Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Related Articles Section */}
          <div className="pt-12 border-t border-slate-200 space-y-6">
            <h3 className="text-2xl font-extrabold font-heading text-[#0F2B2A]">
              More Growth Articles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  to={`/blog/${rPost.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#14B8A6] hover:shadow-xl transition-all duration-300 bg-white"
                >
                  <div className="relative h-44 bg-slate-900 overflow-hidden">
                    <img
                      src={rPost.image}
                      alt={rPost.title}
                      onError={(e) => { e.target.src = fallbackImage; }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#0F2B2A] text-white text-[10px] font-bold rounded-full font-heading border border-[#14B8A6]/30">
                      {rPost.category}
                    </div>
                  </div>

                  <div className="p-4 bg-white flex flex-col justify-between flex-1 space-y-3">
                    <h4 className="text-sm font-bold font-heading text-[#0F2B2A] group-hover:text-[#14B8A6] transition-colors line-clamp-2">
                      {rPost.title}
                    </h4>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#14B8A6] group-hover:text-[#0D9488]">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </article>
    </>
  );
};
