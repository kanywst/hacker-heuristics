import Figure, { ink, label, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title:
      'One request fanning out to 100 leaves; the odds that at least one is slow',
    caption:
      'A leaf that is slow one request in a hundred is invisible on its own. Fan out to 100 of them and the same leaf-level p99 becomes the median user experience: 63% of requests now wait on a straggler. Tail latency is not a per-node property at scale — it is an arithmetic consequence of the fan-out.',
    root: 'Request',
    leaves: 'Leaves',
    slow: 'slow leaf',
    rows: [
      ['Fan-out', 'P(at least one slow leaf)'],
      ['1 leaf', '1%'],
      ['10 leaves', '10%'],
      ['100 leaves', '63%'],
    ],
    note: 'each leaf independently slow 1% of the time',
  },
  ja: {
    title: '1リクエストが100枚の葉に扇状展開したとき、少なくとも1枚が遅い確率',
    caption:
      '100回に1回だけ遅い葉は、単体では見えない。それを100枚に扇状展開すると、同じ葉レベルの p99 が利用者の体感の中央値になる——63%のリクエストが遅れた1枚を待つ。スケールにおける裾野レイテンシは、ノード単体の性質ではなく、扇状展開の算術的な帰結である。',
    root: 'リクエスト',
    leaves: '葉',
    slow: '遅い葉',
    rows: [
      ['扇状展開', 'P(1枚以上が遅い)'],
      ['1枚', '1%'],
      ['10枚', '10%'],
      ['100枚', '63%'],
    ],
    note: '各葉は独立に1%の確率で遅い',
  },
} as const;

const LEAF_COUNT = 12;
const SLOW_INDEX = 7;

export default function TailAtScale({ lang }: { lang: Locale }) {
  const t = COPY[lang];
  const rootX = 60;
  const rootY = 110;
  const leafX = 250;

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 230">
      {Array.from({ length: LEAF_COUNT }, (_, i) => {
        const y = 26 + i * 15;
        const slow = i === SLOW_INDEX;
        return (
          <g key={i}>
            <line
              x1={rootX + 46}
              y1={rootY}
              x2={leafX}
              y2={y + 5}
              stroke={slow ? ink.accentBright : ink.line}
              strokeOpacity={slow ? 1 : 0.35}
              strokeWidth={slow ? 1.6 : 1}
            />
            <rect
              x={leafX}
              y={y}
              width={slow ? 54 : 34}
              height="10"
              rx="2"
              fill={slow ? ink.accent : ink.line}
              fillOpacity={slow ? 0.9 : 0.35}
            />
          </g>
        );
      })}

      <rect
        x={rootX - 12}
        y={rootY - 14}
        width="58"
        height="28"
        rx="4"
        fill={ink.panel}
        stroke={ink.line}
        strokeOpacity="0.6"
      />
      <text
        x={rootX + 17}
        y={rootY + 4}
        textAnchor="middle"
        {...small}
        fill={ink.text}
      >
        {t.root}
      </text>

      <text x={leafX} y="18" {...small}>
        {t.leaves}
      </text>
      <text
        x={leafX + 60}
        y={26 + SLOW_INDEX * 15 + 9}
        {...small}
        fill={ink.accentBright}
      >
        {t.slow}
      </text>
      <text x={leafX} y="222" {...small}>
        {t.note}
      </text>

      {/* The arithmetic, which is the actual point. */}
      {t.rows.map(([a, b], i) => (
        <g key={a}>
          <text
            x="400"
            y={54 + i * 26}
            {...(i === 0 ? small : label)}
            fill={i === 3 ? ink.accentBright : i === 0 ? ink.dim : ink.text}
          >
            {a}
          </text>
          <text
            x="580"
            y={54 + i * 26}
            textAnchor="end"
            {...(i === 0 ? small : label)}
            fill={i === 3 ? ink.accentBright : i === 0 ? ink.dim : ink.text}
          >
            {b}
          </text>
          {i === 0 && (
            <line
              x1="400"
              y1={62}
              x2="580"
              y2={62}
              stroke={ink.line}
              strokeOpacity="0.4"
            />
          )}
        </g>
      ))}
    </Figure>
  );
}
