// Challenge Data
const challenges = [
  // Cryptography Challenges
  {
    id: 1,
    name: "Caesar Cipher",
    category: "crypto",
    difficulty: "easy",
    points: 50,
    solves: 120,
    solved: true,
    attempted: false,
    description:
      "A simple Caesar cipher challenge. Decode the message encrypted with a shift of 3.",
    hints: [
      "Try different shift values",
      "Common English words might help identify the shift",
    ],
    files: [],
  },
  {
    id: 2,
    name: "RSA Basics",
    category: "crypto",
    difficulty: "medium",
    points: 150,
    solves: 85,
    solved: true,
    attempted: true,
    description:
      "Understand RSA encryption. Given p, q, and e, find the private key.",
    hints: ["Calculate phi(n)", "Use extended Euclidean algorithm for d"],
    files: ["rsa_data.txt"],
  },
  {
    id: 3,
    name: "Hash Collision",
    category: "crypto",
    difficulty: "hard",
    points: 300,
    solves: 25,
    solved: false,
    attempted: true,
    description: "Find two different inputs that produce the same MD5 hash.",
    hints: ["Known collision attacks exist for MD5"],
    files: ["hash_utils.py"],
  },
  {
    id: 4,
    name: "XOR Operation",
    category: "crypto",
    difficulty: "easy",
    points: 75,
    solves: 145,
    solved: false,
    attempted: false,
    description:
      "Understand XOR operations. Decrypt the XOR encrypted message.",
    hints: ["XOR is its own inverse", "Try brute force for small key spaces"],
    files: [],
  },
  {
    id: 5,
    name: "Vigenère Cipher",
    category: "crypto",
    difficulty: "medium",
    points: 200,
    solves: 60,
    solved: false,
    attempted: false,
    description:
      "Crack a Vigenère cipher using frequency analysis and known plaintext attacks.",
    hints: ["Calculate index of coincidence", "Try Kasiski examination"],
    files: ["ciphertext.txt"],
  },
  {
    id: 6,
    name: "Elliptic Curve Cryptography",
    category: "crypto",
    difficulty: "insane",
    points: 500,
    solves: 8,
    solved: false,
    attempted: false,
    description:
      "Implement ECDLP attack on weak ECC parameters. Advanced cryptography challenge.",
    hints: [
      "Review Pohlig-Hellman algorithm",
      "Check for weak curve parameters",
    ],
    files: ["ecc_params.py"],
  },

  // OSINT Challenges
  {
    id: 7,
    name: "Google Dorking 101",
    category: "osint",
    difficulty: "easy",
    points: 100,
    solves: 95,
    solved: true,
    attempted: false,
    description:
      "Use advanced Google search operators to find hidden information.",
    hints: ["Use site: operator", "Try filetype: for specific document types"],
    files: [],
  },
  {
    id: 8,
    name: "Metadata Extraction",
    category: "osint",
    difficulty: "medium",
    points: 175,
    solves: 50,
    solved: false,
    attempted: true,
    description: "Extract metadata from images to find hidden information.",
    hints: ["Use exiftool", "Check GPS coordinates"],
    files: ["image.jpg"],
  },
  {
    id: 9,
    name: "Social Media Investigation",
    category: "osint",
    difficulty: "hard",
    points: 250,
    solves: 20,
    solved: false,
    attempted: false,
    description: "Track a user across multiple social media platforms.",
    hints: ["Look for username patterns", "Check archived versions"],
    files: [],
  },
  {
    id: 10,
    name: "Domain Enumeration",
    category: "osint",
    difficulty: "medium",
    points: 150,
    solves: 70,
    solved: false,
    attempted: false,
    description:
      "Find subdomains and gather information about a target domain.",
    hints: ["Use DNS enumeration tools", "Check certificate transparency logs"],
    files: [],
  },

  // Steganography Challenges
  {
    id: 11,
    name: "Hidden in Plain Sight",
    category: "steganography",
    difficulty: "easy",
    points: 125,
    solves: 110,
    solved: true,
    attempted: false,
    description: "Find hidden text in an image using basic steganography.",
    hints: ["Check LSB of pixels", "Use StegSolve tool"],
    files: ["secret_image.png"],
  },
  {
    id: 12,
    name: "Audio Steganography",
    category: "steganography",
    difficulty: "medium",
    points: 225,
    solves: 35,
    solved: false,
    attempted: false,
    description: "Extract hidden data embedded in an audio file.",
    hints: ["Check for unusual frequency patterns", "Try spectral analysis"],
    files: ["mysterious.wav"],
  },
  {
    id: 13,
    name: "Polyglot Files",
    category: "steganography",
    difficulty: "hard",
    points: 275,
    solves: 18,
    solved: false,
    attempted: false,
    description: "Analyze polyglot files that are valid in multiple formats.",
    hints: ["Files can be both images and archives", "Check magic bytes"],
    files: ["polyglot.bin"],
  },

  // Forensics Challenges
  {
    id: 14,
    name: "Memory Dump Analysis",
    category: "forensics",
    difficulty: "medium",
    points: 200,
    solves: 40,
    solved: false,
    attempted: true,
    description:
      "Analyze a memory dump to find the flag and understand the system state.",
    hints: ["Use Volatility framework", "Look for strings in memory"],
    files: ["dump.mem"],
  },
  {
    id: 15,
    name: "Disk Forensics",
    category: "forensics",
    difficulty: "hard",
    points: 350,
    solves: 22,
    solved: false,
    attempted: false,
    description:
      "Recover deleted files from a disk image and find the hidden flag.",
    hints: ["Use photorec or foremost", "Check file headers"],
    files: ["disk.img"],
  },
  {
    id: 16,
    name: "Log Analysis",
    category: "forensics",
    difficulty: "easy",
    points: 100,
    solves: 88,
    solved: false,
    attempted: false,
    description: "Analyze system logs to identify unauthorized access.",
    hints: ["Look for unusual IP addresses", "Check timestamps"],
    files: ["system.log"],
  },
  {
    id: 17,
    name: "Network Forensics",
    category: "forensics",
    difficulty: "hard",
    points: 300,
    solves: 28,
    solved: false,
    attempted: false,
    description: "Analyze PCAP file to identify malicious traffic.",
    hints: ["Use Wireshark", "Look for unusual protocols"],
    files: ["traffic.pcap"],
  },
  {
    id: 18,
    name: "Database Forensics",
    category: "forensics",
    difficulty: "medium",
    points: 180,
    solves: 45,
    solved: false,
    attempted: false,
    description: "Extract information from a compromised database.",
    hints: ["Check deleted records", "Review query history"],
    files: ["database.db"],
  },

  // Miscellaneous Challenges
  {
    id: 19,
    name: "Puzzle Solving",
    category: "misc",
    difficulty: "easy",
    points: 80,
    solves: 130,
    solved: true,
    attempted: false,
    description: "Solve a logic puzzle to find the flag.",
    hints: ["Think laterally", "Consider wordplay"],
    files: [],
  },
  {
    id: 20,
    name: "Reverse Engineering Binary",
    category: "misc",
    difficulty: "hard",
    points: 320,
    solves: 15,
    solved: false,
    attempted: false,
    description: "Reverse engineer a compiled binary to find the hidden flag.",
    hints: ["Use IDA Pro or Ghidra", "Look for string references"],
    files: ["binary.exe"],
  },
  {
    id: 21,
    name: "Code Golf",
    category: "misc",
    difficulty: "medium",
    points: 150,
    solves: 55,
    solved: false,
    attempted: false,
    description:
      "Write the shortest code to solve the given programming problem.",
    hints: ["Use built-in functions", "Consider unconventional approaches"],
    files: ["problem.txt"],
  },
  {
    id: 22,
    name: "Quantum Computing 101",
    category: "misc",
    difficulty: "insane",
    points: 450,
    solves: 5,
    solved: false,
    attempted: false,
    description:
      "Understand quantum computing principles and solve a quantum challenge.",
    hints: ["Review Shor algorithm", "Study superposition"],
    files: ["quantum_problem.py"],
  },

  // Web Challenges
  {
    id: 23,
    name: "SQL Injection",
    category: "web",
    difficulty: "easy",
    points: 120,
    solves: 140,
    solved: true,
    attempted: true,
    description:
      "Exploit a SQL injection vulnerability to access the database.",
    hints: ["Try common SQL injection payloads", "Use UNION-based injection"],
    files: [],
  },
  {
    id: 24,
    name: "XSS Vulnerability",
    category: "web",
    difficulty: "medium",
    points: 180,
    solves: 75,
    solved: false,
    attempted: true,
    description: "Find and exploit XSS vulnerabilities in the web application.",
    hints: ["Try different payload vectors", "Check input filtering"],
    files: [],
  },
  {
    id: 25,
    name: "CSRF Attack",
    category: "web",
    difficulty: "hard",
    points: 280,
    solves: 32,
    solved: false,
    attempted: false,
    description:
      "Craft a CSRF attack to perform unauthorized actions on behalf of a user.",
    hints: ["Understand token validation", "Create malicious forms"],
    files: [],
  },
  {
    id: 26,
    name: "Authentication Bypass",
    category: "web",
    difficulty: "medium",
    points: 200,
    solves: 60,
    solved: false,
    attempted: false,
    description:
      "Bypass authentication mechanisms to gain unauthorized access.",
    hints: ["Check for default credentials", "Look for logic flaws"],
    files: [],
  },
  {
    id: 27,
    name: "Server-Side Request Forgery",
    category: "web",
    difficulty: "hard",
    points: 290,
    solves: 28,
    solved: false,
    attempted: false,
    description: "Exploit SSRF vulnerability to access internal resources.",
    hints: ["Try localhost addresses", "Check for URL validation bypass"],
    files: [],
  },
  {
    id: 28,
    name: "REST API Exploitation",
    category: "web",
    difficulty: "medium",
    points: 170,
    solves: 50,
    solved: false,
    attempted: false,
    description:
      "Exploit vulnerabilities in a REST API to access restricted data.",
    hints: ["Test different HTTP methods", "Check authorization headers"],
    files: [],
  },
];

// State Management
let currentCategory = "all";
let currentFilters = {
  difficulties: [],
  statuses: [],
};
let currentSort = "newest";
let searchTerm = "";
let viewMode = "grid"; // grid or list

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  displayChallenges();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  // Category buttons
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".category-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.dataset.category;
      searchTerm = "";
      document.getElementById("searchChallenges").value = "";
      displayChallenges();
    });
  });

  // Search
  document
    .getElementById("searchChallenges")
    .addEventListener("input", function () {
      searchTerm = this.value.toLowerCase();
      displayChallenges();
    });

  // Difficulty filters
  document.querySelectorAll(".difficulty-checkbox input").forEach((cb) => {
    cb.addEventListener("change", updateFilters);
  });

  // Status filters
  document.querySelectorAll(".status-checkbox input").forEach((cb) => {
    cb.addEventListener("change", updateFilters);
  });

  // Sort
  document.getElementById("sortBy").addEventListener("change", function () {
    currentSort = this.value;
    displayChallenges();
  });

  // View toggle
  document
    .getElementById("viewToggleBtn")
    .addEventListener("click", toggleViewMode);

  // Reset filters
  document
    .getElementById("resetFiltersBtn")
    .addEventListener("click", resetFilters);

  // Modal controls
  setupModalControls();
}

// Update Filters
function updateFilters() {
  currentFilters.difficulties = Array.from(
    document.querySelectorAll(".difficulty-checkbox input:checked")
  ).map((cb) => cb.value);

  currentFilters.statuses = Array.from(
    document.querySelectorAll(".status-checkbox input:checked")
  ).map((cb) => cb.value);

  displayChallenges();
}

// Reset Filters
function resetFilters() {
  document
    .querySelectorAll(".difficulty-checkbox input, .status-checkbox input")
    .forEach((cb) => (cb.checked = false));
  currentFilters = { difficulties: [], statuses: [] };
  searchTerm = "";
  document.getElementById("searchChallenges").value = "";
  currentCategory = "all";
  document
    .querySelectorAll(".category-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelector('[data-category="all"]').classList.add("active");
  displayChallenges();
}

// Filter Challenges
function getFilteredChallenges() {
  let filtered = challenges;

  // Category filter
  if (currentCategory !== "all") {
    filtered = filtered.filter((c) => c.category === currentCategory);
  }

  // Difficulty filter
  if (currentFilters.difficulties.length > 0) {
    filtered = filtered.filter((c) =>
      currentFilters.difficulties.includes(c.difficulty)
    );
  }

  // Status filter
  if (currentFilters.statuses.length > 0) {
    filtered = filtered.filter((c) => {
      if (currentFilters.statuses.includes("solved") && c.solved) return true;
      if (currentFilters.statuses.includes("attempted") && c.attempted)
        return true;
      if (
        currentFilters.statuses.includes("unsolved") &&
        !c.solved &&
        !c.attempted
      )
        return true;
      return false;
    });
  }

  // Search filter
  if (searchTerm) {
    filtered = filtered.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm) ||
        c.category.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm)
    );
  }

  return filtered;
}

// Sort Challenges
function getSortedChallenges(filtered) {
  const sorted = [...filtered];

  switch (currentSort) {
    case "points":
      return sorted.sort((a, b) => b.points - a.points);
    case "solves":
      return sorted.sort((a, b) => b.solves - a.solves);
    case "difficulty":
      const diffOrder = { easy: 0, medium: 1, hard: 2, insane: 3 };
      return sorted.sort(
        (a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]
      );
    default: // newest
      return sorted.sort((a, b) => b.id - a.id);
  }
}

// Display Challenges
function displayChallenges() {
  const filtered = getFilteredChallenges();
  const sorted = getSortedChallenges(filtered);

  const grid = document.getElementById("challengesGrid");
  const noResults = document.getElementById("noResults");

  if (sorted.length === 0) {
    grid.innerHTML = "";
    noResults.style.display = "flex";
    document.getElementById("challengeCount").textContent = "0";
    document.getElementById("filterInfo").innerHTML = "";
    return;
  }

  noResults.style.display = "none";
  document.getElementById("challengeCount").textContent = sorted.length;

  // Update filter info
  let filterInfo = "";
  if (searchTerm) {
    filterInfo += ` matching "${searchTerm}"`;
  }
  if (currentFilters.difficulties.length > 0) {
    filterInfo += ` with ${currentFilters.difficulties.join(", ")} difficulty`;
  }
  if (currentFilters.statuses.length > 0) {
    filterInfo += ` that are ${currentFilters.statuses.join(", ")}`;
  }
  document.getElementById("filterInfo").innerHTML = filterInfo;

  // Build HTML
  grid.innerHTML = sorted
    .map((challenge) => createChallengeCard(challenge))
    .join("");

  // Add click handlers
  document.querySelectorAll(".challenge-card").forEach((card) => {
    card.addEventListener("click", function () {
      const id = parseInt(this.dataset.id);
      openChallengeModal(id);
    });
  });
}

// Create Challenge Card
function createChallengeCard(challenge) {
  const statusClass = challenge.solved
    ? "solved"
    : challenge.attempted
    ? "attempted"
    : "unsolved";
  const statusIcon = challenge.solved ? "check-circle" : "circle";
  const statusText = challenge.solved
    ? "Solved"
    : challenge.attempted
    ? "Attempted"
    : "Unsolved";

  return `
    <div class="challenge-card ${statusClass}" data-id="${challenge.id}">
      <div class="challenge-header">
        <div class="challenge-badges">
          <span class="category-badge">${getCategoryDisplay(
            challenge.category
          )}</span>
          <span class="difficulty-badge difficulty-${challenge.difficulty}">
            ${challenge.difficulty}
          </span>
        </div>
        <span class="status-indicator">
          <i class="fas fa-${statusIcon}"></i>
        </span>
      </div>
      <div class="challenge-body">
        <h3 class="challenge-name">${challenge.name}</h3>
        <p class="challenge-excerpt">${challenge.description.substring(
          0,
          80
        )}...</p>
        <div class="challenge-meta">
          <span class="meta-item">
            <i class="fas fa-star"></i> ${challenge.points}pts
          </span>
          <span class="meta-item">
            <i class="fas fa-check"></i> ${challenge.solves} solves
          </span>
        </div>
      </div>
      <div class="challenge-footer">
        <span class="status-label">${statusText}</span>
        <button class="action-btn" onclick="event.stopPropagation()">
          <i class="fas fa-arrow-right"></i> Solve
        </button>
      </div>
    </div>
  `;
}

// Get Category Display Name
function getCategoryDisplay(category) {
  const map = {
    crypto: "Cryptography",
    osint: "OSINT",
    steganography: "Steganography",
    forensics: "Forensics",
    misc: "Miscellaneous",
    web: "Web",
  };
  return map[category] || category;
}

// Toggle View Mode
function toggleViewMode() {
  viewMode = viewMode === "grid" ? "list" : "grid";
  const btn = document.getElementById("viewToggleBtn");
  const grid = document.getElementById("challengesGrid");

  if (viewMode === "list") {
    btn.innerHTML = '<i class="fas fa-bars"></i>';
    grid.style.gridTemplateColumns = "1fr";
  } else {
    btn.innerHTML = '<i class="fas fa-th"></i>';
    grid.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
  }

  // Update card heights for list view
  document.querySelectorAll(".challenge-card").forEach((card) => {
    if (viewMode === "list") {
      card.style.flexDirection = "row";
      card.style.alignItems = "center";
    } else {
      card.style.flexDirection = "column";
      card.style.alignItems = "stretch";
    }
  });
}

// Modal Functions
function setupModalControls() {
  const modal = document.getElementById("challengeModal");
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  overlay.addEventListener("click", () => modal.classList.remove("active"));

  document
    .getElementById("submitFlagBtn")
    .addEventListener("click", submitFlag);
}

function openChallengeModal(id) {
  const challenge = challenges.find((c) => c.id === id);
  if (!challenge) return;

  document.getElementById("modalTitle").textContent = challenge.name;
  document.getElementById("modalCategory").textContent = getCategoryDisplay(
    challenge.category
  );
  document.getElementById("modalDifficulty").textContent = challenge.difficulty;
  document.getElementById("modalDifficulty").className =
    "modal-difficulty-badge difficulty-" + challenge.difficulty;
  document.getElementById("modalPoints").textContent = challenge.points;
  document.getElementById("modalSolves").textContent = challenge.solves;
  document.getElementById("modalStatus").textContent = challenge.solved
    ? "Solved ✓"
    : challenge.attempted
    ? "Attempted"
    : "Not Solved";
  document.getElementById("modalDesc").textContent = challenge.description;

  // Hints
  const hintsHtml = challenge.hints
    .map(
      (hint, i) =>
        `<div class="hint-item"><strong>Hint ${i + 1}:</strong> ${hint}</div>`
    )
    .join("");
  document.getElementById("modalHints").innerHTML = hintsHtml;

  // Files
  if (challenge.files.length > 0) {
    document.getElementById("modalFilesSection").style.display = "block";
    const filesHtml = challenge.files
      .map(
        (file) =>
          `<a href="#" class="file-link"><i class="fas fa-download"></i> ${file}</a>`
      )
      .join("");
    document.getElementById("modalFiles").innerHTML = filesHtml;
  } else {
    document.getElementById("modalFilesSection").style.display = "none";
  }

  // Clear flag input
  document.getElementById("flagInput").value = "";
  document.getElementById("submissionFeedback").innerHTML = "";

  // Store current challenge ID for submission
  document.getElementById("challengeModal").dataset.currentId = id;

  document.getElementById("challengeModal").classList.add("active");
}

function submitFlag() {
  const flagInput = document.getElementById("flagInput").value.trim();
  const feedback = document.getElementById("submissionFeedback");

  if (!flagInput) {
    feedback.innerHTML = '<span class="error">Please enter a flag</span>';
    return;
  }

  // Simulate flag checking (in real app, this would verify against backend)
  if (flagInput.toLowerCase() === "flag{test}") {
    feedback.innerHTML =
      '<span class="success"><i class="fas fa-check-circle"></i> Correct flag! Well done!</span>';
    setTimeout(() => {
      document.getElementById("modalClose").click();
    }, 1500);
  } else {
    feedback.innerHTML =
      '<span class="error"><i class="fas fa-times-circle"></i> Incorrect flag. Try again!</span>';
  }
}
