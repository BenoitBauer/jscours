// Exemple de variable

let jambon = "Jambon"; // variable modifiable
const pi = 3.1415926; // constante (non modifiable)
var age = 25; // variable modifiable, à fort tauxd'erreurs NE SURTOUT PAS L'UTILISER !!!

// Les règles de déclaration

let a = 12;
console.log(a);

// Ne pas remettre let devant 1 variable, car cela voudrais dir qu'on la redeclare
// Pour la modifier il suffit, de l'appeler par son nom et de mettre = ensuite sa nouvelle valeur.

a = 4;
console.log(a);

const tau = 6.28318;
console.log(tau);

// Les constantes n'accepte pas d'autres valeurs, que celles déclarées
// tau = 7;
// console.log(tau);
// Les deux ligns si-dessus feront buggés le script.

var b = 40;
console.log(b);

var b = 50;
console.log(b);

// Les var oeuvent etre redeclarer causant de gros problemes de lisibilitées

// Typage dynamique

let k = "Coucou tu veux voir ma bicyclette ?";
console.log(k);

k = 16.2;
console.log(k);

// Types de données

// Les nombres = number

let q = 2; // nombre entier
let p = 45.32 // nombre à virgule flottant
let r = -273.15; // nombre négatif
let s = 1 / 3; // fraction
let t = 16_000

// Les chaines de caratères = les string

const corneille = "Ingrat, rend-moi mon Cid jusques au dernier mot";
const moliere = 'Votre sang, monsieur, n\'est pas tombé dans de mauvaise main';
console.log(moliere)
let blague = `C'est une autruche qui rentre dans un bar ...`;

// Les bouléens

const vrai = true;
const jeSuisFaux = false;

// Les tableaux = Array

const eleves = ["Autruche", "Joconde", 4, true];
console.log(eleves)
console.log(eleves[2])
console.log(eleves[4]) // undefined, on sort des limites du tableau.
// Les tableaux n'ont pas d'indedx négatifs.
// Les tableaux commencent toujours par l'index 0 et fini toujours pas l'index égale à la taille du tableau - 1

// Les undefined

let d;
console.log(d)

// La variable à été déclarée, mais elle à aucune valeurs, alors le js la déclare indéfinie
// Ou par exemple en sortant des limites d'un tableau, ou en ciblant un élément html mal écrit.
// Ce type de données est à éviter absolument !!!


// Les nulle => Null

let x = null;

// Les objets

const tasse = {
    color: "Rouge",
    material: "Céramique",
    price: 1,
    content_volume: 25,
}

const eleve = {
    name: "Jean-Michel",
    age: 18,
    class: "Terminal",
    notes: [13, 18, 19, 2, 16, 15.5]

}

console.log(eleve.name)
// Calcul de la moyenne de Jean-Michel, en codage naîf.
let moyenne = (eleve.notes[0] + eleve.notes[1] + eleve.notes[2] + eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6
console.log(moyenne)


// OPERATEUR

// l'affectation

// On donne la valeur de 7 à variable "aa"

let aa = 7

// l'addition

// La valeur 7 est écraser par l'additionne 12 + 4 donc la variabke aa = 16

aa = 12 + 4;
console.log(aa)
// l'affectation après addition
// avec cette écriture on écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
aa += 4;
console.log(aa); // donne 20

// la soustraction


bb = 12 - 4;
console.log(bb)
// l'affectation après soustraction
// avec cette écriture on écrase pas la valeur mais on retire 4 à l'ancienne valeur
bb -= 4;
console.log(bb); // donne 12

// la multiplication


cc = 12 * 4;
console.log(cc)
// l'affectation après multiplication
// avec cette écriture on écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
cc *= 2;
console.log(cc); // donne 80

// la division

dd = 20 / 4;
console.log(dd)
// l'affectation après multiplication
// avec cette écriture on écrase pas la valeur mais on ajoute 4 à l'ancienne valeur
dd /= 2;
console.log(dd); // donne 2.5

// les modulo

let ee = 13 % 5
console.log(ee) // donne 3

// les exponentiels

let ff = 3 ** 2;
console.log(ff) // 9

// les conditions

let gg = 4;
let hh = 4;
let ii = 9;

if (gg == hh) {
    // si la condition est bien rempli
} else {
    // si la condition n'est pas rempli
}

// égalité non strict

if (6 == "6") {
    console.log("ça marchre");
}

// égalité strict
// l'égalité strict varie en plus le type de données
// ici l'égalité est fausse car 6 est un number et "6" est une chaine de caractere
if (6 === "6") {
    ///////////////////
} else {
    console.log("ça marchera pas")
}


/// On va vérifier si Jean-Michel est majeur
if (eleve.age >= 18) {
    // ici on va faire la concaténation (coller plusieurs chaines de caractères entre elles)
    // avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur")
} else {
    // Ici concaténation de litteral de gabarit
    console.log(`${eleve.name} n'est pas majeur`)
}

// Révision

const vitesseDeLaLumiere = 299_792_458; // Constante dans le vide
const table = [1, 2, 3]
table.push(4)
console.log(table)

const ingredients = []; // tableau vide que l'on remplira plus tard

// icic on va fabriquer un plan qui permettre de construire plus simplement les ingédients
// on apelle ça en js le prototypage


class Ingredient {
    constructor(nom, unite, quantite) {
        this.nom = nom;
        this.unite = unite;
        this.quantite = quantite;
    }
}

class Recettes {
    constructor(nom_recette, nbr_personnes, etapes, liste_ingredients) {
        this.nom_recette = nom_recette;
        this.nbr_personne = nbr_personnes;
        this.etape = etapes;
        this.liste_ingredients = liste_ingredients;
    }
}


const sucreDeCanne = new Ingredient("Sucre de Canne", "g", 75);
const lait = new Ingredient("Lait", "cl", 25);
const oeuf = new Ingredient("oeuf", "oeuf(s)", 3);
const pain = new Ingredient("pain", "tranche(s) de pain", 6);
console.log(sucreDeCanne)

// je vais donc mettre mes ingredients dans le tableau ingredients

ingredients.push(sucreDeCanne, lait, oeuf, pain);
console.log(ingredients)

// on va faire notre recette
const etapes = ["Fouetter les oeufs avec le sucre et le lait.", "Y tremper les tranches de pain.", "Deux solutions pour la cuisson : les cuire à la poêle dans du beurre en les faisant dorer de chaque côté, ou, les cuire au four : beurrer légèrement un plat à gratin, y répartir les tranches, verser le reste du mélange (ajouter du sucre si envie), laisser cuire à 180°C (thermostat 6) jusqu'à que les tranches soient dorées."]


const painPerdu = new Recettes("Pain Perdu", 4, etapes, ingredients)
console.log(painPerdu)


// LES BOUCLES


console.log("Coucou !")
console.log("Coucou !")
console.log("Coucou !")
console.log("Coucou !")
console.log("Coucou !")

// imaginons que j'ai besoin d'écrire dans un console.log
//0 patate(0) à 2000 patate
//allons nous écrire à la main 2001 console.log ?
// non ! nous allons utiliser une boucle
// et pour cette exemple nous allons utiliser la boucle for.

for (let i = 0; i <= 2000; i++) {
    console.log(i + " patate's");
}

// Boucle while

let n = 0;
while(n < 6) {
    console.log(n + " * 5 est égal à " + n * 5);
    n++
}

// Exercice
// Utiliser un boucle while pour generer 10 nombre aleatoires
// complris entre 0 et 100, puis les afficher dans la console

let zz = 0;
while(zz < 10) {
    console.log(Math.random()* (100 - 1))
    zz++
}

// do while

//let password;
//do {
 //   password = prompt("Entrer le MDP !");
//} while (password !== "abc123")
//console.log("Tu à trouver le MDP !");

// Exo
// On simule un lancer de dé qui continue jusqu'a ce que le joueur obtienne 6. On ne peux pas savoir combien de fois à l'avance qu'il faudra executer la boucle.

let des;
do {
    des = Math.floor(Math.random()* 7)
    console.log(des)
} while (des !== 6)
console.log("Tu à trouver le dés magique!");

// boucle for
// compteur

for (let i = 0; i < 5; i++){
    console.log("Compteur : " + i);
}

// Boucle for -> traverser les tableaux

let voitures = ["Dacie", "Lada", "Audi", "Daihatsu", "Toyota", "Chevrolet"]

for (let i = 0; i < voitures.length; i++){
    console.log(voitures[i])
}

//a boucle For...of

let fruits = ["la Pomme", "la Banane", "le Kiwi", "l'Avocat", "le Duriant"];
for (let fruit of fruits) {
    console.log('j\aime :' + fruit)
}


// exo

const gafam = ["Google", "Amazon", "Facebook", "Apple", "Microsoft"];

const container = document.getElementById("container");
const ul = document.createElement("ul")
container.appendChild(ul)


for (let brand of gafam){
    const li = document.createElement("li")
    li.innerHTML = brand
    ul.appendChild(li)
}

// For...in

const stylo = {
    taille: 15,
    marque: "bic",
    couleur:"#0000FF",
    aEncoreSonCapuchon: true,
}

// on appel le conteneur pour pouvoir l'utiliser dans le js

const penContainer = document.getElementById("pen-container");
// on crée une liste

const ulPen = document.createElement("ul");
// on l'accroche au conteneur
penContainer.appendChild(ulPen);

// pour chaque cle (taille, marque couleur ...) dans stylo

for (let cle in stylo){
    // on recupere la valeur
    let value = stylo [cle];
    // on va cree un li pour chaque cle dans l'objet
    let li = document.createElement("li") 
    // ici c'est 1 exemple de litteral de gabarit de contactenation
    // 1 litteral de gabarit  à besoin obligatoirement 
    li.innerHTML = `<span class='bleu'></span>: ${value}`
    ulPen.appendChild(li)
    console.log(value)
}


// BREAK
//for (let i = 0; i < 10; i++){
  //  if ( i === 5) {
    //    break;
    //}
    //console.log(i)
//}

// CONTINUE
// imaginon que l'ont veux recuperer uniquement les nombres impairs generer par une boucle for

for (let i = 0; i < 10; i++){
  if ( i % 2 === 0){
    continue;
  }
  console.log(i)
}

// exo continue

const utilisateurs = [
    { nom: "Alice", actif: true },
    { nom: "Bob", actif: false },
    { nom: "Charlie", actif: true },
    { nom: "David", actif: false },
];

for (let cle of utilisateurs) {
if ( cle.actif == false) {
    continue;
    }
    console.log(cle.nom)
}

//for ( let i =0; i < utilisateurs.length; i++){
  //  if (!utilisateurs[i].actif) {
   //     continue;
  //  }
    // console.log("utilisateur actif : " + utilisateurs[i].nom)
 // }

   


// dans un console log et avec une boucle et un continue, filtrer moi les utilisateur pas actif
// dans consol log on doit lire "utilisateur actif : alice" etc...

// exo 2

// afficher dans un consol log uniquement les produits qui ne sont pas en rupture de stock

const panier = [
    { nom: "Clavier", stock: 5 },
    { nom: "Souris", stock: 0 },
    { nom: "Ecran", stock: 3 },
    { nom: "Casque", stock: 0 },
    { nom: "Webcam", stock: 2 },
];

for ( let i = 0 ; i < panier.length; i++) {
    if (panier[i].stock === 0) {
        continue;
    }
    console.log(" Panier Stock : " + panier[i].nom)
    break;
    }

// Vous arreter la recherchre des qu'un produit est en stock


//Nouvel exo
// Avec une boucle while chercher le 1er multiple de 7 dans le tableau donner, la boucle s'arette des qu'il trouve ce multipe , afficher le dans la consoole

const nbrs = [2, 1, 9, 13, 14, 8, 74]
let iter = 0;
while(iter < nbrs.length) {
    if(nbrs[iter] % 7 === 0){
        console.log("Le premier multiple de 7 est trouvé " + nbrs[iter]);
        break;
    }
    iter++
}

//Ecrire un programme qui parcours un tableau de nombre avec une boucle for
// qui va aller chercher le 1er nombre pair apres un nombre impair
// quand cela est fait ca coupe la boucle


const nbrs2 = [2, 18, 46, 19, 25, 14, 18, 9978];

//for (let i = 0; i < nbrs2.length; i++){
  //  if(nbrs2[i] % 7 === 0){
  //  console.log(nbrs2[i]);
   // }
//}

for (let i = 0; i < nbrs2.length; i++){
    const precedente = nbrs2[i - 1];
    const actuel = nbrs2[i];

    const precedentEstImpair = precedente % 2 !==0;
    const actuelEstPair = actuel % 2 === 0;

    if(precedentEstImpair && actuelEstPair) {
        console.log('Premier nombre pair apres impair: ' + actuel)
        break;
    }

}


//Code à debuger

const nombres = [3, 4, 17, 5, 25, 6];
let trouve = false;

for (let i = 0; i < nombres.length; i++){
    if (nombres[i] % 9 == 0) {
        trouve === true
        console.log("Trouvé :", nombres[i])
        break;
    }
}

if (!trouve) {
    console.log("Aucun multiple de 9 trouvé");
}

// LES TABLEAUX

 const fruits2 = ["pomme", "Banane", "Orange"]
 // ajouter un élément ç la fin du tableau

 fruits2.push("fraise");

 //ajouter un élément au début

 fruits2.unshift ("melon");

 //su^rimer le dernier élément
fruits2.pop();

//supprimer le premier élément
fruits2.shift();


// autre fonctions utiles
const fruits3 = ["framboise", "tomate", "coing", "poire"]
// trouver l'index d'1 élément
let posFruit = fruits3.indexOf("tomate")
console.log(posFruit)

//verigfiersi un élément est present
console.log(fruits3.includes('orange'))
console.log(fruits3.includes('poire'))

// convertir un tableau en chain,e de caractere
let saladeDeFruit = fruits3.join(", ")
console.log(saladeDeFruit)

//string
//connaitre la taille d'une string
let mot = "jean-Michel"
console.log(mot.length);
// Attend ?!! Length
console.log(mot[3]);
//on vs a menti depuis le debut les strings sont des tableaux
// pour ajouter par exemple une majuscule au 1er élément
let mot2 = mot.charAt(0).toUpperCase() + mot.slice(1);
console.log(mot2)




// Méthode itératrices

const videoGames =['Mario', "Pandemoniom", "Gran Turismo", "Metal Gear", "Zelda", "Hollow Knight", "Rocket League"]
const nbrIte =[5, 10, Math.PI, 19, 478, 255, 64712, 2.5, 47.899]
//videoGames.forEach(videoGame => {
   // console.log(videoGame)
//})


videoGames.forEach((videoGame, index) => {
    console.log(`index ${index} : ${videoGame}`)
})


// .map
// retourne un tableau apres transformation de chaque element

const upper = videoGames.map(videoGames => videoGames.toUpperCase)
console.log(upper);

// retourne un tableau avec les valeurs à la puissance de deux

const pow2 = nbrIte.map( n => n ** 2)
console.log(pow2)

// .filter
// retourne un tableau avec uniquement les elements qui ont passer un test.

// on recupere dans un tableau uniquement les nombres paires

const even = nbrIte.filter(n => n % 2 === 0)
console.log(even)

//on recupere dans le tableau le nom des jeux qui commence par un m.

const mGames = videoGames.filter(vg => vg.charAt(0).toLocaleLowerCase()==="m")
console.log(mGames)

// reduce
// il accumule une valeur à partir des éléments du tableau

const prices = [10, 15.75, 78, 12];
const totalPrice = prices.reduce((acc, val) => acc + val, 0);
console.log(totalPrice)

// au debut acc = 0 
// acc + val = 10
// 10 + 15.75
// 15.75 + 78
// 103.75 + 12
// 115.75



// . find
// retourne le PREMIER élément qui passe un test

const users = [
    {id: 1, nom:"Jean-Michel"},
    {id: 2, nom:"Jean-Marcel"},
    {id: 3, nom:"Jean-Marc"},
    {id: 4, nom:"Jean-Eude"},
    {id: 5, nom:"Jean-Kévin"},
]

// Je veux recuperer, le premier élément d'id 4

const user = users.find( U => U.id === 4)
console.log(user);


// Some() et Every()

// .some() => verifie qu'au moins un des elements du tableau satisfait la condition

// .every => verifie que tout les elements du tableau satisfait la condition

const nbrSome = [1, 5, 4, 74, 52356]
const strEvery = ['Autruche', "Anne", "Anguille", "Alligator"]

console.log(nbrSome.some(n => n % 2 === 0))
console.log(nbrSome.every(n => n % 2 === 0))

console.log(strEvery.every( s => s.charAt(0).toLocaleLowerCase() === "a"))




