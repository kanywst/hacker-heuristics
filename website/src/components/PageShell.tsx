import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import HtmlLang from './HtmlLang';
import { HTML_LANG } from '@/lib/site';
import type { Locale } from '@/data/laws';

/**
 * Everything a page shares: the chrome, and the pair of locale-aware links that
 * chrome needs. `counterpart` is the same page in the other language, which only
 * the page itself knows — a law page swaps to the same law, not to the home page.
 */
export default function PageShell({
  lang,
  counterpart,
  children,
}: {
  lang: Locale;
  counterpart: string;
  children: React.ReactNode;
}) {
  return (
    <div lang={HTML_LANG[lang]}>
      <HtmlLang lang={HTML_LANG[lang]} />
      <Header lang={lang} counterpart={counterpart} />
      <main>{children}</main>
      <Footer lang={lang} />
      <BackToTop lang={lang} />
    </div>
  );
}
