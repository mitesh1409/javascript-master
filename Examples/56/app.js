/**
 * Race Promises
 */
const aResolvedPromise = (item, delay) =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => resolve(item), delay
        )
    );

const aRejectedPromise = (item, delay) =>
    new Promise((resolve, reject) =>
        setTimeout(
            () => reject(item), delay
        )
    );

async function racePromises() {
    // // All the promises are resolved.
    // const promises = [
    //     aResolvedPromise('One', 1000),
    //     aResolvedPromise('Two', 2000),
    //     aResolvedPromise('Three', 3000)
    // ];

    // One of the promises is rejected.
    const promises = [
        aResolvedPromise('One', 1000),
        aRejectedPromise('Zero', 10),
        aResolvedPromise('Two', 2000),
        aResolvedPromise('Three', 3000)
    ];

    try {
        const result = await Promise.race(promises);
        return result;
    } catch (err) {
        console.log('Error: ', err);
        throw err;
    }
}

racePromises()
    .then((data) => console.log('racePromises resolved', data))
    .catch((err) => console.log('racePromises rejected', err))
    .finally(() => console.log('racePromises - finally'));

console.log('Last line...');
