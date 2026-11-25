/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: "var(--bg)", card: "var(--card)", onaccent: "var(--on-accent)", fg: "var(--fg)", muted: "var(--muted)", line: "var(--line)", accent: "var(--accent)", signal: "var(--signal)" },
      fontFamily: {
        display: ["Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
