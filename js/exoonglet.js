let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

let content1 = document.getElementById("content1");
let content2 = document.getElementById("content2");
let content3 = document.getElementById("content3");

content1.style.display = "block";
content2.style.display = "none";
content3.style.display = "none";

tab1.onclick = function() {
  tab1.classList.add("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");

  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
};

tab2.onclick = function() {
  tab2.classList.add("active");
  tab1.classList.remove("active");
  tab3.classList.remove("active");

  content2.style.display = "block";
  content1.style.display = "none";
  content3.style.display = "none";
};

tab3.onclick = function() {
  tab3.classList.add("active");
  tab1.classList.remove("active");
  tab2.classList.remove("active");

  content3.style.display = "block";
  content1.style.display = "none";
  content2.style.display = "none";
};
