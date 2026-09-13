"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Linkedin, Instagram, Youtube, Video, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#060911] border-t border-surface-border text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-surface-border/60">
          
          {/* Logo & Headline */}
          <div>
            <a href="#hero" className="text-xl font-black text-white tracking-wider">
              {PERSONAL_INFO.name.toUpperCase()}
            </a>
            <p className="text-xs text-gray-400 mt-1">
              Video Editor • AI Video Creator • Digital Marketer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={PERSONAL_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href={PERSONAL_INFO.contact.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>
            <a
              href={PERSONAL_INFO.contact.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-surface-card border border-surface-border text-gray-300 hover:text-white hover:border-primary-500/40 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Isaac Ahmad Kurdi. All rights reserved.</p>
          <p className="font-mono">Built for high performance & creative impact</p>
        </div>
      </div>
    </footer>
  );
};
