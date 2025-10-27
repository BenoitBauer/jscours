const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const alarmHoursEl = document.getElementById("alarm-hours");
const alarmMinutesEl = document.getElementById("alarm-minutes");
const alarmText = document.getElementById("alarm-text");
const toggle = document.getElementById("toggle");

let hours = 0;
let minutes = 0;
let alarmH = 0;
let alarmM = 0;
let alarmOn = false;

function updateClock() {
  minutes++;
  if (minutes >= 60) {
    minutes = 0;
    hours = (hours + 1) % 24;
  }

  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");

  if (alarmOn && hours === alarmH && minutes === alarmM) {
    alarmText.style.display = "block";
  }
}

function updateAlarmDisplay() {
  alarmHoursEl.textContent = String(alarmH).padStart(2, "0");
  alarmMinutesEl.textContent = String(alarmM).padStart(2, "0");
}

hoursEl.onclick = () => {
  hours = (hours + 1) % 24;
  hoursEl.textContent = String(hours).padStart(2, "0");
};

minutesEl.onclick = () => {
  minutes = (minutes + 1) % 60;
  minutesEl.textContent = String(minutes).padStart(2, "0");
};

alarmHoursEl.onclick = () => {
  alarmH = (alarmH + 1) % 24;
  updateAlarmDisplay();
};

alarmMinutesEl.onclick = () => {
  alarmM = (alarmM + 1) % 60;
  updateAlarmDisplay();
};

toggle.onclick = () => {
  alarmOn = !alarmOn;
  toggle.textContent = alarmOn ? "ALARME ACTIVÉE 🔔" : "ALARM !!!!";
  if (!alarmOn) alarmText.style.display = "none";
};

updateAlarmDisplay();
setInterval(updateClock, 1000);

