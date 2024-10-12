// Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let favoriteColor = "blue";
const heightinCm = "154";
var likePizza = true;
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
function sumof2(n1, n2) {
    return n1 + n2;
}

console.log(sumof2(2, 'hello'));
// Assignment #2
// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
    return age > 18;
}

console.log(canVote(20));
console.log(canVote(17));

//if else
let age = 21;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//while loop
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

// Assignment
// Write a function called sum that finds the sum from 1 to a number

function sum(number) {
    let n = 1;
    let sum = 0;
    while (n != number + 1) {
        sum += n++;
    }
    return sum;
}

console.log(sum(10));

//Objects
let user = {
    name: "Amitesh",
    age: 24,
    gender: "male"
}


// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
    console.log('Hi ' + user.name + '!');
}
greet(user);

// Assignment #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet2(user) {
    console.log(`Hi ${user.name}.Your age is ${user.age}.Your gender is ${user.gender}.`)
}

greet2(user);
// Assignment #3
// Also tell the user if they are legal to vote or not
function greet3(user) {
    console.log(`Hi ${user.name}.Your age is ${user.age}.Your gender is ${user.gender}.`);
    console.log(`Your age to vote is ${user.age > 18}`);
}

greet3(user);

//Arrays
const users = ["harkirat", "raman", "diljeet"];
const tatalUsers = users.length;
const firstUser = users[0];

// Assignment
// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
const arrayofNums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function isEven(arr){
    const result=arr.filter(a=>a%2==0);
    console.log("Even Nums:")
    console.log(result);
}
console.log(isEven(arrayofNums))

//Array of Objects
const usersObject = [{
    name: "Harkirat",
    age: 21
}, {
    name: "raman",
    age: 22
}
]

const user1 = usersObject[0] ;
const user1Age = usersObject[0].age;

// Assignment
// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const usersList=[
    {
        name:'Amitesh',
        age:24,
        gender:"male"
    },
    {
        name:"Naveen",
        age:17,
        gender:"male"
    },
    {
        name:"Ishan",
        age:12,
        gender:"male"
    },{
        name:"Amar",
        age:"35",
        gender:"male"
    }
]

function theycanVote(users){
    let result=users.filter(user=>user.age>18);
    console.log("They can Vote:");
    console.log(result);
}

theycanVote(usersList);

//Object of Objects
const user2 = {
	name: "harkirat",
	age: 19,
	address: {
		city: "Delhi",
		country: "India",
		address: "1122 DLF"
	}
}

const city2 = user2.address.city;

//Assignment
// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male
function isLegalMale(users){
const result=users.filter(user=>user.age>18&&user.gender=="male")
console.log("Can Vote and are Male");
return result;
}

console.log(isLegalMale(usersList));