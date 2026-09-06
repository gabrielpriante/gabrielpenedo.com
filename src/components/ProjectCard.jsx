import { Link } from 'react-router-dom';

/**
 * A research entry. Not a boxed card: a title, a one line summary, and an
 * optional paragraph, separated from its neighbours by a hairline top rule.
 * `figure` is reserved for real research imagery and renders nothing when absent.
 */
export default function ProjectCard({ title, summary, detail, href, figure }) {
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
      {figure ? <div className="mt-8">{figure}</div> : null}
    </article>
  );
}
