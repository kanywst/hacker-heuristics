import Figure, { ink, label, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title:
      'The CAP triangle, with partition tolerance marked as not optional and the live choice on the remaining edge',
    caption:
      'The triangle is usually drawn as "pick two", which is misleading — you do not get to decline partitions, the network declines for you. P is a fact about the world. The only choice you actually make is the one along the bottom edge, and you make it before the partition, not during it.',
    c: 'Consistency',
    a: 'Availability',
    p: 'Partition tolerance',
    pNote: 'not a choice — the network partitions',
    edge: 'the only real decision',
    cp: 'CP · refuse writes, stay correct',
    ap: 'AP · accept writes, reconcile later',
  },
  ja: {
    title:
      'CAP の三角形。分断耐性は選択肢ではなく、実際の選択は残る一辺の上にある',
    caption:
      'この三角形はよく「3つから2つを選ぶ」と描かれるが、それは誤解を招く。分断を断る権利はこちらにはなく、ネットワークが勝手に断ってくる。P は選択ではなく世界の事実である。実際に選べるのは底辺の上の一点だけで、しかもそれを選ぶのは分断の最中ではなく、その前だ。',
    c: '一貫性',
    a: '可用性',
    p: '分断耐性',
    pNote: '選択肢ではない——ネットワークは分断する',
    edge: '唯一の実際の判断',
    cp: 'CP · 書き込みを拒み、正しさを保つ',
    ap: 'AP · 書き込みを受け、後で収束させる',
  },
} as const;

const APEX = { x: 300, y: 48 };
const LEFT = { x: 150, y: 158 };
const RIGHT = { x: 450, y: 158 };

export default function CapTheorem({ lang }: { lang: Locale }) {
  const t = COPY[lang];

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 230">
      {/* The two edges that are not a decision, drawn faint. */}
      <line
        x1={APEX.x}
        y1={APEX.y}
        x2={LEFT.x}
        y2={LEFT.y}
        stroke={ink.line}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <line
        x1={APEX.x}
        y1={APEX.y}
        x2={RIGHT.x}
        y2={RIGHT.y}
        stroke={ink.line}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />

      {/* The edge you actually choose a point on. */}
      <line
        x1={LEFT.x}
        y1={LEFT.y}
        x2={RIGHT.x}
        y2={RIGHT.y}
        stroke={ink.accentBright}
        strokeWidth="2.5"
      />
      <circle
        cx={(LEFT.x + RIGHT.x) / 2}
        cy={LEFT.y}
        r="4"
        fill={ink.accentBright}
      />
      <text
        x={(LEFT.x + RIGHT.x) / 2}
        y={LEFT.y + 20}
        textAnchor="middle"
        {...small}
        fill={ink.accentBright}
      >
        {t.edge}
      </text>

      {/* Partition tolerance is a vertex you do not get to pick, so it is drawn
          hollow while the two you choose between are filled. */}
      <circle
        cx={APEX.x}
        cy={APEX.y}
        r="5"
        fill="var(--color-field)"
        stroke={ink.line}
        strokeOpacity="0.7"
      />
      <text
        x={APEX.x}
        y={APEX.y - 30}
        textAnchor="middle"
        {...label}
        fill={ink.dim}
      >
        {t.p}
      </text>
      <text x={APEX.x} y={APEX.y - 14} textAnchor="middle" {...small}>
        {t.pNote}
      </text>

      <circle cx={LEFT.x} cy={LEFT.y} r="5" fill={ink.accentBright} />
      <text x={LEFT.x} y={LEFT.y - 14} textAnchor="middle" {...label}>
        {t.c}
      </text>
      <text x={LEFT.x - 6} y={LEFT.y + 38} textAnchor="middle" {...small}>
        {t.cp}
      </text>

      <circle cx={RIGHT.x} cy={RIGHT.y} r="5" fill={ink.accentBright} />
      <text x={RIGHT.x} y={RIGHT.y - 14} textAnchor="middle" {...label}>
        {t.a}
      </text>
      <text x={RIGHT.x + 6} y={RIGHT.y + 38} textAnchor="middle" {...small}>
        {t.ap}
      </text>
    </Figure>
  );
}
