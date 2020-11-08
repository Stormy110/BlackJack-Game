let dealButton = document.querySelector('#deal-button')
let playerHand = document.querySelector('#player-hand')
let dealerHand = document.querySelector('#dealer-hand')

const suits = ['clubs', 'diamonds', 'hearts', 'spades']
const values = ['ace',2,3,4,5,6,7,8,9,10,'jack', 'queen','king']

const funct1 = function(){
  let spade2 = document.createElement('img')
  spade2.src = '/images/2_of_spades.png'
  playerHand.append(spade2)
}
const funct2 = function(){
  let spade2 = document.createElement('img')
  spade2.src = '/images/2_of_spades.png'
  dealerHand.append(spade2)
}
const funct3 = function(){
  funct1()
  funct2()
  funct1()
  funct2()
}
click = 0
dealButton.addEventListener("click", funct3)



/*if (click % 2 == 0){
  playerHand.append(spade2)
} else {
  dealerHand.append(spade2)
}
click += 1*/
  



/*window.addEventListener('DOMContentLoaded', function() {
//Execute after page//
})*/