const btn = document.getElementById("btn-wait");
let seconds = 5;

btn.textContent = "Attendez " + seconds + " secondes ";

const timer = setInterval(function() {
  seconds--;

  if (seconds > 1) {
    btn.textContent = "Attendez " + seconds + " secondes ";
  } else if (seconds === 1) {
    btn.textContent = "Attendez " + seconds + " secondes ";
  } else {
    clearInterval(timer);
    btn.textContent = "Cliquez ici !";
    btn.disabled = false;
    btn.classList.add("active");
  }
}, 1000);

btn.addEventListener("click", function() {
  if (!btn.disabled) {
    alert("Bravo, tu as attendu 5 secondes !");
  }
});
