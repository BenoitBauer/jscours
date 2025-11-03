const button = document.getElementById("generate");
const usersDiv = document.getElementById("users");
const loader = document.getElementById("loader");

button.addEventListener("click", function() {

  loader.classList.remove("hidden");
  usersDiv.innerHTML = "";

  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => {
      loader.classList.add("hidden");
      usersDiv.innerHTML = "";

      data.results.forEach(user => {
        fetch("https://api.adviceslip.com/advice?ts=" + Date.now() + "-" + Math.random())
          .then(res => res.json())
          .then(adviceData => {
            const advice = adviceData.slip.advice;
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
              <img src="${user.picture.large}" alt="Photo de ${user.name.first}">
              <h2>${user.name.first} ${user.name.last}</h2>
              <p>📧 ${user.email}</p>
              <p>📍 ${user.location.country}</p>
              <p>📞 ${user.phone}</p>
              <p class="quote">💬 "${advice}"</p>
            `;
            usersDiv.appendChild(card);
          });
      });
    })
    .catch(() => {
      loader.classList.add("hidden");
      usersDiv.innerHTML = "Erreur de chargement 😢";
    });
});
