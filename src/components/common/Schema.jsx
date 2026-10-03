import React from 'react';
import { faqData } from '../../data/faqData';

export const Schema = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nexura Enterprises",
    "url": "https://nexuraenterprises.com",
    "logo": "https://nexuraenterprises.com/logo.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-516-835-5018",
      "contactType": "customer service",
      "email": "help.nexura@gmail.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://wa.me/15168355018"
    ],
    "knowsAbout": [
      "Search Engine Optimization",
      "Web Development",
      "Artificial Intelligence",
      "Chatbots",
      "Workflow Automation",
      "Digital Marketing"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Nexura Enterprises",
    "url": "https://nexuraenterprises.com"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
