const boutonAjouter = document.getElementById("ajouter");
const boutonVider   = document.getElementById("vider");
const galerie       = document.getElementById("galerie");
const compteur      = document.getElementById("compteur");

boutonAjouter.addEventListener("click", function () {
  const url = document.getElementById("url").value;
  const alt = document.getElementById("alt").value;


  const bloc = document.createElement("div");
  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;

  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.textContent = "❌ Supprimer";
  boutonSupprimer.className = "btn";

  boutonSupprimer.addEventListener("click", function () {
    galerie.removeChild(bloc);
    mettreAJourCompteur();
  });

  bloc.appendChild(image);
  bloc.appendChild(boutonSupprimer);
  galerie.appendChild(bloc);

  document.getElementById("url").value = "";
  document.getElementById("alt").value = "";

  mettreAJourCompteur();
});

boutonVider.addEventListener("click", function () {
  while (galerie.firstChild) {
    galerie.removeChild(galerie.firstChild);
  }
  mettreAJourCompteur();
});

function mettreAJourCompteur() {
  const images = galerie.getElementsByTagName("img");
  let nombre = 0;

  for (let i = 0; i < images.length; i++) {
    nombre++;
  }

  compteur.textContent = "Total : " + nombre + " image(s)";
}


