import React, { useState } from 'react';
import { faqData } from '../../data/faqData';
import { ChevronDown, Sparkles, MessageSquare, Search, HelpCircle, CheckCircle2 } from 'lucide-react';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const categories = ['All', 'SEO & Web', 'AI & Automation', 'Pricing & Process'];

  // Categorize FAQs based on keywords while keeping exact questions intact
  const getCategory = (q) => {
    const questionLower = q.toLowerCase();
    if (questionLower.includes('seo') || questionLower.includes('web development') || questionLower.includes('website')) return 'SEO & Web';
    if (questionLower.includes('ai') || questionLower.includes('chatbot') || questionLower.includes('automate') || questionLower.includes('workflows')) return 'AI & Automation';
    if (questionLower.includes('cost') || questionLower.includes('process') || questionLower.includes('pricing')) return 'Pricing & Process';
    return 'SEO & Web';
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || getCategory(faq.question) === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const whatsappPricingUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20know%20your%20pricing%20and%20packages.";

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/60 border-y border-slate-200 relative overflow-hidden">
      {/* Decorative Glow background blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-sans font-bold border border-[#14B8A6]/30 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Commercial Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Frequently Asked <span className="text-[#14B8A6]">Questions</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans max-w-xl mx-auto leading-relaxed">
            Transparent answers regarding our integrated services, tech stack, commercial pricing, and execution roadmap.
          </p>
        </div>

        {/* Search Bar & Category Filter Pills */}
        <div className="space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search any question..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white border border-slate-200 focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/20 text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0F2B2A] text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-[#14B8A6] hover:text-[#0F2B2A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List with Smooth Expand & Active Glow */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const originalIndex = faqData.findIndex((f) => f.question === faq.question);
              const isOpen = openIdx === originalIndex;

              return (
                <div
                  key={originalIndex}
                  className={`rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-[#14B8A6] shadow-xl ring-1 ring-[#14B8A6]/30 border-l-4 border-l-[#14B8A6]'
                      : 'bg-white/90 border-slate-200/80 hover:border-[#14B8A6]/50 hover:bg-white shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(originalIndex)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold shrink-0 ${
                        isOpen ? 'bg-[#14B8A6] text-white' : 'bg-[#0F2B2A]/5 text-[#14B8A6]'
                      }`}>
                        Q0{originalIndex + 1}
                      </span>
                      <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                        isOpen ? 'text-[#0F2B2A]' : 'text-slate-800'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#F97316]/10 text-[#F97316] rotate-180' : 'bg-slate-100 text-[#14B8A6]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Smooth Animated Height & Opacity Collapse */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-6 px-5 sm:px-6' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 space-y-2">
              <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
              <p className="text-sm font-bold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500">Try adjusting your search terms or filter selection.</p>
            </div>
          )}
        </div>

        {/* Pricing CTA Bar */}
        <div className="bg-[#0F2B2A] text-white border border-[#14B8A6]/40 rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#14B8A6]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700" />

          <div className="space-y-1 relative z-10">
            <div className="text-base font-bold font-heading text-white">Have a specific scope or custom budget question?</div>
            <p className="text-xs text-slate-300 max-w-md mx-auto">Get an instant quote and detailed project timeline directly from our lead strategy team.</p>
          </div>

          <div className="relative z-10 pt-2">
            <a
              href={whatsappPricingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-white bg-[#F97316] hover:bg-[#F97316]/90 px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Want to Know Our Pricing? →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
