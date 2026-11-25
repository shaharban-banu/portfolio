"use client";
import { useState } from "react";
import Section from "./Section";
import ProjectModal from "./ProjectModal";
import { projects, profile } from "../data/content";

export default function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <Section id="projects" title="Projects" intro="Agentic AI, RAG and MLOps projects. Open a case study for the problem, solution and my contribution.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.name} className="flex flex-col rounded-xl border border-line bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent">
            <h3 className="font-display text-2xl">{p.name}</h3>
            <p className="mt-1 text-muted">{p.subtitle}</p>
            <p className="mt-4 flex-1">{p.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</li>)}
            </ul>
            <div className="mt-6 flex gap-3">
              <button onClick={() => setOpen(p)} className="rounded-md bg-accent px-4 py-2 font-medium text-onaccent hover:opacity-90">Case Study</button>
              <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-md border border-line px-4 py-2 hover:border-accent hover:text-accent">GitHub</a>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center text-lg">More projects on <a href={profile.github} target="_blank" rel="noreferrer" className="text-accent underline-offset-4 hover:underline">GitHub</a></p>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </Section>
  );
}
