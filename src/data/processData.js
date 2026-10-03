import { Search, Target, Zap, TrendingUp } from 'lucide-react';

export const processData = [
  {
    step: '01',
    week: 'Week 1',
    title: 'Discovery & Audit',
    icon: Search,
    description: 'We dive deep into your business, competitors, and market to find where the opportunities are.',
    deliverables: [
      'Complete website and SEO audit',
      'Competitor analysis and market research',
      'Current ad performance review',
      'Goal alignment and KPI definition',
      'AI crawl analysis that identifies 200+ ranking factors in minutes'
    ]
  },
  {
    step: '02',
    week: 'Week 2',
    title: 'Strategy & Planning',
    icon: Target,
    description: 'We create a custom roadmap tailored to your industry, budget, and growth objectives.',
    deliverables: [
      'Channel selection and budget allocation',
      'Keyword and audience targeting strategy',
      'Content calendar development',
      'Conversion tracking setup plan',
      'AI-modeled forecasts that predict ROI before a dollar is spent'
    ]
  },
  {
    step: '03',
    week: 'Weeks 3-4',
    title: 'Launch & Execute',
    icon: Zap,
    description: 'Our specialists bring the strategy to life across all selected marketing channels.',
    deliverables: [
      'Campaign setup and creative development',
      'Technical SEO implementation',
      'Landing page optimization',
      'Tracking and analytics configuration',
      'Automated A/B test deployment powered by AI creative analysis'
    ]
  },
  {
    step: '04',
    week: 'Ongoing',
    title: 'Optimize & Scale',
    icon: TrendingUp,
    description: 'We continuously analyze, test, and improve to maximize your return on investment.',
    deliverables: [
      'Weekly performance monitoring',
      'A/B testing and optimization',
      'Monthly strategy reviews',
      'Quarterly business impact reports',
      'Machine-learning models that continuously refine targeting and bidding'
    ]
  }
];
