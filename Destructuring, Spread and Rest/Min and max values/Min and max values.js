function findMaxMin(arr) {
    // Use the spread operator with Math.max and Math.min to find max and min values
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // Return an object with max and min properties
    return { max, min };
}

// Example usage:
const inputArray = [5, 2, 7, 1, 9];
const resultObject = findMaxMin(inputArray);

console.log(resultObject);  // Output: { max: 9, min: 1 }