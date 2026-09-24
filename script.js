const button = document.getElementById("goalButton");
const message = document.getElementById("goalMessage");

button.addEventListener("click", function () {
  message.textContent =
    "Moim celem jest zdobycie doświadczenia i rozwijanie umiejętności programistycznych.";
});
const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainMenu");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});