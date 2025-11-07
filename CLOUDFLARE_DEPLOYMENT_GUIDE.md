# Cloudflare Pages Deployment Guide for ATA

This guide explains how to deploy your AdvaTech Africa website to Cloudflare Pages.

## ⚠️ Important Limitation

**Cloudflare Pages cannot run Express.js backends.** Your application currently uses Express.js for the API backend, which requires Node.js runtime. Cloudflare Pages only supports:
- Static sites (HTML, CSS, JavaScript)
- Serverless Functions (file-based routing, not Express)

## 🎯 Recommended Approach: Frontend Only Deployment

Deploy your React frontend to Cloudflare Pages while keeping the backend API on Replit (or another Node.js hosting provider).

### Architecture Overview

```
┌─────────────────────┐
│ Cloudflare Pages    │
│ (Frontend - React)  │ ──HTTP──> ┌──────────────────┐
│ https://ata.pages   │           │ Replit/Render    │
│ .dev                │           │ (Backend API)    │
└─────────────────────┘           │ Express.js       │
                                  └──────────────────┘
```

---

## 📦 Step 1: Prepare Your Project

### 1.1 Update Git Configuration

Your project already has Git initialized. Let's check the status:

```bash
git status
```

### 1.2 Frontend Build Configuration

Your project is already configured to build the frontend. The build outputs to `dist/public` directory. We'll configure Cloudflare Pages to run only the Vite build command (not the full build script which includes backend compilation).

---

## 📤 Step 2: Push to GitHub

Cloudflare Pages deploys from Git repositories (GitHub, GitLab, etc.).

### 2.1 Create GitHub Repository

**Option A: Using GitHub CLI (if installed)**
```bash
gh repo create ata-website --public --source=. --remote=origin --push
```

**Option B: Manual Setup**

1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `ata-website`
3. Make it **Public** or **Private**
4. **Do NOT** initialize with README (your project already has one)

### 2.2 Link Your Local Project to GitHub

```bash
# Add your GitHub repo as remote
git remote add origin https://github.com/YOUR_USERNAME/ata-website.git

# Check current branch
git branch

# If you're not on 'main', rename the branch
git branch -M main

# Stage all files
git add .

# Commit your work
git commit -m "Initial commit - ATA marketing website"

# Push to GitHub
git push -u origin main
```

---

## ☁️ Step 3: Deploy to Cloudflare Pages

### 3.1 Create Cloudflare Account

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Sign up for a free account (or log in)

### 3.2 Create New Pages Project

1. In Cloudflare Dashboard → **Workers & Pages**
2. Click **Create application**
3. Select **Pages** tab
4. Click **Connect to Git**

### 3.3 Connect Your Repository

1. Click **Connect GitHub** (authorize Cloudflare)
2. Select your repository: `ata-website`
3. Click **Begin setup**

### 3.4 Configure Build Settings

**Project name:** `ata-website` (or your preferred subdomain)

**Build settings:**
```
Production branch: main
Framework preset: Vite
Build command: vite build
Build output directory: dist/public
Root directory: (leave empty)
Node.js version: 18
```

**Environment variables:** (Add these if needed)
```
NODE_VERSION = 18
```

### 3.5 Deploy

1. Click **Save and Deploy**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live at: `https://ata-website.pages.dev`

---

## 🔗 Step 4: Connect Backend API

Since your backend remains on Replit, you need to configure the frontend to communicate with it.

### 4.1 Update API Base URL

Create an environment variable file for production:

**In Cloudflare Pages Dashboard:**

1. Go to **Settings** → **Environment variables**
2. Add production variable:
   ```
   Name: VITE_API_URL
   Value: https://YOUR_REPL_NAME.repl.co
   ```

### 4.2 Update Frontend API Calls

Modify `client/src/lib/queryClient.ts` to use the environment variable:

```typescript
const API_URL = import.meta.env.VITE_API_URL || '';

async function fetchWithErrorHandling(url: string, options?: RequestInit) {
  const fullUrl = API_URL + url;
  // ... rest of your fetch logic
}
```

### 4.3 Configure CORS on Backend

Update `server/index.ts` to allow requests from your Cloudflare Pages domain:

```typescript
import cors from 'cors';

app.use(cors({
  origin: [
    'https://ata-website.pages.dev',
    'https://ata.ke', // Your custom domain
    'http://localhost:5173' // Local development
  ],
  credentials: true
}));
```

Install cors package:
```bash
npm install cors
npm install --save-dev @types/cors
```

---

## 🌐 Step 5: Add Custom Domain (Optional)

### 5.1 In Cloudflare Pages Dashboard

1. Go to your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `ata.ke` or `www.ata.ke`

### 5.2 Update DNS

If `ata.ke` is already on Cloudflare:
- Cloudflare will automatically configure DNS
- Wait 5-10 minutes for SSL certificate

If domain is elsewhere:
- Add CNAME record: `www` → `ata-website.pages.dev`
- Or point `@` root to Cloudflare IPs provided

---

## 🔄 Continuous Deployment

Every time you push to GitHub, Cloudflare automatically:
1. Detects the change
2. Builds your frontend
3. Deploys the update
4. Your site updates in 2-3 minutes

**Workflow:**
```bash
# Make changes to your code
git add .
git commit -m "Update hero section"
git push

# Cloudflare automatically rebuilds and deploys
```

---

## 🐛 Troubleshooting

### Build Fails on Cloudflare

**Problem:** Build command fails

**Solution:** Check build logs in Cloudflare Dashboard. Common issues:
- Missing `build:frontend` script in package.json
- Wrong build output directory
- Node version mismatch

### Frontend Can't Reach Backend

**Problem:** API calls fail with CORS errors

**Solution:**
1. Ensure CORS is configured on backend (see Step 4.3)
2. Verify `VITE_API_URL` is set in Cloudflare environment variables
3. Check that Replit backend is running

### Images Not Loading

**Problem:** Logo or assets not showing

**Solution:** 
- Ensure `attached_assets` folder is committed to Git
- Verify vite.config.ts alias for `@assets` is correct
- Check that images use the `@assets` import syntax

---

## 📊 Deployment Checklist

- [ ] Git repository created and pushed to GitHub
- [ ] Cloudflare account created
- [ ] Project connected to Cloudflare Pages
- [ ] Build settings configured correctly
- [ ] First deployment successful
- [ ] Environment variables added (if needed)
- [ ] CORS configured on backend
- [ ] API communication tested
- [ ] Custom domain configured (optional)
- [ ] DNS updated (if using custom domain)

---

## 🚀 Alternative: Full Cloudflare Migration

If you want everything on Cloudflare (no separate backend), you'll need to:

### Option 1: Cloudflare Workers

1. **Rewrite backend** using Cloudflare Workers (not Express)
2. Use Hono framework (Express-like API) for Workers
3. Replace in-memory storage with Cloudflare D1 database

**Time estimate:** 4-8 hours of development

### Option 2: Cloudflare Pages Functions

1. **Convert Express routes** to file-based functions
2. Create `functions/api/` directory structure
3. Each file = one endpoint (e.g., `functions/api/contact.ts`)

**Time estimate:** 2-4 hours of development

**Note:** Both options require significant code changes and are beyond the scope of this guide.

---

## 📞 Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Cloudflare Community Forum](https://community.cloudflare.com/)

---

## 🎯 Quick Commands Reference

```bash
# Build frontend only
npm run build:frontend

# Check Git status
git status

# Stage and commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub (triggers deployment)
git push

# View Git history
git log --oneline

# Check remote repository
git remote -v
```
