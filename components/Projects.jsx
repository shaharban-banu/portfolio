import Section from "./Section";
import { projects, profile } from "../data/content";

function Field({ label, children }) {
  return (
    <div>
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="divide-y divide-line border-y border-line">
        {projects.map((p) => (
          <article key={p.name} className={p.featured ? "py-10" : "py-8"}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className={`font-display tracking-tight ${p.featured ? "text-3xl" : "text-2xl"}`}>{p.name}</h3>
              <a href={p.repo || profile.github} target="_blank" rel="noreferrer" className="text-sm text-accent underline-offset-4 hover:underline">
                GitHub, {p.year}
              </a>
            </div>
            <p className="mt-1 text-muted">{p.subtitle}</p>
            <dl className="mt-6 grid gap-6 md:grid-cols-2">
              <Field label="Problem">{p.problem}</Field>
              <Field label="Solution">{p.solution}</Field>
              <Field label="What I built">
                <ul className="list-disc space-y-1.5 pl-5">{p.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
              </Field>
              <Field label="Outcome">{p.outcome}</Field>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-fg">{s}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
