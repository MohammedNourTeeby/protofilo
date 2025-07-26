'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function ProfessionalExperience() {
  const { language } = useLanguage();
  const { professionalExperience } = portfolioData[language];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
  };
  
  return (
    <SectionCard>
      <h2 className="section-title">
        {language === 'ar' ? "الخبرة المهنية" : "Professional Experience"}
      </h2>
      
      <div className="relative pl-6 border-l-2 border-[var(--color-secondary)]">
        <motion.div 
          className="space-y-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {professionalExperience.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={item}
            >
              <div className="absolute -left-9 top-0 w-6 h-6 rounded-full bg-[var(--color-secondary)] border-4 border-[var(--color-card)]"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">{exp.title}</h3>
                <span className="text-[var(--color-text-secondary)] bg-[var(--color-background)] px-3 py-1 rounded-md text-sm min-w-max">{exp.period}</span>
              </div>
              
              <p className="text-[var(--color-secondary)] font-medium mt-1">{exp.company}</p>
              
              <ul className="mt-4 space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="flex items-start pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[var(--color-accent)] before:rounded-full"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionCard>
  );
}