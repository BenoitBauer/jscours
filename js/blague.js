const language = document.getElementById("language");
const typeSelect = document.getElementById("type");
const amountSelect = document.getElementById("amount");
const checkboxes = document.querySelectorAll(".filters input");
const button = document.getElementById("generate");
const jokes = document.getElementById("jokes");

button.addEventListener("click", function () {

  jokes.innerHTML = "";

  let url = "https://v2.jokeapi.dev/joke/Any?";
  url += "lang=" + language.value;
  url += "&amount=" + amountSelect.value;
  url += "&type=" + typeSelect.value;

  let exclusions = "";
  checkboxes.forEach(function (cb) {
    if (cb.checked) {
      exclusions += cb.value + ",";
    }
  });

  if (exclusions !== "") {
    exclusions = exclusions.slice(0, -1);
    url += "&blacklistFlags=" + exclusions;
  }

  console.log("URL =>", url);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      if (data.jokes) {
        data.jokes.forEach(function (joke) {
          afficherBlague(joke);
        });
      } else {
        afficherBlague(data);
      }
    })
    .catch(function () {
      jokes.innerHTML = "Erreur...";
    });
});

function afficherBlague(joke) {
  const div = document.createElement("div");
  div.classList.add("joke");

  if (joke.type === "single") {
    div.innerHTML = joke.joke;
  } else {
    div.innerHTML = joke.setup + "<br>" + joke.delivery;
  }

  jokes.appendChild(div);
}
