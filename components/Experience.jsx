import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience and training">
      <ol className="relative ml-2 space-y-10 border-l border-line pl-8">
        {experience.map((e) => (
          <li key={e.role} className="relative">
            <span className="absolute -left-[2.45rem] top-2 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <h3 className="text-xl font-medium">{e.role}</h3>
            <p className="text-muted">{e.org}, {e.period}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
