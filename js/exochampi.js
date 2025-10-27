const liste = document.getElementById("liste");

const champignons = ["Bolet", "Morille", "Chanterelle", "Cèpe", "Pied-de-mouton", "Girolle", "Trompette"];

champignons.forEach(nom => {
  const li = document.createElement("li");
  li.textContent = nom;

  li.addEventListener("click", () => {
    li.classList.toggle("barre");
  });

  liste.appendChild(li);
});
