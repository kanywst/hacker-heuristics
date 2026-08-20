import { translations } from '@/translations';
import { laws, type Locale } from '@/data/laws';
import { article } from '@/lib/site';

export default function Footer({ lang }: { lang: Locale }) {
  return (
    <footer className="border-t border-rule px-5 py-6 sm:px-8 lg:pl-20">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <p className="label">Hammurabi · § 01–{article(laws.length)}</p>
        <p className="text-[0.6875rem] text-relief-faint">
          {translations[lang].footer}
        </p>
      </div>
    </footer>
  );
}
