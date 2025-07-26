// app/components/Stats.jsx
'use client';

import { motion } from 'framer-motion';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { language } = useLanguage();
  
  const stats = [
    { value: 5, label: language === 'ar' ? "سنوات خبرة" : "Years Experience" },
    { value: 24, label: language === 'ar' ? "مشروع مكتمل" : "Projects Completed" },
    { value: 12, label: language === 'ar' ? "عميل راضٍ" : "Happy Clients" },
    { value: 3, label: language === 'ar' ? "جوائز" : "Awards" }
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
    <SectionCard>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="text-center p-6 bg-white rounded-xl border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all"
            variants={item}
            whileHover="hover"
          >
            <motion.div 
              className="text-5xl font-bold bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent mb-3"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              {stat.value}+
            </motion.div>
            <p className="text-[#64748b]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionCard>
  );
}