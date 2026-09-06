import { Link } from 'react-router-dom';
import FigurePlaceholder from './FigurePlaceholder.jsx';

/**
 * A research entry. Not a boxed card: a title, a one line summary, and an
 * optional paragraph, separated from its neighbours by a hairline top rule.
 * `figures` is an optional array of { src, alt, width, height }.
 */
export default function ProjectCard({ title, summary, detail, href, figures }) {
  const hasFigures = Array.isArray(figures) && figures.length > 0;

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
    </article>
  );
}
