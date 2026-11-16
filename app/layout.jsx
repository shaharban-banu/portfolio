import "./globals.css";
import { profile } from "../data/content";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.positioning,
};

const themeScript = `try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
