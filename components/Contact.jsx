import Section from "./Section";
import { profile } from "../data/content";

export default function Contact() {
  const items = [
    ["Address", profile.location, null],
    ["Contact number", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`],
    ["Email address", profile.email, `mailto:${profile.email}`],
    ["Resume", "Download Resume", profile.resume],
  ];
  return (
    <Section id="contact" title="Contact me" intro="I am open to GenAI, agentic AI and data science roles. Email is the quickest way to reach me.">
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(([label, text, href]) => (
          <div key={label} className="rounded-xl border border-line bg-card p-6">
            <h3 className="text-muted">{label}</h3>
            {href ? <a href={href} className="mt-1 block break-all text-lg text-accent underline-offset-4 hover:underline">{text}</a> : <p className="mt-1 text-lg">{text}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
