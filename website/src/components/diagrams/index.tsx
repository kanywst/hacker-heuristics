import type { Locale } from '@/data/laws';
import SwissCheese from './SwissCheese';
import NormalAccidents from './NormalAccidents';
import TailAtScale from './TailAtScale';
import CapTheorem from './CapTheorem';
import LittlesLaw from './LittlesLaw';
import ConwaysLaw from './ConwaysLaw';

/**
 * Most articles do not get a picture. These are the ones whose mechanism is
 * spatial or arithmetic — where the diagram carries something the paragraph
 * cannot, rather than restating it in shapes.
 *
 * Written as a switch rather than a slug-to-component map so no component is
 * selected through a variable during render.
 */
export default function LawDiagram({
  slug,
  lang,
}: {
  slug: string;
  lang: Locale;
}) {
  switch (slug) {
    case 'swiss-cheese-model':
      return <SwissCheese lang={lang} />;
    case 'normal-accident-theory':
      return <NormalAccidents lang={lang} />;
    case 'tail-at-scale':
      return <TailAtScale lang={lang} />;
    case 'cap-theorem':
      return <CapTheorem lang={lang} />;
    case 'littles-law':
      return <LittlesLaw lang={lang} />;
    case 'conways-law':
      return <ConwaysLaw lang={lang} />;
    default:
      return null;
  }
}
