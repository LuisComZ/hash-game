const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector("[data-board]")

let isCircleTurn

function startGame() {
  for (const cell of cellElements) {
    cell.addEventListener("click", handleClick, { once: true })
  }

  isCircleTurn = false
  board.classList.add("x")
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
  swapTurns()
}

startGame()