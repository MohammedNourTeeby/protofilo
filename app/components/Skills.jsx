// app/components/Skills.jsx
'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Skills() {
  const { language } = useLanguage();
  const { skills } = portfolioData[language];
  
  const skillCategories = [
    { 
      title: language === 'ar' ? "تطوير الواجهات الأمامية" : "Frontend Development", 
      skills: skills.frontend,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: language === 'ar' ? "تطوير الواجهات الخلفية" : "Backend Development", 
      skills: skills.backend,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#2563eb]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    { 
      title: language === 'ar' ? "قواعد البيانات" : "Databases", 
      skills: skills.databases,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    { 
      title: language === 'ar' ? "DevOps والأدوات" : "DevOps & Tools", 
      skills: skills.devops,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
    hover: { y: -5 }
  };
  
  return (
    <SectionCard title={language === 'ar' ? "المهارات" : "Skills"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="bg-gradient-to-br from-[#f8fafc] to-white rounded-xl p-6 border border-[#e2e8f0]"
            variants={item}
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold ml-4 text-[#1e293b]">{category.title}</h3>
            </div>
            
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  variants={item}
                  className="bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 text-[#7c3aed] px-4 py-2 rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
}