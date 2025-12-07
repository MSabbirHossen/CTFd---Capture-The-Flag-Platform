// ==================== SAMPLE DATA ====================
const sampleUsers = [
  {
    rank: 1,
    name: "test1",
    score: 2500,
    challenges: 18,
    affiliation: "University of Dhaka",
    country: "Bangladesh",
  },
  {
    rank: 2,
    name: "user1",
    score: 2300,
    challenges: 16,
    affiliation: "BUET",
    country: "Bangladesh",
  },
  {
    rank: 3,
    name: "hacker_pro",
    score: 2100,
    challenges: 15,
    affiliation: "Islamic University",
    country: "Bangladesh",
  },
  {
    rank: 4,
    name: "cyber_ninja",
    score: 1950,
    challenges: 14,
    affiliation: "Daffodil University",
    country: "Bangladesh",
  },
  {
    rank: 5,
    name: "security_expert",
    score: 1850,
    challenges: 13,
    affiliation: "Dhaka University",
    country: "Bangladesh",
  },
  {
    rank: 6,
    name: "code_breaker",
    score: 1750,
    challenges: 12,
    affiliation: "AIUB",
    country: "Bangladesh",
  },
  {
    rank: 7,
    name: "digital_guardian",
    score: 1650,
    challenges: 11,
    affiliation: "Rajshahi University",
    country: "Bangladesh",
  },
  {
    rank: 8,
    name: "tech_wizard",
    score: 1550,
    challenges: 10,
    affiliation: "Khulna University",
    country: "Bangladesh",
  },
  {
    rank: 9,
    name: "puzzle_master",
    score: 1450,
    challenges: 9,
    affiliation: "Sylhet University",
    country: "Bangladesh",
  },
  {
    rank: 10,
    name: "challenge_hunter",
    score: 1350,
    challenges: 8,
    affiliation: "CUET",
    country: "Bangladesh",
  },
];

let currentPage = 1;
const itemsPerPage = 5;
let displayedUsers = [...sampleUsers];

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

  // Initialize users table
  updateStatistics();
  displayUsers();
  updateTopPerformers();

  // Event listeners
  document.getElementById("searchBtn").addEventListener("click", searchUsers);
  document
    .getElementById("searchUsers")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") searchUsers();
    });
  document.getElementById("sortBy").addEventListener("change", sortUsers);
  document.getElementById("prevBtn").addEventListener("click", previousPage);
  document.getElementById("nextBtn").addEventListener("click", nextPage);
});

// ==================== DISPLAY USERS ====================
function displayUsers() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageUsers = displayedUsers.slice(startIndex, endIndex);

  const tableBody = document.getElementById("usersTableBody");
  tableBody.innerHTML = "";

  pageUsers.forEach((user) => {
    const row = document.createElement("tr");
    row.classList.add("user-row");
    row.innerHTML = `
      <td class="rank-cell">#${user.rank}</td>
      <td class="user-cell">
        <div class="user-info">
          <div class="user-avatar">${user.name.charAt(0).toUpperCase()}</div>
          <a href="#" class="user-name">${user.name}</a>
        </div>
      </td>
      <td class="score-cell">
        <span class="score-badge">${user.score}</span>
      </td>
      <td class="challenges-cell">${user.challenges} solved</td>
      <td class="affiliation-cell">${user.affiliation}</td>
      <td class="country-cell">
        <i class="fas fa-map-marker-alt"></i> ${user.country}
      </td>
      <td class="action-cell">
        <button class="view-btn" onclick="viewUserProfile('${user.name}')">
          <i class="fas fa-eye"></i> View
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  updatePaginationInfo();
}

// ==================== SEARCH USERS ====================
function searchUsers() {
  const searchTerm = document.getElementById("searchUsers").value.toLowerCase();

  if (searchTerm === "") {
    displayedUsers = [...sampleUsers];
  } else {
    displayedUsers = sampleUsers.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.affiliation.toLowerCase().includes(searchTerm) ||
        user.country.toLowerCase().includes(searchTerm)
    );
  }

  currentPage = 1;
  displayUsers();
}

// ==================== SORT USERS ====================
function sortUsers() {
  const sortBy = document.getElementById("sortBy").value;

  switch (sortBy) {
    case "name":
      displayedUsers.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "score":
      displayedUsers.sort((a, b) => b.score - a.score);
      break;
    case "rank":
      displayedUsers.sort((a, b) => a.rank - b.rank);
      break;
    case "recent":
      displayedUsers.sort((a, b) => b.rank - a.rank);
      break;
  }

  currentPage = 1;
  displayUsers();
}

// ==================== PAGINATION ====================
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayUsers();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function nextPage() {
  const totalPages = Math.ceil(displayedUsers.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayUsers();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function updatePaginationInfo() {
  const totalPages = Math.ceil(displayedUsers.length / itemsPerPage);
  document.getElementById("pageNumber").textContent = currentPage;
  document.getElementById("totalPages").textContent = totalPages;

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

// ==================== UPDATE STATISTICS ====================
function updateStatistics() {
  const totalUsers = sampleUsers.length;
  const activeUsers = sampleUsers.filter((u) => u.challenges >= 8).length;
  const avgScore = Math.round(
    sampleUsers.reduce((sum, u) => sum + u.score, 0) / totalUsers
  );
  const countries = new Set(sampleUsers.map((u) => u.country)).size;

  document.getElementById("totalUsers").textContent = totalUsers;
  document.getElementById("activeUsers").textContent = activeUsers;
  document.getElementById("avgScore").textContent = avgScore;
  document.getElementById("totalCountries").textContent = countries;
}

// ==================== UPDATE TOP PERFORMERS ====================
function updateTopPerformers() {
  const topThree = sampleUsers.slice(0, 3);

  for (let i = 0; i < topThree.length; i++) {
    const user = topThree[i];
    document.getElementById(`top${i + 1}Name`).textContent = user.name;
    document.getElementById(
      `top${i + 1}Score`
    ).textContent = `${user.score} points`;
    document.getElementById(`top${i + 1}Affiliation`).textContent =
      user.affiliation;
  }
}

// ==================== VIEW USER PROFILE ====================
function viewUserProfile(username) {
  alert(`Viewing profile for: ${username}`);
  // In a real application, this would navigate to the user's profile page
}

// ==================== COUNTER ANIMATION ====================
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
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
    const target = parseInt(el.textContent);
    if (!isNaN(target)) {
      el.textContent = "0";
      animateCounter(el, target);
    }
  });
});
