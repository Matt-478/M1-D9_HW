


const displayAllBingoCards = function() {

  let boardBoxContainer = document.querySelector(".board-box")

  for(let cardCountNumber = 1; cardCountNumber <= 76; cardCountNumber++ ){
    let newBingoCard = document.createElement("div")
    newBingoCard.innerText = cardCountNumber
    newBingoCard.classList.add("board-cell-general")

    boardBoxContainer.appendChild(newBingoCard)

  }
}

// Create a button to randomize a number from 1 to 76.
const randomizeNumber = function() {

  let button = document.querySelector("button")

  button.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 76) + 1 ;
    return console.log(randomNumber)
    // returns nothing on the first time and then adds two more on each press
  });

}


window.onload = function() {
  displayAllBingoCards()
}