'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex p-1 rounded-lg bg-white/5 border border-white/10 glass">
      {(['en', 'jp'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 text-xs font-bold rounded-md transition-all relative ${
            lang === l ? 'text-white' : 'text-white/40 hover:text-white/60'
          }`}
        >
          {lang === l && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-blue-600 rounded-md -z-10"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
