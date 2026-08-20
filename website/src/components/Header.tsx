'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '@/translations';
import { laws } from '@/data/laws';
import { article, REPO_URL, routeFor } from '@/lib/site';
import type { Locale } from '@/data/laws';

/**
 * The masthead of an instrument: what this is on the left, which articles it
 * covers on the right. Not a product nav bar.
 */
export default function Header({
  lang,
  counterpart,
}: {
  lang: Locale;
  counterpart: string;
}) {
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const home = routeFor(lang);

  const links = [
    { href: `${home}#laws`, label: t.nav.principles },
    { href: `${home}#about`, label: t.nav.about },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-rule bg-field/95 backdrop-blur-sm lg:pl-14">
      <div className="flex items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link href={home} className="label hover:text-relief">
          Hammurabi
          <span className="ml-2 hidden text-relief-faint sm:inline">
            · {t.hero.tagLabel}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="term">
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="term"
          >
            {t.nav.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
          <span className="label text-relief-faint">
            § 01–{article(laws.length)}
          </span>
        </nav>

        <button
          className="text-relief-dim transition-colors hover:text-relief md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="flex flex-col gap-3 border-t border-rule-soft px-5 py-4 sm:px-8 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="term"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="term"
            onClick={() => setIsOpen(false)}
          >
            {t.nav.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>
      )}
    </header>
  );
}
