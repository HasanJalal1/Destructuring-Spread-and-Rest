function extractNameAndStreet(person) {
    // Destructure the nested object to extract name and street properties
    const { address: { street }, name } = person;

    // Return an object with name and street properties
    return { name, street };
}

// Example usage:
const personObject = {
    name: "John Doe",
    address: {
        street: "123 Main Street",
        city: "Cityville",
        zip: "12345"
    }
};

const resultObject = extractNameAndStreet(personObject);

console.log(resultObject);
// Output: { name: 'John Doe', street: '123 Main Street' }