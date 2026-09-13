"use client";

import React from "react";
import { CERTIFICATIONS } from "@/data/portfolioData";
import { Award, ShieldCheck } from "lucide-react";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-400 bg-primary-500/10 px-3.5 py-1.5 rounded-full border border-primary-500/20 mb-3">
            Verified Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            Official marketing and advertising certifications from Google, Meta, and industry platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-3xl bg-surface-card border border-surface-border hover:border-primary-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform">
                    <Award size={24} />
                  </div>
                  <span className="text-[11px] font-bold text-primary-400 bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-gray-400 mb-1">
                  Issued by: <span className="text-gray-200">{cert.issuer}</span>
                </p>
                <p className="text-xs text-gray-500">Year: {cert.year}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck size={16} />
                  Verified Credential
                </span>
                <span className="text-[11px] font-mono text-gray-500">
                  ID Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
