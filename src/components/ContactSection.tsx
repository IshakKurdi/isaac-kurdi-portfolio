"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Video,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Video Editing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end simulation:
    setSubmitted(true);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: PERSONAL_INFO.contact.linkedin,
      icon: <Linkedin size={20} />,
      color: "hover:text-[#0a66c2]",
    },
    {
      name: "Instagram",
      href: PERSONAL_INFO.contact.instagram,
      icon: <Instagram size={20} />,
      color: "hover:text-[#e4405f]",
    },
    {
      name: "TikTok",
      href: PERSONAL_INFO.contact.tiktok,
      icon: <Video size={20} />,
      color: "hover:text-[#ff0050]",
    },
    {
      name: "YouTube",
      href: PERSONAL_INFO.contact.youtube,
      icon: <Youtube size={20} />,
      color: "hover:text-[#ff0000]",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-primary-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: CTA & Direct Contact info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-400">
              <Sparkles size={14} />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Have an idea? <br />
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                Let's create something people remember.
              </span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed max-w-lg">
              I'm available for freelance projects, creative collaborations and opportunities in video editing, AI content creation, and digital marketing.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:scale-110 transition-transform">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Email</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {PERSONAL_INFO.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 group-hover:scale-110 transition-transform">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase">Phone / WhatsApp</h4>
                  <p className="text-sm font-semibold text-white group-hover:text-primary-400 transition-colors">
                    {PERSONAL_INFO.contact.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Connect Across Platforms
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-2xl bg-surface-card border border-surface-border text-gray-300 hover:border-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-surface-border shadow-2xl space-y-6">
              
              <div className="border-b border-surface-border pb-4">
                <h3 className="text-xl font-bold text-white mb-1">Send Me a Message</h3>
                <p className="text-xs text-gray-400">Fill out the details below and I'll get back to you promptly.</p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Service / Project Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="Video Editing">Video Editing & Short-form</option>
                      <option value="AI Video Creation">AI Video Creation & Concepts</option>
                      <option value="Digital Marketing">Digital Marketing & Ads</option>
                      <option value="Social Media Content">Social Media Content Strategy</option>
                      <option value="Game & App Marketing">Game & App Marketing (ASO)</option>
                      <option value="Creative Design">Creative & Graphic Design</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your goals, timeline, or vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-surface-border text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-xl shadow-lg shadow-primary-600/25 transition-all duration-300 active:scale-95"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                  {/* Dev note for email backend integration */}
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-[11px] text-gray-400">
                    <AlertCircle size={16} className="text-primary-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Developer Note:</strong> To receive real email notifications directly to your inbox, connect this form to <strong>Resend</strong>, <strong>Formspree</strong>, or <strong>EmailJS</strong> in <code className="text-primary-300">src/components/ContactSection.tsx</code>.
                    </span>
                  </div>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{formData.service}</strong> has been received. Isaac will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 text-xs font-semibold text-primary-400 bg-primary-500/10 rounded-xl hover:bg-primary-500/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
