import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import { site } from '../data/site.js';

export default function About() {
  return (
    <>
      <Seo
        title="About · Gabriel Penedo"
        description="Background on Gabriel Penedo's path from quantitative economics into environmental computing, GIS, remote sensing, and reliable machine learning systems."
        path="/about"
      />

      <section className="py-14 md:py-24">
        <h1 className="text-4xl md:text-5xl">About</h1>
        <div className="prose-measure mt-10 space-y-6">
          {site.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <Section label={site.enviroEcon.heading}>
        <div className="prose-measure space-y-6">
          {site.enviroEcon.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p>
            <a
              className="link-quiet"
              href={site.enviroEcon.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              enviroecon.com
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
