import React from 'react';
import { Bot, Send } from 'lucide-react';

export const ChatbotArtifact = () => {
  return (
    <div className="w-full bg-[#FFFFFF] rounded-xl border border-slate-200 p-4 font-sans shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between bg-[#F8FAFC] px-3 py-2 rounded-t-lg border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0F2B2A] flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-[#2DD4BF]" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900 font-heading">Nexura 24/7 AI Bot</div>
            <div className="text-[9px] text-[#F97316] font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse" /> Active Lead Qualification
            </div>
          </div>
        </div>
      </div>

      {/* Conversation Messages */}
      <div className="bg-[#F8FAFC]/80 p-3 rounded-b-lg border-x border-b border-slate-200 space-y-2.5 text-[11px]">
        <div className="flex justify-end">
          <div className="bg-[#0F2B2A] text-white px-3 py-1.5 rounded-2xl rounded-tr-none text-[11px] shadow-sm max-w-[85%] font-medium">
            Hi, we need to build an automated AI lead intake bot & web platform.
          </div>
        </div>

        <div className="flex justify-start gap-2">
          <div className="w-5 h-5 rounded-full bg-[#0F2B2A] flex items-center justify-center shrink-0 mt-1">
            <Bot className="w-3 h-3 text-[#2DD4BF]" />
          </div>
          <div className="bg-[#FFFFFF] text-slate-800 px-3 py-2 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm max-w-[85%] space-y-1.5">
            <div>Understood! We can deploy a 24/7 WhatsApp & web conversational chatbot synced to your CRM within 5 days.</div>
            <div className="flex flex-wrap gap-1 pt-1">
              <span className="px-2 py-0.5 bg-[#F97316]/10 text-[#EA580C] text-[9px] rounded-full border border-[#F97316]/30 font-mono font-bold">Book Strategy Call</span>
              <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[9px] rounded-full border border-slate-200 font-mono">View Architecture</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#FFFFFF] border border-slate-200 rounded-lg px-2.5 py-1.5 mt-2">
          <span className="text-slate-400 text-[10px] italic flex-1">Ask Nexura AI Assistant...</span>
          <Send className="w-3.5 h-3.5 text-[#F97316]" />
        </div>
      </div>
    </div>
  );
};
