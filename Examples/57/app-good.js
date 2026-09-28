// Problem Statement
// From an array of circle radiuses, calculate area, circumference & diameter 
// for each circle.

// GOOD Code Example
// Functional Programming, SOLID, DRY, Higher Order Functions

const radiuses = [1, 2, 3, 4];

console.log('Circle Radiuses', radiuses);

function Circle(radius) {
    this.radius = radius;

    this.area = () => Math.PI * this.radius * this.radius;

    this.circumference = () => 2 * Math.PI * this.radius;

    this.diameter = () => 2 * this.radius;
}

const circle = new Circle(4);

const circles = radiuses.map(radius => new Circle(radius));

console.log(circles);
