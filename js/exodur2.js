let inputNom = document.querySelector(".nom");
let inputQuantite = document.querySelector(".quantite");
let selectCategorie = document.querySelector(".categorie");

let btnAjouter = document.querySelector(".ajouter");
let btnVider = document.querySelector(".vider");
let btnTrier = document.querySelector(".trier");

let zoneListe = document.querySelector(".liste");
let texteTotal = document.querySelector(".total");

let inventaire = [];

function afficherListe() {
  zoneListe.innerHTML = "";

  for (let i = 0; i < inventaire.length; i++) {
    let obj = inventaire[i];

    let bloc = document.createElement("div");
    bloc.className = "objet " + obj.categorie;

    let nom = document.createElement("p");
    nom.textContent = obj.nom;

    let qt = document.createElement("p");
    qt.textContent = "Quantité : " + obj.quantite;

    bloc.appendChild(nom);
    bloc.appendChild(qt);
    zoneListe.appendChild(bloc);
  }

  texteTotal.textContent = "Total : " + inventaire.length;
}

btnAjouter.onclick = function () {
  let nom = inputNom.value.trim();
  let quantite = Number(inputQuantite.value);
  let categorie = selectCategorie.value;

  if (nom === "" || quantite <= 0) {
    return;
  }

  let nouvelObjet = {
    nom: nom,
    quantite: quantite,
    categorie: categorie
  };

  inventaire.push(nouvelObjet);

  inputNom.value = "";
  inputQuantite.value = "";

  afficherListe();
};

// Me reste à faire le vidage, le triage, le filtrage, modifier lz quantité et le supprimage
