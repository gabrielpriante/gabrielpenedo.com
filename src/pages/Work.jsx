import Seo from '../components/Seo.jsx';
import { workIntro, organizations } from '../data/work.js';

function Bullets({ items }) {
  return (
    <ul className="mt-6 space-y-3 list-none m-0 p-0">
      {items.map((item) => (
        <li key={item.slice(0, 40)} className="prose-measure pl-5 relative">
          <span aria-hidden="true" className="absolute left-0 text-ink-muted">
            —
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work() {
  return (
    <>
      <Seo
        title="Work · Gabriel Penedo"
        description="Applied professional experience in environmental data collection, geospatial analysis, operations, and data consulting."
        path="/work"
      />

      <section className="py-14 md:py-24">
        <h1 className="text-4xl md:text-5xl">Work</h1>
        <p className="prose-measure mt-6">{workIntro}</p>
      </section>

      {organizations.map((entry) => (
        <section
          key={entry.id}
          className="border-t border-rule py-14 md:py-24"
        >
          <h2 className="text-2xl md:text-3xl">{entry.org}</h2>

          {entry.titles ? (
            <div className="mt-3 space-y-1">
              {entry.titles.map((title) => (
                <p key={title} className="text-sm tracking-label text-ink-muted">
                  {title}
                </p>
              ))}
            </div>
          ) : null}

          {entry.description ? (
            <div className="prose-measure mt-6 space-y-6">
              {entry.description.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {entry.repo ? (
            <p className="mt-4">
              <a
                className="link-quiet"
                href={entry.repo.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {entry.repo.label}
              </a>
            </p>
          ) : null}

          {entry.bullets ? <Bullets items={entry.bullets} /> : null}

          {entry.reflection ? (
            <div className="prose-measure mt-8 space-y-6">
              {entry.reflection.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          ) : null}

          {entry.stack ? (
            <p className="mt-8 text-sm text-ink-muted">{entry.stack}</p>
          ) : null}
        </section>
      ))}
    </>
  );
}
