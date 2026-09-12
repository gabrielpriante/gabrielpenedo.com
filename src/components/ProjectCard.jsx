import { Link } from 'react-router-dom';
import FigurePlaceholder from './FigurePlaceholder.jsx';

/**
 * A research entry. Not a boxed card: a title, a one line summary, and an
 * optional paragraph, separated from its neighbours by a hairline top rule.
 *
 * `figures`          optional array of { src, alt, width, height, label, caption },
 *                    laid out full width, or side by side when there is more than one.
 * `comparison`       optional array of the same shape, always a two column pair on
 *                    desktop, stacked in order on mobile.
 * `comparisonFirst`  renders the comparison pair above `figures` instead of below.
 * `link`             optional { label, href } rendered as a quiet text link.
 */
function Figure({ item }) {
  return (
    <div>
      {item.label ? <p className="section-label mb-3">{item.label}</p> : null}
      <FigurePlaceholder
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        caption={item.caption}
      />
    </div>
  );
}

export default function ProjectCard({
  title,
  summary,
  detail,
  href,
  figures,
  comparison,
  comparisonFirst = false,
  link,
}) {
  const hasFigures = Array.isArray(figures) && figures.length > 0;
  const hasComparison = Array.isArray(comparison) && comparison.length > 0;

  const figuresBlock = hasFigures ? (
    <div
      className={`max-w-3xl grid gap-4 ${
        figures.length > 1 ? 'sm:grid-cols-2' : ''
      }`}
    >
      {figures.map((figure) => (
        <Figure key={figure.src} item={figure} />
      ))}
    </div>
  ) : null;

  const comparisonBlock = hasComparison ? (
    <div className="max-w-3xl grid gap-6 sm:grid-cols-2 sm:gap-4">
      {comparison.map((item) => (
        <Figure key={item.src} item={item} />
      ))}
    </div>
  ) : null;

  const first = comparisonFirst ? comparisonBlock : figuresBlock;
  const second = comparisonFirst ? figuresBlock : comparisonBlock;

  return (
    <article className="border-t border-rule pt-8 mt-8 first:mt-0">
      <h3 className="text-xl md:text-2xl">
        {href ? (
          <Link to={href} className="link-quiet">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="prose-measure mt-3 text-ink-muted">{summary}</p>
      {detail ? <p className="prose-measure mt-4">{detail}</p> : null}

      {first ? <div className="mt-8">{first}</div> : null}
      {second ? <div className="mt-6">{second}</div> : null}

      {link ? (
        <p className="mt-6 text-sm">
          <a
            className="link-quiet"
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        </p>
      ) : null}
    </article>
  );
}
