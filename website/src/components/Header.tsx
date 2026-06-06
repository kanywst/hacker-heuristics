'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from './LanguageContext';
import { translations } from '@/translations';

const GITHUB_URL = 'https://github.com/kanywst/hammurabi';

export default function Header() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-hairline bg-ink/70 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="text-bronze">§</span>
          <span className="display text-xl tracking-tight text-carve">
            Hammurabi
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-sm text-carve-dim md:flex">
          <a href="#laws" className="link-bronze">
            {t.principles}
          </a>
          <a href="#about" className="link-bronze">
            {t.about}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-bronze"
          >
            {t.github}
          </a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="text-carve-dim transition-colors hover:text-carve md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mt-4 flex flex-col gap-4 border-t border-hairline pt-4 text-sm text-carve-dim md:hidden">
          <a
            href="#laws"
            className="link-bronze"
            onClick={() => setIsOpen(false)}
          >
            {t.principles}
          </a>
          <a
            href="#about"
            className="link-bronze"
            onClick={() => setIsOpen(false)}
          >
            {t.about}
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-bronze"
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
