# Shaharban V: GenAI Engineer Portfolio

A responsive portfolio site for a GenAI engineer and data scientist. It leads with ExecuMind AI, a multi-agent platform, and shows the architecture as the hero diagram. Light and dark themes are included (dark by default).

## Technology stack

Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys, environment variables or external fonts.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For a production check, run `npm run build` then `npm start`.

## Project structure

```
app/            layout, page, global styles and theme variables
components/     Hero, AgentGraph, Projects, About, Skills, Experience, Education, Contact
data/content.js all text, links and project details
```

## Customize

- **Content:** edit `data/content.js` (profile, about, projects, skills, experience, education).
- **Project repository links:** set `repo` on each project in `data/content.js`. Until then, links go to your GitHub profile.
- **Colors:** change the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).
- **Hero diagram:** edit the `agents` array in `components/AgentGraph.jsx`.
- **Section order:** reorder components in `app/page.jsx`.

## Deploy

Push to GitHub and import the repository in Vercel. No configuration is needed.
