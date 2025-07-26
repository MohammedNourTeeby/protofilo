'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language } = useLanguage();
  const { personalInfo, languages } = portfolioData[language];
  
  return (
    <SectionCard title={language === 'ar' ? "تواصل معي" : "Contact Me"}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[#2563eb] mb-4 pb-2 border-b border-[#e2e8f0]">
            {language === 'ar' ? "معلومات التواصل" : "Contact Information"}
          </h3>
          <div className="space-y-3">
            <p className="flex items-start">
              <span className="font-semibold min-w-[100px] text-[#64748b]">{language === 'ar' ? "البريد الإلكتروني:" : "Email:"}</span>
              <span className="flex-1">{personalInfo.email}</span>
            </p>
            <p className="flex items-start">
              <span className="font-semibold min-w-[100px] text-[#64748b]">{language === 'ar' ? "الهاتف:" : "Phone:"}</span>
              <span className="flex-1">{personalInfo.phone}</span>
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-[#2563eb] mb-4 pb-2 border-b border-[#e2e8f0]">
            {language === 'ar' ? "اللغات" : "Languages"}
          </h3>
          <ul className="space-y-2">
            {languages.map((lang, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center border-b border-[#e2e8f0] pb-2 last:border-0 last:pb-0"
              >
                <span className="font-medium">{lang.language}</span>
                <span className="text-[#64748b] text-sm">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionCard>
  );
}