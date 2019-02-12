
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
    playercards= [],
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
  showStatus();

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

function showStatus(){
  if(!gameStarted){
    textArea.innerText = "welcome to BLACKJACK";
    return;
  }
  for (let i=0; i<deck.length; i++){
    textArea.innerText += '\n' + getCardString(deck[i]);
  }
}
