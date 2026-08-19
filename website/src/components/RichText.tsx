import { Fragment } from 'react';

// The codex is authored as markdown, so a handful of fields carry inline
// emphasis — book and paper titles in italics, the letters of CAP in bold. The
// site renders those two forms and nothing else; anything richer belongs in the
// markdown surface, not in a card.
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;

export default function RichText({ children }: { children: string }) {
  const parts = children.split(TOKEN).filter((part) => part !== '');

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index}>{part.slice(1, -1)}</em>;
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
