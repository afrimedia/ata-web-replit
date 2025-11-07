# 🚀 Quick Start: Deploy to Cloudflare Pages

This is the **fastest path** to deploy your ATA website to Cloudflare Pages.

## ⚡ What You're Deploying

- **Frontend:** React website → Cloudflare Pages (free, global CDN)
- **Backend:** Express API → Stays on Replit (or move to another Node.js host later)

---

## 📋 Prerequisites

- [x] GitHub account
- [x] Cloudflare account (free - sign up at [dash.cloudflare.com](https://dash.cloudflare.com))
- [x] Your project code (already done! ✅)

---

## 🎯 Step-by-Step Deployment (15 minutes)

### 1️⃣ Push to GitHub

Open the **Shell** in Replit and run these commands:

```bash
# Check if Git is already set up
git status

# If Git is already initialized, skip to staging
# Otherwise, initialize Git first:
# git init

# Stage all your files
git add .

# Commit your work
git commit -m "Initial commit - ATA website ready for deployment"
```

**Now create a GitHub repository:**

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `ata-website`
3. Choose **Public**
4. **DO NOT** check "Add a README file"
5. Click **Create repository**

**Back in Replit Shell, connect to your new repo:**

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ata-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**✅ Checkpoint:** Visit your GitHub repo to confirm your code is there.

---

### 2️⃣ Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard:** [dash.cloudflare.com](https://dash.cloudflare.com)

2. **Navigate to:** Workers & Pages → **Create application**

3. **Click:** Pages tab → **Connect to Git**

4. **Authorize GitHub:**
   - Click "Connect GitHub"
   - Authorize Cloudflare to access your repositories
   - Select your `ata-website` repository

5. **Configure Build Settings:**
   ```
   Project name: ata-website
   Production branch: main
   
   Build settings:
   ─────────────────────────────────
   Framework preset: Vite
   Build command: vite build
   Build output directory: dist/public
   Root directory: (leave empty)
   
   Environment variables:
   ─────────────────────────────────
   NODE_VERSION = 18
   ```

6. **Click:** Save and Deploy

7. **Wait 2-3 minutes** for the build to complete

8. **🎉 Your site is live!** at `https://ata-website.pages.dev`

---

### 3️⃣ Connect Backend (Important!)

Your frontend is now on Cloudflare, but it needs to talk to your backend API.

#### Option A: Keep Backend on Replit

1. **In Cloudflare Dashboard:**
   - Go to your project → **Settings** → **Environment variables**
   - Click **Add variable** (Production)
   - Name: `VITE_API_URL`
   - Value: `https://YOUR_REPL_NAME.repl.co` (get this from your Replit URL)
   - Save

2. **Update your Replit backend to allow CORS:**

   In your Replit Shell, install cors:
   ```bash
   npm install cors
   ```

   Then update `server/index.ts` (add near the top):
   ```typescript
   import cors from 'cors';

   // Add after creating the app
   app.use(cors({
     origin: [
       'https://ata-website.pages.dev',
       'https://ata.ke', // if you have a custom domain
       'http://localhost:5173'
     ]
   }));
   ```

3. **Redeploy Cloudflare Pages:**
   - In Cloudflare Dashboard → **Deployments**
   - Click **Retry deployment**

#### Option B: Deploy Backend Elsewhere

Consider these Node.js hosts for your Express backend:
- **Render.com** (free tier available)
- **Railway.app** (free $5/month credit)
- **Fly.io** (free tier)

---

### 4️⃣ Add Custom Domain (Optional)

1. **In Cloudflare Dashboard:**
   - Go to your project → **Custom domains**
   - Click **Set up a custom domain**
   - Enter your domain: `ata.ke`

2. **If your domain is already on Cloudflare:** Done! SSL auto-configured

3. **If domain is elsewhere:** Add these DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: ata-website.pages.dev
   ```

---

## 🔄 Continuous Deployment

Every time you push to GitHub, Cloudflare automatically rebuilds and deploys!

```bash
# Make your changes
# ...

# Stage changes
git add .

# Commit
git commit -m "Updated hero section"

# Push (triggers automatic deployment)
git push

# Visit Cloudflare Dashboard to watch the build
```

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Connected to Cloudflare Pages
- [ ] Build settings configured
- [ ] First deployment successful (visit https://ata-website.pages.dev)
- [ ] Environment variable VITE_API_URL added
- [ ] CORS enabled on backend
- [ ] Contact form tested and working
- [ ] Custom domain added (optional)

---

## 🐛 Troubleshooting

### "Build failed" on Cloudflare

**Check:** Build command is `vite build` (not `npm run build`)  
**Check:** Build output directory is `dist/public`  
**Check:** NODE_VERSION environment variable is set to `18`

### Frontend shows but forms don't work

**Check:** VITE_API_URL is set in Cloudflare environment variables  
**Check:** CORS is enabled on your backend  
**Check:** Backend is running (visit the API URL directly)

### "Access denied" when pushing to GitHub

**Solution:** 
```bash
# Generate a GitHub Personal Access Token
# Go to: github.com/settings/tokens → Generate new token (classic)
# Use this token as your password when pushing
```

---

## 📞 Need Help?

**For detailed instructions:** See `CLOUDFLARE_DEPLOYMENT_GUIDE.md`

**Cloudflare Support:**
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)

---

## 🎁 Pro Tips

1. **Preview deployments:** Every PR to GitHub gets its own preview URL
2. **Rollback:** Click "View build" on any previous deployment to rollback
3. **Analytics:** Enable Web Analytics in Cloudflare for free visitor stats
4. **Speed:** Your site is now on Cloudflare's global CDN (300+ cities!)

---

## 📝 Quick Commands Reference

```bash
# Check Git status
git status

# Stage all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub (auto-deploys to Cloudflare)
git push

# View commit history
git log --oneline

# See connected remotes
git remote -v
```

---

**Your website will be live in ~15 minutes! 🚀**
