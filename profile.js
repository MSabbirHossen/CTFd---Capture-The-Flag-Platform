// Sample user data
const currentUser = {
  id: 1,
  username: "admin",
  email: "admin@ctf.com",
  avatar: "https://via.placeholder.com/120",
  score: 1300,
  rank: 1,
  rankPosition: "1st place",
  joinDate: "November 15, 2025",
  lastActivity: "December 7, 2025",
  timezone: "GMT+03:00 (Arabia Standard Time)",
  solves: 4,
  fails: 2,
  successRate: 66.67,
};

// Sample solves data
const userSolves = [
  {
    id: 1,
    name: "Stage 2",
    category: "BICS77",
    value: 300,
    time: "December 7th, 9:42:18 PM",
  },
  {
    id: 2,
    name: "Stage 1",
    category: "BICS77",
    value: 200,
    time: "December 7th, 9:38:42 PM",
  },
  {
    id: 3,
    name: "BICS Bot",
    category: "AI",
    value: 500,
    time: "December 3rd, 10:40:49 PM",
  },
  {
    id: 4,
    name: "Hidden Message",
    category: "Steganography",
    value: 300,
    time: "December 2nd, 3:15:22 PM",
  },
];

// Sample score progression data
const scoreProgression = [
  { date: "Dec 3", score: 300 },
  { date: "Dec 3", score: 500 },
  { date: "Dec 4", score: 650 },
  { date: "Dec 5", score: 900 },
  { date: "Dec 6", score: 1000 },
  { date: "Dec 7", score: 1300 },
];

// Initialize page on load
document.addEventListener("DOMContentLoaded", () => {
  loadProfileData();
  populateSolvesTable();
  initializeCharts();
});

// Load and display profile data
function loadProfileData() {
  document.getElementById("username").textContent = currentUser.username;
  document.getElementById("userScore").textContent = currentUser.score;
  document.getElementById("userRank").textContent = currentUser.rankPosition;
  document.getElementById("sidebarRank").textContent = `#${currentUser.rank}`;
  document.getElementById("sidebarScore").textContent = currentUser.score;
  document.getElementById("solveCount").textContent = currentUser.solves;
  document.getElementById("failCount").textContent = currentUser.fails;
  document.getElementById("successRate").textContent =
    currentUser.successRate.toFixed(2) + "%";
  document.getElementById("userEmail").textContent = currentUser.email;
  document.getElementById("joinDate").textContent = currentUser.joinDate;
  document.getElementById("lastActivity").textContent =
    currentUser.lastActivity;
  document.getElementById("timezone").textContent = currentUser.timezone;
}

// Populate solves table
function populateSolvesTable() {
  const tbody = document.getElementById("solvesTableBody");
  tbody.innerHTML = "";

  userSolves.forEach((solve) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><a href="challenges.html" class="challenge-link">${solve.name}</a></td>
      <td><span class="category-badge">${solve.category}</span></td>
      <td><span class="points-value">+${solve.value}</span></td>
      <td>${solve.time}</td>
    `;
    tbody.appendChild(row);
  });
}

// Initialize all charts
function initializeCharts() {
  initSolveChart();
  initCategoryChart();
  initScoreChart();
}

// Solve Percentages Chart
function initSolveChart() {
  const ctx = document.getElementById("solveChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Solves", "Fails"],
      datasets: [
        {
          data: [currentUser.solves, currentUser.fails],
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
          position: "right",
          labels: {
            padding: 15,
            font: {
              size: 14,
              weight: "500",
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed;
              const total = currentUser.solves + currentUser.fails;
              const percentage = ((value / total) * 100).toFixed(2);
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Category Breakdown Chart
function initCategoryChart() {
  const ctx = document.getElementById("categoryChart").getContext("2d");
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["BICS77", "AI", "Steganography"],
      datasets: [
        {
          data: [2, 1, 1],
          backgroundColor: ["#f59e0b", "#a855f7", "#22c55e"],
          borderColor: ["#d97706", "#9333ea", "#16a34a"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "right",
          labels: {
            padding: 15,
            font: {
              size: 14,
              weight: "500",
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed;
              const total = 4;
              const percentage = ((value / total) * 100).toFixed(2);
              return `${label}: ${value} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Score Over Time Chart
function initScoreChart() {
  const ctx = document.getElementById("scoreChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: scoreProgression.map((d) => d.date),
      datasets: [
        {
          label: currentUser.username,
          data: scoreProgression.map((d) => d.score),
          borderColor: "#2563eb",
          backgroundColor: "rgba(37, 99, 235, 0.1)",
          tension: 0.4,
          fill: true,
          pointRadius: 6,
          pointBackgroundColor: "#2563eb",
          pointBorderColor: "#1e40af",
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          borderWidth: 3,
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
            padding: 20,
            font: {
              size: 14,
              weight: "500",
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          padding: 12,
          titleFont: {
            size: 14,
            weight: "bold",
          },
          bodyFont: {
            size: 13,
          },
          callbacks: {
            label: function (context) {
              return `Score: ${context.parsed.y}`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 1600,
          ticks: {
            stepSize: 300,
            font: {
              size: 12,
            },
          },
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            font: {
              size: 12,
            },
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    },
  });
}

// Handle edit profile button
document.querySelectorAll(".btn-primary").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Edit profile functionality would open a modal form here");
  });
});

// Handle change password button
document.querySelectorAll(".btn-secondary").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Change password functionality would open a modal form here");
  });
});
