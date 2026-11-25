import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 text-center text-sm text-muted">
      <div className="mb-3 flex justify-center gap-6 text-base">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
        <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
      </div>
      <p>&copy; {profile.name}. Built with Next.js and Tailwind CSS.</p>
    </footer>
  );
}
