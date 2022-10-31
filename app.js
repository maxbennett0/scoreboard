let homeScore = 0
let awayScore = 0

function changeHomeOne() {
  homeScore += 1
  console.log(homeScore)
  drawBoard()
}

function changeHomeThree() {
  homeScore += 3
  drawBoard()
}

function changeAwayOne() {
  awayScore += 1
  console.log(awayScore)
  drawBoard()
}

function changeAwayThree() {
  awayScore += 3
  drawBoard()
}

function resetBoard() {
  homeScore = 0
  awayScore = 0
  drawBoard()
}

function drawBoard() {
  let homeBoard = document.getElementById('homeScore')
  let awayBoard = document.getElementById('awayScore')
  console.log(homeBoard)
  console.log(awayBoard)
  homeBoard.innerText = homeScore
  awayBoard.innerText = awayScore
}