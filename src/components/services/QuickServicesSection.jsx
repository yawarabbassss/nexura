import React from 'react';
import { quickServicesData } from '../../data/servicesData';
import { Zap, CheckCircle2, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export const QuickServicesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-heading font-bold border border-[#14B8A6]/30">
              <Zap className="w-3.5 h-3.5 text-[#F97316]" />
              <span>One-Time Quick Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
              Fast-turnaround <span className="text-[#14B8A6]">standalone solutions</span>.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-sans leading-relaxed">
            Need immediate technical setups without long retainer commitments? Get standalone Google, Analytics, Audit, and Etsy services deployed fast.
          </p>
        </div>

        {/* Quick Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#14B8A6] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans text-[#14B8A6] bg-[#0F2B2A]/5 px-2.5 py-1 rounded-full border border-[#14B8A6]/30 font-bold uppercase">
                    {service.category}
                  </span>
                  <span className="text-[10px] font-sans text-[#F97316] flex items-center gap-1 font-bold">
                    <Clock className="w-3 h-3" /> {service.turnaround}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-heading text-[#0F2B2A]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-1.5 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-2 space-y-2 border-t border-slate-100">
                  <div className="text-[11px] font-bold text-[#0F2B2A] font-heading uppercase tracking-wider">What's Included</div>
                  <div className="space-y-1.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <a
                  href={`https://wa.me/15168355018?text=${encodeURIComponent(service.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#0F2B2A] hover:bg-[#F97316] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order Quick Setup on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
