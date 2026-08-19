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
    <figure className="mt-6">
      <div className="overflow-x-auto rounded border border-hairline bg-stone/40 p-5">
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
      <figcaption className="mt-3 text-sm leading-relaxed text-carve-dim">
        {caption}
      </figcaption>
    </figure>
  );
}

/** Shared drawing constants, so the diagrams read as one set. */
export const ink = {
  line: 'var(--color-carve-dim)',
  faint: 'var(--color-hairline)',
  text: 'var(--color-carve)',
  dim: 'var(--color-carve-dim)',
  accent: 'var(--color-bronze)',
  accentBright: 'var(--color-bronze-bright)',
  cool: 'var(--color-lapis-bright)',
  panel: 'var(--color-stone)',
};

export const label = {
  fontFamily: 'var(--font-body)',
  fontSize: 13,
  fill: ink.text,
} as const;

export const small = {
  fontFamily: 'var(--font-body)',
  fontSize: 11,
  fill: ink.dim,
} as const;
