import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';
import { captureLead } from '../../utils/leadCapture';

export const ContactSection = ({ onOpenProjectModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    servicesNeeded: [],
    context: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'SEO & Search Growth',
    'High-Performance Web Dev',
    '24/7 AI Chatbots',
    'Practical AI Solutions',
    'Business Automation',
    'Digital Growth Marketing'
  ];

  const handleServiceToggle = (service) => {
    setFormState(prev => {
      const exists = prev.servicesNeeded.includes(service);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter(s => s !== service) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, service] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Silently capture lead & dispatch alert to yaawarabbass@gmail.com
    captureLead({
      type: 'Contact Section Form',
      name: formState.name,
      email: formState.email,
      domain: formState.company || 'Direct Contact',
      niche: formState.servicesNeeded.join(', ') || 'General Growth',
      notes: formState.context
    });

    const mailtoSubject = encodeURIComponent(`Project Inquiry from ${formState.name} (${formState.company || 'Direct'})`);
    const mailtoBody = encodeURIComponent(
      `Hello Nexura Enterprises,\n\nName: ${formState.name}\nEmail: ${formState.email}\nCompany: ${formState.company}\nServices Needed: ${formState.servicesNeeded.join(', ')}\n\nProject Scope:\n${formState.context}\n\nThank you.`
    );
    window.location.href = `mailto:help.nexura@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/15168355018?text=Hi%20Nexura%20Enterprises%2C%20I%27d%20like%20to%20discuss%20a%20new%20project.%20My%20name%20is%20${encodeURIComponent(formState.name || 'a prospect')}.`;

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F2B2A]/5 text-[#0F2B2A] text-xs font-heading font-bold border border-[#14B8A6]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Start a Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2B2A] tracking-tight">
            Have a business problem <span className="text-[#14B8A6]">worth solving</span>?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Tell us what you're trying to build, improve, automate, or grow. We’ll review your goals and construct a tailored growth roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Reach */}
          <div className="lg:col-span-5 space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-xl font-bold font-heading text-[#0F2B2A]">
              Direct Communication Channels
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed">
              Reach out to our strategic lead team directly via WhatsApp Call, WhatsApp Chat, or Email:
            </p>

            <div className="space-y-4 pt-2">
              {/* WhatsApp & WhatsApp Call Card */}
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-[#F97316]/10 border border-[#F97316]/40 hover:border-[#F97316] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316] flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-sans text-[#F97316] font-bold">WhatsApp & WhatsApp Call</div>
                    <div className="text-sm text-[#0F2B2A] font-heading font-bold">+1 (516) 835-5018</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Email Card */}
              <a
                href="mailto:help.nexura@gmail.com"
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#14B8A6] transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F2B2A]/5 border border-slate-200 flex items-center justify-center text-[#14B8A6]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-sans text-slate-500 font-bold">Direct Email</div>
                    <div className="text-sm text-[#0F2B2A] font-heading font-bold">help.nexura@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#14B8A6] transition-colors" />
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs font-sans text-slate-600">
              <span className="text-[#14B8A6] font-bold">Response Commitment:</span> We respond to all project inquiries within 4 business hours.
            </div>
          </div>

          {/* Right Column: Project Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-[#0F2B2A]/5 border border-[#14B8A6] flex items-center justify-center mx-auto text-[#14B8A6]">
                  <CheckCircle2 className="w-8 h-8 text-[#F97316]" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-[#0F2B2A]">Inquiry Received</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto font-sans leading-relaxed">
                  Your message has been addressed to <strong className="text-[#0F2B2A]">help.nexura@gmail.com</strong>. A Nexura strategist will review your scope and follow up shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-[#F97316] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-heading font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-bold font-heading text-[#0F2B2A]">
                  Project Inquiry Form
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans text-slate-700 mb-1.5 font-bold">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-slate-700 mb-1.5 font-bold">Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-slate-700 mb-1.5 font-bold">Company / Organization</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Enterprise"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans text-slate-700 mb-2 font-bold">What do you need help with?</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableServices.map((service) => {
                      const isSelected = formState.servicesNeeded.includes(service);
                      return (
                        <div
                          key={service}
                          onClick={() => handleServiceToggle(service)}
                          className={`p-2.5 rounded-xl border text-[11px] font-sans font-bold cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#0F2B2A] border-[#14B8A6] text-white'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {service}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans text-slate-700 mb-1.5 font-bold">Project Scope & Context</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your target outcomes, timeline, or current technical bottlenecks..."
                    value={formState.context}
                    onChange={(e) => setFormState({ ...formState, context: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#14B8A6] rounded-xl px-4 py-3 text-xs text-slate-900 placeholder:text-slate-400 outline-none transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0F2B2A] hover:bg-[#14B8A6] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to help.nexura@gmail.com</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
