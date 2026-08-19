import Figure, { ink, label, small } from './Figure';
import type { Locale } from '@/data/laws';

const COPY = {
  en: {
    title:
      'A queue with arrival rate lambda, L items in the system, and time W spent in it',
    caption:
      'L = λW binds the three quantities, so you cannot move one without moving another. Arrival rate is set by your users, not by you. That leaves one lever you actually control: cap the work in progress, and latency falls out of the arithmetic — no faster server required.',
    arrivals: 'Arrivals λ',
    departures: 'Departures',
    inSystem: 'L items in the system',
    time: 'W — time each item spends inside',
    law: 'L = λW',
    lever: 'cap L → W falls, with λ unchanged',
  },
  ja: {
    title: '到着率 λ、系内の item 数 L、滞在時間 W を持つ待ち行列',
    caption:
      'L = λW は3つの量を縛り合う。ひとつを動かせば必ず別のものが動く。到着率を決めるのは利用者であってこちらではない。残る、実際に握れているレバーはひとつ——仕掛りに上限を掛ければ、レイテンシは算術として落ちる。速いサーバは要らない。',
    arrivals: '到着 λ',
    departures: '退出',
    inSystem: '系内の item 数 L',
    time: 'W —— 各 item が中で過ごす時間',
    law: 'L = λW',
    lever: 'L に上限を掛ける → λ はそのままで W が落ちる',
  },
} as const;

const BOX = { x: 170, y: 62, w: 260, h: 74 };

export default function LittlesLaw({ lang }: { lang: Locale }) {
  const t = COPY[lang];

  return (
    <Figure title={t.title} caption={t.caption} viewBox="0 0 600 230">
      <defs>
        <marker
          id="ll-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill={ink.line} />
        </marker>
      </defs>

      <line
        x1="40"
        y1={BOX.y + BOX.h / 2}
        x2={BOX.x - 6}
        y2={BOX.y + BOX.h / 2}
        stroke={ink.line}
        strokeWidth="1.5"
        markerEnd="url(#ll-arrow)"
      />
      <text x="40" y={BOX.y + BOX.h / 2 - 12} {...label}>
        {t.arrivals}
      </text>

      <rect
        x={BOX.x}
        y={BOX.y}
        width={BOX.w}
        height={BOX.h}
        rx="6"
        fill={ink.panel}
        stroke={ink.line}
        strokeOpacity="0.5"
      />

      {Array.from({ length: 7 }, (_, i) => (
        <rect
          key={i}
          x={BOX.x + 18 + i * 34}
          y={BOX.y + 26}
          width="24"
          height="24"
          rx="3"
          fill={ink.accent}
          fillOpacity={i < 5 ? 0.85 : 0.25}
        />
      ))}

      <text x={BOX.x + BOX.w / 2} y={BOX.y - 12} textAnchor="middle" {...label}>
        {t.inSystem}
      </text>

      <line
        x1={BOX.x + BOX.w + 6}
        y1={BOX.y + BOX.h / 2}
        x2="560"
        y2={BOX.y + BOX.h / 2}
        stroke={ink.line}
        strokeWidth="1.5"
        markerEnd="url(#ll-arrow)"
      />
      <text x="560" y={BOX.y + BOX.h / 2 - 12} textAnchor="end" {...label}>
        {t.departures}
      </text>

      {/* W as the span across the box. */}
      <line
        x1={BOX.x}
        y1={BOX.y + BOX.h + 16}
        x2={BOX.x + BOX.w}
        y2={BOX.y + BOX.h + 16}
        stroke={ink.cool}
        strokeWidth="1.5"
      />
      <line
        x1={BOX.x}
        y1={BOX.y + BOX.h + 11}
        x2={BOX.x}
        y2={BOX.y + BOX.h + 21}
        stroke={ink.cool}
        strokeWidth="1.5"
      />
      <line
        x1={BOX.x + BOX.w}
        y1={BOX.y + BOX.h + 11}
        x2={BOX.x + BOX.w}
        y2={BOX.y + BOX.h + 21}
        stroke={ink.cool}
        strokeWidth="1.5"
      />
      <text
        x={BOX.x + BOX.w / 2}
        y={BOX.y + BOX.h + 36}
        textAnchor="middle"
        {...small}
        fill={ink.cool}
      >
        {t.time}
      </text>

      <text
        x="300"
        y="26"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="22"
        fill={ink.accentBright}
      >
        {t.law}
      </text>
      <text
        x="300"
        y="196"
        textAnchor="middle"
        {...small}
        fill={ink.accentBright}
      >
        {t.lever}
      </text>
    </Figure>
  );
}
