# Kenpo

A productivity app I'm building in React and TypeScript — a focus timer, a stats dashboard, and a Kanban board in one place. This is my main learning project, so I'm writing it by hand (AI for guidance, not generation) to properly understand React rather than lean on shortcuts.

**Status: in active development.** The project is scaffolded and being built feature by feature — see the roadmap below for what's done and what's next.

## Planned features

- **Accounts** — sign up / sign in, stored locally
- **Focus timer** — set your own focus and break durations, with a sound when each finishes and cumulative time tracked across sessions
- **Stats dashboard** — total focus time and session stats, pulled from the timer history
- **Kanban board** — To Do / In Progress / Done columns with drag-and-drop

Data will be persisted with `localStorage` rather than a backend — enough to make it behave like a real app while I focus on the frontend.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **React Router v7** — client-side routing
- **Tailwind CSS** — styling
- **@dnd-kit** — drag-and-drop for the Kanban board *(planned)*
- **localStorage** — data persistence, no backend

## Roadmap

- [x] Project scaffold — Vite, folder structure, routing, TypeScript types
- [x] Auth + localStorage foundation
- [ ] Dashboard skeleton
- [ ] Dual timer (focus + break, cumulative tracking, completion sound)
- [ ] Connect timer data to the dashboard stats
- [ ] Kanban board with drag-and-drop

## Why I'm building it this way

Kenpo is the project where I build deliberately. I chose TypeScript over plain JavaScript to learn it properly, and I'm writing the logic myself rather than generating it — the point is to understand how React actually works (state, routing, data flow), not just to have a finished app.

## Getting Started

```bash
git clone https://github.com/kyleharperdev/kenpo-app
cd kenpo-app
npm install
npm run dev
```

## Contact

**Kyle Harper** — hkyle4658@gmail.com
