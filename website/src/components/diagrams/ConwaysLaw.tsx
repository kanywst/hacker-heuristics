import Figure, { ink, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title: 'Two team structures and the two architectures they produce',
    caption:
      'The architecture is downstream of the communication structure, not the org chart on paper — the one that describes who actually talks to whom. Redraw the teams and the seam moves with them; redraw the diagram alone and the old seam grows back.',
    orgs: 'Communication structure',
    systems: 'What ships',
    teams: ['Team A', 'Team B', 'Team C'],
    caseA: 'Three teams, one shared channel',
    caseB: 'Three teams, no channel',
    resultA: 'One integrated service, one seam',
    resultB: 'Three services, two brittle seams',
    seam: 'seam',
  },
  ja: {
    title: '2つのチーム構造と、それぞれが生むアーキテクチャ',
    caption:
      'アーキテクチャはコミュニケーション構造の下流にある。紙の上の組織図ではなく、実際に誰が誰と話しているかのほうだ。チームを引き直せば継ぎ目もついてくる。図だけを引き直せば、古い継ぎ目が生えてくる。',
    orgs: 'コミュニケーション構造',
    systems: '出荷されるもの',
    teams: ['チームA', 'チームB', 'チームC'],
    caseA: '3チーム・共有チャネルあり',
    caseB: '3チーム・チャネルなし',
    resultA: '統合された1サービス、継ぎ目1つ',
    resultB: '3サービス、脆い継ぎ目2つ',
    seam: '継ぎ目',
  },
} as const;

function Teams({
  x,
  y,
  connected,
  labels,
}: {
  x: number;
  y: number;
  connected: boolean;
  labels: readonly string[];
}) {
  const positions = [0, 1, 2].map((i) => ({ cx: x + i * 62, cy: y }));
  return (
    <g>
      {connected &&
        positions
          .slice(0, -1)
          .map((p, i) => (
            <line
              key={i}
              x1={p.cx + 16}
              y1={p.cy}
              x2={positions[i + 1].cx - 16}
              y2={p.cy}
              stroke={ink.cool}
              strokeWidth="1.5"
            />
          ))}
      {!connected &&
        positions
          .slice(0, -1)
          .map((p, i) => (
            <line
              key={i}
              x1={p.cx + 16}
              y1={p.cy}
              x2={positions[i + 1].cx - 16}
              y2={p.cy}
              stroke={ink.line}
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
          ))}
      {positions.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.cx}
            cy={p.cy}
            r="15"
            fill={ink.panel}
            stroke={ink.line}
            strokeOpacity="0.6"
          />
          <text
            x={p.cx}
            y={p.cy + 4}
            textAnchor="middle"
            fontFamily="var(--font-body)"
            fontSize="9"
            fill={ink.dim}
          >
            {labels[i].slice(-1)}
          </text>
        </g>
      ))}
    </g>
  );
}

export default function ConwaysLaw({ lang }: { lang: Locale }) {
  const t = COPY[lang];

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 230">
      <defs>
        <marker
          id="cw-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={ink.accent} />
        </marker>
      </defs>

      <text x="20" y="20" {...small}>
        {t.orgs}
      </text>
      <text x="360" y="20" {...small}>
        {t.systems}
      </text>

      {/* Case A — teams that talk. */}
      <Teams x={60} y={62} connected labels={t.teams} />
      <text x="20" y="98" {...small}>
        {t.caseA}
      </text>
      <line
        x1="230"
        y1="62"
        x2="352"
        y2="62"
        stroke={ink.accent}
        strokeWidth="1.5"
        markerEnd="url(#cw-arrow)"
      />
      <rect
        x="360"
        y="44"
        width="200"
        height="36"
        rx="5"
        fill={ink.accent}
        fillOpacity="0.18"
        stroke={ink.accent}
        strokeOpacity="0.6"
      />
      <text x="460" y="67" textAnchor="middle" {...small} fill={ink.text}>
        {t.resultA}
      </text>

      {/* Case B — teams that do not. */}
      <Teams x={60} y={158} connected={false} labels={t.teams} />
      <text x="20" y="194" {...small}>
        {t.caseB}
      </text>
      <line
        x1="230"
        y1="158"
        x2="352"
        y2="158"
        stroke={ink.accent}
        strokeWidth="1.5"
        markerEnd="url(#cw-arrow)"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={360 + i * 68}
            y="140"
            width="58"
            height="36"
            rx="5"
            fill={ink.panel}
            stroke={ink.line}
            strokeOpacity="0.6"
          />
          {i < 2 && (
            <line
              x1={360 + i * 68 + 58}
              y1="158"
              x2={360 + (i + 1) * 68}
              y2="158"
              stroke={ink.accentBright}
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
          )}
        </g>
      ))}
      <text
        x="460"
        y="200"
        textAnchor="middle"
        {...small}
        fill={ink.accentBright}
      >
        {t.resultB}
      </text>

      <text
        x="423"
        y="133"
        textAnchor="middle"
        {...small}
        fill={ink.accentBright}
      >
        {t.seam}
      </text>
    </Figure>
  );
}
