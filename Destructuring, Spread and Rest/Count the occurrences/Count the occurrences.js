function countWords(inputString) {
    // Split the input string into an array of words
    const wordsArray = inputString.split(' ');

    // Create a Map to store word counts
    const wordCountMap = new Map();

    // Iterate through the words array and count occurrences
    wordsArray.forEach(word => {
        // Convert the word to lowercase to ensure case-insensitivity
        const lowercaseWord = word.toLowerCase();

        // Update the count in the Map
        wordCountMap.set(lowercaseWord,
            (wordCountMap.get(lowercaseWord) || 0) + 1);
    });

    return wordCountMap;
}

// Example usage:
const inputText = "Hello world world hello";
const wordCounts = countWords(inputText);

// Output the word counts
wordCounts.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});