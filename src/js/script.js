const cellElements = document.querySelectorAll(".cell")
const board = document.querySelector(".board")
const winning = document.querySelector(".winning")
const winningMessage = document.querySelector(".message")
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
let isCircleTurn

function startGame() {
  for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true })
  }

  isCircleTurn = false
  board.classList.add("x")
}

function endGame (isDraw) {
  if (isDraw) {
    winningMessage.innerText = "DRAW!"
  } else {
    winningMessage.innerText = isCircleTurn ? '"O" WON THE GAME!' : '"X" WON THE GAME!'
  }

  winning.classList.add("show-winning-message")
}

function checkForWin (currentPlayer) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentPlayer)
    })
  })
}

function placeMark(cell, classToAdd) {
  cell.classList.add(classToAdd)
}

function swapTurns () {
  isCircleTurn = !isCircleTurn

  board.classList.remove("circle")
  board.classList.remove("x")

  if (isCircleTurn) {
    board.classList.add("circle")
  } else {
    board.classList.add("x")
  }
}

function handleClick(e) {
  const cell = e.target
  const classToAdd = isCircleTurn ? "circle" : "x"

  placeMark(cell, classToAdd)

  const isWin = checkForWin(classToAdd)
  if (isWin) {
    endGame(false)
  }

  swapTurns()
}

startGame()