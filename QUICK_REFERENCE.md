# Quick Reference Guide

A quick-start reference for developers working on the CTFd platform.

## 📋 File Locations

| Type | Location | Purpose |
|------|----------|---------|
| Documentation | `*.md` | Project guides and references |
| HTML | `*.html` | Page templates (10 pages) |
| CSS | `*.css` | Styles (1 common + 10 page-specific) |
| JavaScript | `*.js` | Logic (1 core + 10 page-specific) |
| Git | `.git/` | Version control |

## 🚀 Quick Start

### Development Setup
```bash
# Clone repository
git clone <repo-url>
cd ctfd-web-browser

# Open in browser (Python)
python -m http.server 8000

# Or use VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### File Structure Quick Reference
```
index.html          → index.css          → index.js
users.html          → users.css          → users.js
teams.html          → teams.css          → teams.js
scoreboard.html     → scoreboard.css     → scoreboard.js
challenges.html     → challenges.css     → challenges.js
notifications.html  → notifications.css  → notifications.js
profile.html        → profile.css        → profile.js
team-profile.html   → team-profile.css   → team-profile.js
settings.html       → settings.css       → settings.js
admin.html          → admin.css          → admin.js

All pages → common.css → script.js
```

## 🎨 CSS Quick Reference

### Color Variables
```css
--primary-color: #2563eb       /* Blue */
--secondary-color: #1e40af     /* Dark Blue */
--accent-color: #f59e0b        /* Amber */
--success-color: #22c55e       /* Green */
--error-color: #ef4444         /* Red */
--text-dark: #111827           /* Dark */
--text-light: #6b7280          /* Gray */
--bg-light: #f9fafb            /* Light */
--border-color: #e5e7eb        /* Border */
```

### Spacing Values
```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
```

### Responsive Breakpoints
```css
Mobile: 480px and below
Tablet: 481px - 768px
Desktop: 769px - 1200px
Wide: 1201px and above

@media (max-width: 480px) { }   /* Mobile */
@media (max-width: 768px) { }   /* Tablet */
@media (max-width: 1200px) { }  /* Desktop */
```

### Common CSS Patterns
```css
/* Card Component */
.card {
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
}

/* Button Component */
.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn--primary {
  background: var(--primary-color);
  color: white;
}

/* Grid Layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

/* Flexbox Layout */
.flex {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}
```

## 📝 HTML Quick Reference

### Common Structure
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="page-name.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </head>
  <body>
    <!-- Navigation -->
    <nav class="navbar">...</nav>
    
    <!-- Main Content -->
    <main>...</main>
    
    <!-- Footer -->
    <footer>...</footer>
    
    <!-- Scripts -->
    <script src="script.js"></script>
    <script src="page-name.js"></script>
  </body>
</html>
```

### Semantic Elements
```html
<header>    <!-- Page header -->
<nav>       <!-- Navigation -->
<main>      <!-- Main content -->
<article>   <!-- Article content -->
<section>   <!-- Content section -->
<aside>     <!-- Sidebar -->
<footer>    <!-- Page footer -->
```

### Form Elements
```html
<form class="settings-form">
  <div class="form-group">
    <label for="field">Field Label</label>
    <input type="text" id="field" name="field" />
  </div>
  
  <button type="submit" class="btn btn--primary">Submit</button>
</form>
```

## 🎯 JavaScript Quick Reference

### Common Patterns
```javascript
// DOM Selection
const element = document.querySelector('.selector');
const elements = document.querySelectorAll('.selector');

// Event Listening
element.addEventListener('click', (e) => {
  console.log('Clicked!');
});

// Class Manipulation
element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');

// DOM Manipulation
element.innerHTML = '<p>New content</p>';
element.textContent = 'Text only';
element.style.color = 'blue';

// Event Delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    handleButtonClick(e.target);
  }
});

// Array Methods
array.map(item => item.value)
array.filter(item => item.active)
array.find(item => item.id === 5)
array.forEach(item => console.log(item))

// Debouncing
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
```

### Page Initialization
```javascript
(function() {
  'use strict';
  
  function init() {
    cacheDOM();
    setupEventListeners();
    loadData();
  }
  
  function cacheDOM() {
    // Cache frequently used elements
    this.header = document.querySelector('.header');
    this.sidebar = document.querySelector('.sidebar');
  }
  
  function setupEventListeners() {
    // Add event listeners
  }
  
  function loadData() {
    // Load initial data
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```

## 🔍 Naming Conventions

### CSS Classes (BEM)
```
Block: .challenge-card
Element: .challenge-card__title
Modifier: .challenge-card--active
```

### HTML IDs (Camelcase)
```html
<div id="mainContent"></div>
<button id="submitBtn"></button>
```

### JavaScript Variables
```javascript
const maxItems = 50;              // Constants: UPPER_CASE
let currentPage = 1;              // Variables: camelCase
function handleClick() { }        // Functions: camelCase with verb prefix
class UserCard { }                // Classes: PascalCase
```

## 📊 Performance Tips

### CSS Performance
- ✅ Use CSS variables for values
- ✅ Use `transform` for animations
- ✅ Keep selectors short
- ✅ Avoid inline styles
- ❌ Avoid !important
- ❌ Avoid nested selectors (> 3 levels)

### JavaScript Performance
- ✅ Cache DOM queries
- ✅ Use event delegation
- ✅ Debounce frequent events
- ✅ Minimize DOM manipulation
- ❌ Avoid querySelector in loops
- ❌ Avoid synchronous operations

### Load Time Targets
- First Contentful Paint: < 1.8s ✅
- Largest Contentful Paint: < 2.5s ✅
- Time to Interactive: < 3.8s ✅
- Total page load: < 2s ✅

## 🐛 Debugging Tips

### Browser DevTools
```
Ctrl+Shift+I     Open DevTools
Ctrl+K Ctrl+E    Console tab
Ctrl+Shift+J     Open Console
Ctrl+Shift+C     Element picker
Ctrl+Shift+E     Performance tab
```

### Console Debugging
```javascript
console.log('Basic message')
console.error('Error message')
console.warn('Warning message')
console.table(array)              // Display array as table
console.time('label')             // Start timer
console.timeEnd('label')          // End timer
debugger                          // Breakpoint
```

## 📖 Documentation Files

| File | Purpose | Audience |
|------|---------|----------|
| README.md | Project overview | Everyone |
| ARCHITECTURE.md | System design | Developers |
| PERFORMANCE.md | Optimization | Performance engineers |
| CONTRIBUTING.md | Development guidelines | Contributors |
| CSS_MODULES.md | CSS reference | Frontend developers |
| CHANGELOG.md | Version history | Everyone |
| QUICK_REFERENCE.md | This file | Developers |

## 🔗 Common Links

- **Project Repo:** https://github.com/MSabbirHossen/CTFd---Capture-The-Flag-Platform
- **Maintainer:** @MSabbirHossen
- **Font Awesome:** https://fontawesome.com/icons
- **MDN Docs:** https://developer.mozilla.org/

## ✅ Pre-Commit Checklist

Before committing code:
- [ ] HTML validated
- [ ] CSS passes linter
- [ ] JavaScript console clean
- [ ] Responsive design tested
- [ ] Images optimized
- [ ] No hardcoded values
- [ ] Comments added
- [ ] Code formatted
- [ ] Tests pass (if applicable)

## 🚀 Git Quick Commands

```bash
# Create and switch to branch
git checkout -b feature/description

# Stage files
git add .
git add file.js

# Commit with message
git commit -m "feat: Add new feature"

# Push to remote
git push origin feature/description

# Create pull request
# (via GitHub web interface)

# Merge to main
git checkout main
git merge feature/description

# Delete local branch
git branch -d feature/description
```

## 🎓 Learning Resources

### Must-Read Docs
1. README.md - Start here
2. ARCHITECTURE.md - Understand structure
3. CONTRIBUTING.md - Follow standards
4. CSS_MODULES.md - Reference styles

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

## 💡 Troubleshooting

### Styles Not Applied?
1. Check CSS file is linked
2. Verify class name (case-sensitive)
3. Check selector specificity
4. Clear browser cache (Ctrl+Shift+Delete)
5. Use DevTools to inspect element

### JavaScript Not Working?
1. Check console for errors (F12)
2. Verify script is linked in HTML
3. Check element exists before use
4. Use debugger or console.log
5. Verify event listener attached

### Layout Broken?
1. Check responsive breakpoints
2. Verify box-sizing property
3. Check margin/padding collapse
4. Inspect flex/grid properties
5. Test in different browser

---

**Quick Reference v1.0.0**  
**Last Updated:** December 2024  
**Status:** Ready to Use ✅
