// Notifications Data
const notifications = [
  {
    id: 1,
    type: "announcement",
    title: "Contest Rules Updated",
    message:
      "The contest rules have been updated. Please review the new guidelines before the contest begins. Key changes include updated penalty policies and submission procedures.",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    unread: true,
    important: true,
    icon: "megaphone",
    color: "primary",
  },
  {
    id: 2,
    type: "announcement",
    title: "Preliminary Round Schedule Confirmed",
    message:
      "The preliminary round is scheduled for December 11, 2024 at 6:00 PM IST. Make sure all team members are available and registered.",
    time: new Date(Date.now() - 4 * 60 * 60 * 1000),
    unread: true,
    important: true,
    icon: "calendar-alt",
    color: "success",
  },
  {
    id: 3,
    type: "activity",
    title: "Your Team Solved a Challenge",
    message:
      "Congratulations! Your team solved the challenge 'Caesar Cipher' and earned 50 points. You are now ranked #5 on the scoreboard.",
    time: new Date(Date.now() - 6 * 60 * 60 * 1000),
    unread: true,
    important: false,
    icon: "trophy",
    color: "success",
  },
  {
    id: 4,
    type: "system",
    title: "Challenge Added: RSA Basics",
    message:
      "A new challenge 'RSA Basics' has been added to the Cryptography category. It's worth 150 points. Start solving!",
    time: new Date(Date.now() - 8 * 60 * 60 * 1000),
    unread: true,
    important: false,
    icon: "puzzle-piece",
    color: "warning",
  },
  {
    id: 5,
    type: "activity",
    title: "New Team Registration",
    message:
      "Team 'Cyber Warriors' has joined the contest. You can check their profile and track their progress on the scoreboard.",
    time: new Date(Date.now() - 12 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "users",
    color: "info",
  },
  {
    id: 6,
    type: "message",
    title: "Message from Admin",
    message:
      "Hi! If you have any technical issues or questions about the contest, please reach out to our support team. We're here to help!",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "envelope",
    color: "primary",
  },
  {
    id: 7,
    type: "announcement",
    title: "Server Maintenance Scheduled",
    message:
      "We will be performing scheduled maintenance on the platform on December 10, 2024 from 2:00 AM to 4:00 AM UTC. Services may be unavailable during this time.",
    time: new Date(Date.now() - 48 * 60 * 60 * 1000),
    unread: false,
    important: true,
    icon: "wrench",
    color: "danger",
  },
  {
    id: 8,
    type: "activity",
    title: "Challenge Hint Unlocked",
    message:
      "You have unlocked a hint for the challenge 'SQL Injection'. Check the challenge details to view it.",
    time: new Date(Date.now() - 72 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "lightbulb",
    color: "warning",
  },
  {
    id: 9,
    type: "system",
    title: "Your Profile Has Been Updated",
    message:
      "Your profile information has been successfully updated. Your changes are now live on the platform.",
    time: new Date(Date.now() - 96 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "user-check",
    color: "success",
  },
  {
    id: 10,
    type: "message",
    title: "Team Invitation",
    message:
      "You have been invited to join the team 'Code Breakers'. Visit your notifications to accept or decline this invitation.",
    time: new Date(Date.now() - 120 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "handshake",
    color: "info",
  },
  {
    id: 11,
    type: "announcement",
    title: "Final Round Registration Open",
    message:
      "Registration for the final round is now open! Only the top 10 teams from the preliminary round will advance. Register now to secure your spot.",
    time: new Date(Date.now() - 144 * 60 * 60 * 1000),
    unread: false,
    important: true,
    icon: "star",
    color: "primary",
  },
  {
    id: 12,
    type: "activity",
    title: "Team Ranking Update",
    message:
      "Your team has moved up to rank #3! Keep solving challenges to maintain or improve your position.",
    time: new Date(Date.now() - 168 * 60 * 60 * 1000),
    unread: false,
    important: false,
    icon: "chart-line",
    color: "success",
  },
];

// State Management
let currentFilter = "all";
let currentTab = "all-notifications";
let currentSort = "newest";
let searchTerm = "";
let currentPage = 1;
const itemsPerPage = 5;

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  displayNotifications();
  setupEventListeners();
  updateUnreadCount();
});

// Setup Event Listeners
function setupEventListeners() {
  // Filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.dataset.filter;
      currentPage = 1;
      displayNotifications();
    });
  });

  // Tab buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentTab = this.dataset.tab;
      currentPage = 1;
      displayNotifications();
    });
  });

  // Search
  document
    .getElementById("searchNotifications")
    .addEventListener("input", function () {
      searchTerm = this.value.toLowerCase();
      currentPage = 1;
      displayNotifications();
    });

  // Sort
  document.getElementById("sortBy").addEventListener("change", function () {
    currentSort = this.value;
    displayNotifications();
  });

  // Mark all as read
  document.getElementById("markAllRead").addEventListener("click", function () {
    notifications.forEach((n) => (n.unread = false));
    displayNotifications();
    updateUnreadCount();
    showNotification("All notifications marked as read");
  });

  // Pagination
  document
    .getElementById("prevPage")
    .addEventListener("click", () => goToPage(currentPage - 1));
  document
    .getElementById("nextPage")
    .addEventListener("click", () => goToPage(currentPage + 1));

  // Modal controls
  setupModalControls();
}

// Filter and Sort Notifications
function getFilteredNotifications() {
  let filtered = [...notifications];

  // Tab filter
  if (currentTab !== "all-notifications") {
    filtered = filtered.filter((n) => n.type === currentTab);
  }

  // Status filter
  if (currentFilter === "unread") {
    filtered = filtered.filter((n) => n.unread);
  } else if (currentFilter === "important") {
    filtered = filtered.filter((n) => n.important);
  }

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(
      (n) =>
        n.title.toLowerCase().includes(searchTerm) ||
        n.message.toLowerCase().includes(searchTerm)
    );
  }

  // Sort
  filtered.sort((a, b) => {
    if (currentSort === "newest") {
      return b.time - a.time;
    } else if (currentSort === "oldest") {
      return a.time - b.time;
    } else if (currentSort === "unread") {
      if (a.unread === b.unread) {
        return b.time - a.time;
      }
      return a.unread ? -1 : 1;
    }
  });

  return filtered;
}

// Display Notifications
function displayNotifications() {
  const filtered = getFilteredNotifications();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalItems === 0) {
    document.getElementById("notificationsList").innerHTML = "";
    document.getElementById("emptyState").style.display = "flex";
    document.getElementById("paginationControls").style.display = "none";
    return;
  }

  document.getElementById("emptyState").style.display = "none";

  // Pagination
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const pageItems = filtered.slice(startIdx, endIdx);

  // Build HTML
  const listHTML = pageItems
    .map((notification) => createNotificationItem(notification))
    .join("");

  document.getElementById("notificationsList").innerHTML = listHTML;

  // Add click handlers
  document.querySelectorAll(".notification-item").forEach((item) => {
    item.addEventListener("click", function () {
      const id = parseInt(this.dataset.id);
      openNotificationModal(id);
    });
  });

  // Add mark as read handlers
  document.querySelectorAll(".mark-read-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const notification = notifications.find((n) => n.id === id);
      if (notification) {
        notification.unread = false;
        displayNotifications();
        updateUnreadCount();
      }
    });
  });

  // Add favorite handlers
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const notification = notifications.find((n) => n.id === id);
      if (notification) {
        notification.important = !notification.important;
        displayNotifications();
      }
    });
  });

  // Update pagination
  updatePagination(totalPages);
}

// Create Notification Item HTML
function createNotificationItem(notification) {
  const timeAgo = getTimeAgo(notification.time);
  const unreadClass = notification.unread ? "unread" : "";
  const importantClass = notification.important ? "important" : "";

  return `
    <div class="notification-item ${unreadClass} ${importantClass}" data-id="${
    notification.id
  }">
      <div class="notification-icon">
        <i class="fas fa-${notification.icon} icon-${notification.color}"></i>
      </div>
      <div class="notification-content">
        <div class="notification-header">
          <h3 class="notification-title">${notification.title}</h3>
          <span class="notification-time">${timeAgo}</span>
        </div>
        <p class="notification-message">${notification.message}</p>
        <div class="notification-meta">
          <span class="notification-type">${notification.type}</span>
          ${
            notification.unread
              ? '<span class="unread-indicator">New</span>'
              : ""
          }
        </div>
      </div>
      <div class="notification-actions">
        <button class="action-btn mark-read-btn" data-id="${
          notification.id
        }" title="Mark as read">
          <i class="fas fa-envelope-open"></i>
        </button>
        <button class="action-btn favorite-btn ${
          notification.important ? "active" : ""
        }" data-id="${notification.id}" title="Mark important">
          <i class="fas fa-star"></i>
        </button>
      </div>
      ${notification.unread ? '<div class="unread-dot"></div>' : ""}
    </div>
  `;
}

// Update Unread Count
function updateUnreadCount() {
  const unreadCount = notifications.filter((n) => n.unread).length;
  const badge = document.getElementById("unreadBadge");
  badge.textContent = unreadCount;
  badge.style.display = unreadCount > 0 ? "inline-flex" : "none";
}

// Get Time Ago
function getTimeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return Math.floor(interval) + "y ago";

  interval = seconds / 2592000;
  if (interval > 1) return Math.floor(interval) + "mo ago";

  interval = seconds / 86400;
  if (interval > 1) return Math.floor(interval) + "d ago";

  interval = seconds / 3600;
  if (interval > 1) return Math.floor(interval) + "h ago";

  interval = seconds / 60;
  if (interval > 1) return Math.floor(interval) + "m ago";

  return Math.floor(seconds) + "s ago";
}

// Update Pagination
function updatePagination(totalPages) {
  if (totalPages <= 1) {
    document.getElementById("paginationControls").style.display = "none";
    return;
  }

  document.getElementById("paginationControls").style.display = "flex";
  document.getElementById("currentPage").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;

  document.getElementById("prevPage").disabled = currentPage === 1;
  document.getElementById("nextPage").disabled = currentPage === totalPages;
}

// Go to Page
function goToPage(page) {
  const filtered = getFilteredNotifications();
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displayNotifications();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Modal Functions
function setupModalControls() {
  const modal = document.getElementById("notificationModal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  overlay.addEventListener("click", () => modal.classList.remove("active"));

  document
    .getElementById("markImportantBtn")
    .addEventListener("click", function () {
      const id = parseInt(this.dataset.id);
      const notification = notifications.find((n) => n.id === id);
      if (notification) {
        notification.important = !notification.important;
        this.classList.toggle("active");
      }
    });

  document.getElementById("deleteBtn").addEventListener("click", function () {
    const id = parseInt(this.dataset.id);
    const index = notifications.findIndex((n) => n.id === id);
    if (index > -1) {
      notifications.splice(index, 1);
      document.getElementById("notificationModal").classList.remove("active");
      displayNotifications();
      updateUnreadCount();
      showNotification("Notification deleted");
    }
  });
}

function openNotificationModal(id) {
  const notification = notifications.find((n) => n.id === id);
  if (!notification) return;

  // Mark as read
  if (notification.unread) {
    notification.unread = false;
    updateUnreadCount();
  }

  document.getElementById("modalTitle").textContent = notification.title;
  document.getElementById("modalType").textContent =
    notification.type.toUpperCase();
  document.getElementById("modalTime").textContent = getTimeAgo(
    notification.time
  );
  document.getElementById("modalMessage").textContent = notification.message;

  const markImportantBtn = document.getElementById("markImportantBtn");
  markImportantBtn.dataset.id = id;
  if (notification.important) {
    markImportantBtn.classList.add("active");
  } else {
    markImportantBtn.classList.remove("active");
  }

  const deleteBtn = document.getElementById("deleteBtn");
  deleteBtn.dataset.id = id;

  document.getElementById("notificationModal").classList.add("active");
  displayNotifications();
}

// Show Notification Toast
function showNotification(message) {
  const toast = document.createElement("div");
  toast.className = "toast-notification";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
