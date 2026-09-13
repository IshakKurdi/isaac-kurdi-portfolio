"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CredibilitySection } from "@/components/CredibilitySection";
import { FeaturedWork } from "@/components/FeaturedWork";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-white selection:bg-primary-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <CredibilitySection />
      <FeaturedWork />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
