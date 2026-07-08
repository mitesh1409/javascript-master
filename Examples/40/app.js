/**
 * Write a program that creates a copy of an array without mutating the original.
 */
const numbers = [10, 20, 30, 40, 50];

const numbersCopy = [...numbers];
// const numbersCopy = numbers.slice();

console.log('numbers', numbers);
console.log('copy of numbers', numbersCopy);
console.log('numbers', numbers);
