'use client';

import { useLanguage } from './LanguageContext';
import { motion } from 'motion/react';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex rounded-full border border-hairline bg-stone p-1">
      {(['en', 'jp'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative rounded-full px-3 py-1 text-xs font-bold transition-colors ${
            lang === l ? 'text-ink' : 'text-carve-dim hover:text-carve'
          }`}
        >
          {lang === l && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 -z-10 rounded-full bg-bronze"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
