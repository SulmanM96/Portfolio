// 🔄 Dynamically load HTML sections from /sections folder
const sections = ["hero", "about", "skills", "projects", "certs", "contact"];

sections.forEach(id => {
  fetch(`sections/${id}.html`)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${id}.html`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(`Error loading ${id}:`, err);
    });
});

// 🌙 Theme toggle (light/dark mode)
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Optional: persist theme preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// 🌓 Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
