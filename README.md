# Hassan Mohamed — Personal Portfolio

A clean, responsive personal portfolio website built with React + Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — scroll animations and transitions
- **React Icons** + **Lucide React** — icons
- **Web3Forms** — contact form (no backend needed)
- **GitHub Pages** — deployment via `gh-pages`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) v18 or later

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder.

## Customization

See **`تعليمات.md`** for full Arabic instructions covering:

- Replacing the profile photo (`public/assets/profile.jpeg`)
- Replacing the CV file (`public/assets/cv.pdf`)
- Setting up the Web3Forms contact key (`src/components/Contact.jsx`)
- Editing projects (`src/components/Projects.jsx`)
- Updating contact info (`src/components/Contact.jsx`)
- Deploying to GitHub Pages
- Replacing the favicon (`public/assets/favicon.png`)

## Deployment

1. Push the repository to GitHub.
2. Run:
   ```bash
   npm run deploy
   ```
3. Go to repository **Settings → Pages**, set source branch to `gh-pages`, root folder.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

> If you name the repository exactly `<username>.github.io`, the site is served at the root URL with no subdirectory. In that case, keep `base: '/'` in `vite.config.js` (already the default).

## Project Structure

```
├── public/
│   └── assets/
│       ├── profile.jpeg   ← replace with your photo
│       ├── cv.pdf         ← replace with your CV
│       └── favicon.png    ← replace with your favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── تعليمات.md
```
