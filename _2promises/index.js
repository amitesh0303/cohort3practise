// Example 1: Basic Promise
const basicPromise = new Promise((resolve, reject) => {
    let success = true; // Change this to false to see the rejection case
    if (success) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

basicPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// Example 2: Promise with setTimeout
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Delayed promise resolved after 2 seconds!");
    }, 2000);
});

delayedPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

// Example 3: Chaining Promises
const chainedPromise = new Promise((resolve, reject) => {
    resolve(10);
});

chainedPromise
    .then((result) => {
        console.log(result); // 10
        return result * 2;
    })
    .then((result) => {
        console.log(result); // 20
        return result * 3;
    })
    .then((result) => {
        console.log(result); // 60
    })
    .catch((error) => {
        console.error(error);
    });

// Example 4: Promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log(values); // [3, 42, "foo"]
    });

// Example 5: Promise.race
const promiseA = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'A');
});
const promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'B');
});

Promise.race([promiseA, promiseB])
    .then((value) => {
        console.log(value); // "B" - the fastest promise
    });