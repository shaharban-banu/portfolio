import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  const rows = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["LinkedIn", "shaharbanv", profile.linkedin],
    ["GitHub", "shaharban-banu", profile.github],
    ["Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg text-muted">I am open to GenAI, agentic AI and data science roles. Email is the quickest way to reach me.</p>
      <ul className="mt-8 divide-y divide-line border-y border-line">
        {rows.map(([label, text, href]) => (
          <li key={label} className="grid gap-1 py-4 md:grid-cols-[10rem_1fr]">
            <span className="text-muted">{label}</span>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="w-fit text-accent underline-offset-4 hover:underline">{text}</a>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-muted">Based in {profile.location}.</p>
    </Section>
  );
}
