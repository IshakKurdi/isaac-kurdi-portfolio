"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Wrench, Video, Cpu, TrendingUp, Palette, Code2 } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Video Production":
        return <Video size={18} className="text-primary-400" />;
      case "AI & Generative Tools":
        return <Cpu size={18} className="text-accent-400" />;
      case "Digital Marketing":
        return <TrendingUp size={18} className="text-primary-400" />;
      case "Design & Media":
        return <Palette size={18} className="text-accent-400" />;
      case "Development & Tech":
        return <Code2 size={18} className="text-primary-400" />;
      default:
        return <Wrench size={18} className="text-primary-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 px-3.5 py-1.5 rounded-full border border-primary-500/20 mb-3">
            Technical & Creative Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Skills & Toolkit
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Applied skills tested and utilized across real video productions, AI workflows, and digital marketing campaigns.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((item) => (
            <div
              key={item.category}
              className="p-7 rounded-3xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-surface border border-surface-border">
                  {getCategoryIcon(item.category)}
                </div>
                <h3 className="text-lg font-bold text-white">{item.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold bg-white/5 hover:bg-primary-500/10 text-gray-200 hover:text-primary-300 border border-surface-border hover:border-primary-500/30 rounded-xl transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
