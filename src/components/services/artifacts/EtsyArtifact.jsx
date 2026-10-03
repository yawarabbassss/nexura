import React from 'react';
import { ShoppingBag, Tag, Sparkles, TrendingUp } from 'lucide-react';

export const EtsyArtifact = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-3.5 space-y-3 shadow-xs hover:shadow-md transition-shadow font-sans">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-[#0F2B2A] font-bold">
          <ShoppingBag className="w-3.5 h-3.5 text-[#F97316]" />
          <span>Etsy Search Placement</span>
        </div>
        <span className="px-2 py-0.5 text-[9px] bg-[#F97316] text-white rounded-full font-bold">
          Bestseller #1
        </span>
      </div>

      <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-bold text-[#0F2B2A]">
          <span>Shop Order Conversion</span>
          <span className="text-[#14B8A6] flex items-center gap-0.5"><TrendingUp className="w-3 h-3" /> +194% Orders</span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold">
          <Tag className="w-3 h-3 text-[#F97316]" /> 13/13 Tags & Titles Re-Architected
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1">
        <span className="flex items-center gap-1 text-[#0F2B2A] font-bold">
          <Sparkles className="w-3 h-3 text-[#F97316]" /> Etsy Rank #1 Page
        </span>
        <span className="text-[#14B8A6] font-bold">High Buyer Intent</span>
      </div>
    </div>
  );
};
