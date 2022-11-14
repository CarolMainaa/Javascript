let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el") 
let sumEl = document.getElementById("sum-el")


function getRandomCard(){
   let randomNumber = Math.floor(Math.random()*13) + 1
   if (randomNumber > 10){
      return 10
   } else if (randomNumber === 1 ){
      return 11
   } else {
      return randomNumber
   }
}

function startGame() {
   let firstCard = getRandomCard()
   let secondCard =getRandomCard()
    isAlive = true
    cards = [firstCard, secondCard ]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
     cardEl.textContent = "Cards: "
     for (let i = 0; i < cards.length; i++){
      cardEl.textContent += cards[i] + " "
     }
     sumEl.textContent = "Sum: " + sum
     if (sum < 21) {
        message = "Do you want to draw a new card?"
     } 
     else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
     }
     else{
        message= "You're out of the game."
        isAlive = false
     }
     messageEl.textContent = message
 }

 function newCard() {
   if (isAlive === true && hasBlackjack === false) {  
    let card = getRandomCard() 
    sum += card
    cards.push(card)
    renderGame()
   }
 }

let castles = {
     locations :["nanyuki" , " nairobi"] ,
     isFree :false ,
     price : 4500 ,
     type : "Our castles are airbnb "
}
console.log(castles.isFree)
console.log(castles.locations[1])