"use client";
export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
  };
  return (
    <button onClick={toggle} aria-label="Switch between light and dark theme"
      className="rounded-md border border-line px-3 py-1 text-sm text-muted transition-colors hover:border-accent hover:text-fg">
      Theme
    </button>
  );
}
