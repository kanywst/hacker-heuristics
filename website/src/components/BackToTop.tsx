'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { translations } from '@/translations';
import type { Locale } from '@/data/laws';

export default function BackToTop({ lang }: { lang: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll(); // reflect the position on mount (e.g. reload while scrolled)
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={translations[lang].ui.backToTop}
      className={`btn-solid fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'pointer-events-none invisible opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
