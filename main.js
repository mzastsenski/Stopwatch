const buttonStart = document.getElementById("button-start");
const buttonReset = document.getElementById("button-reset");
const buttonSave = document.getElementById("button-save");
const buttonRound = document.getElementById("button-round");
const timer2 = document.getElementById("timer2");
const time = document.getElementById("time");
const time2 = document.getElementById("time2");
const round = document.getElementById("round");
const results = document.getElementById("results");
let seconds = localStorage.seconds ? localStorage.seconds : "00";
let msec = localStorage.msec ? localStorage.msec : "00";
let mins = localStorage.mins ? localStorage.mins : "00";
let seconds2 = localStorage.seconds2 ? localStorage.seconds2 : "00";
let msec2 = localStorage.msec2 ? localStorage.msec2 : "00";
let mins2 = localStorage.mins2 ? localStorage.mins2 : "00";
let countRound = localStorage.countRound
  ? parseInt(localStorage.countRound)
  : 0;
let count = localStorage.count ? localStorage.count : 0;
let stoped = localStorage.stoped ? localStorage.stoped : true;
let interval;
time.innerHTML = localStorage.time ? localStorage.time : "00:00:00";
time2.innerHTML = localStorage.time2 ? localStorage.time2 : "00:00:00";
round.innerHTML = localStorage.countRound
  ? `Round ${countRound + 1}:`
  : "Round 1:";
results.innerHTML = localStorage.results ? localStorage.results : null;

if (stoped == "false") {
  buttonStart.innerHTML = "Stop";
  timer2.style.display = "flex";
  interval = setInterval(startTimer, 10);
}
if (time2.innerHTML != "00:00:00") {
  timer2.style.display = "flex";
}

buttonStart.addEventListener("click", () => {
  if (stoped == true || stoped == "true") {
    clearInterval(interval);
    stoped = false;
    buttonStart.innerHTML = "Stop";
    timer2.style.display = "flex";
    interval = setInterval(startTimer, 10);
  } else {
    clearInterval(interval);
    stoped = true;
    buttonStart.innerHTML = "Start";
  }
});

buttonSave.addEventListener("click", () => {
  //if (!stoped) {
  if (time.innerHTML != "00:00:00") {
    count++;
    let newTime = document.createElement("p");
    newTime.innerHTML = `${count}: &nbsp${mins}:${seconds}:${msec}`;
    // results.appendChild(newTime);
    results.insertBefore(newTime, results.firstElementChild);
  }
});
buttonRound.addEventListener("click", () => {
  if (time2.innerHTML != "00:00:00") {
    countRound++;
    let newRound = document.createElement("p");
    newRound.innerHTML = `Round ${countRound}: ${mins2}:${seconds2}:${msec2} &nbsp&nbsp&nbsp Total: ${mins}:${seconds}:${msec}`;
    msec2 = "00";
    seconds2 = "00";
    mins2 = "00";
    round.innerHTML = `Round  ${countRound + 1}:`;
    results.insertBefore(newRound, results.firstElementChild);
  }
});

buttonReset.addEventListener("click", () => {
  clearInterval(interval);
  msec = "00";
  seconds = "00";
  mins = "00";
  msec2 = "00";
  seconds2 = "00";
  mins2 = "00";
  results.innerHTML = null;
  stoped = true;
  buttonStart.innerHTML = "Start";
  countRound = 0;
  count = 0;
  round.innerHTML = "Round 1:";
  timer2.style.display = "none";
  time.innerHTML = `${mins}:${seconds}:${msec}`;
  time2.innerHTML = `${mins2}:${seconds2}:${msec2}`;
  localStorage.clear();
});

function startTimer() {
  msec = parseInt(msec);
  seconds = parseInt(seconds);
  mins = parseInt(mins);
  msec++;

  if (msec <= 9) {
    msec = "0" + msec;
  }

  if (msec > 99) {
    seconds++;
    msec = 0;
    msec = "0" + msec;
  }
  if (seconds <= 9) {
    seconds = "0" + seconds;
  }
  if (seconds > 59) {
    mins++;
    seconds = 0;
  }
  if (mins <= 9) {
    mins = "0" + mins;
  }
  if (mins == 60) {
    clearInterval(interval);
  }
  ////////   Timer 2 ///////

  msec2 = parseInt(msec2);
  seconds2 = parseInt(seconds2);
  mins2 = parseInt(mins2);
  msec2++;

  if (msec2 <= 9) {
    msec2 = "0" + msec2;
  }

  if (msec2 > 99) {
    seconds2++;
    msec2 = 0;
    msec2 = "0" + msec2;
  }
  if (seconds2 <= 9) {
    seconds2 = "0" + seconds2;
  }
  if (seconds2 > 59) {
    mins2++;
    seconds2 = 0;
  }
  if (mins2 <= 9) {
    mins2 = "0" + mins2;
  }
  time.innerHTML = `${mins}:${seconds}:${msec}`;
  time2.innerHTML = `${mins2}:${seconds2}:${msec2}`;
}

window.addEventListener("unload", () => {
  localStorage.setItem("time", time.innerHTML);
  localStorage.setItem("time2", time2.innerHTML);
  localStorage.setItem("results", results.innerHTML);
  localStorage.setItem("mins", mins);
  localStorage.setItem("seconds", seconds);
  localStorage.setItem("msec", msec);
  localStorage.setItem("mins2", mins2);
  localStorage.setItem("seconds2", seconds2);
  localStorage.setItem("msec2", msec2);
  localStorage.setItem("countRound", countRound);
  localStorage.setItem("count", count);
  localStorage.setItem("stoped", stoped);
});
