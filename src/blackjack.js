
let cards = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6,
  7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q',
  'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];
//J=10,Q=10,K=10,A=11


let cards2 = [
  { suit: 'hearts', value: 2 },
  { suit: 'hearts', value: 3 },
  { suit: 'hearts', value: 4 },
  { suit: 'hearts', value: 5 },
  { suit: 'hearts', value: 6 },
  { suit: 'hearts', value: 7 },
  { suit: 'hearts', value: 8 },
  { suit: 'hearts', value: 9 },
  { suit: 'hearts', value: 10 },
  { suit: 'hearts', value: 'J' },
  { suit: 'hearts', value: 'Q' },
  { suit: 'hearts', value: 'K' },
  { suit: 'hearts', value: 'A' },
  { suit: 'diamonds', value: 2 },
  { suit: 'diamonds', value: 3 },
  { suit: 'diamonds', value: 4 }, 
  { suit: 'diamonds', value: 5 },
  { suit: 'diamonds', value: 6 },
  { suit: 'diamonds', value: 7 },
  { suit: 'diamonds', value: 8 },
  { suit: 'diamonds', value: 9 },
  { suit: 'diamonds', value: 10 },
  { suit: 'diamonds', value: 'J' },
  { suit: 'diamonds', value: 'Q' },
  { suit: 'diamonds', value: 'K' },
  { suit: 'diamonds', value: 'A' },
  { suit: 'spades', value: 2 },
  { suit: 'spades', value: 3 },
  { suit: 'spades', value: 4 },
  { suit: 'spades', value: 5 },
  { suit: 'spades', value: 6 },
  { suit: 'spades', value: 7 },
  { suit: 'spades', value: 8 },
  { suit: 'spades', value: 9 },
  { suit: 'spades', value: 10 },
  { suit: 'spades', value: 'J' },
  { suit: 'spades', value: 'Q' },
  { suit: 'spades', value: 'K' },
  { suit: 'spades', value: 'A' },
  { suit: 'clubs', value: 2 },
  { suit: 'clubs', value: 3 },
  { suit: 'clubs', value: 4 },
  { suit: 'clubs', value: 5 },
  { suit: 'clubs', value: 6 },
  { suit: 'clubs', value: 7 },
  { suit: 'clubs', value: 8 },
  { suit: 'clubs', value: 9 },
  { suit: 'clubs', value: 10 },
  { suit: 'clubs', value: 'J' },
  { suit: 'clubs', value: 'Q' },
  { suit: 'clubs', value: 'K' },
  { suit: 'clubs', value: 'A' }
]

function shuffleArray(array) {
  // Loop through the array from the end to the beginning
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index j between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));

    // Swap elements at indices i and j
    // This uses array destructuring for a concise swap
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Return the shuffled array (modified in place)
}
cards = shuffleArray(cards);


let gameon = true;
while (gameon === true) {
  //player gets 2 cards
  // let playerCard1 = cards[Math.floor(Math.random() * cards.length)];
  let playerCard1 = cards.pop();
  // let playerCard2 = cards[Math.floor(Math.random() * cards.length)];
  let playerCard2 = cards.pop();
  if (playerCard1 == 'J' || playerCard1 == 'Q' || playerCard1 == 'K') {
    playerCard1 = 10
  }
  if (playerCard2 == 'J' || playerCard2 == 'Q' || playerCard2 == 'K') {
    playerCard2 = 10
  }
  if (playerCard1 == 'A') {
    playerCard1 = 11
  }
  if (playerCard2 == 'A') {
    playerCard2 = 11
  }
  let playerTotal = playerCard1 + playerCard2;
  //dealer gets 2 cards
  // let dealerCard1 = cards[Math.floor(Math.random() * cards.length)];
  // let dealerCard2 = cards[Math.floor(Math.random() * cards.length)];
  let dealerCard1 = cards.pop();
  let dealerCard2 = cards.pop();

  if (dealerCard1 == 'J' || dealerCard1 == 'Q' || dealerCard1 == 'K') {
    dealerCard1 = 10
  }
  if (dealerCard2 == 'J' || dealerCard2 == 'Q' || dealerCard2 == 'K') {
    dealerCard2 = 10
  }
  if (dealerCard1 == 'A') {
    dealerCard1 = 11
  }
  if (dealerCard2 == 'A') {
    playerCard2 = 11
  }

  let dealerTotal = dealerCard1 + dealerCard2;

  alert(`
    Your cards are ${playerCard1} and ${playerCard2}. Your total is ${playerTotal}
    Dealer's card are ${dealerCard1} `);
  //determine winner

  let doYouWantToHit = true;
  while (doYouWantToHit === true && playerTotal < 21) {
    let playerHit = prompt('Do you want to hit or stay? (h/s)');
    if (playerHit.toLowerCase() === 'h') {
      // let newCard = cards[Math.floor(Math.random() * cards.length)];
      let newCard = cards.pop();
      if (newCard == 'J' || newCard == 'Q' || newCard == 'K') {
        newCard = 10
      }
      if (newCard == 'A') {
        newCard = 11
      }
      playerTotal += newCard;
      alert(`You drew a ${newCard}. Your total is now ${playerTotal}`);
    } else {
      doYouWantToHit = false;
      alert(`You chose to stay. Your total is ${playerTotal}`);
    }
  }
  while (playerTotal <= 21 && dealerTotal <= 21 && dealerTotal < playerTotal) {
    alert(`Dealer's total is ${dealerTotal}. Dealer hits.`);
    // let newCard = cards[Math.floor(Math.random() * cards.length)];
    let newDealerCard = cards.pop();
    if (newDealerCard == 'J' || newDealerCard == 'Q' || newDealerCard == 'K') {
      newDealerCard = 10
    }
    if (newDealerCard == 'A') {
      newDealerCard = 11
    }
    dealerTotal += newDealerCard;
    alert(`Dealer drew a ${newDealerCard}. Dealer total is now ${dealerTotal}`);
  }

  if (playerTotal > 21) {
    alert(`
    Your total is ${playerTotal}
    Dealer total is ${dealerTotal}
    You busted, Dealer wins`);
  } else if (dealerTotal > 21) {
    alert(`
    Your total is ${playerTotal}
    Dealer total is ${dealerTotal}
    Dealer busted, You win`);
  } else if (playerTotal > dealerTotal) {
    alert(`
    Your total is ${playerTotal}
    Dealer total is ${dealerTotal}
    You win`);
  } else if (dealerTotal > playerTotal) {
    alert(`
    Your total is ${playerTotal}
    Dealer total is ${dealerTotal}
    Dealer wins`);
  } else if (playerTotal === dealerTotal) {
    alert(`
    Your total is ${playerTotal}
    Dealer total is ${dealerTotal}
    its a tie`);
  }
  let quit = prompt('Do you want to continue True/False')
  if (quit.toLowerCase() === 'false') {
    gameon = false
  }
}









