// Example #1

// Put a break-point here and analyse call stack, scope etc.
// using developer tools of the browser.

console.log('before ...');

sayNamaste();
// sayHello(); // Uncaught TypeError: sayHello is not a function
console.log(points);
console.log(sayNamaste);
console.log(sayHello);

//////////////////////////////////////////////////

// Variables and functions are defined as below.

var points = 100;

function sayNamaste() {
    console.log('Namaste 🙏 :)');
}

var sayHello = () => {
    console.log('Hello :)');
}

//////////////////////////////////////////////////

console.log('after ...');

sayNamaste();
sayHello();
console.log(points);
console.log(sayNamaste);
console.log(sayHello);


// Example #2

// console.log('score', score); // Uncaught ReferenceError: Cannot access 'score' before initialization

let score;
console.log('score', score); // score is accessible now, it is initialized to "undefined".

score = 100;

console.log('score', score);
