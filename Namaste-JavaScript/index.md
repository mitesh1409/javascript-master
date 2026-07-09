# Namaste 🙏 JavaScript

[Namaste JavaScript by Akshay Saini](https://www.youtube.com/playlist?list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID)

**Index**  

1. [How JavaScript Works 🔥 & Execution Context | Namaste JavaScript Ep. 1](./1783441301332.md)
2. [How JavaScript Code is executed? ❤️ & Call Stack | Namaste JavaScript Ep. 2](./1783441519079.md)
3. [Hoisting in JavaScript 🔥(variables & functions) | Namaste JavaScript Ep. 3](./1783442034972.md)
4. [How functions work in JS ❤️ & Variable Environment | Namaste JavaScript Ep. 4](./1783443099476.md)
5. [SHORTEST JS Program 🔥 window & this keyword | Namaste JavaScript Ep. 5](./1783443296198.md)
6. [undefined vs not defined in JS 🤔 | Namaste JavaScript Ep. 6](./1783443798181.md)
7. [The Scope Chain, 🔥 Scope & Lexical Environment | Namaste JavaScript Ep. 7](./1783444077932.md)
8. [let & const in JS, 🔥Temporal Dead Zone | Namaste JavaScript Ep. 8](./1783495212575.md)
9. [Block Scope & Shadowing in JS 🔥| Namaste JavaScript 🙏 Ep. 9](./1783496433925.md)
10. [Closures in JS 🔥 | Namaste JavaScript Ep. 10](./1783496954865.md)
11. [setTimeout + Closures Interview Question 🔥 | Namaste 🙏 JavaScript Ep. 11](./1783498977832.md)
12. [CRAZY JS INTERVIEW 🤯 ft. Closures | Namaste 🙏 JavaScript Ep. 12](./1783506335936.md)
13. [FIRST CLASS FUNCTIONS 🔥 ft. Anonymous Functions | Namaste JavaScript Ep. 13](./1783510193465.md)
14. [Callback Functions in JS ft. Event Listeners 🔥| Namaste JavaScript Ep. 14](./1783516149449.md)
15. [Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep. 15](./1783528218140.md)
16. [JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 | Namaste JavaScript Ep. 16](./1783592482121.md)


#### #17 TRUST ISSUES with setTimeout() | Namaste JavaScript Ep.17

##### #17.1 Why We Have Trust Issues With setTimeout?

Example - 1
```
console.log('* Start *');

setTimeout(greet, 5000);

function greet() {
    console.log('Hello :)');
}

// The following loop takes very long to complete.
// It blocks the main thread of execution.
for (let i = 1; i <= 500000; i++) {
    console.log('i', i);
}

// The following loop takes 10 seconds to complete.
// It blocks the main thread of execution.
let startDateTime = new Date().getTime();
let endDateTime = startDateTime;
while (endDateTime < startDateTime + 10000) {
    endDateTime = new Date().getTime();
}

console.log('* End *');
```

There is no guarantee that the setTimeout callback will be executed after a specified time.
It may take longer then the specified time.

Check the above example, run in the browser and observe the results.

`setTimeout(someCallback, delayTimeInMilliseconds);`

Here "someCallback" will be delayed by at least "delayTimeInMilliseconds" time,
it may take longer than that depending on the Call Stack availability.

As in the above example the setTimeout sets "greet" callback to be executed after 5000 milli seconds.
Then it moves to next line and starts executing a very big loop with 5 Lakh iterations.
This loop takes very long time to complete, probably more than 5 seconds.
Meanwhile, setTimeout callback "greet" is ready for execution since 5000 milli seconds are over.
It is there in the Callback/Task Queue.
But since Call Stack is still busy, not empty it is not picked up for execution.
Once Call Stack is done and empty, "greet" is picked up from Callback/Task Queue and
pushed into Call Stack by the Event Loop and finally it gets executed.
:)

Study the following example.

Example - 2
```
console.log('* Start *');

setTimeout(greet, 0);

function greet() {
    console.log('Hello :)');
}

console.log('* End *');
```

---

#### #18 Higher-Order Functions ft. Functional Programming | Namaste JavaScript Ep. 18

##### #18.1 Introduction

One of the most amazing part of JavaScript is "Functional Programming".
"Functional Programming" is not possible without "Higher Order Functions".

##### #18.2 What is Higher Order Function?

A function which takes another function as an argument or returns a function
is known as Higher Order Function.

##### #18.3 Mistakes People Make

Example (Bad Code)
```
// Problem Statement
// From an array of circle radiuses, calculate area, circumference & diameter for each circle.

const radiuses = [1, 2, 3, 4];

console.log('Circle Radiuses', radiuses);

const calculateArea = function (radiuses) {
    const output = [];

    for (let i = 0; i <= radiuses.length; i++) {
        output.push(Math.PI * radiuses[i] * radiuses[i]);
    }

    return output;
}

console.log('Circle Area', calculateArea(radiuses));

const calculateCircumference = function (radiuses) {
    const output = [];

    for (let i = 0; i <= radiuses.length; i++) {
        output.push(2 * Math.PI * radiuses[i]);
    }

    return output;
}

console.log('Circle Circumference', calculateCircumference(radiuses));

const calculateDiameter = function (radiuses) {
    const output = [];

    for (let i = 0; i <= radiuses.length; i++) {
        output.push(2 * radiuses[i]);
    }

    return output;
}

console.log('Circle Diameter', calculateDiameter(radiuses));
```

##### #18.4 DRY Principle - Don't Repeat Yourself

Problems in the Example code in section #18.3:
- Repeatitive code - repeatation of loop, output variable etc.

##### #18.5 How to Optimize Our Code

Example (Good Code)
```
function Circle(radius) {
    this.area = () => Math.PI * radius * radius;

    this.circumference = () => 2 * Math.PI * radius;

    this.diameter = () => 2 * radius;
}

const radiuses = [1, 2, 3, 4];

console.log('Circle Radiuses', radiuses);

const circles = radiuses.map(function (radius) {
    return new Circle(radius);
});

console.log('Circles', circles);
console.log('Circle 1 area', circles[0].area());
console.log('Circle 1 circumference', circles[0].circumference());
console.log('Circle 1 diameter', circles[0].diameter());
```

Good parts of the above code are:
- DRY principle is followed, no repetitive code
- Each function has its own responsibility, S in SOLID followed

---

#### #19 map, filter & reduce 🙏 Namaste JavaScript Ep. 19 🔥

`map()`, `filter()` & `reduce()` are higher order functions in JavaScript.

##### #19.1 Array.map() function in JavaScript

`map()` transforms values in the Array and generates a new Array.

Example
```
const firstFive = [1, 2, 3, 4, 5];

const double = n => 2 * n;
const triple = n => 3 * n;
const binary = n => n.toString(2);

const doubled = firstFive.map(double);
const tripled = firstFive.map(triple);
const binaried = firstFive.map(binary);

console.log('firstFive', firstFive);
console.log('doubled', doubled);
console.log('tripled', tripled);
console.log('binaried', binaried);
```

##### #19.2 Array.filter() function in JavaScript

`map()` filters values in the Array and generates a new Array.

Example
```
const firstTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = n => n % 2;
const even = n => !(n % 2);
const greaterThan5 = n => n > 5;

const odds = firstTen.filter(odd);
const evens = firstTen.filter(even);
const greaterThan5s = firstTen.filter(greaterThan5);

console.log('firstTen', firstTen);
console.log('odds', odds);
console.log('evens', evens);
console.log('greaterThan5s', greaterThan5s);
```

##### #19.3 Array.reduce() function in JavaScript

`reduce()` executes a given callback on the values in the Array and generates a single value.

Example #1
```
const firstTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Calculate sum
function sum(firstTen) {
    let sum = 0;
    for (let i = 0; i < firstTen.length; i++) {
        sum += firstTen[i];
    }
    return sum;
}

console.log('sum(firstTen)', sum(firstTen));

const sumOfFirstTen = firstTen.reduce(function(result, current) {
    result += current;
    return result;
});

console.log('sumOfFirstTen', sumOfFirstTen);
```

Example #2
```
const numbersArray = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Find the max number
function max(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

console.log('max(numbersArray)', max(numbersArray));

const maxNumber = numbersArray.reduce((max, current) => {
    if (current > max) {
        max = current;
    }
    return max;
});

console.log('maxNumber', maxNumber);
```

##### #19.4 Some more examples

```
// Assume that we are getting the following data from an API
const users = [
    { firstName: 'Mitesh', lastName: 'Prajapati', age: 38 },
    { firstName: 'Shivansh', lastName: 'Prajapati', age: 38 },
    { firstName: 'Narendra', lastName: 'Modi', age: 68 },
    { firstName: 'Donald', lastName: 'Trump', age: 75 },
    { firstName: 'Mahendrasinh', lastName: 'Dhoni', age: 42 },
    { firstName: 'Yuvraj', lastName: 'Singh', age: 42 },
];

// Problem statement #1: Get age wise user count
// Expected output: { <age1>: <user count>, <age2>: <user count>,... }

// Using map(), NOT GOOD :(
let ages = [];
users.map((user) => {
    if (ages[user.age] === undefined) {
        ages[user.age] = 1;
    } else {
        ages[user.age] += 1;
    }
});

console.log('ages', ages);

// Using reduce(), GOOD :)
const ageWiseUserCount = users.reduce((result, user) => {
    if (result[user.age] === undefined) {
        result[user.age] = 1;
    } else {
        result[user.age] += 1;
    }

    return result;
}, {});

console.log('ageWiseUserCount', ageWiseUserCount);

// Problem statement #2: Get first name of users with age N.
// Expected output: { 'Mitesh', 'Shivansh' }
const userFirstNames = users.filter(user => user.age === 38)
    .map(user => user.firstName);

console.log('userFirstNames', userFirstNames);


const userFirstNames2 = users.reduce((result, user) => {
    if (user.age === 38) {
        result.push(user.firstName);
    }
    return result;
}, []);

console.log('userFirstNames2', userFirstNames2);
```

Homework: Learn about Polyfills of map(), filter(), reduce().
