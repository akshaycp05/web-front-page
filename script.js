// ⏰ Live Clock
function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById("clock");
  clockEl.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ===== SEARCH =====
function search() {
  const query = document.getElementById("searchInput").value.trim();
  if(!query) return;

  // Open search in new browser tab
  if(query.startsWith("http://") || query.startsWith("https://")) {
    window.open(query, "_blank");
  } else {
    window.open("https://www.google.com/search?q=" + encodeURIComponent(query), "_blank");
  }
}

// Support Enter key
document.getElementById("searchInput").addEventListener("keydown", e => {
  if(e.key === "Enter") search();
});

// ===== TAB SWITCHING =====
// Use event delegation for dynamic tabs
const tabsContainer = document.getElementById("tabsContainer"); // parent div containing all tabs
tabsContainer.addEventListener("click", e => {
  const clickedTab = e.target.closest(".tab");
  if(!clickedTab) return;

  // Remove active from all tabs
  tabsContainer.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

  // Set clicked tab active
  clickedTab.classList.add("active");

  // Update tab content
  const content = clickedTab.dataset.content || "New Tab";
  const tabContent = document.getElementById("tabContent");
  tabContent.textContent = content;
});
