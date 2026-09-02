# AUTOMEXUSA — Mobile ADAS Calibration Website

A marketing website for AUTOMEXUSA, a mobile ADAS (Advanced Driver Assistance
Systems) calibration business serving South Florida. Built with Next.js
(static export) and Tailwind CSS, designed to deploy for free on Cloudflare
Pages.

Pages: Home, Services, Service Area, About, Contact (with a working quote
request form).

---

## 1. Before you touch any code: swap the placeholder info

Almost everything editable lives in one file:

```
src/lib/site.ts
```

Open it and replace:

- `phone` / `phoneHref` — your real business phone number
- `email` — your real business email
- `formspreeEndpoint` — see step 5 below, this powers the contact form
- `hours`, `address` if needed
- `serviceAreas` / `counties` / `services` / `customerTypes` / `whyUs` — edit
  the copy to match your actual services and coverage area

Everything else (page layout, styling, navigation) reads from this file, so
you only need to edit it in one place.

---

## 2. Setting up your environment on Windows 11

You mentioned you already have VS Code and Visual Studio installed — you
don't need Visual Studio (the full IDE) for this project, VS Code is enough.
Here's everything else you need:

### Install Node.js

Next.js needs Node.js (version 20 or newer).

1. Go to https://nodejs.org and download the **LTS** installer for Windows.
2. Run the installer, accepting the defaults (make sure "Add to PATH" stays
   checked).
3. Open a new terminal (PowerShell or Windows Terminal) and confirm it
   installed:
   ```
   node -v
   npm -v
   ```
   You should see version numbers for both.

Alternative if you prefer the command line: open PowerShell as Administrator
and run `winget install OpenJS.NodeJS.LTS`.

### Install Git

1. Download from https://git-scm.com/download/win and run the installer
   with default options.
2. Confirm with `git --version` in a terminal.

### Get the project into VS Code

1. Unzip the project folder you received (or clone it from GitHub once you've
   pushed it there — see step 6).
2. Open VS Code, then **File → Open Folder…** and select the `automexusa`
   folder.
3. Open the built-in terminal in VS Code: **Terminal → New Terminal**.

### Recommended VS Code extensions

Install these from the Extensions panel (Ctrl+Shift+X) for the best editing
experience:

- **Tailwind CSS IntelliSense** (by Tailwind Labs) — autocomplete for the
  utility classes used throughout this project
- **ESLint** (by Microsoft) — flags code issues as you type
- **Prettier – Code formatter** — optional, for auto-formatting

### Install dependencies and run locally

In the VS Code terminal, inside the `automexusa` folder:

```
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The site hot-reloads as you
edit files.

To build the static site (what actually gets deployed):

```
npm run build
```

This produces a static, ready-to-host copy of the site in the `out/` folder.

---

## 3. Project structure

```
src/
  app/
    page.tsx              Home page
    services/page.tsx     Services page
    service-area/page.tsx Service area page
    about/page.tsx        About page
    contact/page.tsx      Contact page
    layout.tsx            Shared layout (header/footer wrapper)
    globals.css           Color palette + shared styles
  components/
    Header.tsx            Nav bar (with mobile menu)
    Footer.tsx
    CTASection.tsx         Reusable "call to action" band
    ContactForm.tsx        The quote request form
  lib/
    site.ts                All business info, services, and copy
```

---

## 4. Contact form: Formspree setup (free)

The contact form needs somewhere to send submissions to, since this is a
static site with no server of its own. [Formspree](https://formspree.io) is
free for up to 50 submissions/month and takes 5 minutes to set up:

1. Go to https://formspree.io and create a free account.
2. Click **New Form**, give it a name (e.g. "AUTOMEXUSA Contact Form").
3. Formspree gives you an endpoint URL like
   `https://formspree.io/f/abc123xy`.
4. Open `src/lib/site.ts` and replace the `formspreeEndpoint` placeholder
   with that URL.
5. Submit a test message from the site once deployed — Formspree emails you
   the submission and asks you to confirm your form the first time.

No other code changes are needed — the form is already wired up to POST to
whatever URL you put there.

---

## 5. Deploying for free on Cloudflare Pages

The easiest and most maintainable way is to connect Cloudflare Pages to a
GitHub repository, so every `git push` automatically redeploys the site.

### Step A — Push the project to GitHub

1. Create a free account at https://github.com if you don't have one.
2. Create a new empty repository (e.g. `automexusa-website`) — don't
   initialize it with a README.
3. In the VS Code terminal, inside the project folder:
   ```
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/automexusa-website.git
   git push -u origin main
   ```
   (Replace the URL with the one GitHub shows you after creating the repo.)

### Step B — Connect Cloudflare Pages

1. Create a free account at https://dash.cloudflare.com if you don't have
   one.
2. In the sidebar, go to **Workers & Pages → Create → Pages → Connect to
   Git**.
3. Authorize Cloudflare to access your GitHub account and select the
   repository you just pushed.
4. Configure the build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Click **Save and Deploy**. The first build takes a minute or two.
6. You'll get a free `*.pages.dev` URL immediately. Every future
   `git push` to `main` automatically redeploys.

### Step C — Add your own domain (optional, domain purchase not free)

If you own a domain (or want to buy one), go to your Pages project →
**Custom domains → Set up a custom domain** and follow the prompts.
Cloudflare handles the SSL certificate automatically.

---

## 6. Making future edits

Once deployed via GitHub, the workflow for any change is:

1. Edit files in VS Code (most content changes only touch `src/lib/site.ts`).
2. Run `npm run dev` locally to preview.
3. `git add .`, `git commit -m "describe your change"`, `git push`.
4. Cloudflare Pages automatically rebuilds and deploys within a minute.
