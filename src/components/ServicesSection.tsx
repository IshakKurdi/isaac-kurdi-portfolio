"use client";

import React from "react";
import { SERVICES } from "@/data/portfolioData";
import {
  Video,
  Sparkles,
  Share2,
  TrendingUp,
  Gamepad2,
  Palette,
  ArrowRight,
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Video":
        return <Video className="w-6 h-6 text-primary-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-accent-400" />;
      case "Share2":
        return <Share2 className="w-6 h-6 text-primary-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-accent-400" />;
      case "Gamepad2":
        return <Gamepad2 className="w-6 h-6 text-primary-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-accent-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-primary-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 px-3.5 py-1.5 rounded-full border border-primary-500/20 mb-3">
            Services & Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Combining creative storytelling, AI tools, and growth marketing to deliver impactful results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-600/10 flex flex-col justify-between"
            >
              <div>
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-surface/80 border border-surface-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary-500/40 transition-all duration-300 shadow-inner">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-surface-border/60">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-white/5 border border-surface-border text-gray-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
