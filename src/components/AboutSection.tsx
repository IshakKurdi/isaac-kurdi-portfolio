"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { User, Gamepad2, Rocket, MapPin, GraduationCap, CheckCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-surface/50 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Profile Card / Image Placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary-600/30 to-accent-600/30 rounded-3xl blur-xl opacity-70 -z-10" />

              <div className="bg-surface-card border border-surface-border rounded-3xl p-6 shadow-2xl space-y-6">
                {/* Photo Placeholder Box */}
                <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-br from-surface via-[#17223b] to-surface border border-surface-border overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
                  <div className="w-24 h-24 rounded-full bg-primary-500/10 border-2 border-primary-500/30 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-105 transition-transform shadow-xl">
                    <User size={48} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{PERSONAL_INFO.name}</h4>
                  <p className="text-xs text-primary-400 font-semibold mb-3">
                    Video Editor • AI Creator • Marketer
                  </p>
                  <span className="text-[11px] font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Replace image at /public/images/profile-placeholder.jpg
                  </span>
                </div>

                {/* Quick Info Items */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <MapPin size={16} className="text-primary-400 shrink-0" />
                    <span>Based in Lebanon (Working Worldwide)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <GraduationCap size={16} className="text-primary-400 shrink-0" />
                    <span>19-year-old University Student & Creator</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-300">
                    <Gamepad2 size={16} className="text-primary-400 shrink-0" />
                    <span>Founder at Fun Forge Labs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-400">
              <User size={14} />
              <span>Personal Introduction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Behind the Work
            </h2>

            <div className="space-y-4 text-base text-gray-300 leading-relaxed">
              {PERSONAL_INFO.bioFull.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Featured Studio Box: Fun Forge Labs */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-primary-950/40 to-accent-950/30 border border-primary-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary-500/20 text-primary-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Fun Forge Labs</h3>
                  <p className="text-xs text-primary-300">Independent Game Studio Founder</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Published original titles including <strong>Hoop Hero</strong>, <strong>Park Inc</strong>, and <strong>Lua Lander</strong>. I handle everything from Unity game development to visual trailer creation, App Store Optimization (ASO), and Meta advertising.
              </p>
            </div>

            {/* Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 font-medium">Hands-on practical experience over pure theory</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle size={18} className="text-primary-400 shrink-0 mt-0.5" />
                <span className="text-xs text-gray-300 font-medium">AI-accelerated creative production workflows</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
