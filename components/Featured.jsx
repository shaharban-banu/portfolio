import Visual from "./Visual";
import { projects } from "../data/content";

export default function Featured() {
  return (
    <div className="mx-auto max-w-6xl space-y-20 px-6 py-16">
      {projects.filter((p) => p.featured).map((p, i) => (
        <article key={p.name} className="grid items-center gap-10 md:grid-cols-2">
          <div className={i % 2 ? "md:order-2" : ""}>
            <p className="text-sm text-accent">Featured project</p>
            <h2 className="mt-2 font-display text-4xl tracking-tight">{p.name}</h2>
            <p className="mt-1 text-lg text-muted">{p.subtitle}</p>
            <p className="mt-4">{p.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 6).map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-onaccent hover:opacity-90">Case Study</a>
              <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-md border border-line px-5 py-2.5 hover:border-accent hover:text-accent">GitHub</a>
            </div>
          </div>
          <Visual visual={p.visual} />
        </article>
      ))}
    </div>
  );
}
