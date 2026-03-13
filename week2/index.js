
// ==========================
// Hello World in the Browser
// ==========================

// Run JavaScript in the browser and print "Hello World"

console.log("Hello World!");

// ==========================
// Object Example
// ==========================

// Create an object representing a person and print the name property

const person = {
    name: "John",
    surname: "Doe",
    age: 25,
}

console.log(person.name);
console.log(person.surname);

// ==========================
// Destructuring Example
// ==========================

// Using destructuring extract the name from the previous object

const {name} = person;

console.log(name);

// ==========================
// Array Example
// ==========================

// Create an array of five numbers and print the second number

const numbers = [1, 2, 3, 4, 5];

console.log(numbers[1]);

// ==========================
// Filter Even Numbers
// ==========================

// Given an array, filter out even numbers using filter()

const randomNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = randomNumbers.filter((number)=> number%2 !== 0);

console.log(oddNumbers);

// ==========================
// Square Numbers
// ==========================

// Given an array, return a new array with squared numbers using map()

const anotherList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNumbers = anotherList.map((number) => number * number);

console.log(squaredNumbers);

// ==========================
// Find Maximum Number
// ==========================

// Given an array, find the maximum number using reduce()

const randomList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maximum = randomList.reduce((max, number) => max< number ? number : max);

console.log(maximum);

// ==========================
// Double Even Numbers
// ==========================

// Double all even numbers in an array using filter() and map()

const lastList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = lastList.filter((number)=> number%2 === 0);
const doubledNumbers = evenNumbers.map((number)=> number*2);

//Another way of writing the code
// const evenDoubledNumbers =lastList.filter((number)=> number%2 === 0).map((number)=> number*2);

console.log(doubledNumbers);


// ==========================
// Moment.js Example
// ==========================

// 1. Install moment using npm (run in terminal):
// npm install moment

// 2. Import moment in your script

const moment = require("moment");

// 3. Get the current date and time

const today=moment();

console.log(today.format("YYYY-MM-DD HH:mm:ss"));

// 4. Format a specific date

console.log(today.format("YYYY/MM/DD HH"));
