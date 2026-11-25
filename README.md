# Shaharban V: GenAI Engineer Portfolio

A single-page portfolio for a GenAI engineer and data scientist, structured like a classic developer portfolio: Home (hero and featured projects), About (facts, skills, counter), Resume (experience, education, certifications), Projects (cards with case-study popups) and Contact. Dark by default with a light theme toggle.

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
components/     Hero, Featured, About, Resume, Projects, ProjectModal, Contact, AgentGraph, Visual
public/         resume.pdf and images/ (add profile.jpg)
data/content.js all text, links and project details
```

## Customize

- **Content:** edit `data/content.js` (profile, about, projects, skills, experience, education).
- **Photo:** add `public/images/profile.jpg`. Initials show until then.
- **Resume:** replace `public/resume.pdf`.
- **Project links:** set `repo` on each project in `data/content.js` (the Iris project still points to your GitHub profile).
- **Featured projects:** set `featured: true` and a `visual` on a project.
- **Colors:** change the CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark).
- **Hero diagram:** edit the `agents` array in `components/AgentGraph.jsx`.
- **Section order:** reorder components in `app/page.jsx`.

## Deploy

Push to GitHub and import the repository in Vercel. No configuration is needed.
