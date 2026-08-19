import Figure, { ink, label, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title:
      'Four defensive layers, each with holes; an incident happens where the holes line up',
    caption:
      'Every layer has holes, and the holes move. The incident is not the failure of one layer — it is the moment four independent holes happen to align. Which is why the fix is rarely the layer that failed last.',
    hazard: 'Hazard',
    incident: 'Incident',
    layers: ['Review', 'Tests', 'Alerting', 'Rollback'],
    caught: 'the usual case — one layer has no hole here',
  },
  ja: {
    title: '穴のある4つの防護層。穴が一直線に並んだところで事故が起きる',
    caption:
      'どの層にも穴があり、穴は動く。事故とは「ある層が失敗したこと」ではなく、独立した4つの穴がたまたま一直線に並んだ瞬間である。だから対策は、最後に破れた層とは限らない。',
    hazard: '危険',
    incident: '事故',
    layers: ['レビュー', 'テスト', 'アラート', 'ロールバック'],
    caught: '通常はこうなる——どこか一層に穴がない',
  },
} as const;

const SLICES = [80, 200, 320, 440];
const SLICE_W = 60;
const ALIGNED_Y = 126;
const CAUGHT_Y = 72;

// The holes that happen not to line up, which is the normal state of a layer.
const DECOYS = [
  [CAUGHT_Y, 180],
  [178, 96],
  [CAUGHT_Y, 176],
  [98, CAUGHT_Y],
];

export default function SwissCheese({ lang }: { lang: Locale }) {
  const t = COPY[lang];
  const stoppedAt = SLICES[1] + SLICE_W / 2;

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 240">
      <defs>
        <marker
          id="sc-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={ink.accentBright} />
        </marker>
      </defs>

      {/* Layers first: everything below is annotation and belongs on top. */}
      {SLICES.map((x, i) => (
        <g key={x}>
          <rect
            x={x}
            y="42"
            width={SLICE_W}
            height="150"
            rx="6"
            fill={ink.panel}
            stroke={ink.line}
            strokeOpacity="0.5"
          />
          <ellipse
            cx={x + SLICE_W / 2}
            cy={ALIGNED_Y}
            rx="15"
            ry="11"
            fill="var(--color-ink)"
            stroke={ink.accent}
            strokeWidth="1.5"
          />
          {DECOYS[i].map((cy) => (
            <ellipse
              key={cy}
              cx={x + SLICE_W / 2}
              cy={cy}
              rx="13"
              ry="9"
              fill="var(--color-ink)"
              stroke={ink.line}
              strokeOpacity="0.5"
            />
          ))}
          <text x={x + SLICE_W / 2} y="210" textAnchor="middle" {...small}>
            {t.layers[i]}
          </text>
        </g>
      ))}

      {/* The trajectory that finds an aligned hole in every layer. */}
      <line
        x1="24"
        y1={ALIGNED_Y}
        x2="556"
        y2={ALIGNED_Y}
        stroke={ink.accentBright}
        strokeWidth="2"
        markerEnd="url(#sc-arrow)"
      />
      <text x="24" y={ALIGNED_Y - 12} {...label} fill={ink.accentBright}>
        {t.hazard}
      </text>
      <text
        x="556"
        y={ALIGNED_Y - 12}
        textAnchor="end"
        {...label}
        fill={ink.accentBright}
      >
        {t.incident}
      </text>

      {/* And one that a layer stops, because its hole is somewhere else. */}
      <line
        x1="24"
        y1={CAUGHT_Y}
        x2={stoppedAt}
        y2={CAUGHT_Y}
        stroke={ink.cool}
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <line
        x1={stoppedAt - 7}
        y1={CAUGHT_Y - 7}
        x2={stoppedAt + 7}
        y2={CAUGHT_Y + 7}
        stroke={ink.cool}
        strokeWidth="2"
      />
      <line
        x1={stoppedAt - 7}
        y1={CAUGHT_Y + 7}
        x2={stoppedAt + 7}
        y2={CAUGHT_Y - 7}
        stroke={ink.cool}
        strokeWidth="2"
      />
      <text x="24" y="32" {...small} fill={ink.cool}>
        {t.caught}
      </text>
    </Figure>
  );
}
