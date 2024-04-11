// JavaScript source code
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example: Generate a random integer between 1 and 6
var randomNumber = getRandomInteger(1, 6);
console.log(randomNumber);