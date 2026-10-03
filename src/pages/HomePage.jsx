import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { Hero } from '../components/hero/Hero';
import { ProblemSection } from '../components/home/ProblemSection';
import { ServicesSection } from '../components/services/ServicesSection';
import { WhyNexura } from '../components/why/WhyNexura';
import { IndustryGrid } from '../components/home/IndustryGrid';
import { SuccessStoriesSection } from '../components/home/SuccessStoriesSection';
import { GrowthEngine } from '../components/growth-engine/GrowthEngine';
import { ProcessSection } from '../components/process/ProcessSection';
import { DigitalEcosystem } from '../components/ecosystem/DigitalEcosystem';
import { FAQSection } from '../components/home/FAQSection';
import { PricingFunnelCTA } from '../components/conversion/PricingFunnelCTA';
import { ContactSection } from '../components/contact/ContactSection';

export const HomePage = ({ onOpenProjectModal }) => {
  return (
    <>
      <SEOHead
        title="Digital Growth & Technology Systems"
        description="Nexura Enterprises combines SEO, high-performance web development, AI solutions, chatbots, automations, and digital marketing into a connected commercial engine."
      />
      <main>
        <Hero onOpenProjectModal={onOpenProjectModal} />
        <ProblemSection />
        <ServicesSection />
        <WhyNexura />
        <IndustryGrid />
        <SuccessStoriesSection />
        <GrowthEngine />
        <DigitalEcosystem />
        <ProcessSection />
        <FAQSection />
        <PricingFunnelCTA onOpenProjectModal={onOpenProjectModal} />
        <ContactSection onOpenProjectModal={onOpenProjectModal} />
      </main>
    </>
  );
};
