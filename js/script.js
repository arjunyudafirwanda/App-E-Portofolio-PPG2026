const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = "🌙";
    }
  });

  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      toggleBtn.innerHTML = "☀️";
    }
  });
}
