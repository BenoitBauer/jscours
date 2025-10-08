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

