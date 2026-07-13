/**
 * Promise.all() example
 * 
 * Scenario #1 - All the promises are resolved.
 * Returns the result of all the resolved promises as an array.
 * 
 * Scenario #2 - One of the promises is rejected.
 * Returns the result (rejected value or an error) of rejected promise.
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

async function parallelPromises() {
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
        const result = await Promise.all(promises);
        return result.join();
    } catch (err) {
        console.log('Error: ', err);
        return err;
    }
}

parallelPromises()
    .then(
        (data) => console.log('parallelPromises output >>', data)
    );

console.log('Last line...');
