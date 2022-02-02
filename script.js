const tiles = document.querySelectorAll(".tile");

tiles.forEach((tile) =>
  tile.addEventListener("click", function () {
    tile.innerHTML = "x";
  })
);
const Gameboard = (() => {
  const gameboard = ["", "", "", "", "", "", "", "", ""];

  return { gameboard };
})();

const Players = (() => {
  const playerOne = "x";
  const playerTwo = "o";
  let currentPlayer;

  return { playerOne, playerTwo, currentPlayer };
})();

function changeTurn() {
  if (Players.currentPlayer === undefined) {
    Players.currentPlayer = Players.playerOne;
  } else if (Players.currentPlayer === Players.playerOne) {
    Players.currentPlayer = Players.playerTwo;
  } else if (Players.currentPlayer === Players.playerTwo) {
    Players.currentPlayer = Players.playerOne;
  }
}
