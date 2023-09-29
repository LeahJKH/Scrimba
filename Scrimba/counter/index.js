let timerHome = document.getElementById("timerH");
let timerGuest = document.getElementById("timerG");
let foulCounterL = document.getElementById("foulCL");
let foulCounterR = document.getElementById("foulCR");

let homePoints = 0;
let guestPoints = 0;
let foulHome = 0;
let foulGuest = 0;

timerHome.textContent = 0;
timerGuest.textContent = 0;
foulCounterL.textContent = 0;
foulCounterR.textContent = 0;

function homeAddOne() {
  homePoints += 1;
  timerHome.textContent = homePoints;
}
function homeAddTwo() {
  homePoints += 2;
  timerHome.textContent = homePoints;
}
function homeAddThree() {
  homePoints += 3;
  timerHome.textContent = homePoints;
}
function guestAddOne() {
  guestPoints += 1;
  timerGuest.textContent = guestPoints;
}
function guestAddTwo() {
  guestPoints += 2;
  timerGuest.textContent = guestPoints;
}
function guestAddThree() {
  guestPoints += 3;
  timerGuest.textContent = guestPoints;
}
function restarter() {
  homePoints = 0;
  guestPoints = 0;
  foulGuest = 0;
  foulHome = 0;
  timerHome.textContent = 0;
  timerGuest.textContent = 0;
  foulCounterL.textContent = 0;
  foulCounterR.textContent = 0;
}
function foulCounterHome() {
  foulHome += 1;
  foulCounterL.textContent = foulHome;
}
function foulCounterGuest() {
  foulGuest += 1;
  foulCounterL.textContent = foulGuest;
}
