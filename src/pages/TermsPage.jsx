import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsPage = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service | Nexura Enterprises"
        description="Official Terms of Service for Nexura Enterprises governing web development, SEO, AI solutions, and white-label fulfillment services."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

          <h1 className="text-4xl font-extrabold font-heading text-[#0F2B2A]">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[#F97316] font-bold">Effective Date: September 9, 2026</p>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 text-sm text-slate-700 font-sans leading-relaxed shadow-sm">
            <p>
              Welcome to <strong>Nexura Enterprises</strong>. By accessing our web application or engaging our digital growth services, you agree to these Terms of Service.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">1. Scope of Digital Growth Services</h2>
            <p>
              Nexura Enterprises provides custom digital growth and technology services including Technical SEO, High-Performance Web Development, 24/7 AI Chatbot Systems, Enterprise AI Solutions, Business Automation, Digital Marketing Strategy, and White Label Partner Fulfillment.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">2. Custom Scoping & Proposals</h2>
            <p>
              Every client project is scoped transparently based on written commercial proposals detailing scope of work, technical architecture, deliverables, timelines, and pricing terms. Fees are specified in formal project statements or direct WhatsApp consultations.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">3. Intellectual Property Rights</h2>
            <p>
              Upon full payment of project invoices, all custom web code, digital assets, database schema configurations, and visual interface assets created specifically for the client belong exclusively to the client. Nexura retains rights to pre-existing proprietary frameworks and open-source middleware used in deployment.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">4. White Label Agency Partner Terms</h2>
            <p>
              Agencies participating in the Nexura White Label Fulfillment Program receive 100% confidential, NDA-backed technical execution. Nexura operates strictly behind the scenes without direct client contact unless requested by the partner agency.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">5. Warranties & Performance Standards</h2>
            <p>
              Nexura Enterprises builds digital systems to enterprise performance standards. While we engineer robust technical SEO, page speed, and conversion pathways, commercial sales outcomes depend on market conditions, product value, and ongoing client operations.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">6. Contact Information</h2>
            <p className="text-xs text-slate-700 font-medium">
              Nexura Enterprises<br />
              Email: <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong><br />
              WhatsApp / WhatsApp Call: <strong className="text-[#14B8A6]">+1 (516) 835-5018</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
