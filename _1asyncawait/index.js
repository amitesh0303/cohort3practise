//Functions

//Sum of two numbers
function sum(a, b) {
    return a + b;
}

let a = 4;
let b = 5;
console.log(sum(a, b));

//Find sum of num from 1 to num
function sumtillN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let sum6 = sumtillN(10);
console.log(sum6);

//Synchronous Code
let l = sumtillN(15);
console.log(l);
let m = sumtillN(20);
console.log(m);
let n = sumtillN(25);
console.log(n);

const fs = require('fs');

const text = fs.readFileSync("a.txt", "utf-8");
console.log(text);

//Async

function run() {
    setTimeout(function () {
        console.log("Ran after 1 second")
    }, 1000);
    console.log("Hello from Run Function")
}

console.log(run());

function first() {
    console.log("First");
  }
  function second() {
    first();
    console.log("Second");
  }
  second();