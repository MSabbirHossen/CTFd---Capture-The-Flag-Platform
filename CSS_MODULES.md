# CSS Modules Documentation

Comprehensive guide to the modular CSS architecture of the CTFd platform.

## 📋 Overview

The CTFd platform uses a **modular CSS architecture** with 11 specialized stylesheet files:

- **1 Common file** - Shared across all pages
- **10 Page-specific files** - One per page

**Total CSS:** 8,242 lines organized for maintainability and performance

## 📂 File Structure

```
CSS Files (11 total)
├── common.css (700 lines)
│   ├── CSS Variables
│   ├── Global Reset
│   ├── Navbar
│   ├── Animations
│   ├── Footer
│   ├── Utilities
│   └── Responsive Breakpoints
│
├── index.css (1,400 lines) - Homepage
├── users.css (400 lines) - Users page
├── teams.css (600 lines) - Teams page
├── scoreboard.css (1,200 lines) - Scoreboard page
├── challenges.css (970 lines) - Challenges page
├── notifications.css (780 lines) - Notifications page
├── team-profile.css (730 lines) - Team profile page
├── profile.css (600 lines) - User profile page
├── settings.css (680 lines) - Settings page
└── admin.css (620 lines) - Admin dashboard
```

## 🎨 common.css (700 lines)

### Purpose

Shared styles used across all pages of the platform.

### Sections

#### 1. CSS Custom Properties (Variables)

```css
:root {
  /* Primary Colors */
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #f59e0b;

  /* Status Colors */
  --success-color: #22c55e;
  --error-color: #ef4444;
  --warning-color: #f59e0b;
  --info-color: #3b82f6;

  /* Neutral Colors */
  --text-dark: #111827;
  --text-light: #6b7280;
  --bg-light: #f9fafb;
  --border-color: #e5e7eb;

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

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}
```

#### 2. Global Reset

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  color: var(--text-dark);
  background: white;
  line-height: 1.6;
}
```

#### 3. Navigation Styles

```css
.navbar {
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: var(--shadow-md);
}

.nav-container {
  ...;
}
.nav-brand {
  ...;
}
.nav-links {
  ...;
}
```

#### 4. Animation Keyframes

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

#### 5. Footer Styles

```css
footer {
  background: var(--bg-light);
  padding: var(--spacing-lg);
  text-align: center;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}
```

#### 6. Utility Classes

```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hidden {
  display: none !important;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
```

#### 7. Responsive Breakpoints

```css
/* Mobile: Default (up to 480px) */
/* Handled inline in each section */

@media (max-width: 1200px) {
  /* Large tablets and below */
}
@media (max-width: 768px) {
  /* Tablets and below */
}
@media (max-width: 480px) {
  /* Mobile devices */
}
```

---

## 📄 Page-Specific CSS Files

### index.css (1,400 lines)

**Homepage & Contest Overview**

Sections:

- Hero section with gradient background
- Contest overview cards
- Eligibility requirements
- Competition timeline with milestones
- Prize distribution display
- Rules and FAQ sections
- Countdown timer styling
- Social media integration
- Call-to-action buttons
- Category showcase

Key Classes:

- `.hero-section` - Main banner
- `.contest-overview` - Overview cards grid
- `.timeline` - Contest timeline
- `.prize-card` - Prize display
- `.countdown` - Timer display
- `.cta-button` - Call-to-action

---

### users.css (400 lines)

**Users Page & Rankings**

Sections:

- Page header with filters
- User search and sort controls
- Users ranking table
- User profile cards
- Top performers section
- Pagination controls
- Responsive table design

Key Classes:

- `.users-container` - Main container
- `.users-table` - Rankings table
- `.user-card` - User card component
- `.performer-card` - Top performer display
- `.rank-badge` - Rank indicator
- `.pagination` - Page navigation

---

### teams.css (600 lines)

**Teams Page & Standings**

Sections:

- Teams standings table
- Top teams showcase
- Team search and sort
- Team statistics display
- Team distribution analysis
- Member count display
- Pagination controls

Key Classes:

- `.teams-container` - Main container
- `.teams-table` - Teams rankings
- `.team-card` - Team card display
- `.top-teams-section` - Featured teams
- `.team-stats` - Statistics display
- `.distribution-chart` - Team distribution

---

### scoreboard.css (1,200 lines)

**Live Scoreboard & Leaderboard**

Sections:

- Podium display (1st, 2nd, 3rd place)
- Main scoreboard table
- Rankings with detailed stats
- Filter and sort controls
- Tab-based views
- Statistics cards
- Activity timeline
- Real-time updates styling

Key Classes:

- `.podium` - Podium section
- `.podium-position` - Individual podium spot
- `.rankings-table` - Main leaderboard table
- `.rank-badge` - Rank indicator
- `.stat-card` - Statistics card
- `.tabs-container` - Tab navigation
- `.pagination` - Page navigation

---

### challenges.css (970 lines)

**Challenges Browser & Solver**

Sections:

- Sidebar with category filters
- Challenge grid display
- Challenge cards
- Challenge modal/popup
- Search and sort controls
- Difficulty indicators
- Points display
- Solve status indicators

Key Classes:

- `.challenges-container` - Main layout
- `.challenges-sidebar` - Filter sidebar
- `.challenges-grid` - Challenge cards grid
- `.challenge-card` - Individual challenge
- `.challenge-modal` - Detail modal
- `.difficulty-badge` - Difficulty indicator
- `.category-filter` - Category selection

---

### notifications.css (780 lines)

**Notifications & Announcements**

Sections:

- Notifications header with filters
- Tab-based notification types
- Notification items list
- Notification detail modal
- Read/unread status
- Timestamps and actions
- Pagination controls
- Empty states

Key Classes:

- `.notifications-container` - Main layout
- `.notifications-header` - Header with filters
- `.notification-tabs` - Tab navigation
- `.notification-item` - Individual notification
- `.notification-modal` - Detail view
- `.status-badge` - Read/unread indicator
- `.pagination` - Page navigation

---

### team-profile.css (730 lines)

**Team Profile & Details**

Sections:

- Team hero section
- Team statistics display
- Team member cards
- Performance charts
- Achievement badges
- Team timeline
- Statistics tables
- Activity logs

Key Classes:

- `.team-hero` - Header section
- `.team-stats` - Statistics display
- `.members-section` - Team members grid
- `.member-card` - Individual member
- `.chart-container` - Chart display
- `.achievement-badge` - Badge display
- `.activity-log` - Activity timeline

---

### profile.css (600 lines)

**User Profile & Statistics**

Sections:

- Profile hero with avatar
- User statistics sidebar
- Achievement badges
- Performance charts
- Challenge solve history table
- Profile settings
- Awards and recognitions
- Responsive profile layout

Key Classes:

- `.profile-hero` - Header section
- `.profile-sidebar` - Statistics sidebar
- `.stat-card` - Individual statistic
- `.achievement-badge` - Badge display
- `.chart-container` - Chart display
- `.solves-table` - Challenge history
- `.award-card` - Award display

---

### settings.css (680 lines)

**User Settings & Preferences**

Sections:

- Settings sidebar navigation
- Account preferences section
- Notification settings
- Privacy controls
- API key management
- Password and security
- Account deletion
- Settings form styling

Key Classes:

- `.settings-container` - Main layout
- `.settings-sidebar` - Navigation sidebar
- `.settings-section` - Content section
- `.form-group` - Form field styling
- `.settings-form` - Form container
- `.toggle-switch` - Toggle control
- `.api-key-item` - API key display

---

### admin.css (620 lines)

**Admin Dashboard & Management**

Sections:

- Admin navbar (different color scheme)
- Dashboard statistics cards
- Admin control buttons
- User management table
- Challenge management table
- Activity logs
- Analytics charts
- System configuration forms

Key Classes:

- `.admin-container` - Main layout
- `.admin-navbar` - Navigation (dark theme)
- `.dashboard-card` - Stat card
- `.admin-table` - Management table
- `.chart-container` - Chart display
- `.admin-section` - Content section
- `.modal` - Action modal

---

## 🎨 Color Palette Reference

| Usage      | Variable            | Hex     | Use Case                |
| ---------- | ------------------- | ------- | ----------------------- |
| Primary    | `--primary-color`   | #2563eb | Main CTA, Active states |
| Secondary  | `--secondary-color` | #1e40af | Accents, Gradients      |
| Accent     | `--accent-color`    | #f59e0b | Highlights, Badges      |
| Success    | `--success-color`   | #22c55e | Success messages        |
| Error      | `--error-color`     | #ef4444 | Error messages          |
| Dark Text  | `--text-dark`       | #111827 | Main text               |
| Light Text | `--text-light`      | #6b7280 | Secondary text          |
| Light BG   | `--bg-light`        | #f9fafb | Alternative backgrounds |
| Border     | `--border-color`    | #e5e7eb | Dividers, borders       |

## 📐 Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* 480px and below: Mobile devices (default) */

/* 481px - 768px: Tablets */
@media (max-width: 768px) {
}

/* 769px - 1200px: Desktops */
@media (max-width: 1200px) {
}

/* 1201px+: Large desktops */
/* No media query needed, use default styles */
```

### Mobile-First Pattern

```css
/* Default: Mobile (small screens) */
.grid {
  grid-template-columns: 1fr;
}

/* Add more columns as screen grows */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## 🔤 Typography

### Font Stack

```css
font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial,
  sans-serif;
```

### Font Sizes

- h1: 3.5rem (56px)
- h2: 2rem (32px)
- h3: 1.5rem (24px)
- h4: 1.25rem (20px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Line Heights

- Headings: 1.2
- Body: 1.6
- Compact: 1.4

## 📏 Spacing System

Using CSS variables for consistency:

```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
```

Usage:

```css
padding: var(--spacing-md);
margin: var(--spacing-lg) var(--spacing-md);
gap: var(--spacing-sm);
```

## 🎭 BEM Naming Convention

**B**lock **E**lement **M**odifier Pattern

```
Block: .challenge-card
Element: .challenge-card__title
Modifier: .challenge-card--solved

Block: .button
Element: .button__icon
Modifiers: .button--primary, .button--large, .button--disabled
```

## 🔄 Common Patterns

### Card Component

```css
.card {
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  padding: var(--spacing-lg);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Button Component

```css
.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn--primary {
  background: var(--primary-color);
  color: white;
}

.btn--primary:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

### Grid Layout

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}
```

## 🚀 Performance Tips

1. **Use CSS Variables** - Centralized value management
2. **Leverage GPU** - Use `transform` and `opacity` for animations
3. **Minimize Specificity** - Keep selector depth low
4. **Use Shorthand** - `margin: 1rem` instead of individual properties
5. **Avoid Nested Selectors** - Max 2-3 levels deep
6. **Mobile-First** - Build for mobile, enhance for desktop

## 🔍 Debugging CSS

### Browser DevTools

1. Right-click element → Inspect
2. View Styles tab to see applied rules
3. Check Computed tab for final values
4. Use Coverage tab to find unused CSS

### Common Issues

- **Not Working?** Check selector specificity
- **Spacing Wrong?** Verify margin/padding calculations
- **Layout Broken?** Check flex/grid properties
- **Color Off?** Verify CSS variable references

## 📚 CSS Resources

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [BEM Methodology](http://getbem.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Total Lines:** 8,242
