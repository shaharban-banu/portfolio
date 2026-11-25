"use client";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data/content";

const links = [["Home", "#home"], ["About", "#about"], ["Resume", "#resume"], ["Projects", "#projects"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-line" style={{ backgroundColor: "color-mix(in srgb, var(--bg) 88%, transparent)", backdropFilter: "blur(8px)" }}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-display text-lg">{profile.name}</a>
        <div className="flex items-center gap-4 text-sm">
          <ul className="hidden gap-6 text-muted md:flex">
            {links.map(([l, h]) => <li key={h}><a href={h} className="transition-colors hover:text-accent">{l}</a></li>)}
          </ul>
          <ThemeToggle />
          <button className="rounded-md border border-line px-3 py-1 text-muted md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>Menu</button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line px-6 py-2 md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-2 text-muted hover:text-accent">{l}</a></li>)}
        </ul>
      )}
    </header>
  );
}
