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
let s = 1/3; // fraction
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
let moyenne = (eleve.notes[0] + eleve.notes[1] +  eleve.notes[2] +  eleve.notes[3] + eleve.notes[4] + eleve.notes[5]) / 6
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

let ff = 3**2;
console.log(ff) // 9

// les conditions

let gg = 4;
let hh = 4;
let ii = 9; 

if (gg == hh) {
    // si la condition est bien rempli
}else{
  // si la condition n'est pas rempli
}

// égalité non strict

if ( 6 == "6") {
    console.log("ça marchre");
}

// égalité strict
// l'égalité strict varie en plus le type de données
// ici l'égalité est fausse car 6 est un number et "6" est une chaine de caractere
if ( 6 === "6") {
   ///////////////////
}else{
    console.log("ça marchera pas")
}


/// On va vérifier si Jean-Michel est majeur
if(eleve.age >= 18){
    // ici on va faire la concaténation (coller plusieurs chaines de caractères entre elles)
    // avec le nom de l'élève et un texte descriptif
    console.log(eleve.name + " est bien majeur")
}else{
    // Ici concaténation de litteral de gabarit
    console.log(`${eleve.name} n'est pas majeur`)
}


