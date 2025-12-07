# CTFd - Technical Architecture Guide

## 📐 System Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                     Browser Layer                        │
│  ┌──────────────────────────────────────────────────┐   │
│  │  10 HTML Pages (Semantic HTML5)                  │   │
│  │  ├── index.html                                  │   │
│  │  ├── users.html                                  │   │
│  │  ├── teams.html                                  │   │
│  │  ├── scoreboard.html                             │   │
│  │  ├── challenges.html                             │   │
│  │  ├── notifications.html                          │   │
│  │  ├── profile.html                                │   │
│  │  ├── team-profile.html                           │   │
│  │  ├── settings.html                               │   │
│  │  └── admin.html                                  │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│               Styling Layer (CSS3)                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Modular CSS Architecture (11 Files)             │   │
│  │                                                  │   │
│  │  common.css (700 lines)                          │   │
│  │  ├── CSS Custom Properties (Variables)           │   │
│  │  ├── Global Reset & Normalization                │   │
│  │  ├── Navbar & Navigation                         │   │
│  │  ├── Footer & Utilities                          │   │
│  │  ├── Animation Keyframes                         │   │
│  │  └── Responsive Breakpoints                      │   │
│  │                                                  │   │
│  │  Page-Specific CSS (10 Files)                    │   │
│  │  ├── index.css (1,400 lines)                     │   │
│  │  ├── users.css (400 lines)                       │   │
│  │  ├── teams.css (600 lines)                       │   │
│  │  ├── scoreboard.css (1,200 lines)                │   │
│  │  ├── challenges.css (970 lines)                  │   │
│  │  ├── notifications.css (780 lines)               │   │
│  │  ├── team-profile.css (730 lines)                │   │
│  │  ├── profile.css (600 lines)                     │   │
│  │  ├── settings.css (680 lines)                    │   │
│  │  └── admin.css (620 lines)                       │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│            JavaScript Layer (Vanilla ES6+)              │
│  ┌──────────────────────────────────────────────────┐   │
│  │  script.js (Core Application Logic)              │   │
│  │  ├── DOM Manipulation                            │   │
│  │  ├── Event Handling                              │   │
│  │  ├── Data Fetching                               │   │
│  │  └── State Management                            │   │
│  │                                                  │   │
│  │  Page-Specific JavaScript (10 Files)             │   │
│  │  ├── index.js (Homepage functionality)           │   │
│  │  ├── users.js (Users page interactions)          │   │
│  │  ├── teams.js (Teams page features)              │   │
│  │  ├── scoreboard.js (Leaderboard features)        │   │
│  │  ├── challenges.js (Challenge browsing/solving)  │   │
│  │  ├── notifications.js (Notifications mgmt)       │   │
│  │  ├── profile.js (Profile page logic)             │   │
│  │  ├── team-profile.js (Team profile features)     │   │
│  │  ├── settings.js (Settings management)           │   │
│  │  └── admin.js (Admin panel features)             │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│             External Dependencies                        │
│  ├── Font Awesome 6.4 (Icons - CDN)                     │
│  ├── Chart.js (Charting - implied)                      │
│  └── Polyfills (if needed for older browsers)           │
└─────────────────────────────────────────────────────────┘
```

## 🗂️ File Organization

### HTML Structure (Entry Points)

Each HTML file follows a consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- CSS Links (Modular) -->
    <link rel="stylesheet" href="common.css" />
    <link rel="stylesheet" href="{page-name}.css" />

    <!-- External Libraries -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/..." />
  </head>
  <body>
    <!-- Reusable Navigation Component -->
    <nav class="navbar">...</nav>

    <!-- Page-Specific Content -->
    <main>...</main>

    <!-- JavaScript -->
    <script src="script.js"></script>
    <script src="{page-name}.js"></script>
  </body>
</html>
```

### CSS Architecture (Modular)

#### common.css (Shared Foundation)

```css
/* CSS Custom Properties (Variables) */
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;
  --success-color: #22c55e;
  --error-color: #ef4444;
  /* ... more variables ... */
}

/* Global Reset & Normalization */
* {
}
html {
}
body {
}

/* Navigation Component */
.navbar {
}
.nav-container {
}
.nav-brand {
}
.nav-links {
}

/* Shared Utilities */
.container {
}
.section {
}
.button {
}

/* Responsive Breakpoints */
@media (max-width: 1200px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
```

#### Page-Specific CSS Pattern

Each page file (e.g., `challenges.css`) follows:

```css
/* Page Layout */
.page-container {
}
.sidebar {
}
.main-content {
}

/* Page-Specific Components */
.component-name {
}
.component-name-header {
}
.component-name-body {
}

/* Responsive Variants */
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
```

### JavaScript Architecture

#### Core Script (script.js)

Handles:

- DOM ready initialization
- Global event listeners
- Shared utility functions
- State management
- API communication (when backend added)

#### Page-Specific Scripts

Each page has corresponding JavaScript:

- DOM element caching
- Event delegation
- Page initialization
- Feature-specific logic

## 🔄 Data Flow

### User Interaction Flow

```
User Action (click, input)
    ↓
Event Listener (JavaScript)
    ↓
Data Processing (State Update)
    ↓
DOM Update (classList, innerHTML, attributes)
    ↓
CSS Animations/Transitions
    ↓
Visual Feedback to User
```

### Page Navigation Flow

```
User clicks navigation link
    ↓
Browser loads new HTML page
    ↓
common.css loads (cached if visited before)
    ↓
page-specific.css loads
    ↓
script.js initializes (global)
    ↓
page-specific.js initializes
    ↓
Page rendered to user
```

## 🎯 CSS Module System

### Module Organization Strategy

**Principle:** One CSS file per page + one shared file

**Benefits:**

1. **Isolation** - Page styles don't affect other pages
2. **Performance** - Only needed CSS loaded
3. **Maintainability** - Easy to find and modify styles
4. **Scalability** - Simple to add new pages
5. **Caching** - Browser caches efficiently

### CSS Variables Strategy

All color and dimension variables defined in `common.css`:

```css
:root {
  /* Colors */
  --primary-color: #2563eb;
  --secondary-color: #1e40af;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### CSS Class Naming Convention (BEM)

```
Block Element Modifier Pattern

.challenges-grid { }              /* Block: Page container */
.challenges-grid__item { }        /* Element: Grid item */
.challenges-grid__item--active { } /* Modifier: Active state */

.challenge-card { }               /* Block: Card component */
.challenge-card__header { }       /* Element: Card header */
.challenge-card__body { }         /* Element: Card content */
.challenge-card--solved { }       /* Modifier: Solved state */
```

## 🔗 Component Relationships

### Navigation Component

- **File:** common.css
- **Used By:** All pages
- **States:** Default, Active, Mobile Menu
- **Interactions:** Hover, Active page highlight

### Button Component

- **File:** common.css (base), page-specific (variants)
- **Variants:** Primary, Secondary, Danger, Small, Large
- **States:** Default, Hover, Active, Disabled, Loading

### Cards

- **File:** Page-specific CSS
- **Variants:** User card, Team card, Challenge card, Stat card
- **Features:** Hover effects, Badges, Rankings

### Tables

- **File:** Page-specific CSS
- **Features:** Sticky headers, Row hover, Pagination controls
- **Responsive:** Horizontal scroll on mobile

### Modals

- **File:** common.css (base), page-specific (styling)
- **Features:** Overlay, Animation, Close button, Form handling

## 📊 Performance Optimization Details

### CSS Loading Strategy

```
Page Request
    ↓
Load common.css (1st time: ~25KB, cached: ~0.1ms)
    ↓
Load page-specific.css (varies: 5-45KB per page)
    ↓
Total: 30-70KB per page vs 200KB (monolithic)
    ↓
Result: 60-85% reduction in CSS payload
```

### Browser Cache Strategy

```
Visit Challenge page
├── Load common.css (cached)
└── Load challenges.css (new)

Later visit Users page
├── Load common.css (CACHED HIT ✓)
└── Load users.css (new)

Result: Reduced bandwidth on second page load
```

### CSS Rendering Optimization

- **Minimal Repaints:** CSS organized for efficient rendering
- **GPU Acceleration:** Transforms and animations use `transform` and `opacity`
- **Will-change:** Strategic use for animated elements
- **Contain:** CSS containment for component isolation

## 🔐 State Management

### Local State (JavaScript)

```javascript
// Page-level state
const pageState = {
  currentPage: 1,
  filters: {},
  sortBy: "score",
  selectedTeam: null,
};

// Update state
function updateState(key, value) {
  pageState[key] = value;
  renderUI();
}
```

### DOM State (Class-based)

```javascript
// Visual state tracked through classes
element.classList.add("active");
element.classList.toggle("expanded");
element.classList.remove("loading");
```

### URL State (Future)

```javascript
// For single-page app implementation
window.history.pushState({...}, '', '/page?filter=category');
```

## 🎨 Responsive Design System

### Breakpoint Strategy

```css
/* Desktop First Approach */
.container {
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 1200px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

### Touch-Friendly Design

- Minimum touch target: 44x44 pixels
- Adequate spacing between interactive elements
- Full-width buttons on mobile
- Finger-friendly tap regions

## 🚀 Scalability Architecture

### Adding a New Page

1. **Create HTML:** `new-page.html`
   - Link `common.css` and `new-page.css`
   - Add semantic structure
2. **Create CSS:** `new-page.css`
   - Import/reference variables from common.css
   - Use established class naming patterns
3. **Create JavaScript:** `new-page.js`
   - Initialize page components
   - Add event listeners
4. **Update Navigation:** Add link in navbar

Total time: ~2-3 hours for a full page

### Adding a New Feature

1. **Update relevant CSS file** (~15-30 min)
2. **Update relevant JavaScript file** (~30-60 min)
3. **Update HTML** (~10-15 min)
4. **Test responsive design** (~15-30 min)

## 🧪 Testing Architecture

### Manual Testing Checklist

- [ ] Test on 4+ browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on 3+ screen sizes (480px, 768px, 1200px+)
- [ ] Verify all interactive elements work
- [ ] Check keyboard navigation (Tab, Enter, Escape)
- [ ] Validate HTML with W3C validator
- [ ] Check CSS for errors and warnings

### Performance Testing

- [ ] Run Lighthouse audit
- [ ] Check CSS coverage (remove unused styles)
- [ ] Verify page load time < 2 seconds
- [ ] Check Time to Interactive (TTI) < 3 seconds

### Accessibility Testing

- [ ] Color contrast ratio >= 4.5:1
- [ ] All form inputs labeled
- [ ] Keyboard navigation works
- [ ] Screen reader compatible

## 🔄 Git Workflow

### Repository Structure

```
main (production)
├── Commit: Refactor CSS (Split 8K lines into 11 modular files)
├── Commit: Add professional documentation
└── Commit: [future updates]
```

### Commit Message Format

```
[Type]: [Description]

Type: feat, fix, docs, style, refactor, perf, test
Example: "perf: Reduce CSS payload by 75% with modular architecture"
```

## 📈 Monitoring & Maintenance

### Performance Metrics

- Page Load Time
- CSS Download Size
- Time to First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

### Browser Compatibility

- Chrome 90+ ✓
- Firefox 88+ ✓
- Safari 14+ ✓
- Edge 90+ ✓

### Deprecation Strategy

When updating components:

1. Create new version
2. Mark old version as deprecated
3. Provide migration guide
4. Remove in next major version

---

**Version:** 1.0.0  
**Last Updated:** December 2024
