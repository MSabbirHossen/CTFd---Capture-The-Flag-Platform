// ==================== SAMPLE SCOREBOARD DATA ====================
const scoreboardData = [
  {
    rank: 1,
    name: "OxJaniNa",
    score: 3200,
    challenges: 20,
    firstBlood: 5,
    lastSolve: "2 min ago",
    solveTime: [800, 1200, 1800, 2400, 3000, 3100, 3150, 3180, 3200],
    progress: 100,
    status: "active",
    affiliation: "University of Dhaka",
  },
  {
    rank: 2,
    name: "B Team",
    score: 3000,
    challenges: 19,
    firstBlood: 3,
    lastSolve: "5 min ago",
    solveTime: [750, 1150, 1700, 2300, 2900, 2950, 2980, 3000],
    progress: 95,
    status: "active",
    affiliation: "BUET",
  },
  {
    rank: 3,
    name: "Cyber Ninjas",
    score: 2800,
    challenges: 17,
    firstBlood: 2,
    lastSolve: "8 min ago",
    solveTime: [850, 1300, 1900, 2500, 2700, 2750, 2800],
    progress: 85,
    status: "active",
    affiliation: "Islamic University",
  },
  {
    rank: 4,
    name: "Security Squad",
    score: 2600,
    challenges: 16,
    firstBlood: 1,
    lastSolve: "12 min ago",
    solveTime: [900, 1400, 2000, 2300, 2600],
    progress: 80,
    status: "active",
    affiliation: "Daffodil University",
  },
  {
    rank: 5,
    name: "Code Warriors",
    score: 2400,
    challenges: 14,
    firstBlood: 0,
    lastSolve: "15 min ago",
    solveTime: [1000, 1500, 2100, 2400],
    progress: 70,
    status: "idle",
    affiliation: "Dhaka University",
  },
  {
    rank: 6,
    name: "Digital Defenders",
    score: 2200,
    challenges: 13,
    firstBlood: 1,
    lastSolve: "20 min ago",
    solveTime: [1100, 1600, 2200],
    progress: 65,
    status: "idle",
    affiliation: "AIUB",
  },
  {
    rank: 7,
    name: "Tech Titans",
    score: 2000,
    challenges: 12,
    firstBlood: 0,
    lastSolve: "25 min ago",
    solveTime: [1200, 1700, 2000],
    progress: 60,
    status: "idle",
    affiliation: "Rajshahi University",
  },
  {
    rank: 8,
    name: "Puzzle Solvers",
    score: 1800,
    challenges: 11,
    firstBlood: 0,
    lastSolve: "30 min ago",
    solveTime: [1300, 1800],
    progress: 55,
    status: "idle",
    affiliation: "Khulna University",
  },
  {
    rank: 9,
    name: "Flag Hunters",
    score: 1600,
    challenges: 10,
    firstBlood: 0,
    lastSolve: "35 min ago",
    solveTime: [1400, 1600],
    progress: 50,
    status: "idle",
    affiliation: "Sylhet University",
  },
  {
    rank: 10,
    name: "Elite Force",
    score: 1400,
    challenges: 8,
    firstBlood: 0,
    lastSolve: "45 min ago",
    solveTime: [1500],
    progress: 40,
    status: "idle",
    affiliation: "CUET",
  },
];

// Activity timeline data
const activityTimeline = [
  {
    type: "flagCapture",
    team: "OxJaniNa",
    challenge: "Web Security - SQL Injection",
    time: "Just now",
    points: 100,
  },
  {
    type: "firstBlood",
    team: "B Team",
    challenge: "Cryptography - AES Decryption",
    time: "2 min ago",
    points: 150,
  },
  {
    type: "flagCapture",
    team: "Cyber Ninjas",
    challenge: "Binary Exploitation - Buffer Overflow",
    time: "5 min ago",
    points: 200,
  },
  {
    type: "solves",
    team: "Security Squad",
    challenge: "Forensics - Memory Dump Analysis",
    time: "8 min ago",
    points: 150,
  },
  {
    type: "flagCapture",
    team: "Code Warriors",
    challenge: "Reversing - ELF Binary",
    time: "12 min ago",
    points: 100,
  },
  {
    type: "solves",
    team: "Digital Defenders",
    challenge: "Web Security - XSS Attack",
    time: "15 min ago",
    points: 75,
  },
  {
    type: "flagCapture",
    team: "Tech Titans",
    challenge: "Steganography - Hidden Message",
    time: "18 min ago",
    points: 125,
  },
  {
    type: "firstBlood",
    team: "Puzzle Solvers",
    challenge: "Miscellaneous - Puzzle Challenge",
    time: "22 min ago",
    points: 200,
  },
];

let currentChart = null;
let currentChallengeChart = null;

// ==================== INITIALIZE PAGE ====================
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");

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

  // Initialize scoreboard
  updatePodium();
  displayScoreboard();
  populateTimeline();
  updateStatistics();
  initializeCharts();

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      switchTab(this.dataset.tab);
    });
  });

  // View switching (Table vs Cards)
  document.getElementById("tableView").addEventListener("click", function () {
    switchView("table");
  });

  document.getElementById("cardView").addEventListener("click", function () {
    switchView("card");
  });

  // Filters
  document
    .getElementById("roundFilter")
    .addEventListener("change", filterScoreboard);
  document
    .getElementById("searchScoreboard")
    .addEventListener("keyup", filterScoreboard);

  // Live toggle
  document.getElementById("liveToggle").addEventListener("change", toggleLive);

  // Update scoreboard every 5 seconds if live is enabled
  setInterval(updateLiveScoreboard, 5000);
});

// ==================== PODIUM UPDATE ====================
function updatePodium() {
  const top3 = scoreboardData.slice(0, 3);

  for (let i = 0; i < top3.length; i++) {
    const data = top3[i];
    const position = i + 1;
    document.getElementById(`podium${position}Name`).textContent = data.name;
    document.getElementById(`podium${position}Score`).textContent =
      data.score + " pts";
  }
}

// ==================== DISPLAY SCOREBOARD ====================
function displayScoreboard() {
  displayTableView();
}

function displayTableView() {
  const tableBody = document.getElementById("scoreboardTableBody");
  tableBody.innerHTML = "";

  scoreboardData.forEach((team) => {
    const row = document.createElement("tr");
    row.classList.add("scoreboard-row");
    if (team.status === "active") row.classList.add("active");

    const progressBarWidth = team.progress;

    row.innerHTML = `
      <td class="rank-col">
        <div class="rank-badge rank-${team.rank}">
          ${team.rank <= 3 ? '<i class="fas fa-medal"></i>' : ""} #${team.rank}
        </div>
      </td>
      <td class="team-col">
        <div class="team-name-badge">
          <span class="team-avatar">${team.name.charAt(0)}</span>
          <div class="team-details">
            <span class="team-name">${team.name}</span>
            <span class="team-affiliation">${team.affiliation}</span>
          </div>
        </div>
      </td>
      <td class="score-col">
        <span class="score-value">${team.score}</span>
        <span class="score-unit">pts</span>
      </td>
      <td class="challenges-col">
        <span class="challenge-count">${team.challenges}</span>
        <span class="first-blood" ${
          team.firstBlood > 0 ? "" : 'style="display:none"'
        }>
          <i class="fas fa-droplet"></i> ${team.firstBlood}
        </span>
      </td>
      <td class="progress-col">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressBarWidth}%"></div>
        </div>
        <span class="progress-text">${progressBarWidth}%</span>
      </td>
      <td class="status-col">
        <span class="status-badge status-${team.status}">
          <span class="status-dot"></span>
          ${team.status === "active" ? "Active" : "Idle"}
        </span>
      </td>
      <td class="time-col">
        <span class="last-solve">${team.lastSolve}</span>
      </td>
    `;
    tableBody.appendChild(row);
  });

  displayCardView();
}

function displayCardView() {
  const cardsContainer = document.getElementById("scoreboardCardsContainer");
  cardsContainer.innerHTML = "";

  scoreboardData.forEach((team) => {
    const card = document.createElement("div");
    card.classList.add("ranking-card");
    if (team.status === "active") card.classList.add("active");

    card.innerHTML = `
      <div class="card-header">
        <div class="card-rank rank-${team.rank}">
          #${team.rank}
          ${team.rank <= 3 ? '<i class="fas fa-medal"></i>' : ""}
        </div>
        <span class="card-status status-${team.status}">
          <span class="status-dot"></span>
        </span>
      </div>
      <div class="card-body">
        <div class="card-team-info">
          <span class="card-team-avatar">${team.name.charAt(0)}</span>
          <div class="card-team-details">
            <h3 class="card-team-name">${team.name}</h3>
            <p class="card-affiliation">${team.affiliation}</p>
          </div>
        </div>
        <div class="card-stats">
          <div class="card-stat">
            <span class="card-stat-label">Score</span>
            <span class="card-stat-value">${team.score}</span>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">Challenges</span>
            <span class="card-stat-value">${team.challenges}</span>
          </div>
          <div class="card-stat">
            <span class="card-stat-label">Last Solve</span>
            <span class="card-stat-value">${team.lastSolve}</span>
          </div>
        </div>
        <div class="card-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${team.progress}%"></div>
          </div>
          <span class="progress-percentage">${team.progress}%</span>
        </div>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
  // Update button active state
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.closest(".tab-btn").classList.add("active");

  // Update tab content visibility
  document.querySelectorAll(".tab-content").forEach((content) => {
    content.classList.remove("active");
  });
  document.getElementById(tabName + "-tab").classList.add("active");

  // Initialize charts if switching to chart tab
  if (tabName === "chart") {
    setTimeout(() => {
      initializeCharts();
    }, 100);
  }
}

// ==================== VIEW SWITCHING ====================
function switchView(viewType) {
  document.querySelectorAll(".view-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (viewType === "table") {
    document.getElementById("tableView").classList.add("active");
    document.getElementById("table-view").classList.add("active");
    document.getElementById("card-view").classList.remove("active");
  } else {
    document.getElementById("cardView").classList.add("active");
    document.getElementById("card-view").classList.add("active");
    document.getElementById("table-view").classList.remove("active");
  }
}

// ==================== FILTER SCOREBOARD ====================
function filterScoreboard() {
  const searchTerm = document
    .getElementById("searchScoreboard")
    .value.toLowerCase();
  const round = document.getElementById("roundFilter").value;

  const filtered = scoreboardData.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(searchTerm) ||
      team.affiliation.toLowerCase().includes(searchTerm);

    // In a real app, you'd filter by round here
    return matchesSearch;
  });

  // Update table
  const tableBody = document.getElementById("scoreboardTableBody");
  tableBody.innerHTML = "";

  filtered.forEach((team) => {
    const row = document.createElement("tr");
    row.classList.add("scoreboard-row");
    if (team.status === "active") row.classList.add("active");

    row.innerHTML = `
      <td class="rank-col">
        <div class="rank-badge rank-${team.rank}">
          ${team.rank <= 3 ? '<i class="fas fa-medal"></i>' : ""} #${team.rank}
        </div>
      </td>
      <td class="team-col">
        <div class="team-name-badge">
          <span class="team-avatar">${team.name.charAt(0)}</span>
          <div class="team-details">
            <span class="team-name">${team.name}</span>
            <span class="team-affiliation">${team.affiliation}</span>
          </div>
        </div>
      </td>
      <td class="score-col">
        <span class="score-value">${team.score}</span>
        <span class="score-unit">pts</span>
      </td>
      <td class="challenges-col">
        <span class="challenge-count">${team.challenges}</span>
      </td>
      <td class="progress-col">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${team.progress}%"></div>
        </div>
        <span class="progress-text">${team.progress}%</span>
      </td>
      <td class="status-col">
        <span class="status-badge status-${team.status}">
          <span class="status-dot"></span>
          ${team.status === "active" ? "Active" : "Idle"}
        </span>
      </td>
      <td class="time-col">
        <span class="last-solve">${team.lastSolve}</span>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// ==================== TIMELINE ====================
function populateTimeline() {
  const timeline = document.getElementById("activityTimeline");
  timeline.innerHTML = "";

  activityTimeline.forEach((activity, index) => {
    const item = document.createElement("div");
    item.classList.add("timeline-item");
    item.classList.add("activity-" + activity.type);

    let icon = '<i class="fas fa-flag"></i>';
    let label = "Flag Captured";

    if (activity.type === "firstBlood") {
      icon = '<i class="fas fa-droplet"></i>';
      label = "First Blood";
    } else if (activity.type === "solves") {
      icon = '<i class="fas fa-check-circle"></i>';
      label = "Challenge Solved";
    }

    item.innerHTML = `
      <div class="timeline-marker">
        ${icon}
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <span class="event-type">${label}</span>
          <span class="event-points">+${activity.points} pts</span>
        </div>
        <p class="event-team">${activity.team}</p>
        <p class="event-challenge">${activity.challenge}</p>
        <span class="event-time">${activity.time}</span>
      </div>
    `;
    timeline.appendChild(item);
  });
}

// ==================== STATISTICS ====================
function updateStatistics() {
  const totalSolves = scoreboardData.reduce(
    (sum, team) => sum + team.challenges,
    0
  );
  const avgScore =
    Math.round(
      scoreboardData.reduce((sum, team) => sum + team.score, 0) /
        scoreboardData.length
    ) || 0;
  const highestScore = Math.max(...scoreboardData.map((t) => t.score));
  const activeTeams = scoreboardData.filter(
    (t) => t.status === "active"
  ).length;

  document.getElementById("totalSolves").textContent = totalSolves;
  document.getElementById("avgTeamScore").textContent = avgScore;
  document.getElementById("highestScore").textContent = highestScore;
  document.getElementById("activeTeamsCount").textContent = activeTeams;
  document.getElementById("mostSolvedChallenge").textContent = highestScore;
}

// ==================== CHARTS ====================
function initializeCharts() {
  // Score Progression Chart
  const scoreChartCanvas = document.getElementById("scoreChart");
  if (scoreChartCanvas && !currentChart) {
    const top10Teams = scoreboardData.slice(0, 10);
    const teamNames = top10Teams.map((t) => t.name);
    const teamScores = top10Teams.map((t) => t.score);

    // Create gradient colors
    const ctx = scoreChartCanvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(37, 99, 235, 0.8)");
    gradient.addColorStop(1, "rgba(37, 99, 235, 0.1)");

    currentChart = new Chart(scoreChartCanvas, {
      type: "line",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Team Score",
            data: teamScores,
            borderColor: "#2563eb",
            backgroundColor: gradient,
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: "#2563eb",
            pointBorderColor: "#1e40af",
            pointRadius: 6,
            pointHoverRadius: 8,
            pointBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 3500,
            ticks: {
              color: "#6b7280",
            },
            grid: {
              color: "#e5e7eb",
            },
          },
          x: {
            ticks: {
              color: "#6b7280",
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  // Challenge Distribution Chart
  const challengeChartCanvas = document.getElementById("challengeChart");
  if (challengeChartCanvas && !currentChallengeChart) {
    const top10Teams = scoreboardData.slice(0, 10);
    const teamNames = top10Teams.map((t) => t.name);
    const challengeCounts = top10Teams.map((t) => t.challenges);

    currentChallengeChart = new Chart(challengeChartCanvas, {
      type: "bar",
      data: {
        labels: teamNames,
        datasets: [
          {
            label: "Challenges Solved",
            data: challengeCounts,
            backgroundColor: [
              "#2563eb",
              "#1e40af",
              "#2563eb",
              "#1e40af",
              "#2563eb",
              "#1e40af",
              "#2563eb",
              "#1e40af",
              "#2563eb",
              "#1e40af",
            ],
            borderRadius: 8,
            borderSkipped: false,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 25,
            ticks: {
              color: "#6b7280",
            },
            grid: {
              color: "#e5e7eb",
            },
          },
          y: {
            ticks: {
              color: "#6b7280",
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

// ==================== LIVE UPDATES ====================
function toggleLive() {
  const isLive = document.getElementById("liveToggle").checked;
  const indicator = document.getElementById("liveIndicator");

  if (isLive) {
    indicator.classList.add("visible");
  } else {
    indicator.classList.remove("visible");
  }
}

function updateLiveScoreboard() {
  const isLive = document.getElementById("liveToggle").checked;
  if (!isLive) return;

  // Simulate score changes
  scoreboardData.forEach((team) => {
    if (Math.random() > 0.7) {
      team.score += Math.floor(Math.random() * 50);
      team.lastSolve = "Just now";
      team.challenges += 1;
      team.progress = Math.min(100, team.progress + Math.random() * 5);
    }
  });

  // Re-sort by score
  scoreboardData.sort((a, b) => b.score - a.score);

  // Update ranks
  scoreboardData.forEach((team, index) => {
    team.rank = index + 1;
  });

  // Update display
  updatePodium();
  displayScoreboard();
  updateStatistics();
}

// ==================== ANIMATIONS ====================
window.addEventListener("load", function () {
  // Animate stat boxes
  document.querySelectorAll(".stat-box-value").forEach((el, index) => {
    const finalValue = parseInt(el.textContent);
    let current = 0;
    const increment = Math.ceil(finalValue / 30);

    const counter = setInterval(() => {
      current += increment;
      if (current >= finalValue) {
        el.textContent = finalValue;
        clearInterval(counter);
      } else {
        el.textContent = current;
      }
    }, 30);
  });
});
