# James Lester Lopez — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. It introduces James and showcases selected projects, technical skills, certifications, and contact information.

## Features

- Responsive layout with a persistent header and compact icon navigation on small screens
- Smooth links to the portfolio sections and a back-to-top button
- Sections fade in as they enter the viewport, with a page-load animation
- Project cards with project, demo, and source links
- Certification links and contact call to action
- Reduced-motion support for scrolling and reveal animations

## Tech stack

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- Lucide React and Font Awesome icons
- Animate.css

## Getting started

### Prerequisites

- Node.js supported by the installed Vite version
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
public/
  certificates/       Certification documents
  favicon.svg
src/
  assets/             Profile image, project images, and skill logos
  components/
    buttons/          Reusable buttons
    containers/       Reusable content containers
    layouts/          Header and footer
    sections/         Hero, projects, skills, certifications, and contact
  App.tsx             Page composition
  index.css           Global styles, theme, and fonts
```

## Updating portfolio content

- Edit project details and links in `src/components/sections/ProjectsSection.tsx`.
- Update skills and their logos in `src/components/sections/TechnicalSkillsSection.tsx` and `src/assets/logos/`.
- Update certification details in `src/components/sections/CertificationsSection.tsx` and add documents under `public/certificates/`.
- Update the introduction, social links, and contact information in the relevant files under `src/components/sections/`.

## Production

Run `npm run build`, then deploy the generated `dist/` directory to a static hosting provider that supports single-page applications.
