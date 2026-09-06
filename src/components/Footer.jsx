import { Link } from 'react-router-dom';
import { site } from '../data/site.js';
import ThemeToggle from './ThemeToggle.jsx';

const dot = <span aria-hidden="true" className="text-rule">·</span>;

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="container-page py-10 md:py-12">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-muted">
          <span className="text-ink">{site.name}</span>
          {dot}
          <a className="link-quiet" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {dot}
          <a
            className="link-quiet"
            href={site.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          {dot}
          <a
            className="link-quiet"
            href={site.links.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          {dot}
          <a
            className="link-quiet"
            href={site.links.orcid}
            rel="noopener noreferrer"
            target="_blank"
          >
            ORCID
          </a>
          {dot}
          <Link className="link-quiet" to={site.links.cv}>
            CV
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm text-ink-muted">
          <p className="m-0">© {__BUILD_YEAR__} {site.name}</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
