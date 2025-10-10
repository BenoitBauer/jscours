const add = document.getElementById("add");
const remove = document.getElementById("remove");
const color = document.getElementById("color");
const container = document.getElementById("container");
const patateBtn = document.getElementById("patate-btn");
const patateState = document.getElementById("patate-state");

let modePatate = false;

patateBtn.addEventListener("click", function() {
    modePatate = !modePatate;
    patateBtn.classList.toggle("active", modePatate);
    patateState.textContent = modePatate ? "ON" : "OFF";
});

add.addEventListener("click", function() {
    const div = document.createElement("div");
    div.className = "box";

    if (modePatate) {
        const random = Math.floor(Math.random() * 1000) + 2;
        div.textContent = `${random} patates `;
        const img = document.createElement("img");
        img.src = "https://th.bing.com/th/id/R.95dc5a088f741149ff0c621c51425b93?rik=vnDwf9FTIwTOIw&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1975066%2fimages%2fo-PATATA-facebook.jpg&ehk=VFVzJFyv5f8JR1tFsV8IbadWNVWueJUyFr1TkVjBrsk%3d&risl=&pid=ImgRaw&r=0";
        img.alt = "Une belle grosse patate !";
        img.style.width = "40px";
        img.style.height = "auto";

        div.appendChild(img);
    } else {
        div.textContent = "Nouvel élément";
    }

    container.appendChild(div);
});

remove.addEventListener("click", function() {
    const last = container.lastElementChild;
    if (last) {
        last.remove();
    }
});

color.addEventListener("click", function() {
    const first = container.firstElementChild;
    if (first) {
        first.style.backgroundColor = "crimson";
        first.style.color = "white";
    }
});

