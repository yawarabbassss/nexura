import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactSection } from '../components/contact/ContactSection';
import { PricingFunnelCTA } from '../components/conversion/PricingFunnelCTA';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact Us & Get a Growth Plan"
        description="Have a business problem worth solving? Tell Nexura Enterprises what you're trying to build, improve, automate, or grow."
      />
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>

        <ContactSection />
        <PricingFunnelCTA />
      </div>
    </>
  );
};
