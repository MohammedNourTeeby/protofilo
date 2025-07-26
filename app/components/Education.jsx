'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { language } = useLanguage();
  const { education } = portfolioData[language];
  
  return (
    <SectionCard title={language === 'ar' ? "التعليم" : "Education"}>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="border-l-4 border-[#7c3aed] pl-4 py-1"
          >
            <h3 className="text-xl font-semibold text-[#1e293b]">{edu.degree}</h3>
            <p className="text-[#2563eb] mt-1">{edu.institution}</p>
            <p className="text-[#64748b] mt-1">
              {language === 'ar' ? "سنة التخرج:" : "Graduation Year:"} 
              <span className="font-medium ml-1">{edu.year}</span>
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}