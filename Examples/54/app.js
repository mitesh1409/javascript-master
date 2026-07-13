/**
 * Promise.allSettled() example
 */
const promiseOne = new Promise((resolve, reject) =>
    setTimeout(() => resolve('Resolved promiseOne :)'), 1000)
);

const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(() => reject('Rejected promiseTwo :('), 100)
);

const promiseThree = new Promise((resolve, reject) =>
    setTimeout(() => resolve('Resolved promiseThree :)'), 3000)
);

// // This will short circuit as soon as one of the promises is rejected, it does not wait for other promises to finish their execution.
// Promise.all([promiseOne, promiseTwo, promiseThree])
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Failed to resolve a Promise. Error!', err));

// This will not short circuit, it waits for all the promises to finish their execution regardless of their status (resolved/rejected).
Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then((data) => console.log('all promises settled!', data))
    .catch((err) => console.log('Failed to resolve a Promise. Error!', err));
