"use client";

import React from "react";
import { STATS, SHOW_STATS_SECTION } from "@/data/portfolioData";
import { Video, Gamepad2, Award, Layers } from "lucide-react";

export const CredibilitySection: React.FC = () => {
  if (!SHOW_STATS_SECTION) return null;

  const getStatIcon = (icon: string) => {
    switch (icon) {
      case "Video":
        return <Video size={24} className="text-primary-400" />;
      case "Gamepad2":
        return <Gamepad2 size={24} className="text-accent-400" />;
      case "Award":
        return <Award size={24} className="text-primary-400" />;
      case "Layers":
        return <Layers size={24} className="text-accent-400" />;
      default:
        return <Video size={24} className="text-primary-400" />;
    }
  };

  return (
    <section className="py-16 relative bg-gradient-to-r from-surface via-[#11192e] to-surface border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-3xl bg-surface-card/80 border border-surface-border backdrop-blur-md hover:border-primary-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-surface border border-surface-border flex items-center justify-center mb-3">
                {getStatIcon(stat.icon)}
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
