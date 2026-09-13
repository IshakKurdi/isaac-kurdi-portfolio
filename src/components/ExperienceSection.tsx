"use client";

import React from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-surface/50 border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 px-3.5 py-1.5 rounded-full border border-primary-500/20 mb-3">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Hands-On Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Practical creative and technical roles building real products and marketing campaigns.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className="relative p-8 rounded-3xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 shadow-xl group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary-400">{exp.company}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-surface-border text-xs font-medium text-gray-300 shrink-0 w-fit">
                  <Calendar size={14} className="text-primary-400" />
                  {exp.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Key Focus Highlights */}
              <div className="pt-4 border-t border-surface-border/60">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.focus.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-primary-400 shrink-0" />
                      <span>{item}</span>
                    </div>
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
