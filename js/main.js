/*----- constants -----*/

/*----- app's state (variables) -----*/
let scores;

let results;

let winner;

/*----- cached elements  -----*/

/*----- event listeners -----*/

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

function renderScores() {
  for (let key in scores) {
    const scoreEl = document.getElementById(`${key}-score`);
    scoreEl.innerText = scores[key];
  }
}
function renderResults() {}

function render() {
  renderScores();
  renderResults();
}
