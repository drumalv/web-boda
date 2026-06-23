# The Party Edit 🎉

Wedding website for Paloma & Álvaro - Modern, fun, and dynamic.

## 🌟 Features

- **Animated Hero Section**: Signature strikethrough animation ("~~boda~~ ¡Fiesta!")
- **Interactive Timeline**: Love story with 5 key milestones
- **Scroll Reveal Effects**: Smooth animations as you scroll
- **Mobile-First Design**: Optimized for 95% mobile traffic
- **Performance Optimized**: Lazy loading, WebP support, GPU-accelerated animations
- **SEO Ready**: Proper meta tags, semantic HTML, accessibility features

## 🚀 Quick Start

### Local Development

1. **Start a local server:**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # OR using Node.js
   npx http-server -p 8000
   ```

2. **Open in browser:**
   ```
   http://localhost:8000
   ```

### Project Structure

```
web-boda/
├── index.html              # Main HTML file
├── css/
│   ├── main.css           # Design system & base styles
│   ├── hero.css           # Hero section styles
│   ├── timeline.css       # Timeline layout & cards
│   └── animations.css     # Animation definitions
├── js/
│   ├── animations.js      # Scroll reveal & hero animations
│   └── lazyload.js        # Image lazy loading
├── assets/
│   └── images/            # All photos & images
└── README.md
```

## 🎨 Design System

### Typography
- **Primary**: Playfair Display (serif) - Titles & body
- **Accent**: Dancing Script (handwriting) - Festive elements

### Color Palette
- **Background**: `#1a1a1a` (Dark)
- **Accent**: `#D4AF37` (Gold)
- **Text**: `#ffffff` (White) / `#2a2a2a` (Dark Gray)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📝 Content

### Timeline Milestones

1. **El Big Bang** (Oct 2017) - Granada meeting
2. **La Primera Cita** - Homemade dinner
3. **Nuestra primera aventura** (2018) - Camino de Santiago
4. **"Es broma... ¿no?"** (Jun 2025) - Proposal with Luke
5. **¡Sí, quiero!** - CTA for guests

## 🖼️ Assets Needed

Replace placeholder images with final photos:

- [ ] `assets/images/hero-bg.png` - High-res hero background
- [ ] `assets/images/granada.jpg` - Granada photo (Oct 2017)
- [ ] `assets/images/cooking.jpg` - Cooking photo (First date)
- [ ] `assets/images/camino.jpg` - Camino de Santiago (2018)
- [ ] `assets/images/proposal.jpg` - Proposal with Luke (Jun 2025)

**Recommended image specs:**
- Hero: 1920x1080px, WebP format, < 500KB
- Timeline: 800x600px, WebP format, < 200KB each

### Converting to WebP

```bash
# Install cwebp if needed
sudo apt-get install webp  # Linux
brew install webp          # macOS

# Convert images
cwebp -q 85 input.jpg -o output.webp
```

## 🚢 Deployment

### Static Hosting Options

**Netlify** (Recommended):
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel**:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**GitHub Pages**:
1. Push to GitHub repository
2. Settings → Pages → Deploy from branch
3. Select `main` branch

## ⚡ Performance

Current optimizations:
- Native lazy loading with Intersection Observer fallback
- GPU-accelerated animations
- Preloaded critical images
- Respects `prefers-reduced-motion`
- WebP images with JPG fallbacks

**Performance Targets:**
- Performance score: > 90
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

## 🔧 Customization

### Adding More Sections

Edit `index.html` and add sections like:
- Event Details
- RSVP Form
- Registry/Gifts
- FAQ
- Photo Gallery

### Changing Colors

Edit CSS custom properties in `css/main.css`:
```css
:root {
  --color-accent-gold: #YOUR_COLOR;
  --color-background: #YOUR_COLOR;
}
```

### Modifying Animations

Timing and effects in `css/animations.css`:
```css
@keyframes strikethrough {
  /* Adjust duration, delay, etc. */
}
```

## 🌐 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## 📄 License

Private project for Paloma & Álvaro's wedding.

---

**Built with ❤️ for The Party Edit**
