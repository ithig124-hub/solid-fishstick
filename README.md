# Hacker's Toolkit

> Build anything. Find the right tools fast.

A static, zero-backend guide site made **for Hack Club, by hackers**. It's your go-to library of copy-paste-ready integration guides for the stuff every project eventually needs: payments, AI, auth, databases, email/SMS, image generation, and deployment.

Live site: `https://ithig124-hub.github.io/solid-fishstick/` (once GitHub Pages is enabled — see below).

---

## What it does

- **Landing page (`index.html`)** — hero pitch, a "How it works" section, and the 6 most-viewed guides.
- **Browse page (`browse.html`)** — search across all guides + filter by **category** (Payments, AI Integration, Deployment, Authentication, Storage & Databases, Email/SMS, Image Generation) and **difficulty** (Beginner / Intermediate / Advanced). Live results count updates as you type.
- **Guide detail (`guide.html?id=<guide-id>`)** — full walkthrough with required API keys, tags, setup time, syntax-highlighted code snippets (Prism.js), a **Copy** button on every snippet, and a **Helpful** vote button.
- **Light / dark theme toggle** — persisted in `localStorage`.
- **View counts + helpful votes** — stored per-browser in `localStorage` (no backend needed).

All 14 guides ship inline in `guides-data.js` — no fetch, no DB, no API keys required to *run* the site.

---

## File layout

```
solid-fishstick/
├── index.html            # Landing page
├── browse.html           # Browse + filter + search
├── guide.html            # Guide detail page
├── styles.css            # All styling (dark/light themes, cards, typography)
├── theme.js              # Theme toggle + persistence
├── guides-data.js        # Guide data + localStorage stats API (window.GuidesDB)
├── landing.js            # Renders landing page featured cards
├── browse.js             # Search / filter / render for browse page
├── guide.js              # Renders a single guide by ?id=...
├── guides.json           # (kept empty; reserved for future JSON export)
├── .nojekyll             # Tells GitHub Pages to skip Jekyll processing
└── .github/workflows/
    └── pages.yml         # Auto-deploy to GitHub Pages on push to main
```

---

## Running locally

It's plain HTML/JS — no build step. Just serve the folder:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then open `http://localhost:8000`.

> Opening files directly with `file://` mostly works, but a local server is safer (some browsers block `fetch`/module behavior on `file://`).

---

## Deploying to GitHub Pages

### Option A — GitHub Actions (recommended, already wired up)

1. Push your changes to `main`.
2. In the repo: **Settings → Pages → Source → "GitHub Actions"**.
3. The included `.github/workflows/pages.yml` will build and deploy on every push.
4. Live at `https://<your-username>.github.io/<repo-name>/` within ~1 minute.

### Option B — Deploy from branch

1. **Settings → Pages → Source → "Deploy from a branch"** → pick `main` / root.
2. Save. Site publishes at the same URL.

The `.nojekyll` file is already committed so files starting with `_` (if any) aren't stripped.

---

## Adding a new guide

Open `guides-data.js` and add an object to the `GUIDES_DATA` array:

```js
{
  id: "your-guide-slug",              // used in guide.html?id=your-guide-slug
  title: "Your Guide Title",
  description: "One-line description shown on cards.",
  category: "AI Integration",         // must match one of the existing categories
  difficulty: "Beginner",             // Beginner | Intermediate | Advanced
  setup_time: "15 minutes",
  tags: ["tag1", "tag2"],
  api_keys_needed: ["Some API Key"],  // shown in the yellow "Required API Keys" box
  content: `# Markdown-ish content

## Overview
Explain what the integration does...

## Step 1
Do the thing.`,
  code_snippets: [
    {
      language: "python",             // python | javascript | json | bash
      filename: "server.py",          // optional
      code: `print("hello hack club")`
    }
  ],
  views: 0,
  helpful_votes: 0
}
```

That's it — the new card appears on browse + landing pages automatically. To add a brand-new category, just use a new `category` string; the category tab is generated from the data.

---

## Tech

- Vanilla HTML / CSS / JS — **no framework, no bundler**.
- [Lucide](https://lucide.dev/) for icons (via CDN).
- [Prism.js](https://prismjs.com/) for code syntax highlighting (via CDN).
- Google Fonts: **Cabinet Grotesk** (headings), **IBM Plex Sans** (body), **JetBrains Mono** (code).

---

## Credits

Built with love by the Hack Club community. [Join Hack Club →](https://hackclub.com)
