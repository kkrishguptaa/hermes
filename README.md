# Hermes

Digital Business Card built for Connection 🪬

[![A screenshot of the Hermes Website](https://github.com/kkrishguptaa/hermes/raw/main/.github/screenshot.png)](https://connect.krishg.com)

## 👋 Introduction

Hermes is a minimal digital business card. It is not a portfolio, a blog, or a personal website. The goal is a single, focused surface that helps people connect with you quickly — sparse on the front, dense with contact routes on the back, and nothing else in the way.

The card flips on click, tap, or keyboard to reveal eight ways to reach you: Portfolio, GitHub, Instagram, LinkedIn, X, Email, Poetry, and Blog.

## 📦 Tech Stack

- [Vite](https://vitejs.dev/) - Build tool and dev server.
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript.
- [Vercel](https://vercel.com/) - Hosting platform.

No frameworks. No CSS utilities. Just `index.html`, `src/main.ts`, and `src/style.css`.

### The Card

The page renders a single centered card with two faces.

| Face  | Contents                                                         |
| ----- | ---------------------------------------------------------------- |
| Front | Your name and monogram. Nothing else.                            |
| Back  | Your name, tagline, and a compact two-column grid of contact links. |

Interaction is handled by a small behavior-only `src/main.ts`. A single `isFlipped` boolean drives the state, with a `syncState()` function managing `aria-pressed` and `aria-hidden`. Clicking a link on the back does not trigger a flip. Keyboard users can flip with `Enter` or `Space`. Reduced motion is respected.

The palette is intentionally minimal:

| Token      | Value     |
| ---------- | --------- |
| Background | `#FDFAEC` |
| Ink        | `#001011` |

### Vercel

This website is hosted on Vercel. If you want to deploy it yourself, you can use this handy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkkrishguptaa%2Fhermes&demo-title=Hermes&demo-description=Digital%20Business%20Card%20built%20for%20Connection&demo-url=https%3A%2F%2Fconnect.krishg.com&demo-image=https%3A%2F%2Fgithub.com%2Fkkrishguptaa%2Fhermes%2Fraw%2Fmain%2F.github%2Fscreenshot.png)

## ✌️ Running Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kkrishguptaa/hermes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd hermes
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

No environment variables are required. The site is fully static.

## 📜 License

This source code for this project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.
