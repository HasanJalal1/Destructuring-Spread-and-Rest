function extractElements(arr) {
    // Use destructuring assignment to extract the first, second, and last elements
    const [first, second, ...rest] = arr.reverse();

    // Return an array with the extracted values
    return [first, second, rest.reverse()[0]];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = extractElements(inputArray);

console.log(resultArray);  