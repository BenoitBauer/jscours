const bouton = document.getElementById("generer");
const resultat = document.getElementById("resultat");
const longueurInput = document.getElementById("longueur");

function genererMotDePasse() {
  const maj = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const min = "abcdefghijklmnopqrstuvwxyz";
  const chiffres = "0123456789";
  const speciaux = "!@#$%^&*?";
  const tous = maj + min + chiffres + speciaux;

  const longueur = parseInt(longueurInput.value);

  let mot = "";
  mot += maj[Math.floor(Math.random() * maj.length)];
  mot += min[Math.floor(Math.random() * min.length)];
  mot += chiffres[Math.floor(Math.random() * chiffres.length)];
  mot += speciaux[Math.floor(Math.random() * speciaux.length)];

  while (mot.length < longueur) {
    mot += tous[Math.floor(Math.random() * tous.length)];
  }

  resultat.textContent = mot;
}

bouton.onclick = genererMotDePasse;
