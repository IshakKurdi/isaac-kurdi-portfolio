"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/85 backdrop-blur-xl border-b border-surface-border py-3.5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-xl font-extrabold tracking-wider text-white"
        >
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
            {PERSONAL_INFO.logoText}
          </span>
          <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-card/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-surface-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 rounded-full shadow-lg shadow-primary-600/20 hover:shadow-primary-500/40 transition-all duration-300 active:scale-95 group"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white bg-surface-card border border-surface-border rounded-xl"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#090d16]/95 backdrop-blur-2xl border-b border-surface-border p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-gray-200 hover:text-primary-400 hover:bg-white/5 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-surface-border mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl shadow-lg"
              >
                <Sparkles size={16} />
                <span>Let's Work Together</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
