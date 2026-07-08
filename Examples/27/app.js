/**
 * Write a nested loop to print a (3 X 3) grid of number.
 */

// Reading and printing a grid of (3 X 3) numbers.
const numbersGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < numbersGrid.length; row++) {
    for (let col = 0; col < numbersGrid[row].length; col++) {
        console.log(numbersGrid[row][col]);
    }
}

// Printing a grid of (3 X 3) numbers.
const rows = 3;
const cols = 3;
let number = 1;

for (let row = 0; row < rows; row++) {
    let rowContent = '';
    for (let col = 0; col < cols; col++) {
        rowContent += `${number} `;
        number++;
    }
    console.log(rowContent);
}
