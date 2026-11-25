import Section from "./Section";
import Counter from "./Counter";
import { about, facts, skills, stats } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4 text-lg text-muted">{about.map((p) => <p key={p}>{p}</p>)}</div>
        <dl className="h-fit space-y-3 rounded-xl border border-line bg-card p-6">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-2">
              <dt className="text-muted">{k}</dt><dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <h3 className="mt-16 text-2xl font-medium">Core expertise and skills</h3>
      <div className="mt-6 space-y-5">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-2 md:grid-cols-[15rem_1fr]">
            <p className="text-muted">{g.group}</p>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm transition-colors hover:border-accent hover:text-accent">{s}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-16 border-y border-line py-10"><Counter value={stats.value} label={stats.label} /></div>
    </Section>
  );
}
