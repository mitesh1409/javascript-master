// // Example #1

// function counter() {
//     let count = 0;

//     return function incrementCount() {
//         return count += 1;
//     }
// }

// let counterOne = counter();
// let counterTwo = counter();

// console.log(`counterOne ${counterOne()}`);
// console.log(`counterOne ${counterOne()}`);
// console.log(`counterOne ${counterOne()}`);
// console.log(`counterOne ${counterOne()}`);
// console.log(`counterOne ${counterOne()}`);

// console.log(`counterTwo ${counterTwo()}`);
// console.log(`counterTwo ${counterTwo()}`);
// console.log(`counterTwo ${counterTwo()}`);

// // Example #2

// function Counter(value = 0) {
//     this.value = value;

//     this.increment = function() {
//         this.value++;
//     };

//     this.decrement = function() {
//         if (this.value > 0) {
//             this.value--;
//         }
//     };

//     this.reset = function() {
//         this.value = 0;
//     };
// }

// const counterOne = new Counter();
// const counterTwo = new Counter();

// console.log('Counter #1');

// console.log(counterOne.value);

// counterOne.increment();
// counterOne.increment();
// counterOne.increment();

// console.log(counterOne.value);

// counterOne.decrement();
// counterOne.decrement();

// console.log(counterOne.value);

// counterOne.reset()

// console.log(counterOne.value);


// console.log('Counter #2');

// console.log(counterTwo.value);

// counterTwo.increment();
// counterTwo.increment();

// console.log(counterTwo.value);

// counterTwo.reset();

// console.log(counterTwo.value);
