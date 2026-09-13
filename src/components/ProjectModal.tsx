"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolioData";
import { VideoPlayer } from "./VideoPlayer";
import { X, Calendar, User, Wrench, Award, ArrowUpRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1322] border border-surface-border rounded-3xl shadow-2xl overflow-y-auto flex flex-col">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-[#0d1322]/90 backdrop-blur-md border-b border-surface-border">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white line-clamp-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 text-gray-400 hover:text-white bg-surface-card hover:bg-white/10 rounded-full border border-surface-border transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Video View */}
          <div className="w-full">
            <VideoPlayer
              src={project.videoUrl}
              poster={project.thumbnailUrl}
              title={project.title}
              aspectRatio="16/9"
              autoplay={true}
              loop={true}
              controls={true}
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left 2 Cols: Description & Results */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-sm font-bold uppercase text-gray-400 tracking-wider mb-2">
                  Project Overview
                </h3>
                <p className="text-base text-gray-300 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.results && (
                <div className="p-5 rounded-2xl bg-primary-500/10 border border-primary-500/20 text-primary-300">
                  <div className="flex items-center gap-2 font-bold mb-1 text-sm text-primary-400">
                    <Award size={16} />
                    <span>Key Outcome / Impact</span>
                  </div>
                  <p className="text-sm">{project.results}</p>
                </div>
              )}
            </div>

            {/* Right 1 Col: Metadata Sidebar */}
            <div className="p-6 rounded-2xl bg-surface-card border border-surface-border space-y-5">
              {project.client && (
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1">
                    <User size={14} />
                    <span>Client / Project</span>
                  </div>
                  <p className="text-sm font-bold text-white">{project.client}</p>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-1">
                  <Calendar size={14} />
                  <span>Year</span>
                </div>
                <p className="text-sm font-bold text-white">{project.year}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                  <Wrench size={14} />
                  <span>Tools & Stack</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-surface-border text-gray-300 rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:opacity-90 transition-opacity"
                >
                  <span>Inquire About Similar Project</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
