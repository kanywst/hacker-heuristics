import { translations } from '@/translations';
import type { Locale } from '@/data/laws';

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-hairline py-16 text-center">
      <div className="rule-diamond mx-auto mb-6 w-24">
        <span aria-hidden className="text-bronze">
          ◆
        </span>
      </div>
      <p className="display text-lg text-carve">Hammurabi</p>
      <p className="mt-2 text-sm text-carve-dim">{translations[lang].footer}</p>
    </footer>
  );
}
