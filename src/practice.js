// // const actualSalesadsf = [1500, 865, 3450, 5500, 2500];

// // function calculateprofit(sales) {
// //   const taxRate = 0.25;
// //   return sales.map(sale => {
// //     let profit = sale * taxRate
// //     if (profit < 500) {
// //         return 'not enough money - $' + profit
// //     } else {
// //         return 'good profit - $' + profit 
// //     }
// //   });
// // }

// // calculateprofit(actualSalesasdf)


// const names = ['moksh', 'kinjal', 'rima'];

// function greetPeople(names) {
//     return names.map(name => '1 ' + name);


// }

// greetPeople(names)





// // function checkDiscount(prices) {
// //   const discountRate = 0.1; // 10% discount
// //   return prices.map(price => {
// //     let discount = price * discountRate;
// //     if (discount < 20) {
// //       return 'small discount - $' + discount;
// //     } else {
// //       return 'big discount - $' + discount;
// //     }
// //   });
// // }


// // const actualSales2 = [1500, 865, 3450, 5500, 2500];

// // function calculateprofit(sales) {
// //   const taxRate = 0.30;
// //   return sales.map(sale => {
// //     let profit = sale * taxRate
// //     if (profit < 500) {
// //         return 'not enough money - $' + profit
// //     } else {
// //         return 'good profit - $' + profit 
// //     }
// //   });
// // }

// const mondaysSales = [1500, 865, 3450, 5500, 2500];
// const tuesdaySales = [123123,534,432];

// function calculateProfit(listOfSoldItems) {
//   const ourItemCost = 65;
//   const salesTax = 0.06;
//   return listOfSoldItems.map(function(item) {
//     const amountAfterPayingSalesTax = item * (1.00 - salesTax);
//     const profit = amountAfterPayingSalesTax - ourItemCost;
//     return profit;
//   });
// }

// const calculateProfit2 = (listOfSoldItems) => {
//     const ourItemCost = 65;
//     const salesTax = 0.06;
//     return listOfSoldItems.map(item => {
//         const amountAfterPayingSalesTax = item * (1.00 - salesTax);
//         return amountAfterPayingSalesTax - ourItemCost;
//     })
// }

// const someNumbers = [23, 1,6,3,865,23424];
// const anotherList = [1,2,3,4]

// const labelEvenOrOdd = (listOfNumbers) => {
//   listOfNumbers.map((item) => {
//     if (item % 2 === 0) {
//       return `${item} is even`
//     } else {
//       return `${item} is odd`
//     }
//   });
// }

// labelEvenOrOdd(someNumbers)
// labelEvenOrOdd(anotherList)

// let name = "asdfasf"
// let name2 = 'asdfasdf'
// let name3 = `fasdfasdf`

// let num = 12

// let list = [1,2,3,4] // lists
// let list2 = [name, num, name3]

// let person1 = {
//   name: 'mehul',
//   age: 37,
//   job: 'software eng'
// }
// let person2 = {
//   name: 'mehul',
//   age: 37,
//   job: 'jeweler'
// }

// let person3 = {
//   name: 'mehul',
//   age: 37,
//   job: 'real estate developer'
// }

// let car = {
//   seats: 2,
//   wheels: 4
// }

// // arrays as lists
// // objects as dictionary

// const whatJobDoesThePersonHave = (person) => {
//   return person.job;
// }

// whatJobDoesThePersonHave(person1)
// whatJobDoesThePersonHave(person2)
// whatJobDoesThePersonHave(person3)

// const myNumbers = [23, 1,6,3,865,23424];
// const anotherList2 = [1,2,3,4]
// const numbers = [46, 78, 55, 98, 123];
  
// 


let myfunction = (name, study) => {
  return `my name is ${name}, i am studying ${study}`
}    

myfunction('john', 'science')

// a function that checks if the applicants creditscore is more than 700
// and if their income is more than 100000. if they pass both, you will give them a loan
// if any fail, youll deny the loan.

let myfunction = (name, study) => {
  return `my name is ${name}, i am studying ${study}`
}
myfunction ('john', 'science')

let myfunction = (cost, product) => {
  return `the cost of ${cost}, the product ${product}`

}
myfunction('$500', 'mobile')
  
  let myfunction = (name, study) => {
    return `my name is ${name}, i am studying ${study}`
  }

  myfunction('rima', 'IT')


let loanchecker= (income, creditscore) => {
   if (income > 100000 && creditscore > 700) {
    console.log('passed')
   } else {
    console.log('failed')
   }
}

let loanchecker = (income, creditscore) => {
  if (income > 50000 && creditscore > 600) {
console.log ('passed')
} else {
  console.log ('failed')
}
}

let agechecker = (age) => {
   if (age === 15){
    console.log('drive with parents')
   }else if ( age >= 16) {
    console.log ('drive')

   } else { 
    console.log ('too young')

   }
}

let creditscore = (score) => {
if (score === 400) {
  console.log('credit card approved')
} else if (score <= 400) {
  console.log ('accepted')
} else {
  console.log ('rejected')
}
}
let acceptancegpa = (gpa) => {
  if (gpa >=3.5) {
    console.log ('you got eligible')
  } else if (gpa > 3.5) {
    console.log ('you are not eligible')
  } else {
    console.log ('rejected')
  }
}

let pricecheck = (price, balance) => {

  if (balance >=price){
    console.log ('go through')

  } else {
    console.log ('reject')
  }
}


let distance = (amountspent, costofgallon, mpg) => {
  let numberofgallon = amountspent/costofgallon
  return (numberofgallon * mpg)
}

// lets write a function that will calculate your scholarship application
// the requirements are a 3.75gpa, and 1200 SAT score

// fizzbuzz again

// lets write a function that takes a list of prices, and your budget, and returns
// a list that says if you can afford the item or not
// canyouafford(listOfPrices, budget)
// listOfPrices = [4,56,1999,123, 7]
// budget = 10
// answer [true, false, false, false, true]


let admapplication = (gpa, satscore) => {
   if (gpa >= satscore){
    console.log ('not eligible')
    } else {
      console.log ('eligible')
    }
}

let eligibility1 = (GPA, SAT) => {
     if (GPA >= SAT){
       console.log ('accept') 

  } else {
     console.log ('reject')
  }
}

let eli = (gpa, satScore) => {
  if (gpa >= 3.75 && satScore >= 1200) {
    return true;
  } else {
    return false;
  }
}


//1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizz buzz 16 17 fizz buzz 20//
let fizzbuzz = ()  => {
for (let i = 1; i <= 20; i++) {
     if (i % 10 === 0 && i % 7 === 0) {
       console.log ('fizzbuzz')
     } else if (i % 2 === 0){
      console.log ('fizz')
    } else if (i % 6 === 0){
       console.log ('buzz')
    } else {
       console.log (i)
    }
  }
 }

 



 let fizzbuzz () => {
  for (let  i = 1; i <= 20; i++) {
       if ( i % 5 === 0 && i % 7 === 0) {
          console.log ('fizzbuzz')
      } else if (i % 5 === 0 ){
          console.log ('fizz')
       } else if ( i % 7 === 0) {   
    console.log ('buzz')

    } else {
      console.log (i)
    } 
 }
 }

 

 function checkscholarship(gpa, satscore){
const requiredgpa = 3.75
 const requiredsatscore = 1200
   if (gpa>= 3.75 && satscore >= 1200){
     return ()"you are qualified"
   } else if (gpa < requiredgpa && satscore < requiredsatscore){
      return "you do not meet required limits";

      } else if(gpa < requiredgpa){
        return "your gpa is too low "
      } else {
        return "your satscore is too low"
      }
      
      }
 
 
         function checkScholarship(gpa, satScore) {
  const requiredGPA = 3.75;
  const requiredSAT = 1200;

  if (gpa >= requiredGPA && satScore >= requiredSAT) {
    return "✅ You qualify for the scholarship!";
  } else if (gpa < requiredGPA && satScore < requiredSAT) {
    return " You do not meet GPA and SAT requirements.";
  } else if (gpa < requiredGPA) {
    return " Your GPA is too low.";
  } else {
    return " Your SAT score is too low.";
  }
}

// lets write a function that takes a list of prices, and your budget, and returns
// a list that says if you can afford the item or not
// canyouafford(listOfPrices, budget)
// listOfPrices = [4,56,1999,123, 7]
// budget = 10
// answer [true, false, false, false, true]


const prices = [1,5,234,767,12]
const canyouafford = (listOfPrices, budget) => {
  return listOfPrices.map((item) => {
    if (item > budget) {
      return false;
    } else {
      return true;
    }
  });
}

console.log(canyouafford(prices))    

let students [name, grade, favclass]


let students = [
{
  name: 'janelet stock = frames.filter((item) => {
    if (item.size > 6*4) {
      return item;

    }
}

)',
  grade: 3,

},
  {



    name: 'rosy',
    grade: 6,

  },
  {
    name: 'april',
    grade: 7,
  },
  {
    name: 'nichol',
    grade: 11,
  },
  {
    name: 'alley',
    grade: 12,
  },
]

let highschoolkids = students.filter((student) =>{
     if (student.grade > 8) {
        return student;
     }
}

let frames = [
   {  size: 11*8,
      shape :'round',
      color : 'pink',
   },


   {
     size: 12*12,
     shape: 'square',
     color: 'black',
   },
   {
    size : 8*12,
    shape: 'rectangle',
    color: 'gold',
   },
]
let stock = frames.filter((item) => {
    if (item.size > 6*4) {
      return item;

    }
}

)



let items = [
  {
    name: 'laptop',
    category: 'electronics',
    price: 1000,
  },
  {
    name: 'headphones',
    category: 'electronics',
    price: 300,
    },
  {
    name: 'shoes',
    category: 'fashion',
    price: 250,
    },
    {
      name:'watch',
      category:'fashion',
      price: 500,
    },
    {
      name: 'phone',
      category: 'electronics',
      price: 1500,
    },
]
let stock = items.filter((product) => {
  if (product.price>500) {
   return product;
  }
}
)


let todolist = [
  {
    description:'make food',
    completed: false
  }, 
  {
    description:'make desert',
    completed: true
  }, 
  {
    description:'eat food',
    completed: false
  }, 
]

let additem = (task) => {
  // item { description: 'some value', completed: false }
  // item 'just my task description'
  todolist.push({
    description: task,
    completed: false
  })
}

let updateitem = (index) => {
  todolist[index].completed = true;
}

let removeitem = (index) => {
  todolist.splice(index, 1)
}

let showIncompleteItems = () => {
  let incompleteItems = todolist.filter((item) => {
    if (item.completed === false) {
      return item
    }
  });
  return incompleteItems;
}



//=-======================



let todolistforsalestax = [
  {
    task: 'check email send by client',
    step: 1
  },
  {
    task: 'add information in client folder',
    step: 2
},
{
  task: 'file on GTC',
  step: 3

},
{
  task: 'make payment',
  step: 4
},
{
  task: 'save report',
  step: 5
},
{
  task: 'send it to client',
  step: 6
},

]

let additem = (task) => {
todolistforsalestax.push({
task: task,
step: todolistforsalestax.length + 1
})
}

// update an item , filter//

let todolist = [
  {
    description: 'makefood',
    completed: false
},
{
  description: 'make desert',
  completed: true  
  },
  {
    description: 'eat food',
    completed: false
  },
]
let additem = (task) => {
  todolist.push({
    description: task,
    completed: false 

  })
}
let updateitem =(index) => {
todolist = [index].completed = true;
}
let removeitem = (task) => {
  todolist.splice(index,1)

}

let todolistforsalestax = [
  {
    task: 'check email send by client',
    step: 1
  },
  {
    task: 'add information in client folder',
    step: 2
},
{
  task: 'file on GTC',
  step: 3

},
{
  task: 'make payment',
  step: 4
},
{
  task: 'save report',
  step: 5
},
{
  task: 'send it to client',
  step: 6
},

]
 let updateitem = (index) => {
  todolistforsalestax = [index].completed = step 6

 }
 

 let todolist = [
  {
    description: 'sign up form',
    step: 1,
    completed: true
  },
  {
    description: 'fillup form',
    step: 2,
    completed: false

  },
  {
    description: 'add name',
    step: 3,
    completed: true
  },
  {
    description: 'add course',
    step: 4,
    completed: false
  },
  {
    description: 'select slot',
    step: 5, 
    completed: true
  },
 ]

 let updateitem = (index, text) => {
  todolist[index].description = text
 }

 //let removeitem = (index, text) => {
  //todolist[index].description = text
 


let removeitem = (index) => {
  todolist.splice(index, 1)
}
let toggleitem = (index) => {
  todolist[index].completed = !todolist[index].completed;
}

let incompleteitems = todolist.filter((items) => {
  if (item.completed == false) {
    return item;
  }
}) 

let getIncompleteItems = () => {
  return todolist.filter(item => {
      if (item.completed == false) {
    return item;
  }
  })
}

let addItem = (description) => {
  todolist.push({
    description: description,
    step: todolist.length + 1,
    completed: false
  });
}

let playrps = () => {
  let options = ['r', 'p', 's'];
  let computerinput = options[Math.floor(Math.random() * 3)]
  let userinput = prompt('please enter r, p, or s');

  if (userinput !== 'r' && userinput !== 'p' && userinput !== 's') {
    alert('please prick r, p or s');
    return;
  }

  if (userinput === computerinput) {
    alert(`you picked ${userinput}, computer picked ${computerinput}, you tied`)
  } else if (userinput === 'r' && computerinput === 's') {
    alert(`you picked ${userinput}, computer picked ${computerinput}, you win`)
  } else if (userinput === 's' && computerinput === 'p') {
    alert(`you picked ${userinput}, computer picked ${computerinput}, you win`)
  } else if (userinput === 'p' && computerinput === 'r') {
    alert(`you picked ${userinput}, computer picked ${computerinput}, you win`)
  } else {
    alert(`you picked ${userinput}, computer picked ${computerinput}, you lose`)
  }
}

let flipacoin = () => {
  let 
  
  
  
  
  options = ['heads', 'tails'];
  let result = options[Math.floor(Math.random() * 2)]
  alert(`you flipped a ${result}`)
}
let playrps = () => {
  let options = ['r','p', 's'];
  let computerinput = options[Math.floor(Math.random ()* 3)]
  let userinput = prompt ('please enter r,p,s')

  if (userinput =/= 'r' && userinput =/= 'p' && userinput =/= 's') {
    return;
  }
  if (userinput == computerinput) {
      alert (`you picked ${userinput} && computer picked ${computerinput} you tied`)
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

let flipacoin = (num) => {
  let options = ['heads', 'tails'];
  let heads = 0;
  let tails = 0;
  for (let i = 0; i < num; i++) {
    let flip = options[Math.floor(Math.random() * 2)]
    if (flip === 'heads') {
      heads++
    } else {
      tails++
    }
  }

  alert (`you fliped ${heads} heads, and ${tails} tails`)
}

let num = () => {
//   let options = ['1','2','3','4','5','6','7','8','9','10'];
  let computerinput = [Math.ceil(Math.random ()* 10)]

  let userinput = Number(prompt('please enter 1 to 10'))
  if (userinput === computerinput) {
    alert (`you picked ${userinput} && computerpicked ${computerinput} you win`)
  } else {
    alert (alert (`you picked ${userinput} && computerpicked ${computerinput} you lose`))
  }

}


let rolldice = () => {
  let computerinput = Math.ceil(Math.random ()* 6)
  let userinput = Number(prompt('please enter 1 to 6'))

  if (userinput === computerinput) {
    alert (`you picked ${userinput} && computerpicked ${computerinput} you win`)
  } else {
    alert (`you picked ${userinput} && computerpicked ${computerinput}you lose`)
  }
}

 let rolldice = (num) => {

  let result = []
  for (let i = 1; i <= num ; i++  ) {
    let roll = Math.ceil(Math.random ()* 6)
    result.push(roll)
  }
  alert(`you rolled ${num} dice, and got ${result}`)
}

//[3, 5, 0, 2]
let coins = {
  pennies: 10,
  dimes: 5,
  nickels: 2,
  quarters: 8
}
let addChange = (coins) => {
//   pennies, nickels, dimes, quarters
  const baseCoinValue = [.01, .05, .10, .25];
  let values = {
  pennies: .01,
  dimes: .1,
  nickels: .05,
  quarters: .25
}
  let pennies = coins.pennies * baseCoinValue[0]
  let nickels = coins[1] * baseCoinValue[1]
  let dimes = coins[2] * baseCoinValue[2]
  let quarters = coins[3] * baseCoinValue[3]

  let result = pennies + nickels + dimes + quarters

  alert(result)
};

let addChange = (coins) => {
  const baseCoinValue = [1, 5, 10, 25 ];
let pennies = coins[0] * baseCoinValue [0]
let nickles = coins[1] * baseCoinValue [1]
let dimes = coins[2] * baseCoinValue [2]
let quaters = coins[3] * baseCoinValue [3]
let result = pennies + nickles + dimes + quaters
alert (Math.round(result/100))
};

let total = (value) => {
  value = value * 100
  let quaters = Math.floor(value/25)
  let quatersremainder = value % 25
  
  let dimes = Math.floor(quatersremainder/10)
  let dimesremainder = quatersremainder % 10

  let nickles = Math.floor(dimesremainder/05)
   let nicklesremainder = dimesremainder % 05

  let pennies = Math.floor(nicklesremainder/01)
   
   alert(`your ${value} can be split into ${quaters} q, ${dimes} d, ${nickles} n, and ${pennies} p`)


}

let makechange2 = (usamount) => {
  let indianrupees = usamount * 85.67;
  let cents = indianrupees * 100
  let coins = {}
  let coinvalues = {
    'ten rupee': 1000,
    'five rupee': 500,
    'fifty paise': 50,
    'twenty five paise': 25
  }

  for (let key in coinvalues) {
    coins[key] = Math.floor(cents / coinvalues[key])
    cents = cents % coinvalues[key]
  }

  console.log(coins)
}

let makeChange = (usamount) => {
  let indianrupees = usamount * 85.32;
  let cents = indianrupees * 100
  let coins = {};
  let coinvalues {
    'five rupees': 500,
    'two rupees' : 200,
    'one rupee' : 100,
    'fifty paise' : 50,
    '10 paise' : 10,
    'five paise' : 5
  }
  for let (let key in coinvalues) {
    coins[key] = Math.flooor(cents / coinvalues[key])
    cents = cents % coinvalue[key]
  }
  console.log(coins)

}

 
 let makeChange = () => {
  let price = 12.99;
  let paid = 20.00;

 let change = (paid - price) * 100; 
  change = Math.round(change); 

  let coins = {}; 

  let coinValues = {
    'Dollar bill': 100,
    'Quarter': 25,
    'Dime': 10,
    'Nickel': 5,
    'Penny': 1
  };

  for (let key in coinValues) {
    coins[key] = Math.floor(change / coinValues[key]);
    cents = cents % coinValues[key];
  }

  console.log("Change breakdown:");
  console.log(coins);
}


let makechange =() => {
  let price = 23.46;
  let paid = 50;
  let coins = {};

  let change = (paid - price)* 100
//  change = Math.round(change);

  let coinvalue = {
    'dollar10':1000,
    'dollar5': 500,
    'dollar bill': 100,
    'quater': 50,
    'nickle': 25,
    'pennies': 1
  }
  for (let key in coinvalue) {
    coins[key] = Math.floor(change/ coinvalue[key])
    change = change % coinvalue[key];
  }
  console.log("Change breakdown:");
  console.log(coins);
}






  


  
    
  





let makeChange = (value) => {

  let quarters = Math.floor(value/.25)
  let quartersRemainder = value % .25

  let dimes = Math.floor(quartersRemainder/.10)
  let dimesRemainder = quartersRemainder % .10

  console.log('quartrs', quarters, quartersRemainder)
  console.log('dimes', dimes, dimesRemainder)

}



  let playrps = () => {
  let options = ['r','p','s'];
  let computerinput = options [Math.floor(Math.random ()* 3)]
  let userinput = prompt ('please enter r,p,s')
  if (userinput =/= 'r' && userinput =/= 'p' && userinput =/= 's') {
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

  let groceries = ["milk", "bread", "eggs"];
  //groceries.push("waffle");
  //console,log ("After push:", groceries);

let removedItem = groceries.pop();
console.log ("Removed item:", removedItem);
console.log ("After pop:", groceries);
 
groceries.unshift("yoghurt");
console.log ("After unshif:", groceries);


let groceries = ["milk", "bread", "eggs" "yoghurt"];
let shiftedItem = groceries.shift();
console.log("Shifted item:", shiftedItem);
console.log("After shift:", groceries);


let array = [2,5,8,19,25];
function sumElement(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumElement(array));

let array = [3456, 6789, 34675, 23876]
function sumElement (arr) {
  return arr.reduce((acc, val) => acc + val, 0 )
}
console.log(sumElement(array));

let array = [5,7,12,25,30];
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax(array));
 
let array = [1098, 3078, 5678, 10000, 45768]
function findMax(arr) {
  return Math.max(...arr)
}
console.log(findMax(array));


let array = [12,45,67,88,98,103,456,789]
function filterOdd(arr) {
  return array.filter(num => num % 2 === 0)
}
console.log(filterOdd(array));

let array1 = [2,4,6,8,10];
let array2 = [3,6,9,13,17];
function mergeArrays(array1, array2) {
  return [...array1, ...array2]
}
console.log(mergeArrays(array1, array2));

let array = [2, 3, 5, 6, 10, 5, 67, 34, 5, 68, 5];
function countOccurences(arr, element) {
  return arr.filter(x => x === element).length
}
console.log(countOccurences(array, 5));

let array = [3, 4, 7, 56, 8, 56, 89, 7, 3, 2, 5, 78, 45, 90, 7, 3, 45, 7]
function countOccurences(arr , element, element2) {
  let result1 = arr.filter(x => x === element).length
  let result2 = arr.filter(x => x === element2).length
  return [result1, result2]
}
console.log(countOccurences(array, 7))

let array = [1, 2, 3, 4, 5];
function multiplyElements(arr, multiplier) {
    return arr.map(num => num * multiplier);
}
console.log(multiplyElements(array, 2)); // Output: [2, 4, 6, 8, 10]

let array = [3,6,8,9,12,15];
function multiplyElements(arr, multiplier) {
  return arr.map(num => num * multiplier)
}
console.log(multiplyElements(array, 5));

