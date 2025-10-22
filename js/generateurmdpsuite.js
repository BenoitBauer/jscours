const bouton = document.getElementById("generer");
const resultat = document.getElementById("resultat");
const input = document.getElementById("minLength");

function genererMotDePasse() {
  const consonnes = "bcdfghjklmnpqrstvwxyz";
  const voyelles = "aeiouy";
  const speciaux = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  let motDePasse = "";
  const nbMots = parseInt(input.value) || 7;

  for (let w = 0; w < nbMots; w++) {
    let mot = "";
    const tailleMot = Math.random() < 0.5 ? 5 : 6;

    for (let i = 0; i < tailleMot; i++) {
      if (i % 2 === 0) mot += consonnes[Math.floor(Math.random() * consonnes.length)];
      else mot += voyelles[Math.floor(Math.random() * voyelles.length)];
    }

    motDePasse += mot;

    if (w < nbMots - 1) {
      for (let i = 0; i < 3; i++) {
        motDePasse += speciaux[Math.floor(Math.random() * speciaux.length)];
      }
    }
  }

  resultat.textContent = motDePasse;
  console.log("Mot de passe généré :", motDePasse);
}

bouton.addEventListener("click", genererMotDePasse);


