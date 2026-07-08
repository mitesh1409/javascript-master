/**
 * Write a while loop that logs numbers from 1 to 100 divisible by 5.
 */
let number = 1;
while (number <= 100) {
    if (number % 5 === 0) {
        console.log(number);
    }
    number++;
}
