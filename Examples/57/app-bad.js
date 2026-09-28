// Problem Statement
// From an array of circle radiuses, calculate area, circumference & diameter 
// for each circle.

// BAD Code Example
// No Functional Programming, No DRY, No Higher Order Functions

const radiuses = [1, 2, 3, 4];

console.log('Circle Radiuses', radiuses);

const calculateArea = function (radiuses) {
    const output = [];

    for (let i = 0; i < radiuses.length; i++) {
        output.push(Math.PI * radiuses[i] * radiuses[i]);
    }

    return output;
}

console.log('Circle Area', calculateArea(radiuses));

const calculateCircumference = function (radiuses) {
    const output = [];

    for (let i = 0; i < radiuses.length; i++) {
        output.push(2 * Math.PI * radiuses[i]);
    }

    return output;
}

console.log('Circle Circumference', calculateCircumference(radiuses));

const calculateDiameter = function (radiuses) {
    const output = [];

    for (let i = 0; i < radiuses.length; i++) {
        output.push(2 * radiuses[i]);
    }

    return output;
}

console.log('Circle Diameter', calculateDiameter(radiuses));
