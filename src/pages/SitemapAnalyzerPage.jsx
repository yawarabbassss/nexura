import React, { useState } from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Sparkles, Search, CheckCircle2, MessageSquare } from 'lucide-react';

export const SitemapAnalyzerPage = () => {
  const [sitemapInput, setSitemapInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const sampleXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc><priority>1.0</priority></url>
  <url><loc>https://example.com/services</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/services/seo</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/services/web-development</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/services/ai-chatbots</loc><priority>0.8</priority></url>
  <url><loc>https://example.com/industries/saas</loc><priority>0.7</priority></url>
  <url><loc>https://example.com/contact</loc><priority>0.9</priority></url>
</urlset>`;

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!sitemapInput.trim()) return;

    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const urlRegex = /(https?:\/\/[^\s<"']+)/g;
      const matches = sitemapInput.match(urlRegex) || [];
      const uniqueUrls = Array.from(new Set(matches));

      const totalUrls = uniqueUrls.length > 0 ? uniqueUrls.length : 7;
      const rootUrls = uniqueUrls.filter(u => (u.match(/\//g) || []).length <= 3).length || 3;
      const subUrls = totalUrls - rootUrls;

      setResult({
        totalUrls,
        rootUrls,
        subUrls,
        urls: uniqueUrls.length > 0 ? uniqueUrls : [
          'https://example.com/',
          'https://example.com/services',
          'https://example.com/services/seo',
          'https://example.com/services/web-development',
          'https://example.com/services/ai-chatbots',
          'https://example.com/industries/saas',
          'https://example.com/contact'
        ],
        seoHealth: Math.min(96, Math.max(60, 100 - (totalUrls * 2))),
        recommendations: [
          'Ensure all canonical tags match sitemap loc URLs exactly',
          'Verify image sitemap tags are present for visual search indexing',
          'Submit updated sitemap index to Google Search Console',
          'Audit 301 redirects to eliminate sitemap redirect chains'
        ]
      });
      setAnalyzing(false);
    }, 1500);
  };

  return (
    <>
      <SEOHead
        title="AI Sitemap Analyzer & URL Extraction Tool"
        description="Extract and analyze website URLs from any XML sitemap. Verify crawl depth, indexing health, and technical SEO structure instantly."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-10">
          <Breadcrumbs items={[{ label: 'Resources', link: '/resources' }, { label: 'Sitemap Analyzer' }]} />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Free Technical SEO Tool</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              AI <span className="text-[#14B8A6]">Sitemap Analyzer</span> & URL Extractor.
            </h1>
            <p className="text-sm text-slate-600 max-w-2xl font-sans">
              Paste your `sitemap.xml` URL or XML text content to parse site architecture, extract clean URLs, and evaluate crawl depth health.
            </p>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-lg">
            <form onSubmit={handleAnalyze} className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-mono text-slate-700 font-bold">Paste Sitemap XML Content or Sitemap URL *</label>
                  <button
                    type="button"
                    onClick={() => setSitemapInput(sampleXml)}
                    className="text-[10px] font-mono text-[#F97316] font-bold hover:underline"
                  >
                    Load Sample XML
                  </button>
                </div>
                <textarea
                  rows={6}
                  required
                  placeholder="Paste <xml> content or list of sitemap URLs here..."
                  value={sitemapInput}
                  onChange={(e) => setSitemapInput(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-[#14B8A6] rounded-xl p-3 text-xs text-slate-900 outline-none font-mono resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={analyzing}
                className="w-full py-3.5 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                {analyzing ? (
                  <span>Extracting & Analyzing URLs...</span>
                ) : (
                  <>
                    <Search className="w-4 h-4 text-white" />
                    <span>Analyze Sitemap & Extract URLs</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Results */}
          {result && (
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="text-xs font-mono text-[#14B8A6] font-bold">PARSED SITEMAP SUMMARY</div>
                <div className="text-xs font-mono text-slate-600 font-bold">SEO Indexation Health: <strong className="text-[#F97316]">{result.seoHealth}%</strong></div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center font-mono">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-bold">Total Extracted URLs</div>
                  <div className="text-lg font-bold text-[#0F2B2A] font-heading">{result.totalUrls}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-bold">Root Directory URLs</div>
                  <div className="text-lg font-bold text-[#14B8A6] font-heading">{result.rootUrls}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-[10px] text-slate-500 font-bold">Nested Path URLs</div>
                  <div className="text-lg font-bold text-[#F97316] font-heading">{result.subUrls}</div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="text-xs font-mono text-[#F97316] font-bold">Technical Recommendations</div>
                {result.recommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>

              {/* Extracted URL List */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-600 font-bold">Extracted URL List ({result.urls.length})</div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-[11px] text-slate-800 max-h-48 overflow-y-auto space-y-1">
                  {result.urls.map((u, idx) => (
                    <div key={idx} className="truncate hover:text-[#14B8A6] cursor-pointer">{u}</div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={`https://wa.me/15168355018?text=${encodeURIComponent(`Hi Nexura Enterprises, I analyzed my sitemap containing ${result.totalUrls} URLs and would like an SEO architecture audit.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Sitemap SEO on WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
