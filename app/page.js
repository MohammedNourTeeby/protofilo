// app/page.jsx
"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Stats from "./components/Stats";
import { useLanguage } from "./context/LanguageContext";

export default function HomePage() {
  const { language } = useLanguage();

  return (
    <div className={`min-h-screen ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#7c3aed]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#2563eb]/5 rounded-full blur-3xl"></div>
      </div>

      <Header />

      <motion.div
        className="max-w-6xl mx-auto px-4 pt-24 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-16">
          <PersonalInfo />
          <Stats />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProfessionalExperience />
            <Education />
          </div>

          <Skills />
          <Projects />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Achievements />
            <Certificates />
          </div>

          <Contact />
        </div>
      </motion.div>

      <footer className="py-8 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} محمد نور طيبي. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#f59e0b] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#f59e0b] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="hover:text-[#f59e0b] transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
