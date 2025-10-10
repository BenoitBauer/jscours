const btn = document.getElementById("toggleTheme");
const body = document.body;

btn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    btn.textContent = "LIGHTMODE";
  } else {
    body.classList.replace("dark", "light");
    btn.textContent = "DARKMODE";
  }
});
