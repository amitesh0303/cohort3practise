// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favoriteColor="blue";
const heightinCm="154";
var likePizza=true;
console.log(favoriteColor);
console.log(heightinCm);
console.log(likePizza);

let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array

let summ = 10 + 5;          // Arithmetic operator
let isEqual = (10 === 10); // Comparison operator
let isTrue = (true && false); // Logical operator

// Function declaration
function greet(name) {
    return "Hello, " + name;
}

// Function call
let message = greet("John"); // "Hello, John"
// Assignment #1
// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?
function sumof2(n1,n2){
return n1+n2;
}

console.log(sumof2(2,'hello'));
// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    return age>18;
}

console.log(canVote(20));
console.log(canVote(17));

//if else
let age=21;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//for loop
for(let i=0;i<5;i++){
    console.log(i);
}
//while loop
let j=0;
while(j<5){
    console.log(j);
    j++;
}

// Assignment
// Write a function called sum that finds the sum from 1 to a number

function sum(number){
    let n=1;
    let sum=0;
    while(n!=number+1){
        sum+=n++;
    }
    return sum;
}

console.log(sum(10));