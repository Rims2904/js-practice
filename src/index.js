console.log('this works')

const searchButton = document.querySelector('.searchbutton')

searchButton.addEventListener('click', function() {
    const searchBar = document.querySelector('.search-bar')
    const searchTerm = searchBar.value
    const url = 'https://www.google.com/search?q=' + searchTerm
    window.location.href = url
} );


const cartierbutton = document.querySelector('img')

cartierbutton.addEventListener('click', function() {
    const url = 'https://www.cartier.com/en-us/'
    window.location.href = url
} );

const logo = document.querySelector('.logo')

logo.addEventListener('pointerenter', function() { 
    logo.style.color = 'red'
});

logo.addEventListener('pointerleave', function() {
    logo.style.color = 'white'
});


const container = document.querySelector('.container')



let users = [{ name: 'Rima', age: 25, city: 'New York' }, { name: 'Alice', age: 30, city: 'Los Angeles' }, { name: 'Bob', age: 22, city: 'Chicago' }]

users.forEach(function(user) {  
    let userDiv = document.createElement('div')
    userDiv.classList.add('user-card')

    let name = document.createElement('h2')
    name.textContent = user.name
    userDiv.appendChild(name)

    let age = document.createElement('p')
    age.textContent = 'Age: ' + user.age
    userDiv.appendChild(age)

    let city = document.createElement('p')
    city.textContent = 'City: ' + user.city
    userDiv.appendChild(city)

    container.appendChild(userDiv)
});


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
cards = shuffleArray(cards2);


cards2.forEach(function(card) {
    let cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    let value = document.createElement('h2')
    value.textContent = card.value
    cardDiv.appendChild(value)

    let color = 'black'
    if (card.suit === 'hearts' || card.suit === 'diamonds') {
        color = 'red'
    }
    cardDiv.style.color = color 

    let suit = document.createElement('p')
    suit.textContent = card.suit
    cardDiv.appendChild(suit)

    container.appendChild(cardDiv)
});


// let myhtml = document.createElement('h1')
// myhtml.textContent = 'Hello World'
// container.append(myhtml)

