/**
 * Example #55: Sequential Promises Example
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

async function sequentialPromises() {
    try {
        // One of the promises is rejected.
        const output1 = await aResolvedPromise('One', 1000);   // first this
        const output2 = await aRejectedPromise('Two', 10);     // then this
        const output3 = await aResolvedPromise('Three', 3000); // then this?

        // // All the promises are resolved.
        // const output1 = await aResolvedPromise('One', 1000);   // first this
        // const output2 = await aResolvedPromise('Two', 2000);   // then this
        // const output3 = await aResolvedPromise('Three', 3000); // then this

        return `${output1}, ${output2}, ${output3}`;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}

sequentialPromises()
    .then((data) => console.log('sequentialPromises resolved', data))
    .catch((err) => console.log('sequentialPromises rejected', err))
    .finally(() => console.log('sequentialPromises - finally'));

console.log('Last line...');
