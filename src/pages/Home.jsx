import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import FigurePlaceholder from '../components/FigurePlaceholder.jsx';
import { site } from '../data/site.js';
import { currentResearchIntro, projects } from '../data/research.js';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  email: `mailto:${site.email}`,
  url: site.url,
  sameAs: [site.links.github, site.links.linkedin, site.links.orcid],
};

export default function Home() {
  return (
    <>
      <Seo title="Gabriel Penedo" description={site.defaultDescription} path="/">
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Seo>

      <section className="py-14 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_220px] md:gap-16 md:items-start">
          <div>
            <h1 className="text-4xl md:text-6xl">{site.name}</h1>
            <p className="mt-4 text-sm md:text-base tracking-label text-ink-muted">
              {site.descriptor}
            </p>
            <div className="mt-10 md:mt-12 prose-measure space-y-6">
              {site.statement.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <Link className="link-quiet" to="/research">
                View Research
              </Link>
              <Link className="link-quiet" to="/cv">
                CV
              </Link>
            </div>
          </div>

          <FigurePlaceholder
            src={site.portrait.src}
            alt={site.portrait.alt}
            width={site.portrait.width}
            height={site.portrait.height}
            className="max-w-[220px] md:mt-3"
          />
        </div>
      </section>

      <Section label="Current Research">
        <p className="prose-measure">{currentResearchIntro}</p>
        <div className="mt-10 md:mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              href={project.href}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
