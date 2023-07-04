// Usage: Use a combination of simple conditional, nested if/else if, and switch statements

var enterGame = confirm("Are you ready to play Hitchhiker's Guide to the Galaxy?");
if (enterGame === false) {
    alert("Thank you. Please play again sometime.");

} else {
    alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.");
    let direction = prompt('Which direction would you like to head? Enter: \nforward \nleft \nright');
    switch (direction) {
        case 'forward' :
          alert("You walk 100 yards and safely make your way out of the cave.");
          break;
        case 'left' :
          alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!");
          break;
        case 'right' :
          alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!");
          break;
        default :
          alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.");
      };
}; // how to I split up this long line of code??




let rating = prompt('The Game is Over\nPlease rate the game between 1 and 10');
if (rating <= 5) {
    alert("Thank you. I am working hard to improve the game.");
} else {
    alert("Thank you for playing!");
};