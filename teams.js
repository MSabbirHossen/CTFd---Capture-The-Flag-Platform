// ==================== SAMPLE DATA ====================
const sampleTeams = [
  {
    rank: 1,
    name: "OxJaniNa",
    score: 3200,
    members: 4,
    challenges: 20,
    affiliation: "University of Dhaka",
    country: "Bangladesh",
    memberNames: ["Ahmed", "Fatima", "Hassan", "Zara"],
  },
  {
    rank: 2,
    name: "B Team",
    score: 3000,
    members: 3,
    challenges: 19,
    affiliation: "BUET",
    country: "Bangladesh",
    memberNames: ["Ravi", "Priya", "Amit"],
  },
  {
    rank: 3,
    name: "Cyber Ninjas",
    score: 2800,
    members: 4,
    challenges: 17,
    affiliation: "Islamic University",
    country: "Bangladesh",
    memberNames: ["Karim", "Shahin", "Nadia", "Sohel"],
  },
  {
    rank: 4,
    name: "Security Squad",
    score: 2600,
    members: 3,
    challenges: 16,
    affiliation: "Daffodil University",
    country: "Bangladesh",
    memberNames: ["Bilal", "Safia", "Imran"],
  },
  {
    rank: 5,
    name: "Code Warriors",
    score: 2400,
    members: 2,
    challenges: 14,
    affiliation: "Dhaka University",
    country: "Bangladesh",
    memberNames: ["Ruhan", "Saria"],
  },
  {
    rank: 6,
    name: "Digital Defenders",
    score: 2200,
    members: 4,
    challenges: 13,
    affiliation: "AIUB",
    country: "Bangladesh",
    memberNames: ["Nasir", "Aisha", "Rashid", "Leila"],
  },
  {
    rank: 7,
    name: "Tech Titans",
    score: 2000,
    members: 3,
    challenges: 12,
    affiliation: "Rajshahi University",
    country: "Bangladesh",
    memberNames: ["Arif", "Neha", "Vikram"],
  },
  {
    rank: 8,
    name: "Puzzle Solvers",
    score: 1800,
    members: 2,
    challenges: 11,
    affiliation: "Khulna University",
    country: "Bangladesh",
    memberNames: ["Jamal", "Sara"],
  },
  {
    rank: 9,
    name: "Flag Hunters",
    score: 1600,
    members: 4,
    challenges: 10,
    affiliation: "Sylhet University",
    country: "Bangladesh",
    memberNames: ["Rahim", "Noor", "Hasan", "Mona"],
  },
  {
    rank: 10,
    name: "Elite Force",
    score: 1400,
    members: 1,
    challenges: 8,
    affiliation: "CUET",
    country: "Bangladesh",
    memberNames: ["Salman"],
  },
];

let currentPage = 1;
const itemsPerPage = 5;
let displayedTeams = [...sampleTeams];

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

  // Initialize teams table
  updateStatistics();
  displayTeams();
  updateTopTeams();
  updateDistribution();

  // Event listeners
  document.getElementById("searchBtn").addEventListener("click", searchTeams);
  document
    .getElementById("searchTeams")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") searchTeams();
    });
  document.getElementById("sortBy").addEventListener("change", sortTeams);
  document.getElementById("prevBtn").addEventListener("click", previousPage);
  document.getElementById("nextBtn").addEventListener("click", nextPage);
});

// ==================== DISPLAY TEAMS ====================
function displayTeams() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageTeams = displayedTeams.slice(startIndex, endIndex);

  const tableBody = document.getElementById("teamsTableBody");
  tableBody.innerHTML = "";

  pageTeams.forEach((team) => {
    const row = document.createElement("tr");
    row.classList.add("team-row");
    row.innerHTML = `
      <td class="rank-cell">#${team.rank}</td>
      <td class="team-cell">
        <div class="team-info">
          <div class="team-avatar">${team.name.charAt(0).toUpperCase()}</div>
          <a href="#" class="team-name">${team.name}</a>
        </div>
      </td>
      <td class="score-cell">
        <span class="score-badge">${team.score}</span>
      </td>
      <td class="members-cell">
        <span class="members-badge">${team.members}</span>
      </td>
      <td class="challenges-cell">${team.challenges} solved</td>
      <td class="affiliation-cell">${team.affiliation}</td>
      <td class="country-cell">
        <i class="fas fa-map-marker-alt"></i> ${team.country}
      </td>
      <td class="action-cell">
        <button class="view-btn" onclick="viewTeamProfile('${team.name}')">
          <i class="fas fa-eye"></i> View
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

// ==================== SEARCH TEAMS ====================
function searchTeams() {
  const searchTerm = document.getElementById("searchTeams").value.toLowerCase();

  if (searchTerm === "") {
    displayedTeams = [...sampleTeams];
  } else {
    displayedTeams = sampleTeams.filter(
      (team) =>
        team.name.toLowerCase().includes(searchTerm) ||
        team.affiliation.toLowerCase().includes(searchTerm) ||
        team.country.toLowerCase().includes(searchTerm)
    );
  }

  currentPage = 1;
  displayTeams();
}

// ==================== SORT TEAMS ====================
function sortTeams() {
  const sortBy = document.getElementById("sortBy").value;

  switch (sortBy) {
    case "name":
      displayedTeams.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "score":
      displayedTeams.sort((a, b) => b.score - a.score);
      break;
    case "rank":
      displayedTeams.sort((a, b) => a.rank - b.rank);
      break;
    case "members":
      displayedTeams.sort((a, b) => b.members - a.members);
      break;
  }

  currentPage = 1;
  displayTeams();
}

// ==================== PAGINATION ====================
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayTeams();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function nextPage() {
  const totalPages = Math.ceil(displayedTeams.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayTeams();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updatePaginationInfo() {
  const totalPages = Math.ceil(displayedTeams.length / itemsPerPage);
  document.getElementById("pageNumber").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

// ==================== UPDATE STATISTICS ====================
function updateStatistics() {
  const totalTeams = sampleTeams.length;
  const activeTeams = sampleTeams.filter((t) => t.challenges >= 10).length;
  const avgScore = Math.round(
    sampleTeams.reduce((sum, t) => sum + t.score, 0) / totalTeams
  );
  const avgMembers = (
    sampleTeams.reduce((sum, t) => sum + t.members, 0) / totalTeams
  ).toFixed(1);

  document.getElementById("totalTeams").textContent = totalTeams;
  document.getElementById("activeTeams").textContent = activeTeams;
  document.getElementById("avgScore").textContent = avgScore;
  document.getElementById("avgMembers").textContent = avgMembers;
}

// ==================== UPDATE TOP TEAMS ====================
function updateTopTeams() {
  const topThree = sampleTeams.slice(0, 3);

  for (let i = 0; i < topThree.length; i++) {
    const team = topThree[i];
    document.getElementById(`top${i + 1}Name`).textContent = team.name;
    document.getElementById(
      `top${i + 1}Members`
    ).textContent = `${team.members} members`;
    document.getElementById(
      `top${i + 1}Score`
    ).textContent = `${team.score} points`;
    document.getElementById(`top${i + 1}Affiliation`).textContent =
      team.affiliation;
  }
}

// ==================== UPDATE DISTRIBUTION ====================
function updateDistribution() {
  const solo = sampleTeams.filter((t) => t.members === 1).length;
  const duo = sampleTeams.filter((t) => t.members === 2).length;
  const trio = sampleTeams.filter((t) => t.members === 3).length;
  const full = sampleTeams.filter((t) => t.members === 4).length;

  document.getElementById("soloTeams").textContent = solo;
  document.getElementById("duoTeams").textContent = duo;
  document.getElementById("trioTeams").textContent = trio;
  document.getElementById("fullTeams").textContent = full;
}

// ==================== VIEW TEAM PROFILE ====================
function viewTeamProfile(teamName) {
  alert(`Viewing profile for team: ${teamName}`);
  // In a real application, this would navigate to the team's profile page
}

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent =
        typeof target === "string" ? target : Math.floor(target);
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Animate stat numbers on page load
window.addEventListener("load", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  statNumbers.forEach((el) => {
    const text = el.textContent;
    const target = parseFloat(text);
    if (!isNaN(target)) {
      el.textContent = "0";
      animateCounter(el, target);
    }
  });

  const distributionNumbers = document.querySelectorAll(".distribution-number");
  distributionNumbers.forEach((el) => {
    const target = parseInt(el.textContent);
    if (!isNaN(target)) {
      el.textContent = "0";
      animateCounter(el, target);
    }
  });
});
