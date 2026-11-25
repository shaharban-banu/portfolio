import Section from "./Section";
import { experience, education, certifications, profile } from "../data/content";

export default function Resume() {
  return (
    <Section id="resume" title="Resume and experience" intro="Experience, training, education and certifications.">
      <a href={profile.resume} target="_blank" rel="noreferrer" className="inline-block rounded-md bg-accent px-5 py-2.5 font-medium text-onaccent hover:opacity-90">Download Resume</a>
      <h3 className="mt-14 text-2xl font-medium">Experience and training</h3>
      <ol className="relative ml-2 mt-8 space-y-10 border-l border-line pl-8">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <p className="text-sm text-accent">{e.period}</p>
            <h4 className="mt-1 text-xl font-medium">{e.role}</h4>
            <p className="text-muted">{e.org}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-medium">Education</h3>
          {education.map((e) => (
            <div key={e.title} className="mt-6 rounded-xl border border-line bg-card p-6">
              <p className="text-sm text-accent">{e.period}</p>
              <h4 className="mt-1 text-lg font-medium">{e.title}</h4>
              <p className="text-muted">{e.org}</p>
              <p className="text-muted">{e.detail}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-medium">Certifications</h3>
          {certifications.map((c) => (
            <div key={c.title} className="mt-6 rounded-xl border border-line bg-card p-6">
              <h4 className="text-lg font-medium">{c.title}</h4>
              <p className="text-muted">{c.org}</p>
              <p className="text-muted">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
