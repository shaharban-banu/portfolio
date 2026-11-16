import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      {profile.name}. Built with Next.js and Tailwind CSS.
    </footer>
  );
}
