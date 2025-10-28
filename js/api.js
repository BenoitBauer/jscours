// convertin un json en object en javascript

// on va simuler un fichier JSON 

const json = '{"nom" : "Jean-Michel", "age": 30}';
// on convertis la string en JSON en objet javascript
const obj = JSON.parse(json)
console.log(obj.nom)

// convertin un object javascript en JSON

const user = {
    nom : "Jean-Bon",
    age : 12,
}

const jsonObj = JSON.stringify(user)
console.log(jsonObj)


// LES PROMISES
// ecriture standard

//const myPromise = new Promise((resolve, reject) => {
    //setTimeout(() => {
    //    isFine = true
    //    if(isFine){
     //       resolve("Succes's !!!")
     //   }else{
    //        reject('erreur !!!')
    //    }
 //   }, 2000)
// })

//myPromise
 //   .then(result => console.log(result)) // si tout va bien
 //   .catch(error => console.log(error)) // si une erreur
  //  .finally(() => console.log("c'est fini")) // affiche quoi qu'il arrive

    // Exercise : Imaginon qu'on lance une pièces. Il à 50% de chance de tomber sur pile et il à 50% de chance de tomber sur.
    // Si il fait pile alors c'est une reussite, si il fait face c'est une erreur impardonable.
    // pour simuler cette promise on utilisera un set time out de 1 seconde

    // si ça reussi on affiche un console.log(), si ça rate ca affiche console.error()

function lancerPileOuFace() {
    return new Promise((resolve, reject) => {
        // délai de 1 seconde pour simuler un traitement asynchrone
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(" Pile !");
            } else {
                reject(" Face !");
            }
        }, 1000);
    });
}

lancerPileOuFace()
    .then(resultat => {
        console.log("Résultat :", resultat); //  Pile !
        return lancerPileOuFace()
    })
    .then(r => {
        console.log("Deuxième lancer : " + r);
    })
    .catch(erreur => {
        console.error("Erreur :", erreur);   //  Face !
    })
    .finally(() => {
        console.log("Le lancer est terminé.");
    });


// AJAX
// pour faire un ajax de manière moderne on utilise l'API fetch() 

//const list = document.getElementById("huge-list")

//fetch("https://jsonplaceholder.typicode.com/posts")
//.then(response => response.json())
//.then(data => {
  //  data.forEach( d => {
    //    const li = document.createElement("li")
      //  li.innerText = d.title;
        //list.appendChild(li)
  //  })
// })

const fakeHtml = "dsdsjkmfsdmkhdfbjfsdmskhvdfvmsfkdjbfmksfddsfhbsfd9+4https://a.travel-assets.com/travel-assets-manager/destu-41418/Hero_Desktop.jpeg?"

const regex = /https?:\/\/[^"'\s>]+?.(?:jpg|jpeg|png|gif|webp|svg)/g

const found = fakeHtml.match(regex)
console.log(found)

const aled = document.getElementById("aled")

fetch("https://www.lacoste.com/fr/?utm_source=google&utm_medium=cpc&utm_campaign=%5BFR%5DSRC_BRA_Brand_Trademark&utm_id=55114290&gad_source=1&gad_campaignid=55114290&gclid=CjwKCAjw04HIBhB8EiwA8jGNbVOvBXx6ICaWcQDOS_QTCXTDs4ZTZAA7BhrUs9fTiDLvYbTbU6tqyBoCGa4QAvD_BwE")
.then(resultat => resultat.text())
.then(data => {
    console.log(data)
    const images = data.match(regex)
    console.log(images)
    images.forEach( img => {
        const imgEl = document.createElement("img")
        imgEl.src = img
        aled.appendChild(imgEl)
    })
});




