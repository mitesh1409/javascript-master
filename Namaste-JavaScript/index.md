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
17. [TRUST ISSUES with setTimeout() | Namaste JavaScript Ep. 17](./1783596642929.md)
18. [Higher-Order Functions ft. Functional Programming | Namaste JavaScript Ep. 18](./1783599030513.md)


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
