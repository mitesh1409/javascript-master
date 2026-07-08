/**
 * Sort an array of numbers in asceding order.
 */
const numbers = [60, 10, 30, 90, 50, 20, 40, 80, 70, 100];

console.log('original numbers', numbers);
console.log('numbers', numbers.sort());
console.log('numbers', numbers.sort((current, next) => current - next));
console.log('numbers', numbers.sort((current, next) => next - current));
console.log('original numbers', numbers);
