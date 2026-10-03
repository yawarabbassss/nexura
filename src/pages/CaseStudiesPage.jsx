import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap, Layers, CheckCircle2, BarChart2, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'hvac-lead-surge',
    title: '340% Lead Surge & #1 Local Rankings for Tri-State HVAC Contractor',
    industry: 'HVAC & Field Services',
    client: 'Apex Climate Solutions',
    metrics: [
      { label: 'Organic Lead Increase', value: '+340%' },
      { label: 'Top 3 Keyword Rankings', value: '48 Keywords' },
      { label: 'Customer Acquisition Cost', value: '-52%' },
      { label: '90-Day Pipeline Growth', value: '$420,000' }
    ],
    summary: 'Apex Climate Solutions was struggling with low local search visibility, slow site speed, and manual lead intake. Nexura rebuilt their web presence with high-speed Next-level architecture, localized HVAC landing pages, and an automated WhatsApp AI dispatch bot.',
    deliverables: [
      'Custom Web Architecture (0.4s load speed)',
      'Local SEO & Google Business Profile Domination',
      'AI Instant Dispatch & Booking Chatbot',
      'Multi-Channel Local PPC Campaign'
    ],
    testimonial: {
      quote: 'Nexura transformed our online presence completely. We went from relying on word-of-mouth to booking 15-20 qualified emergency HVAC calls daily through our website.',
      author: 'Mark Sterling',
      role: 'Founder & CEO, Apex Climate'
    }
  },
  {
    id: 'saas-[#1]-scaling',
    title: 'Scaling ARR by $1.8M with Enterprise Web Architecture & AI Automated Lead Triage',
    industry: 'SaaS & Enterprise Tech',
    client: 'CloudFlow Analytics',
    metrics: [
      { label: 'ARR Growth', value: '+$1.8M' },
      { label: 'Demo Booking Rate', value: '+210%' },
      { label: 'Organic Search Traffic', value: '85,000/mo' },
      { label: 'Form Abandonment', value: '-65%' }
    ],
    summary: 'CloudFlow had complex enterprise analytics software but a confusing website. Nexura redesigned their commercial architecture, authored interactive feature artifacts, and deployed automated AI qualification workflows that route leads directly to account executives.',
    deliverables: [
      'High-Conversion Enterprise Web Platform',
      'Interactive Product Showcase & Demo Engine',
      'B2B SaaS Technical SEO Strategy',
      'CRM & Zapier Workflow Automations'
    ],
    testimonial: {
      quote: 'The return on investment with Nexura was immediate. Their technical team understands both engineering and commercial funnel optimization.',
      author: 'Elena Rostova',
      role: 'VP of Growth, CloudFlow Analytics'
    }
  },
  {
    id: 'e-commerce-omnichannel',
    title: '4.2x ROAS & 180% Revenue Increase for D2C Brand Ecosystem',
    industry: 'Ecommerce & D2C',
    client: 'Veloce Performance Gear',
    metrics: [
      { label: 'Ad Return on Spend (ROAS)', value: '4.2x' },
      { label: 'Conversion Rate', value: '3.8%' },
      { label: 'Monthly Organic Revenue', value: '+$145K' },
      { label: 'Page Speed Score', value: '99/100' }
    ],
    summary: 'Veloce needed a high-performance headless store with rich media and lightning-fast checkout. Nexura engineered a modern storefront, optimized technical SEO, and implemented automated re-engagement chatbots on Meta platforms.',
    deliverables: [
      'High-Speed Storefront Development',
      'AI Ad Creative & Copy Systems',
      'Omnichannel Paid Media Strategy',
      'WhatsApp Customer Service Automation'
    ],
    testimonial: {
      quote: 'Nexura is not just an agency; they operate as our extended technical growth department. Our conversion rate almost doubled in 60 days.',
      author: 'David Chen',
      role: 'Managing Director, Veloce'
    }
  },
  {
    id: 'roofing-contractor-domination',
    title: 'Dominating Local Search & Generating $850K in High-Intent Storm Leads',
    industry: 'Roofing Contractors',
    client: 'Vanguard Roofing & Solar',
    metrics: [
      { label: 'Local Pack Rankings', value: '#1 in 14 Zip Codes' },
      { label: 'Storm Lead Volume', value: '180+ / mo' },
      { label: 'Average Deal Size', value: '$18,500' },
      { label: 'Review Velocity', value: '+450%' }
    ],
    summary: 'Vanguard Roofing required hyper-local visibility for storm restoration services. Nexura built individual service area pages, automated review requests via SMS, and launched high-converting Google Local Services ads.',
    deliverables: [
      'Hyper-Local SEO & Content Hub',
      'Automated Review & Reputation System',
      'Mobile-First Emergency Inspection Portal',
      'WhatsApp Immediate Response Bot'
    ],
    testimonial: {
      quote: 'When storms hit, our site handles hundreds of quote requests without slowing down. Nexura gives us a huge edge over competitors.',
      author: 'Jason Vance',
      role: 'Owner, Vanguard Roofing'
    }
  }
];

export const CaseStudiesPage = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Case Studies', path: '/case-studies' }
  ];

  return (
    <>
      <SEOHead
        title="Case Studies & Client Proven Results | Nexura Enterprises"
        description="Explore how Nexura Enterprises helps HVAC, SaaS, Roofing, Ecommerce, and Local Businesses scale with high-converting web architecture, SEO domination, and AI automations."
        canonicalUrl="https://nexuraenterprises.com/case-studies"
      />

      <main className="min-h-screen bg-white text-slate-900 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <Breadcrumbs items={breadcrumbItems} />
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2B2A]/10 border border-[#14B8A6]/30 text-[#0F2B2A] text-xs font-mono font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Real Clients · Proven Growth</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Case Studies & Proven <span className="text-[#14B8A6]">Client Outcomes</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl font-sans leading-relaxed">
              Explore how our unified strategy—combining high-speed web platforms, SEO authority, AI chatbots, and operational automations—delivers measurable revenue and commercial momentum.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 hover:border-[#14B8A6]/50 transition-all shadow-sm hover:shadow-xl space-y-6"
              >
                {/* Top Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-mono text-[#F97316] font-bold tracking-wider uppercase bg-[#F97316]/10 px-3 py-1 rounded-full border border-[#F97316]/20">
                      {study.industry}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2B2A] mt-3">
                      {study.title}
                    </h2>
                    <p className="text-sm font-mono text-slate-500 mt-1">Client: {study.client}</p>
                  </div>

                  <a
                    href="https://wa.me/15168355018?text=Hi%20Nexura%2C%20I%20saw%20your%20case%20studies%20and%20want%20similar%20results."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-heading font-bold text-white bg-[#0F2B2A] hover:bg-[#14B8A6] px-5 py-2.5 rounded-full transition-all shadow-md shrink-0"
                  >
                    <span>Get Similar Results</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {study.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-xs">
                      <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#14B8A6]">{m.value}</div>
                      <div className="text-xs font-mono text-slate-600 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Summary & Deliverables */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="text-sm font-bold font-heading text-[#0F2B2A] uppercase tracking-wider">Challenge & Execution</h3>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">{study.summary}</p>
                  </div>

                  <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                    <h3 className="text-xs font-mono font-bold text-[#0F2B2A] uppercase tracking-wider">Delivered Architecture</h3>
                    <ul className="space-y-2 text-xs text-slate-700 font-sans">
                      {study.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="bg-[#0F2B2A] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm font-serif italic text-slate-200 max-w-2xl">
                    "{study.testimonial.quote}"
                  </p>
                  <div className="shrink-0 text-right sm:text-left border-t sm:border-t-0 sm:border-l border-slate-700 pt-2 sm:pt-0 sm:pl-4">
                    <div className="text-xs font-bold font-heading text-white">{study.testimonial.author}</div>
                    <div className="text-[11px] font-mono text-[#14B8A6]">{study.testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="bg-gradient-to-r from-[#0F2B2A] via-[#14B8A6] to-[#0F2B2A] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading">
              Ready to create your success story with Nexura?
            </h2>
            <p className="text-sm sm:text-base text-slate-100 max-w-2xl mx-auto font-sans">
              Building Brands, Accelerating Business. Get a customized digital growth audit and high-converting tech strategy today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="text-sm font-heading font-bold text-[#0F2B2A] bg-white hover:bg-slate-100 px-7 py-3.5 rounded-full transition-all shadow-lg"
              >
                Contact Our Team
              </Link>
              <Link
                to="/free-ai-audit"
                className="text-sm font-mono font-semibold text-white bg-[#F97316] hover:bg-[#F97316]/90 px-6 py-3.5 rounded-full transition-all shadow-lg"
              >
                Claim $500 Free AI Audit
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CaseStudiesPage;
