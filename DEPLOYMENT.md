# Gainesville Prosthetics - Deployment Guide

## 🚀 Quick Start to Production

This guide walks you through deploying the Gainesville Prosthetics website to Vercel (recommended) or any Node.js hosting platform.

---

## ☁️ Option 1: Deploy to Vercel (RECOMMENDED)

Vercel is the official hosting platform for Next.js and provides the best performance and developer experience.

### Prerequisites
- GitHub account (free)
- Vercel account (free tier available)
- This repository pushed to GitHub

### Step-by-Step Deployment

#### 1️⃣ Push to GitHub

```bash
# From the project root
cd gainesville-prosthetics-light

# Create a new GitHub repository at github.com/new
# Then run:

git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gainesville-prosthetics-light.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

#### 2️⃣ Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Select **"Import Git Repository"**
4. Search for and select `gainesville-prosthetics-light`
5. Configure Project Settings:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
   - **Install Command:** `npm install` (default)
6. Click **"Deploy"** and wait ~2-3 minutes
7. Your site is live! 🎉

#### 3️⃣ Your Deployment URL

After deployment, Vercel provides:
- **Default URL:** `https://gainesville-prosthetics-light.vercel.app`

#### 4️⃣ Add Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `gainesville-prosthetics.com`)
4. Follow DNS configuration instructions
5. Domain is live in ~5 minutes

---

## 🌍 Option 2: Deploy to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod
```

### DigitalOcean App Platform

1. Push code to GitHub
2. Go to DigitalOcean Dashboard
3. Create → App Platform
4. Select GitHub repo
5. Vercel-like guided setup
6. Deploy

### Self-Hosted (AWS, GCP, Azure)

```bash
# Build for production
npm run build
npm run start

# This starts a Next.js production server on port 3000
```

Configure environment:
- Set `NODE_ENV=production`
- Ensure Node.js v18+ is installed
- Use PM2 or similar for process management

---

## 🔄 Continuous Deployment (CD)

Once deployed to Vercel, **every git push to main automatically deploys**:

```bash
# Make changes locally
# Commit and push
git add .
git commit -m "Update: [describe changes]"
git push origin main

# Vercel automatically rebuilds and deploys!
```

---

## ✅ Post-Deployment Checklist

After your site goes live:

- [ ] Test all links (navigation, CTA buttons, contact links)
- [ ] Check mobile responsiveness on iPhone/Android
- [ ] Verify logo displays correctly
- [ ] Test contact form/button (integrate with backend email service)
- [ ] Check social media links (Facebook, Instagram)
- [ ] Verify phone/email links work
- [ ] Test sticky navigation
- [ ] Check loading speed with [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Add Google Analytics (optional)
- [ ] Set up SSL certificate (automatic on Vercel)

---

## 🔧 Environment Variables

If you need to add environment variables (API keys, etc.):

### Vercel Dashboard
1. Project Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

### Local Development
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

Access in code:
```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Built-in)
- Dashboard shows build times, deployment history, errors
- Real-time logs and error tracking

### Add Google Analytics
```jsx
// In pages/_document.jsx

<Head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
  ></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `,
  }} />
</Head>
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild locally
rm -rf node_modules .next
npm install
npm run build
```

### Static Files Not Loading
- Check `/public` folder exists
- Ensure paths start with `/` (e.g., `/logo-gp-new.avif`)
- Rebuild and redeploy

### Slow Performance
- Check image sizes (use AVIF format ✓)
- Enable Vercel Analytics to identify bottlenecks
- Consider image optimization service

### DNS Issues
- Wait up to 24h for DNS propagation
- Verify nameservers with domain provider
- Test with `nslookup your-domain.com`

---

## 📧 Contact Section Integration

The contact section has buttons and links but no backend yet. To make it functional:

### Option A: Email Service (Recommended)
Use **Formspree**, **EmailJS**, or **SendGrid**:

```jsx
// Example with Formspree (no backend needed)
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <button type="submit">Send</button>
</form>
```

### Option B: Backend API
Create a `/api/contact.js` handler:

```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Handle email sending here
    res.status(200).json({ message: 'Email sent' })
  }
}
```

---

## 🎯 Deployment Summary

| Platform | Ease | Cost | CDN | Auto-Deploy |
|----------|------|------|-----|-------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Free | ✓ | ✓ |
| Netlify | ⭐⭐⭐⭐ | Free | ✓ | ✓ |
| DigitalOcean | ⭐⭐⭐ | $5/mo | ✓ | ✓ |
| Self-Hosted | ⭐⭐ | Variable | Manual | Manual |

---

## 📞 Support

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs

---

**Deployment Ready! 🚀**
