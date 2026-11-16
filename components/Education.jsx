import Section from "./Section";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education and certifications">
      <ul className="grid gap-8 md:grid-cols-2">
        {education.map((e) => (
          <li key={e.title}>
            <h3 className="text-lg font-medium">{e.title}</h3>
            <p className="text-muted">{e.org}</p>
            <p className="text-muted">{e.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
