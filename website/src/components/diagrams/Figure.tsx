import type { ReactNode } from 'react';

/**
 * The frame every diagram shares: a captioned, labelled SVG that scales with the
 * column rather than a fixed-size image.
 *
 * The diagrams are inline SVG rather than files so they can use the page's own
 * colour tokens — a diagram that hardcodes its palette stops matching the text
 * around it the first time the theme moves.
 */
export default function Figure({
  title,
  caption,
  viewBox,
  children,
}: {
  title: string;
  caption: string;
  viewBox: string;
  children: ReactNode;
}) {
  return (
    <figure className="mt-6 max-w-[46rem]">
      <div className="overflow-x-auto border border-rule-soft bg-field-sunk p-5">
        <svg
          viewBox={viewBox}
          role="img"
          aria-label={title}
          className="block h-auto w-full min-w-[520px]"
        >
          <title>{title}</title>
          {children}
        </svg>
      </div>
      <figcaption className="mt-3 text-[0.6875rem] leading-relaxed text-relief-faint">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Shared drawing constants, so the diagrams read as one set. */
export const ink = {
  line: 'var(--color-relief-dim)',
  faint: 'var(--color-rule-soft)',
  text: 'var(--color-relief)',
  dim: 'var(--color-relief-dim)',
  accent: 'var(--color-rubric)',
  accentBright: 'var(--color-rubric-bright)',
  cool: 'var(--color-relief-dim)',
  panel: 'var(--color-field-sunk)',
};

export const label = {
  fontFamily: 'var(--font-mono)',
  fontSize: 13,
  fill: ink.text,
} as const;

export const small = {
  fontFamily: 'var(--font-mono)',
  fontSize: 11,
  fill: ink.dim,
} as const;
