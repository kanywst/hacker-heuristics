import Figure, { ink, label, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title:
      "Perrow's two axes: interaction complexity against coupling, with the accident-prone quadrant marked",
    caption:
      'Perrow put systems on two axes. Only the top-right quadrant produces accidents nobody designed and nobody can catch in time. Both axes are yours to move: decouple with buffers, timeouts and bulkheads, or cut the interactions. Adding another safety interlock moves you the wrong way on the horizontal one.',
    xLow: 'Linear interactions',
    xHigh: 'Complex interactions',
    yLow: 'Loose coupling',
    yHigh: 'Tight coupling',
    quadrants: [
      'Assembly line\nBatch job',
      'Dam\nRail network',
      'University\nR&D',
      'Nuclear plant\nMicroservice mesh',
    ],
    danger: 'Normal accidents live here',
    lever: 'decouple',
    lever2: 'cut interactions',
  },
  ja: {
    title:
      'ペローの2軸——相互作用の複雑さと結合度。事故が構造的になる象限を示す',
    caption:
      'ペローは系を2軸に置いた。誰も設計せず、誰も間に合わないタイプの事故が出るのは右上の象限だけである。どちらの軸も動かせる——バッファ・タイムアウト・隔壁で疎結合にするか、相互作用そのものを削るか。安全連動装置を足す対策は、横軸を悪い方向に動かす。',
    xLow: '線形な相互作用',
    xHigh: '複雑な相互作用',
    yLow: '疎結合',
    yHigh: '密結合',
    quadrants: [
      '組立ライン\nバッチ処理',
      'ダム\n鉄道網',
      '大学\n研究開発',
      '原子力発電所\nマイクロサービス網',
    ],
    danger: '通常事故はここに棲む',
    lever: '疎結合化',
    lever2: '相互作用を削る',
  },
} as const;

const X0 = 132;
const X1 = 520;
const Y0 = 44;
const Y1 = 186;
const MX = (X0 + X1) / 2;
const MY = (Y0 + Y1) / 2;

export default function NormalAccidents({ lang }: { lang: Locale }) {
  const t = COPY[lang];
  const cells: [number, number, string, boolean][] = [
    [(X0 + MX) / 2, (MY + Y1) / 2, t.quadrants[0], false],
    [(X0 + MX) / 2, (Y0 + MY) / 2, t.quadrants[1], false],
    [(MX + X1) / 2, (MY + Y1) / 2, t.quadrants[2], false],
    [(MX + X1) / 2, (Y0 + MY) / 2 - 4, t.quadrants[3], true],
  ];

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 232">
      <defs>
        <marker
          id="na-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={ink.cool} />
        </marker>
      </defs>

      {/* The dangerous quadrant, shaded before the grid so the rules stay on top. */}
      <rect
        x={MX}
        y={Y0}
        width={X1 - MX}
        height={MY - Y0}
        fill={ink.accent}
        fillOpacity="0.13"
      />

      <rect
        x={X0}
        y={Y0}
        width={X1 - X0}
        height={Y1 - Y0}
        fill="none"
        stroke={ink.line}
        strokeOpacity="0.5"
      />
      <line
        x1={MX}
        y1={Y0}
        x2={MX}
        y2={Y1}
        stroke={ink.line}
        strokeOpacity="0.4"
      />
      <line
        x1={X0}
        y1={MY}
        x2={X1}
        y2={MY}
        stroke={ink.line}
        strokeOpacity="0.4"
      />

      <text
        x={(MX + X1) / 2}
        y={Y0 + 17}
        textAnchor="middle"
        {...small}
        fill={ink.accentBright}
      >
        {t.danger}
      </text>

      {cells.map(([cx, cy, text, hot], i) => (
        <text
          key={i}
          x={cx}
          y={cy}
          textAnchor="middle"
          {...small}
          fill={hot ? ink.text : ink.dim}
        >
          {text.split('\n').map((line, n) => (
            <tspan key={line} x={cx} dy={n === 0 ? 0 : 14}>
              {line}
            </tspan>
          ))}
        </text>
      ))}

      {/* The two ways out of that quadrant, drawn crossing the boundary each
          one moves you across. */}
      <line
        x1={X1 - 26}
        y1={MY - 26}
        x2={X1 - 26}
        y2={MY + 26}
        stroke={ink.cool}
        strokeWidth="1.5"
        markerEnd="url(#na-arrow)"
      />
      <text x={X1 - 20} y={MY + 24} {...small} fill={ink.cool}>
        {t.lever}
      </text>

      <line
        x1={MX + 30}
        y1={MY - 6}
        x2={MX - 30}
        y2={MY - 6}
        stroke={ink.cool}
        strokeWidth="1.5"
        markerEnd="url(#na-arrow)"
      />
      <text x={MX} y={MY + 14} textAnchor="middle" {...small} fill={ink.cool}>
        {t.lever2}
      </text>

      {/* Axes. */}
      <text x={X0 - 14} y={Y0 + 14} textAnchor="end" {...label}>
        {t.yHigh}
      </text>
      <text x={X0 - 14} y={Y1 - 2} textAnchor="end" {...label}>
        {t.yLow}
      </text>
      <text x={X0} y={Y1 + 26} {...label}>
        {t.xLow}
      </text>
      <text x={X1} y={Y1 + 26} textAnchor="end" {...label}>
        {t.xHigh}
      </text>
    </Figure>
  );
}
