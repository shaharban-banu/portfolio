import AgentGraph from "./AgentGraph";
import { profile } from "../data/content";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-5xl items-center gap-12 px-6 pb-12 pt-16 md:grid-cols-2 md:pt-24">
      <div>
        <p className="text-muted">{profile.title}</p>
        <h1 className="mt-3 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">{profile.name}</h1>
        <p className="mt-6 max-w-md text-xl">{profile.positioning}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90">See ExecuMind AI</a>
          <a href="#contact" className="rounded-md border border-line px-5 py-2.5 transition-colors hover:border-accent">Contact me</a>
        </div>
      </div>
      <AgentGraph />
    </section>
  );
}
