// Usage: Use nested conditional statements

// Begin your application by creating a variable called coinFlip and set it equal to a random number.
// You will have to use a Math method to get this number:
var coinFlip = Math.round(Math.random()); // this will generate either 0 or 1
console.log(coinFlip);

// Prompt the user to select Heads or Tails and set it to a variable called choice
var choice = prompt('Heads or Tails?');

// Use a conditional to check the result of the coin flip. If it's 0,
// it'll be heads. If it's 1, it'll be tails.
if (coinFlip == 0) {
    var flipResult = 'Heads';
} else {
    var flipResult = 'Tails';
}

// Alerts based on different flipResults

if (flipResult == choice) {
  if (flipResult == "heads") {
      alert("The flip was heads and you chose heads...you win!");
  } else {
      alert("The flip was tails and you chose tails...you win!");
  }
} else {
  if (flipResult == "heads") {
      alert("The flip was heads and you chose tails...you lose!");
  } else {
      alert("The flip was tails and you chose heads...you lose!");
  }
}


// This logic above still puzzles me.... my logic follows more closely with below code. Figure out.


/**
if (flipResult = 'Heads') {
    if (choice = 'Heads') {
      alert('The flip was heads and you chose heads...you win!');
    } else if (choice = 'Tails') {
      alert('The flip was heads but you chose tails...you lose!');
    }
} else if (flipResult = 'Tails') {
    if (choice = 'Heads') {
      alert('The flip was tails but you chose heads...you lose!');
    } else if (choice = 'Tails') {
      alert('The flip was tails and you chose tails...you win!');
    }
};

*/
