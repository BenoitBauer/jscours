var btn  = document.getElementById('btn');
var menu = document.getElementById('menu');

menu.style.display = 'none';

btn.onclick = function () {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
};
