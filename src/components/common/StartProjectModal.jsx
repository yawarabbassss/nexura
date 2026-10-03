import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { captureLead } from '../../utils/leadCapture';

export const StartProjectModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'SEO & Search Growth',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Capture lead silently and dispatch alert to yaawarabbass@gmail.com
    captureLead({
      type: 'Start Project Form',
      name: form.name,
      email: form.email,
      domain: form.company || 'Direct Inquiry',
      niche: form.service,
      notes: form.details
    });

    const mailtoSubject = encodeURIComponent(`New Project Inquiry: ${form.service} - ${form.company || form.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Nexura Enterprises,\n\nI would like to start a project.\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService Required: ${form.service}\n\nProject Context:\n${form.details}\n\nThank you.`
    );
    
    window.location.href = `mailto:help.nexura@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/15168355018?text=${encodeURIComponent(`Hi Nexura Enterprises, I'd like to start a project. My name is ${form.name || 'a prospect'} and I need help with ${form.service}.`)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#0F2B2A] hover:border-[#F97316] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in fade-in">
            <div className="w-14 h-14 rounded-full bg-[#0F2B2A]/5 border border-[#14B8A6] flex items-center justify-center mx-auto text-[#F97316]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[#0F2B2A]">Project Request Sent</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
              Your message is opening in your email client addressed to <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong>. You can also message us directly on WhatsApp for instant response.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#F97316] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Continue on WhatsApp</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-mono font-bold"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-mono font-bold border border-[#14B8A6]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Direct Project Intake</span>
            </div>

            <h3 className="text-2xl font-extrabold font-heading text-[#0F2B2A]">
              Start a Project with Nexura
            </h3>

            <p className="text-xs text-slate-600 font-sans">
              Submitting this form prepares your inquiry directly for <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Company Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Enterprise"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Service Needed</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none"
                >
                  <option value="SEO & Search Growth">SEO & Search Growth</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI Chatbots">AI Chatbots</option>
                  <option value="AI Solutions">AI Solutions</option>
                  <option value="Business Automation">Business Automation</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Custom Technology">Custom Technology</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-700 mb-1 font-bold">Project Details & Context</label>
              <textarea
                rows={3}
                placeholder="Tell us what you're trying to build, improve, automate, or grow..."
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Message to help.nexura@gmail.com</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
