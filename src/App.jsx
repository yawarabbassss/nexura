import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackgroundNoise } from './components/common/BackgroundNoise';
import { Schema } from './components/common/Schema';
import { StartProjectModal } from './components/common/StartProjectModal';
import { NexuraBot } from './components/common/NexuraBot';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { WhyNexuraPage } from './pages/WhyNexuraPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { GrowthEnginePage } from './pages/GrowthEnginePage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

import { FreeAIAuditPage } from './pages/FreeAIAuditPage';
import { CreativeGeneratorPage } from './pages/CreativeGeneratorPage';
import { BlogImageGeneratorPage } from './pages/BlogImageGeneratorPage';
import { YouTubeThumbnailPage } from './pages/YouTubeThumbnailPage';
import { SitemapAnalyzerPage } from './pages/SitemapAnalyzerPage';
import { WhiteLabelPage } from './pages/WhiteLabelPage';

export function App() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  const handleOpenModal = () => setProjectModalOpen(true);
  const handleCloseModal = () => setProjectModalOpen(false);

  return (
    <Router>
      <div className="relative min-h-screen bg-white text-slate-900 selection:bg-[#14B8A6]/20 selection:text-[#0F2B2A]">
        <Schema />
        <BackgroundNoise />

        <Navbar onOpenProjectModal={handleOpenModal} />
        
        <Routes>
          <Route path="/" element={<HomePage onOpenProjectModal={handleOpenModal} />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/why-nexura" element={<WhyNexuraPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/growth-engine" element={<GrowthEnginePage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsPage />} />

          {/* Interactive Tools & Agency White Label Routes */}
          <Route path="/free-ai-audit" element={<FreeAIAuditPage />} />
          <Route path="/tools/creative-generator" element={<CreativeGeneratorPage />} />
          <Route path="/tools/blog-image-generator" element={<BlogImageGeneratorPage />} />
          <Route path="/tools/youtube-thumbnail-generator" element={<YouTubeThumbnailPage />} />
          <Route path="/tools/sitemap-analyzer" element={<SitemapAnalyzerPage />} />
          <Route path="/whitelabel" element={<WhiteLabelPage />} />

          <Route path="*" element={<HomePage onOpenProjectModal={handleOpenModal} />} />
        </Routes>

        <Footer />

        {/* Global Email Project Modal */}
        <StartProjectModal isOpen={projectModalOpen} onClose={handleCloseModal} />

        {/* Custom Rule-Based Decision Tree Chatbot */}
        <NexuraBot onOpenProjectModal={handleOpenModal} />
      </div>
    </Router>
  );
}

export default App;
