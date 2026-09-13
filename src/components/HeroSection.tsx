"use client";

import React from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { VideoPlayer } from "./VideoPlayer";
import { Play, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-accent-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-card border border-surface-border mb-6 text-xs font-semibold text-gray-300 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
              I Create Videos That Make People{" "}
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent">
                Stop Scrolling.
              </span>
            </h1>

            {/* Roles */}
            <h2 className="text-lg sm:text-xl font-bold text-gray-300 mb-6 flex flex-wrap items-center gap-2">
              <span>Video Editor</span>
              <span className="text-primary-500">•</span>
              <span>AI Video Creator</span>
              <span className="text-primary-500">•</span>
              <span>Digital Marketer</span>
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-2xl shadow-xl shadow-primary-600/25 transition-all duration-300 active:scale-95 group"
              >
                <Play size={16} className="fill-white" />
                <span>View My Work</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-gray-200 bg-surface-card hover:bg-white/10 border border-surface-border rounded-2xl transition-all duration-300 active:scale-95 group"
              >
                <span>Contact Me</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Key highlights pills */}
            <div className="mt-10 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary-400" />
                <span>Short-form Reels & TikTok</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary-400" />
                <span>Generative AI Workflows</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-primary-400" />
                <span>Performance Marketing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Featured Video Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 -z-10 animate-pulse-slow"></div>
              
              <div className="bg-surface/90 border border-surface-border rounded-3xl p-3 shadow-2xl backdrop-blur-xl">
                <VideoPlayer
                  src={PERSONAL_INFO.featuredHeroVideo}
                  poster={PERSONAL_INFO.featuredHeroPoster}
                  title="Featured Showreel 2025"
                  aspectRatio="16/9"
                  autoplay={true}
                  loop={true}
                />
                
                <div className="mt-4 px-2 pb-2 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Sparkles size={14} className="text-primary-400" />
                      Featured Creative Showreel
                    </h3>
                    <p className="text-xs text-gray-400">
                      Isaac Ahmad Kurdi • Creative Work
                    </p>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                    2025 Edition
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
