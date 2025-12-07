// ==================== COUNTDOWN CLOCK FUNCTIONALITY ====================
class CountdownTimer {
  constructor(card, endDate) {
    this.card = card;
    this.endDate = new Date(endDate);
    this.daysElement = card.querySelector(".days");
    this.hoursElement = card.querySelector(".hours");
    this.minutesElement = card.querySelector(".minutes");
    this.secondsElement = card.querySelector(".seconds");
    this.statusElement = card.querySelector(".round-status");
    this.init();
  }

  init() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date().getTime();
    const distance = this.endDate.getTime() - now;

    if (distance < 0) {
      // Timer finished
      this.daysElement.textContent = "00";
      this.hoursElement.textContent = "00";
      this.minutesElement.textContent = "00";
      this.secondsElement.textContent = "00";
      this.statusElement.textContent = "Completed";
      this.statusElement.className = "round-status completed";
      clearInterval(this.interval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.daysElement.textContent = this.pad(days);
    this.hoursElement.textContent = this.pad(hours);
    this.minutesElement.textContent = this.pad(minutes);
    this.secondsElement.textContent = this.pad(seconds);
  }

  pad(num) {
    return num.toString().padStart(2, "0");
  }

  destroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}

// Initialize countdown timers when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  const countdownCards = document.querySelectorAll(".countdown-card");
  const timers = [];

  // Set end dates for each round
  // Preliminary Round: 11 December 2025 at 6:00 PM (18:00)
  // Final Round: 20 December 2025 at 10:00 AM (10:00)
  const endDates = [
    new Date("2025-12-11 18:00:00"), // Preliminary Round - Dec 11, 6:00 PM
    new Date("2025-12-20 10:00:00"), // Final Round - Dec 20, 10:00 AM
  ];

  countdownCards.forEach((card, index) => {
    if (endDates[index]) {
      const timer = new CountdownTimer(card, endDates[index]);
      timers.push(timer);
    }
  });

  // Cleanup timers on page unload
  window.addEventListener("beforeunload", function () {
    timers.forEach((timer) => timer.destroy());
  });
});

// ==================== MOBILE MENU TOGGLE ====================
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger icon
      const spans = hamburger.querySelectorAll("span");
      if (navMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(10px, 10px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
      } else {
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      }
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const spans = hamburger.querySelectorAll("span");
        spans[0].style.transform = "";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "";
      });
    });
  }

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navMenu && navMenu.contains(event.target);
    const isClickOnHamburger = hamburger && hamburger.contains(event.target);

    if (!isClickInsideNav && !isClickOnHamburger && navMenu) {
      navMenu.classList.remove("active");
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "";
    }
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  }

  lastScrollTop = scrollTop;
});

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    // Don't prevent default for empty hrefs or just '#'
    if (href !== "#" && href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add animation class when element is in view
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all stat cards and category cards
document
  .querySelectorAll(".stat-card, .category-card, .social-link")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

// ==================== CTA BUTTON INTERACTIONS ====================
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// ==================== COUNTER ANIMATION FOR STATS ====================
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Start counter animation when stat section is in view
const statsObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat-number");
        statNumbers.forEach((el) => {
          const text = el.textContent.replace(/,/g, "");
          const number = parseInt(text);
          if (!isNaN(number)) {
            animateCounter(el, number);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats-section");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ==================== PROFILE LINK HANDLER ====================
document.addEventListener("DOMContentLoaded", function () {
  const profileLink = document.querySelector(".profile-link");
  if (profileLink) {
    profileLink.addEventListener("click", function (e) {
      e.preventDefault();
      // Show a simple notification
      showNotification("Profile page would open here", "info");
    });
  }
});

// ==================== NOTIFICATION SYSTEM ====================
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${
          type === "success"
            ? "#10b981"
            : type === "error"
            ? "#ef4444"
            : "#3b82f6"
        };
        color: white;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 999;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;

  document.body.appendChild(notification);

  // Add animation
  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
  document.head.appendChild(style);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideInRight 0.3s ease-out reverse";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ==================== LAZY LOAD IMAGES ====================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = "0";
        img.onload = () => {
          img.style.transition = "opacity 0.3s ease-in";
          img.style.opacity = "1";
        };
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => imageObserver.observe(img));
}

// ==================== ACTIVE NAV LINK HIGHLIGHTING ====================
function highlightActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
}

highlightActiveNavLink();

// ==================== KEYBOARD NAVIGATION ====================
document.addEventListener("keydown", function (e) {
  // Close mobile menu with Escape key
  if (e.key === "Escape") {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      const hamburger = document.querySelector(".hamburger");
      const spans = hamburger.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "";
    }
  }
});

// ==================== RESPONSIVE UTILITIES ====================
function handleResponsive() {
  const width = window.innerWidth;

  if (width > 768) {
    const navMenu = document.querySelector(".nav-menu");
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
    }
  }
}

window.addEventListener("resize", handleResponsive);

// ==================== PAGE LOAD ANIMATION ====================
document.addEventListener("DOMContentLoaded", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

// ==================== CONSOLE EASTER EGG ====================
console.log(
  "%cWelcome to CTFd! 🚩",
  "color: #2563eb; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cReady to capture some flags?",
  "color: #f59e0b; font-size: 14px;"
);
