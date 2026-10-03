import React from 'react';
import { Mail, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export const TopBar = () => {
  const whatsappPricingUrl = "https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20know%20your%20pricing%20and%20packages.";

  return (
    <div className="bg-[#070A0D] border-b border-slate-800 text-[11px] font-mono py-1.5 px-4 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
          <span>BUILD THE SYSTEM. GROW THE BUSINESS.</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-[#2DD4BF] hidden md:inline">Response Time: &lt; 4 Hours</span>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:help.nexura@gmail.com" className="flex items-center gap-1 hover:text-[#2DD4BF] transition-colors">
            <Mail className="w-3 h-3 text-[#14B8A6]" /> help.nexura@gmail.com
          </a>
          <span className="text-slate-700">•</span>
          <a href="tel:+15168355018" className="flex items-center gap-1 hover:text-[#2DD4BF] transition-colors">
            <Phone className="w-3 h-3 text-[#14B8A6]" /> +1 (516) 835-5018
          </a>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <a
            href={whatsappPricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-[#F97316] hover:underline font-semibold"
          >
            <MessageSquare className="w-3 h-3 text-[#F97316]" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
