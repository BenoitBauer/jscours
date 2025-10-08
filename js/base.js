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
console.loge(leves[2])
console.loge(leves[4]) // undefined, on sort des limites du tableau.
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

