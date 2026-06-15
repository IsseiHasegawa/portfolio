"use client";

import { useState } from "react";
import { content, type Language } from "./data/content";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { NewsSection } from "./components/news-section";
import { ProjectsSection } from "./components/projects-section";
import { ResearchSection } from "./components/research-section";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <SiteHeader
        name={t.name}
        nav={t.nav}
        languageLabel={t.language}
        language={language}
        onLanguageChange={setLanguage}
      />

      <HeroSection t={t} />
      <AboutSection about={t.about} />
      <NewsSection news={t.news} language={language} />
      <ResearchSection research={t.research} />
      <ProjectsSection projects={t.projects} />
      <ContactSection contact={t.contact} />
    </main>
  );
}
