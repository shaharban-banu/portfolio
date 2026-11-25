import ProfilePhoto from "./ProfilePhoto";
import { profile } from "../data/content";

const btn = "rounded-md px-5 py-2.5 font-medium transition-colors";

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl scroll-mt-16 items-center gap-12 px-6 pb-16 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
      <div className="fade-up">
        <p className="text-lg text-accent">Hello World! 👋</p>
        <h1 className="mt-2 font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">I&apos;m {profile.name}</h1>
        <p className="mt-3 text-xl text-muted">{profile.title}</p>
        <p className="mt-6 max-w-xl text-lg">{profile.positioning}</p>
        <p className="mt-3 max-w-xl text-muted">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className={`${btn} bg-accent text-onaccent hover:opacity-90`}>Contact Me</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-accent hover:text-accent`}>Resume</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-accent hover:text-accent`}>LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={`${btn} border border-line hover:border-accent hover:text-accent`}>GitHub</a>
        </div>
      </div>
      <ProfilePhoto />
    </section>
  );
}
