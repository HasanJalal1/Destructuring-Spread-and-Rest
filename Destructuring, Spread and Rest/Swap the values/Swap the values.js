function swapValues(x, y) {
    // Use destructuring assignment to swap values
    [x, y] = [y, x];

    // Return an array with swapped values
    return [x, y];
}

// Example usage:
let a = 5;
let b = 10;

let resultArray = swapValues(a, b);

// Values of a and b are now swapped
console.log(resultArray);  // Output: [10, 5]
console.log(a);  // Output: 10
console.log(b);  // Output: 5