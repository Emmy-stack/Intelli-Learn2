// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const isDark = currentTheme === "dark";
    document.body.setAttribute("data-theme", isDark ? "light" : "dark");
    toggleBtn.textContent = isDark
      ? "🌙 Switch to Dark Mode"
      : "☀️ Switch to Light Mode";
  });
}

// Dropdown toggle
function toggleDropdown() {
  const arrow = document.querySelector(".arrow");
  const menu = document.querySelector(".dropdown-menu");
  arrow.classList.toggle("rotate");
  menu.classList.toggle("show");
}

// Glow hover rotation
const wrapper = document.querySelector(".glow-wrapper");
const image = document.querySelector(".glow-image");
const glow = wrapper;

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = (y - centerY) / 25;
  const rotateY = (x - centerX) / 25;

  image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

  const percentX = (x / rect.width) * 100;
  const percentY = (y / rect.height) * 100;
  glow.style.setProperty("--mouse-x", `${percentX}%`);
  glow.style.setProperty("--mouse-y", `${percentY}%`);
  glow.style.setProperty("--bg-pos", `${percentX}% ${percentY}%`);
  glow.style.setProperty("background-position", `${percentX}% ${percentY}%`);
  glow.style.setProperty("--shadow-x", `${rotateY}px`);
  glow.style.setProperty("--shadow-y", `${rotateX}px`);
});

wrapper.addEventListener("mouseleave", () => {
  image.style.transform = `rotateX(0) rotateY(0)`;
});

// 🔥 Show registration iframe + blur background
function registerPopup() {
  const iframe = document.getElementById("register");
  const content = document.getElementById("main-content");
  iframe.style.display = "block";
  content.classList.add("blur");
}

// ❌ Optional: close popup and remove blur
function closeRegisterPopup() {
  const iframe = document.getElementById("register");
  const content = document.getElementById("main-content");
  iframe.style.display = "none";
  content.classList.remove("blur");
}

// 🚴 Bicycle movement to Start button
function moveBicycleToButton() {
  const bicycle = document.getElementById("bicycle-wrapper");
  const startButton = document.getElementById("start-button");

  const buttonRect = startButton.getBoundingClientRect();
  const bicycleRect = bicycle.getBoundingClientRect();

  const dx = buttonRect.left - bicycleRect.left;
  const dy = buttonRect.top - bicycleRect.top;

  bicycle.style.transition = "transform 3s ease-in-out";
  bicycle.style.transform = `translate(${dx}px, ${dy - 100}px)`;

  setTimeout(() => {
    startButton.click();
  }, 3000);
}

document
  .getElementById("bicycle-wrapper")
  .addEventListener("click", moveBicycleToButton);
