/**
 * Write a for loop to reverse an array [1, 2, 3, 4, 5].
 */
const numbers = [1, 2, 3, 4, 5];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

console.log('numbers before', numbers);

for (let i = 0; i < Math.floor(numbers.length / 2); i++) {
    // Swap elements at i and (length - 1 - i) index.
    const item = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i];
    numbers[numbers.length - 1 - i] = item;
}

console.log('numbers after', numbers);
