import { Link } from 'react-router-dom';
import FigurePlaceholder from './FigurePlaceholder.jsx';

/**
 * A research entry. Not a boxed card: a title, a one line summary, and an
 * optional paragraph, separated from its neighbours by a hairline top rule.
 *
 * `figures`    optional array of { src, alt, width, height, caption }, shown
 *              at the full imagery width used across the Research page.
 * `comparison` optional array of the same shape plus `label`, shown as a
 *              two column pair on desktop and stacked in order on mobile.
 * `link`       optional { label, href } rendered as a quiet text link.
 */
export default function ProjectCard({
  title,
  summary,
  detail,
  href,
  figures,
  comparison,
  link,
}) {
  const hasFigures = Array.isArray(figures) && figures.length > 0;
  const hasComparison = Array.isArray(comparison) && comparison.length > 0;

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

      {hasFigures ? (
        <div
          className={`mt-8 max-w-3xl grid gap-4 ${
            figures.length > 1 ? 'sm:grid-cols-2' : ''
          }`}
        >
          {figures.map((figure) => (
            <FigurePlaceholder
              key={figure.src}
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              caption={figure.caption}
            />
          ))}
        </div>
      ) : null}

      {hasComparison ? (
        <div className="mt-6 max-w-3xl grid gap-6 sm:grid-cols-2 sm:gap-4">
          {comparison.map((item) => (
            <div key={item.src}>
              <p className="section-label mb-3">{item.label}</p>
              <FigurePlaceholder
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                caption={item.caption}
              />
            </div>
          ))}
        </div>
      ) : null}

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
