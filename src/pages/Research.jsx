import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TextWithLinks from '../components/TextWithLinks.jsx';
import {
  currentResearchIntro,
  currentResearchLinks,
  projects,
  interests,
} from '../data/research.js';

export default function Research() {
  return (
    <>
      <Seo
        title="Research · Gabriel Penedo"
        description="Current research on reliable environmental AI, field-grounded machine learning, and geospatial decision systems, with related research interests."
        path="/research"
      />

      <section className="py-14 md:py-24">
        <h1 className="text-4xl md:text-5xl">Research</h1>
      </section>

      <Section label="Current Research">
        <TextWithLinks
          className="prose-measure"
          text={currentResearchIntro}
          links={currentResearchLinks}
        />
        <div className="mt-10 md:mt-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              detail={project.detail}
              href={project.href}
              figures={project.figures}
            />
          ))}
        </div>
      </Section>

      <Section label="Research Interests">
        <div>
          {interests.map((interest) => (
            <article
              key={interest.title}
              className="border-t border-rule pt-8 mt-8 first:mt-0"
            >
              <h3 className="text-xl md:text-2xl">{interest.title}</h3>
              <p className="prose-measure mt-3">{interest.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
