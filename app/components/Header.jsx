'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export default function Header() {
  const { language, toggleLanguage } = useLanguage();
  const { personalInfo } = portfolioData[language];
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`py-8 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-dashed flex items-center justify-center overflow-hidden">
              <div className="bg-gray-300 w-full h-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">M</span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 bg-[var(--color-accent)] rounded-full p-1 border-2 border-white">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-primary)] animate-fadeIn">
              {personalInfo.name}
            </h1>
            <p className="text-xl mt-1 text-[var(--color-secondary)] font-medium animate-fadeIn">
              {personalInfo.title}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="btn-secondary flex items-center group"
          >
            <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className="hidden md:flex space-x-3">
            <a href="#contact" className="btn-accent animate-pulse-slow">
              {language === 'ar' ? 'تواصل معي' : 'Contact Me'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}