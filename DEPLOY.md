# Deploy Portfolio — Step by Step Guide

## What Files Were Created

| File | Purpose |
|------|---------|
| `package.json` | Declares the project and `npm run build` / `npm run dev` scripts |
| `vite.config.js` | Configures Vite to bundle your self-contained HTML portfolio for deployment |
| `.gitignore` | Tells Git to ignore `node_modules/` and `dist/` |
| `netlify.toml` | Netlify deployment configuration (build command + publish directory) |

## Why No npm / package.json Existed Before

Your `index.html` is a **fully self-contained** portfolio — it loads React, Tailwind CSS, and Babel directly from CDN links inside the HTML. No local build tools were needed to view or run it locally.

To **deploy online**, you need Vite to:
1. Bundle `index.html` → `dist/index.html`
2. Copy `public/` folder assets (photo, resume) → `dist/`

---

## Step 1 — Install Node.js (Required)

Node.js is not currently installed on your computer.

1. Go to: https://nodejs.org/en/download
2. Download the **LTS version** (Long Term Support) for Windows
3. Run the installer — click Next → Next → Install → Finish
4. Restart your computer (or open a **new** PowerShell window)

Verify it worked:
```powershell
node -v
npm -v
```
Both should print version numbers like `v20.x.x` and `10.x.x`.

---

## Step 2 — Install Project Dependencies

Open PowerShell in your portfolio folder:
```powershell
cd "D:\Portfolio Lakshmi Pradha"
npm install
```

This installs Vite into the `node_modules/` folder.

---

## Step 3 — Build for Production

```powershell
npm run build
```

This creates a `dist/` folder containing:
- `dist/index.html` — your full portfolio page
- `dist/lakshmi-pradha.png` — your photo
- `dist/resume.html` — your resume

---

## Step 4 — Deploy Online (Choose One)

### Option A — Netlify (Easiest, Free)
1. Go to https://netlify.com and sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag and drop your `dist/` folder into Netlify
4. Your site is live instantly! ✅

### Option B — Netlify via Git (Auto-deploy on every change)
1. Push your project to GitHub
2. Connect GitHub repo to Netlify
3. Netlify uses `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option C — Vercel (Also Free)
1. Go to https://vercel.com
2. Import your GitHub repository
3. Framework preset: **Other**
4. Build command: `npm run build`
5. Output directory: `dist`

### Option D — GitHub Pages
1. Push your project to GitHub
2. Go to Settings → Pages → GitHub Actions
3. Deploy from `dist/` folder

---

## Your Project Structure (Untouched)

```
Portfolio Lakshmi Pradha/
├── index.html              ← Main portfolio (self-contained)
├── package.json            ← NEW: project config
├── vite.config.js          ← NEW: Vite build config
├── netlify.toml            ← NEW: Netlify deploy config
├── .gitignore              ← NEW: Git ignore file
├── public/
│   ├── lakshmi-pradha.png  ← Your photo (served at root)
│   └── resume.html         ← Resume (served at root)
└── src/                    ← Preserved untouched
    ├── components/
    ├── assets/
    └── styles/
```

No existing files were deleted or changed.
