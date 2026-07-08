# Namaste 🙏 JavaScript

[Namaste JavaScript by Akshay Saini](https://www.youtube.com/playlist?list=PLxnjbfm5MCHFbRlyVCAqpJFdIzPN_IPID)

**Index**  

1. [How JavaScript Works 🔥 & Execution Context | Namaste JavaScript Ep.1](./1783441301332.md)
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


#### #15 Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15

##### #15.1 How JS Engine Executes the Code Using Call Stack

Remember as in Episode #1
> JavaScript is a
> Synchronous
> Single Threaded
> language.

Synchronous means line by line in an order (top to bottom).
Single Threaded means JavaScript can execute only one command at a time.

Synchronous Single Threaded means JavaScript can execute only one command at a time and
in a specific order (means it can go to the next line once the current line finishes its execution).

In short, JavaScript executes code from top to bottom line by line using just a single thread.

JavaScript has only one Call Stack and it can do only one thing at a time.
This Call Stack is present inside the JavaScript Engine.

Study the following example and think about how it will be executed using Call Stack.

Example
```
// Assume a part of food ordering application.

function prepareOrder(...orderItems) {
    // Prepares order from order items and returns it.
    return {
        id: 9001,
        orderItems: orderItems,
        dateTime: Date.now()
    };
}

const orderItems = [
    'Sandwich',
    'Burger',
    'French Fries',
    'Chocolate Ice-cream',
    'Coke'
];

const order = prepareOrder(...orderItems);

function processOrder(order) {
    const billingAmount = generateBill(order);

    try {
        collectPayment(billingAmount);
    } catch (Exception ex) {
        // Handle payment failure.
    }

    displayOrderSuccessful();

    initiateOrderDelivery();

    // some more code...
}

function generateBill(order) {
    // Code to generate bill
}

function collectPayment(billingAmount) {
    // Code to collect payment
}

function displayOrderSuccessful() {
    // Code to display order successful message
}

function initiateOrderDelivery() {
    // Code to initiate order delivery
}

processOrder(order);
```

##### #15.2 Main Job of the Call Stack

Call Stack executes everything that is inside it one by one from top to bottom.
It does not wait for anything.

##### #15.3 How Does JavaScript Perform async Tasks

What if we need to run a script/program after some time?
How we can do that in JavaScript?

But this is not possible by Call Stack alone, because it does not wait for anything.
Whatever comes inside Call Stack, it executes it from top to bottom without waiting for anything.

##### #15.4 Behind the Scenes in Browser

  Browser
  |
  |---- JavaScript Engine
  |     |
  |     |---- Call Stack
  |
  |
  |---- Local Storage
  |
  |
  |---- Timer
  |
  |
  |---- Address Bar
  |
  |
  |---- DOM
  |
  |
  |---- Geo Location Access
  |
  |
  |---- Bluetooth Access
  |
  |
  | etc.

##### #15.5 Web APIs in JavaScript

Following are some of the Web APIs, they are not part of the JavaScript but they are part of Browser.
- setTimeout()
- DOM APIs
- fetch()
- localStorage
- console
- location

From JavaScript Engine we can call/access these Web APIs via the "window" which is "Global" object.

And since "window" which is a Global object available inside Global Execution context,
we don't need to access these APIs using window, we can access them directly.
`window.setTimeout` is same as `setTimeout`
`window.fetch` is same as `fetch`
etc.

##### #15.5 How setTimeout Works Behind the Scenes in Browsers

Example - 1
```
console.log('Start');

setTimeout(function someCallback() {
    console.log('setTimeout Callback executed :)');
}, 5000);

console.log('End');
```

Line by line commentary -

Part #1: Memory Allocation Phase
There is nothing which requires memory allocation.

Part #2: Code Execution Phase (Synchronous)
- console.log('Start'); --> executes and logs 'Start' into the console.
- setTimeout --> it registers the given callback "someCallback" with specified time in milliseconds.
  This is done via Browser's "setTimeout" API.
  That is it, then it moves to the next line.
- console.log('End'); --> executes and logs 'End' into the console.

All of this is done inside Global Execution Context.
At the end Global Execution Context is popped out of the Call Stack.
Call Stack is empty now.

Part #3: Code Execution Phase (Asynchronous)
In the background, timer for the setTimeout callback "someCallback" is in progress...
Once this timer expires it pushes the registered callback "someCallback" into the Callback Queue.
Now Event Loop comes into the picture, it keeps an eye on the Callback Queue all the time.
Event Loop sees that "someCallback" is there in the Callback Queue.
Event Loop pulls "someCallback" from the Callback Queue and pushes it into the Call Stack.
Finally Call Stack executes "someCallback".

Example - 2
```
console.log('Start');

setTimeout(function callbackOne() {
    console.log('setTimeout callbackOne executed :)');
}, 0);
setTimeout(function callbackTwo() {
    console.log('setTimeout callbackTwo executed :)');
}, 0);
setTimeout(function callbackThree() {
    console.log('setTimeout callbackThree executed :)');
}, 0);

// The below loop takes long to complete.
const fiveLakh = 500000;
for (let i = 1; i <= fiveLakh; i++) {
    console.log('i', i);
}

console.log('End');
```

##### #15.6 Event Loop & Callback Queue in JavaScript

Callback Queue
It contains a list of callbacks that are ready for execution.

Event Loop
It continuously checks if there is any callback available in the Callback Queue,
if yes then it pulls that callback from the Callback Queue and pushes it into the Call Stack.

##### #15.7 How Event Listeners Work in JavaScript

Example
```
console.log('Start');

document.getElementById('btn')
    .addEventListener('click', function someCallback() {
        console.log('btn click Callback executed :)');
    });

console.log('End');
```

##### #15.8 More About Event Loop

Event Loop
It continuously monitors Call Stack and [Callback Queue + Microtask Queue].
When Call Stack is empty and [Callback Queue + Microtask Queue] is not empty,
it pulls a callback from [Callback Queue + Microtask Queue] and pushes it into Call Stack for execution.

Here Microtask Queue gets priority over Callback Queue, so callbacks from Microtask Queue
will be executed first and then callbacks from Task/Callback Queue gets chance to execute.

We can think of the psuedo code of the Event Loop something like this -
```
// Event Loop
while (true) {
    if (isCallStackEmpty() && isAnyCallbackReady())
        // pull the next callback from the Callback Queue
        const callback = callbackQueue.pull();

        // push the callback into the Call Stack
        callStack.push(callback);
    }
}

// isCallStackEmpty()
// It checks if Call Stack is empty or not.

// isAnyCallbackReady()
// It checks if there is any callback ready inside Microtask Queue or Task Queue.
// It will check according to priority Microtask Queue > Task Queue.

```

##### #15.9 Why Do We Need Event Loop & Callback Queue?

We can have multiple callbacks in our JavaScript application ready for the execution
at any point of time. So we need a place to store all of them and execute them in the FIFO order.
So Callback Queue solves this problem.
Callback Queue is a FIFO(First In First Out) queue.

Now we also need to make sure that the callbacks which are ready for the execution
gets pushed into the Callstack one by one.
Event Loop solves this problem, as described earlier in #15.8 above -
when Call Stack is empty and Callback Queue is not empty,
Event Loop pulls a callback from Callback Queue and pushes it into Call Stack for execution.

##### #15.10 How fetch() works?

`fetch()` is a Web API, it is used to make network calls or calling APIs.
`fetch()` returns a Promise, which might be resolved or rejected.

##### #15.11 Microtask Queue in JavaScript

Call Stack  <---->  Event Loop  <---->  [ Microtask Queue, Task/Callback Queue ]

Event Loop  <---- PULL  [ Microtask Queue, Task/Callback Queue ]
Event Loop PULLS a callback from [ Microtask Queue, Task/Callback Queue ]

Event Loop  ----> PUSH  Call Stack
Event Loop PUSHES a callback to Call Stack.

Microtask Queue gets priority over Task/Callback Queue.

##### #15.12 What are Microtasks in JavaScript?

All callbacks from Promises will go inside Microtask Queue, they are Microtasks.

There is something known as "Mutation Observer".

Mutation Observer keeps on checking whether there is any mutation in DOM tree or not.
If there is any mutation then it can execute a callback.

So callbacks from [ Promises + Mutation Observer ] goes inside Microtask Queue.

All other callbacks goes inside Task/Callback Queue.

##### #15.13 Starvation of Functions in Callback Queue

It might be possible that Microtask Queue gets so many callbacks such that it can cause
callbacks in the Task/Callback Queue to wait very long to execute.

Read more about it.

---

#### #16 JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 | Namaste JavaScript Ep. 16

##### #16.1 JavaScript Runtime Environment

JavaScript Runtime Environment is like a big container which has everything to run JavaScript.

JavaScript Runtime Environment has
- JavaScript Engine
- Set of APIs to Connect to Outer Environment
- Event Loop
- Callback/Task Queue
- Micro-Task Queue

JavaScript Engine is the main thing/heart of the JavaScript Runtime Environment.

##### #16.2 Browser and Node.js Runtime

Browser and Node.js has JavaScript Runtime Environment, that is why they are able to run JavaScript.

Because of JavaScript Runtime Environment, we can run JavaScript wherever we want.

JavaScript Runtime Environment has a set of APIs to connect to outer environment,
it will change as per the platform where we run JavaScript.

Like Node.js will have a separate set of APIs then the Browser.

Browser is meant for client side applications so it will have a set of APIs
accordingly in his JavaScript Runtime Environment.
Node.js is meant for server side applications so it will have a set of APIs
accordingly in his JavaScript Runtime Environment.

##### #16.3 List of JavaScript Engines

All browsers have their own JavaScript Engines.

| Browser/Platform | JavaScript Engine |
| ----------- | ----------- |
| Microsoft Edge | Chakra |
| Mozilla Firefox | SpiderMonkey |
| Google Chrome | V8 |
| Node.js | V8 |
| Deno | V8 |
| Deno | V8 |

##### #16.4 First JavaScript Engine

"SpiderMonkey" is the first JavaScript Engine created by the creator of JavaScript - Brendan Eich.

##### #16.5 Myths About JavaScript Engine

JavaScript Engine is not a hardware, it is a software.
It is written in some lower level language.

For example Google Chrome's JavaScript Engine V8 is written in C++.

##### #16.6 JavaScript Engine Architecture

JavaScript Code --> PARSING --> COMPILATION --> EXECUTION

##### #16.7 Syntax Parsers & Abstract Syntax Tree

JavaScript Code is passed to PARSING phase as input.

PARSING
During this phase, code is broken down into tokens.

Syntax Parser
It takes code and converts it into AST(Abstract Syntax Tree).

Check with the help of the following tool:
[AST Explorer](https://astexplorer.net)

##### #16.8 Compilation & Execution of JavaScript Code

COMPILATION
Output of PARSING is then passed to COMPILATION phase.

COMPILATION & EXECUTION go hand in hand.

##### #16.9 JIT (Just In Time) Compilation

JavaScript has JIT (Just In Time) Compilation.

Is JavaScript interpreted or compiled language?

Interpreter
In interpreted languages the code is executed using an Interpreter.
Interpreter executes code line by line from top to bottom.
It doesn't know what can happen in the next line.

Pros
Execution is fast, immediately starts execution since there is no compilation phase.

Compiler
In compiled languages the code is compiled first and then executed.

Pros
Program is executed efficiently.

##### #16.10 Is JavaScript interpreted or compiled language?

Most of the modern JavaScript Engines uses an interpreter plus a compiler both together.
So it depends on JavaScript Engine whether it uses purely an interpreter or JIT Compiler
to run JavaScript.

JIT Compiler = Interpreter + Compiler
JIT Compiler uses both Interpreter & Compiler to execute JavaScript code.
It compiles code at runtime that is why it is called JIT Compiler.

##### #16.11 Garbage Collector - Mark & Sweep Algorithm

Garbage Collector
It tries to free-up memory whenever possible.
It uses Mark & Sweep Algorithm to do this.

Read more about Mark & Sweep Algorithm.

Compiler does a lot of things behind the scenes to optimize the code
- Inlining
- Copy Elision
- Inline Caching

##### #16.12 Fastest JavaScript Engine

Google Chrome's V8 is the fastest JavaScript Engine.

V8 has an interpreter known as "Ignition", "Turbo Fan" optimizing compiler.

##### #16.13 Google Chrome's V8 JavaScript Engine Architecture

---

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
