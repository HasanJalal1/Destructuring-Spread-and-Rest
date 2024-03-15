function removeDuplicates(arr) {
    // Use a Set to store unique elements
    let uniqueSet = new Set(arr);

    // Convert the Set back to an array
    let uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Example usage:
let inputArray = [1, 2, 3, 4, 3, 2, 5, 6, 1];
let resultArray = removeDuplicates(inputArray);

console.log(resultArray);  // Output: [1, 2, 3, 4, 5, 6]