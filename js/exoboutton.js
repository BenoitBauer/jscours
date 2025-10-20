let seconds = 5;

const btn = document.getElementById('btn-wait');
btn.textContent = `Attendez ${seconds} secondes...`;

const timerId = setInterval(() => {
  seconds--;

  if (seconds > 0) {
    btn.textContent = `Attendez ${seconds} seconde${seconds > 1 ? 's' : ''}...`;
  } else {
    clearInterval(timerId);
    btn.disabled = false;
    btn.classList.add('active');
    btn.textContent = 'Cliquez-moi !';
  }
}, 1000);

btn.addEventListener('click', () => {
  if (!btn.disabled) {
    alert('Bravo ! Vous avez patienté.');
  }
});
