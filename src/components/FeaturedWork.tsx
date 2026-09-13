"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/data/portfolioData";
import { VideoPlayer } from "./VideoPlayer";
import { ProjectModal } from "./ProjectModal";
import { Sparkles, Maximize2, Tag, Play } from "lucide-react";

export const FeaturedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "AI Video",
    "Video Editing",
    "Food & Restaurant",
    "Social Media",
    "Advertising",
    "Game Marketing",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 relative bg-surface/50 border-y border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs font-bold text-primary-400 mb-3">
            <Sparkles size={14} />
            <span>Creative Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl">
            A selection of videos, campaigns and creative projects I've worked on.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-600/25 scale-105"
                    : "bg-surface-card hover:bg-white/10 text-gray-400 hover:text-white border border-surface-border"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-surface-card border border-surface-border rounded-3xl overflow-hidden flex flex-col justify-between hover:border-primary-500/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary-600/10"
              >
                {/* Media Container */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <VideoPlayer
                    src={project.videoUrl}
                    poster={project.thumbnailUrl}
                    title={project.title}
                    aspectRatio="16/9"
                    autoplay={true}
                    loop={true}
                    isCardPreview={true}
                  />

                  {/* Expand Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600/90 text-white text-xs font-bold shadow-xl backdrop-blur-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={14} />
                      View Details & Video
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary-400 bg-primary-500/10 px-2.5 py-1 rounded-md border border-primary-500/20">
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">
                        {project.year}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors cursor-pointer line-clamp-1"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tools / Tags */}
                  <div className="pt-4 border-t border-surface-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 text-[11px] font-medium bg-white/5 border border-surface-border text-gray-400 rounded-md"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium bg-white/5 text-gray-500 rounded-md">
                          +{project.tools.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-gray-400">
            <p>No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
