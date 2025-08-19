# Architecture Schema

## Stack
- Frontend: Reveal.js + Markdown
- Dev Server: Vite
- Hosting: Vercel

## Structure
- `index.html` loads Reveal.js and plugins (markdown, notes, highlight, search, zoom)
- `slides/deck.md` holds slide content (horizontal + vertical slides)
- `styles/custom.css` applies brand UI and animations
- `planning/` holds PRD, schema, tasks, implementation
- `.cursor/` holds context and rules
- `/mcp` holds MCP YAML config
