
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];


//DOM Variables, also known as webpage variables
let textArea = document.getElementById('text-area'),
    newGameButton = document.getElementById('new-game-button'),
    hitButton = document.getElementById('hit-button'),
    stayButton = document.getElementById('stay-button');

//Game variables
let gameStarted = false,
    gameOver= false,
    playerWon = false,
    dealerCards =[],
    playerCards= [],
    dealerScore = 0,
    playerScore = 0,
    deck =[];

hitButton.style.display ='none';
stayButton.style.display = 'inline';
showStatus();
newGameButton.addEventListener('click', function(){
  gameStarted = true;
  gameOver=false;
  playerWon=false;

  deck = createDeck();
  shuffleDeck(deck);
  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];
  newGameButton.style.display='none';
  hitButton.style.display= 'inline';
  stayButton.style.display='inline';

  showStatus(gameStarted);
  updateScores();
  let dealerCardString='';
  for (let i=0; i<dealerCards.length; i++){
    textArea.innerText += '\n' + getCardString(dealerCards[i]) + '\n'
  }
  textArea.innerText += '\n Dealer Score: (' + dealerScore + ')\n';

  let playerCardString='';
  for (let i=0; i<playerCards.length; i++){
    textArea.innerText += '\n' + getCardString(playerCards[i]) + '\n'
  }

  textArea.innerText += '\n Player score: (' + playerScore + ')\n';

});
newGameButton.addEventListener('click', function(){

});
function createDeck() {
  let deck = [];
  for (let suitIdx=0; suitIdx<suits.length; suitIdx++){
    for (let valueIdx=0; valueIdx<values.length; valueIdx++){
      let card= {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck){
 for (let i = deck.length-1; i>0; i--){
   const j = Math.floor(Math.random()*(i+1));
   [deck[i], deck[j]] = [deck[j], deck[i]];
 }

}
function getNextCard(){
  return deck.shift();
}
function getCardString(card){
  return card.value + ' of ' + card.suit;
}

function updateScores(){
  dealerScore= getScore(dealerCards);
  playerScore= getScore(playerCards);

}

function getValue(card){
  switch(card.value) {
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
     return 7;
    case 'Eight':
      return 8;
    case 'Nine':
       return 9;
    default:
    return 10;
    // code block
  }
}

function getScore(cardArray){
  let score=0;

  for (let i=0; i<cardArray.length; i++){
    score +=getValue(cardArray[i]);
  }
  return score;

}

function showStatus(){
  if(!gameStarted){
    textArea.innerText = "welcome to BLACKJACK";
    return;
  }
//Dealer Cards


//player cards


  //Deck
//  for (let i=0; i<deck.length; i++){
  //  textArea.innerText += '\n' + getCardString(deck[i]);
//  }
}
