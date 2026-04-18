# Red Teamer Portfolio

A high-end, professional single-page portfolio for Senior Red Team Operators and Penetration Testers. Built with vanilla HTML, CSS, and JavaScript—no frameworks, no build tools required.

## 🎯 Features

- **Terminal-Style Hero Section**: Animated terminal window with skill showcase
- **Security Status Badge**: "Authorized" badge with pulsing glow effect
- **Toolbox Grid**: Organized by attack lifecycle (Initial Access, Lateral Movement, Exfiltration, Cloud Security)
- **Certification Ribbon**: Prominent display for OSCP, OSEP, CRTO, PNPT
- **Active Operations**: Project cards with GitHub links, writeups, and tool tags
- **Research & Writeups**: Blog post showcase with dates and excerpts
- **HTB/THM Integration**: Platform rankings and achievement display
- **Contact Section**: Email, GitHub, LinkedIn, Twitter with PGP key toggle
- **Glassmorphism Design**: Sophisticated backdrop blur and border glows
- **Dark Theme**: Slate/Emerald/Zinc color palette
- **Fully Responsive**: Mobile-first design for all devices
- **No Dependencies**: Pure vanilla JavaScript—zero external frameworks

## 📁 File Structure

```
red_teamer_portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Comprehensive styling with animations
├── script.js           # Vanilla JavaScript for interactivity
├── projectData.js      # Configuration file for projects and research
├── README.md           # This file
└── .well-known/
    └── security.txt    # Security contact information
```

## 🚀 Quick Start

### Option 1: Local Development (No Server Required)
Simply open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if installed)
npx http-server

# Using Ruby
ruby -run -ehttpd . -p8000
```

Then visit: `http://localhost:8000`

### Option 3: Deploy to Production

#### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/red_teamer_portfolio.git
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

#### Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.
```

#### Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Traditional Hosting
Simply upload all files to your web host via FTP/SFTP.

## 🎨 Customization Guide

### 1. Update Personal Information

**Edit `index.html`:**
- Replace "Red Team Operator" with your name/title
- Update email, GitHub, LinkedIn, Twitter links
- Replace PGP key placeholder with your actual key

### 2. Add Your Projects

**Edit `projectData.js`:**
```javascript
{
    title: "Your Project Name",
    description: "What this project does...",
    tools: ["Tool1", "Tool2", "Tool3"],
    github: "https://github.com/yourusername/project",
    writeup: "https://yourblog.com/writeup"
}
```

### 3. Add Research Articles

**Edit `projectData.js`:**
```javascript
{
    title: "Your Article Title",
    date: "Month Year",
    excerpt: "Brief summary of the article...",
    link: "https://yourblog.com/article"
}
```

### 4. Update Certifications

**Edit `index.html` - Certifications Section:**
- Update credential IDs
- Add/remove certification cards as needed

### 5. Update HTB/THM Stats

**Edit `index.html` - HTB/THM Section:**
- Update rank, machine count, points
- Replace profile links with your actual profiles

### 6. Customize Colors

**Edit `styles.css` - CSS Variables:**
```css
:root {
    --primary-dark: #0f172a;           /* Main background */
    --accent-emerald: #10b981;         /* Primary accent */
    --accent-emerald-light: #34d399;   /* Light accent */
    --text-primary: #f1f5f9;           /* Main text */
    --text-secondary: #cbd5e1;         /* Secondary text */
}
```

### 7. Change Fonts

**Edit `styles.css`:**
```css
--font-mono: 'JetBrains Mono', monospace;  /* Terminal font */
--font-sans: 'Inter', sans-serif;          /* Body font */
```

Or update the Google Fonts import in `index.html`.

### 8. Create Security.txt

**Create `.well-known/security.txt`:**
```
Contact: security@yourdomain.com
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://yourdomain.com/.well-known/security.txt
```

## 🔐 Security Best Practices

1. **PGP Key**: Replace the placeholder with your actual public key
2. **Security.txt**: Set up proper security contact information
3. **HTTPS**: Always deploy with HTTPS enabled
4. **Content Security Policy**: Add CSP headers for additional security
5. **Email Obfuscation**: Consider obfuscating email to prevent scraping

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1920px)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## ⚡ Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **CSS Animations**: GPU-accelerated transforms
- **Minimal JavaScript**: Pure vanilla JS, no heavy frameworks
- **Optimized Fonts**: Google Fonts with preconnect
- **No External Dependencies**: Everything is self-contained

## 🎬 Animation Details

### Terminal Animation
- Typewriter effect on page load
- Smooth character-by-character typing
- Configurable speed (30ms per character)

### Scroll Animations
- Fade-in-up effect for cards
- Intersection Observer for performance
- Smooth parallax effects

### Hover Effects
- Glassmorphism glow on cards
- Border color transitions
- Transform animations (translateY)
- Box shadow enhancements

## 🛠️ Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph support
- Mobile-friendly viewport
- Fast loading times

## 🔧 Troubleshooting

### Terminal Animation Not Playing
- Check browser console for errors
- Ensure `projectData.js` is loaded before `script.js`
- Verify JavaScript is enabled

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check CSS file is properly linked
- Verify no CSS conflicts with browser extensions

### Projects Not Showing
- Verify `projectData.js` is properly formatted
- Check browser console for JavaScript errors
- Ensure projects array is populated

### Mobile Layout Issues
- Test with device DevTools (F12)
- Check viewport meta tag in HTML
- Verify CSS media queries are applied

## 📝 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support & Contributions

For issues, questions, or improvements:
1. Check the troubleshooting section
2. Review the customization guide
3. Inspect browser console for errors

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Web.dev](https://web.dev/)

## 🚀 Advanced Customizations

### Add Dark/Light Mode Toggle
Uncomment `setupDarkModeToggle()` in `script.js` and add light mode styles.

### Add Contact Form
Integrate with Formspree, Netlify Forms, or a backend service.

### Add Blog Integration
Connect to a headless CMS like Contentful or Strapi.

### Add Analytics
Integrate Google Analytics, Plausible, or Mixpanel.

### Add Comments Section
Use Disqus, Utterances, or Giscus for comments.

## 📧 Contact Information

Update these in `index.html`:
- Email: operator@redteam.com
- GitHub: github.com/redteamoperator
- LinkedIn: linkedin.com/in/redteamoperator
- Twitter: @redteamoperator

---

**Design Philosophy**: Elite. Disciplined. Secure.

Built for professional Red Team Operators who demand sophistication without compromise.
