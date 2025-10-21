let eleves = ["Jean-Michel", "Gertrude", "Renaud", "Anthony", "Eugène", "Ernest", "Maurice", "Raoul", "Noël", "Honoré"];
const base = [...eleves];

function afficherListe() {
  let liste = document.getElementById("liste");
  liste.innerHTML = "";
  for (let nom of eleves) {
    let li = document.createElement("li");
    li.textContent = nom;
    liste.appendChild(li);
  }
}

function afficherSuivant() {
  let interroge = document.getElementById("interroge");

  if (eleves.length === 0) {
    eleves = [...base];
  }

  const indexAleatoire = Math.floor(Math.random() * eleves.length);
  const nomChoisi = eleves[indexAleatoire];

  interroge.textContent = nomChoisi;

  eleves.splice(indexAleatoire, 1);
  afficherListe();
}

document.getElementById("suivant").onclick = afficherSuivant;
afficherListe();
afficherSuivant();
