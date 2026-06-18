/**
 * Declare a variable using const. Assign it some array values. Log the value and its type.
 * Now try to reassign the variable some other value. What happens? Why?
 */
const fifaGroupA = ['Argentina', 'Austria', 'Jordan', 'Algeria'];
console.log(`fifaGroupA: ${fifaGroupA}, type: ${typeof fifaGroupA}`);

fifaGroupA = ['Brazil', 'Germany', 'Spain', 'Italy']; // This will throw an error because you cannot reassign a const variable.
