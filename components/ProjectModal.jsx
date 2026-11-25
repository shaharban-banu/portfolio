"use client";
import { useEffect } from "react";

function Block({ title, children }) {
  return (<div className="mt-6"><h4 className="font-medium text-accent">{title}</h4><div className="mt-2">{children}</div></div>);
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={project.name} onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-line bg-card p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div><h3 className="font-display text-3xl">{project.name}</h3><p className="text-muted">{project.subtitle}</p></div>
          <button onClick={onClose} aria-label="Close" className="rounded-md border border-line px-3 py-1 hover:border-accent">Close</button>
        </div>
        <Block title="The problem">{project.problem}</Block>
        <Block title="What I built">{project.solution}</Block>
        <Block title="My contribution">
          <ul className="list-disc space-y-1.5 pl-5">{project.contribution.map((c) => <li key={c}>{c}</li>)}</ul>
        </Block>
        <Block title="Outcome">{project.outcome}</Block>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</li>)}
        </ul>
        <a href={project.repo} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md bg-accent px-5 py-2.5 font-medium text-onaccent hover:opacity-90">View on GitHub</a>
      </div>
    </div>
  );
}
