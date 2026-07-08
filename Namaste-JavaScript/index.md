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


## #12 CRAZY JS INTERVIEW 🤯 ft. Closures | Namaste 🙏 JavaScript Ep. 12

### 12.1 What is a closure in JavaScript?

[Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

Disadvantages of closures

Over consumption of memory  
Every time a closure is formed it consumes a lot of memory  
since variables and functions that are part of closure are  
not garbage collected. They remain in memory till the program  
finishes its execution.  
So if not handled/used properly it can lead to memory leaks.  

@todo - counter using closure

scalable example using constructor function

### 12.2 What is a garbage collector in JavaScript?

Garbage collector is a program in the browser/JavaScript engine which frees up
unutilized memory.

In lower level languages like C, C++ its developer's responsibility
to allocate and deallocate memory, but in higher level languages
like JavaScript we have garbage collector which frees up the memory.

How closures and garbage collector related to each other?

```javascript
function level1() {
  let one = 1; // can't be garbage collected until level2()'s execution is over.
  let x = 99; // this is garbage collected smartly by some modern browsers.

  return function level2() {
    let two = 2;

    console.log(one, two);
  }
}

const level2Call = level1();
// after this call x is garbage collected smartly by some modern browsers
// this is because it is not used anywhere.

level2Call();
```

---

## #13 FIRST CLASS FUNCTIONS 🔥 ft. Anonymous Functions | Namaste JavaScript Ep. 13

### 13.1 What is an Anonymous function?

Functions without name/identity are called Anonymous functions.  
Arrow functions are anonymous functions.  
Functions with name/identity are regular/normal functions.  

```javascript
// Regular/normal/named function
function greet() {
    return 'Hello! How are you? :)';
}

console.log(greet());

////////////////////////////////////////////////////////////////////////////////

// Anonymous function - incorrect usage.
function() {
    return 'Hello! How are you? :)';
}
// this gives the following error
// Uncaught SyntaxError: Function statements require a function name (at episode-13.js:9:1)
// It creates ambiguity with the Function Statement syntax.
// So JavaScript fails to parse it and gives the error.
```

Anonymous functions are used when the functions are used as values.  

An anonymous function can't live on its own.  
There are two ways we can use anonymous function  
1. IIFE (Immediately Invoked Function Expression) - Declare + Execute
2. Storing it in a variable and then we can call it via that variable

Ref: [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
"Dog Balls ;)"

```javascript
// Calling/using Anonymous function - by IIFE.

// IIFE = Immediately Invoked Function Expression
// It runs as soon as it is defined.
const greetMessage = (function() {
    return 'Hello! How are you? :)';
})();

console.log(greetMessage);

// Format of IIFE
(function() {
    // function body
})();

// OR

(() => {
    // function body
})();

////////////////////////////////////////////////////////////////////////////////

// Calling/using Anonymous function - by assigning it to a variable
// and then calling it.
const greet = function() {
    return 'Hello! How are you? :)';
};

console.log(greet());
```

### 13.2 Function Statement, Function Expression, Function Declaration

**Function Statement/Function Declaration**

Ref: [Function Declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

```javascript
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// expected output: 30
```

The way we defined function like this is called "Function Statement".  

The "function" declaration defines a function with the specified parameters.  

It has 3 parts  
- name (mandatory)
  The function name.
- parameters (optional)
  The names of one or more arguments passed to the function. Maximum number of arguments varies in different engines.
- statements (optional)
  They comprise the body of the function.

So these are the regular named functions.  

Function Statement & Function Declaration are the same thing.  

**Function Expression**  

Ref: [Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)

```javascript
const calcCircleArea = function(radius) {
  return Math.PI * Math.pow(radius, 2);
};

console.log(calcCircleArea(5));
```

The way we defined function like this is called "Function Expression".  

Here function acts like a value, we can assign it to a variable.  

The "function" keyword can be used to define a function inside an expression.  

It has 3 parts  
- name (optional)
  The function name. Can be omitted, in which case the function is anonymous. The name is only local to the function body. This means we can't access named function elsewhere.
- parameters (optional)
  The names of one or more arguments passed to the function.
- statements (optional)
  They comprise the body of the function.

So this can be either anonymous function or regular function assigned to a variable.  

A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.

A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.

Function Statement Vs Function Expression  

Function Statement and Function Expression are ways to define a function.  

The major difference is hoisting.

In the memory creation phase functions declared with Function Statement are  
allocated memory.
But functions declared with Function Expression are not allocated any memory.  

```javascript
// calcRectArea is hoisted in memory so we can call it before its declaration.
console.log(calcRectArea(5, 6));

// calcCircleArea is hoisted in memory as a variable not a function.
// It receives function as a value in the execution phase.
// So it gives "calcCircleArea is not a function" error.
console.log(calcCircleArea(5));

function calcRectArea(width, height) {
  return width * height;
}

const calcCircleArea = function(radius) {
  return Math.PI * Math.pow(radius, 2);
};
```

**Named Function Expression**  

Ref: [Named Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#named_function_expression)

```javascript
const calcCircleArea = function circleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
};

console.log(calcCircleArea(5));
circleArea(5); // Uncaught ReferenceError: circleArea is not defined
```

Named Function Expressions are just Function Expressions that use  
named functions/regular functions instead of anonymous functions.

The function name is only local to the function body.  
This means we can't access named function elsewhere.  

This is because when we declare a named function,  
it is allocated memory first in the memory allocation phase,  
so later on in the code execution phase it is available, even inside its own body.  
This is the reason it is possible to write recursive functions.  
This concept is the same as in other languages.  

```javascript
// We can access the function itself inside its own body when it is executed.

// Example 1: Function Expression
const greet = function sayHello(name) {
    console.log(sayHello); // the function itself is available since it is allocated memory before its execution
    console.log(`Hello ${name} :)`);
}

// Example 2: Function Declaration
function sayByeBye(name) {
    console.log(sayByeBye); // the function itself is available since it is allocated memory before its execution
    console.log(`Bye bye ${name}! Hope to see you later :)`);
}

// Example 3: Function Expression
const calcCircleArea = function circleArea(radius) {
  console.log(circleArea);
  return Math.PI * Math.pow(radius, 2);
};

console.log(calcCircleArea(5)); // this works
console.log(circleArea(5)); // this gives an error - Uncaught ReferenceError: circleArea is not defined
```

This is because in the memory creation phase,
- calcCircleArea is allocated memory as a variable, its default value is "undefined".
- whereas the function "circleArea" is not allocated any memory at all because it is
  used as a value in the function expression. That is why it can't be accessed as a function.
  Here "circleArea" is used as a function value and not a function itself.

And then in the code execution phase,  
- when "calcCircleArea" is called, it executes "circleArea" function.
- the name of the function is local to the function body so we can access it inside the body.

### 13.3 Function Parameters Vs Function Arguments

The labels/identifiers we take inside the function while declaring it are called "parameters".  
The values which we passed in the function call are known as "arguments".  
These arguments are then assigned to the parameters.  

```javascript
// width, height <- parameters
function calcRectArea(width, height) {
  return width * height;
}

// 5, 10 <- arguments
calcRectArea(5, 10);
```

### 13.4 What are First Class Functions?

[First Class Functions](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

A programming language is said to have First-class functions  
when functions in that language are treated like any other variable.

For example, in such a language,  
- a function can be passed as an argument to other functions
- can be returned by another function
- can be assigned as a value to a variable

The ability to use functions as values is known as "First Class Functions".

In JavaScript we have "First Class Functions".

In JavaScript, functions are "First Class Citizens".

### 13.5 Arrow Functions

Ref: [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

---

#### #14 Callback Functions in JS ft. Event Listeners 🔥| Namaste JavaScript Ep. 14

Ref: [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

Ref: [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)

##### 14.1 What is a callback function in JavaScript?

Functions are first class citizens in JavaScript.
That means we can pass them as an argument into another function.
These are called callbacks.

[Callback Function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

Callbacks are used to write async operations.

##### 14.2 JavaScript is synchronous and single threaded language

##### 14.3 Blocking the main thread

JavaScript has only one callstack, which is also called main thread.
So if any operation/function blocks this callstack, that is known as blocking the main thread.

We can have a function in our script that may take longer to finish.
Because JavaScript is synchronous and single threaded language
such function will block the main thread.
For examle,
- calling an API (either 3rd party API or application API)
- IO operations like reading/writing from/to a file
- awaiting for user input, in case of user interaction
etc.

We should always use async operation for the things that takes time.
That way we won't block the main thread.

> Never block the main thread :)

##### 14.4 Power of callbacks

Callbacks allows us to write asynchronous code easily without blocking the main thread.

##### 14.5 Deep dive into Event Listeners

We can listen to different events of an HTML element and attach a listener to it.
A listener is basically a callback function.
So the callback listener function will be executed whenever an event occurs.

##### 14.6 Closures/Scope demo with Event Listeners

In the Chrome browser open Dev Tools.
Inspect an HTML element and then click on "Event Listeners" tab
to get a list of all the event listeners attached to this element.

##### 14.7 Garbage collection and removeEventListeners

Why do we need to remove Event Listeners?
In the large codebase a lot of people write code to remove Event Listeners.

This is because -
Event Listeners are heavy, takes a lot of memory space.
Even if the Call Stack is empty, application has to keep all of the Event Listeners in memory.
So if we are using a lot of Event Listeners on our page then we may run out of memory.
That is why it is important to remove Event Listeners when they are not required.

---

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
