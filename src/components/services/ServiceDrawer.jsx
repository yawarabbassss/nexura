import React from 'react';
import { X, ArrowRight, CheckCircle2, MessageSquare, Shield } from 'lucide-react';

export const ServiceDrawer = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappInquiryUrl = `https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#0F2B2A] hover:border-[#F97316] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge & Step */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-sans text-[#14B8A6] bg-[#0F2B2A]/5 px-3 py-1 rounded-full border border-[#14B8A6]/30 font-bold">
            Service {service.number}
          </span>
          <span className="text-xs font-sans text-slate-500 font-bold">
            {service.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#0F2B2A] mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-sans text-[#F97316] font-bold mb-4">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-700 font-sans leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Key Deliverables & Features */}
        <div className="space-y-3 mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <h4 className="text-xs font-sans font-bold text-[#0F2B2A] uppercase tracking-wider mb-2">
            Key Capabilities & Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Commercial Outcome */}
        <div className="p-4 bg-[#0F2B2A] text-white border border-[#14B8A6]/30 rounded-2xl mb-8 flex items-start gap-3 shadow-md">
          <Shield className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-sans text-[#14B8A6] font-bold">Expected Commercial Outcome</div>
            <div className="text-xs text-slate-200 mt-0.5">{service.outcome}</div>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-1/2 py-3 rounded-full bg-[#F97316] hover:bg-[#F97316]/90 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss Pricing on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-1/2 py-3 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span>Close View</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
