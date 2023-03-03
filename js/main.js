/*----- constants -----*/
const RPS_LOOKUP = {
  r: "/imgs/rock.png",
  p: "/imgs/paper.png",
  s: "/imgs/scissors.png",
};
/*----- app's state (variables) -----*/
let scores;

let results;

let winner;

/*----- cached elements  -----*/
const pResultEl = document.getElementById("p-result");
const cResultEl = document.getElementById("c-result");

/*----- event listeners -----*/
document.querySelector("main").addEventListener("click", handleChoice);

/*----- functions -----*/
init();

function init() {
  scores = {
    p: 0,
    t: 0,
    c: 0,
  };
  results = {
    p: "r",
    c: "r",
  };
  winner = "t";
  render();
}

function handleChoice(evt) {
  // Guards
  if (evt.target.tagName !== "BUTTON") return;
  // Player has made a choice
  results.p = evt.target.innerText.toLowerCase();
  results.c = getRandomRPS();

  render();
}

function getRandomRPS() {}

function renderScores() {
  for (let key in scores) {
    const scoreEl = document.getElementById(`${key}-score`);
    scoreEl.innerText = scores[key];
  }
}
function renderResults() {
  pResultEl.src = RPS_LOOKUP[results.p];
  cResultEl.src = RPS_LOOKUP[results.c];
}

function render() {
  renderScores();
  renderResults();
}
