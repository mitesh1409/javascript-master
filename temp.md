# JavaScript Event Loop & Asynchronous Programming

https://www.youtube.com/watch?v=jzOy07fw2vY


Asynchronous Code

* Promises
* Observables (in Angular)
* Timers
* API Calls

---

Components/Parts of the Browser/JavaScript Runtime

* Call Stack
* Heap (Memory)
* Web APIs Environment
* Event Loop
* Queues
    - Microtask Queue
    - Task Queue

**Call Stack**  
Call Stack  --->  Main Thread  --->  Executes code synchronously (one function at a time)  
Call Stack executes synchronous code line by line, one instruction at a time.  

**Web APIs Environment**  
Functionalities provided by the Browser or JavaScript Runtime.  
They are not part of the JavaScript.  

For example,  

* Timers (setTimeout, setInterval)
* DOM Manipulation (DOM APIs)
* User Events (button click, form submission etc., Event APIs)
* Network Requests (fetch)
* Storing data in the Browser (Storage APIs)
* Geolocation APIs
* console.log
* URL
* Media & Canvas
* Web Sockets
* Web Workers

All of these Web APIs help JavaScript to connect with the external world and  
implement the required functionality in the JavaScript application.  

Again note that these Web APIs are not part of the JavaScript language.  

Since these Web APIs are provided by the Browser, we can directly use them  
into JavaScript code through window/global object.  

Geolocation API Example  

```javascript
navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.error(error)
);
```

**What goes into Microtask Queue?**  

* Promises - then, catch, finally callbacks
* Asynchronous functions executed using "await", async-await uses promises under the hood
* Mutation Observer
* queueMicrotask


Mutation Observer - it is the API provided by the Browser,  
that let you watch for changes in the DOM.  
And then it will run the callback function when those  
changes happen in the DOM.  

queueMicrotask - this is again one of the Web APIs provided  
by the JavaScript, and it will help you to run function as a  
microtask.  

**Starvation of a callback function**  

We have two types of queues - Callback/Task Queue & Microtask Queue.  

Microtask Queue has higher priority than the Callback/Task Queue,  
so Event Loop will process Microtask Queue first and then will move  
to Callback/Task Queue.  

Lets understand the following scenarios:  

Scenario #1  

Callbacks in the Microtask Queue can produce more callbacks  
that are pushed into the Microtask Queue.  
If it keeps happening then Callback/Task Queue will never get  
a chance to execute.  
This is starvation of callbacks in the Callback/Task Queue.  

Scenario #2  

We may have a function which is CPU intensive or taking very  
long time for execution.  
In this case callbacks in the Microtasks Queue, Callback/Task Queue  
will have to wait for a long time.  
This is starvation of callbacks in the Microtasks Queue, Callback/Task Queue.  
