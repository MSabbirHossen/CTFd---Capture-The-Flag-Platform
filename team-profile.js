// Team Profile Data
const teamData = {
  id: 1,
  name: "0xJaniNa",
  rank: "1st place",
  score: 1300,
  members: [
    {
      id: 1,
      name: "admin",
      role: "Leader",
      score: 1300,
      solves: 4,
      avatar: "👨‍💻",
      joinDate: "Dec 3, 2025",
    },
    {
      id: 2,
      name: "test1",
      role: "Captain",
      score: 0,
      solves: 0,
      avatar: "👩‍💻",
      joinDate: "Dec 5, 2025",
    },
  ],
  solves: [
    {
      id: 1,
      challenge: "Stage 2",
      category: "BICS77",
      points: 300,
      time: "December 7th, 9:42:18 PM",
      solver: "admin",
    },
    {
      id: 2,
      challenge: "Stage 1",
      category: "BICS77",
      points: 200,
      time: "December 7th, 9:38:42 PM",
      solver: "admin",
    },
    {
      id: 3,
      challenge: "BICS Bot",
      category: "AI",
      points: 500,
      time: "December 3rd, 10:40:49 PM",
      solver: "admin",
    },
    {
      id: 4,
      challenge: "Test Web",
      category: "Web",
      points: 300,
      time: "December 3rd, 10:24:06 PM",
      solver: "admin",
    },
  ],
  timeline: [
    {
      id: 1,
      type: "solve",
      title: "Solved Stage 2",
      description: "admin solved BICS77 challenge for 300 points",
      time: "December 7th, 9:42:18 PM",
      icon: "check-circle",
      color: "success",
    },
    {
      id: 2,
      type: "solve",
      title: "Solved Stage 1",
      description: "admin solved BICS77 challenge for 200 points",
      time: "December 7th, 9:38:42 PM",
      icon: "check-circle",
      color: "success",
    },
    {
      id: 3,
      type: "member",
      title: "New Member Joined",
      description: "test1 joined the team",
      time: "December 5th, 4:15:30 PM",
      icon: "user-plus",
      color: "info",
    },
    {
      id: 4,
      type: "team",
      title: "Team Created",
      description: "0xJaniNa team was created",
      time: "December 3rd, 10:00:00 PM",
      icon: "star",
      color: "primary",
    },
    {
      id: 5,
      type: "solve",
      title: "Solved BICS Bot",
      description: "admin solved AI challenge for 500 points",
      time: "December 3rd, 10:40:49 PM",
      icon: "check-circle",
      color: "success",
    },
    {
      id: 6,
      type: "solve",
      title: "Solved Test Web",
      description: "admin solved Web challenge for 300 points",
      time: "December 3rd, 10:24:06 PM",
      icon: "check-circle",
      color: "success",
    },
  ],
};

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  loadTeamData();
  setupEventListeners();
  initCharts();
  displayMembers();
  displaySolves();
  displayTimeline();
});

// Load Team Data
function loadTeamData() {
  document.getElementById("teamName").textContent = teamData.name;
  document.getElementById("teamRank").textContent = teamData.rank;
  document.getElementById("teamScore").textContent = teamData.score;
  document.getElementById("globalRank").textContent = "#1";
  document.getElementById("totalPoints").textContent = teamData.score;
  document.getElementById("solvedCount").textContent = teamData.solves.length;
  document.getElementById("failedCount").textContent = "2";
  document.getElementById("successRate").textContent = "66.67%";
  document.getElementById("memberCount").textContent = teamData.members.length;
  document.getElementById("createdDate").textContent = "Dec 3, 2025";
}

// Setup Event Listeners
function setupEventListeners() {
  // Tab switching
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.dataset.tab;
      switchTab(tabName);
    });
  });
}

// Switch Tab
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove active class from buttons
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName + "-tab").classList.add("active");

  // Add active class to button
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

  // Reinitialize charts if statistics tab is opened
  if (tabName === "statistics") {
    setTimeout(() => {
      reinitializeCharts();
    }, 100);
  }
}

// Display Members
function displayMembers() {
  const membersGrid = document.getElementById("membersGrid");
  membersGrid.innerHTML = teamData.members
    .map((member) => createMemberCard(member))
    .join("");
}

// Create Member Card
function createMemberCard(member) {
  return `
    <div class="member-card">
      <div class="member-avatar">${member.avatar}</div>
      <div class="member-info">
        <h3 class="member-name">${member.name}</h3>
        <span class="member-role">${member.role}</span>
      </div>
      <div class="member-stats">
        <div class="stat">
          <span class="stat-label">Score</span>
          <span class="stat-value">${member.score}</span>
        </div>
        <div class="stat">
          <span class="stat-label">Solves</span>
          <span class="stat-value">${member.solves}</span>
        </div>
      </div>
      <div class="member-actions">
        <button class="action-btn" title="View Profile">
          <i class="fas fa-external-link-alt"></i>
        </button>
        <button class="action-btn" title="Remove Member">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `;
}

// Display Solves
function displaySolves() {
  const tbody = document.getElementById("solvesTableBody");
  tbody.innerHTML = teamData.solves
    .map(
      (solve) => `
    <tr class="solve-row">
      <td class="challenge-name">
        <a href="challenges.html">${solve.challenge}</a>
      </td>
      <td>
        <span class="category-badge">${solve.category}</span>
      </td>
      <td>
        <span class="points-badge">${solve.points} pts</span>
      </td>
      <td class="solve-time">${solve.time}</td>
    </tr>
  `
    )
    .join("");
}

// Display Timeline
function displayTimeline() {
  const timeline = document.getElementById("timelineContainer");
  timeline.innerHTML = teamData.timeline
    .map((event) => createTimelineEvent(event))
    .join("");
}

// Create Timeline Event
function createTimelineEvent(event) {
  return `
    <div class="timeline-event">
      <div class="timeline-dot">
        <i class="fas fa-${event.icon} icon-${event.color}"></i>
      </div>
      <div class="timeline-content">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.description}</p>
        <span class="event-time">${event.time}</span>
      </div>
    </div>
  `;
}

// Chart Configuration
let charts = {};

function initCharts() {
  // Solve Percentages Chart
  const solveCtx = document.getElementById("solveChart");
  if (solveCtx) {
    charts.solve = new Chart(solveCtx, {
      type: "doughnut",
      data: {
        labels: ["Solves", "Fails"],
        datasets: [
          {
            data: [4, 2],
            backgroundColor: ["#10b981", "#ef4444"],
            borderColor: ["#ffffff", "#ffffff"],
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
              font: { size: 14, weight: 600 },
              padding: 15,
              usePointStyle: true,
            },
          },
        },
      },
    });
  }

  // Category Breakdown Chart
  const categoryCtx = document.getElementById("categoryChart");
  if (categoryCtx) {
    charts.category = new Chart(categoryCtx, {
      type: "doughnut",
      data: {
        labels: ["BICS77", "AI", "Web"],
        datasets: [
          {
            data: [50, 25, 25],
            backgroundColor: ["#f59e0b", "#8b5cf6", "#10b981"],
            borderColor: ["#ffffff", "#ffffff", "#ffffff"],
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
              font: { size: 14, weight: 600 },
              padding: 15,
              usePointStyle: true,
            },
          },
        },
      },
    });
  }

  // Score Over Time Chart
  const scoreTimeCtx = document.getElementById("scoreTimeChart");
  if (scoreTimeCtx) {
    charts.scoreTime = new Chart(scoreTimeCtx, {
      type: "line",
      data: {
        labels: [
          "Dec 03 2025",
          "Dec 04 2025",
          "Dec 05 2025",
          "Dec 06 2025",
          "Dec 07 2025",
        ],
        datasets: [
          {
            label: "0xJaniNa",
            data: [300, 600, 800, 1000, 1300],
            fill: true,
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderColor: "#10b981",
            borderWidth: 3,
            pointBackgroundColor: "#10b981",
            pointBorderColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        plugins: {
          legend: {
            labels: {
              font: { size: 14, weight: 600 },
              padding: 15,
              usePointStyle: true,
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function (value) {
                return value;
              },
              font: { size: 12 },
            },
            grid: {
              color: "rgba(0, 0, 0, 0.05)",
            },
          },
          x: {
            ticks: {
              font: { size: 12 },
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}

function reinitializeCharts() {
  Object.keys(charts).forEach((key) => {
    if (charts[key]) {
      charts[key].resize();
    }
  });
}

// Download Chart as Image (placeholder)
document.querySelectorAll(".download-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    alert("Chart download functionality would be implemented here");
  });
});
