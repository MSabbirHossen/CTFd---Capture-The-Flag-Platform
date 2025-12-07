// Sample tokens data
let activeTokens = [
  {
    id: 1,
    created: "November 29th, 10:16:02 PM",
    expiration: "December 29th, 10:16:02 PM",
    description: "For container based challenges",
  },
  {
    id: 2,
    created: "December 3rd, 9:41:11 PM",
    expiration: "January 2nd, 9:41:11 PM",
    description: "",
  },
];

// Sample login history
const loginHistory = [
  {
    id: 1,
    device: "Windows 10 - Chrome",
    location: "Cairo, Egypt",
    ip: "41.234.123.45",
    time: "Today at 10:30 AM",
  },
  {
    id: 2,
    device: "iPhone 12 - Safari",
    location: "Cairo, Egypt",
    ip: "41.234.123.45",
    time: "Yesterday at 5:15 PM",
  },
  {
    id: 3,
    device: "MacBook Pro - Firefox",
    location: "Giza, Egypt",
    ip: "41.235.200.10",
    time: "2 days ago at 2:45 PM",
  },
  {
    id: 4,
    device: "Windows 11 - Edge",
    location: "Cairo, Egypt",
    ip: "41.234.123.45",
    time: "3 days ago at 8:20 AM",
  },
];

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initializeTabSwitching();
  populateTokensTable();
  populateLoginHistory();
  attachEventListeners();
});

// Tab switching functionality
function initializeTabSwitching() {
  const tabs = document.querySelectorAll(".settings-tab");
  const panels = document.querySelectorAll(".settings-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("data-tab");

      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      // Add active class to clicked tab and corresponding panel
      tab.classList.add("active");
      document.getElementById(`${tabName}-panel`).classList.add("active");

      // Smooth scroll to panel
      document
        .querySelector(".settings-content")
        .scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Populate tokens table
function populateTokensTable() {
  const tbody = document.getElementById("tokensTableBody");
  tbody.innerHTML = "";

  activeTokens.forEach((token) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${token.created}</td>
      <td>${token.expiration}</td>
      <td>${
        token.description ||
        '<em style="color: var(--text-light);">No description</em>'
      }</td>
      <td>
        <button class="btn-icon delete-token" data-id="${
          token.id
        }" title="Delete token">
          <i class="fas fa-times"></i>
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });

  // Attach delete handlers
  document.querySelectorAll(".delete-token").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const tokenId = btn.getAttribute("data-id");
      if (confirm("Are you sure you want to delete this token?")) {
        activeTokens = activeTokens.filter((t) => t.id !== parseInt(tokenId));
        populateTokensTable();
        showNotification("Token deleted successfully", "success");
      }
    });
  });
}

// Populate login history
function populateLoginHistory() {
  const historyContainer = document.getElementById("loginHistory");
  historyContainer.innerHTML = "";

  loginHistory.forEach((login, index) => {
    const loginItem = document.createElement("div");
    loginItem.className = "login-item";
    loginItem.innerHTML = `
      <div class="login-item-header">
        <div class="device-info">
          <i class="fas fa-laptop"></i>
          <div>
            <h4>${login.device}</h4>
            <p>${login.location} (${login.ip})</p>
          </div>
        </div>
        <span class="login-time">${login.time}</span>
      </div>
      ${index === 0 ? '<span class="badge badge-success">Current</span>' : ""}
    `;
    historyContainer.appendChild(loginItem);
  });
}

// Attach event listeners
function attachEventListeners() {
  // Profile form submit
  document.getElementById("profileForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    if (!username || !email) {
      showNotification("Please fill in all required fields", "error");
      return;
    }

    showNotification("Profile updated successfully!", "success");
  });

  // Generate token button
  document.getElementById("generateTokenBtn").addEventListener("click", () => {
    const expiration = document.getElementById("tokenExpiration").value;
    const description = document.getElementById("tokenDescription").value;

    if (!expiration) {
      showNotification("Please select an expiration date", "error");
      return;
    }

    const newToken = {
      id: activeTokens.length + 1,
      created: new Date().toLocaleString(),
      expiration: new Date(expiration).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      description: description || "No description",
    };

    activeTokens.push(newToken);
    populateTokensTable();

    // Clear form
    document.getElementById("tokenExpiration").value = "";
    document.getElementById("tokenDescription").value = "";

    showNotification("Token generated successfully!", "success");
  });

  // Preferences form submit
  document.getElementById("preferencesForm").addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("Preferences saved successfully!", "success");
  });

  // Enable 2FA button
  document.getElementById("enable2FA").addEventListener("click", () => {
    showNotification("2FA setup would be initiated here", "info");
  });

  // Delete account button
  document.getElementById("deleteAccountBtn").addEventListener("click", () => {
    if (
      confirm(
        "⚠️ WARNING: This action cannot be undone. All your data will be permanently deleted. Are you sure?"
      )
    ) {
      showNotification(
        "Account deletion initiated. Please check your email for confirmation.",
        "info"
      );
    }
  });
}

// Show notification
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${getIconForType(type)}"></i>
      <span>${message}</span>
    </div>
  `;

  document.body.appendChild(notification);

  // Trigger animation
  setTimeout(() => notification.classList.add("show"), 10);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 4000);
}

// Get icon based on notification type
function getIconForType(type) {
  const icons = {
    success: "check-circle",
    error: "exclamation-circle",
    info: "info-circle",
    warning: "warning",
  };
  return icons[type] || "info-circle";
}
