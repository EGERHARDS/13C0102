document.addEventListener("DOMContentLoaded", (event) => {
  const toggleButton = document.getElementById("darkModeButton");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
