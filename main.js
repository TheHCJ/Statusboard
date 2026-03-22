const checkbox = document.getElementById("theme-toggle");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    // Change CSS variables when checked
    document.documentElement.style.setProperty("--bg", "#121212");
    document.documentElement.style.setProperty("--text", "#f0f0f0");
  } else {
    // Reset CSS variables when unchecked
    document.documentElement.style.setProperty("--bg", "white");
    document.documentElement.style.setProperty("--text", "black");
  }
});
