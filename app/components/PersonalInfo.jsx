// app/components/PersonalInfo.jsx
'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function PersonalInfo() {
  const { language } = useLanguage();
  const { personalInfo } = portfolioData[language];
  
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
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
    >
      <SectionCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">
                  {language === 'ar' ? "البريد الإلكتروني" : "Email"}
                </p>
                <p className="font-medium text-[#1e293b]">{personalInfo.email}</p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">
                  {language === 'ar' ? "الهاتف" : "Phone"}
                </p>
                <p className="font-medium text-[#1e293b]">{personalInfo.phone}</p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">
                  {language === 'ar' ? "المكان" : "Location"}
                </p>
                <p className="font-medium text-[#1e293b]">{personalInfo.location}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">
                  {language === 'ar' ? "تاريخ الميلاد" : "Date of Birth"}
                </p>
                <p className="font-medium text-[#1e293b]">{personalInfo.dob}</p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">
                  {language === 'ar' ? "الجنسية" : "Nationality"}
                </p>
                <p className="font-medium text-[#1e293b]">{personalInfo.nationality}</p>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">GitHub</p>
                <a 
                  href={`https://${personalInfo.github}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-[#7c3aed] hover:text-[#2563eb] hover:underline transition-colors"
                >
                  {personalInfo.github}
                </a>
              </div>
            </motion.div>
            
            <motion.div variants={item} className="flex items-start bg-gradient-to-r from-[#f8fafc] to-white p-4 rounded-xl border border-gray-100">
              <div className="min-w-[40px]">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed]/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7c3aed]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm text-[#64748b]">LinkedIn</p>
                <a 
                  href={`https://${personalInfo.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-[#7c3aed] hover:text-[#2563eb] hover:underline transition-colors"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="/CV.pdf" 
            download="Mohammed_Nour_Teeby_CV.pdf"
            className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:from-[#8d4cff] hover:to-[#3b82f6] inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            {language === 'ar' ? "تحميل السيرة الذاتية" : "Download CV"}
          </a>
        </motion.div>
      </SectionCard>
    </motion.div>
  );
}