'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';

export default function Certificates() {
  const { language } = useLanguage();
  const { certificates } = portfolioData[language];
  
  return (
    <SectionCard title={language === 'ar' ? "الشهادات" : "Certificates"}>
      <ul className="space-y-3">
        {certificates.map((cert, index) => (
          <li 
            key={index} 
            className="flex items-start before:content-['•'] before:text-[#f59e0b] before:mr-2 before:text-xl pl-1"
          >
            {cert}
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}