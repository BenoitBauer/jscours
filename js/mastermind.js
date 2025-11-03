const COLORS = ['red', 'green', 'blue', 'yellow', 'orange', 'purple'];

const palette = document.getElementById('palette');
const currentRow = document.getElementById('current-row');
const history = document.getElementById('history');
const feedback = document.getElementById('feedback');
const message = document.getElementById('message');

const btnValidate = document.getElementById('btn-validate');
const btnClear = document.getElementById('btn-clear');
const btnRestart = document.getElementById('btn-restart');

let secret = [];
let currentColors = [];
let tries = 0;

function createPalette() {
  COLORS.forEach(color => {
    const div = document.createElement('div');
    div.className = 'color-btn';
    div.style.backgroundColor = color;
    div.addEventListener('click', function () {
      if (currentColors.length < 4) {
        currentColors.push(color);
        refreshCurrentRow();
      }
    });
    palette.appendChild(div);
  });
}

function createCurrentRow() {
  currentRow.innerHTML = '';
  for (let i = 0; i < 4; i++) {
    const s = document.createElement('div');
    s.className = 'slot';
    currentRow.appendChild(s);
  }
}

function refreshCurrentRow() {
  const slots = currentRow.querySelectorAll('.slot');
  slots.forEach((slot, index) => {
    if (currentColors[index]) {
      slot.style.backgroundColor = currentColors[index];
      slot.style.border = '2px solid #333';
    } else {
      slot.style.backgroundColor = 'white';
      slot.style.border = '2px dashed #999';
    }
  });
}

function generateSecret() {
  secret = [];
  for (let i = 0; i < 4; i++) {
    const r = Math.floor(Math.random() * COLORS.length);
    secret.push(COLORS[r]);
  }
  console.log('secret = ', secret);
}

btnClear.addEventListener('click', function () {
  currentColors = [];
  refreshCurrentRow();
});

btnRestart.addEventListener('click', function () {
  currentColors = [];
  refreshCurrentRow();
  history.innerHTML = '';
  feedback.innerHTML = '';
  message.textContent = '';
  tries = 0;
  generateSecret();
});

btnValidate.addEventListener('click', function () {
  tries++;

  addToHistory(currentColors);

  const res = checkColors(currentColors, secret);
  addFeedback(res.black, res.white);

  if (res.black === 4) {
    message.textContent = 'Gagné.';
  } else if (tries >= 10) {
    message.textContent = 'Perdu. Code = ' + secret.join(', ');
  }

  currentColors = [];
  refreshCurrentRow();
});

function addToHistory(colors) {
  const row = document.createElement('div');
  row.className = 'history-row';
  for (let i = 0; i < 4; i++) {
    const h = document.createElement('div');
    h.className = 'history-slot';
    if (colors[i]) {
      h.style.backgroundColor = colors[i];
    }
    row.appendChild(h);
  }
  history.appendChild(row);
}

function addFeedback(black, white) {
  const fb = document.createElement('div');
  fb.className = 'feedback-row';

  for (let i = 0; i < black; i++) {
    const d = document.createElement('div');
    d.className = 'fb-pin black';
    fb.appendChild(d);
  }

  for (let i = 0; i < white; i++) {
    const d = document.createElement('div');
    d.className = 'fb-pin white';
    fb.appendChild(d);
  }

  feedback.appendChild(fb);
}

function checkColors(guess, secret) {
  let black = 0;
  let white = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      black++;
    } else if (secret.includes(guess[i])) {
      white++;
    }
  }

  return { black, white };
}

createPalette();
createCurrentRow();
generateSecret();
