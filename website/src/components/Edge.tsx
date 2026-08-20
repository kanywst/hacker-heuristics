/**
 * The edge of the stone: a band of cuneiform running down the outside of the
 * sheet, the way the original runs in columns.
 *
 * It says nothing — it is texture, not text — so it is hidden from assistive
 * technology, and it disappears below the point where the width it costs is
 * width the law needs.
 */
const WEDGES = '\u{12079}\u{1230B}\u{12038}\u{1201F}\u{12000}\u{1202D}';

export default function Edge() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-20 justify-center overflow-hidden border-r border-rule-soft lg:flex"
    >
      <p className="edge py-6">{WEDGES.repeat(40)}</p>
    </div>
  );
}
