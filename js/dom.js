const title = document.getElementById("title");
console.log(title)

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
let clickNumber = document.getElementById("click-number")

console.log(btn)
btn.addEventListener("click", function(){
    title.innerHTML = "Blblblblblblblblbl"
})

let click = 0;


btn2.addEventListener("click", function(){
   click++; // est équivalent à click +=1
   clickNumber.innerHTML = click;
})

btn3.addEventListener("click", function(){
   click--; // est équivalent à click -=1
   clickNumber.innerHTML = click;
})


// Avec les inputs

const inputText = document.getElementById("input-text");
const input1 = document.getElementById("input1");
// Permet au contenue de l'input à s'affacer à chaque rechargement de page
input1.value = ""
input1.addEventListener("input", function (){
    //console.log(this)
    let valueInput = this.value;
    inputText.innerHTML = valueInput
})

// Hiearchie

const mom = document.getElementById("mom");
// ChildNodes
// récuperer tous les éléments/noeuds (meme le texte)
console.log(mom.childNodes)
// ici on récupere des elelement à l'interieur de la div qui se trouve dans mom
console.log(mom.childNodes[5].childNodes)

// children
// Récupere tous les élément enfants directs de mom (pas le texte)
console.log(mom.children)

// First child ( prend le texte en compte)
console.log(mom.firstChild)

// First element child
console.log(mom.firstElementChild)


// on va supprimer lze 1er li de mom à partir des parametres precedent
console.log (mom.children[2].firstElementChild.firstElementChild.remove());

// Création d'1 élément 
let img = document.createElement("img");
// On modifie son src
img.src = "https://previews.123rf.com/images/captainimages/captainimages1403/captainimages140300222/26708972-close-up-of-one-piece-of-fried-potato-chips-isolated-on-white-background.jpg"
img.alt = "Une belle chips ! "
img.style.width = "200px";
img.style.height = "auto";

// Maintenant que l'on a construit notre image, on peut "l'accrocher" à un autre élément mais en tant qu'enfant

mom.appendChild(img)

// Recuperer les class

// Methode deconseiller

//const pokemons = document.getElementByClassName("pokemons");
//console.log(pokemons[0])

const pokemons = document.querySelectorAll('.pokemons');
// Si on sait qu'il y a que 1 élément on peu utiliser
// queryselector prendra uniquement le 1er element avec ce nom de class
const listPokemon = document.querySelector('.list-pokemon')
console.log(pokemons[0])
console.log(listPokemon)
const colorPokemeon = ["#ebae34", "#f5b0d7", "#f5bf82", "#d2faac", "#d7c5d9"];
for (let i = 0; i < colorPokemeon.length; i++) {
    pokemons[i].style.color = colorPokemeon[i]
}

// Ajouter une class 
// element.classList(nom de la class)
//Enlever une class
//element.classList.remove(nom de la class)
//Basculer de class
//element.classList.toggle(nom de la class)

// SetTimeOut

//setTimeout(function(){
   // console.log("3 secondes se sont écoulées !")
//}, 3000)

// SetInterval

//setInterval(function(){
  //  console.log("Une seconde viens de passées !")
//}, 1000)

const timer = setTimeout(function (){
    console.log("3 secondes se sont écoulées !")
}, 3000)

clearTimeout(timer) //c'est plus interessant dans un événement

const interval = setInterval(function (){
    console.log("3 secondes se sont écoulées !")
}, 3000)

clearInterval(interval) //c'est plus interessant dans un événement

// TP LE SCROLL TAQUIN

const punchlines = [
  "Tu descends plus lentement qu’une mise à jour Windows 🐌",
  "Allez, on se réveille… le bas de la page va pas venir tout seul ! 😴",
  "Tu veux un café pour te motiver ou c’est une stratégie de flemme ? ☕",
  "Je pourrais tricoter un pull pendant que tu scrolles… 🧶",
  "C’est un concours de lenteur ou tu fais ça exprès ? 😅",
  "Encore un effort, c’est pas le Mont Everest non plus ⛰️",
  "Allez courage, même les tortues ont des objectifs ! 🐢",
  "Tu scrolles comme si tu voulais pas savoir la fin 📜",
  "Je vois plus de poussière que de progrès 👀",
  "On dirait que tu scrolles avec les coudes 🦾",
  "Si tu vas plus lentement, on va repartir en 2022… ⏳",
  "Il y a des glaciers qui fondent plus vite que toi 🌍",
  "Même une limace sous calmants serait déjà arrivée 🐌",
  "Tu veux qu’on t’applaudisse pour chaque pixel descendu ? 👏",
  "Tu scrolles en morse ou c’est ton style naturel ? 🧠",
  "Je me demande si t’as pas mis une brique sur la barre d’espace 🤔",
  "T’as le même rythme qu’un fax sous la pluie 📠",
  "On est sur une promenade digestive ou un vrai scroll ? 🍽️",
  "Tu vas finir par t'endormir avant d’y arriver 😴",
  "Il faut que je t’envoie une newsletter pour te motiver ? 📬",
  "Tu scrolles comme si tu testais chaque pixel à la main 🧐",
  "Courage, t’es à deux doigts d’arriver au milieu ! (ou pas...) 😇",
  "Même la barre de chargement d'Internet Explorer est jalouse de ta lenteur 💻",
  "Faut-il t’envoyer une carte au trésor pour trouver le bas ? 🗺️",
  "Si tu scrolles encore plus doucement, je vais devoir appeler ta maman 👩‍👦"
];

let intervalid = null;

// fonction qui va vérifier si nous sommes en bas de la page.
function isAtTheBottomOfThePage(){
    // window.innerHeight => correspond à la taille en pixel de votre écran
    // window.scrollY => la possition du scroll par rapport à la taille maximale de l'écran
    // document.body.scrollHeight => c'est nos 2000 vh converties en pixel
    // le -10 est une tolerence
    return window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
}

function startPunchlines() {
    if (intervalid === null){
        intervalid = setInterval(function(){
            if (! isAtTheBottomOfThePage()){ // tant qu'on est pas en bas de la page 
                // il doit m'envoyer une insulte au hasard parmis les lignes tableaux
                const punchline = punchlines [Math.floor (Math.random() * punchlines.length)];
                console.log(punchlines)
            }else{
                console.log("Super champion ta reussi !!!")
                // fonction qui arette le chrono
                stopPunchlines()
            }
        }, 1000)
    }
}

function stopPunchlines(){
    clearInterval(intervalid)
    intervalid = null;
}

startPunchlines();








