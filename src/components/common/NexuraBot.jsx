import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageSquare, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';

export const NexuraBot = ({ onOpenProjectModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hi! I'm Alissa, your Nexura AI Assistant. How can I help move your business forward today?",
      options: [
        { label: '💰 Pricing & Scoping', action: 'pricing' },
        { label: '🚀 Core Services', action: 'services' },
        { label: '⚡ How Process Works', action: 'process' },
        { label: '📱 WhatsApp Direct / Call', action: 'whatsapp' },
        { label: '✍️ Start a Project', action: 'start' }
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  // Female DP avatar for Alissa (user uploaded image)
  const alissaAvatar = "/alissa.png";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAction = (action, labelText) => {
    const userMsg = labelText || action;
    const newMessages = [...messages, { sender: 'user', text: userMsg }];

    let reply = '';
    let options = [];

    if (action === 'pricing' || userMsg.toLowerCase().includes('price') || userMsg.toLowerCase().includes('cost') || userMsg.toLowerCase().includes('package')) {
      reply = "Every project at Nexura is scoped specifically around your commercial objectives, technology stack, and timeline. Connect directly with our lead strategist on WhatsApp for an immediate consultation!";
      options = [
        { label: 'Chat on WhatsApp for Pricing', action: 'open_whatsapp' },
        { label: 'Start a Project Form', action: 'start' }
      ];
    } else if (action === 'services' || userMsg.toLowerCase().includes('service') || userMsg.toLowerCase().includes('offer') || userMsg.toLowerCase().includes('do')) {
      reply = "Nexura provides 7 connected growth services:\n\n1. SEO & Search Growth\n2. High-Performance Web Dev\n3. AI Chatbots\n4. Enterprise AI Solutions\n5. Workflow Automation\n6. Digital Growth Marketing\n7. Custom Technology";
      options = [
        { label: 'SEO Info', action: 'seo' },
        { label: 'Web Dev Info', action: 'web' },
        { label: 'AI & Chatbots Info', action: 'ai' },
        { label: 'Automation Info', action: 'automation' }
      ];
    } else if (action === 'seo' || userMsg.toLowerCase().includes('seo') || userMsg.toLowerCase().includes('rank') || userMsg.toLowerCase().includes('google')) {
      reply = "Our SEO services build deep technical architecture, keyword strategy, on-page optimization, and authority structure that brings active high-intent buyers to your site.";
      options = [{ label: 'Discuss SEO on WhatsApp', action: 'whatsapp_seo' }];
    } else if (action === 'web' || userMsg.toLowerCase().includes('web') || userMsg.toLowerCase().includes('site') || userMsg.toLowerCase().includes('react')) {
      reply = "We engineer modern, sub-second React websites designed around high conversion rates, technical SEO, and fluid responsive UX.";
      options = [{ label: 'Discuss Web Dev on WhatsApp', action: 'whatsapp_web' }];
    } else if (action === 'ai' || userMsg.toLowerCase().includes('ai') || userMsg.toLowerCase().includes('bot') || userMsg.toLowerCase().includes('chat')) {
      reply = "We deploy custom 24/7 AI Chatbots & Practical LLM integrations on WhatsApp and websites to screen prospects, answer FAQs, and automate lead intake.";
      options = [{ label: 'Discuss AI on WhatsApp', action: 'whatsapp_ai' }];
    } else if (action === 'automation' || userMsg.toLowerCase().includes('automation') || userMsg.toLowerCase().includes('zapier') || userMsg.toLowerCase().includes('workflow')) {
      reply = "We orchestrate Make, Zapier, n8n, and custom API pipelines between your CRM, forms, alerts, and operational tools to eliminate manual work.";
      options = [{ label: 'Discuss Automations on WhatsApp', action: 'whatsapp_auto' }];
    } else if (action === 'process' || userMsg.toLowerCase().includes('process') || userMsg.toLowerCase().includes('step') || userMsg.toLowerCase().includes('how')) {
      reply = "Our 5-step growth roadmap is: 01 Discover (audit & research) → 02 Strategize (growth blueprint) → 03 Build (precision execution) → 04 Launch (testing & zero-downtime) → 05 Grow (continuous scale).";
      options = [{ label: 'Start Step 01 Discover', action: 'start' }];
    } else if (action === 'whatsapp' || action === 'open_whatsapp' || userMsg.toLowerCase().includes('whatsapp') || userMsg.toLowerCase().includes('phone') || userMsg.toLowerCase().includes('call')) {
      reply = "You can contact Nexura directly via WhatsApp / WhatsApp Call at +1 (516) 835-5018. Response commitment: under 4 business hours!";
      window.open('https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20chat.', '_blank');
      options = [{ label: 'Re-open WhatsApp Chat', action: 'open_whatsapp' }];
    } else if (action === 'whatsapp_seo') {
      window.open('https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20SEO%20and%20Search%20Growth.', '_blank');
      reply = "Opening WhatsApp for SEO inquiry...";
    } else if (action === 'whatsapp_web') {
      window.open('https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20Web%20Development.', '_blank');
      reply = "Opening WhatsApp for Web Development inquiry...";
    } else if (action === 'whatsapp_ai') {
      window.open('https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20AI%20Chatbot%20Development.', '_blank');
      reply = "Opening WhatsApp for AI Chatbot inquiry...";
    } else if (action === 'whatsapp_auto') {
      window.open('https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20Workflow%20Automation.', '_blank');
      reply = "Opening WhatsApp for Automation inquiry...";
    } else if (action === 'start') {
      reply = "Opening project inquiry form. You can also email us directly at help.nexura@gmail.com!";
      if (onOpenProjectModal) onOpenProjectModal();
      options = [{ label: 'Email help.nexura@gmail.com', action: 'email' }];
    } else if (action === 'email') {
      window.location.href = 'mailto:help.nexura@gmail.com?subject=Nexura%20Enterprises%20Inquiry';
      reply = "Opening email client for help.nexura@gmail.com...";
    } else {
      reply = "I'm Alissa, your Nexura Assistant! Nexura connects SEO, Web Platforms, AI Chatbots, Automations, and Digital Marketing. Would you like to get pricing or start a project form?";
      options = [
        { label: '💰 Get Pricing on WhatsApp', action: 'pricing' },
        { label: '✍️ Start a Project Form', action: 'start' }
      ];
    }

    setMessages([...newMessages, { sender: 'bot', text: reply, options }]);
  };

  const handleSendText = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput('');
    handleAction('text_input', text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Circular Floating Trigger Button with Alissa Avatar */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-14 h-14 rounded-full bg-[#0F2B2A] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-[#14B8A6] p-0.5"
          title="Chat with Alissa - Nexura AI Assistant"
        >
          <img
            src={alissaAvatar}
            alt="Alissa AI Assistant"
            className="w-full h-full object-cover rounded-full"
          />
          {/* Online Indicator Badge */}
          <span className="w-3.5 h-3.5 rounded-full bg-[#14B8A6] border-2 border-white absolute top-0 right-0 animate-pulse" />
          
          {/* Subtle Hover Label Pill */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#0F2B2A] text-white text-xs font-bold font-heading px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-[#14B8A6]/40">
            Ask Alissa 👋
          </span>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[500px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#0F2B2A] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              {/* Alissa Circular Female DP */}
              <div className="relative w-9 h-9 rounded-full border-2 border-[#14B8A6] overflow-hidden p-0.5 bg-white shrink-0">
                <img
                  src={alissaAvatar}
                  alt="Alissa"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] border-2 border-[#0F2B2A] absolute bottom-0 right-0" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-white font-heading">Alissa</div>
                <div className="text-[10px] text-[#14B8A6] flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" /> Online 24/7 • Nexura AI Assistant
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                {msg.sender === 'bot' && (
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] text-slate-400 font-semibold">
                    <span>Alissa</span>
                  </div>
                )}
                <div
                  className={`px-3.5 py-2.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#F97316] text-white font-semibold rounded-tr-none shadow-xs'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none whitespace-pre-line shadow-xs font-medium'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons */}
                {msg.options && msg.options.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAction(opt.action, opt.label)}
                        className="text-[10px] font-sans font-bold px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#0F2B2A] text-[#0F2B2A] hover:text-white border border-slate-200 hover:border-[#0F2B2A] transition-all text-left shadow-xs"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Text Input */}
          <form onSubmit={handleSendText} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask Alissa about services, pricing..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 outline-none font-medium"
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-[#F97316] text-white font-bold hover:bg-[#F97316]/90 transition-all shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
