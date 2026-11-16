import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((g) => (
          <div key={g.group} className="grid gap-2 py-4 md:grid-cols-[14rem_1fr]">
            <dt className="font-medium">{g.group}</dt>
            <dd className="text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
