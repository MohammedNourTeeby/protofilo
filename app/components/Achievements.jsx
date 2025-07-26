'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Achievements() {
  const { language } = useLanguage();
  
  // حل آمن للوصول إلى البيانات
  const achievements = portfolioData[language]?.achievements || [];
  
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <SectionCard title={language === 'ar' ? "الإنجازات" : "Achievements"}>
      {achievements.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-br from-[#f8fafc] to-white rounded-xl p-5 border border-[#e2e8f0] hover:border-[#7c3aed]/30 transition-colors group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#7c3aed]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7c3aed]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-[#1e293b] group-hover:text-[#7c3aed] transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-[#64748b] mt-2">{achievement.description}</p>
                  <p className="text-sm text-[#94a3b8] mt-3">{achievement.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-[#64748b] py-8">
          {language === 'ar' ? "لا توجد إنجازات لعرضها حالياً." : "No achievements to display at the moment."}
        </p>
      )}
    </SectionCard>
  );
}