'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '@/translations';
import { REPO_URL, routeFor } from '@/lib/site';
import type { Locale } from '@/data/laws';

export default function Header({
  lang,
  counterpart,
}: {
  lang: Locale;
  counterpart: string;
}) {
  const t = translations[lang].nav;
  const [isOpen, setIsOpen] = useState(false);
  const home = routeFor(lang);

  // The codex and the epilogue only exist on the home page, so from an article
  // these have to navigate home first rather than jump to a missing anchor.
  const links = [
    { href: `${home}#laws`, label: t.principles },
    { href: `${home}#about`, label: t.about },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-hairline bg-ink/70 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href={home} className="flex items-baseline gap-2">
          <span className="text-bronze">§</span>
          <span className="display text-xl tracking-tight text-carve">
            Hammurabi
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-carve-dim md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="link-bronze">
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-bronze"
          >
            {t.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>

        <button
          className="text-carve-dim transition-colors hover:text-carve md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-menu"
          className="mt-4 flex flex-col gap-4 border-t border-hairline pt-4 text-sm text-carve-dim md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-bronze"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-bronze"
            onClick={() => setIsOpen(false)}
          >
            {t.github}
          </a>
          <LanguageSwitcher lang={lang} counterpart={counterpart} />
        </nav>
      )}
    </header>
  );
}
