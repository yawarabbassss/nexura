import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Cpu, Zap, ShoppingBag, Building2, Briefcase, MapPin, HeartPulse, Home, Search, Globe, Bot, Workflow, Layers, TrendingUp, Sparkles, Image, Video, Shield, Instagram, Facebook, Wrench, Stethoscope, ShieldCheck, Car, Trees, Flame, Utensils } from 'lucide-react';
import { servicesData, quickServicesData } from '../../data/servicesData';
import { industryData } from '../../data/industryData';

export const Navbar = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegamenu, setActiveMegamenu] = useState(null); // 'services' | 'industries' | 'resources' | null
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMegamenu(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 relative ${
          isScrolled
            ? 'bg-white/95 shadow-md py-2.5 px-6 border border-slate-200 backdrop-blur-md'
            : 'bg-white/80 py-2.5 px-6 border border-slate-200/80 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Lockup */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-[#14B8A6]/40 p-0.5 bg-white group-hover:border-[#F97316] transition-colors shadow-xs">
              <img
                src="/logo.jpg"
                alt="Nexura Enterprises Official Logo"
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-[#0F2B2A] tracking-tight text-base group-hover:text-[#14B8A6] transition-colors">
                NEXURA <span className="text-[#F97316] font-light">ENTERPRISES</span>
              </span>
              <span className="text-[9px] font-sans text-slate-500 tracking-wider uppercase -mt-1 flex items-center gap-1 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                Your Growth Partner
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {/* Services Megamenu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMegamenu('services')}
              onMouseLeave={() => setActiveMegamenu(null)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-xs font-semibold transition-colors tracking-wide py-1 flex items-center gap-1 ${
                    isActive || activeMegamenu === 'services' ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegamenu === 'services' ? 'rotate-180 text-[#F97316]' : ''}`} />
              </NavLink>

              {/* Services Megamenu Card */}
              {activeMegamenu === 'services' && (
                <div className="absolute top-full -left-20 w-[680px] bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <h3 className="text-sm font-bold font-heading text-[#0F2B2A]">Full-Spectrum Services</h3>
                      <p className="text-[11px] font-sans text-slate-500">SEO, Technical & Local SEO, Etsy Growth, Web Dev & AI</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full border border-[#F97316]/30">
                      16 Core Services
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.id}
                        to={`/services/${svc.slug}`}
                        className="p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] group-hover:text-[#F97316] shrink-0 mt-0.5">
                          <CheckIcon id={svc.id} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#14B8A6] transition-colors">{svc.title}</div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{svc.subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* One-Time Quick Services Highlight Bar */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="text-slate-700 font-bold flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#F97316]" /> One-Time Quick Services (GBP, Audit, GSC, GA4)
                    </span>
                    <Link to="/services" className="text-[#F97316] hover:underline flex items-center gap-1 font-bold">
                      View Quick Setups →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Megamenu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMegamenu('industries')}
              onMouseLeave={() => setActiveMegamenu(null)}
            >
              <NavLink
                to="/industries"
                className={({ isActive }) =>
                  `text-xs font-semibold transition-colors tracking-wide py-1 flex items-center gap-1 ${
                    isActive || activeMegamenu === 'industries' ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'
                  }`
                }
              >
                <span>Industries</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegamenu === 'industries' ? 'rotate-180 text-[#F97316]' : ''}`} />
              </NavLink>

              {/* Industries Megamenu Panel */}
              {activeMegamenu === 'industries' && (
                <div className="absolute top-full -left-40 w-[660px] bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <div>
                      <h3 className="text-sm font-bold font-heading text-[#0F2B2A]">Industries We Serve</h3>
                      <p className="text-[11px] font-sans text-[#F97316]">15 Specialized Industry Growth Roadmaps</p>
                    </div>
                    <span className="text-[10px] font-bold text-[#14B8A6] bg-[#0F2B2A]/5 px-2.5 py-1 rounded-full border border-[#14B8A6]/30">
                      15 Verticals
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[380px] overflow-y-auto pr-1">
                    {industryData.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        className="p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-start gap-2.5 group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#0F2B2A]/5 border border-[#14B8A6]/30 flex items-center justify-center text-[#14B8A6] group-hover:text-[#F97316] shrink-0 mt-0.5">
                          <IndIcon iconName={ind.icon} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#14B8A6] transition-colors">{ind.title}</div>
                          <div className="text-[10px] text-slate-500 line-clamp-1">{ind.tagline}</div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
                    <span className="text-[#14B8A6] font-semibold">Dentists, Med Spas, Law Firms, HVAC, Plumbing, Roofing & Ecom.</span>
                    <Link to="/industries" className="text-[#F97316] hover:underline flex items-center gap-1 font-bold">
                      View All 15 Verticals →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Case Studies Link */}
            <NavLink to="/case-studies" className={({ isActive }) => `text-xs font-semibold transition-colors tracking-wide py-1 ${isActive ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'}`}>
              Case Studies
            </NavLink>

            <NavLink to="/process" className={({ isActive }) => `text-xs font-semibold transition-colors tracking-wide py-1 ${isActive ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'}`}>
              Process
            </NavLink>

            <NavLink to="/growth-engine" className={({ isActive }) => `text-xs font-semibold transition-colors tracking-wide py-1 ${isActive ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'}`}>
              Growth Engine
            </NavLink>

            <NavLink to="/blog" className={({ isActive }) => `text-xs font-semibold transition-colors tracking-wide py-1 ${isActive ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'}`}>
              Blog
            </NavLink>

            {/* Resources Megamenu Trigger */}
            <div
              className="relative py-2"
              onMouseEnter={() => setActiveMegamenu('resources')}
              onMouseLeave={() => setActiveMegamenu(null)}
            >
              <NavLink
                to="/resources"
                className={({ isActive }) =>
                  `text-xs font-semibold transition-colors tracking-wide py-1 flex items-center gap-1 ${
                    isActive || activeMegamenu === 'resources' ? 'text-[#14B8A6] font-bold' : 'text-slate-700 hover:text-[#0F2B2A]'
                  }`
                }
              >
                <span>Resources & Tools</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMegamenu === 'resources' ? 'rotate-180 text-[#F97316]' : ''}`} />
              </NavLink>

              {/* Resources & Free Tools Megamenu Card */}
              {activeMegamenu === 'resources' && (
                <div className="absolute top-full -right-20 w-[540px] bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-50 animate-in fade-in duration-200">
                  <div className="border-b border-slate-100 pb-3 mb-4">
                    <h3 className="text-sm font-bold font-heading text-[#0F2B2A]">Resources & Free Growth Tools</h3>
                    <p className="text-[11px] font-sans text-[#F97316]">Free AI generators, sitemap analyzers & case studies</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Link to="/free-ai-audit" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0 font-bold text-xs">
                        $500
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#F97316]">Free AI Audit</div>
                        <div className="text-[10px] text-slate-500">Instant SEO & speed report</div>
                      </div>
                    </Link>

                    <Link to="/sitemap-analyzer" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center shrink-0">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#14B8A6]">Sitemap Analyzer</div>
                        <div className="text-[10px] text-slate-500">AI URL & index extraction</div>
                      </div>
                    </Link>

                    <Link to="/youtube-thumbnail-generator" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#0F2B2A]/5 text-[#0F2B2A] flex items-center justify-center shrink-0">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#F97316]">YouTube Thumbnails</div>
                        <div className="text-[10px] text-slate-500">1280x720 ad graphics</div>
                      </div>
                    </Link>

                    <Link to="/creative-generator" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#0F2B2A]/5 text-[#0F2B2A] flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-[#F97316]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#14B8A6]">Creative Generator</div>
                        <div className="text-[10px] text-slate-500">AI-powered ad creatives</div>
                      </div>
                    </Link>

                    <Link to="/blog-image-generator" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#0F2B2A]/5 text-[#0F2B2A] flex items-center justify-center shrink-0">
                        <Image className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#F97316]">Blog Image Generator</div>
                        <div className="text-[10px] text-slate-500">On-brand featured images</div>
                      </div>
                    </Link>

                    <Link to="/blog" className="p-2.5 rounded-xl hover:bg-slate-50 border border-slate-100 transition-all flex items-start gap-2.5 group">
                      <div className="w-8 h-8 rounded-lg bg-[#0F2B2A]/5 text-[#0F2B2A] flex items-center justify-center shrink-0">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0F2B2A] group-hover:text-[#14B8A6]">Blog & Insights</div>
                        <div className="text-[10px] text-slate-500">SEO tips & marketing strategies</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Action Call / Project Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/free-ai-audit"
              className="text-xs font-heading font-bold text-white bg-[#F97316] hover:bg-[#F97316]/90 px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free AI Audit</span>
            </Link>

            <button
              onClick={onOpenProjectModal}
              className="text-xs font-heading font-bold text-white bg-[#0F2B2A] hover:bg-[#14B8A6] px-5 py-2 rounded-full transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-[#14B8A6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-20 bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl z-50 space-y-4 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col space-y-3 font-heading font-semibold text-slate-800 text-sm">
            <NavLink to="/services" className="py-2 border-b border-slate-100">Services Catalog (16 Services)</NavLink>
            <NavLink to="/industries" className="py-2 border-b border-slate-100">Industries We Serve (15 Verticals)</NavLink>
            <NavLink to="/case-studies" className="py-2 border-b border-slate-100">Case Studies</NavLink>
            <NavLink to="/process" className="py-2 border-b border-slate-100">Process Roadmap</NavLink>
            <NavLink to="/growth-engine" className="py-2 border-b border-slate-100">Growth Engine</NavLink>
            <NavLink to="/resources" className="py-2 border-b border-slate-100">Resources & Free Tools</NavLink>
            <NavLink to="/free-ai-audit" className="py-2 border-b border-slate-100 text-[#F97316]">Free $500 AI Audit</NavLink>
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenProjectModal) onOpenProjectModal();
                }}
                className="w-full text-center text-xs font-heading font-bold text-white bg-[#0F2B2A] py-3 rounded-full flex items-center justify-center gap-1 shadow-md"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper Icon Pickers
const CheckIcon = ({ id }) => {
  switch (id) {
    case 'seo': return <Search className="w-3.5 h-3.5" />;
    case 'website-audit': return <Shield className="w-3.5 h-3.5" />;
    case 'technical-seo': return <Layers className="w-3.5 h-3.5" />;
    case 'local-seo': return <MapPin className="w-3.5 h-3.5" />;
    case 'gbp-optimization': return <Building2 className="w-3.5 h-3.5" />;
    case 'backlinks-authority': return <Globe className="w-3.5 h-3.5" />;
    case 'guest-posts': return <Briefcase className="w-3.5 h-3.5" />;
    case 'etsy-growth-partner': return <ShoppingBag className="w-3.5 h-3.5" />;
    case 'etsy-listing-optimization': return <Sparkles className="w-3.5 h-3.5" />;
    case 'etsy-niche-research': return <Search className="w-3.5 h-3.5" />;
    case 'etsy-title-description': return <TrendingUp className="w-3.5 h-3.5" />;
    case 'web-development': return <Globe className="w-3.5 h-3.5" />;
    case 'ai-chatbots': return <Bot className="w-3.5 h-3.5" />;
    case 'ai-solutions': return <Cpu className="w-3.5 h-3.5" />;
    case 'business-automation': return <Workflow className="w-3.5 h-3.5" />;
    case 'digital-marketing': return <TrendingUp className="w-3.5 h-3.5" />;
    case 'custom-technology': return <Layers className="w-3.5 h-3.5" />;
    default: return <Search className="w-3.5 h-3.5" />;
  }
};

const IndIcon = ({ iconName }) => {
  switch (iconName) {
    case 'Stethoscope': return <Stethoscope className="w-4 h-4" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4" />;
    case 'HeartPulse': return <HeartPulse className="w-4 h-4" />;
    case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
    case 'Wrench': return <Wrench className="w-4 h-4" />;
    case 'Home': return <Home className="w-4 h-4" />;
    case 'Car': return <Car className="w-4 h-4" />;
    case 'Trees': return <Trees className="w-4 h-4" />;
    case 'Flame': return <Flame className="w-4 h-4" />;
    case 'Utensils': return <Utensils className="w-4 h-4" />;
    case 'ShoppingBag': return <ShoppingBag className="w-4 h-4" />;
    case 'Building2': return <Building2 className="w-4 h-4" />;
    case 'Briefcase': return <Briefcase className="w-4 h-4" />;
    case 'Cpu': return <Cpu className="w-4 h-4" />;
    case 'Zap': return <Zap className="w-4 h-4" />;
    default: return <Building2 className="w-4 h-4" />;
  }
};
