/**
 * Use a for...in loop to iterate over an object and log its keys.
 */
const superhero = {
    name: 'Peter Parker',
    dob: '14-09-2005',
    aka: 'Spiderman',
    from: 'New York'
};

for (let key in superhero) {
    console.log(`${key}: ${superhero[key]}`);
}
