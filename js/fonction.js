const panier = [
    {name: "Pomme", price: 2, quantity: 5},
    {name: "Kiwi", price: 1, quantity: 50},
    {name: "Mangue", price: 9, quantity: 25},
]


// Fonction qui additionne deux nombres

// Fonction utilitaire

function add(nbrA, nbrB){
    return nbrA+ nbrB
}

// autre fonction utilitaire

function multiply(nbrA, nbrB){
    return nbrA * nbrB;
}


//Fonction principale qui va calculer le prix total du panier

function calculatePriceCart(cart){
    // Avant de calculer on va initialiser le total.
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        // POur faciliter la lecture on remonne élément actuel de la boucle par une variable plus sipmle a ecrire
        const item = cart[i];
        // Le retour de la fonction multiply "injecte" son resulta dans itemPriceTotal
        const itemPriceTotal = multiply(item.price, item.quantity)
        total = add(total, itemPriceTotal)
    }
    return total
}

console.log(calculatePriceCart(panier))


// Faire une fonction qui retourne le nombre de voyelles dans un mot mis en parametres.

// exemple console.log(compterVoyelles("Bonjour"))=> 3



function compterVoyelles(mot) {
  let voyelles = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
  let compteur = 0;

  for (let i = 0; i < mot.length; i++) {
    if (voyelles.includes(mot[i])) {
      compteur++;
    }
  }

  return compteur;
}

console.log(compterVoyelles("Le gouvernement c'est de la merde. IL SERT A RIEN"));

//Faire une fonction qui prend en paramettre un tableau de nombre et retourne le nombre le plus grand
// [3, 7, 2, 9, 5] et [-5, -2, -10]


function trouverLePlusGrandNombre(tableau) {
  let plusGrandNombre = tableau[0];

  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] > plusGrandNombre) {
      plusGrandNombre = tableau[i];
    }
  }

  return plusGrandNombre;
}


console.log(trouverLePlusGrandNombre([3, 7, 2, 9, 5])); 
console.log(trouverLePlusGrandNombre([-5, -2, -10]));


// AUTRE EXO

// === ÉNONCÉ ===

// Ajouter un champ de texte (input), un bouton "Ajouter" et une liste <ul> directement dans le HTML.
// Donner un id à chacun de ces éléments pour pouvoir les manipuler en JavaScript.

// Quand l'utilisateur saisit du texte dans l'input et clique sur le bouton,
// cela doit créer un nouvel élément <li> contenant le texte saisi,
// et l'ajouter à la liste <ul> affichée à l'écran.

// Le texte saisi doit aussi être ajouté dans un tableau JavaScript.
// À chaque modification du tableau, la liste <ul> doit être regénérée
// (c’est-à-dire qu’on affiche tous les <li> du tableau, pas seulement le dernier ajouté).

// BONUS : le fait d’appuyer sur la touche "Entrée" doit avoir le même effet
// que de cliquer sur le bouton.


const input = document.getElementById("texte");
const bouton = document.getElementById("ajouter");
const liste = document.getElementById("liste");
const elements = [];

function majListe() {
  liste.innerHTML = "";
  elements.forEach(texte => {
    const li = document.createElement("li");
    li.textContent = texte;
    liste.appendChild(li);
  });
}

function ajouterElement() {
  const texte = input.value.trim();
  if (texte !== "") {
    elements.push(texte);
    majListe();
    input.value = "";
  }
}

bouton.addEventListener("click", ajouterElement);

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    ajouterElement();
  }
});



