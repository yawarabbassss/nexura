import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Nexura Enterprises"
        description="Official Privacy Policy for Nexura Enterprises detailing data collection, processing, security, and WhatsApp communications."
      />
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

          <h1 className="text-4xl font-extrabold font-heading text-[#0F2B2A]">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#F97316] font-bold">Effective Date: September 9, 2026</p>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 text-sm text-slate-700 font-sans leading-relaxed shadow-sm">
            <p>
              At <strong>Nexura Enterprises</strong> (accessible at <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong> / WhatsApp: <strong className="text-[#14B8A6]">+1 (516) 835-5018</strong>), protecting the privacy and security of our clients, visitors, and prospective partners is fundamental to our commercial operations.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">1. Information We Collect</h2>
            <p>
              We collect information that you directly provide when using our website, initiating project inquiry forms, running our Free AI Audit tool, interacting with our rule-based AI Assistant chatbot, or contacting us via email and WhatsApp. This information includes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700 font-medium">
              <li>Full Name and Job Title</li>
              <li>Work Email Address (<strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong> intake)</li>
              <li>Company Name, Industry Vertical, and Website URL</li>
              <li>Project scope specifications, technical requirements, and target timeline</li>
              <li>Messaging history submitted through our interactive intake widgets or WhatsApp chat</li>
            </ul>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">2. Purpose of Data Processing</h2>
            <p>
              We use collected information strictly to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700 font-medium">
              <li>Evaluate commercial business requirements and deliver custom project proposals</li>
              <li>Perform requested technical SEO, page speed, and digital growth audits</li>
              <li>Provide white-label technical fulfillment services under signed non-disclosure agreements</li>
              <li>Communicate directly regarding project status, milestones, and strategic growth plans</li>
              <li>Maintain security, prevent fraudulent submissions, and optimize website performance</li>
            </ul>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">3. Data Sharing & Third-Party Protections</h2>
            <p>
              Nexura Enterprises does not sell, rent, or trade your personal or business data to third-party advertisers. Data is shared only with verified technical infrastructure providers required to execute web development, hosting, and AI workflow services under strict confidentiality agreements.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">4. WhatsApp & Instant Communications</h2>
            <p>
              When you interact with Nexura Enterprises via WhatsApp link or WhatsApp Call (<strong className="text-[#F97316]">+1 (516) 835-5018</strong>), messaging data is processed securely through WhatsApp's end-to-end encrypted infrastructure strictly for direct business intake.
            </p>

            <h2 className="text-xl font-bold font-heading text-[#0F2B2A] pt-2">5. Data Retention & Your Rights</h2>
            <p>
              You retain the right to request access to, correction of, or deletion of your personal contact data stored in our intake systems. To exercise these rights, email our team at <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong>.
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
