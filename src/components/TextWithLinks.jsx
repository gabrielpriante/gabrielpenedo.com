/**
 * Renders a paragraph of plain text with certain phrases turned into links.
 * The sentence stays a single editable string in the data files; the phrases
 * to link are listed separately as { match, href }.
 */
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export default function TextWithLinks({ text, links = [], className = '' }) {
  if (!links.length) {
    return <p className={className}>{text}</p>;
  }

  const pattern = new RegExp(
    `(${links.map((link) => escapeRegExp(link.match)).join('|')})`,
    'g'
  );

  return (
    <p className={className}>
      {text.split(pattern).map((part, index) => {
        const link = links.find((candidate) => candidate.match === part);
        return link ? (
          <a
            key={`${part}-${index}`}
            className="link-quiet"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {part}
          </a>
        ) : (
          part
        );
      })}
    </p>
  );
}
