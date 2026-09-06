import Seo from '../components/Seo.jsx';
import Section from '../components/Section.jsx';
import { site } from '../data/site.js';
import {
  contact,
  education,
  graduateCoursework,
  researchExperience,
  independentProjects,
  selectedWriting,
  technicalSkills,
  certifications,
  additionalExperience,
} from '../data/cv.js';

function PlainList({ items }) {
  return (
    <ul className="space-y-3 list-none m-0 p-0">
      {items.map((item) => (
        <li key={item} className="prose-measure">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function CV() {
  return (
    <>
      <Seo
        title="Curriculum Vitae · Gabriel Penedo"
        description="Curriculum vitae for Gabriel Penedo: education, research and data experience, independent projects, writing, technical skills, and certifications."
        path="/cv"
      />

      <section className="py-14 md:py-24">
        <h1 className="text-4xl md:text-5xl">Curriculum Vitae</h1>
        <p className="mt-8">
          <a className="link-quiet" href={site.cvFile}>
            Download CV (PDF)
          </a>
        </p>
      </section>

      <Section label="Contact">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <a className="link-quiet" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          {contact.links.map((link) => (
            <span key={link.href} className="flex items-center gap-x-3">
              <span aria-hidden="true" className="text-rule">
                ·
              </span>
              <a
                className="link-quiet"
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            </span>
          ))}
        </p>
      </Section>

      <Section label="Education">
        <PlainList items={education} />
      </Section>

      <Section label="Graduate Coursework">
        <p className="prose-measure">{graduateCoursework}</p>
      </Section>

      <Section label="Research and Data Experience">
        <PlainList items={researchExperience} />
      </Section>

      <Section label="Independent Projects">
        <div>
          {independentProjects.map((project) => (
            <article
              key={project.title}
              className="border-t border-rule pt-8 mt-8 first:mt-0"
            >
              <h3 className="text-xl md:text-2xl">{project.title}</h3>
              <p className="prose-measure mt-3 text-ink-muted">{project.summary}</p>
              {project.body ? (
                <p className="prose-measure mt-4">{project.body}</p>
              ) : null}
              <p className="mt-4 text-sm">
                <a
                  className="link-quiet"
                  href={project.link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.link.label}
                </a>
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Selected Writing">
        <div>
          {selectedWriting.map((item) => (
            <article key={item.title}>
              <h3 className="text-xl md:text-2xl prose-measure">
                {item.title}
              </h3>
              <p className="mt-3 text-sm tracking-label text-ink-muted">
                {item.date}
              </p>
              <p className="prose-measure mt-4">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="Technical Skills">
        <dl className="m-0 space-y-5">
          {technicalSkills.map((skill) => (
            <div key={skill.label}>
              <dt className="text-sm tracking-label text-ink-muted">
                {skill.label}
              </dt>
              <dd className="prose-measure m-0 mt-1">{skill.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section label="Certifications and Awards">
        <PlainList items={certifications} />
      </Section>

      <Section label="Additional Professional Experience">
        <PlainList items={additionalExperience} />
      </Section>
    </>
  );
}
