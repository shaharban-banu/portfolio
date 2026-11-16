import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/content";

const links = [["Projects", "#projects"], ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Contact", "#contact"]];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur" style={{ backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)" }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a href="#top" className="font-display text-lg">{profile.name}</a>
        <div className="flex items-center gap-5 text-sm">
          <ul className="hidden gap-5 text-muted md:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="transition-colors hover:text-fg">{label}</a></li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
