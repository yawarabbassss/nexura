import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const whatsappPricingUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20know%20your%20pricing%20and%20packages.";

  return (
    <footer className="bg-[#0F2B2A] text-slate-300 font-sans pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative border-t border-[#14B8A6]/20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Col 1: Brand Info & Social Icons ONLY */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl border border-[#14B8A6]/40 p-0.5 bg-white">
                <img
                  src="/logo.jpg"
                  alt="Nexura Logo"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="font-heading font-extrabold text-white tracking-tight text-lg">
                NEXURA <span className="text-[#F97316] font-light">ENTERPRISES</span>
              </span>
            </Link>
            <p className="text-xs text-slate-300 font-sans leading-relaxed max-w-sm">
              Nexura Enterprises is a modern digital growth and technology agency building high-performance web systems, SEO authority, AI solutions, chatbots, and operational automations. Building Brands, Accelerating Business.
            </p>

            {/* Social Icons ONLY (No text handle strings as explicitly requested!) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/nexura.enterprises"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexura Enterprises Instagram"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#F97316] text-white transition-colors border border-white/10 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com/nexuraenterprises"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexura Enterprises Facebook"
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#14B8A6] text-white transition-colors border border-white/10 shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={whatsappPricingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-white bg-[#F97316] hover:bg-[#F97316]/90 px-4 py-2 rounded-full transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Direct Contact</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/services/seo" className="hover:text-[#14B8A6] transition-colors">SEO & Search Growth</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-[#14B8A6] transition-colors">Digital Marketing & Strategy</Link></li>
              <li><Link to="/services/web-development" className="hover:text-[#14B8A6] transition-colors">Web Development</Link></li>
              <li><Link to="/services/ai-chatbots" className="hover:text-[#14B8A6] transition-colors">AI Chatbot Development</Link></li>
              <li><Link to="/services/ai-solutions" className="hover:text-[#14B8A6] transition-colors">AI Solutions</Link></li>
              <li><Link to="/services/business-automation" className="hover:text-[#14B8A6] transition-colors">Business Automation</Link></li>
              <li><Link to="/services/custom-technology" className="hover:text-[#14B8A6] transition-colors">Custom Technology</Link></li>
            </ul>
          </div>

          {/* Col 3: Free Tools & Resources */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Free Tools</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/free-ai-audit" className="text-[#F97316] font-semibold hover:underline">Free AI Audit ($500 Value)</Link></li>
              <li><Link to="/tools/creative-generator" className="hover:text-[#14B8A6] transition-colors">AI Creative Generator</Link></li>
              <li><Link to="/tools/blog-image-generator" className="hover:text-[#14B8A6] transition-colors">Blog Banner Generator</Link></li>
              <li><Link to="/tools/youtube-thumbnail-generator" className="hover:text-[#14B8A6] transition-colors">YouTube Thumbnail Tool</Link></li>
              <li><Link to="/tools/sitemap-analyzer" className="hover:text-[#14B8A6] transition-colors">Sitemap Analyzer</Link></li>
              <li><Link to="/whitelabel" className="hover:text-[#14B8A6] transition-colors">White Label Program</Link></li>
            </ul>
          </div>

          {/* Col 4: Direct Reach & Company */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Direct Reach</h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><Link to="/case-studies" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Case Studies</Link></li>
              <li><Link to="/process" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Process</Link></li>
              <li><Link to="/growth-engine" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Growth Engine</Link></li>
              <li><Link to="/resources" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Resources & Playbooks</Link></li>
              <li><Link to="/blog" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Blog & Insights</Link></li>
              <li><Link to="/contact" className="text-slate-200 hover:text-[#14B8A6] transition-colors">Contact</Link></li>
              <li className="pt-2">
                <a href="mailto:help.nexura@gmail.com" className="flex items-center gap-2 text-slate-200 hover:text-[#14B8A6] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#14B8A6]" /> help.nexura@gmail.com
                </a>
              </li>
              <li>
                <a href={whatsappPricingUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-[#F97316] transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 text-[#F97316]" /> WhatsApp Call: +1 (516) 835-5018
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Nexura Enterprises. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <Link to="/privacy-policy" className="hover:text-[#14B8A6] transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-[#14B8A6] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
