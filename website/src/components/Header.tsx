'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';
import { translations } from '@/translations';

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 glass px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter gradient-text">
          Hacker Heuristics
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70 items-center">
          <a href="#principles" className="hover:text-white transition-colors">
            {t.principles}
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            {t.about}
          </a>
          <a
            href="https://github.com/kanywst/hacker-heuristics"
            className="hover:text-white transition-colors"
          >
            {t.github}
          </a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-sm font-medium text-white/70 border-t border-white/10 pt-4">
          <a
            href="#principles"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.principles}
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.about}
          </a>
          <a
            href="https://github.com/kanywst/hacker-heuristics"
            className="hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {t.github}
          </a>
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
