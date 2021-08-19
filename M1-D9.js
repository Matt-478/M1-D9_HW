


const displayAllBingoCards = function() {

  let boardBoxContainer = document.querySelector(".board-box")

  for(let cardCountNumber = 1; cardCountNumber <= 76; cardCountNumber++ ){
    let newBingoCard = document.createElement("div")
    newBingoCard.innerText = cardCountNumber
    newBingoCard.classList.add("board-cell-general")

    boardBoxContainer.appendChild(newBingoCard)

  }
}


window.onload = function() {
  displayAllBingoCards()
}