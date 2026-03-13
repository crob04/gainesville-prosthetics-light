# Gainesville Prosthetics - Next.js 14 Website

A modern, production-ready website for Gainesville Prosthetics featuring a light aesthetic with glassmorphism accents, responsive design, and comprehensive content sections.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (Pages Router)
- **Styling:** Tailwind CSS v3.4.1
- **Build Tool:** Next.js built-in
- **Language:** JavaScript/JSX

## 📦 Project Structure

```
gainesville-prosthetics-light/
├── src/
│   ├── pages/
│   │   ├── _app.jsx          # App wrapper
│   │   ├── _document.jsx     # Document setup
│   │   └── index.jsx         # Main homepage
│   └── styles/
│       └── globals.css       # Global styles
├── public/
│   ├── logo-gp-new.avif     # Brand logo
│   └── favicon.ico          # Favicon
├── package.json             # Dependencies
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
├── tsconfig.json            # TypeScript config (JS support)
└── postcss.config.js        # PostCSS config
```

## 🎨 Design Features

- **Light Aesthetic:** Cream backgrounds (#FBF8F3), soft shadows
- **Brand Colors:**
  - Gold: #C9A961
  - Teal: #4A9B8E
  - Cream: #FBF8F3
  - Text: #2C2C2C

- **Key Effects:**
  - Glassmorphism on accent cards
  - Smooth transitions and hover states
  - Soft, subtle shadows
  - Responsive typography (text-3xl to text-5xl)

## 📱 Responsive Design

All sections use aggressive mobile-first approach:
- `sm:` breakpoints for tablets (640px+)
- `md:` breakpoints for medium screens (768px+)
- `lg:` breakpoints for desktops (1024px+)

Grid and flex layouts automatically adjust across breakpoints.

## 🔧 Installation & Development

### Prerequisites
- Node.js v18+ (recommend v22.22.1)
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📑 Content Sections

1. **Navigation Bar** - Sticky header with logo and nav links
2. **Hero Section** - Large typography with CTA
3. **About Overview** - 3-column value proposition
4. **Services Highlight** - 3 service cards
5. **Why Choose Us** - 4-point callout grid
6. **Testimonials** - 3 patient testimonial cards
7. **Innovation Spotlight** - Prosthetics Galileo section
8. **Team Callout** - Cara Negri, Clinical Director
9. **Education Posts** - 3 blog article cards
10. **Contact Section** - CTA + contact info
11. **Footer** - Links, copyright, social

## 🎯 Key Features

- ✅ Mobile-responsive header with hamburger menu
- ✅ Smooth scroll navigation links
- ✅ Glassmorphic card styling
- ✅ Soft shadow depth system
- ✅ Accessible color contrast
- ✅ SEO-ready with meta tags
- ✅ Brand-consistent typography
- ✅ Semantic HTML structure

## 🌐 Deployment to Vercel

### Prerequisites
- GitHub account with repo created
- Vercel account (free tier available)

### Steps

1. **Initialize Git & Push to GitHub:**
   ```bash
   cd gainesville-prosthetics-light
   git init
   git add .
   git commit -m "Initial commit: Gainesville Prosthetics website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/gainesville-prosthetics-light.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Your site is live at:**
   ```
   https://gainesville-prosthetics-light.vercel.app
   (custom domain can be added in Vercel settings)
   ```

## 🔗 Contact Information

- **Phone:** (352) 331-4221
- **Email:** [email protected]
- **Address:** 4650 NW 39th Avenue Unit G, Gainesville, FL 32606
- **Social:** Facebook, Instagram

## 📄 License

© 2026 Gainesville Prosthetics. All rights reserved.

---

**Built with ❤️ for Gainesville Prosthetics**
