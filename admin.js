// Admin Panel Data
const adminData = {
  usersCount: 3,
  teamsCount: 2,
  ipCount: 366,
  totalPoints: 1700,
  challengesCount: 5,
  rightSubmissions: 4,
  wrongSubmissions: 2,
};

// Challenges data for solve counts
const challengesData = [
  { name: "Stage 3", solves: 0 },
  { name: "Stage 2", solves: 1 },
  { name: "Stage 1", solves: 1 },
  { name: "BICS Bot", solves: 1 },
  { name: "Test Web", solves: 1 },
];

// Score distribution data (teams)
const scoreDistributionData = [{ range: "< 0 - 680", teams: 1 }];

// Category data
const categoryData = [
  { name: "Web", value: 1, percentage: 20.0, color: "#22c55e" },
  { name: "BICS77", value: 3, percentage: 60.0, color: "#f59e0b" },
  { name: "AI", value: 1, percentage: 20.0, color: "#a855f7" },
];

// Points breakdown
const pointsBreakdownData = [
  { name: "Web", value: 200, percentage: 17.6, color: "#22c55e" },
  { name: "BICS77", value: 900, percentage: 52.9, color: "#f59e0b" },
  { name: "AI", value: 500, percentage: 29.4, color: "#a855f7" },
];

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  updateStats();
  initializeCharts();
  attachEventListeners();
});

// Update statistics
function updateStats() {
  document.getElementById("usersCount").textContent = adminData.usersCount;
  document.getElementById("teamsCount").textContent = adminData.teamsCount;
  document.getElementById("ipCount").textContent = adminData.ipCount;
  document.getElementById("pointsCount").textContent = adminData.totalPoints;
  document.getElementById("challengesCount").textContent =
    adminData.challengesCount;

  // Update most/least solves
  const maxSolves = Math.max(...challengesData.map((c) => c.solves));
  const minSolves = Math.min(...challengesData.map((c) => c.solves));

  const mostSolvesChallenge = challengesData.find(
    (c) => c.solves === maxSolves
  );
  const leastSolvesChallenge = challengesData.find(
    (c) => c.solves === minSolves
  );

  document.getElementById(
    "mostSolves"
  ).innerHTML = `${mostSolvesChallenge.name} has the most solves with <strong>${maxSolves} solves</strong>`;
  document.getElementById(
    "leastSolves"
  ).innerHTML = `${leastSolvesChallenge.name} has the least solves with <strong>${minSolves} solves</strong>`;
}

// Initialize all charts
function initializeCharts() {
  initSolveCountsChart();
  initScoreDistributionChart();
  initSolvePercentagesChart();
  initSubmissionChart();
  initCategoryChart();
  initPointsChart();
}

// Solve Counts Bar Chart
function initSolveCountsChart() {
  const ctx = document.getElementById("solveCountsChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: challengesData.map((c) => c.name),
      datasets: [
        {
          label: "Solve Count",
          data: challengesData.map((c) => c.solves),
          backgroundColor: "#2563eb",
          borderColor: "#1e40af",
          borderWidth: 2,
          borderRadius: 8,
          barPercentage: 0.7,
        },
      ],
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            padding: 15,
            font: { size: 13, weight: "500" },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          titleFont: { size: 13, weight: "bold" },
          bodyFont: { size: 12 },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 1,
          ticks: {
            stepSize: 0.2,
            font: { size: 11 },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        y: {
          ticks: { font: { size: 11 } },
          grid: { display: false, drawBorder: false },
        },
      },
    },
  });
}

// Score Distribution Histogram
function initScoreDistributionChart() {
  const ctx = document
    .getElementById("scoreDistributionChart")
    .getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: scoreDistributionData.map((d) => d.range),
      datasets: [
        {
          label: "Number of Teams",
          data: scoreDistributionData.map((d) => d.teams),
          backgroundColor: "#2563eb",
          borderColor: "#1e40af",
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            padding: 15,
            font: { size: 13, weight: "500" },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1,
          ticks: {
            stepSize: 0.2,
            font: { size: 11 },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          ticks: { font: { size: 11 } },
          grid: { display: false, drawBorder: false },
        },
      },
    },
  });
}

// Solve Percentages Bar Chart
function initSolvePercentagesChart() {
  const ctx = document.getElementById("solvePercentagesChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: challengesData.map((c) => c.name),
      datasets: [
        {
          label: "Percentage of Teams (%)",
          data: challengesData.map(
            (c) => (c.solves / adminData.teamsCount) * 100
          ),
          backgroundColor: "#2563eb",
          borderColor: "#1e40af",
          borderWidth: 2,
          borderRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: true,
          labels: {
            padding: 15,
            font: { size: 13, weight: "500" },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          callbacks: {
            label: function (context) {
              return `${context.parsed.y.toFixed(1)}%`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            callback: function (value) {
              return value + "%";
            },
            font: { size: 11 },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          ticks: { font: { size: 11 } },
          grid: { display: false, drawBorder: false },
        },
      },
    },
  });
}

// Submission Percentages Doughnut Chart
function initSubmissionChart() {
  const ctx = document.getElementById("submissionChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Solves", "Fails"],
      datasets: [
        {
          data: [adminData.rightSubmissions, adminData.wrongSubmissions],
          backgroundColor: ["#10b981", "#ef4444"],
          borderColor: ["#059669", "#dc2626"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            font: { size: 12, weight: "500" },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed;
              const total =
                adminData.rightSubmissions + adminData.wrongSubmissions;
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Category Breakdown Doughnut Chart
function initCategoryChart() {
  const ctx = document.getElementById("categoryChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: categoryData.map((c) => c.name),
      datasets: [
        {
          data: categoryData.map((c) => c.value),
          backgroundColor: categoryData.map((c) => c.color),
          borderColor: categoryData.map((c) => c.color),
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            font: { size: 12, weight: "500" },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed;
              const percentage = categoryData[context.dataIndex].percentage;
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Points Breakdown Doughnut Chart
function initPointsChart() {
  const ctx = document.getElementById("pointsChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: pointsBreakdownData.map((p) => p.name),
      datasets: [
        {
          data: pointsBreakdownData.map((p) => p.value),
          backgroundColor: pointsBreakdownData.map((p) => p.color),
          borderColor: pointsBreakdownData.map((p) => p.color),
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            font: { size: 12, weight: "500" },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed;
              const percentage =
                pointsBreakdownData[context.dataIndex].percentage;
              return `${label}: ${value} pts (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Attach event listeners
function attachEventListeners() {
  // Quick action buttons
  document.querySelectorAll(".action-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.querySelector("span").textContent;
      showNotification(`${action} functionality would open here`, "info");
    });
  });

  // Chart control buttons
  document.querySelectorAll(".chart-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const action = btn.getAttribute("title");
      showNotification(`${action} action triggered`, "info");
    });
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

  setTimeout(() => notification.classList.add("show"), 10);
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 3000);
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
