import { useEffect } from 'react';

export const SEOHead = ({ title, description, canonicalUrl }) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = `${title} | Nexura Enterprises`;
    } else {
      document.title = `Nexura Enterprises — Digital Growth × Technology Systems`;
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        description ||
          'Nexura Enterprises helps forward-thinking businesses use SEO, high-performance websites, AI solutions, chatbots, automation, and digital marketing to scale revenue and visibility.'
      );
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl || window.location.href);
    }
  }, [title, description, canonicalUrl]);

  return null;
};
