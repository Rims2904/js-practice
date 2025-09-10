function showOutput(message) {
    document.getElementById('output').innerHTML = message;
}


let greeting = (name) => {
    return `Hello, ${name}!`;
}


 let flipacoin = (num) => {
 let options = ['heads','tails'];
 let heads = 0;
 let tails = 0;
 for (let i = 0; i < num; i++ ) {
  let flip = options[Math.floor(Math.random ()* 2)]
  if (flip === 'heads') {
    heads++
  } else {
    tails++
  }
 }
 alert (`you fliped ${heads} heads and ${tails} tails`)
  }


 let playrps = () => {
  let options = ['r','p','s'];
  let computerinput = options [Math.floor(Math.random ()* 3)]
  let userinput = prompt ('please enter r,p,s')
  if (userinput !== 'r' && userinput !== 'p' && userinput !== 's') {
    return;
  }
  if (userinput === computerinput) {
  alert (`you picked ${userinput} && computerpicked ${computerinput} you tied`)
  } else if (userinput == 'r' && computerinput == 's') {
    alert (`you picked ${userinput} && computer picked ${computerinput} you win`)
  } else if (userinput == 's' && computerinput == 'p') {
    alert (`you picked ${userinput} && computer picked ${computerinput} you win`)
  } else if (userinput == 'p' && computerinput == 'r') {
    alert (`you picked ${userinput} && computer picked ${computerinput} you win`)
  } else {
    alert (`you picked ${userinput} && computer picked ${computerinput} you lose`)
  }

  }

  let add = (a, b) => a + b;

document.addEventListener('DOMContentLoaded', () => {
    showOutput('DOM fully loaded and parsed');
    showOutput(greeting('world'))
    // flipacoin(10)
    // playrps()
    // Add more function calls here as needed

    showOutput(add(2, 3)); // Example usage of add function
    console.log('Add function result:', add(2, 3));
    console.log('something else')


});