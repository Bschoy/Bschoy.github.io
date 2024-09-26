function showAlertExplore() {
  const alertBox = document.getElementById("customAlert");
  alertBox.style.display = "flex";
  setTimeout(() => {
    alertBox.classList.add("show"); // Add 'show' class after a short delay for smooth transition
  }, 10); // Small timeout to trigger the opacity transition
}

function closeAlert() {
  const alertBox = document.getElementById("customAlert");
  alertBox.classList.remove("show"); // Remove 'show' class to start fade-out
  setTimeout(() => {
    alertBox.style.display = "none"; // Hide completely after transition
  }, 500); // Match the transition time (0.5s) before fully hiding
}
