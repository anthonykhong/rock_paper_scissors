/*----- constants -----*/
const RPS_LOOKUP = {
  r: { img: "/imgs/rock.png", beats: "s" },
  p: { img: "/imgs/paper.png", beats: "r" },
  s: { img: "/imgs/scissors.png", beats: "p" },
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
  winner = getWinner();
  scores[winner] += 1;
  render();
}

function getWinner() {
  if (results.p === results.c) return "t";
  return RPS_LOOKUP[results.p].beats === results.c ? "p" : "c";
}

function getRandomRPS() {
  const rps = Object.keys(RPS_LOOKUP);
  const rndIdx = Math.floor(Math.random() * rps.length);
  return rps[rndIdx];
}

function renderScores() {
  for (let key in scores) {
    const scoreEl = document.getElementById(`${key}-score`);
    scoreEl.innerText = scores[key];
  }
}
function renderResults() {
  pResultEl.src = RPS_LOOKUP[results.p].img;
  cResultEl.src = RPS_LOOKUP[results.c].img;
}

function render() {
  renderScores();
  renderResults();
}
