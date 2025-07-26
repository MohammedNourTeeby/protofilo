// app/components/UI/SectionCard.jsx
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

export default function SectionCard({ children, title }) {
  const { language } = useLanguage();
  
  return (
    <motion.section 
      className="bg-white rounded-2xl p-7 shadow-xl border border-gray-100 overflow-hidden relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      {title && (
        <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
          <div className="w-10 h-1 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] rounded-full"></div>
          <h2 className="text-2xl font-bold text-gray-800 ml-3">{title}</h2>
        </div>
      )}
      
      {children}
      
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#7c3aed]/5 rounded-full -translate-y-1/2 translate-x-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#2563eb]/5 rounded-full translate-y-1/2 -translate-x-1/2 z-0"></div>
    </motion.section>
  );
}