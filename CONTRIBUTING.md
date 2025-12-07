# Contributing to CTFd Platform

Thank you for your interest in contributing to the CTFd platform! This guide will help you understand how to contribute effectively.

## 🎯 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Report issues professionally
- Focus on code quality and user experience

## 📋 Before You Start

### Prerequisites

- Familiarity with HTML5, CSS3, and vanilla JavaScript
- Understanding of responsive web design
- Git knowledge (clone, commit, push, pull requests)
- Text editor or IDE (VS Code recommended)
- Modern browser for testing

### Development Setup

```bash
# Clone the repository
git clone https://github.com/MSabbirHossen/CTFd---Capture-The-Flag-Platform.git
cd ctfd-web-browser

# Create a new branch
git checkout -b feature/your-feature-name

# Start developing
# Open index.html in your browser or use a local server
# (e.g., python -m http.server 8000)
```

## 🏗️ Project Structure

Understand the file organization:

```
ctfd-web-browser/
├── README.md                 # Project overview
├── ARCHITECTURE.md          # Technical design
├── PERFORMANCE.md           # Optimization guide
├── CONTRIBUTING.md          # This file
│
├── HTML Pages (10)          # Entry points
├── CSS Files (11)           # Modular styles
├── JavaScript Files (10)    # Page logic
└── .git/                    # Version control
```

## 💻 Contributing Guidelines

### Types of Contributions

#### 🐛 Bug Fixes

- Report bugs with reproduction steps
- Include browser/device information
- Provide screenshots if applicable
- Submit fix in a dedicated branch

#### ✨ New Features

- Discuss major features in an issue first
- Follow existing code patterns
- Add corresponding CSS and JavaScript
- Ensure responsive design works

#### 📚 Documentation

- Improve existing documentation
- Add code comments for complex logic
- Create tutorials or guides
- Fix typos and clarity issues

#### ⚡ Performance Improvements

- Profile code before optimizing
- Measure improvements with metrics
- Ensure no functionality breaks
- Document performance gains

#### ♿ Accessibility Improvements

- Follow WCAG 2.1 guidelines
- Test with keyboard navigation
- Verify color contrast ratios
- Support screen readers

### Code Style Guide

#### HTML Standards

```html
<!-- Use semantic HTML5 elements -->
<header></header>
<nav></nav>
<main></main>
<article></article>
<section></section>
<aside></aside>
<footer></footer>

<!-- Use meaningful IDs and classes -->
<div class="challenge-card" id="challenge-123">
  <h2 class="challenge-card__title">Challenge Name</h2>
</div>

<!-- Use data attributes for JavaScript hooks -->
<button class="btn btn-primary" data-action="submit">Submit</button>
```

#### CSS Standards

```css
/* Use BEM naming convention */
.component-name {
} /* Block */
.component-name__element {
} /* Element */
.component-name--modifier {
} /* Modifier */

/* Use CSS custom properties */
color: var(--primary-color);
background: var(--bg-light);
padding: var(--spacing-md);

/* Mobile-first responsive design */
.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Use shorthand properties */
margin: 1rem 0;
padding: 0.5rem 1rem;
border-radius: 8px;

/* Group related properties */
.card {
  /* Layout */
  display: flex;
  flex-direction: column;

  /* Styling */
  background: white;
  border-radius: 8px;

  /* Spacing */
  padding: 1.5rem;
  margin-bottom: 1rem;

  /* Effects */
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
}
```

#### JavaScript Standards

```javascript
// Use const by default, let when needed
const maxItems = 50;
let currentPage = 1;

// Use meaningful variable names
const challengeCards = document.querySelectorAll(".challenge-card");
const userScoreElement = document.getElementById("user-score");

// Use arrow functions
const filterChallenges = (challenges) => {
  return challenges.filter((c) => c.solved === false);
};

// Cache DOM queries
const elements = {
  header: document.querySelector(".header"),
  sidebar: document.querySelector(".sidebar"),
  mainContent: document.querySelector(".main-content"),
};

// Use event delegation
document.addEventListener("click", (e) => {
  if (e.target.matches(".challenge-card")) {
    handleChallengeClick(e.target);
  }
});

// Add helpful comments for complex logic
// Debounce search input to avoid excessive API calls
function debounceSearch(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

// Use IIFE for module pattern
(function () {
  "use strict";

  // Page-specific logic here

  function init() {
    setupEventListeners();
    loadData();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
```

### File Naming Conventions

- HTML: `page-name.html` (lowercase, hyphens)
- CSS: `page-name.css` (lowercase, hyphens)
- JavaScript: `page-name.js` (lowercase, hyphens)

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>

Type:
  - feat: New feature
  - fix: Bug fix
  - docs: Documentation
  - style: Code style changes
  - refactor: Code restructuring
  - perf: Performance improvement
  - test: Test updates
  - chore: Build/dependency updates

Example:
  perf(challenges): Optimize card rendering with CSS containment

  - Added CSS contain property to challenge cards
  - Reduced layout recalculations by 60%
  - Improved scroll performance on challenges page

  Closes #123
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting a pull request:

#### Desktop Testing

- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Verify at 1920x1080 resolution
- [ ] Verify at 1366x768 resolution

#### Mobile Testing

- [ ] Test on iOS Safari (latest)
- [ ] Test on Chrome Android (latest)
- [ ] Verify at 375x667 (iPhone)
- [ ] Verify at 768x1024 (iPad)
- [ ] Verify at 480x854 (Android)

#### Functionality Testing

- [ ] All links work correctly
- [ ] Forms submit properly
- [ ] Buttons perform intended actions
- [ ] Navigation works smoothly
- [ ] No JavaScript errors in console
- [ ] No CSS errors/warnings

#### Performance Testing

- [ ] Page loads in < 2 seconds
- [ ] Smooth scrolling (60 FPS)
- [ ] Animations are smooth
- [ ] No layout shifts
- [ ] Images load properly

#### Accessibility Testing

- [ ] Tab through all interactive elements
- [ ] Forms are keyboard navigable
- [ ] Color contrast is adequate (4.5:1 minimum)
- [ ] Page works with screen reader
- [ ] Focus indicators are visible

### Automated Testing

```bash
# Validate HTML
html-validate index.html

# Check CSS validity
stylelint "*.css"

# Lint JavaScript
eslint "*.js"

# Run Lighthouse audit
npx lighthouse https://localhost:8000/index.html
```

## 📝 Documentation Standards

### Code Comments

```javascript
// ✅ Good: Explains why, not what
// Debounce search to reduce API calls during typing
const handleSearch = debounce((query) => {
  searchChallenges(query);
}, 300);

// ❌ Avoid: Obvious comments
// Set search query
const query = input.value;
```

### Documentation Comments

```javascript
/**
 * Filters challenges based on difficulty level
 * @param {Array} challenges - Array of challenge objects
 * @param {string} difficulty - Difficulty level ('easy', 'medium', 'hard')
 * @returns {Array} Filtered challenges
 */
function filterByDifficulty(challenges, difficulty) {
  return challenges.filter((c) => c.difficulty === difficulty);
}
```

### Markdown Documentation

- Use clear headings with hierarchy
- Include code examples
- Provide links to related docs
- Add table of contents for long docs
- Include version and update date

## 🔄 Pull Request Process

### Step 1: Create Feature Branch

```bash
git checkout -b feature/short-description
```

### Step 2: Make Changes

- Follow code style guide
- Commit regularly with clear messages
- Keep commits focused and atomic

### Step 3: Test Changes

- Run manual testing checklist
- Verify no regressions
- Check performance impact

### Step 4: Prepare PR

```bash
# Update your branch with latest main
git fetch origin
git rebase origin/main

# Push to your fork
git push origin feature/short-description
```

### Step 5: Create Pull Request

- Use clear title and description
- Reference related issues
- Include screenshots for UI changes
- List testing performed
- Request reviews

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Documentation
- [ ] Performance improvement

## Related Issues

Closes #(issue number)

## Testing Performed

- [x] Desktop browsers tested
- [x] Mobile responsive verified
- [x] Accessibility checked
- [x] Performance verified

## Screenshots (if applicable)

[Add screenshots here]

## Checklist

- [x] Code follows style guide
- [x] Comments added for complex logic
- [x] Documentation updated
- [x] No new warnings generated
- [x] Tests pass
```

## 📊 Review Process

### Reviewer Expectations

Reviewers will check:

1. Code quality and style adherence
2. Functionality and testing
3. Performance impact
4. Accessibility compliance
5. Documentation adequacy
6. Security implications

### Addressing Feedback

- Respond to all comments
- Make requested changes
- Push updates to the same PR branch
- Request re-review when ready

## 🚀 Deployment

### Release Process

1. Create release branch: `release/v1.0.0`
2. Update version numbers
3. Update CHANGELOG.md
4. Create GitHub release
5. Deploy to production

### Version Numbering

- `MAJOR.MINOR.PATCH` (e.g., 1.0.0)
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

## 🐛 Issue Reporting

### Creating an Issue

Include:

- Clear title describing the problem
- Reproduction steps
- Expected vs actual behavior
- Browser/device information
- Screenshots or video
- Error messages from console

### Issue Template

```markdown
## Description

What is the problem?

## Steps to Reproduce

1. Go to...
2. Click on...
3. See error

## Expected Behavior

What should happen?

## Actual Behavior

What actually happens?

## Environment

- Browser: Chrome 120
- Device: MacBook Pro M1
- OS: macOS 14.1

## Additional Info

Screenshots, error messages, etc.
```

## 📚 Learning Resources

### Web Development

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML Living Standard](https://html.spec.whatwg.org/)
- [CSS Specifications](https://www.w3.org/Style/CSS/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Performance

- [Web Vitals](https://web.dev/vitals/)
- [Performance Best Practices](https://web.dev/performance/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

### Accessibility

- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Accessible Design](https://www.w3.org/WAI/tutorials/)
- [A11y Project](https://www.a11yproject.com/)

## 🎓 Project Structure Learning

### Suggested Learning Path

1. **Read** README.md for project overview
2. **Read** ARCHITECTURE.md for system design
3. **Read** PERFORMANCE.md for optimization details
4. **Review** index.html and index.css together
5. **Study** script.js and index.js patterns
6. **Make** small CSS changes first
7. **Implement** JavaScript functionality
8. **Test** thoroughly before submitting

## 💬 Getting Help

### Resources

1. Check existing issues/PRs
2. Review project documentation
3. Look at similar components
4. Ask in PR comments
5. Create a discussion issue

## ✅ Contribution Checklist

Before submitting:

- [ ] Read CONTRIBUTING.md
- [ ] Followed code style guide
- [ ] Tested on multiple browsers
- [ ] Tested responsive design
- [ ] Verified accessibility
- [ ] Checked performance
- [ ] Added code comments
- [ ] Updated documentation
- [ ] Wrote clear commit messages
- [ ] Created PR with description
- [ ] Requested reviews

## 🙏 Thank You!

Your contributions make CTFd better for everyone. We appreciate your effort and look forward to collaborating with you!

---

**Last Updated:** December 2024  
**Version:** 1.0.0

For questions, contact: [@MSabbirHossen](https://github.com/MSabbirHossen)
