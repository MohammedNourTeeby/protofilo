// app/components/Projects.jsx
'use client';

import { portfolioData } from '../data/portfolioData';
import SectionCard from './UI/SectionCard';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const { language } = useLanguage();
  const { projects } = portfolioData[language];
  
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <SectionCard title={language === 'ar' ? "المشاريع" : "Projects"}>
      <motion.div 
        className="space-y-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="pb-8 border-b border-[var(--color-border)] last:border-0 last:pb-0 group"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">{project.title}</h3>
                <p className="text-[var(--color-text-secondary)] mt-1">{project.description}</p>
              </div>
              <span className="text-[var(--color-text-secondary)] bg-[var(--color-background)] px-3 py-1 rounded-md text-sm min-w-max">{project.period}</span>
            </div>
            
            <div className="mt-6 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/5">
                <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-white group-hover:shadow-2xl transition-all duration-300">
                  {project.imageUrl ? (
                    <div className="aspect-video w-full h-full">
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML = `
                            <div class="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] w-full h-full flex items-center justify-center">
                              <span class="text-white font-bold text-lg">${project.title}</span>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  ) : (
                    <div className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] aspect-video w-full h-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{project.title}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-medium">{project.technologies.join(', ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-3/5">
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="bg-gradient-to-r from-[#7c3aed]/10 to-[#2563eb]/10 text-[#7c3aed] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold mt-6 text-[var(--color-text-primary)]">
                  {language === 'ar' ? "الإنجازات" : "Achievements"}
                </h4>
                <ul className="mt-3 space-y-3">
                  {project.achievements.map((achievement, i) => (
                    <li 
                      key={i} 
                      className="flex items-start pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-[var(--color-accent)] before:rounded-full"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center text-[var(--color-primary)] hover:underline font-medium group transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 10-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    {language === 'ar' ? "عرض المشروع على GitHub" : "View Project on GitHub"}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionCard>
  );
}